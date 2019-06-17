var gameWorld = {}
var dot = {
  name: "dot",
  page: "1",
  row: "two",
  column: "_2",
  colour: "pink"
};
// var ground = {
//   row: "1"
//   colour: "green"
// } 

window.onload = function(){
  var dotty = document.getElementById(dot.column)
  dotty.style.background = dot.colour
  console.log("colour", document.getElementById('one'))
  document.onkeydown = function(event) {
    switch (event.keyCode) {
     case 37:
     move('left')
     break;
     case 38:
     console.log('Up key pressed');
     break;
     case 39:
     move('right')
     break;
     case 40:
     console.log('Down key pressed');
     break;
   }
 };
}


function move(direction){
  var dotty = $('#'+dot.column)
  var id = dotty.attr('id')
  var int = parseInt(id.substr(1))
  if (direction == 'left'){ 
    var moveTo = int - 1 
  }else if (direction == 'right'){
    var moveTo = int + 1 
  }
  clearCurrentElement(dotty, 'white')
  moveDot("_" + moveTo)
}

function clearCurrentElement(element, colour){
  console.log('elem', element)
  $(element).css('background', colour)
}


function moveDot(location){
  dot.column = location 
  $('#' + location).css('background', 'pink')
}














