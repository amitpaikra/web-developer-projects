let task = [];
const user_input = document.querySelector(".container > input");
const user_delete = document.getElementsByTagName("img");
const ul_list = document.getElementById("list");
const user_imgs = document.querySelectorAll("img");

function addTaskToDom(taskElement) {
    user_input.value = "";
    let liChild = document.createElement('li');
    liChild.innerHTML = `
        <input type="checkbox" id=${taskElement.id} >
            <label for=${taskElement.id}>${taskElement.text}</label>
            <img src="./resource/trash-can-solid.svg" data-id=${taskElement.id} class = "imgss">
            `;

    ul_list.append(liChild);
}

function renderList(){
    ul_list.innerHTML = "";

    for(item of task){
        addTaskToDom(item);
    }

}


function deleteTask(taskId) {
    let tempTask = [];
    for (let item of task) {
        if (taskId == item.id) continue;
        tempTask.push(item);
    }
    task = tempTask;
    renderList(task);
}

function userInputHandler(event) {

    if (event.key == "Enter") {
        const text = event.target.value;
        if (text == "") {
            alert("Do not leave empty!!!");
            return;
        };

        let item = {
            text,
            id: Date.now().toString()

        }

        task.push(item);
        renderList(item);
            // console.log(task);
        return;
    }
}

function userDeletehandler(event) {

    if (event.key === "Enter") {
        deleteTask(event.key.id);
    }

}


user_input.addEventListener("keyup", userInputHandler);
document.addEventListener('click', function(event){
    let target = event.target;
    console.log(target.className)
    if( target.className == "imgss"){

        console.log(target.dataset.id);
        deleteTask(target.dataset.id);
    }
    
});