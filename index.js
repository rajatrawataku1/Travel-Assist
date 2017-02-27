function sendData()
{
	var settings = 
	{
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:8081/",
	  "method": "POST",
	  "headers": 
      {
	    "from": $("#st_input_box").val(),
	    "to": $("#end_input_box").val(),
	    "transport":$("#trans_input_box").val(),
	    "day":$("#date_input_box").val(),
	    "time":$("#time_input_box").val(),
	    "content-type": "application/x-www-form-urlencoded"
	   }
  }

	$.ajax(settings).done(function (response) 
	{
	 
	  var all_routes = new Array();
	  all_routes = response;	

	  for(var i=0;i<all_routes.length;i++)
	  	console.log("Route : "+i+" : "+all_routes[i]);

	  get_all_routes(all_routes);												// function preset in front_node.js

	});


}
