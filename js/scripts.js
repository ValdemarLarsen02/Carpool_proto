let selectedCity = 'Ingen valgt';
let selectedOption = 'Ingen valgt';

function handleLogin(event) {
    event.preventDefault(); //VI gider ikke reload af siden
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Udfyld både brugernavn og adgangskode.');
        return;
    }
    if (username === "admin" && password === "1234") {
        alert('Login succesfuldt!');
        window.location.href = "/lokation/index.html";
    } else {
        alert('Forkert brugernavn eller adgangskode.');
    }
}


function selectOption(optionId) {
    document.getElementById('passager').classList.remove('selected');
    document.getElementById('chauffor').classList.remove('selected');

    document.getElementById(optionId).classList.add('selected');
    selectedOption = optionId;
    console.log("Valgte option:", selectedOption);
}

function updateCity() {
    const dropdown = document.getElementById("cityDropdown");
    selectedCity = dropdown.value;
    console.log("Valgte by:", selectedCity);
}


function continueAction() {
    if (selectedCity) {
        alert(`Du har valgt byen: ${selectedCity}`);
    } else {
        alert("Vælg venligst en by først.");
    }
}

