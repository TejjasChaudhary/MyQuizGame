class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    console.log(gameState);

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

     //write code to change the background color here
    background("pink");
    //write code to show a heading for showing the result of Quiz
    text("result", 400, 300 );

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    console.log(allContestants);
    //write condition to check if contestantInfor is not undefined
    if(allContestants != undefined){
      var Yposition = 325;

      for(var plr in allContestants){
       var ans = "2";
        if (ans == allContestants[plr].answer){
          fill("green");

          }

          else{
            fill("red");
          }

          text(allContestants[plr].name,400,Yposition);
          Yposition += 50;
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

 }
}
