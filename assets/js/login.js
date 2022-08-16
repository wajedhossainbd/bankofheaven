document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('userEmail');
    const email = emailField.value;
    const passField = document.getElementById('userPass');
    const pass = passField.value;

    if (email === 'wajed@heaven.com' && pass === 'welcome2heaven') {
        location.href = 'bank.html'
    }
    else {
        alert('You are not a member of this Heaven, Rest in Peace')
    }
})