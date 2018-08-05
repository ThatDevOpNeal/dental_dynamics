let officeTourIdx = 0;
let treatmentIdx = 0;

function buttonClickOffice(className, idxChange) {
    const x = document.getElementsByClassName(className);
    x[officeTourIdx].style.display = "none";
    officeTourIdx += idxChange;
    if (officeTourIdx > 5) {
        officeTourIdx = 0;
    } else if (officeTourIdx < 0) {
        officeTourIdx = 5;
    }
    x[officeTourIdx].style.display = "block";
}

function buttonClickTreatment(className, idxChange) {
    const x = document.getElementsByClassName(className);
    x[treatmentIdx].style.display = "none";
    treatmentIdx += idxChange;
    if (treatmentIdx > 2) {
        treatmentIdx = 0;
    } else if (treatmentIdx < 0) {
        treatmentIdx = 2;
    }
    x[treatmentIdx].style.display = "block";
}
