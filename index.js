{/* <div class="tasks">
<div class="task">
<p>Ahmed</p>
<div class="buttons">
    <button>Correct</button>
    <button>Delete</button>
</div>
</div> */}
let input = document.querySelector(".task-name")
let container = document.querySelector(".container")
let add =document.querySelector(".add-task")
add.onclick = function(){
    console.log("Hi" ,input);
    if(input.value == ""){
        alert("you must write something")
    }
    else{
        let tasks = document.createElement("div");
        tasks.classList.add("tasks");
        let task =document.createElement("div");
        task.classList.add("task");
        let paragraph = document.createElement("p");
        paragraph.innerHTML = input.value;
        input.value = "";
        let buttons = document.createElement("div");
        buttons.classList.add("buttons");
        let Correct = document.createElement("button");
        Correct.innerHTML = "Correct";
        let Delete = document.createElement("button");
        Delete.innerHTML = "Delete";
        tasks.appendChild(task);
        task.appendChild(paragraph);
        task.appendChild(buttons);
        buttons.appendChild(Correct);
        buttons.appendChild(Delete);
        container.prepend(tasks)
        Correct.onclick = function(){
          Correct.style.display ="none";
          Delete.style.display = "none"
          let done = document.createElement("button")
          done.innerHTML = "Done";
          buttons.appendChild(done);
          done.style.cursor = "auto"
        }
        Delete.onclick = function(){
            tasks.style.display= "none";
        }
    }
}