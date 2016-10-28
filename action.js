var teamList = [];

function playerTurn(team){
  var spaces = 0;
  var turn = true;
  if (confirm("Rest?") === false){
    var rolling = true;
    var firstRoll = true;
    while(rolling){
      if (firstRoll){
        rollAllActive(team);
        showRolls(team);
        spaces = countMatches(team);
        console.log("Spaces:",countMatches(team));
        firstRoll = false;
      }else {
        if(confirm("Roll again?")){
          team.biscuts -= 1;
          rollAllActive(team);
          showRolls(team);
          spaces = countMatches(team);
          console.log("Spaces:",countMatches(team));
        } else {
          rolling = false;
        }
      }
    }
  } else {
    if(team.position + spaces >= 150){
      team.position = 150;
      alert(team.name+" Wins!");
      return;
    } else {
      var spaceType = checkSpaceType(team.position);
      console.log(spaceType);
      if (spaceType == "trail"){
        team.biscuts += 2;
      } else {
        team.biscuts += 4;
        // Look for injured dogs
        for (i=0;i<team.dogs.length;i++){
          if (team.dogs[i].active === false){
            // Active first active dog found
            team.dogs[i].active = true;
            break;
          }
        }
      }
    }
    // Check that space is available
    var checkSpace = true;
    while(checkSpace){
      for (i=0;i<teamList.length;i++){
        if (teamList[i].name != team.name){
          if (teamList[i].position == team.position + spaces){
            spaces -= 1;
          }
        }
      }
      checkSpace = false;
    }
    team.position += spaces;
  }
}

function rollAllActive(team){
  for (i=0;i<team.dogs.length;i++){
    team.dogs[i].roll();
  }
}

function showRolls(team){
  for(i=0;i<team.dogs.length;i++){
    if (team.dogs[i].active){
      console.log(team.dogs[i].name,team.dogs[i].rollNum);
    }
  }
}

function countMatches(team){
  var numArray = [[],[],[],[],[],[]];

  for(i=0;i<team.dogs.length;i++){
    if (team.dogs[i].active){
      numArray[team.dogs[i].rollNum-1].push(team.dogs[i]);
    }
  }

  var numMatches = 1;

  for(i=0;i<numArray.length;i++){
    if(numArray[i].length > 1){
      var tempMatches = numArray[i].length;
      for(x=0;x<numArray[i].length;x++){
        if (numArray[i][x].name == "lead"){
          tempMatches += 1;
        }
      }
      if(tempMatches > numMatches){
        numMatches = tempMatches;
      }
    }
  }
  return numMatches;
}
