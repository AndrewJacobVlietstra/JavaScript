function clunk(times) {

    var num = times;

    while (num > 0) {
        display("Clunk");
        num = num - 1;
    }
}

function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("Clank");
    }
    else if (size == 1) {
        display("Thunk");
    }
    else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
thingamajig(4);
console.log(clunkCounter);