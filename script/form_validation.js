window.addEventListener("load", voorafInladen);

function voorafInladen() {
    let email = document.getElementById("email");
    let no_email = document.getElementById("no-email");
    let voornaam = document.getElementById("voornaam");
    let achternaam = document.getElementById("achternaam");
    let errorachternaam = document.getElementById("errorachternaam");
    let errorvoornaam = document.getElementById("errorvoornaam");
    let postcode = document.getElementById("postcode");
    let errorpostcode = document.getElementById("errorpostcode");
    let PIN = document.getElementById("PIN");
    let errorPIN = document.getElementById("errorPIN");

    PIN.addEventListener("focusout", pinCheck);

    function pinCheck() {
        if (PIN.value.length < 4 || PIN.value.length > 4) {
            PIN.style.backgroundColor = "red"
            errorPIN.style.display = "block";
            errorPIN.innerHTML = "Deze PIN bestaat niet"
            return false;
        } else {
            errorPIN.style.display = "none";
            PIN.style.backgroundColor = "green";
            return true;
        }
    }

// function results

    postcode.addEventListener("focusout", postcodeCheck);

    function postcodeCheck() {
        postcode.style.backgroundColor = "none";
        if (postcode.value < 612 || postcode.value > 9992) {
            postcode.style.backgroundColor = "red"
            errorpostcode.style.display = "block";
            errorpostcode.innerHTML = "Deze postcode bestaat niet"
            return false;
        } else {
            errorpostcode.style.display = "none";
            postcode.style.backgroundColor = "green";
            return true;
        }
    }

    email.addEventListener("input", emailCheck)

    function emailCheck() {

        if (/^[A-Za-z]+\.[A-Za-z]+@(student\.)?kdg\.be$/.test(email.value)) {
            email.style.backgroundColor = "green";
            no_email.style.display = "none";
            return true;

        } else {
            no_email.style.display = "block";
            email.style.backgroundColor = "red";

            return false;
        }

    }


    voornaam.addEventListener("focusout", geenSpatiesVoornaam);

    function geenSpatiesVoornaam() {
        if (voornaam.value.match(/\s/g) || voornaam.value.length < 1) {
            voornaam.style.backgroundColor = "red";
            errorvoornaam.innerHTML = "Spaties zijn niet toegestaan of het veld is leeg";

            return false;

        } else {
            voornaam.style.backgroundColor = "green";
            errorvoornaam.innerHTML = "";
            return true;
        }
    }

    achternaam.addEventListener("focusout", geenSpatiesAchternaam)

    function geenSpatiesAchternaam() {
        achternaam.style.backgroundColor = "none";

        if (achternaam.value.match(/\s/g) || achternaam.value.length < 1) {
            achternaam.style.backgroundColor = "red";
            errorachternaam.innerHTML = "Spaties zijn niet toegestaan of het veld is leeg"

            return false;


        } else {
            errorachternaam.innerHTML = "";
            achternaam.style.backgroundColor = "green";
            return true;

        }
    }

    let form = document.getElementById("form")
    form.addEventListener("submit", checkValidatie)

    function checkValidatie(event) {
        let buttontekst = document.getElementById("button-code");
        // check all results
        if (!geenSpatiesVoornaam() || !emailCheck() || !geenSpatiesAchternaam() || !postcodeCheck() || !pinCheck()) {
            buttontekst.innerHTML = "Niet alle velden zijn (correct) ingevuld.";
            event.preventDefault();
        }

    }
}
