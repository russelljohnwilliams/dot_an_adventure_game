var gameWorld = {}
var dot = {
  name: "dot",
  page: "1",
  row: "row9",
  column: "_8",
  colour: "pink",
  prevColour: ""
};

window.onload = function(){
  buildWorld()
  var dotty =  $("#"+dot.row).find("#"+dot.column).attr('class', 'dotty empty-circle dot-can-move')
  moveDot()
  startIntro()
  // makePill(7, 11)
}



function moveDot(){
  var row = parseInt(dot.row.substring(3))
  var column = parseInt(dot.column.substring(1))
  document.onkeydown = function(event){
    switch (event.keyCode){
      case 37:
      if ($('#row' + row).find('#_'+(column - 1)).hasClass("dot-can-move")){ 
        column -= 1
      }
      break;
      case 38:
      if ($('#row' + (row - 1)).find('#_'+column).hasClass("dot-can-move")){
        row -= 1
      }
      break;
      case 39:
      if ($('#row' + row).find('#_'+(column + 1)).hasClass("dot-can-move")){
        column += 1
      }
      break;
      case 40:
      if ($('#row' + (row + 1)).find('#_'+column).hasClass("dot-can-move")){
        console.log('attr', $('#row' + (row + 1)).find('#_'+column).attr('class'))
        row += 1
      }
      break;
    }
    clearCurrentElement(dot.row, dot.column, dot.prevColour)
    move(column, row)
  };
}

function move(column, row){
  dot.column = '_'+column 
  dot.row = 'row'+row 
  var dotty = $('#row'+ row).find('#_' + column)
  var colour = dotty.css('background-color')
  dot.prevColour = colour
  dotty.addClass('dotty')
}

function clearCurrentElement(row, column, colour){
  $('#'+ row).find('#'+column).removeClass('dotty')
}

function buildWorld(){
  generateRows()
  generateCircles()
}

function generateRows(){
  for (i = 1; i < 11; i++) { 
    $('.the-world').append("<div id='row"+i+"' class='row'></div>")
  }
}

function generateCircles(int){
  for (i = 1; i < 21; i++) { 
    $('.row').append("<div id='_"+i+"' class='empty-circle dot-can-move'></div>")
  }
}



function startIntro(){
  $('#row8').find('.empty-circle').removeClass('dot-can-move')
}


function makePill(row, column){
  $("#row"+row).find("#_"+column).attr('class', 'empty-circle pill')
}









