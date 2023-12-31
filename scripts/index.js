document.addEventListener("DOMContentLoaded", function () {
    console.log("index.js");
    document
        .querySelector("div.folder#resume")
        .addEventListener("click", (event) => {
        newWindow(resumeNotepad, "Resume.txt", "notepad-small.png");
        console.log("clicked");
        });
    const folders = document.querySelectorAll("div.folderWithFiles");
    folders.forEach(folder => {
        folder.addEventListener("click", (event) => {
            console.log(event);
            console.log(event.target.children[0].innerText);
            console.log(event.target.children[1].innerText);
            newWindow(explorer, event.target.children[1].innerText, "Folder Closed.ico");
            console.log("clicked");
        });
    });
});