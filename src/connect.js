import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyA37dJRaGpYOTVb0SfGK7_atWtGNjqB67c',
    authDomain: 'oktorejjestobiad.firebaseapp.com',
    databaseURL: 'https://oktorejjestobiad.firebaseio.com',
    projectId: 'oktorejjestobiad',
    storageBucket: 'oktorejjestobiad.appspot.com',
    messagingSenderId: '913002641856'
};

firebase.initializeApp(config);

export default firebase;
