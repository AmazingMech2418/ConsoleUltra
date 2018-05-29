console.img = function (image) {
var i = new Image();
i.src  = image;
console.log("%c"+"+","color:transparent;background: url("+image+");width; "+image.width+"; height:"+image.height+"");
}
