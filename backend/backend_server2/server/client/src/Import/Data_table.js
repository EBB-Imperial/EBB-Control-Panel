function CreateDataTable(data) {
const table = document.createElement('table');
table.id = 'data_table';
    table.classList.add('data-table');

    // Create the table header row
    const headerRow = table.insertRow();
    Object.keys(data[0]).forEach((key) => {
        const headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerCell.style.border = '1px solid black';
        headerRow.appendChild(headerCell);
    });

    // Create table rows and cells for each data item
    data.forEach((item) => {
        const row = table.insertRow();
        Object.values(item).forEach((value) => {
        const cell = row.insertCell();
        cell.style.border = '1px solid black';
        cell.textContent = value;
        });
    });

    table.style.position = 'absolute';
    table.style.top = '100px';
    table.style.right = '50px';
    table.style.border = '1px solid black';


    return table;
  }

export default CreateDataTable
  
//   const dataContainer = document.getElementById('data_table');
//   dataContainer.appendChild(generateDataTable(data));
  