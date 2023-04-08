const preTableEle2 = document.getElementById('previous-table-2');
const nextTableEle2 = document.getElementById('next-table-2');
const numberOfRows2 = document.getElementById('number-of-rows-2');
const tableEle2 = document.querySelectorAll('#second-table');
// const tableRows2 = document.querySelectorAll('#second-table tbody tr');
const orderNumber2 = document.getElementById('order-number-2');
const sumOfRows2 = document.getElementById('number-of-pages-2');

// console.log(tableEle2)


let curPage2 = 1;
const amountOfItems2 = tableEle2[0].rows.length;
const perPage2 = 7;
const numberOfPages2 = Math.ceil(amountOfItems2 / perPage2);

sumOfRows2.innerHTML = amountOfItems2 - 1;

const btnDisabled = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
}

const btnEnabled = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
}

const handlePageButtonsStatus = () => {
    if (curPage2 === 1) {
        btnDisabled(preTableEle2);
    } else {
        btnEnabled(preTableEle2);
    }

    // console.log(amountOfItems2 - 1, perPage2);

    if ((amountOfItems2 - 1) % perPage2 == 0 && numberOfPages2 - 1 === curPage2){
        // console.log(1);
        btnDisabled(nextTableEle2);
    } 
    else {
        if (numberOfPages2 === curPage2){
            btnDisabled(nextTableEle2);
        } else {
            btnEnabled(nextTableEle2);    
        }
    }
};

function changePage2(pageNum){
    curPage2 = pageNum
    handlePageButtonsStatus();

    let lowerBoundItem = (pageNum - 1) * perPage2 + 1; // 11
    let upperBoundItem = pageNum * perPage2; //20

    // console.log(lowerBoundItem, upperBoundItem);
    
    for (let i = 1; i < amountOfItems2; i++){
        tableEle2[0].rows[i].style.display = "none";
        if (i >= lowerBoundItem && i <= upperBoundItem){
            tableEle2[0].rows[i].style.display = "";
        }
    }
    orderNumber2.innerHTML = lowerBoundItem;
    numberOfRows2.innerHTML = pageNum === numberOfPages2 ? amountOfItems2 - 1 : upperBoundItem;
}

changePage2(1);

preTableEle2.addEventListener('click', () => {
    changePage2(curPage2 - 1);
})

nextTableEle2.addEventListener('click', () => {
    changePage2(curPage2 + 1);
})
