/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function iconHandler() {
    var x = document.getElementsByClassName('topnav')
    if (x[0].className === "topnav") {
        x[0].className += " responsive";
    } else {
        x[0].className = "topnav";
    }
    console.log(x[0].className);
}
