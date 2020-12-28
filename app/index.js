import document from "document";
import * as messaging from "messaging";

let background = document.getElementById("background");
let foreground = document.getElementsByClassName("foreground");

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "background" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    console.log(`Setting background color: ${color}`);
    background.style.fill = color;
  }
  if (evt.data.key === "foreground" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    console.log(`Setting foreground color: ${color}`);
    foreground.forEach(function(item) {
      item.style.fill = color;
    });
    //foreground.style.fill = color;
  }
};

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};

function hideRandomly () {
  let fg = document.getElementsByClassName("foreground");
  fg.forEach(function(item) {
    item.style.display = Math.random() > 0.5 ? "none" : "inline";
  });
}

hideRandomly();