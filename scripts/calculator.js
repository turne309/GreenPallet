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
    // while (!!table.lastElementChild) {
    //   table.removeChild(table.lastElementChild);
    // }

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

    var ftr = document.createElement("tr");
    var ftrtd = document.createElement("td");
    ftrtd.textContent = "";
    var ftrtd2 = document.createElement("td");
    ftrtd2.textContent = "";
    var ftrtd3 = document.createElement("td");
    ftrtd3.textContent = "";
    var ftrtd4 = document.createElement("td");
    ftrtd4.textContent = "";
    var ftrtd5 = document.createElement("td");
    ftrtd5.textContent = "";
    var ftrtd6 = document.createElement("td");
    ftrtd6.textContent = "";
    var ftrtd7 = document.createElement("td");
    ftrtd7.textContent = "Total Ext Retail:";
    var ftrtd9 = document.createElement("td");
    ftrtd9.textContent = "";
    var ftrtd10 = document.createElement("td");
    ftrtd10.textContent = "";
    var ftrtd11 = document.createElement("td");
    ftrtd11.textContent = "";

    var ftrtd_extRetailSum = document.createElement("td");
    ftrtd_extRetailSum.textContent = "TEST";

    var extRetailSum = 0;

    table
      .appendChild(ftr)
      .append(
        ftrtd,
        ftrtd2,
        ftrtd3,
        ftrtd4,
        ftrtd5,
        ftrtd6,
        ftrtd7,
        ftrtd_extRetailSum,
        ftrtd9,
        ftrtd10,
        ftrtd11
      );
  }
})();
