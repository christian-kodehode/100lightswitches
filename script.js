let lightSwitchContainer = document.getElementById("light-switch-container");

let divCounter = 1;

while (divCounter < 1001) {
  let lightSwitch = document.createElement("div");
  lightSwitch.id = "switch-" + divCounter;
  lightSwitch.className = "light-switch";
  lightSwitch.innerText = `${divCounter}`;
  lightSwitch.style.backgroundColor = "red";
  lightSwitchContainer.appendChild(lightSwitch);
  divCounter++;
}

let counterDOM = document.getElementById("counter");

let personCounter = 1;

function flipOnce() {
  counterDOM.innerText = `${personCounter}`;
  for (let i = personCounter; i < 1001; i += personCounter) {
    let lightSwitch = document.getElementById("switch-" + i);
    if (lightSwitch.style.backgroundColor === "red") {
      lightSwitch.style.backgroundColor = "green";
    } else if (lightSwitch.style.backgroundColor === "green") {
      lightSwitch.style.backgroundColor = "red";
    }
  }
  personCounter++;
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
  personCounter = 1;
  let counterDOM = document.getElementById("counter");
  counterDOM.innerText = "0";

  for (let i = 1; i < 1001; i++) {
    let lightSwitch = document.getElementById("switch-" + i);
    lightSwitch.style.backgroundColor = "red";
  }
}
