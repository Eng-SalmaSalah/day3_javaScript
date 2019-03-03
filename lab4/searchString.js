document.getElementById("searchBtn").addEventListener("click", search);
function search() {
    var input = document.getElementById("textArea").value;
    var subString = document.getElementById("subString").value;
    var userIndex = document.getElementById("userIndex").value;

    //firstOccurence
    var firstOccurecnce = input.indexOf(subString);
    document.getElementById("firstOccuerence").value = firstOccurecnce;

    //lastOccurence
    var lastOccurecnce = input.lastIndexOf(subString);
    document.getElementById("lastOccuerence").value = lastOccurecnce;

    //firstFromUserIndex
    var firstOccuerenceFromUserIndex = input.indexOf(subString, userIndex);
    document.getElementById("firstOccuerenceFromUserIndex").value = firstOccuerenceFromUserIndex;

    //lastFromUserIndex
    var lastOccuerenceFromUserIndex = input.lastIndexOf(subString, userIndex);
    document.getElementById("lastOccuerenceFromUserIndex").value = lastOccuerenceFromUserIndex;
}


