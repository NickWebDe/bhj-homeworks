let num = document.querySelector('.interest__check');
const arr = document.getElementsByClassName('interest');

console.log(arr.selectIndex)
num.onclick = function (e) {	
	num.indeterminate = true;
 console.log(document.querySelectorAll('.interest__check'));
}