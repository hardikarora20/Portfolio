document.addEventListener("DOMContentLoaded", function () {
    console.log("index.js");
    document
        .querySelector("div.folder#resume")
        .addEventListener("click", (event) => {
        newNotepad();
        console.log("clicked");
        });
});