const chat = document.querySelector('.chat-widget__area');

document.querySelector('.chat-widget').onclick = function (e) {
	e.currentTarget.className = 'chat-widget chat-widget_active';
}

const input = document.getElementById('chat-widget__input');

input.onchange = function (e) {
  document.querySelector('.chat-widget__messages').innerHTML += 
	`<div class="message message_client">
    <div class="message__time">09:21</div>
    <div class="message__text"></div>
  </div>
`;
document.querySelector('.message__text').textContent = input.value;
return false;
};


