const nname = document.getElementById('nname');
let userName = document.getElementById('user__name');
let avatar = document.getElementById('avatar');
let userAvatar = document.getElementById('user__avatar');
let message = document.getElementById('message');
let userMessage = document.getElementById('user__msg');


// функция должна добавлять отредактированное имя в столбик с чатом
function replaceName() {
    // имя
let nnameText = nname.value;
let trimmedName = nnameText.trim();

nname.value = trimmedName.charAt(0).toUpperCase() + trimmedName.toLowerCase().slice(1);

userName.textContent = nname.value;
}

// аватарка
function addUserImg() {
let avatarLink = avatar.value;
userAvatar.src = avatarLink;
}

// сообщение
function checkSpam() {
let messageText = message.value.replace('viagra'&&'XXX', '***');
userMessage.textContent = messageText;
userMessage.classList.add('active_msg');
}

function allFunctions() {
    replaceName()
    addUserImg()
    checkSpam()
}


// отмена обновления
const button = document.getElementById('btn');
button.onclick = (event) => {
    event.preventDefault();
    }

button.addEventListener('click', allFunctions);


nname.addEventListener('submit', function (evt) {
evt.preventDefault(); 


});

