console.onOpen = function() {}
console.setWarning = function (text,style) {var txt = text; var stl = style;console.onOpen = function(){console.style(txt,stl)};}
var aaa = 0;
function interval() {
if(aaa%2 === 0) {
if (window.console) {
console.onOpen()
a++
}
} else {
if (!window.console) {
a++
}
}
}
console.warningOn = function() {setInterval(interval,10)}
