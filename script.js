function submitDetails(){
    gameName= document.getElementById("gameName").value;
    age= document.getElementById("age").value;
     firebase.database().ref('/Users/'+GLOBAL_user.uid).update({
        "Game Name":gameName,
        "Age":age,
        "Display Name":GLOBAL_user.displayName,
        "Email":GLOBAL_user.email,
        "Game1 Score": 0,
        "Game2 Score":0

     })
}