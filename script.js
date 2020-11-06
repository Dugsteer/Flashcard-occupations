// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const mainpic = document.getElementById('mainpic');
const blue = window.matchMedia("(max-width: 800px)");


//switch introduction pic

const rocket = document.getElementById('rocket');
const spaceman = document.getElementById('spaceman');

function landShip(){
  rocket.classList.add('rocketMove');
  spaceman.classList.add('manMove');
  spaceship();
  mainpic.removeEventListener('click', landShip);
}



function spaceship(){
    const ship = new Audio("sounds/space-ship.wav");
    ship.play();
}

mainpic.addEventListener('click', landShip);

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

//Center the loader wherever the page is
function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
checkForTop();

//Manage the loader
function stopLoader() {loader.classList.add("stop");}
function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
setTimeout(stopLoader, 2000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);

//Change main pic

// setInterval(picChanger, 5000);
// picChanger();

// function picChanger(){
//   mainpic.innerHTML === '<img src="img/froggy.png" alt="decorative">' ? mainpic.innerHTML = '<img src="img/froggy2.png" alt="decorative">' :  mainpic.innerHTML ='<img src="img/froggy.png" alt="decorative">'
// }

//FLIP CARDS

const inner = document.getElementById('inner');

function flipMe(){
    inner.classList.toggle('turnMe');
}

//CHANGE CARDS
const count = document.getElementById('count');
let imageArt = document.getElementById('image-art');
let imageText = document.getElementById('image-text');

var imageList = [
  "actor.jpg",
  "artist.jpg",
  "astronaut.jpg",
  "builder.jpg",
  "chef.jpg",
  "dancer.jpg",
  "dentist.jpg",
  "diver.jpg",
  "doctor.jpg",
  "farmer.jpg",
  "firefighter.jpg",
  "footballer.jpg",
  "hairdresser.jpg",
  "mechanic.jpg",
  "model.jpg",
  "musician.jpg",
  "nurse.jpg",
  "photographer.jpg",
  "pilot.jpg",
  "police-officer.jpg",
  "reporter.jpg",
  "singer.jpg",
  "soldier.jpg",
  "taxi-driver.jpg",
  "teacher.jpg",
  "vet.jpg",
  "waiter.jpg"
];


let y = imageText.innerHTML;
let z = y.concat('.jpg');
let x = imageList.indexOf(z);

function goForwards() {
    if (x < imageList.length - 1) {
      x++;
      imageArt.src =  `/img/${imageList[x]}`;
     imageText.textContent = `${imageList[x].slice(0, -4)}`;
      count.innerHTML = `${x + 1}/${imageList.length}`;
      return x;
    } else {
      imageArt.src = ` /img/${imageList[imageList.length - 1]}`;
      imageText.textContent = `${imageList[imageList.length - 1].slice(0, -4)}`;
      count.innerHTML = `${imageList.length}/${imageList.length}`;
      x = 0;
      x = imageList.length -1;
      return x;
    }
  }
  
  function goBackwards() {
    if (x > 0) {
      x--;
      imageArt.src =  `/img/${imageList[x]}`;
      imageText.textContent = `${imageList[x].slice(0, -4)}`;
      count.innerHTML = `${x + 1}/${imageList.length}`;
      return x;
    } else {
      imageArt.src = ` /img/${imageList[0]}`;
      imageText.textContent = `${imageList[0].slice(0, -4)}`;
      count.innerHTML = `${1}/${imageList.length}`;
      x = 0;
      return x;
    }
  }
  
  goForwards();
  goBackwards();
  
  
  
