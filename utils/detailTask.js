const btnSendingRoute = document.getElementById('btn-sending-route');
const btnBackRoute = document.getElementById('btn-back-route');
const btnConfirmRoute = document.getElementById('btn-confirm-route');
const saveNotice = document.querySelector('.successful-save');
const saveNoticeText = document.querySelector('.successful-save p');



btnSendingRoute.addEventListener('click', () => {
    btnConfirmRoute.style.display = "block";
    btnSendingRoute.style.display = "none";
})

btnConfirmRoute.addEventListener('click', () => {
    btnBackRoute.style.display = "none";
    saveNotice.style.display = "block";
    saveNoticeText.textContent = "Gửi thành công";
    autoClose();
})

function autoClose(){
    timeout = setTimeout(() => {
        saveNotice.style.display = "none";
        location.replace('/home-page');
    }, 5000);
}