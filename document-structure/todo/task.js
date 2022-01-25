const inputPanel = document.getElementById('task__input');
const taskPanel = document.getElementById('tasks__list');
const taskArray = document.getElementsByClassName('task__title');
const taskRemove = document.getElementsByClassName('task__remove');

let html = `<div class="task">
  <div class="task__title">
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`

inputPanel.addEventListener('change', (e) => {
		taskPanel.insertAdjacentHTML('beforeEnd', html);
		taskArray[taskArray.length -1].append(inputPanel.value);
		
		taskRemove[taskArray.length -1].addEventListener('click', (e) => {
		console.log(idx)
		// taskPanel.getElementsByClassName('task')[taskArray.length ].remove();
	
		});
	

		inputPanel.value = '';

		
})

