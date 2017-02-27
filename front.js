function remove_slide()
	{

		document.getElementById("slideshow").className="animated fadeOut";

		document.getElementById("slideshow").style.display="none";
		document.getElementById("get_started").className="animated fadeOutLeft z-depth-2";


		var delay=300
		setTimeout(function()
		{
			document.getElementById("src_des").style.display="block";
			document.getElementById("mapid").style.display="block";
/*			document.getElementById("left_bar").style.display="block";
*/			document.getElementById("src_des").className="animated fadeInRight z-depth-2";
			document.getElementById("mapid").className="animated fadeInRight z-depth-2";
/*			document.getElementById("left_bar").className="animated bounceInLeft z-depth-2";
*/
		},delay);

	}

	function not_to_load()
	{
		document.getElementById("src_des").style.display="none";
		document.getElementById("mapid").style.display="none";
		document.getElementById("left_bar").style.display="none";
		document.getElementById("suggsn").style.display="none";
		document.getElementById("back_image").style.display="none";
		document.getElementById("login").style.display="none";
		document.getElementById("first_bar").style.display="none";
		document.getElementById("sec_bar").style.display="none";
		document.getElementById("loginame").style.display="none";
		document.getElementById("get_started").style.display="none";
		document.getElementById("starting_window").style.display="none";
		document.getElementById("slideshow").style.display="none";
		
			
	}

		function field_empty()
	{
		if(document.getElementById("st_input_box").value!=""&&document.getElementById("end_input_box").value!=""&&document.getElementById("st_input_box").value!=document.getElementById("end_input_box").value)
		{
			search();
			sendData();
		}
	}

	function load_left_bar()
	{

		if(document.getElementById("left_bar").style.left == "-15%")
		{	
			document.getElementById("left_bar").style.left = "0%";
		}
		else
		{
			document.getElementById("left_bar").style.left = "-15%";

		}


	}

	
	function load_search()
	{
		document.getElementById("suggsn").className="animated fadeOutRight";
		document.getElementById("src_des_layer").className="animated fadeInLeft";
		document.getElementByClassName("cost").innerHTML="";
		document.getElementByClassName("time").innerHTML="";
		document.getElementByClassName("dist").innerHTML="";

	}

	function search()
	{
		
		document.getElementById("src_des_layer").className="animated fadeOutLeft";
		document.getElementById("suggsn").style.display="block";
		document.getElementById("suggsn").className="animated fadeInRight";
		
	}