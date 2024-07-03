function addTask() {
  var ajoutTache = document.getElementById('ajoutTache').value;
  var todolist = document.getElementById('todolist');

  if (ajoutTache !== "") {
    var paragraph = document.createElement('p');
    paragraph.innerText = ajoutTache;
    paragraph.classList.add('paragraph_style');
    todolist.appendChild(paragraph);
    document.getElementById('ajoutTache').value = "";
    paragraph.addEventListener('click',function(){
      paragraph.classList.add('paragraph_click');
    })
    paragraph.addEventListener('dblclick',function(){
      todolist.removeChild(paragraph);
    })
    
  } else {
    alert("Please enter a task.");
  }
}
