console.img = function (image) {
var i = new Image();
i.onload = function(){console.log("%c"+"+","color:transparent;background: url("+image+"); background-repeat: no-repeat;    background-size: "+this.height+"px "+this.width+"px;");
                     }i.src  = image;
}
