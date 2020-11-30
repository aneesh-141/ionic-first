const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalexpenses = 0;

function clear(){
    reasonInput.value="";
    amountInput.value="";
}

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = "Invalid Inputs!";
    alert.message = "Please enter a valid image and amount";
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

confirmBtn.addEventListener('click', () => {

    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0
    ){
        presentAlert();
        return;
    }


    console.log(enteredReason, enteredAmount);
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason+ ": $" + enteredAmount;

    expensesList.appendChild(newItem);

    totalexpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalexpenses;
    clear();
});

cancelBtn.addEventListener('click', ()=>
{

    expensesList.innerHTML = '';
    totalexpenses = 0;
    totalExpensesOutput.textContent = totalexpenses;
    
});