var mymap;
var all_routes=[];
var L;
var popup;
var polyline;
var layers_to_delete = 0;
var data=new Array();
var mark1;
var mark2;

var BA,CB,DC;
var AB = [[39.0404, -94.6705],[39.04265, -94.66486],[39.04782, -94.64657]]
var BC = [[39.04782, -94.64657],[39.04905, -94.64087],[39.05688, -94.62885],[39.06035, -94.6276],[39.06735, -94.62044],[39.07088, -94.61928],[39.07105, -94.61924],[39.07328, -94.61675],[39.07504, -94.611],[39.07614, -94.60456],[39.07581, -94.59962],[39.07684, -94.59658],[39.07957, -94.59426],[39.0916, -94.59078],[39.0932, -94.5908],[39.09536, -94.58977]]
var CD = [[39.09536, -94.58977],[39.09598, -94.58842],[39.09616, -94.5869],[39.09586, -94.57829],[39.09685, -94.57254],[39.09829, -94.57179]]
var AI = [[39.0404, -94.6705],[39.04605, -94.67812],[39.04799, -94.6788],[39.05252, -94.67915],[39.04825, -94.6788],[39.05252, -94.67897],[39.06212, -94.67932],[39.06525, -94.6794],[39.07058, -94.68018],[39.0901, -94.68052],[39.09769, -94.68],[39.10302, -94.67846],[39.10302, -94.67846]]
var IJ = [[39.10302, -94.67846],[39.09996, -94.66936],[39.09743, -94.66026],[39.0961, -94.64945]]
var BJ = [[39.04782, -94.64657],[39.05159, -94.64739],[39.05505, -94.64722],[39.06145, -94.6467],[39.06358, -94.64773],[39.06691, -94.65014],[39.07025, -94.65048],[39.07478, -94.65048],[39.08171, -94.64911],[39.0961, -94.64945]]
var JK = [[39.0961, -94.64945],[39.0929, -94.64224],[39.09157, -94.63297],[39.0921, -94.62816],[39.09596, -94.6249],[39.09956, -94.6225]]
var KL = [[39.09956, -94.6225],[39.10302, -94.62147],[39.10675, -94.62147],[39.10882, -94.62061],[39.11188, -94.61855],[39.11381, -94.61649]]
var LM = [[39.11381, -94.61649],[39.11085, -94.61125],[39.10965, -94.60958],[39.10842, -94.60589],[39.10709, -94.6013],[39.10689, -94.59555]]
var MC = [[39.10689, -94.59555],[39.10609, -94.59409],[39.10545, -94.59349],[39.10449, -94.5931],[39.10346, -94.59323],[39.10212, -94.59383],[39.10036, -94.594],[39.09859, -94.59293],[39.09703, -94.59143],[39.09536, -94.58977]]
var DE = [[39.09829, -94.57179],[39.10176, -94.57259],[39.10311, -94.57246],[39.10466, -94.57188],[39.10589, -94.57106],[39.10679, -94.57001]]
var ME = [[39.10689, -94.59555],[39.10655, -94.57872],[39.10657, -94.57402],[39.10679, -94.57001]]
var IO = [[39.10302, -94.67846],[39.10572, -94.68052],[39.10832, -94.68091],[39.10992, -94.68194],[39.11145, -94.68254],[39.11398, -94.68215],[39.11827, -94.68133],[39.12254, -94.67794],[39.12813, -94.67691],[39.13619, -94.67588],[39.13908, -94.67528],[39.14164, -94.67228],[39.14664, -94.66473],[39.14744, -94.65898],[39.1501, -94.65391],[39.15622, -94.64953],[39.16008, -94.64524],[39.16075, -94.63314],[39.16135, -94.63005],[39.16298, -94.62773],[39.16857, -94.62563],[39.17213, -94.62387]]
var OH = [[39.17213, -94.62387],[39.17599, -94.62245],[39.18304, -94.62185],[39.18575, -94.6211],[39.18801, -94.61932],[39.18972, -94.61739],[39.19082, -94.6152]]
var HG = [[39.19082, -94.6152],[39.19026, -94.61246],[39.18863, -94.60422],[39.18573, -94.59756],[39.1852, -94.59443],[39.18387, -94.59091]]
var GN = [[39.18387, -94.59091],[39.17765, -94.5943],[39.17269, -94.59456],[39.16913, -94.59469],[39.16684, -94.59404],[39.16397, -94.59065],[39.16111, -94.58967]]
var ON = [[39.17213, -94.62387],[39.17171, -94.62316],[39.16993, -94.61999],[39.16742, -94.61557],[39.1664, -94.61233],[39.16639, -94.60544],[39.16627, -94.60271],[39.16586, -94.60049],[39.16586, -94.60049],[39.16412, -94.595],[39.16238, -94.59192],[39.16158, -94.59065],[39.16111, -94.58967]]
var NM = [[39.16111, -94.58967],[39.15536, -94.58799],[39.15402, -94.58713],[39.12939, -94.58713],[39.1245, -94.58701],[39.1218, -94.58786],[39.11751, -94.59053],[39.11654, -94.59104],[39.11484, -94.59065],[39.11032, -94.58864],[39.10825, -94.58847],[39.10689, -94.59555]]
var KC = [[39.09956, -94.6225],[39.09949, -94.62009],[39.09916, -94.61864],[39.09883, -94.61679],[39.09896, -94.61413],[39.09906, -94.60778],[39.09883, -94.60434],[39.09823, -94.60125],[39.09713, -94.59735],[39.0966, -94.59447],[39.09633, -94.5925],[39.09536, -94.58977]]
var GF = [[39.18387, -94.59091],[39.18031, -94.59229],[39.17991, -94.59065],[39.18034, -94.58761],[39.18051, -94.58563],[39.17994, -94.58383],[39.17974, -94.58207],[39.17948, -94.57448],[39.17931, -94.57091],[39.17885, -94.56774],[39.17815, -94.56529],[39.17698, -94.56297],[39.17412, -94.55984],[39.17133, -94.55847]]
var FE = [[39.17133, -94.55847],[39.169, -94.55808],[39.16783, -94.55812],[39.16447, -94.55915],[39.16306, -94.55939],[39.16209, -94.55948],[39.14843, -94.55976],[39.14704, -94.55993],[39.14517, -94.5613],[39.13938, -94.56654],[39.138, -94.5675],[39.13053, -94.56799],[39.12871, -94.56808],[39.12698, -94.56769],[39.12194, -94.56508],[39.12011, -94.56443],[39.11161, -94.5649],[39.11022, -94.56563],[39.10942, -94.56636],[39.1081, -94.56806],[39.10685, -94.57005],[39.10679, -94.57001]]
BA=AB;
var check=DE;

CB=BC;
DC=CD;
IA=AI;
JI=IJ
JB=BJ;
KJ=JK;
LK=KL;
ML=LM;
CM=MC;
ED=DE;
EM=ME;
OI=IO;
HO=OH;
GH=HG;
NG=GN;
NO=ON;
MN=NM;
CK=KC;
FG=GF;
EF=FE;




function get_all_routes(routes)
{

    for(i=0;i<6;i++)
    data[i]=new Array();

	all_routes = new Array();
	all_routes = routes;

	var  i,j,counter;

	if(layers_to_delete!=0)
	remove_layer();
/*
	from(all_routes);*/

  for(i=0;i<all_routes.length;i++)
  {
     
     counter=all_routes[i].length;     
     data[i][0]=all_routes[i][counter-3];
     data[i][2]=all_routes[i][counter-2];
     data[i][1]=all_routes[i][counter-1];

  }

  callOthers();
  display_data();

}


// 0 - cost
// 1 - time
// 2 - distance

function display_data()
{
	document.getElementById("from_t").innerHTML = document.getElementById("st_input_box").value;
	document.getElementById("dest_t").innerHTML = document.getElementById("end_input_box").value;
}
function route_data(route_no,data_no,id_name)
{
	
		document.getElementById(id_name).innerHTML=data[route_no][data_no];
	
	
		
}

function callOthers()
{


	route_data(0,0,"rt_1_c");
	route_data(0,1,"rt_1_t");
	route_data(0,2,"rt_1_d");

	route_data(1,0,"rt_2_c");
	route_data(1,1,"rt_2_t");
	route_data(1,2,"rt_2_d");

	route_data(2,0,"rt_3_c");
	route_data(2,1,"rt_3_t");
	route_data(2,2,"rt_3_d");

	route_data(3,0,"rt_4_c");
	route_data(3,1,"rt_4_t");
	route_data(3,2,"rt_4_d");

	route_data(4,0,"rt_5_c");
	route_data(4,1,"rt_5_t");
	route_data(4,2,"rt_5_d");

	route_data(5,0,"rt_6_c");
	route_data(5,1,"rt_6_t");
	route_data(5,2,"rt_6_d");

	
}

// least time (0)
// least distance (1)
// least cost (2)
// best route 1 (3)
// best route 2 (4)
// best route 3 (5)
function route_array(route_no)
{
	Line(all_routes[route_no]);
	
	
}

	function Line(Polyline_array)
	{
		if(layers_to_delete!=0)
			remove_layer();

		polyline = new Array();

		for(var i=0;i<Polyline_array.length-3;i++)
			polyline[i] = L.polyline(window[Polyline_array[i]], {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);

		//mark1 = L.marker(window[Polyline_array[0]][0]).addTo(mymap);
		//mark1 = L.circle(window[Polyline_array[0]][0], 100).addTo(mymap);
		//mark2 = L.marker(window[Polyline_array[Polyline_array.length-4]][window[Polyline_array[Polyline_array.length-4]].length - 1]).addTo(mymap);

		layers_to_delete = Polyline_array.length-3;
		//mymap.fitBounds(polyline.getBounds());
		//mymap.fitBounds(polyline.getBounds());

	}


	/*function onMapClick(e) 
	{
    	popup
	    .setLatLng(e.latlng)
	    .setContent("You clicked the map at " + e.latlng.toString())
	    .openOn(mymap);

	    L.polyline(AB, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(BC, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(CD, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(AI, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(IJ, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(BJ, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(JK, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(KL, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(LM, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(MC, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(DE, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(ME, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(IO, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(OH, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(HG, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(GN, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(ON, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(NM, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(KC, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(GF, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);
	    L.polyline(FE, {color : 'red',smoothFactor : 1, weight : 7}).addTo(mymap);


	}*/

	function remove_layer()
	{
		for(var i=0;i<layers_to_delete;i++)
			mymap.removeLayer(polyline[i]);

		//mymap.removeLayer(mark1);
		//mymap.removeLayer(mark2);

	}

	
function loadmap()
{

	mymap = L.map('mapid').setView([39.092, -94.57], 13);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
	{
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'rchougule.0pe83l2d',
	    accessToken: 'pk.eyJ1IjoicmNob3VndWxlIiwiYSI6ImNpcjV2M3ptMzAwYTVnOG0xcGRxbjAyMmEifQ.GDLAuXtTHONGg2EDXEmR1g'
	}).addTo(mymap);

	popup = L.popup();
	mymap.on('click', onMapClick);

}
