//add event handler with the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //get the amount from input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString); //convert string amount to number amount

  
  // step last
  withdrawField.value = "";

  if(isNaN(newWithdrawAmount)){
    alert('please provide a number');
    return;
  }

  //step 3 :
  const withdrawtotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawtotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  console.log(previousWithdrawTotal);

 

  //step 6
  const balaceTotalElement = document.getElementById("total-bank-balance");
  const previousBalaceTotalString = balaceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalaceTotalString);

  

  if(newWithdrawAmount>previousBalanceTotal){
    alert('Not enough balance');
    return;
  }

   //step 4 :
   const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   //step 5  set total withdraw amount
   withdrawtotalElement.innerText = currentWithdrawTotal;

  //step-7 calculate new balacne total
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  //set the value
  balaceTotalElement.innerText = newBalanceTotal;

  
});
