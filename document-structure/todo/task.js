const taskInput = document.getElementById('task__input');
const removeTask = document.getElementsByClassName('task__remove');

taskInput.addEventListener('change', (e) => {
	document.getElementById('tasks__form').addEventListener('submit', (e) => e.preventDefault() );
	let htmlElement = document.createElement('div');
	htmlElement.innerHTML = `<div class="task">
     <div class="task__title"> `+ taskInput.value + `
     </div>
     <a href="#" class="task__remove">&times;</a>
    </div>`
	document.getElementById('tasks__list').insertAdjacentElement("beforeend",htmlElement );
	document.getElementById('tasks__form').reset();
	removeTask[removeTask.length -1].addEventListener('click', (e) => {
 	e.currentTarget.closest('div').remove()
    })
})













