
// Handler / Listener / Callbacks are just ordinary functions, they "handle" an event when it happens
function pageLoadedHandler() {
    console.log("I'm Alive!");
}
// This function will grab reference of the image and assign it to a variable
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;

    var name = image.id;
    name = name + ".jpg";
    image.src = name;

    // setTimeout(reblur, 1000, image);
}

function reblur(image) {
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}

function timerHandler() {
    console.log("Hey what are you up to?");
}

// When the window is loaded and the onload event occurs, call the pageLoadedHandler function
window.onload = pageLoadedHandler;

// When page is loaded run the init function
window.onload = init;

setTimeout(timerHandler, 5000);
