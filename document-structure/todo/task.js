const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const taskTitleArr = document.getElementsByClassName('task__title');
const removeTask = document.getElementsByClassName('task__remove');
const htmlTask = `<div class="task">
  <div class="task__title">
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`

taskInput.addEventListener('change', (e) => {
	e.preventDefault();
	taskList.insertAdjacentHTML('beforeEnd', htmlTask);
	taskTitleArr[taskTitleArr.length -1].append(taskInput.value);
	removeTask[removeTask.length -1].addEventListener('click', (e) => {
	e.currentTarget.closest('div').remove()
   })

	// taskInput.reset() - почему то такой подход не работает для очистки поля ввода :(

	taskInput.value = '';
})














