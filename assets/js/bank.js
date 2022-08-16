// Desposit Script
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositNewString = depositInput.value;
    const depositNew = parseFloat(depositNewString);
    const depositBalance = document.getElementById('deposit');
    const depositOldString = depositBalance.innerText;
    const depositOld = parseFloat(depositOldString);

    if (isNaN(depositNew) || depositNew <= 0) {
        alert('Input valid Deposit amount')
        return;

    }
    const depositUpdate = depositNew + depositOld;
    depositBalance.innerText = depositUpdate.toFixed(2);
    depositInput.value = '';

    // Balance adjustment area
    const balance = document.getElementById('balance');
    const balanceOldString = balance.innerText;
    const balanceOld = parseFloat(balanceOldString);
    const balanceNew = balanceOld + depositNew
    balance.innerText = balanceNew;

})

// Withdraw Script
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawNewString = withdrawInput.value;
    const withdrawNew = parseFloat(withdrawNewString);
    const withdrawBalance = document.getElementById('withdraw');
    const withdrawOldString = withdrawBalance.innerText;
    const withdrawOld = parseFloat(withdrawOldString);
    withdrawInput.value = '';
    if (isNaN(withdrawNew) || withdrawNew <= 0) {
        alert('Input valid withdraw amount')
        return;

    }


    // Balance adjustment area
    const balance = document.getElementById('balance');
    const balanceOldString = balance.innerText;
    const balanceOld = parseFloat(balanceOldString);


    if (withdrawNew > balanceOld) {
        alert(
            'Insufficient Balance');
        return;

    }
    const withdrawUpdate = withdrawNew + withdrawOld;
    withdrawBalance.innerText = withdrawUpdate.toFixed(2);


    const balanceNew = balanceOld - withdrawNew
    balance.innerText = balanceNew;
})