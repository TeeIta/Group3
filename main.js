let modal = document.getElementById("form");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let text = document.getElementById("text");
let errorMessage = document.getElementById("errorMessage");
let errorMessage2 = document.getElementById("errorMessage2");
let errorMessage3 = document.getElementById("errorMessage3");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let remove = document.getElementById("remove");

btn.onclick = function (event) {
  event.preventDefault();
  modal.style.display = "block";
};

span.onclick = function (event) {
  event.preventDefault();
  modal.style.display = "none";
};

span1.onclick = function (event) {
  event.preventDefault();
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    errorMessage.innerHTML = `
          <i class="fa fa-exclamation-triangle"></i> Invalid Input
        `;
    errorMessage.style.paddingTop = "5px";
    textInput.style.borderColor = "red";
    errorMessage.style.fontSize = "10px";
    errorMessage.style.color = "red";
  } else {
    console.log("success");
    textInput.style.borderColor = "";
  }

  if (dateInput.value === "") {
    console.log("failure");
    errorMessage2.innerHTML = `
      <i class="fa fa-exclamation-triangle"></i> Invalid Input
    `;
    errorMessage2.style.paddingTop = "5px";
    dateInput.style.borderColor = "red";
    errorMessage2.style.fontSize = "10px";
    errorMessage2.style.color = "red";
  } else {
    console.log("success");
    dateInput.style.borderColor = "";
  }

  if (text.value === "") {
    console.log("failure");
    errorMessage3.innerHTML = `
      <i class="fa fa-exclamation-triangle"></i> Invalid Input
    `;
    errorMessage3.style.paddingTop = "5px";
    text.style.borderColor = "red";
    errorMessage3.style.color = "red";
    errorMessage3.style.fontSize = "10px";
  } else {
    console.log("success");
    text.style.borderColor = "";
  }

  acceptData();
};

let data = [];

let acceptData = () => {
  if (
    textInput.style.borderColor !== "red" &&
    dateInput.style.borderColor !== "red" &&
    text.style.borderColor !== "red"
  ) {
    const task = {
      text: textInput.value,
      date: dateInput.value,
      inputData: text.value,
    };
    data.push(task);
    TaskInput();
    form.reset();
    modal.style.display = "none"; // Close the modal
  }
};

let TaskInput = () => {
  tasks.innerHTML = "";
  data.forEach((task) => {
    tasks.innerHTML += `
      <div style="width: 100%; margin: 0 auto; margin-bottom: 20px;">
       <div class="task-posts" style="border: 1px solid #83bcf5; padding: 15px; background-color: #9dceff; border-radius: 5px;" id="my-element">
          <div class="topic-date">
              <p>${task.text}

              </p>
              <p>${task.date}</p>
          </div>
          <div>
            <p class="post">
            ${task.inputData}
            </p>
            </div>
          <div class="icons">
            <i class="fa fa-edit icons id="add""></i> <i class="fa fa-trash icons" onclick="deleteElement(document.getElementById('my-element'))"></i>
          </div>
        </div>
      </div>
    `;
  });
};

function deleteIcon() {
  // Get the icon element
  const remove = document.getElementById("remove");

  // Remove the icon from the list
  icon.parentNode.removeChild(data);
}

function deleteElement(element) {
  element.parentNode.removeChild(element);
}

function resetForm() {
  // Get the form element
  const form = document.getElementById("form");

  // Clear all the input fields
  for (const input of form.querySelectorAll("input")) {
    input.value = "";
  }

  // Clear the error messages
  const errorMessages = document.querySelectorAll(".errorMessage");
  for (const errorMessage of errorMessages) {
    errorMessage.innerHTML = "";
  }
}
