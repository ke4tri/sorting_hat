
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const startButtonElem = document.getElementById("button1");
startButtonElem.addEventListener("click", function(){
    console.log("This is working");
    stringForm1();
});

const stringForm1 = () => {
    let stringForm2 = ` <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
    </div>
    <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>`
    console.log("string print to dom isn't working but console log is")
    printToDom(stringForm2, "formDiv");
};


