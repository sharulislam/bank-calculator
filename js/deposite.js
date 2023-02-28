//step 1: add event listener to the deposite button
document.getElementById("btn-deposite").addEventListener("click", function () {
  //step2 : get the amount from the deposite input field
  //for input field use .value to get the amount from input field
  const depositeField = document.getElementById("deposite-amount");
  const depositeAmount = depositeField.value;
  const depositeAmounts = parseFloat(depositeAmount); //i was string so we convert it
  //step 3: get the current deposite total
  const depositeTotal = document.getElementById("deposite-total");
  const depositeBalance = depositeTotal.innerText;
  const depositeBalances = parseFloat(depositeBalance); //we convert it into numbers

  //Total deposite balance calculation
  const currentDepositeAmount = depositeBalances + depositeAmounts;
  // set previous deposite amount = new deposite amount
  depositeTotal.innerText = currentDepositeAmount;

  //deposite balance addition to total bank balance

  const totalBankBalance = document.getElementById("total-bank-balance");
  const totalBalance = totalBankBalance.innerText;
  const totalBalances = parseFloat(totalBalance);

  // now addition deposite + total balace
  const currentTotalBalance = totalBalances + depositeAmounts;
  //set the new total balance to previous total balace inner text it shows in strings
  totalBankBalance.innerText = currentTotalBalance;

  //new step -8 now get the withdraw balance

  // step 7: clear the deposite field
  depositeField.value = "";
});
