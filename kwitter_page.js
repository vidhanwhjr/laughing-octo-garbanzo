var firebaseConfig = {
      apiKey: "AIzaSyBvuA399uARrmtXX794hnpGzSr-SxWE7y4",
      authDomain: "vidhantterr.firebaseapp.com",
      databaseURL: "https://vidhantterr-default-rtdb.firebaseio.com",
      projectId: "vidhantterr",
      storageBucket: "vidhantterr.appspot.com",
      messagingSenderId: "137631900919",
      appId: "1:137631900919:web:f8cd5e62a7c5374b885ff2"
    };
    firebase.initializeApp(firebaseConfig);
var user_name_storage = localStorage.getItem("user_name");
var room_no_storage = localStorage.getItem("room_no");
function getData() { firebase.database().ref("/"+room_no_storage).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         var mouse= message_data['message']; 
         var cat= message_data['name'];
         var eagle= message_data['like'];
         var name_with_tick= "<h4>" + cat + "<img class='user_tick' src='tick.png'> </h4>";
         var msg_with_tag = "<h4 class='message_h4'>" + mouse + "</h4>";
         var like_btn = "<button class='btn btn-warning' id=" + firebase_message_id + "value = " + eagle + "onclick = 'like_update(this.id)'>";
         var ffd = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + eagle + "</span> </button> <hr>";
         var row = name_with_tick + msg_with_tag + like_btn +  ffd;
         document.getElementById("output").innerHTML = row;
      } });  }); }
getData();
 function send(){
       var message = document.getElementById("msg").value;
       firebase.database().ref(room_no_storage).push({
            name : user_name_storage,
             message : message,
              like:0
       });
       document.getElementById("msg").value = "";
 }

 function logout(){
      localStorage.removeItem("room_no");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

function like_update(message_id){
      var moo = message_id;
      var cluck = document.getElementById(moo).value;
      var updated_likes= Number(cluck) +1;
      firebase.database().ref(room_no_storage).child(moo).update({
            like:updated_likes
      });
}