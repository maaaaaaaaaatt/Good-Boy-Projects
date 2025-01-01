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

