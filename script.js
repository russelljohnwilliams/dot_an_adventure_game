var gameWorld = {}
var dot = {
  name: "dot",
  page: "1",
  row: "row5",
  column: "_4",
  colour: "pink",
  prevColour: ""
};

window.onload = function(){
  buildWorld()
  var dotty =  $("#"+dot.row).find("#"+dot.column).attr('class', 'dotty empty-circle')
  moveDot()
  startIntro()
  makePill(7, 11)

}

function moveDot(){
  var row = parseInt(dot.row.substring(3))
  var column = parseInt(dot.column.substring(1))
  document.onkeydown = function(event){
    switch (event.keyCode){
      case 37:
      if ($('#row' + (row)).find('#_'+(column - 1)).css('background-color') != "rgb(0, 0, 0)"){ 
        column -= 1
      }
      break;
      case 38:
      if ($('#row' + (row - 1)).find('#_'+column).css('background-color') != "rgb(0, 0, 0)"  ){
        row -= 1
      }
      break;
      case 39:
      if ($('#row' + (row)).find('#_'+(column + 1)).css('background-color') != "rgb(0, 0, 0)"){
        column += 1
      }
      break;
      case 40:
      if ($('#row' + (row + 1)).find('#_'+column).css('background-color') != "rgb(0, 0, 0)"){
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
  dotty.attr('class', 'dotty empty-circle')
}

function clearCurrentElement(row, column, colour){
  $('#'+ row).find('#'+column).removeAttr('class').attr('class', 'empty-circle')
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
    $('.row').append("<div id='_"+i+"' class='empty-circle'></div>")
  }
}



function startIntro(){
  for (i = 1; i < 11; i++) { 
  // $('#row'+i).find('.empty-circle').css('background-color', 'skyblue')
}
  // $('#row10').find('.empty-circle').css('background-color', '#2f402f')
  // $('#row10').find('.empty-circle').css('background-color', '#2f402f')
}


function makePill(row, column){
  $("#row"+row).find("#_"+column).attr('class', 'empty-circle pill')
}









