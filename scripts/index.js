document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js");
  document
    .querySelector("div.folder#resume")
    .addEventListener("click", (event) => {
      newWindow(resumeNotepad, "Resume.txt", "notepad-small.png");
      // console.log("clicked");
    });
  const folders = document.querySelectorAll("div.folderWithFiles");
  folders.forEach((folder) => {
    folder.addEventListener("click", (event) => {
      // console.log(event);
      // console.log(event.target.children[0].innerText);
      // console.log(event.target.children[1].innerText);
      newWindow(
        explorer,
        event.target.children[1].innerText,
        "Folder Closed.ico"
      );
      // console.log("clicked");
    });
  });
  document.addEventListener("keydown", function (event) {
    var startMenuFull = document.getElementsByClassName("start-menu-full")[0];
    if (event.key.toLowerCase() === "s") {
      startMenuFull.classList.toggle("displayNone");
    }
  });

  document.addEventListener("click", function (event) {
    var startMenuFull = document.getElementsByClassName("start-menu-full")[0];
    var startMenu = document.getElementById("start-menu");

    // Check if the closest ancestor of the clicked element is not startMenuFull,
    // startMenu, and startMenuFull has the class 'displayNone'
    if (
      !event.target.closest(".start-menu-full") &&
      !event.target.closest("#start-menu") &&
      !startMenuFull.classList.contains("displayNone")
    ) {
      startMenuFull.classList.toggle("displayNone");
    }
  });
});
