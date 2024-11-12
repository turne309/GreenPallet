// This function automatically runs. This is the function that generates a table
// of the .csv data that has been input
(function () {
  var DELIMITER = ",";
  var NEWLINE = "\n";
  var qRegex = /^"|"$/g;
  var i = document.getElementById("file");
  var table = document.getElementById("table");

  if (!i) {
    return;
  }

  i.addEventListener("change", function () {
    if (!!i.files && i.files.length > 0) {
      parseCSV(i.files[0]);
    }
  });

  function parseCSV(file) {
    if (!file || !FileReader) {
      return;
    }

    var reader = new FileReader();

    reader.onload = function (e) {
      toTable(e.target.result);
    };

    reader.readAsText(file);
  }

  function toTable(text) {
    if (!text || !table) {
      return;
    }

    // clear table
    while (!!table.lastElementChild) {
      table.removeChild(table.lastElementChild);
    }

    var rows = text.split(NEWLINE);
    var headers = rows.shift().trim().split(DELIMITER);
    var htr = document.createElement("tr");

    headers.forEach(function (h) {
      var th = document.createElement("th");
      var ht = h.trim();

      if (!ht) {
        return;
      }

      th.textContent = ht.replace(qRegex, "");
      htr.appendChild(th);
    });

    table.appendChild(htr);

    var rtr;

    rows.forEach(function (r) {
      r = r.trim();

      if (!r) {
        return;
      }

      var cols = r.split(DELIMITER);

      if (cols.length === 0) {
        return;
      }

      rtr = document.createElement("tr");

      cols.forEach(function (c) {
        var td = document.createElement("td");
        var tc = c.trim();

        td.textContent = tc.replace(qRegex, "");
        rtr.appendChild(td);
      });

      table.appendChild(rtr);
    });
  }
})();

function getTableArray() {
  const tableManifest = document.getElementById("table");
  const tableManifestArray = [];
  if (!tableManifest || tableManifest.children.length === 0) {
    // alert("You must first upload a CSV file.");
    // console.error("Table with id 'table' not found.");
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

  // Get the value of the bid input
  const bidInput = document.getElementById("bidInput");
  const bidValue = parseFloat(bidInput.value);
  const bstockCost = bidValue * 0.03;
  console.log("Current bid: " + bidValue);

  // Get the value of the bid input
  const shippingInput = document.getElementById("shippingInput");
  const shippingValue = parseFloat(shippingInput.value);
  console.log("Shipping cost: " + shippingValue);

  // Total cost
  const totalCost = bidValue + bstockCost + shippingValue;

  if (tableData !== null && !isNaN(bidValue)) {
    console.log("Table data: ", tableData);
    const extRetailSum = tableData.reduce((sum, row) => {
      return sum + parseFloat(row[7]);
    }, 0);

    const roundedExtRetailSum = Math.round(extRetailSum);
    console.log("Sum of Ext. Retail: ", roundedExtRetailSum);

    function addCalcedRows() {
      const table = document.getElementById("table");

      // Create 4 new rows
      for (let i = 0; i < 4; i++) {
        const row = document.createElement("tr");

        // Add 11 cells to each row
        for (let j = 0; j < 11; j++) {
          const cell = document.createElement("td");
          var key = "Cell " + (i * 11 + j + 1);

          switch (key) {
            case "Cell 7":
              cell.textContent = "Total Est. Retail:";
              break;
            case "Cell 8":
              cell.textContent = "$" + roundedExtRetailSum.toFixed(2);
              break;
            case "Cell 9":
              cell.textContent = "$" + bidValue.toFixed(2);
              break;
            case "Cell 10":
              cell.textContent = "Current Bid";
              break;
            case "Cell 20":
              cell.textContent = "$" + bstockCost.toFixed(2);
              break;
            case "Cell 21":
              cell.textContent = "3% bstock fee";
              break;
            case "Cell 31":
              cell.textContent = "$" + shippingValue.toFixed(2);
              break;
            case "Cell 32":
              cell.textContent = "Shipping cost";
              break;
            case "Cell 42":
              cell.textContent = "$" + totalCost.toFixed(2);
              break;
            case "Cell 43":
              cell.textContent = "Total cost";
              break;
            case "Cell 19":
              cell.textContent =
                ((totalCost / roundedExtRetailSum) * 100).toFixed(2) + "%";
              break;
            case "Cell 18":
              cell.textContent = "Cost/Retail ratio";
              break;
            default:
              cell.textContent = " ";
              break;
          }

          row.appendChild(cell);
        }

        // Add the row to the table
        table.appendChild(row);
      }
    }
    addCalcedRows();
  } else if (tableData !== null && isNaN(bidValue)) {
    console.error("Invalid bid input.");
    alert("Please input a valid number for the bid.");
    return null;
  } else {
    console.error("No table data found.");
    alert("Please upload a .csv pallet manifest.");
    return null;
  }
}

document.querySelectorAll(".calcbtn").forEach((button) => {
  button.addEventListener("click", handleCalBtnClick);
});

// Tod do:
// - seperate tables if more than one file is Inputed. This will probably
//   be done by "if table already exists, make new table and populate with data"
// - create new table element below existing tables with cells for new calculations

// - extract data from generated arrays and use them to make calculations

// - call API for bestBuy and Costco to retrieve part number or SKU
// - Call API for amazon to retrieve items selling points
