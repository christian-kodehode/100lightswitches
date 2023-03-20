let lightSwitchContainer = document.getElementById("light-switch-container");

let divCounter = 1;
let toggleCirclesCounter = 1;
let toggleColumnsCounter = 1;
let personCounter = 0;

while (divCounter < 101) {
  let lightSwitch = document.createElement("div");
  lightSwitch.id = "switch-" + divCounter;
  lightSwitch.className = "light-switch";
  lightSwitch.innerText = `${divCounter}`;
  lightSwitch.style.backgroundColor = "red";
  lightSwitchContainer.appendChild(lightSwitch);
  divCounter++;
}

divCounter = 1;

function removeCircles() {
  while (lightSwitchContainer.childElementCount > 0) {
    lightSwitchContainer.removeChild(lightSwitchContainer.firstChild);
  }
}

function toggleCircles() {
  personCounter = 0;
  let counterDOM = document.getElementById("counter");
  counterDOM.innerText = `${personCounter}`;
  if (toggleCirclesCounter % 2 === 1) {
    removeCircles();
    oneThousandDivs();
    toggleCirclesCounter++;
    divCounter = 1;
    let flip1000 = document.getElementById("flip1000");
    flip1000.disabled = false;
    personCounter = 0;
  } else {
    removeCircles();
    oneHundredDivs();
    toggleCirclesCounter++;
    divCounter = 1;
    let flip1000 = document.getElementById("flip1000");
    flip1000.disabled = true;
    personCounter = 0;
  }
}

function toggleColumns() {
  if (toggleColumnsCounter % 2 === 1) {
    for (let i = 1; i < lightSwitchContainer.childElementCount + 1; i++) {
      let lightSwitch = document.getElementById("switch-" + i);
      lightSwitch.className = "light-switch-2";
    }
    toggleColumnsCounter++;
  } else {
    for (let i = 1; i < lightSwitchContainer.childElementCount + 1; i++) {
      let lightSwitch = document.getElementById("switch-" + i);
      lightSwitch.className = "light-switch";
    }
    toggleColumnsCounter++;
  }
}

function oneHundredDivs() {
  if (toggleColumnsCounter % 2 === 1) {
    className = "light-switch";
  } else {
    className = "light-switch-2";
  }
  while (divCounter < 101) {
    let lightSwitch = document.createElement("div");
    lightSwitch.id = "switch-" + divCounter;
    lightSwitch.className = className;
    lightSwitch.innerText = `${divCounter}`;
    lightSwitch.style.backgroundColor = "red";
    lightSwitchContainer.appendChild(lightSwitch);
    divCounter++;
  }
}

function oneThousandDivs() {
  if (toggleColumnsCounter % 2 === 1) {
    className = "light-switch";
  } else {
    className = "light-switch-2";
  }
  while (divCounter < 1001) {
    let lightSwitch = document.createElement("div");
    lightSwitch.id = "switch-" + divCounter;
    lightSwitch.className = className;
    lightSwitch.innerText = `${divCounter}`;
    lightSwitch.style.backgroundColor = "red";
    lightSwitchContainer.appendChild(lightSwitch);
    divCounter++;
  }
}

function flipOnce() {
  personCounter++;
  let counterDOM = document.getElementById("counter");
  counterDOM.innerText = `${personCounter}`;
  let divs = lightSwitchContainer.childElementCount;
  for (let i = personCounter; i < divs + 1; i += personCounter) {
    let lightSwitch = document.getElementById("switch-" + i);
    if (lightSwitch.style.backgroundColor === "red") {
      lightSwitch.style.backgroundColor = "green";
    } else if (lightSwitch.style.backgroundColor === "green") {
      lightSwitch.style.backgroundColor = "red";
    }
  }
}

function flipTen() {
  for (let i = 0; i < 10; i++) {
    flipOnce();
  }
}

function flipHundred() {
  for (let i = 0; i < 100; i++) {
    flipOnce();
  }
}

function flipThousand() {
  for (let i = 0; i < 1000; i++) {
    flipOnce();
  }
}

function refresh() {
  let divs = lightSwitchContainer.childElementCount;
  personCounter = 0;
  let counterDOM = document.getElementById("counter");
  counterDOM.innerText = "0";

  for (let i = 1; i < divs + 1; i++) {
    let lightSwitch = document.getElementById("switch-" + i);
    lightSwitch.style.backgroundColor = "red";
  }
}
