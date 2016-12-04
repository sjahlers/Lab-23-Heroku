// script.js, any js file that might perform AJAX operations
var quote = '';
$.get('/api/onequote', function(data){
quote = data;
console.log(quote);
$('.quote').append('<p id = "saying">' + '"' + quote + '"' + '</p>');
});

$('#newquote').on('click', function () {
	$.get('/api/onequote', function(data){
	quote = data;
	$('#saying').text('"' + quote + '"');
	});
});



