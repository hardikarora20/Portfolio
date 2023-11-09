var taskbarTasks, body;
// document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js");
  body = document.querySelector("body");
  taskbarTasks = document.querySelector("div#start-menu div");

  const title = "Resume - Notepad";
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

    =================================================================================

    H   H  AAAAA  RRRRR  DDDD   III  K   K      AAA   RRRRR  OOO  RRRRR  AAA
    H   H  A   A  R   R  D   D   I   K  K      A   A  R   R O   O R   R A   A
    HHHHH  AAAAA  RRRRR  D   D   I   KKK       AAAAA  RRRRR O   O RRRRR AAAAA
    H   H  A   A  R  R   D   D   I   K  K      A   A  R  R  O   O R  R  A   A
    H   H  A   A  R   R  DDDD   III  K   K     A   A  R   R  OOO  R   R A   A
    `;

  var innerCode = `<div class="window-header">
        <div class="window-header-left">
            <img src="essentials/images/notepad-small.png" id="window-icon">
            <div id="window-title">
                ${title}
            </div>
        </div>
        <div class="window-header-right">
            <img src="essentials/images/minimize.png" alt="" id="min" class="disabled">
            <img src="essentials/images/maximize.png" alt="" id="max" class="disabled">
            <img src="essentials/images/close.png" class="pointer" alt="" id="close">
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

  function createNewNotepad(title, defText) {
    return innerCode;
  }

  let windowCount = 0; // To generate unique IDs for windows

  function newNotepad() {
    const windowId = `window-${windowCount++}`;
    const title = "Resume - Notepad";

    var newElement = document.createElement("div");
    newElement.className = "window";
    // newElement.classList.add("fulldisplay");
    newElement.classList.add("inFocus");
    newElement.id = windowId; // Assign a unique ID to the window
    newElement.innerHTML = createNewNotepad(title, windowId);
    newElement.style.display = "none";
    newTask(title, windowId);
    defWait();
    body.insertBefore(newElement, body.firstChild);
    setTimeout(() => {
      document.querySelector(`#${windowId}`).style.display = "flex";
      body.classList.remove("wait");
    }, 1000);

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
      const clickedWindow = event.target.closest(".window");
      const clickedTextarea = event.target.closest(".window textarea");
      const isHeader = event.target.classList.contains("window-header");

      if (clickedWindow && !clickedTextarea && !isHeader) {
        // Remove the "inFocus" class from all windows
        document.querySelectorAll(".window").forEach((window) => {
          window.classList.remove("inFocus");
        });

        // Add the "inFocus" class to the clicked window
        clickedWindow.classList.add("inFocus");

        // Add the "outOfFocus" class to all other open windows
        document.querySelectorAll(".window:not(.inFocus)").forEach((window) => {
          window.classList.add("outOfFocus");
        });
      } else if (!isDragging) {
        // If the click is not on any window, on a textarea, or during dragging, remove all classes from all windows
        document.querySelectorAll(".window").forEach((window) => {
          window.classList.remove("inFocus", "outOfFocus");
        });
      }
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
  const clickedWindow = event.target.closest(".window");
  const clickedTask = event.target.closest(".task");
  let targetId;
  if (clickedWindow) {
      targetId = clickedWindow.id;
  } else if (clickedTask) {
      targetId = clickedTask.id;
  }
  const windowToClose = document.getElementById(targetId);
  const taskToClose = document.querySelector(`div#start-menu div.taskbar-apps div#${targetId}`);
  if (windowToClose) {
    setTimeout(() => {
      body.removeChild(windowToClose);
      taskbarTasks.removeChild(taskToClose);
    }, 200);
  }
}

  function newTask(title, windowId) {
    var newTask = document.createElement("div");
    newTask.className = "task";
    newTask.id = windowId;
    newTask.innerHTML = `<img id="task-icon" src="essentials/images/notepad-small.png">
            <div id="task-name">${title}</div>`;
    taskbarTasks.appendChild(newTask);

    // Add event listener to the taskbar app for closing the corresponding window
    newTask.addEventListener("click", (event) => {
      closeWindowHelper(event);
    });
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

//add out of focus
//fix taskbar apps
//link taskbar app with window using id
//make folders as different sections 
//also add my computer where we can add about me
//and rest folder/file will lead to different sections

