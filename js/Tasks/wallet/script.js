const tarih = document.querySelector('#tarih');
const tutar = document.querySelector('#tutar');
const aciklama = document.querySelector('#aciklama');
const tableBody = document.querySelector('#table tbody');
const totalInput = document.querySelector('#total');
const incomeTotal = document.querySelector('#incomeTotal');
const expenseTotal = document.querySelector('#expenseTotal');
const balanceElement = document.querySelector('#balance');
const kaydet = document.querySelector('#kaydet');
const ekle = document.querySelector('#ekle');

kaydet.addEventListener('click', function () {
    const tarihValue = tarih.value;
    const tutarValue = tutar.value;
    const aciklamaValue = aciklama.value;

    // Validate if the values are not empty
    if (tarihValue && tutarValue && aciklamaValue) {
        // Create a new table row
        const newRow = tableBody.insertRow();

        // Insert cells into the row
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        // Set values to the cells
        cell1.textContent = tarihValue;
        cell2.textContent = aciklamaValue;
        cell3.textContent = tutarValue;
        cell4.textContent = "Gelir"; // You may replace this with the appropriate value

        // Clear input fields after adding a row
        tarih.value = '';
        tutar.value = '';
        aciklama.value = '';

        // Update totals after adding a new row
        updateTotals();
    } else {
        alert('Please fill in all fields.');
    }
});

function updateTotals() {
    incomeTotal.textContent = 0;
    expenseTotal.textContent = 0;
    
    // Implement your logic to update totals here
    // ...

    // Example: Updating the balance
    // balanceElement.textContent = updatedBalance;
}







// // Sample data, replace this with your dynamic data
//         var data = [
//             { tarih: '2022-01-01', tutar: 100, aciklama: 'Örnek 1' },
//             { tarih: '2022-02-05', tutar: 150, aciklama: 'Örnek 2' },
//             // Add more data as needed
//         ];

//         // Function to populate the table with data
//         function populateTable() {
//             var tableBody = document.querySelector('#table tbody');

//             // Clear existing rows
//             tableBody.innerHTML = '';

//             // Loop through data and create rows
//             data.forEach(function (item) {
//                 var row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${item.tarih}</td>
//                     <td>${item.aciklama}</td>
//                     <td>${item.tutar}</td>
//                     <td><button> Sil </button> | <button> Düzenle </button></td>
//                 `;
//                 tableBody.appendChild(row);
//             });
//         }

//         // Call the function to initially populate the table
//         populateTable();