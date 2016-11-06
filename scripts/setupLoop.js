$( document ).ready(function() {

  $("#myModal").modal();
  var btn = document.getElementById("addTeam");
  btn.onclick = function(){
    addTeam();
  };

  function addTeam(){
    var table = document.getElementById("musherTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var musherName = document.getElementById("musherName").value;
    var musherColor = document.getElementById("musherColor").value;
    cell1.innerHTML = musherName;
    cell2.bgColor = musherColor;
    cell2.cellPadding = "60%";

    createTeam(musherName,musherColor);

    document.getElementById("musherName").value ="" ;
    document.getElementById("musherColor").value = "";
  }

});
