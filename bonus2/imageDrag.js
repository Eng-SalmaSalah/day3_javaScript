var imgID;
function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    imgID=ev.target.id;
}
function drop(ev){
    ev.target.append(document.getElementById(imgID));
}
