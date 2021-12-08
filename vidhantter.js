function login(){
    var usernamename = document.getElementById("user_name_input").value;

    localStorage.setItem("user_name", usernamename);

    window.location = "kwitter_room.html";
}