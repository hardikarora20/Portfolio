document.addEventListener("DOMContentLoaded", function () {
    console.log("index.js");
    document
        .querySelector("div.folder#resume")
        .addEventListener("click", (event) => {
        newWindow(resumeNotepad);
        console.log("clicked");
        });

    document
        .querySelector("div.folder#computer")
        .addEventListener("click", (event) => {
        newWindow(explorer);
        console.log("clicked");
        });
});