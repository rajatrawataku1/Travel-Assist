var express = require('express'),
	cors = require('cors');
var app = express();

var fs = require("fs");
var pat;
var paths=[];
var path=[];
var arr_to_send=[];
var m=0;
var p=0;
var j=0;
var values=[];
var source;
var destin;

var day;
var time_input;
var fuel_price;
var kmpl;
var calories;
var transport;

var traffic;

var traffic_car=[

                {"avg_speed":33.0},
                {"avg_speed":25.0},
                {"avg_speed":19.0},
                {"avg_speed":14.0},
                {"avg_speed":28.0},
                {"avg_speed":21.0},
                {"avg_speed":16.0},
                {"avg_speed":35.0}
                
                ]

var traffic_bike=[

                {"avg_speed":40.0},
                {"avg_speed":34.50},
                {"avg_speed":29.0},
                {"avg_speed":20.0},
                {"avg_speed":37.50},
                {"avg_speed":31.0},
                {"avg_speed":27.50},
                {"avg_speed":44.50}

                 ]

var traffic_walk=[

                {"avg_speed":5.0},
                {"avg_speed":5.0},
                {"avg_speed":5.0},
                {"avg_speed":5.0},
                {"avg_speed":5.0},
                {"avg_speed":5.0},
                {"avg_speed":5.0},
                {"avg_speed":5.0}

                 ]


// A=Cunnigham Heights,Kansas City,USA
// B=Argentina,Kansas City,USA
// C=Westside North,Kansas City,USA
// I=Coronado,Kansas City,USA
// J=Kensinton,Kansas City,USA
// K=Riverview,Kansas City,USA
// D=Forest Avenue,Kansas City,USA
// L=North 4th Street,Kansas City,USA
// M=U.S.24,Kansas City,USA
// E=Troost Avenue & Interstate,Kansas City,USA
// N=BriarCliff,Kansas City,USA
// O=Riverside,MO,Kansas City,USA
// H=Bree Hills,Kansas City,USA
// G=LakeView Terrace,Kansas City,USA
// F=Antioch Acres,Kansas City,USA

app.use(cors());

app.post('/',function(req,res)
{
	var find = require("./build/Release/addon.node");

  day= req.headers.day;
  time_input=req.headers.time;



if(req.headers.transport=="Car")
{

    traffic=traffic_car;
     fuel_price=54.30;
     kmpl=10.5;
}
else
if(req.headers.transport=="Bike")
{

    traffic=traffic_bike;
     fuel_price=69.74;
     kmpl=44;

}
else
if(req.headers.transport=="Walk")
{

    traffic=traffic_walk;
     fuel_pric=500;
     kmpl=5.0;

}


  // data set with there names coressponding to t00heir name real list




if(req.headers.from=="Cunnigham Heights,Kansas City,USA")
   {
      source=0;
   }
else
  if(req.headers.from=="Argentina,Kansas City,USA")
   {
      source=1;
   }
else
  if(req.headers.from=="Westside North,Kansas City,USA")
   {
      source=2;
   }
else
  if(req.headers.from=="Kensinton,Kansas City,USA")
   {
      source=9;
   }
else
  if(req.headers.from=="Coronado,Kansas City,USA")
   {
      source=8;
   }
else
  if(req.headers.from=="Riverview,Kansas City,USA")
   {
      source=10;
   }
else
  if(req.headers.from=="Forest Avenue,Kansas City,USA")
   {
      source=3;
   }
else
  if(req.headers.from=="North 4th Street,Kansas City,USA")
   {
      source=11;
   }
else
  if(req.headers.from=="U.S.24,Kansas City,USA")
   {
      source=12;
   }
else
  if(req.headers.from=="Troost Avenue & Interstate,Kansas City,USA")
   {
      source=4;
   }
else
  if(req.headers.from=="Briar Cliff,Kansas City,USA")
   {
      source=13;
   }
else
  if(req.headers.from=="Riverside,MO,Kansas City,USA")
   {
      source=14;
   }
else
  if(req.headers.from=="Bree Hills,Kansas City,USA")
   {
      source=7;
   }
else
  if(req.headers.from=="LakeView Terrace,Kansas City,USA")
   {
      source=6;
   }
else
  if(req.headers.from=="Antioch Acres,Kansas City,USA")
   {
      source=5;
   }
   

if(req.headers.to=="Cunnigham Heights,Kansas City,USA")
   {
      destin=0;
   }
else
  if(req.headers.to=="Argentina,Kansas City,USA")
   {
      destin=1;
   }
else
  if(req.headers.to=="Westside North,Kansas City,USA")
   {
      destin=2;
   }
else
  if(req.headers.to=="Kensinton,Kansas City,USA")
   {
      destin=9;
   }
else
  if(req.headers.to=="Coronado,Kansas City,USA")
   {
      destin=8;
   }
else
  if(req.headers.to=="Riverview,Kansas City,USA")
   {
      destin=10;
   }
else
  if(req.headers.to=="Forest Avenue,Kansas City,USA")
   {
      destin=3;
   }
else
  if(req.headers.to=="North 4th Street,Kansas City,USA")
   {
      destin=11;
   }
else
  if(req.headers.to=="U.S.24,Kansas City,USA")
   {
      destin=12;
   }
else
  if(req.headers.to=="Troost Avenue & Interstate,Kansas City,USA")
   {
      destin=4;
   }
else
  if(req.headers.to=="Briar Cliff,Kansas City,USA")
   {
      destin=13;
   }
else
  if(req.headers.to=="Riverside,MO,Kansas City,USA")
   {
      destin=14;
   }
else
  if(req.headers.to=="Bree Hills,Kansas City,USA")
   {
      destin=7;
   }
else
  if(req.headers.to=="LakeView Terrace,Kansas City,USA")
   {
      destin=6;
   }
else
  if(req.headers.to=="Antioch Acres,Kansas City,USA")
   {
      destin=5;
   }  

setTimeout(function()
{
  find.add(Number(source),Number(destin));

  file_read();

  var delay=15; //5 millisecond

  setTimeout(function() 
  {
    //your code to be executed after 5 milli-second

    var res4 = further_read();
    console.log("res4 distance : "+res4[0][0].distance)

    res.send(res4);

  }, delay);

},20)
	
 
});

var ch;
function file_read()
{

  fs.readFile('file.txt', function (err, data) 
  {
    
     if (err) 
     {
         return console.error(err);
     }

  ch=data.toString();


  });

}


function further_read()
{
  m=0;
  p=0;
  j=0;
   
  var res3;

  for(var i=0;i<ch.length;i++)
  {
  	if(ch[i]=='\n')
  		m++;
  }

  path=new Array();

  for(var k=0;k<m;k++)
  {
  	path[k]=new Array();
  }

  for(var i=0;i<ch.length;i++)
  { 	

  if(ch[i]!='\n')
  	{
 			if(ch[i]!=' ')
 				{
 					path[p][j]=ch[i];
 					j++;
 				}
 		}
 	else
 		{
 			j=0;
 			p++;
  			
 		}
  }

  res3 = store_paths();

  //console.log("res3 = "+res3);

return res3;

}

  //storing the paths in proper way in paths-2-d array


function store_paths()
{
   

  paths=new Array();
   for(var i=0;i<path.length;i++)
   {
   	paths[i]=new Array();
   }

   //console.log(path[0].length);

   var b=0;
   var c=0;

   for(var k=0;k<m;k++)
   {
   		c=0;
      for(var j=0;j<path[k].length-1;j=j+2)
   		{
   			paths[b][c]=path[k][j]+path[k][j+1];
   			c++;
   		}

   		b++;
   }

   var res2;
   res2 = kachra();

   //console.log("res2 = "+res2);

   return res2;
}


function kachra()
{
 

//returning the speed according to the time period given as input by the user

  function speedmon(time_period)
  {
     if(time_period>=0&&time_period<5)
        return traffic[0].avg_speed;

      else if(time_period>=5&&time_period<7)
        return traffic[4].avg_speed;

      else if(time_period>=7&&time_period<9)
        return traffic[3].avg_speed;

      else if(time_period>=9&&time_period<13)
        return traffic[5].avg_speed;

      else if(time_period>=13&&time_period<17)
        return traffic[4].avg_speed;

      else if(time_period>=17&&time_period<22)
        return traffic[3].avg_speed;

      else if(time_period>=22&&time_period<24)
        return traffic[5].avg_speed;    

  }

    function speedtue(time_period)
  {
    if(time_period>=0&&time_period<5)
      return traffic[0].avg_speed;

    else if(time_period>=5&&time_period<7)
      return traffic[4].avg_speed;

    else if(time_period>=7&&time_period<9)
      return traffic[3].avg_speed;

    else if(time_period>=9&&time_period<13)
      return traffic[5].avg_speed;

    else if(time_period>=13&&time_period<17)
      return traffic[4].avg_speed;

    else if(time_period>=17&&time_period<22)
      return traffic[6].avg_speed;

    else if(time_period>=22&&time_period<24)
      return traffic[0].avg_speed;
  }

  function speedwed(time_period)
  {
         if(time_period>=0&&time_period<5)
      return traffic[0].avg_speed;

    else if(time_period>=5&&time_period<7)
      return traffic[4].avg_speed;

    else if(time_period>=7&&time_period<9)
      return traffic[3].avg_speed;

    else if(time_period>=9&&time_period<13)
      return traffic[4].avg_speed;

    else if(time_period>=13&&time_period<17)
      return traffic[1].avg_speed;

    else if(time_period>=17&&time_period<22)
      return traffic[2].avg_speed;

    else if(time_period>=22&&time_period<24)
      return traffic[4].avg_speed;

  }

  function speedthr(time_period)
  {
            if(time_period>=0&&time_period<5)
      return traffic[7].avg_speed;

    else if(time_period>=5&&time_period<7)
      return traffic[0].avg_speed;

    else if(time_period>=7&&time_period<9)
      return traffic[1].avg_speed;

    else if(time_period>=9&&time_period<13)
      return traffic[1].avg_speed;

    else if(time_period>=13&&time_period<17)
      return traffic[4].avg_speed;

    else if(time_period>=17&&time_period<22)
      return traffic[3].avg_speed;

    else if(time_period>=22&&time_period<24)
      return traffic[2].avg_speed;
    
  }


function speedfri(time_period)
  {
            if(time_period>=0&&time_period<5)
      return traffic[0].avg_speed;

    else if(time_period>=5&&time_period<7)
      return traffic[4].avg_speed;

    else if(time_period>=7&&time_period<9)
      return traffic[3].avg_speed;

    else if(time_period>=9&&time_period<13)
      return traffic[5].avg_speed;

    else if(time_period>=13&&time_period<17)
      return traffic[5].avg_speed;

    else if(time_period>=17&&time_period<22)
      return traffic[6].avg_speed;

    else if(time_period>=22&&time_period<24)
      return traffic[1].avg_speed;
    
  }

function speedsat(time_period)
  {
            if(time_period>=0&&time_period<5)
      return traffic[0].avg_speed;

    else if(time_period>=5&&time_period<7)
      return traffic[4].avg_speed;

    else if(time_period>=7&&time_period<9)
      return traffic[5].avg_speed;

    else if(time_period>=9&&time_period<13)
      return traffic[5].avg_speed;

    else if(time_period>=13&&time_period<17)
      return traffic[4].avg_speed;

    else if(time_period>=17&&time_period<22)
      return traffic[3].avg_speed;

    else if(time_period>=22&&time_period<24)
      return traffic[1].avg_speed;
    
  }

function speedsun(time_period)
  {
            if(time_period>=0&&time_period<5)
      return traffic[0].avg_speed;

    else if(time_period>=5&&time_period<7)
      return traffic[0].avg_speed;

    else if(time_period>=7&&time_period<9)
      return traffic[4].avg_speed;

    else if(time_period>=9&&time_period<13)
      return traffic[4].avg_speed;

    else if(time_period>=13&&time_period<17)
      return traffic[1].avg_speed;

    else if(time_period>=17&&time_period<22)
      return traffic[3].avg_speed;

    else if(time_period>=22&&time_period<24)
      return traffic[3].avg_speed;
    
  }

//var time=function(speed_t,,)


// all the details of the individual paths
  var sub_paths=[ AB={
              "start_pt":'A',
              "end_pt":'B',
              "distance":3.4,
              "condition":1.2,
              
            },
            BC={
              "start_pt":'B',
              "end_pt":'C',
              "distance":8.5,
              "condition":1.2

            },
            CD={
              "start_pt":'C',
              "end_pt":'D',
              "distance":1.6,
              "condition":0.5

            },
            DE={
              "start_pt":'D',
              "end_pt":'E',
              "distance":1.1,
              "condition":0.9

            },
            EF={
              "start_pt":'E',
              "end_pt":'F',
              "distance":8.2,
              "condition":0.9

            },
            FG={
              "start_pt":'F',
              "end_pt":'G',
              "distance":3.5,
              "condition":1.2

            },
            GH={
              "start_pt":'G',
              "end_pt":'H',
              "distance":2.0,
              "condition":0.9

            },
            HO={
              "start_pt":'H',
              "end_pt":'O',
              "distance":2.2,
              "condition":1.2

            },
            ON={
              "start_pt":'O',
              "end_pt":'N',
              "distance":3.2,
              "condition":0.9

            },
            MN={
              "start_pt":'M',
              "end_pt":'N',
              "distance":6.0,
              "condition":1.2

            },
            BJ={
              "start_pt":'B',
              "end_pt":'J',
              "distance":6.5,
              "condition":0.5

            },
            AI={
              "start_pt":'A',
              "end_pt":'I',
              "distance":6.9,
              "condition":0.5

            },
            KC={
              "start_pt":'K',
              "end_pt":'C',
              "distance":2.8,
              "condition":1.2

            },
            GN={
              "start_pt":'G',
              "end_pt":'N',
              "distance":2.6,
              "condition":0.9

            },
            OI={
              "start_pt":'O',
              "end_pt":'I',
              "distance":5.0,
              "condition":1.2

            },
            IJ={
              "start_pt":'I',
              "end_pt":'J',
              "distance":3.3,
              "condition":0.5

            },
            JK={
              "start_pt":'J',
              "end_pt":'K',
              "distance":3.6,
              "condition":0.5

            },
            KL={
              "start_pt":'K',
              "end_pt":'L',
              "distance":1.6,
              "condition":0.9

            },
            LM={
              "start_pt":'L',
              "end_pt":'M',
              "distance":3.0,
              "condition":0.9

            },
            MC={
              "start_pt":'M',
              "end_pt":'C',
              "distance":1.6,
              "condition":1.2

            },
            ME={
              "start_pt":'M',
              "end_pt":'E',
              "distance":1.9,
              "condition":0.5

            },
            BA={
              "start_pt":'B',
              "end_pt":'A',
              "distance":3.4,
              "condition":1.2,
              
            },
            CB={
              "start_pt":'C',
              "end_pt":'B',
              "distance":8.5,
              "condition":1.2

            },
            DC={
              "start_pt":'D',
              "end_pt":'C',
              "distance":1.6,
              "condition":0.5

            },
            ED={
              "start_pt":'E',
              "end_pt":'D',
              "distance":1.1,
              "condition":0.9

            },
            FE={
              "start_pt":'F',
              "end_pt":'E',
              "distance":8.2,
              "condition":0.9

            },
            GF={
              "start_pt":'G',
              "end_pt":'F',
              "distance":3.5,
              "condition":1.2

            },
            HG={
              "start_pt":'H',
              "end_pt":'G',
              "distance":2.0,
              "condition":0.9

            },
            OH={
              "start_pt":'O',
              "end_pt":'H',
              "distance":2.2,
              "condition":1.2

            },
            NO={
              "start_pt":'N',
              "end_pt":'O',
              "distance":3.2,
              "condition":0.9

            },
            NM={
              "start_pt":'N',
              "end_pt":'M',
              "distance":6.0,
              "condition":1.2

            },
            JB={
              "start_pt":'J',
              "end_pt":'B',
              "distance":6.5,
              "condition":0.5

            },
            IA={
              "start_pt":'I',
              "end_pt":'A',
              "distance":6.9,
              "condition":0.5

            },
            CK={
              "start_pt":'C',
              "end_pt":'K',
              "distance":2.8,
              "condition":1.2

            },
            NG={
              "start_pt":'N',
              "end_pt":'G',
              "distance":2.6,
              "condition":0.9

            },
            IO={
              "start_pt":'I',
              "end_pt":'O',
              "distance":5.0,
              "condition":1.2

            },
            JI={
              "start_pt":'J',
              "end_pt":'I',
              "distance":3.3,
              "condition":0.5

            },
            KJ={
              "start_pt":'K',
              "end_pt":'J',
              "distance":3.6,
              "condition":0.5

            },
            LK={
              "start_pt":'L',
              "end_pt":'K',
              "distance":1.6,
              "condition":0.9

            },
            ML={
              "start_pt":'M',
              "end_pt":'L',
              "distance":3.0,
              "condition":0.9

            },
            CM={
              "start_pt":'C',
              "end_pt":'M',
              "distance":1.6,
              "condition":1.2

            },
            EM={
              "start_pt":'E',
              "end_pt":'M',
              "distance":1.9,
              "condition":0.5

            }
            ];

   console.log("sub path ka dist : "+CM.distance);

  
    if(day=="Sunday")
     {
        for(var x=0;x<sub_paths.length;x++)
       {

        sub_paths[x]["time"]=Math.round((sub_paths[x].distance/(speedsun(time_input)- sub_paths[x].condition))*60);
        sub_paths[x]["cost"]=Math.ceil(sub_paths[x].distance*fuel_price/kmpl);

       }

    }    
    else
    if(day=="Monday")
    {
      for(var x=0;x<sub_paths.length;x++)
       {

        sub_paths[x]["time"]=Math.round((sub_paths[x].distance/(speedmon(time_input)- sub_paths[x].condition))*60);
        sub_paths[x]["cost"]=Math.ceil(sub_paths[x].distance*fuel_price/kmpl);

       }
       
    }
    else
    if(day=="Tuesday")
    {
       for(var x=0;x<sub_paths.length;x++)
       {

        sub_paths[x]["time"]=Math.round((sub_paths[x].distance/(speedtue(time_input)- sub_paths[x].condition))*60);
        sub_paths[x]["cost"]=Math.ceil(sub_paths[x].distance*fuel_price/kmpl);

       }
       
    }     
    else
    if(day=="Wednesday")
    {
         for(var x=0;x<sub_paths.length;x++)
       {

        sub_paths[x]["time"]=Math.round((sub_paths[x].distance/(speedwed(time_input)- sub_paths[x].condition))*60);
        sub_paths[x]["cost"]=Math.ceil(sub_paths[x].distance*fuel_price/kmpl);

      }

    }
    else
    if(day=="Thursday")
    {
         for(var x=0;x<sub_paths.length;x++)
       {

        sub_paths[x]["time"]=Math.round((sub_paths[x].distance/(speedthr(time_input)- sub_paths[x].condition))*60);
        sub_paths[x]["cost"]=Math.ceil(sub_paths[x].distance*fuel_price/kmpl);

      }

    }
    else
    if(day=="Friday")
    {
         for(var x=0;x<sub_paths.length;x++)
       {

        sub_paths[x]["time"]=Math.round((sub_paths[x].distance/(speedfri(time_input)- sub_paths[x].condition))*60);
        sub_paths[x]["cost"]=Math.ceil(sub_paths[x].distance*fuel_price/kmpl);

      }

    }
    else
    if(day=="Saturday")
    {
         for(var x=0;x<sub_paths.length;x++)
       {

        sub_paths[x]["time"]=Math.round((sub_paths[x].distance/(speedsat(time_input)- sub_paths[x].condition))*60);
        sub_paths[x]["cost"]=Math.ceil(sub_paths[x].distance*fuel_price/kmpl);

      }

    }


  values=new Array();

  for(var i=0;i<m;i++)
    values[i]=new Array();

  var cost_v=0,time_v=0,distance_v=0,index_v=1;

  for(var i=0;i<m;i++)
  {
    cost_v=0;
    time_v=0;
    distance_v=0;

    for(var j=0;j<paths[i].length;j++)
    {
      for(var k=0;k<sub_paths.length;k++)
      {
        var key=sub_paths[k].start_pt+sub_paths[k].end_pt

        if(paths[i][j]==key)
        {
          //console.log("hello.. you are inside the third loop")
          cost_v+=sub_paths[k].cost;
          time_v+=sub_paths[k].time;
          distance_v+=sub_paths[k].distance;

        }
      }
    }
    values[i][1]=time_v;
    values[i][2]=distance_v.toPrecision(3);
    values[i][3]=cost_v;
    values[i][0]=index_v++;

  }

  var len;
 
  for(i=0;i<paths.length;i++)
  {
    len=paths[i].length;
    paths[i][len]=values[i][1];
    paths[i][len+1]=values[i][2];
    paths[i][len+2]=values[i][3];
  }


  console.log(values);

  var least_time=values[0][1]
  var least_distance=values[0][2]
  var least_cost=values[0][3]

  var lt=0,ld=0,lc=0;

  for(var i=0;i<m;i++)
  {
    if(values[i][1]<least_time)
    {
      least_time=values[i][1];
      lt=i;

    }

    if(values[i][2]<least_distance)
    {
      least_distance=values[i][2];
      ld=i;
      
    }

    if(values[i][3]<least_cost)
    {
      least_cost=values[i][3];
      lc=i;
    }

  }

  console.log("Least time vala")
  console.log(paths[lt]);

  console.log("Least cost vala")
  console.log(paths[lc]);

  console.log("Least distance vala")
  console.log(paths[ld]);

  var values_t=values.slice(0);
  var values_c=values.slice(0);

  values_c.sort(function(a,b) 
  {
  if (a[3] == b[3])
    return 0;
  return a[3] < b[3] ? -1 : 1;
  });

  values_t.sort(function(a,b) 
  {
  if (a[1] == b[1])
    return 0;
  return a[1] < b[1] ? -1 : 1;
  });

  var optm=new Array();

  for(var i=0;i<m;i++)
  {
    for(var j=0;j<m;j++)
    {
      if(values_c[i][0]==values_t[j][0])
      {
        optm[i+j]=values_c[i][0];
      }
    }
  }

  var final_index=[];
  var r=0;

  for(var i=0;i<m;i++)
    { 
      
      if(optm[i]>0)
      {
          final_index[r]=i;
          r++;
          
          if(r==3)
            break;
      }
    }


  console.log("\n1st Best Route to Travel  : ",paths[optm[final_index[0]]-1]);
  console.log("\n2nd Best Route to Travel  : ",paths[optm[final_index[1]]-1]);
  console.log("\n3rd Best Route to Travel  : ",paths[optm[final_index[2]]-1]);

  arr_to_send = new Array();

  for(var i=0;i<6;i++)
  {
    arr_to_send[i] = new Array();
  }

  arr_to_send[0] = paths[lt];    
  console.log("paths ka distance : " + paths[lt][0]); 

  /*getdata(paths[lt][0]) ;

  function getdata(data)
  {
    console.log(data.distance);
  }     */
  arr_to_send[0] = paths[lt];                       //Least Time
  arr_to_send[1] = paths[lc];                       //Least Cost
  arr_to_send[2] = paths[ld];                       //Least Distance
  arr_to_send[3] = paths[optm[final_index[0]]-1];   //1st Best
  arr_to_send[4] = paths[optm[final_index[1]]-1];   //2nd Best
  arr_to_send[5] = paths[optm[final_index[2]]-1];   //3rd Best

  return arr_to_send;

}

app.listen(8081);




