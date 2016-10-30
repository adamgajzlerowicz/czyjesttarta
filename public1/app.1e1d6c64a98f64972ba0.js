webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(1);

	var _react = __webpack_require__(159);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(164);

	var _reactRedux = __webpack_require__(179);

	var _reduxThunk = __webpack_require__(188);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _socket = __webpack_require__(189);

	var _socket2 = __webpack_require__(192);

	var _socket3 = _interopRequireDefault(_socket2);

	var _reducers = __webpack_require__(238);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _actions = __webpack_require__(276);

	var _App = __webpack_require__(277);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var socket = _socket3['default'].connect(window.location.hostname + ':3000');

	var store = (0, _redux.createStore)(_reducers2['default'], (0, _redux.applyMiddleware)(_reduxThunk2['default']));

	var mapStateToProps = function mapStateToProps(state) {
	    return state;
	};

	var mapDispatchToProps = function mapDispatchToProps() {
	    return {
	        onAdd: function () {
	            function onAdd() {
	                socket.emit('add');
	            }

	            return onAdd;
	        }(),
	        onSub: function () {
	            function onSub() {
	                socket.emit('sub');
	            }

	            return onSub;
	        }()
	    };
	};

	socket.on('state', function (state) {
	    store.dispatch((0, _actions.init)(state));
	});

	var AppWithStore = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_App.App);

	(0, _reactDom.render)(_react2['default'].createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2['default'].createElement(AppWithStore, null)
	), document.getElementById('app'));

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(239);

	var _assign2 = _interopRequireDefault(_assign);

	exports['default'] = reducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function reducers() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	        kawalki: 0,
	        isLoading: true
	    };
	    var action = arguments[1];

	    switch (action.type) {
	        case 'INIT':
	            return (0, _assign2['default'])({}, state, state.kawalki = action.value, state.isLoading = false);
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 276:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var add = exports.add = function add() {
	    return {
	        type: 'ADD'
	    };
	};
	var sub = exports.sub = function sub() {
	    return {
	        type: 'SUB'
	    };
	};
	var init = exports.init = function init(val) {
	    return {
	        type: 'INIT',
	        value: { kawalki: val }
	    };
	};

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.App = undefined;

	var _extends2 = __webpack_require__(278);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(279);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _reactDom = __webpack_require__(1);

	var _react = __webpack_require__(159);

	var _react2 = _interopRequireDefault(_react);

	var _Main = __webpack_require__(280);

	var _Obrazek = __webpack_require__(344);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var App = exports.App = function App(_ref) {
	    var onAdd = _ref.onAdd,
	        onSub = _ref.onSub,
	        props = (0, _objectWithoutProperties3['default'])(_ref, ['onAdd', 'onSub']);

	    return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_Main.Main, (0, _extends3['default'])({ onAdd: onAdd, onSub: onSub }, props)),
	        _react2['default'].createElement(_Obrazek.Obrazek, null)
	    );
	};

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Main = undefined;

	var _objectWithoutProperties2 = __webpack_require__(279);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _reactDom = __webpack_require__(1);

	var _react = __webpack_require__(159);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(281);

	var _radium2 = _interopRequireDefault(_radium);

	var _Bits = __webpack_require__(343);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var UnstyledMain = function UnstyledMain(_ref) {
	    var onAdd = _ref.onAdd,
	        onSub = _ref.onSub,
	        props = (0, _objectWithoutProperties3['default'])(_ref, ['onAdd', 'onSub']);

	    var state = props.kawalki;
	    var isLoading = props.isLoading;

	    var containerStyle = {
	        backgroundColor: 'rgb(14, 177, 210)',
	        display: 'flex',
	        flexDirection: 'row',
	        position: 'fixed',
	        top: 0,
	        right: 0,
	        bottom: 0,
	        left: 0,
	        width: '100%',
	        height: '100%'
	    };

	    var innerContainerStyle = {
	        margin: 'auto',
	        backgroundColor: '#342E37',
	        display: 'flex',
	        width: '95%',
	        height: '95%',
	        flexDirection: 'column',
	        justifyContent: 'space-around',
	        alignItems: 'center'
	    };

	    var clickStyle = {
	        padding: 20,
	        color: 'black',
	        fontSize: '70px'
	    };

	    var buttonsContainerStyle = {
	        display: isLoading ? 'none' : 'block'
	    };

	    var loaderStyle = {
	        display: !isLoading ? 'none' : 'block',
	        color: 'white',
	        fontSize: 25
	    };

	    var transitionsPositive = {
	        transition: '1s ease-out',
	        ':hover': {
	            animation: 'x 3s ease 0s infinite',
	            color: '#DAEFB3'
	        }
	    };

	    var transitionsNegative = {
	        transition: '1s ease-out',
	        ':hover': {
	            animation: 'x 3s ease 0s infinite',
	            color: '#EF3E36'
	        }
	    };

	    return _react2['default'].createElement(
	        'div',
	        { style: containerStyle },
	        _react2['default'].createElement(
	            'div',
	            { style: innerContainerStyle },
	            _react2['default'].createElement(_Bits.Result, { state: state, isLoading: isLoading }),
	            _react2['default'].createElement(
	                'div',
	                { style: buttonsContainerStyle },
	                _react2['default'].createElement(
	                    'a',
	                    { key: 1, href: '#', style: [clickStyle, transitionsNegative], onClick: function () {
	                            function onClick() {
	                                onSub();
	                            }

	                            return onClick;
	                        }() },
	                    '-'
	                ),
	                _react2['default'].createElement(
	                    'span',
	                    { key: 2, style: clickStyle },
	                    state
	                ),
	                _react2['default'].createElement(
	                    'a',
	                    { href: '#', style: [clickStyle, transitionsPositive], onClick: function () {
	                            function onClick() {
	                                onAdd();
	                            }

	                            return onClick;
	                        }() },
	                    '+'
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { style: loaderStyle, key: 3 },
	                '...loading'
	            )
	        )
	    );
	};

	var Main = exports.Main = (0, _radium2['default'])(UnstyledMain);

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Result = undefined;

	var _reactDom = __webpack_require__(1);

	var _react = __webpack_require__(159);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var Result = exports.Result = function Result(_ref) {
	    var state = _ref.state,
	        isLoading = _ref.isLoading;

	    var resultStyle = {
	        color: state === 0 ? '#EF3E36' : '#DAEFB3',
	        display: isLoading ? 'none' : 'block'
	    };

	    var pStyle = {
	        fontSize: '85px',
	        margin: 0,
	        padding: '5px'
	    };

	    return _react2['default'].createElement(
	        'div',
	        { style: resultStyle },
	        _react2['default'].createElement(
	            'p',
	            { style: pStyle },
	            state ? "Jest tarta :)" : "Nie ma tarty :("
	        )
	    );
	};

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Obrazek = undefined;

	var _reactDom = __webpack_require__(1);

	var _react = __webpack_require__(159);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var tlo = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../template/tarta.jpg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var Obrazek = exports.Obrazek = function Obrazek() {
	    var style = {
	        position: 'absolute',
	        bottom: '20px',
	        right: '20px',
	        width: '200px',
	        height: '200px',
	        backgroundImage: 'url(' + tlo + ')',
	        backgroundSize: 'cover'
	    };
	    return _react2['default'].createElement('div', { style: style });
	};

/***/ }

});