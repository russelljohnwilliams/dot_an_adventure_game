var gameWorld = {}
var dot = {
  name: "dot",
  page: "1",
  row: "row4",
  column: "_2",
  colour: "pink"
};

window.onload = function(){
  buildWorld()
  console.log("we have life!!!", dot.colour)
  var dotty =  $("#"+dot.row).find("#"+dot.column).css('background', dot.colour)
  document.onkeydown = function(event) {
    switch (event.keyCode) {
     case 37:
     moveDot('left')
     break;
     case 38:
     moveDot('up')
     break;
     case 39:
     moveDot('right')
     break;
     case 40:
     moveDot('down')
     break;
   }
 };
}

function buildWorld(){
  generateRows()
  generateCircles()
}

function generateRows(){
  for (i = 1; i < 7; i++) { 
    $('body').append("<div id='row"+i+"' class='row'></div>")
  }
}

function generateCircles(int){
  for (i = 1; i < 16; i++) { 
    $('.row').append("<div id='_"+i+"' class='empty-circle'></div>")
  }
}

function moveDot(direction){
  var row = parseInt(dot.row.substring(3))
  var column = parseInt(dot.column.substring(1))
  if (direction == 'left'){ 
    clearCurrentElement(row, column, 'white')
    column -= 1
  }else if (direction == 'right'){
    clearCurrentElement(row, column, 'white')
    column += 1
  }else if (direction == 'up'){
    clearCurrentElement(row, column, 'white')
    row -= 1
  }else if (direction == 'down'){
    clearCurrentElement(row, column, 'white')
    row += 1
  }
  var horizontal = '_' + column
  var vertical = 'row' + row
  
  move(horizontal, vertical)
}

function clearCurrentElement(row, column, colour){
  $('#row'+ row).find('#_'+column).css('background', colour)
}

function move(horizontal, vertical){
  dot.column = horizontal 
  dot.row = vertical 
  console.log($('#'+ vertical))
  $('#'+ vertical).find('#' + horizontal).css('background', 'pink')
}














