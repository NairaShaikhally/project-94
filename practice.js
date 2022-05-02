var firebaseConfig = {
    apiKey: "AIzaSyC0Q6GtyFAYIVsDEvgBWCQ1y1S0Pivohnk",
    authDomain: "practice-activity-a9b90.firebaseapp.com",
    databaseURL: "https://practice-activity-a9b90-default-rtdb.firebaseio.com",
    projectId: "practice-activity-a9b90",
    storageBucket: "practice-activity-a9b90.appspot.com",
    messagingSenderId: "107338351486",
    appId: "1:107338351486:web:5a9a426f7a0b70afc8a92f"
  };
  

firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user",
        food:"sushi"
    })
}