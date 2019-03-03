var firstNum = prompt("enter first number: ", "Enter here..");
while(isNaN(parseInt(firstNum)))
{
    firstNum = prompt("enter first number: ", "Enter here..");
}
var secondNum = prompt("enter second number: ", "Enter here..");
while(isNaN(parseInt(secondNum)))
{
    secondNum = prompt("enter second number: ", "Enter here..");
}
var thirdNum = prompt("enter third number: ", "Enter here..");
while(isNaN(parseInt(thirdNum)))
{
    thirdNum = prompt("enter third number: ", "Enter here..");
}


var maximum=Math.max(firstNum,secondNum,thirdNum);
var minimum=Math.min(firstNum,secondNum,thirdNum);
document.write("<p>first number: "+firstNum+"</p>");
document.write("<p>second number: "+secondNum+"</p>");
document.write("<p>third number: "+thirdNum+"</p>");
document.write("<p>maximum is: "+maximum+"</p>");
document.write("<p>minimum is: "+minimum+"</p>");
document.write("<p>click refresh (or reload) to run the script again</p>");



