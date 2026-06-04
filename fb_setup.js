const firebaseConfig = {
    apiKey: "AIzaSyBmGWUtIgfwy1O_olWLhgfVCpeCB9-e0ww",
    authDomain: "yuv-singh-12comp-project.firebaseapp.com",
    databaseURL: "https://yuv-singh-12comp-project-default-rtdb.firebaseio.com",
    projectId: "yuv-singh-12comp-project",
    storageBucket: "yuv-singh-12comp-project.firebasestorage.app",
    messagingSenderId: "126313859248",
    appId: "1:126313859248:web:c1285a469e534301a89375"
  };

   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 


  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
