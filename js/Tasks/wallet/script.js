const tarih = document.querySelector("#tarih");
const tutar = document.querySelector("#tutar");
const aciklama = document.querySelector("#aciklama");
const tableBody = document.querySelector("#tableBody");
const gelirTotal = document.querySelector("#total");
const gelir = document.querySelector("#incomeTotal");
const gider = document.querySelector("#expenseTotal");
const bakiye = document.querySelector("#balance");
const kaydet = document.querySelector("#kaydet");
const ekle = document.querySelector("#ekle");

var data = [];


//! ----------------------------------TABLE-BODY------------------------------//

function populateTable() {
    tableBody.innerHTML = "";

    data.forEach(function (item, index) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.tarih}</td>
            <td>${item.aciklama}</td>
            <td>${item.tutar}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteRow(${index})">Sil</button> |
                <button class="btn btn-warning" onclick="editRow(${index})">Düzenle</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}



//! ----------------------------------GİDER------------------------------//


kaydet.addEventListener("click", function () {
    const tarihValue = tarih.value;
    const tutarValue = parseFloat(tutar.value).toFixed(2);
    const aciklamaValue = aciklama.value;

    if (tarihValue && !isNaN(tutarValue) && aciklamaValue) {
        data.push({
            tarih: tarihValue,
            tutar: tutarValue,
            aciklama: aciklamaValue,
        });

        populateTable();

        tarih.value = "";
        tutar.value = "";
        aciklama.value = "";

        gider.innerHTML = (parseFloat(gider.innerHTML) + parseFloat(tutarValue)).toFixed(2);
        bakiye.innerHTML = (parseFloat(gelir.innerHTML) - parseFloat(gider.innerHTML)).toFixed(2);
    } else {
        alert("Please fill in all fields with valid values.");
    }
});


//! ----------------------------------GELİR------------------------------//


ekle.addEventListener("click", function () {
    const totalInput = document.querySelector("#total");

    if (parseFloat(totalInput.value) > 0 && totalInput.value.trim() !== "") {
        const currentDate = new Date().toISOString().split('T')[0];

        data.push({
            tarih: currentDate,
            tutar: parseFloat(totalInput.value).toFixed(2),
            aciklama: "Gelir",
        });

        gelir.innerHTML = (parseFloat(gelir.innerHTML) + parseFloat(totalInput.value)).toFixed(2);
        bakiye.innerHTML = (parseFloat(gelir.innerHTML) - parseFloat(gider.innerHTML)).toFixed(2);


        totalInput.value = "";


        populateTable();
    } else {
        alert("Please enter a valid amount greater than 0.");
    }
});


//! ----------------------------------SİLME------------------------------//


function deleteRow(index) {
    const deletedRow = data.splice(index, 1)[0];
    populateTable();

    if (deletedRow) {
        if (deletedRow.aciklama === 'Gelir') {
            gelir.innerHTML = (parseFloat(gelir.innerHTML) - deletedRow.tutar).toFixed(2);
        } else {
            gider.innerHTML = (parseFloat(gider.innerHTML) - deletedRow.tutar).toFixed(2);
        }

        bakiye.innerHTML = (parseFloat(gelir.innerHTML) - parseFloat(gider.innerHTML)).toFixed(2);
    }
}

populateTable();

//! ----------------------------------KEYBOARD------------------------------//

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (tutar === document.activeElement) {
            kaydet.click();
        } else if (aciklama === document.activeElement) {
            kaydet.click();
        } else {
            ekle.click();
        }
    }
});


