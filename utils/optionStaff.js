const editStaffBtn = document.querySelectorAll('table tbody #edit-btn');
const profileStaffBtn = document.querySelectorAll('table tbody #profile-btn');
const deleteStaffBtn = document.querySelectorAll('table tbody #delete-btn');

const editStaffInterface = document.querySelector('.edit-staff-interface')
const deleteStaffInterface = document.querySelector('.delete-staff-interface')

const inputTextEle = document.querySelectorAll('.detail-staff-info p input');
const labelEle = document.querySelectorAll('.detail-staff-info p label');
const pEle = document.querySelectorAll('.detail-staff-info p');
const btnSaveStaff = document.getElementById('save-edit-staff');
const editDialog = document.querySelector('.edit-staff-dialog');
const closeDialogEle = document.getElementById('close-dialog');

const confirmDeleteBtn = document.getElementById('confirm-delete');
const cancelDeleteBtn = document.getElementById('cancel-delete');
const successfulDelete = document.querySelector('.successful-save-2')
const textSuccessfulDel = document.querySelector('.successful-save-2 p');
// console.log(pEle);

var getStaffId;
var virtualDelStaffForm = document.forms['virtual-delete-staff-form'];
var virtualEditStaffForm = document.forms['virtual-edit-staff-form'];
console.log(virtualEditStaffForm)


editStaffBtn.forEach((ele) => {
    ele.addEventListener('click', () => {
        btnSaveStaff.style.display = "";
        editStaffInterface.style.display = "block";
        getStaffId = ele.getAttribute("data-id");
        // console.log(virtualEditStaffForm);
    })
})

btnSaveStaff.addEventListener('click', () => {
    editStaffInterface.style.display = "none";
    // saveNotice.style.display = "block";
    virtualEditStaffForm.action = '/staff/' + getStaffId + '?_method=PUT';
    virtualEditStaffForm.submit();
})


deleteStaffBtn.forEach((e) => {
    e.addEventListener('click', () => {
        deleteStaffInterface.style.display = "block";
        getStaffId = e.getAttribute("data-id");
    })
})

confirmDeleteBtn.addEventListener('click', () => {
    deleteStaffInterface.style.display = "none";
    virtualDelStaffForm.action = '/staff/' + getStaffId + '?_method=DELETE';
    virtualDelStaffForm.submit();
    successfulDelete.style.display = "block";
    textSuccessfulDel.innerText = "Xóa thành công";
    autoClose();
})

cancelDeleteBtn.addEventListener('click', () => {
    deleteStaffInterface.style.display = "none";
})


closeDialogEle.addEventListener('click', () => {
    editStaffInterface.style.display = "none";
})

// When the user clicks anywhere outside of the dialog, close it
window.onclick = function(event) {
    if (event.target == editStaffInterface) {
        editStaffInterface.style.display = "none";
    }
}

function autoClose(){
    timeout = setTimeout(() => {
        successfulDelete.style.display = "none";
    }, 3000);
}
