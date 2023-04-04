const firebaseConfig = {
    apiKey: "AIzaSyB5wIcwLUR1FD-BSOi3m-KYpn8Xs3bavnw",
    authDomain: "disneyplus-clone-73704.firebaseapp.com",
    projectId: "disneyplus-clone-73704",
    storageBucket: "disneyplus-clone-73704.appspot.com",
    messagingSenderId: "612107754785",
    appId: "1:612107754785:web:2ca4b872aef9d6650ff260",
    measurementId: "G-HC52PWVL0L"
  };

  const firebaseApp = firebase.initalizeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;