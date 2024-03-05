

// ================Father's Name==============

let fathername1 = document.querySelector('input[name="fathername"]')
let fathername2= document.querySelector('input[name="fathername2"]')

fathername1.addEventListener("input",()=>{
    fathername2.value= fathername1.value
    
})



// ============== Same as permanent address========= 

let sameAddressCheckbox = document.querySelector('input[name="sameAddress"]');
let permanentAddressFields = document.querySelectorAll('.permanentAddress input[type="text"]');
let correspondenceAddressFields = document.querySelectorAll('.correspondenceAddress input[type="text"]');
let sameAddressFields = document.querySelectorAll('.correspondenceAddress input.sameas');

sameAddressCheckbox.addEventListener('click', function() {
    
    if (sameAddressCheckbox.checked) {
        
       
        
        for (let i = 0; i < permanentAddressFields.length; i++) {
            correspondenceAddressFields[i].value = permanentAddressFields[i].value;
        }
    }  
});

sameAddressCheckbox.addEventListener('click', function() {
    for (let i = 0; i < sameAddressFields.length; i++) {
        sameAddressFields[i].readOnly = this.checked;
    }
});


// =========== Add New Button==============


document.getElementById('addNew').addEventListener('click', function() {
    const existingRow = document.querySelector('.experienceInput');
    const newRow = existingRow.cloneNode(true);

    // Clear input values in the new row
    newRow.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
    });

    // Insert the new row after the existing one
    existingRow.parentNode.insertBefore(newRow, existingRow.nextSibling);

    // Re-attach event listeners to new buttons
    newRow.querySelector('#addNew').addEventListener('click', addNewRow);
    newRow.querySelector('#delete').addEventListener('click', deleteRow);
});

document.getElementById('delete').addEventListener('click', deleteRow);

// Function to add new row
function addNewRow() {
    const existingRow = this.parentNode.parentNode; // Get the parent row
    const newRow = existingRow.cloneNode(true);

    // Clear input values in the new row
    newRow.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
    });

    // Insert the new row after the existing one
    existingRow.parentNode.insertBefore(newRow, existingRow.nextSibling);

    // Re-attach event listeners to new buttons
    newRow.querySelector('#addNew').addEventListener('click', addNewRow);
    newRow.querySelector('#delete').addEventListener('click', deleteRow);
}

// Function to delete row
function deleteRow() {
    const existingRow = this.parentNode.parentNode; // Get the parent row
    if (document.querySelectorAll('.experienceInput').length > 1) {
        // Remove the row
        existingRow.parentNode.removeChild(existingRow);
    }
}

// ++++++++-----------Submit Form-------------+++++++++++

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwYItZL9EzfPDyzeRkovSkkOnlylxrPQsuEYaE5rpE/dev'
//     const form = document.forms['google-sheet']
  
//     form.addEventListener('submitbutton', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//         .catch(error => console.error('Error!', error.message))
//     })