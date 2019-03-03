var selection = prompt("select a list style: \n 1(bullet) 2(numbered) 3(letterd)", "Enter here..");
switch (selection) {
    case '1':
        document.write("<h2>Bullet list</h2>")
        document.write("<ul><li>list item 1</li> <li>list item 2</li> <li>list item 3</li> </ul>");
        document.write("<p>click refresh (or reload) to run the script again</p>");
        break;
    case '2':
        document.write("<h2>Ordered list:Number</h2>")
        document.write("<ol><li>list item 1</li> <li>list item 2</li> <li>list item 3</li> </ol>");
        document.write("<p>click refresh (or reload) to run the script again</p>");
        break;
    case '3':
        document.write("<h2>Ordered list:letters</h2>")
        document.write("<ol type='A'><li>list item 1</li> <li>list item 2</li> <li>list item 3</li> </ol>");
        document.write("<p>click refresh (or reload) to run the script again</p>");
        break;
    default:
        alert("refresh then enter a valid choice!");
}
