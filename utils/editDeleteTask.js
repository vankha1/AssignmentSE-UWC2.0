const editTaskBtn = document.getElementsByClassName('fa-solid fa-pen');
const deleteTaskBtn = document.getElementsByClassName('fa-solid fa-trash');
const titleEditDialog = document.querySelector('.edit-task-interface .edit-task-dialog h2');

const deleteTaskEle = document.querySelector('.delete-task-interface');
const cancelDelTaskBtn = document.getElementById('cancel-delete');
const confirmDelTaskBtn = document.getElementById('confirm-delete');
// console.log(deleteTaskEle)

const editTaskEle = document.querySelector('.edit-task-interface');
const saveEditTaskBtn = document.getElementById('btn-continue-edit');

const taskIdInput = document.querySelector('.edit-task-dialog #taskId')
const dateStartInput = document.getElementById('date-start-input');
const shiftInput = document.querySelector('.edit-task-dialog #shift');
const collectorInput = document.querySelector('.edit-task-dialog #collector');


const rowsOfbody = document.querySelectorAll('table tbody tr');
const closeEditDialogEle = document.querySelector('.edit-task-dialog #close-dialog');

var getTaskId;
var virtualDelForm = document.forms['virtual-delete-form'];
var virtualEditForm = document.forms['virtual-edit-form'];
// console.log(virtualEditForm)

for (let i = 0; i < editTaskBtn.length; i++){
    editTaskBtn[i].addEventListener('click', () => {
        event.stopPropagation();
        editTaskEle.style.display = "block";
        titleEditDialog.innerHTML = "Chỉnh sửa nhiệm vụ";

        taskIdInput.value = rowsOfbody[i].children[0].innerHTML;
        dateStartInput.value = rowsOfbody[i].children[3].innerHTML;
        shiftInput.value = rowsOfbody[i].children[4].innerHTML;
        collectorInput.value = rowsOfbody[i].children[1].innerHTML;
        getTaskId = editTaskBtn[i].getAttribute('data-id');
        // When the user clicks anywhere outside of the dialog, close it
        window.onclick = function(event) {
            if (event.target == editTaskEle) {
                editTaskEle.style.display = "none";
            }
        }
        // console.log(getTaskId);
    })
}

saveEditTaskBtn.addEventListener('click', () => {
    editTaskEle.style.display = "none";
    // saveNotice.style.display = "block";
    virtualEditForm.action = '/task/' + getTaskId + '?_method=PUT';
    virtualEditForm.submit();
})

closeEditDialogEle.addEventListener('click', () => {
    editTaskEle.style.display = "none";
})





// Delete button part ----------------------------------

for (let i = 0; i < deleteTaskBtn.length; i++){
    deleteTaskBtn[i].addEventListener('click', () => {
        event.stopPropagation(); // avoid change to detail task when clicking delete button
        deleteTaskEle.style.display = "block";
        // console.log(deleteTaskBtn[i].getAttribute('data-id'));
        getTaskId = deleteTaskBtn[i].getAttribute('data-id');
    })
}

cancelDelTaskBtn.addEventListener('click', () => {
    deleteTaskEle.style.display = "none";
})

confirmDelTaskBtn.addEventListener('click', () => {
    deleteTaskEle.style.display = "none";
    saveNotice.style.display = "block";
    virtualDelForm.action = '/task/' + getTaskId + '?_method=DELETE';
    virtualDelForm.submit();
    // setTimeout(() => {
    saveNoticeText.textContent = "Xóa thành công";
    // }, 5000);
    // autoClose();
})
