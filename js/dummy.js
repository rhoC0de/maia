const referralList = [
    {
        name: 'Adele Calvin',
        referral: 1,
    },
    {
        name: 'Cindy Billy',
        referral: 3,
    },
    {
        name: 'Wilson Goa',
        referral: 4,
    },
    
]

const refCont = document.querySelector('.referralcontent');
const table = document.createElement("table");   // Create a <div> node

referralList.forEach(element => {
    var row = document.createElement("tr");
    var data1 = document.createElement("td");
    var data2 = document.createElement("td");
    var textnode1 = document.createTextNode(`${element.name}`);     // Create a text node
    var textnode2 = document.createTextNode(`${element.referral} Referral`);
    data1.appendChild(textnode1);
    data2.appendChild(textnode2);
    row.appendChild(data1);
    row.appendChild(data2);
    table.appendChild(row);    // Append the text to <div>
});

table.setAttribute("id", "myTable");
// table.classList('')

function sortTable(tab) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = tab;
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
    return table
  }

const tab2 = sortTable(table);

refCont.appendChild(tab2);     // Append <div> to class='referralcontent'