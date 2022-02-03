const taskInput = document.getElementById('task__input');
const removeTask = document.getElementsByClassName('task__remove');
const tasksForm = document.getElementById('tasks__form');
const titleElements = document.getElementsByClassName('task__title');

tasksForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let htmlElement = document.createElement('div');
	htmlElement.innerHTML = `<div class="task">
     <div class="task__title"></div>
     <a href="#" class="task__remove">&times;</a>
    </div>`

	if(taskInput.value.trim() === '') {
		return
	}

	document.getElementById('tasks__list').insertAdjacentElement("beforeend",htmlElement );
	titleElements[titleElements.length - 1].textContent = taskInput.value;
	tasksForm.reset();

	removeTask[removeTask.length -1].addEventListener('click', (e) => {
		e.currentTarget.closest('div').remove()
		})
})
