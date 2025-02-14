const htmlElements = {
  button: document.querySelector(".js-button"),
  input: document.querySelector(".js-input"),
  list: [],
  listDisplay: document.querySelector(".js-list"),
};

htmlElements.button.addEventListener("click", addToDo);

document.addEventListener("DOMContentLoaded", () => {
  const storedToDo = JSON.parse(window.localStorage.getItem("todo"));
  if (storedToDo) {
    htmlElements.list = storedToDo;
    renderList(); // Render the list on page load
  }
});

function saveToDo() {
  window.localStorage.setItem("todo", JSON.stringify(htmlElements.list));
}

function addToDo() {
  if (htmlElements.input.value === "") {
    window.alert("Put Something!");
    return;
  } else {
    const inputValue = htmlElements.input.value;
    htmlElements.list.push(inputValue);
    console.log(htmlElements.list);

    saveToDo();
    renderList();
  }
}
function deleteToDo() {
  window.localStorage.clear();
}

function renderList() {
  htmlElements.listDisplay.innerHTML = "";
  for (let i = 0; i < htmlElements.list.length; i++) {
    const toDoName = htmlElements.list[i];
    const renderList = `
      <div class="row js-row">
      <div class="list-paragraph">
        <p>${toDoName}</p>
        </div>
         <img onclick="
         htmlElements.list.splice(${i}, 1);
         renderList();
         deleteToDo();
         " src="./images/delete-button-icon.png" class="delete-button-icon js-delete-button">
      </div>
    `;
    htmlElements.listDisplay.innerHTML += renderList;
  }
  htmlElements.input.value = "";
}
