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
  var day = new Date();

  var greet;

  if (hrs < 9 || day.getDay() == 0 || day.getDay() == 6)
    greet = ' CLOSED';
  else if (hrs >= 9 && hrs <= 16)
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

// Courtesy of Date controller
function copyrightDate() {
  document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
}

// Last Modified

function loadTime() {
  document.getElementById("timestamp").innerHTML = document.lastModified;
}

// Play Ball!

function playBall() {
  const toggleButton = document.getElementById('toggle-style-button');

  toggleButton.addEventListener('click', function () {
     const isGreen = document.body.style.backgroundColor === 'green';

     if (isGreen) {
        // Switch back to original colors
        document.body.style.backgroundColor = '#ffd900';
        document.body.style.color = 'black';
        document.querySelectorAll('a').forEach(link => {
           link.style.color = 'black';
        });
        document.querySelectorAll('table').forEach(table => {
              table.style.border = '1px solid black';
           });
           document.querySelectorAll('th, td').forEach(cell => {
              cell.style.border = '1px solid black';
           });

     } else {
        // Switch to green background and white text
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'white';
        document.querySelectorAll('a').forEach(link => {
           link.style.color = 'white';
           // Change table borders to white
           document.querySelectorAll('table').forEach(table => {
              table.style.border = '1px solid white';
           });
           document.querySelectorAll('th, td').forEach(cell => {
              cell.style.border = '1px solid white';
           });
        });
     }
  });

}
