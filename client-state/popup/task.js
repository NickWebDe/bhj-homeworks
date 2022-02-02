const modal = document.getElementById('subscribe-modal');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(getCookie('modal') === 'close') {
        return
    }
    modal.className = 'modal modal_active';
})

document.querySelector('.modal__close.modal__close_times').addEventListener('click', () => {
    modal.className = 'modal';
    document.cookie = 'modal=close';
})