//YOUR FIREBASE LINKS

function getData() {
  firebase
    .database()
    .ref("/" + room_name)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code

          //End code
        }
      });
    });
}
getData();
function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("Username");
  window.location = "index.html";
}
user_name = localStorage.getItem("Username");
room_name = localStorage.getItem("room_name");
function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    message: msg,
    likes: 0,
    username: user_name,
  });
}
