const btn = document.querySelector('.signin_active');
let login = document.getElementsByName('login');

btn.addEventListener('submit', (e) => {
    // let xhr = new XMLHttpRequest();
    e.preventDefault()
    console.log(login[0].value)
    // xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php',false );
    let dataUser = new FormData();
    dataUser.append("1", "22")
    // xhr.send()
    // elem.forEach((e, idx) => {
    //     login.append(e,e)
        console.log(dataUser)


})

