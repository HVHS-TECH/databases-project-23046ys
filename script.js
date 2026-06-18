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

function fb_readHighscores(){
   console.log("Reading Scores")
   firebase.database().ref('/Users/').orderByValue().on('value', fb_displayHighscores, fb_readError);
}

function fb_displayHighscores(snapshot){
   var dbData = snapshot.val();

   const SCORES_ONE = document.getElementById("Game1Scores")
   const SCORES_TWO = document.getElementById("Game2Scores")

   if (dbData == null) { 
        console.log('There was no record when trying to read the message');
        
    }else{
      SCORES_ONE.innerHTML = "<p></p>"; 
      SCORES_TWO.innerHTML = "<p></p>"; 
       snapshot.forEach(fb_showScores)
    }

}

function fb_showScores(child){
   const SCORES_ONE = document.getElementById("Game1Scores")
   const SCORES_TWO = document.getElementById("Game2Scores")

   var gameOneScore = child.val()["Game1 Score"];
   var gameTwoScore = child.val()["Game2 Score"];
   
   var gameName = child.val()["Game Name"];

   SCORES_ONE.innerHTML += "<p>"+gameName+": "+gameOneScore+"</p>";
   SCORES_TWO.innerHTML += "<p>"+gameName+": "+gameTwoScore+"</p>";
}


fb_readHighscores()