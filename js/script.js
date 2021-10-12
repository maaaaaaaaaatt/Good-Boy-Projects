//Timestamp
function getTimeCurrentTime() {
   let time = new Date();
   return time.toLocaleString('en-US').split(',')[1];
}

function updateCurrentTime() {
   let timeNode = document.getElementById('time');
   timeNode.innerHTML = getTimeCurrentTime();
}

setInterval(updateCurrentTime, 1000);

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
 

