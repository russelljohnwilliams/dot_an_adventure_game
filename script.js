var gameWorld = {}
var dot = {
  name: "dot",
  page: "1",
  row: "row4",
  column: "_2",
  colour: "pink"
};
// var ground = {
//   row: "1"
//   colour: "green"
// } 

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

// function moveUpOrDown(direction){
//   var dotty = $('#row4 #'+dot.column)
//   console.log('updown', dotty)
//   var id = dotty.parent().attr('id')
//   console.log('ID', parseInt(id.substr(3))-1)
//   var int = parseInt(id.substr(3))
//   if (direction == 'up'){ 
//     var moveTo = int - 1 
//   }else if (direction == 'down'){
//     var moveTo = int + 1 
//   }
//   clearCurrentElement(dotty, 'white')
//   moveDot("row" + moveTo)
// }

// function moveLeftOrRight(direction){
//   var dotty = $('#row4 #'+dot.column)
//   console.log('leftRight', dotty)
//   var id = dotty.attr('id')
//   console.log('ID', id)
//   var int = parseInt(id.substr(1))
//   if (direction == 'left'){ 
//     var moveTo = int - 1 
//   }else if (direction == 'right'){
//     var moveTo = int + 1 
//   }
//   clearCurrentElement(dotty, 'white')
//   moveDot("_" + moveTo)
// }

function moveDot(direction){
  var row = parseInt(dot.row.substring(3))
  var column = parseInt(dot.column.substring(1))
  if (direction == 'left'){ 
    var horizontal = '_' + (column - 1)
    var vertical = 'row' + row
  }else if (direction == 'right'){
    var horizontal = '_' + (column + 1)
    var vertical = 'row' + row
  }else if (direction == 'up'){
    var horizontal = '_' + column
    var vertical = 'row' + (row - 1)
  }else if (direction == 'down'){
    var horizontal = '_' + column
    var vertical = 'row' + (row + 1)
  }
    clearCurrentElement(row, column, 'white')
    move(horizontal, vertical)
}

function clearCurrentElement(row, column, colour){
// console.log('row', row)
// console.log('column', column)
// console.log($('#row'+ row).find('#_'+column))
  $('#row'+ row).find('#_'+column).css('background', colour)
}

function move(horizontal, vertical){
  dot.column = horizontal 
  dot.row = vertical 
  console.log($('#'+ vertical))
  $('#'+ vertical).find('#' + horizontal).css('background', 'pink')
}














