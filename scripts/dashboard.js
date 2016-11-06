function changeSvgColorById(svgId,color){
  document.getElementById(svgId).contentDocument.getElementsByTagName("svg")["svg2"].getElementsByTagName('path')[0].style["fill"] = color;
}

function changeDogStatus(dog,color){
  if(dog.active){
    document.getElementById(dog.name).data = "images/active_husky.svg";
    changeSvgColorById(dog.name,color);
  } else {
    document.getElementById(dog.name).data = "images/inactive_husky.svg";
  }
}
