console.img = function (image) {
var i = new Image();
i.src  = image;
console.log("%c"+"+","color:transparent;background: url("+image+");width: "+i.width+"px; height:"+i.height+"px");
}
