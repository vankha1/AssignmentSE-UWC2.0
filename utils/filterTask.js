
// filter task
const previousBtn = document.getElementById('previous-table-filter');
const nextBtn = document.getElementById('next-table-filter');
const numRows = document.getElementById('number-of-rows-filter');
const orderNums = document.getElementById('order-number-filter');
const sumRows = document.getElementById('number-of-pages-filter');
const flipFlopPart = document.querySelector(".flip-flop-part");
const flipFlopFiltering = document.querySelector(".flip-flop-filtering");

const rows = document.querySelectorAll('table tr');
const btnEle = document.getElementById('btn-filter');
const taskId = document.getElementById('task-id');
const dateEle = document.getElementById('date');
const statusEle = document.getElementById('status');

const disableBtn = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
}

const enableBtn = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
}
let currentPage = 1;
let numberOfItems = 0;
const itemPerPage = 10;

function setCurrentPage(pageNum, tempArr){
    currentPage = pageNum;
    if (currentPage === 1){
        disableBtn(previousBtn);
    }
    else{
        enableBtn(previousBtn);
    }

    if (Math.ceil(numberOfItems / itemPerPage) === currentPage){
        disableBtn(nextBtn);
    }
    else{
        enableBtn(nextBtn);    
    }

    let lowerBoundItem = (pageNum - 1) * itemPerPage; // 11
    let upperBoundItem = pageNum * itemPerPage; //20

    for (let i = 0; i < numberOfItems; i++){
        tempArr[i].style.display = "none";
        if (i >= lowerBoundItem && i < upperBoundItem){
            tempArr[i].style.display = "";
        }
    }
    orderNums.innerHTML = lowerBoundItem + 1;
    numRows.innerHTML = pageNum === Math.ceil(numberOfItems / itemPerPage) ? tempArr.length : upperBoundItem;
}
function changeTable(tempArr){
    setCurrentPage(1, tempArr);

    previousBtn.onclick = () => {
        setCurrentPage(currentPage - 1, tempArr);
    }
    nextBtn.onclick = () => {
        setCurrentPage(currentPage + 1, tempArr);
    }
}

btnEle.addEventListener('click', () => {
    // var dateEle.value = convertString(dateEle.value);
    btnCreateTask.style.display = "none";
    flipFlopPart.style.display = "none";
    flipFlopFiltering.style.display = "flex";
    let num = 0, tempArr = [];
    // console.log(rows.filter(taskId.value == "0001"));
    if (taskId.value){
        if (dateEle.value == "" && statusEle.value == ""){
            for (var i = 1; i < rows.length; i++){
                if (rows[i].getElementsByTagName('th')[0].innerHTML == taskId.value){
                    tempArr.push(rows[i]);
                    // console.log(1);
                   num++;
                }
                else{
                    rows[i].style.display = "none";
                }
            }
        }
        else if (dateEle.value != "" && statusEle.value == ""){
            for (var i = 1; i < rows.length; i++){
                if (rows[i].getElementsByTagName('th')[0].innerHTML == taskId.value && rows[i].getElementsByTagName('th')[3].innerHTML == dateEle.value){
                    tempArr.push(rows[i]);
                    num++;
                }
                else{
                    rows[i].style.display = "none";
                }
            }
        }
        else if (dateEle.value == "" && statusEle.value != ""){
            for (var i = 1; i < rows.length; i++){
                if (rows[i].getElementsByTagName('th')[0].innerHTML == taskId.value && rows[i].getElementsByTagName('th')[2].innerHTML == statusEle.value){
                    tempArr.push(rows[i]);
                    num++;
                }
                else{
                    rows[i].style.display = "none";
                }
            }
        }
        else{
            for (var i = 1; i < rows.length; i++){
                if (rows[i].getElementsByTagName('th')[0].innerHTML == taskId.value && rows[i].getElementsByTagName('th')[2].innerHTML == statusEle.value && rows[i].getElementsByTagName('th')[3].innerHTML == dateEle.value){
                    tempArr.push(rows[i]);
                    num++;
                }
                else{
                    rows[i].style.display = "none";
                }
            }
        }
    }
    else{
        if (dateEle.value == "" && statusEle.value == ""){
            location.replace('/task')
        }
        else if (dateEle.value != "" && statusEle.value == ""){
            for (var i = 1; i < rows.length; i++){
                if (rows[i].getElementsByTagName('th')[3].innerHTML == dateEle.value){
                    tempArr.push(rows[i]);
                    num++;
                }
                else{
                    rows[i].style.display = "none";
                }
            }
        }
        else if (dateEle.value == "" && statusEle.value != ""){
            for (var i = 1; i < rows.length; i++){
                if (rows[i].getElementsByTagName('th')[2].innerHTML == statusEle.value){
                    tempArr.push(rows[i]);
                    num++;
                }
                else{
                    rows[i].style.display = "none";
                }
            }
        }
        else{
            for (var i = 1; i < rows.length; i++){
                if (rows[i].getElementsByTagName('th')[2].innerHTML == statusEle.value && rows[i].getElementsByTagName('th')[3].innerHTML == dateEle.value){
                    tempArr.push(rows[i]);
                    num++;
                }
                else{
                    rows[i].style.display = "none";
                }
            }
        }
    }
    numberOfItems = num;
    sumRows.innerHTML = numberOfItems;
    changeTable(tempArr);
})


/* function convertString(ele){
    if (ele == ""){
        return "";
    }
    const year = ele.substring(0, 4);
    let month = ele.substring(5, 7);
    if (month[0] == '0'){
        month = month.substring(1, );
    }
    let day = ele.substring(8,);
    if (day[0] == '0'){
        day = day.substring(1, );
    }
    ele = day + "/" + month + "/" + year;
    return ele;
} */

// console.dir(rows);
const filter = (e) => {
    let tempArr = [], num = 0;
    let searchWord = e.target.value;
    for (let i = 1; i < rows.length; i++){
        let row = rows[i];
        let fieldText = "";
        for (let j = 0; j < rows[i].children.length; j++){
            fieldText += rows[i].children[j].innerText + ""
        }
        if (fieldText.toLowerCase().includes(String(searchWord).toLowerCase())) {
            // console.log(100);
            row.style.display = '';
            tempArr.push(row);
            num++;
        }
        else{
            row.style.display = 'none';
        }
    }
    // setCurrentPage(1, tempArr)
    btnCreateTask.style.display = "none";
    flipFlopPart.style.display = "none";  
    flipFlopFiltering.style.display = "flex";
    // console.log(tempArr);
    numberOfItems = num;
    sumRows.innerHTML = numberOfItems;
    changeTable(tempArr);
}




