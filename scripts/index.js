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

    var estColumns = text.replace("\n", ",Est. Sell Price, Est. Return \n");

    var rows = estColumns.split(NEWLINE);
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

    table.appendChild(htr).className = "header";

    var rtr;

    rows.forEach(function (r) {
      tr = r.trim();

      if (!tr) {
        return;
      }

      var cols = tr.split(DELIMITER);

      if (cols.length === 0) {
        return;
      }

      rtr = document.createElement("tr");

      cols.forEach(function (c, index) {
        var td = document.createElement("td");
        var tc = c.trim();

        td.textContent = tc.replace(qRegex, "");

        rtr.appendChild(td).className = "cell_" + (index + 1);
        console.log("These are the droids: " + (index + 1));
      });

      rtr.appendChild(
        Object.assign(document.createElement("td"), {
          classList: "cell_esp",
          innerHTML: "some text",
        })
      );
      rtr.appendChild(
        Object.assign(document.createElement("td"), {
          classList: "cell_estReturn",
          innerHTML: "some text",
        })
      );
      table
        .appendChild(rtr)
        .classList.add("row_" + (rows.indexOf(r) + 1), "const-row");

      // here
      var numberOfRows = document.querySelectorAll(".const-row").length;
      console.log(numberOfRows + " row found...");

      for (var rowCnt = 0; rowCnt < numberOfRows; rowCnt++) {
        var desc = document
          .querySelectorAll(".cell_5")
          [rowCnt].innerHTML.toUpperCase();
        var msrp = document.querySelectorAll(".cell_7")[rowCnt].innerHTML;
        var itemCnt = document.querySelectorAll(".cell_6")[rowCnt].innerHTML;
        var defaultSell = msrp * 0.5;

        const item1753823 = 260;
        const total_1753823 = item1753823 * itemCnt;
        const item1651358 = 60;
        const total_1651358 = item1651358 * itemCnt;
        const item7333505 = 145;
        const total_7333505 = item7333505 * itemCnt;
        const item1017700 = 300;
        const total_1017700 = item1017700 * itemCnt;
        const item3250047 = 150;
        const total_3250047 = item3250047 * itemCnt;
        const item2606006 = 86;
        const total_2606006 = item2606006 * itemCnt;
        const item2062725 = 100;
        const total_2062725 = item2062725 * itemCnt;
        const item1788859 = 75;
        const total_1788859 = item1788859 * itemCnt;
        const item2110609 = 65;
        const total_2110609 = item2110609 * itemCnt;
        const item1727623 = 62;
        const total_1727623 = item1727623 * itemCnt;
        const item1681499 = 140;
        const total_1681499 = item1681499 * itemCnt;
        const item1271990 = 160;
        const total_1271990 = item1271990 * itemCnt;
        const item1683306 = 165;
        const total_1683306 = item1683306 * itemCnt;

        switch (desc) {
          case "JBL BOOMBOX 3 WI-FI":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item1753823.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_1753823.toFixed(2);
            break;
          case "SONY HT-SC40 SOUNDBAR":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item1651358.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_1651358.toFixed(2);
            break;
          case "ONKYO TX-SR393 5.2 CH":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item7333505.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_7333505.toFixed(2);
            break;
          case "YAMAHA TSR-700 RECEIVER":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item1017700.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_1017700.toFixed(2);
            break;
          case "KLIPSCH R-120SWI":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item3250047.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_3250047.toFixed(2);
            break;
          case "SAMSUNG HW-Q67CT SYSTEM":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item2606006.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_2606006.toFixed(2);
            break;
          case "BOSE SOLO II TV SOUNDBAR":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item2062725.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_2062725.toFixed(2);
            break;
          case "KLIPSCH KD-51M BOOKSHELF":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item1788859.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_1788859.toFixed(2);
            break;
          case "ION PATHFINDER 4":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item2110609.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_2110609.toFixed(2);
            break;
          case "DENON C210 SOUND BAR":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item1727623.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_1727623.toFixed(2);
            break;
          case "SAMSUNG S80 SOUNDBAR":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item1681499.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_1681499.toFixed(2);
            break;
          case "SONOS PLAYBAR WITH MOUNT":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item1271990.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_1271990.toFixed(2);
            break;
          case "LG SP7R 7.1 CH SOUNDBAR":
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              item1683306.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML =
              total_1683306.toFixed(2);
            break;
          default:
            document.querySelectorAll(".cell_esp")[rowCnt].innerHTML =
              defaultSell.toFixed(2);
            document.querySelectorAll(".cell_estReturn")[rowCnt].innerHTML = (
              defaultSell * itemCnt
            ).toFixed(2);
            break;
        }
      }
    });
  }
})();

function getTableArray() {
  const tableManifest = document.getElementById("table");
  const tableManifestArray = [];
  if (!tableManifest || tableManifest.children.length === 0) {
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
  console.log("table manifest array: " + tableManifestArray);
  return tableManifestArray;
}

function handleCalBtnClick(event) {
  event.preventDefault();
  const tableData = getTableArray();

  // Get the value of the bid input
  const bidInput = document.getElementById("bidInput");
  const bidValue = parseFloat(bidInput.value);
  const bstockCost = bidValue * 0.03;

  // Get the value of the bid input
  const shippingInput = document.getElementById("shippingInput");
  const shippingValue = parseFloat(shippingInput.value);
  // Total cost
  const totalCost = bidValue + bstockCost + shippingValue;

  if (tableData !== null && !isNaN(bidValue)) {
    console.log("Table data: ", tableData);

    // sum of estimated retail
    const extRetailSum = tableData.reduce((sum, col) => {
      return sum + parseFloat(col[7]);
    }, 0);
    // sum of expected retail
    const estReturn = tableData.reduce((sum, col) => {
      return sum + parseFloat(col[12]);
    }, 0);

    //  raw profit
    var profit = estReturn - totalCost;
    // ROI %
    var roi = (profit / totalCost) * 100;

    const roundedExtRetailSum = Math.round(extRetailSum);
    console.log("Sum of Ext. Retail: ", roundedExtRetailSum);

    function addCalcedRows() {
      const table = document.getElementById("table");

      // Create 4 new rows
      for (let i = 0; i < 4; i++) {
        const row = document.createElement("tr");

        // Add 13 cells to each row
        for (let j = 0; j < 13; j++) {
          const cell = document.createElement("td");
          var key = "Cell " + (i * 13 + j + 1);

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
            case "Cell 22":
              cell.textContent = "$" + bstockCost.toFixed(2);
              break;
            case "Cell 23":
              cell.textContent = "3% bstock fee";
              break;
            case "Cell 35":
              cell.textContent = "$" + shippingValue.toFixed(2);
              break;
            case "Cell 36":
              cell.textContent = "Shipping cost";
              break;
            case "Cell 48":
              cell.textContent = "$" + totalCost.toFixed(2);
              break;
            case "Cell 49":
              cell.textContent = "Total cost";
              break;
            case "Cell 21":
              cell.textContent =
                ((totalCost / roundedExtRetailSum) * 100).toFixed(2) + "%";
              break;
            case "Cell 20":
              cell.textContent = "Cost/Retail ratio";
              break;
            case "Cell 12":
              cell.textContent = "Revenue: ";
              break;
            case "Cell 13":
              cell.textContent = "~$" + estReturn.toFixed(2);
              console.log("Est Return: " + estReturn);
              break;
            case "Cell 25":
              cell.textContent = "Profit: ";
              break;
            case "Cell 26":
              cell.textContent = "~$" + profit.toFixed(2);
              console.log("Est Profit: " + profit);
              break;
            case "Cell 51":
              cell.textContent = "ROI %: ";
              break;
            case "Cell 52":
              cell.textContent = "~%" + roi.toFixed(2);
              console.log("Est Profit: " + roi);
              break;

            default:
              break;
          }
          row.appendChild(cell);
        }

        // Add the row to the table
        table.appendChild(row);
        //disable button until file is uploaded
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
