console.img = function (image) {
var i = new Image();
i.src  = image;
console.log("%c"+"+","color:transparent;background: url("+image+");padding-left; "+image.width+"; padding-top:"+image.height+"");
}
