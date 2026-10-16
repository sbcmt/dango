/* DANGO Firebase connection — public Web SDK configuration (not an admin credential). */
(function () {
  'use strict';
  const firebaseConfig = {
    apiKey: 'AIzaSyCMGDexDULfsdAJu4-7sKV-WIhiSfNSIg8',
    authDomain: 'dango-7e7e7.firebaseapp.com',
    databaseURL: 'https://dango-7e7e7-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'dango-7e7e7',
    storageBucket: 'dango-7e7e7.firebasestorage.app',
    messagingSenderId: '664489703445',
    appId: '1:664489703445:web:a836ab7608b28a196ef61c'
  };
  if (!window.firebase) { window.DangoFirebaseError = 'Firebase SDKを読み込めませんでした'; return; }
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  window.DangoFirebase = {
    app: firebase.app(),
    db: firebase.database(),
    async signIn() {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      if (firebase.auth().currentUser) return firebase.auth().currentUser;
      const result = await firebase.auth().signInAnonymously();
      return result.user;
    },
    serverTimestamp() { return firebase.database.ServerValue.TIMESTAMP; }
  };
})();
