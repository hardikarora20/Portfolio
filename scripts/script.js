var taskbarTasks, body;
// document.addEventListener("DOMContentLoaded", function () {
console.log("script.js");
body = document.querySelector("body");
taskbarTasks = document.querySelector("div#start-menu div");

function explorer(title, icon) {
  // const title = "My Computer";
  return createNewExplorer(title, icon);
}

function createNewExplorer(title, image) {
  var explorerInnerCode = `
  <div class="window-header">
    <div class="window-header-left">
      <img src="essentials/images/${image}" id="window-icon">
      <div id="window-title">
          ${title}
      </div>
    </div>
    <div class="window-header-right">
      <img src="essentials/images/minimize.png" alt="" id="min" class="pointer glowOnHover">
      <img src="essentials/images/maximize.png" alt="" id="max" class="pointer glowOnHover">
      <img src="essentials/images/Exit.png" class="pointer glowOnHover" alt="" id="close">
    </div>
    </div>
    <ul class="window-toolbar clickDisabled">
        <li><U>F</U>ile</li>
        <li><U>E</U>dit</li>
        <li><U>V</U>iew</li>
        <li><U>F</U>avorites</li>
        <li><U>T</U>ools</li>
        <li><U>H</U>elp</li>
      </ul>
      <div class="second-toolbar clickDisabled">
        <div class="second-toolbar-1">
          <div class="second-toolbar-tool">
            <img class="icon" src="essentials/images/Back.png">
            <div class="title">
              Back
            </div>
          </div>
          <div class="second-toolbar-tool">
            <img class="icon" src="essentials/images/Forward.png">
            <div class="title">
              Forward
            </div>
          </div>
          <div class="second-toolbar-tool">
            <img class="icon" src="essentials/images/Up.png">
            <div class="title">
              Up
            </div>
          </div>
        </div>
        <div class="second-toolbar-2">
          <div class="second-toolbar-tool">
            <img class="icon" src="essentials/images/Search.png">
            <div class="title">
              Search
            </div>
          </div>
          <div class="second-toolbar-tool">
            <img class="icon" src="essentials/images/Folder View.png">
            <div class="title">
              Folders
            </div>
          </div>
        </div>
      </div>
      <div class="files-container">
        <div class="left-bar clickDisabled">
          <div class="tab">
            <div class="tab-title">File and Folder Tasks</div>
            <img src="essentials/images/downarrow.png" id="down-arrow">
          </div>
          <div class="tab">
            <div class="tab-title">Other Places</div>
            <img src="essentials/images/downarrow.png" id="down-arrow">
          </div>
          <div class="tab">
          <div class="tab-title">Details</div>
          <img src="essentials/images/downarrow.png" id="down-arrow">
          </div>
          <div class="dog-container default">
          <div class = "folder-dog"></div>
          </div>
        </div>
        <div class = "in-folder">
          ${filesToDiv(title)}
          </div>
        </div>
      </div>
      </div>`;
  return explorerInnerCode;
}

function resumeNotepad(title, icon) {
  const defText = `
  
  <h2 class="center">HARDIK ARORA</h2>
  <span class="center">Bhopal, India<br>
  hardik.20.a@gmail.com
  </span>
  <div class = "line"></div>
  
  <h2 class="skills">SKILLS</h2>
  Core Java
  - Data Structures and Algorithms
  - DBMS
  - MySQL
  - HTML
  - CSS
  - JavaScript
  - Node JS
  
  <br><br>
  
  <h2>EDUCATION</h2>
  <strong>Lakshmi Narain College of Technology,</strong> India<br>
  B. Tech in Electronics and Communication Engg (Sep 2020 – Jun 2024)<br>
  <strong>St. Xavier's Senior Secondary Co-Ed School,</strong> India<br>
  Higher Secondary Education (Apr 2018 – Jun 2020)

  <br><br>
  <h2>PROJECTS</h2>

  <strong>SimonGame</strong>, HTML/CSS/JS/jQuery (Apr 2023)<br>
 • Classic Simon game with improved memory and pattern recognition.<br>
 • Enhanced gaming experience through engaging design and auditory elements.
  <br>
  <strong>CodeKeeper</strong>, Java/SQL (Apr 2023)<br>
 • Secure password manager with features like generation and customization.<br>
 • Prioritized user data security through encryption and a custom algorithm.
  <br>
  <strong>CarePlus</strong>, Java/SQL (Dec 2022 – Apr 2023)<br>
 • Hospital management system streamlining operations for administrators, receptionists, and doctors.<br>
 • Integrated secure database management and external system integration.
  <br>
  <strong>Medley</strong>, HTML/CSS/JS (Sep 2022)<br>
 • Music streaming website with advanced controls and a rich collection of 100 songs.<br>
 • Implemented features like seek options, loop controls and a smart recommendation system.<br>
 • Utilized JavaScript and DOM for a seamless music streaming experience.
  <br><br>
  <h2>ACHIEVEMENTS</h2>
  <strong>LeetCode</strong><br>
  • Achieved Global Rank 5244 out of 26000+ participants in Leetcode Weekly Contest 357.<br>
  • Solved 600+ problems on LeetCode on various DSA where more than 50 percent are of medium level.<br>
 
  
  
  `;
  return createNewNotepad(title, defText, icon);
}

function createNewNotepad(title, defText, image) {
  var notepadInnerCode = `<div class="window-header">
    <div class="window-header-left">
        <img src="essentials/images/${image}" id="window-icon">
        <div id="window-title">
            ${title}
        </div>
    </div>
    <div class="window-header-right">
        <img src="essentials/images/minimize.png" alt="" id="min" class="pointer glowOnHover">
        <img src="essentials/images/maximize.png" alt="" id="max" class="pointer glowOnHover">
        <img src="essentials/images/Exit.png" class="pointer glowOnHover" alt="" id="close">
    </div>
    </div>
    <ul class="window-toolbar">
        <li class="clickDisabled"><U>F</U>ile</li>
        <li class="clickDisabled"><U>E</U>dit</li>
        <li class="clickDisabled"><U>F</U>ormat</li>
        <li class="clickDisabled"><U>V</U>iew</li>
        <li class="clickDisabled"><U>H</U>elp</li>
        <a class="resumeNewTab" href = "https://drive.google.com/file/d/1PhOziIQ_CmF-1YGpq9qNPxDUG0GB0WF-/view?usp=drive_link" target="_blank">
        <li class = "pointer"><U>O</U>pen in new tab</li>
        </a>
    </ul>
    <div id="notepad-text" class="default" contenteditable="false">
    ${defText}
    </div>`;
  return notepadInnerCode;
}

function filesInFolder(title) {
  var fileList = [];
}

function filesToDiv(title) {
  var fileList = [];
  var list = "";
  switch (title) {
    case "Projects":
      fileList = [
        "split:Live Projects",
        "Portfolio:web:hardikarora20.github.io/Portfolio",
        "SimonGame:web:hardikarora20.github.io/Simon",
        "Medley:web:hardikarora20.github.io/Medley",
        "split:GitHub Repositories",
        "Portfolio:HTML:github.com/hardikarora20/Portfolio",
        "SimonGame:HTML:github.com/hardikarora20/Simon",
        "CodeKeeper:java:github.com/hardikarora20/CodeKeeper",
        "CarePlus:java:github.com/hardikarora20/CarePlus",
        "Medley:HTML:github.com/hardikarora20/Medley",
      ];
      break;
    case "Profiles":
      fileList = [
        "split:Social Profiles",
        "GitHub:github:github.com/hardikarora20",
        "LinkedIn:linkedin:linkedin.com/in/hardikarora20",
        "split:Coding Platforms",
        "LeetCode:leetcode:leetcode.com/hardikarora",
        "Coding Ninjas:leetcode:codingninjas.com/studio/profile/891b124a-8e82-48ae-9e30-2d3c5851a0b8",
        "GFG:leetcode:auth.geeksforgeeks.org/user/hardik20a",
      ];
      break;
    case "Contact":
      fileList = [
        "Email:github:github.com/hardikarora20",
        "Resume:linkedin:linkedin.com/in/hardikarora20",
      ];
      break;
  }
  console.log(fileList);
  var i = 0;
  fileList.forEach((file) => {
    var titleLang = file.split(":");
    // console.log(titleLang[2]);
    if (titleLang[0] == "split") {
      if (i == 0) {
        list += `             
                <div class="folder-sections">
                    <div class="section-head">
                        <button class="section-title border-gradient-purple border-gradient">${titleLang[1]}</button>
                    </div>
                    <div class="folders-in-section">`;
      } else {
        list += `  
                </div>           
                <div class="folder-sections">
                    <div class="section-head">
                        <button class="section-title border-gradient-purple border-gradient">${titleLang[1]}</button>
                    </div>
                    <div class="folders-in-section">`;
      }
    } else {
      list += `
      <a href = "https://${titleLang[2]}" target = "_blank">
        <div class="folder pointer" id = "${titleLang[0]}">
          <img src="essentials/images/${titleLang[1]}.png" class="folder-icon">
          <div class="folder-title">${titleLang[0]}</div>
          <img src="essentials/images/shortcut.png" id="shortcut">
        </div>
      </a>`;
      i++;
    }
  });
  return list;
}

let windowCount = 0; // To generate unique IDs for windows

function newWindow(type, title, icon) {
  const windowId = `window-${windowCount++}`;
  console.log(icon);
  var newElement = document.createElement("div");
  newElement.className = "window";
  // newElement.classList.add("fulldisplay");
  newElement.classList.add("inFocus");
  newElement.id = windowId; // Assign a unique ID to the window
  newElement.innerHTML = type(title, icon);
  newElement.style.opacity = 0;
  newTask(title, windowId, icon);
  defWait();
  body.insertBefore(newElement, body.firstChild);
  focusTask(`window-${windowCount - 1}`);
  setTimeout(() => {
    document.querySelector(`#${windowId}`).style.opacity = 1;
    body.classList.remove("wait");
    console.log(document.querySelector(`#${windowId}`).classList);
    const audioElement = new Audio("essentials/sounds/explore.mp3");
    audioElement.play();
  }, 1000);

  document.querySelector("div.window").addEventListener("click", (event) => {
    console.log("clicked window");
  });

  // Making window draggable and also to not move it out of screen
  let isDragging = false;
  let offsetX, offsetY;

  const windowHeader = document.querySelector("div.window .window-header");
  const windowElement = document.querySelector("div.window");

  windowHeader.addEventListener("mousedown", startDragging);
  windowHeader.addEventListener("touchstart", startDragging);

  function startDragging(event) {
    event.preventDefault();

    isDragging = true;

    offsetX = event.clientX - parseFloat(getComputedStyle(windowElement).left);
    offsetY = event.clientY - parseFloat(getComputedStyle(windowElement).top);

    window.addEventListener("mousemove", dragWindow);
    window.addEventListener("touchmove", dragWindow);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);
  }

  function dragWindow(event) {
    event.preventDefault();

    if (isDragging) {
      let clientX, clientY;

      if (event.type === "mousemove") {
        clientX = event.clientX;
        clientY = event.clientY;
      } else if (event.type === "touchmove" && event.touches.length === 1) {
        const touch = event.touches[0];
        clientX = touch.clientX;
        clientY = touch.clientY;
      }

      let newX = clientX - offsetX;
      let newY = clientY - offsetY;

      const maxX =
        window.innerWidth - parseFloat(getComputedStyle(windowElement).width);
      const maxY =
        window.innerHeight - parseFloat(getComputedStyle(windowElement).height);

      newX = Math.min(Math.max(0, newX), maxX);
      newY = Math.min(Math.max(0, newY), maxY);

      windowElement.style.left = newX + "px";
      windowElement.style.top = newY + "px";
    }
  }

  function stopDragging() {
    isDragging = false;

    window.removeEventListener("mousemove", dragWindow);
    window.removeEventListener("touchmove", dragWindow);
    window.removeEventListener("mouseup", stopDragging);
    window.removeEventListener("touchend", stopDragging);
  }

  // In focus and out of focus windows
  document.addEventListener("mousedown", (event) => {
    let selectedId = getSelectedIdFromEvent(event);
    focusTask(selectedId);
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  //close window
  document
    .querySelector("div.window .window-header-right img#close")
    .addEventListener("click", (event) => {
      closeWindowHelper(event);
    });

  document
    .querySelector("div.window .window-header-right img#max")
    .addEventListener("click", (event) => {
      const id = getSelectedIdFromEvent(event);
      const currentWindow = document.querySelector(`div.window#${id}`);
      if (currentWindow.classList.contains("fulldisplay")) {
        currentWindow.classList.toggle("fulldisplay");
        document
          .querySelector(`div.window#${id} img#max`)
          .setAttribute("src", "essentials/images/maximize.png");
      } else {
        currentWindow.classList.toggle("fulldisplay");
        document
          .querySelector(`div.window#${id} img#max`)
          .setAttribute("src", "essentials/images/Restore.png");
      }
    });

  document
    .querySelector("div.window .window-header-right img#min")
    .addEventListener("click", (event) => {
      const id = getSelectedIdFromEvent(event);
      document.querySelector(`div.window#${id}`).classList.add("hidden-window");
    });
}

function newNotepad() {
  const windowId = `window-${windowCount++}`;
  const title = "Resume - Notepad";

  var newElement = document.createElement("div");
  newElement.className = "window";
  // newElement.classList.add("fulldisplay");
  newElement.classList.add("inFocus");
  newElement.id = windowId; // Assign a unique ID to the window
  newElement.innerHTML = resumeNotepad();
  newElement.style.display = "none";
  newTask(title, windowId);
  defWait();
  body.insertBefore(newElement, body.firstChild);
  focusTask(`window-${windowCount - 1}`);
  setTimeout(() => {
    document.querySelector(`#${windowId}`).style.display = "flex";
    body.classList.remove("wait");
  }, 1000);

  document.querySelector("div.window").addEventListener("click", (event) => {
    console.log("clicked window");
  });

  // Making window draggable and also to not move it out of screen
  let isDragging = false;
  let offsetX, offsetY;

  document
    .querySelector("div.window .window-header")
    .addEventListener("mousedown", (event) => {
      isDragging = true;

      // Calculate the offset from the mouse click to the window's top-left corner
      offsetX =
        event.clientX -
        parseFloat(getComputedStyle(document.querySelector("div.window")).left);
      offsetY =
        event.clientY -
        parseFloat(getComputedStyle(document.querySelector("div.window")).top);
    });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      // Calculate the new position of the window based on the mouse position
      let newX = event.clientX - offsetX;
      let newY = event.clientY - offsetY;

      // Ensure the window stays within the screen boundaries
      const maxX =
        window.innerWidth -
        parseFloat(
          getComputedStyle(document.querySelector("div.window")).width
        );
      const maxY =
        window.innerHeight -
        parseFloat(
          getComputedStyle(document.querySelector("div.window")).height
        );

      newX = Math.min(Math.max(0, newX), maxX);
      newY = Math.min(Math.max(0, newY), maxY);

      // Update the window's position
      document.querySelector("div.window").style.left = newX + "px";
      document.querySelector("div.window").style.top = newY + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // In focus and out of focus windows
  document.addEventListener("mousedown", (event) => {
    let selectedId = getSelectedIdFromEvent(event);
    focusTask(selectedId);
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  //close window
  document
    .querySelector("div.window .window-header-right img#close")
    .addEventListener("click", (event) => {
      closeWindowHelper(event);
    });
}

function closeWindowHelper(event) {
  let targetId = getSelectedIdFromEvent(event);
  const windowToClose = document.getElementById(targetId);
  const taskToClose = document.querySelector(
    `div#start-menu div.taskbar-apps div#${targetId}`
  );
  if (windowToClose) {
    setTimeout(() => {
      body.removeChild(windowToClose);
      taskbarTasks.removeChild(taskToClose);
    }, 200);
  }
}

function getSelectedIdFromEvent(event) {
  const clickedWindow = event.target.closest(".window");
  const clickedTask = event.target.closest(".task");
  let targetId;
  if (clickedWindow) {
    targetId = clickedWindow.id;
  } else if (clickedTask) {
    targetId = clickedTask.id;
  }
  return targetId;
}

function newTask(title, windowId, icon) {
  var newTask = document.createElement("div");
  newTask.className = "task";
  newTask.classList.add("focused-task");
  newTask.id = windowId;
  newTask.innerHTML = `<img id="task-icon" src="essentials/images/${icon}">
                         <div id="task-name">${title}</div>`;
  taskbarTasks.appendChild(newTask);

  // Add event listener to the taskbar app for closing the corresponding window
  // newTask.addEventListener("click", taskClickHandler);
}

// function taskClickHandler(event) {
//   toggleMinimize(getSelectedIdFromEvent(event));
// }

function focusTask(id) {
  // whenever this method is called
  // it will focus on the given "id" by adding "inFocus" to window
  // and "focused-task" to task
  // && "outOfFocus" to all the windows
  // and "normal-task" to all other tasks
  console.log(id);

  const currentWindow = document.querySelector(`div.window#${id}`);
  const currentTask = document.querySelector(`div.taskbar-apps div.task#${id}`);

  if (currentWindow.classList.contains("hidden-window"))
    currentWindow.classList.remove("hidden-window");

  console.log(currentWindow);
  console.log(currentTask);

  document.querySelectorAll(".window").forEach((window) => {
    window.classList.remove("inFocus");
  });

  document.querySelectorAll(".task").forEach((task) => {
    task.classList.remove("focused-task");
  });

  // Add the "inFocus" class to the clicked window
  currentWindow.classList.add("inFocus");
  currentTask.classList.add("focused-task");

  // Add the "outOfFocus" class to all other open windows
  document.querySelectorAll(".window:not(.inFocus)").forEach((window) => {
    window.classList.add("outOfFocus");
  });

  document.querySelectorAll(".task:not(.focused-task)").forEach((task) => {
    task.classList.add("normal-task");
  });
}

function toggleMinimize(id) {
  const currentWindow = document.querySelector(`div.window#${id}`);
  currentWindow.removeEventListener("click", taskClickHandler);
  // const currentTask = document.querySelector(`div.taskbar-apps div.task#${id}`);
  if (currentWindow.classList.contains("hidden-window"))
    currentWindow.classList.remove("hidden-window");
  else currentWindow.classList.add("hidden-window");
  // console.log("toggling minimize");
  currentWindow.addEventListener("click", taskClickHandler);
}

// //task load cursor animation
function defWait() {
  setTimeout(() => {
    body.classList.add("wait");
  }, 100);
  setTimeout(() => {
    body.classList.remove("wait");
  }, 500);
  setTimeout(() => {
    body.classList.add("wait");
  }, 600);
}

//taskbar time
setInterval(() => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  document.querySelector("#start-menu #time").textContent =
    (hours ? hours : 12) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    " " +
    ampm;
}, 1000);
// });
var wallIndex = 0;
function changeWallpaper() {
  if (wallIndex == wallpapers.length) wallIndex = 0;
  document.getElementById(
    "fixed-background"
  ).style.background = `url(essentials/images/wallpapers/${wallpapers[wallIndex]})`;
  wallIndex++;
}

function toggleStart() {
  document
    .getElementsByClassName("start-menu-full")[0]
    .classList.toggle("displayNone");
}

var wallpapers = [
  "Ascent.jpg",
  "Autumn.jpg",
  "Azul.jpg",
  "Bliss.jpg",
  "Follow.jpg",
  "Friend.jpg",
  "Moon flower.jpg",
  "Radiance.jpg",
  "Red moon desert.jpg",
  "Stonehenge.jpg",
  "Tulips.jpg",
  "Vortec space.jpg",
  "Wind.jpg",
];

//add out of focus (done)
//fix taskbar apps (done)
//link taskbar app with window using id (done)

// fix maximize (done)
// document.querySelector(".window").classList.toggle("fulldisplay")

// add minimize (done)
// on id="min" and also on task

// make folders as different sections
// also add my computer where we can add about me
// and rest folder/file will lead to different sections

// add welcome screen (done)
// add startmenu with the same shortcuts and shutdown page (done)
