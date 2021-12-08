// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBvuA399uARrmtXX794hnpGzSr-SxWE7y4",
      authDomain: "vidhantterr.firebaseapp.com",
      databaseURL: "https://vidhantterr-default-rtdb.firebaseio.com",
      projectId: "vidhantterr",
      storageBucket: "vidhantterr.appspot.com",
      messagingSenderId: "137631900919",
      appId: "1:137631900919:web:f8cd5e62a7c5374b885ff2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var User_name_storage = localStorage.getItem("user_name");
document.getElementById("Welcome_display").innerHTML = "Welcome" + User_name_storage;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       var row = "<div class='room_name' id="+Room_names+" onclick = 'idk(this.id)'>#"+Room_names+"</div> <hr>"
       document.getElementById("room_display").innerHTML += row;
      });});}
getData();
function addrom(){
    var room_number = document.getElementById("room_input").value;
    firebase.database().ref("/").child(room_number).update({
          purpose:"Created_new_room"
    });
    localStorage.setItem("room_no", room_number);
    window.location = "kwitter_page.html";
}

function idk(rn){
   localStorage.setItem("room_no", rn);
   window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_no");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}