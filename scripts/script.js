var taskbarTasks, body;
// document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js");
  body = document.querySelector("body");
  taskbarTasks = document.querySelector("div#start-menu div");

  
  function explorer() {
    const title = "My Computer";
    createNewExplorer(title, "explorer-small.png")
  }
  
  function createNewExplorer(title, image) {
    var explorerInnerCode = '<div class="window-header">';
    return explorerInnerCode;
  }

  function resumeNotepad() {
    const title = "Resume.txt";
    const defText = `
  RRRRR  EEEEE  SSSSS  U   U  M     M  EEEEE
  R   R  E      S      U   U  M M M M  E
  RRRRR  EEEE   SSSSS  U   U  M  M  M  EEEE
  R  R   E          S  U   U  M     M  E
  R   R  EEEEE  SSSSS  UUUUU  M     M  EEEEE

===============================================

  HARDIK ARORA
  Bhopal, India
  leetcode/hardikarora | linkedin/hardikarora20 | github/hardikarora | hardik.20.a@gmail.com

  SKILLS  
  - Core Java 
  - Data Structures and Algorithms 
  - DBMS 
  - MySQL 
  - HTML 
  - CSS 
  - JavaScript 
  - Node JS 

  EXPERIENCE 
  Dec 2022 – Mar 2023
  Summer Intern, A2infotech
  • Collaborated on the CarePlus project, a Java based healthcare application, contributing to its development and implementation.
  • Gained 90 hours of hands-on experience in software development, design, coding, testing, and implementation, by working on a real-world project.
  • Demonstrated adaptability and innovative thinking in a professional setting, overcoming challenges that led to the project’s success.

  EDUCATION 
  Sep 2020 – Jun 2024
  Lakshmi Narain College of Technology, India
  • Bachelor of Technology in Electronics and Communication Engineering

  Apr 2018 – Jun 2020
  St. Xavier's Senior Secondary Co-Ed School, India
  • Higher Secondary Education

  PROJECTS 
  April 2023
  CarePlus, Java/SQL
  Java Desktop Application
  • Implemented a user-friendly eHospital system, achieving a significant 75% reduction in paperwork.
  • Developed a Full-Stack desktop-based application consisting of 3 distinct interfaces tailored for admin, doctor, and receptionist to streamline communication.
  • Integrated SMS API for appointments, ensuring prompt communication and minimizing no shows.
  • Utilized Swing and AWT (Abstract Window Toolkit) as Java APIs for intuitive GUI programming.
  • Established database connectivity with MySQL using JDBC.

  December 2022
  CodeKeeper, Java/SQL
  Java Desktop Application
  • Implemented a password manager application using Java SE and Swing-based application.
  • Enabled password customization for users to create robust and unique passwords.
  • Prioritized user data security through Base64 encryption, a custom algorithm, and offline access.
  • Simplified interface reduces time spent on password-related tasks by 30%, improving user productivity.
  • Utilized MySQL with JDBC for efficient data storage and retrieval.

  September 2022
  Medley, HTML/CSS/JS
  Web Application
  • Designed a music streaming website with over 100 tracks and near instantaneous playback.
  • Included a recommendation system for random song suggestions, boosting user engagement.
  • Applied advanced playback features, including seek options, loop controls, and shuffle functionality for enhancing music listening experience.
  • Efficiently tracked recently played songs, allowing users to conveniently revisit their listening history.

  ACHIEVEMENTS
  LeetCode
  • Achieved Global Rank 5244 out of 26000+ participants in Leetcode Weekly Contest 357.
  • Solved 400+ problems on LeetCode on various DSA where more than 50 percent are of medium level.

=========================================================================

  H   H  AAAAA  RRRRR  DDDD   III  K   K      AAA   RRRRR  OOO  RRRRR  AAA
  H   H  A   A  R   R  D   D   I   K  K      A   A  R   R O   O R   R A   A
  HHHHH  AAAAA  RRRRR  D   D   I   KKK       AAAAA  RRRRR O   O RRRRR AAAAA
  H   H  A   A  R  R   D   D   I   K  K      A   A  R  R  O   O R  R  A   A
  H   H  A   A  R   R  DDDD   III  K   K     A   A  R   R  OOO  R   R A   A
`;
    return createNewNotepad(title, defText, "notepad-small.png");
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
        <img src="essentials/images/Minimize.png" alt="" id="min" class="pointer glowOnHover">
        <img src="essentials/images/Maximize.png" alt="" id="max" class="pointer glowOnHover">
        <img src="essentials/images/Exit.png" class="pointer glowOnHover" alt="" id="close">
    </div>
    </div>
    <ul class="window-toolbar">
        <li>File</li>
        <li>Edit</li>
        <li>Format</li>
        <li>View</li>
        <li>Help</li>
    </ul>
    <textarea id="notepad-text" class="default" disabled>
        ${defText}
    </textarea>`;
    return notepadInnerCode;
  }

  let windowCount = 0; // To generate unique IDs for windows

  function newWindow(type) {
    const windowId = `window-${windowCount++}`;
    const title = "Resume - Notepad";

    var newElement = document.createElement("div");
    newElement.className = "window";
    // newElement.classList.add("fulldisplay");
    newElement.classList.add("inFocus");
    newElement.id = windowId; // Assign a unique ID to the window
    newElement.innerHTML = type();
    newElement.style.opacity = 0;
    newTask(title, windowId);
    defWait();
    body.insertBefore(newElement, body.firstChild);
    focusTask(`window-${windowCount - 1}`);
    setTimeout(() => {
      document.querySelector(`#${windowId}`).style.opacity = 1;
      body.classList.remove("wait");
      console.log(document.querySelector(`#${windowId}`).classList);  
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
          parseFloat(
            getComputedStyle(document.querySelector("div.window")).left
          );
        offsetY =
          event.clientY -
          parseFloat(
            getComputedStyle(document.querySelector("div.window")).top
          );
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

    document
      .querySelector("div.window .window-header-right img#max")
      .addEventListener("click", (event) => {
        const id = getSelectedIdFromEvent(event);
        const currentWindow = document.querySelector(`div.window#${id}`);
        if(currentWindow.classList.contains("fulldisplay")){
          currentWindow.classList.toggle("fulldisplay");
          document.querySelector(`div.window#${id} img#max`).setAttribute("src", "essentials/images/Maximize.png");
        }
        else{
          currentWindow.classList.toggle("fulldisplay");
          document.querySelector(`div.window#${id} img#max`).setAttribute("src", "essentials/images/Restore.png");  
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
          parseFloat(
            getComputedStyle(document.querySelector("div.window")).left
          );
        offsetY =
          event.clientY -
          parseFloat(
            getComputedStyle(document.querySelector("div.window")).top
          );
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
  const taskToClose = document.querySelector(`div#start-menu div.taskbar-apps div#${targetId}`);
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

  function newTask(title, windowId) {
    var newTask = document.createElement("div");
    newTask.className = "task";
    newTask.classList.add("focused-task");
    newTask.id = windowId;
    newTask.innerHTML = `<img id="task-icon" src="essentials/images/notepad-small.png">
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

    if(currentWindow.classList.contains("hidden-window"))
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
    if(currentWindow.classList.contains("hidden-window"))
    currentWindow.classList.remove("hidden-window");
  else
    currentWindow.classList.add("hidden-window");
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

//add out of focus (done)
//fix taskbar apps (done)
//link taskbar app with window using id (done)
//make folders as different sections 
//also add my computer where we can add about me
//and rest folder/file will lead to different sections

// fix maximize (done)
// document.querySelector(".window").classList.toggle("fulldisplay")

// add minimize (done)
// on id="min" and also on task