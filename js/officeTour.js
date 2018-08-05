let officeTourIdx = 0;
function buttonClickOffice(className, idxChange) {
    var x = document.getElementsByClassName(className);
    x[officeTourIdx].style.display = "none";
    officeTourIdx += idxChange;
    if (officeTourIdx > 5) {
        officeTourIdx = 0;
    } else if (officeTourIdx < 0) {
        officeTourIdx = 5;
    }
    x[officeTourIdx].style.display = "block";
}
