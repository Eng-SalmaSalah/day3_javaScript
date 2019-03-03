fillTable();
document.getElementById("calculateFact").addEventListener("click", findfact);

function findfact() {

    var number = prompt("Enter a number please", "Enter here..");
    alert(fact(number));

}


function fact(num) {
    if (num === 0) { return 1; }
    else { return num * fact(num - 1); }
}


function fillTable() {
    var table = document.getElementById("factorialTable");
    for (i = 0; i < 11; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = fact(i);

    }


}



