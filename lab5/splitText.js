document.getElementById("splitBtn").addEventListener("click", split);
function split() {
    var input = document.getElementById("input").value;
    var delimeter=document.getElementById("delimeter").value;
    var words = input.split(delimeter);
    var subString=input.substring(0,10);
    document.getElementById("textArea").value ='';
    for (i = 0; i < words.length; i++) {
        
        document.getElementById("textArea").value += words[i];
        document.getElementById("textArea").value += "\n";
    }
    document.getElementById("subString").value=subString;
}