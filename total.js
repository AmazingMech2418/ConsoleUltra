// img

console.img = function (image) {
var i = new Image();
i.onload = function(){console.log("%c"+"","color:transparent;background: url("+image+");  padding: "+this.width/2+"px "+this.height/2+"px;   background-size: "+this.height+"px "+this.width+"px;line-height:+"+this.height+"px");
                     }
i.src  = image;
}

// style

console.style = function(log,style) {
console.log("%c"+log,style);
}

// warnings

console.onOpen = function() {}
var txt;
var stl;
console.setWarning = function (text,style) { txt = text;  stl = style;console.onOpen = function(){console.style(txt,stl)};}
var aaa = 0;
function interval() {
if(aaa%2 === 0) {
if (window.console) {
console.onOpen()
aaa++
}
} else {
if (!window.console) {
aaa++
}
}
}
console.warningOn = function() {setInterval(interval,10)}
