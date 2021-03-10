const day = "Monday";

switch(day) {
    case "Monday": // this is basically saying, day === "Monday", strict comparison
        console.log("Plan my course structure");
        console.log("Practice my JavaScript"); // cases can run multiple lines of code
        break;
    
    case "Tuesday": // day === "Tuesday"
        console.log("Prepare my books and materials");
        break;
    
    case "Wednesday": // the following code will run for both Wednesday and Thursday cases
    case "Thursday":
        console.log("Write code for my project");
        break;

    case "Friday":
        console.log("Record some videos");
        break;

    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend!");
        break;

    default: // executed if all other cases fail, sort of like the "else" of the switch statment
        console.log("Not a valid day!");
}


// if-else equivalent

if (day === "Monday") {
    console.log("Plan my course structure");
    console.log("Practice my JavaScript");
} 
else if (day === "Tuesday") {
    console.log("Prepare my books and materials");
} 
else if (day === "Wednesday" || day === "Thursday") {
    console.log("Write code for my project");
}
else if (day === "Friday") {
    console.log("Record some videos");
}
else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy the weekend!");
}
else {
    console.log("Not a valid day!");
}