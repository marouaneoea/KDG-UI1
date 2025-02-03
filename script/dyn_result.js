window.addEventListener('load', () => {
    productFiche();
});


function productFiche() {
    const url = new URL(window.location);
    const searchParams = url.searchParams;
    let keuzeWaarde = searchParams.get("keuze");
    const materiaalWaarde = searchParams.get("materiaal");

    console.log(materiaal);

    let besteldeproduct = document.getElementById('besteldeproduct');

    for (let shirt of shirts) {

        if (keuzeWaarde === shirt.naam) {
            const besteldeproductWaarde = `
<section>
        <h2>Bestelde Product</h2>
    
<table class="productfichetabel">
      <th>Invulvelden</th>
      <th>Gegevens</th>  
    <tr>
    <td class="titelstabel">Foto Product: </td>
    <td> <img src="${shirt.foto}" alt ="foto moet nog opgeladen worden"></td>
    </tr>
    <tr>
    <td class="titelstabel">Product naam: </td>
    <td>${shirt.naam}</td>
    </tr>
    <tr>
    <td class="titelstabel">Catogerie: </td>
    <td>${shirt.Catogerie}</td>
    </tr>
    <tr>
    <td class="titelstabel">Prijs: </td>
    <td>${shirt.prijs}</td>
    </tr>
    <tr>
    <td class="titelstabel">Omschrijving: </td>
    <td>${shirt.omschrijving}</td>
    </tr>
      <tr>
    <td class="titelstabel">Genre: </td>
    <td>${genres[shirt.genre]}</td>
    </tr>
    <tr>
    <th>Type: </th>
    <th>Eigenschappen:</th>
    </tr>
    <tr>
    <td class="titelstabel">Kleur: </td>
     <td>${shirt.eigenschappen[0]}</td>
</tr>
<tr>
    <td class="titelstabel">Materiaal: </td>
     <td>${materiaalWaarde}</td>
</tr>
<tr>
    <td class="titelstabel">Design: </td>
     <td>${shirt.eigenschappen[2]}</td>
</tr>
    <tr>
    <th>Link naar product: </th>
    <th><a href="${shirt.link}">Product Pagina</a></th>
    </tr>
    </table> 
</section>`;

            besteldeproduct.innerHTML += besteldeproductWaarde;

        }

    }

}