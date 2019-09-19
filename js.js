var table = '';
var column = prompt("Zadej sloupce");
var row = prompt("Zadej radky");

for(var r = 0;r < row; r++) {

    table += '<tr>';
    for(var c = 0;c < column; c++) {
        table += '<td>' + '</td>';
    }
    table += '</tr>';
}
document.write('<table>' + table + '</table>');