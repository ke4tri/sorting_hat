
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const startButtonElem = document.getElementById("button1");
startButtonElem.addEventListener("click", function(){
    console.log("startButtonElm() is working");
    stringForm1();
});

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('expelKid');
    console.log(deleteButtons);
    for (let i = 0; i < deleteButtons.length; i++) {
      const element = deleteButtons[i];
      element.addEventListener("click", (e) => {
        // remove card that the button was on
        const buttonIClicked = e.target;
        const cardToDelete = buttonIClicked.parentNode;
        cardToDelete.remove();
      })
    }
  }

let kidFunction = () => {
    const kidCardElem = document.getElementById("makeKidButton");
    kidCardElem.addEventListener("click", function(){
        let formValue = document.getElementById("studentName").value;
        let randomHouse = ["Gryffindor", "Hufflepuff","Ravenclaw", "Slytherin"][Math.floor(Math.random() * 4)]
        let stringForm3 = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${formValue}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${randomHouse}</h6>
        </div>
        <button type="submit" id="expelKidButton" class=" expelKid btn btn-primary mb-2  mt-1 p-3">Expel</button>
        </div> `
        printToDom(stringForm3, "cardDiv")
        console.log("This card thing is working");
        activateDeletes();
    });
};

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
    printToDom(stringForm2, "formDiv");
    kidFunction('space','2ndspace');
};


