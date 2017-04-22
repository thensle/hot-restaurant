 $(document).ready(function(){
 	function callAPI() {
        // creates URL as per giphy API documenation
        var queryURL = 'http://localhost:8080/api/tables/reserve';
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(result) {
            renderHTML(result);
        });
    };

    callAPI();
 });
 
 function renderHTML(result){
 	for(var i = 0; i < result.length; i++){
 		var newRow = $('<tr>');
 		newRow.append('<td>' + result[i].id + '</td>');
	    newRow.append('<td>' + result[i].name_first + '</td>');
	    newRow.append('<td>' + result[i].name_last + '</td>');
	    newRow.append('<td>' + result[i].phone + '</td>');
	    newRow.append('<td>' + result[i].reservation_time + '</td>');
	    newRow.append('<td>' + result[i].party + '</td>');
	    $(".reservations-table").append(newRow);
 	};
 };
	