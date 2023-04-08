// Create new Task
const createTaskEle = document.querySelector('.create-task-interface');
const btnCreateTask = document.getElementById('creat-task');
const closeDialogEle = document.getElementById('close-dialog');
const titleCreateDialog = document.querySelector('.create-task-interface .create-task-dialog h2');

btnCreateTask.addEventListener('click', () => {
    createTaskEle.style.display = "block";
    titleCreateDialog.innerHTML = "Tạo mới nhiệm vụ";
    // When the user clicks anywhere outside of the dialog, close it
    window.onclick = function(event) {
        if (event.target == createTaskEle) {
            // console.log(event.target);
            createTaskEle.style.display = "none";
        }
    }
    closeDialogEle.addEventListener('click', () => {
        console.log(2);
        createTaskEle.style.display = "none";
    })
})





// Save new task
const createMcpEle = document.querySelector('.create-mcp');
const createTaskDialogEle = document.querySelector('.create-task-dialog');
const btnBack = document.getElementById('back');
const btnSaveTask = document.getElementById('save-task');
const btnContinue = document.getElementById('btn-continue');
const saveNotice = document.querySelector('.successful-save');
const saveNoticeText = document.querySelector('.successful-save p');
// console.log(saveNoticeText.textContent)

btnContinue.addEventListener('click', () => {
    createMcpEle.style.display = "block";
    createTaskDialogEle.style.display = "none";
})

// btnBack.addEventListener('click', () => {
//     createMcpEle.style.display = "none";
//     createTaskDialogEle.style.display = "block";
// })

// btnSaveTask.addEventListener('click', () => {
//     createTaskEle.style.display = "none";
//     saveNotice.style.display = "block";
//     saveNoticeText.textContent = "Lưu thành công";
//     autoClose();
// })

function autoClose(){
    timeout = setTimeout(() => {
        saveNotice.style.display = "none";
    }, 5000);
}
