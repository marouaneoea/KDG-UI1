window.addEventListener('load', vulSelectOptions);

function vulSelectOptions() {
    const genreOptGroups = [];

    for (const genre of genres) {
        const optgroup = document.createElement('optgroup');
        optgroup.setAttribute('label', genre)
        genreOptGroups.push(optgroup);
    }


    for (const shirt of shirts) {
        const selectie = `          
                <option value="${shirt.naam}" >${shirt.naam}</option>   
            `;

        genreOptGroups[shirt.genre].innerHTML += selectie;
    }

    const productSelectie = document.getElementById('product-selectie');
    console.log(genreOptGroups);

    for (const optgroup of genreOptGroups) {
        productSelectie.appendChild(optgroup);
    }
    // nu voor de input velden
    for (const catss of cats) {

        const materiaalselectie = `
<div class="radios">
                        <input id= "${catss}" name="materiaal" required type="radio" value="${catss}">
                        <label for="${catss}">${catss}</label>
               
     </div>   `
        const radio = document.getElementById('radios');
        radio.innerHTML += materiaalselectie;
    }

}