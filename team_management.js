function createTeam(teamName,teamColor){
  //Create basic team
  var team = {
    name:teamName,
    color:teamColor,
    position:0,
    biscuts:5,
    hikes:2,
    dogs:[
      {name:"lead",active:true,rollNum:null,roll:diceRoll},
      {name:"wheel1",active:true,rollNum:null,roll:diceRoll},
      {name:"wheel2",active:true,rollNum:null,roll:diceRoll},
      {name:"wheel3",active:true,rollNum:null,roll:diceRoll},
      {name:"wheel4",active:true,rollNum:null,roll:diceRoll},
      {name:"wheel5",active:true,rollNum:null,roll:diceRoll},
      {name:"wheel6",active:true,rollNum:null,roll:diceRoll},
    ]
  };
  //Add team to team list
  teamList.push(team);
  return team;
}

function diceRoll(){
  if (this.active){
    this.rollNum = Math.floor(Math.random() * 6) + 1;
  }
}

function rollAllActive(team){
  for (i=0;i<team.dogs.length;i++){
    team.dogs[i].roll();
  }
}
