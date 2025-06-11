
function add() {

  const container = document.getElementById("data-container");
  let i = document.getElementById("data");
  const input= document.getElementById("data").value;
  const newData = document.createElement("div");

  newData.classList.add('box');
if (input!=="") {
  newData.innerHTML=`<input type="checkbox" onclick="tgl(this)"/><span>${input}</span> <button type="submit" id="del" onclick="del()">×</button>`;
  container.prepend(newData);
 i.value="";
} 
else {
  console.log("work");
}
}



 function tgl(checkbox) {
  const box = checkbox.parentElement;
  const container = document.getElementById("data-container");

  if (checkbox.checked) {
    box.classList.add('completed');
    container.appendChild(box); 
  } else {
    box.classList.remove('completed');
    container.prepend(box);
  }
}


function del(){
  const box = document.querySelector(".box");
  const container = document.getElementById("data-container");
  container.removeChild(box);

}