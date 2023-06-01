
//create an id for each beer entered (start at 4 to accomodate pre-load data)
let id = 4;

//pre load table with data
loadSampleData(0, 'Gateway Gold', 'Fort Myers Brewing Co', '4.1%', 'N/A', 'Blonde Ale');
loadSampleData(1, 'High 5 IPA', 'Fort Myers Brewing Co', '5.9%', '59', 'American IPA');
loadSampleData(2, 'Oaty McOatface', 'Millennial Brewing Co', '6.5', 'N/A', 'Stout');
loadSampleData(3, 'Hoptain Planet', 'Millennial Brewing Co', '7.3', 'N/A', 'American IPA');


//add eventlistener to submit beer button
document.getElementById('submit-beer').addEventListener('click', () => {

    let table = document.getElementById('beer-listing');
    let row = table.insertRow(1);
    row.setAttribute('id', `beer-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('beer-name').value;
    row.insertCell(1).innerHTML = document.getElementById('brewery').value;
    row.insertCell(2).innerHTML = document.getElementById('beer-abv').value;
    row.insertCell(3).innerHTML = document.getElementById('beer-ibu').value;
    row.insertCell(4).innerHTML = document.getElementById('beer-style').value;
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    
    //clear input fields
    document.getElementById('beer-name').value = '';
    document.getElementById('brewery').value = '';
    document.getElementById('beer-abv').value = '';
    document.getElementById('beer-ibu').value = '';
    document.getElementById('beer-style').value = '';
});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-warning border';
    btn.id = id;
    btn.innerHTML = 'Delete';
    
    //encapsulate onClick event
    btn.onclick = () => {
        console.log(`Deleting row with id: beer-${id}`);
        let elementToDelete = document.getElementById(`beer-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

function loadSampleData(id, beer, brewery, abv, ibu, style) {
    let table = document.getElementById('beer-listing');
    let row = table.insertRow(1);
    row.setAttribute('id', `beer-${id}`);
    row.insertCell(0).innerHTML = beer;
    row.insertCell(1).innerHTML = brewery
    row.insertCell(2).innerHTML = abv;
    row.insertCell(3).innerHTML = ibu;
    row.insertCell(4).innerHTML = style;
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id));
}


