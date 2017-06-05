$(document).ready(function() {

var size = 40;
var $row = $("<div />", {
    class: 'row'
});
var $cell = $("<div />", {
    class: 'cell'
});

function render(){
    for (var i = 0; i < size; i++) {
        $row.append($cell.clone());
    }
    for (var j = 0; j < size; j++) {
        $("#pad").append($row.clone());
    }
}

render();

$( ".cell" ).hover(
  function() {
    $( this ).addClass( "color" );
  });
});
