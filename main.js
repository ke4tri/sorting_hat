
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const startButtonElem = document.getElementById("button1");
startButtonElem.addEventListener("click", function(){
    console.log("startButtonElm() is working");
    stringForm1();
});

// This is creating new forms each time it is clicked
// Need to stop that and only generate one
const stringForm1 = () => {
    let stringForm2 = ` <div class="form-group mb-2 ml-3 p-3 border border-white>
    <label for="staticEmail2" class="sr-only">Student Name</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Enter First Years Name">
    <label for="student1" class="sr-only">Student</label>
    <input type="student" class="form-control" id="studentName" placeholder="Student">
    <button type="submit" id="makeKidButton" class="btn btn-primary mb-2  mt-1 p-3">Sort!</button>
    </div>
    <div class="form-group mx-sm-3 mb-2 ml-5">
    </div>
    `
    // console.log("string print to dom isn't working but console log is")
    printToDom(stringForm2, "formDiv");
    kidFunction('space','2ndspace');
};

// Below needs to pull the kids name from the input value and then
// place it in the kidFunction as the kidName
// take out the houseName parameter and it will pull from the Math.random() for house
const formValue = document.getElementById("staticEmail2").value;

// This below needs to be generating list with a random house each time
// Need to create an object/array of houses
let kidFunction = (kidName,houseName) => {
    const kidCardElem = document.getElementById("makeKidButton");
    kidCardElem.addEventListener("click", function(){
        let stringForm3 = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${kidName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${houseName}</h6>
        </div>
        <button type="submit" id="makeKidButton" class="btn btn-primary mb-2  mt-1 p-3">Expel</button>
        </div> `
        printToDom(stringForm3, "cardDiv")
        console.log("This card thing is working");
    });
};