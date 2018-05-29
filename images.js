console.img = function (image) {
var i = new Image();
i.onload = function(){console.log("%c"+"","color:transparent;background: url("+image+");  padding: "+this.height/2+"px "+this.width/2+"px;   background-size: "+this.height+"px "+this.width+"px;");
                     }
i.src  = image;
}
