// designation linking with department===============================================
let departmentData = document.querySelector('[name="department"]')
let designationData = document.querySelector('[name="designation"]')
let backEnd = document.querySelector("#backEnd")
let frontEnd = document.querySelector("#frontEnd")
let other = document.querySelector('[name="otherDesignation"]')
departmentData.addEventListener("input", () => {
    if (departmentData.value === "Back-End") {
        frontEnd.style.display = "none"
        backEnd.style.display = "block"
        other.style.display = "none"
    } else if (departmentData.value === "Other") {
        frontEnd.style.display = "none"
        backEnd.style.display = "none"
        other.style.display = "block"
    } else {
        frontEnd.style.display = "block"
        backEnd.style.display = "none"
        other.style.display = "none"
    }
})
// Gender linking with Salutation=============================================== 
let salutation = document.querySelector('[name="salutation"]')
let genderData = document.querySelector('[name="gender"]')
salutation.addEventListener("input", () => {
    if (salutation.value === "Mr.") {
        genderData.value = "Male";
    } else if (salutation.value === "Mrs." || salutation.value === "Miss") {
        genderData.value = "Female"
    } else (
        genderData.value = ""
    )
})
// linking both father input box===============================================
let fathername1 = document.querySelector('input[name="fathername"]')
let fathername2 = document.querySelector('input[name="fathername2"]')
fathername1.addEventListener("input", () => {
    fathername2.value = fathername1.value
})
//  Same as permanent addrss===============================================
let sameAddressCheckbox = document.querySelector('input[name="sameAddress"]');
let permanentAddressFields = document.querySelectorAll('.permanentAddress input[type="text"]');
let correspondenceAddressFields = document.querySelectorAll('.correspondenceAddress input[type="text"]');
let sameAddressFields = document.querySelectorAll('.correspondenceAddress input.sameas');
sameAddressCheckbox.addEventListener('click', function () {
    if (sameAddressCheckbox.checked) {
        for (let i = 0; i < permanentAddressFields.length; i++) {
            correspondenceAddressFields[i].value = permanentAddressFields[i].value;
        }
    }
});
sameAddressCheckbox.addEventListener('click', function () {
    for (let i = 0; i < sameAddressFields.length; i++) {
        sameAddressFields[i].readOnly = this.checked;
    }
});
// Qualification===================================================
function getQualification() {
    let qualTable = document.querySelector('.sectionEight');
    let qualRow1 = Array.from(qualTable.querySelectorAll('tr.secondaryEdu'));
    let qualRow2 = Array.from(qualTable.querySelectorAll('tr.seniorSecEdu'));
    let qualRow3 = Array.from(qualTable.querySelectorAll('tr.gradEdu'));
    let qualRow4 = Array.from(qualTable.querySelectorAll('tr.postGradEdu'));
    let qualRow5 = Array.from(qualTable.querySelectorAll('tr.otherEdu'));
    let qualObj1 = [];
    qualRow1.forEach(s => {
        let obj1 = [];
        obj1.tenthBoard = s.querySelector('[name="tenthBoard"]').value;
        obj1.tenthyear = s.querySelector('[name="tenthyear"]').value;
        obj1.tenthMarksheet = s.querySelector('[name="tenthMarksheet"]').value;
        qualObj1.push(obj1);
    });
    qualRow2.forEach(s => {
        let obj2 = [];
        obj2.twelfthBoard = s.querySelector('[name="twelfthBoard"]').value;
        obj2.twelfthyear = s.querySelector('[name="twelfthyear"]').value;
        obj2.twelfthMarksheet = s.querySelector('[name="twelfthMarksheet"]').value;
        qualObj1.push(obj2);
    });
    qualRow3.forEach(s => {
        let obj3 = [];
        obj3.graduationBoard = s.querySelector('[name="graduationBoard"]').value;
        obj3.graduationyear = s.querySelector('[name="graduationyear"]').value;
        obj3.graduationMarksheet = s.querySelector('[name="graduationMarksheet"]').value;
        qualObj1.push(obj3);
    });
    qualRow4.forEach(s => {
        let obj4 = [];
        obj4.postGradBoard = s.querySelector('[name="postGradBoard"]').value;
        obj4.postGradyear = s.querySelector('[name="postGradyear"]').value;
        obj4.postGradMarksheet = s.querySelector('[name="postGradMarksheet"]').value;
        qualObj1.push(obj4);
    });
    qualRow5.forEach(s => {
        let obj5 = [];
        obj5.twelfthBoard = s.querySelector('[name="otherBoard"]').value;
        obj5.twelfthyear = s.querySelector('[name="otheryear"]').value;
        obj5.twelfthMarksheet = s.querySelector('[name="otherMarksheet"]').value;
        qualObj1.push(obj5);
    });
    return qualObj1
}
// Marksheets===============================================
function selectedFile() {
    let fileSelectors = Array.from(document.querySelectorAll('input[type="file"]'));
    fileSelectors.forEach(c => {
        c.addEventListener('change', e => {
            let files = e.target.files;
            if (files.length > 0) {
                let file = files[0];
                let fr = new FileReader();
                fr.read
                console.log('file selected', file);
            } else {
                console.log('no file selected');
            }
        })
    })
}

// ======================Experience=======================

// Add New Button
document.getElementById('addNew').addEventListener('click', function () {
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



//--------->>>>>>>>>>>>>>>>>>> A P I <<<<<<<<<<<<<<<---------------------

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};

    for (let [name, value] of formData.entries()) {
        if (data[name]) {
            if (!Array.isArray(data[name])) {
                data[name] = [data[name]];
            }
            data[name].push(value);
        } else {
            data[name] = value;
        }
    }

    fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
});
