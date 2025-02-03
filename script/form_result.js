window.addEventListener('load', () => {
    {
        const url = new URL(window.location);
        const searchParams = url.searchParams;
        const voornaamWaarde = searchParams.get("voornaam");
        const voornaam = document.querySelector('#voornaam');
        const achternaamWaarde = searchParams.get("achternaam");
        const achternaam = document.querySelector('#achternaam');
        const emailWaarde = searchParams.get("email");
        const email = document.querySelector('#email');
        const telefoonnummerWaarde = searchParams.get("telefoonnummer");
        const telefoonnummer = document.querySelector('#telefoonnummer');
        const postcodeWaarde = searchParams.get("postcode");
        const postcode = document.querySelector('#postcode');
        const PINWaarde = searchParams.get("PIN");
        const PIN = document.querySelector('#PIN');
        const keuzeWaarde = searchParams.get("keuze");
        const keuze = document.querySelector('#keuze');
        const materiaalWaarde = searchParams.get("materiaal");
        const materiaal = document.querySelector('#materiaal');
        const maatWaarde = searchParams.get("maat");
        const maat = document.querySelector('#maat');
        const designWaarde = searchParams.get("design");
        const design = document.querySelector('#design');


        voornaam.innerHTML = voornaamWaarde;
        achternaam.innerHTML = achternaamWaarde;
        email.innerHTML = emailWaarde;
        telefoonnummer.innerHTML = telefoonnummerWaarde;
        keuze.innerHTML = keuzeWaarde;
        postcode.innerHTML = postcodeWaarde;
        PIN.innerHTML = PINWaarde;
        materiaal.innerHTML = materiaalWaarde;
        maat.innerHTML = maatWaarde;
        design.innerHTML = designWaarde;

    }
});