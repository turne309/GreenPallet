// document.querySelector(".calc-btn").addEventListener("click", function () {
//   var manifestTable = {};

//   const allRowsAfterFirst = data.slice(1);
//   console.log(allRowsAfterFirst);
// });

// function runCalculations(text) {
//   if (!text || !table) {
//     return;
//   }
//   const allRowsAfterFirst = data.slice(1);
//   console.log(allRowsAfterFirst);
// }

// document.querySelector("calcbtn").addEventListener("click", getTableArray());

function getTableArray() {
  const tableManifest = document.getElementById("table");
  const tableManifestArray = [];
  if (!tableManifest || tableManifest.children.length === 0) {
    alert("You must first upload a CSV file.");
    console.error("Table with id 'table' not found.");
    return null;
  }

  const rows = tableManifest.querySelectorAll("tr");

  for (const row of rows) {
    const rowArray = [];
    const cells = row.querySelectorAll("th");
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
// const tableData = getTableArray();
// if (tableData !== null) {
//   console.log(tableData);
//   // Process the table data as needed
// } else {
//   console.error("Failed to retrieve table data.");
// }
