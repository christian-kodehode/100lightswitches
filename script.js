let lightSwitchContainer = document.getElementById("light-switch-container");

let divCounter = 1;

while (divCounter < 101) {
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
  for (let i = personCounter; i < 101; i += personCounter) {
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

function flipFifty() {
  for (let i = 0; i < 50; i++) {
    flipOnce();
  }
}

function flipHundred() {
  for (let i = 0; i < 100; i++) {
    flipOnce();
  }
}

function refresh() {
  window.location.reload();
}
