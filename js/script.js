//Timestamp
function getTimeCurrentTime() {
   let time = new Date();
   return time.toLocaleString('en-US').split(',')[1];
}

function updateCurrentTime() {
   let timeNode = document.getElementById('time');
   timeNode.innerHTML = getTimeCurrentTime();
   officeHours();
}

setInterval(updateCurrentTime, 1000);

function officeHours() {
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 9)
      greet = ' CLOSED';
  else if (hrs >= 9 && hrs <= 17)
      greet = ' OPEN';
  else if (hrs >= 17 && hrs <= 24)
      greet = 'CLOSED';

      document.getElementById('officehours').innerHTML = greet;
}


//Weather
	async function fetchData() {

		const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=Atlanta&APPID=ea6ad50f9ceadd89f4bb64fce0f1f9aa`)
		.then(res => res.json())

		// pulling temperature and weather conditions from JSON
		const description = res.weather[0].description
		const temperature = Math.round(res.main.temp)
		document.getElementById('description').innerHTML = description;
		document.getElementById('temperature').innerHTML = temperature;
	}

	fetchData()


//Expand
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */


function openProjects() {
   document.getElementById("projectsbar").style.width = "75%";
   document.getElementById("projectsbar").style.overflowY = "scroll";
   document.getElementById("barlabel").style.transform = "rotate(180deg)";
   document.getElementById("closebtn").style.display = "inherit";
 }
 
 /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
 function closeProjects() {
   document.getElementById("projectsbar").style.width = "3%";
   document.getElementById("projectsbar").style.overflowY = "hidden";
   document.getElementById("barlabel").style.transform = "rotate(0deg)";
   document.getElementById("closebtn").style.display = "none";
 }
 

// Show Info Card
function toggle_info_card(id) {
   var divelement = document.getElementById(id);
   if(divelement.style.display == 'none')
     divelement.style.display = 'block';
   else
     divelement.style.display = 'none';
 }

 // Office Hours
 