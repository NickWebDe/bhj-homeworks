const botMsgArr = ['Мы не работаем!', 'Мы заняты, давайте в другой раз!', 'Напишите позже!', 'Досвидание!', 'Аривидерчи!', 'Не пишите нам больше!'];
const input = document.getElementById('chat-widget__input');
document.querySelector('.chat-widget').addEventListener('click', (e) => e.currentTarget.className = 'chat-widget chat-widget_active');


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


input.addEventListener('change', () => {
  document.getElementById('chat-widget__messages').innerHTML += 
  `<div class="message message_client">
     <div class="message__time"></div>
     <div class="message__text"></div>
   </div>
 `;

 let clMsgLst = document.querySelectorAll('.message.message_client');
 clMsgLst[clMsgLst.length - 1].lastElementChild.textContent = input.value;

 input.value = '';


 setTimeout(() => { 
  document.getElementById('chat-widget__messages').innerHTML += 
  `<div class="message">
     <div class="message__time"></div>
     <div class="message__text"></div>
   </div>
 `;
 let botMsgLst = document.querySelectorAll('.message');
 botMsgLst[botMsgLst.length - 1].lastElementChild.textContent = botMsgArr[randomInteger(0, botMsgArr.length)] 
 },
   1000)
});
