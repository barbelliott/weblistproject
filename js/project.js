function nameSearchFunction () {
    var input, filter, table, tr, td, i;
    input = document.getElementById("nameInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tuneTable");
    tr = table.getElementsByTagName("tr");
    td = tr[0];

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].firstElementChild;
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

 /*backup of original before trying to make it search only the name column*/

/*function nameSearchFunction () {
  var input, filter, table, tr, td, i;
  input = document.getElementById("nameInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tuneTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}*/

/*function called when some types into the Key search box*/
function keySearchFunction () {
    var input, filter, table, tr, td, i;
    input = document.getElementById("keyInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tuneTable");
    tr = table.getElementsByTagName("tr");
    td = tr[1];

  // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
    td = tr[i].firstElementChild;
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

/*sudo code for filtering a single comumn
for every row in tuneTable
go get the first row
look in the first cell (the name column)
match it with the name
if it matches, show the row
*/
