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
 

