const buttonInsert = document.querySelector('#insertDes');
const entries = [];

class DataBase {
    constructor(amount, expense, price, date){
        this.amount = amount;
        this.expense = expense;
        this.price = price;
        this.date = date;
    }
}


buttonInsert.addEventListener("click", function() {
    const inputDes = document.querySelector('#inputDes').value;
    const inputPrice = document.querySelector('#priceDes').value;
    const inputDate = document.querySelector('#dateDes').value;
    const inputAmount = document.querySelector('#inputAmount').value;
    
    const newEntry = new DataBase(inputAmount, inputDes, inputPrice, inputDate);
    entries.push(newEntry);
    
    const outputTable = document.querySelector('#table');
    
    outputTable.innerHTML = '';

    const newColumn1 = document.createElement('th');
    const newColumn2 = document.createElement('th');
    const newColumn3 = document.createElement('th');
    const newColumn4 = document.createElement('th');

    newColumn1.textContent = "Quantidade";
    newColumn2.textContent = "Despesas";
    newColumn3.textContent = "Preço";
    newColumn4.textContent = "Data";

    outputTable.appendChild(newColumn1);
    outputTable.appendChild(newColumn2);
    outputTable.appendChild(newColumn3);
    outputTable.appendChild(newColumn4);


    entries.forEach(entry => {
        const newRow = document.createElement('tr');
        const newCell1 = document.createElement('td');
        const newCell2 = document.createElement('td');
        const newCell3 = document.createElement('td');
        const newCell4 = document.createElement('td');
        
        newCell1.textContent = entry.amount;
        newCell2.textContent = entry.expense;
        newCell3.textContent = entry.price;
        newCell4.textContent = entry.date;
        
        newRow.appendChild(newCell1);
        newRow.appendChild(newCell2);
        newRow.appendChild(newCell3);
        newRow.appendChild(newCell4);
        
        outputTable.appendChild(newRow);
    });
});
