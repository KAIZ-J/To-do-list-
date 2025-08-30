  const form = document.getElementById("form")
  const container = document.getElementById("container");
  const input= document.getElementById("data");
  let counter = parseInt(localStorage.getItem("counter")) || 4;
  let toDosArray = JSON.parse(localStorage.getItem("toDosArr")) || [{id:1,text: "Do Math Assignment",isCompleted:false},
    {id:2,text: "Water the plants",isCompleted:true},
    {id:3,text: "Go to Gym",isCompleted:false}];
  function addContainer(){
    container.innerHTML="";
    toDosArray.forEach(el=>{
      container.innerHTML+=`
      <div class="to-do ${el.isCompleted?"completed":""}" id="toDo-${el.id}">
          <input type="checkbox" onclick="complete(this)" ${el.isCompleted?"checked":""}/>
          <span>${el.text}</span>
          <button type="button" class="delete-btn" onclick="deleteTask(this)"><i class="fa-solid fa-trash fa-1x" onmouseover="wiggle(this)" onmouseout="stopwiggle(this)"></i></button>
      </div>
      `
    })
  }
  addContainer() 
function add() {
  let toDoObj = {
    id:counter,text: input.value,isCompleted:false
  }
  counter++;
  localStorage.setItem("counter",counter)
  toDosArray.unshift(toDoObj);
  localStorage.setItem("toDosArr",JSON.stringify(toDosArray))
  addContainer();
  input.value="";
}
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(input.value!==""){
add();
  }
  
})
function complete(elem){
  let index = toDosArray.findIndex(el=>el.id===Number(elem.parentElement.id.split("-")[1]));
  let currentTask = toDosArray[index];
  currentTask.isCompleted?currentTask.isCompleted=false:currentTask.isCompleted=true;
   localStorage.setItem("toDosArr",JSON.stringify(toDosArray))
  if(currentTask.isCompleted){
    elem.parentElement.classList.add("completed")
  }
  else{
    elem.parentElement.classList.remove("completed")
  }
}
function deleteTask(elem){
  let index = toDosArray.findIndex(el=>el.id===Number(elem.parentElement.id.split("-")[1]));
  toDosArray.splice(index,1);
  localStorage.setItem("toDosArr",JSON.stringify(toDosArray))
   elem.parentElement.remove()
}
 function wiggle(em){
      em.classList.toggle("fa-shake");
     }
     function stopwiggle(em){
      em.classList.toggle("fa-shake");
     }
    