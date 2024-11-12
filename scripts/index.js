function getTableArray() {
  const tableManifest = document.getElementById("table");
  const tableManifestArray = [];
  if (!tableManifest || tableManifest.children.length === 0) {
    alert("You must first upload a CSV file.");
    console.error("Table with id 'table' not found.");
    return null;
  }

  const rows = tableManifest.querySelectorAll("tr:not(:first-child)");

  for (const row of rows) {
    const rowArray = [];
    const cells = row.querySelectorAll("td");
    for (const cell of cells) {
      rowArray.push(cell.textContent.trim());
    }
    tableManifestArray.push(rowArray);
  }
  return tableManifestArray;
}

function handleCalBtnClick(event) {
  event.preventDefault();
  const tableData = getTableArray();

  if (tableData !== null) {
    console.log("Table data: ", tableData);
  } else {
    console.error("No table data found.");
  }
}

document.querySelectorAll(".calcbtn").forEach((button) => {
  button.addEventListener("click", handleCalBtnClick);
});

// Tod do:
// - seperate tables if more than one file is InputDeviceInfo. This will probably
//   be done by "if table already exists, make new table and populate with data"
// - create new table element below existing tables with cells for new calculations

// - extract data from generated arrays and use them to make calculations

// - call API for bestBuy and Costco to retrieve part number or SKU
// - Call API for amazon to retrieve items selling points
