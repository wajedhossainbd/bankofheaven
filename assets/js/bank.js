//// Desposit Script
//document.getElementById('deposit-btn').addEventListener('click', function () {
//    const depositInput = document.getElementById('deposit-input');
//    const depositNewString = depositInput.value;
//    const depositNew = parseFloat(depositNewString);
//    const depositBalance = document.getElementById('deposit');
//    const depositOldString = depositBalance.innerText;
//    const depositOld = parseFloat(depositOldString);
//
//    if (isNaN(depositNew) || depositNew <= 0) {
//        alert('Input valid Deposit amount')
//        return;
//
//    }
//    const depositUpdate = depositNew + depositOld;
//    depositBalance.innerText = depositUpdate.toFixed(2);
//    depositInput.value = '';
//
//    // Balance adjustment area
//    const balance = document.getElementById('balance');
//    const balanceOldString = balance.innerText;
//    const balanceOld = parseFloat(balanceOldString);
//    const balanceNew = balanceOld + depositNew
//    balance.innerText = balanceNew.toFixed(2);
//
//})
//
//// Withdraw Script
//document.getElementById('withdraw-btn').addEventListener('click', function () {
//    const withdrawInput = document.getElementById('withdraw-input');
//    const withdrawNewString = withdrawInput.value;
//    const withdrawNew = parseFloat(withdrawNewString);
//    const withdrawBalance = document.getElementById('withdraw');
//    const withdrawOldString = withdrawBalance.innerText;
//    const withdrawOld = parseFloat(withdrawOldString);
//    withdrawInput.value = '';
//    if (isNaN(withdrawNew) || withdrawNew <= 0) {
//        alert('Input valid withdraw amount')
//        return;
//
//    }
//
//
//    // Balance adjustment area
//    const balance = document.getElementById('balance');
//    const balanceOldString = balance.innerText;
//    const balanceOld = parseFloat(balanceOldString);
//
//
//    if (withdrawNew > balanceOld) {
//        alert(
//            'Insufficient Balance');
//        return;
//
//    }
//    const withdrawUpdate = withdrawNew + withdrawOld;
//    withdrawBalance.innerText = withdrawUpdate.toFixed(2);
//
//
//    const balanceNew = balanceOld - withdrawNew
//    balance.innerText = balanceNew.toFixed(2);
//})


// Deposit Section

document.getElementById('dep-btn').addEventListener('click', function () {

    // Wrong input Alert

    if (isNaN((parseFloat(document.getElementById('dep-inp').value))) || (parseFloat(document.getElementById('dep-inp').value)) <= 0) {
        alert('Input valid Deposit amount')
        return;

    }

    // Deposit Input

    document.getElementById('dep-total').innerText = ((parseFloat(document.getElementById('dep-total').innerText)) + (parseFloat(document.getElementById('dep-inp').value))).toFixed(2);

    // Deposit Balance Adjustment

    document.getElementById('bal-total').innerText = ((parseFloat(document.getElementById('bal-total').innerText)) + (parseFloat(document.getElementById('dep-inp').value))).toFixed(2);


    // Deposit input clear

    document.getElementById('dep-inp').value = '';


})

// Withdraw Section


document.getElementById('wtd-btn').addEventListener('click', function () {

    // Insufficient balance Alert

    if ((parseFloat(document.getElementById('wtd-inp').value)) > (parseFloat(document.getElementById('bal-total').innerText))) {
        alert(
            'Insufficient Balance');
        return;

    }

    // Wrong input Alert

    if (isNaN((parseFloat(document.getElementById('wtd-inp').value))) || (parseFloat(document.getElementById('wtd-inp').value)) <= 0) {
        alert('Input valid Deposit amount')
        return;

    }

    // Withdraw Input

    document.getElementById('wtd-total').innerText = ((parseFloat(document.getElementById('wtd-total').innerText)) + (parseFloat(document.getElementById('wtd-inp').value))).toFixed(2);

    // Withdraw Balance Adjustment

    document.getElementById('bal-total').innerText = ((parseFloat(document.getElementById('bal-total').innerText)) - (parseFloat(document.getElementById('wtd-inp').value))).toFixed(2);

    // Withdraw input clear

    document.getElementById('wtd-inp').value = '';

})