$(document).ready(function() {

var size = 70;
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

$("#erase").click(function(){
	$(".cell").css("background-color", "#FFFFFF");
});

//default coloring
$( ".cell" ).hover(
  function() {
    $( this ).addClass( "color" );
 });

// selected colors
$("#red").click(function(){
	$( ".cell" ).hover(
  		function() {
    	$( this ).css("background-color", "#ffb3ba" );
	})
});

$("#orange").click(function(){
	$( ".cell" ).hover(
  		function() {
    	$( this ).css("background-color", "#ffdfba" );
	})
});
$("#yellow").click(function(){
	$( ".cell" ).hover(
  		function() {
    	$( this ).css("background-color", "#ffffba" );
	})
});

$("#green").click(function(){
	$( ".cell" ).hover(
  		function() {
    	$( this ).css("background-color", "#baffc9" );
	})
});

$("#blue").click(function(){
	$( ".cell" ).hover(
  		function() {
    	$( this ).css("background-color", "#bae1ff" );
	})
});

$("#purple").click(function(){
	$( ".cell" ).hover(
  		function() {
    	$( this ).css("background-color", "#babdff" );
	})
});

});
