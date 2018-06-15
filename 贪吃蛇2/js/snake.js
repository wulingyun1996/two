/**
 * Created by dell on 2018/5/9.
 */
(function (window) {
  //蛇对象
  function Snake(options) {
    options=options || {};
    this.width=options.width || 40;
    this.height=options.height || 40;
    this.headColor=options.headColor || "lime";
    this.bodyColor=options.bodyColor || "orange";
    this.direction="right";
    this.body=[
      {x:3,y:0},
      {x:2,y:0},
      {x:1,y:0},
      {x:0,y:0}
    ];
  }
  //蛇的方法

  Snake.prototype.render=function (target) {
    for (var i = 0; i < this.body.length; i++) {
      var span=document.createElement("span");
      span.style.width=this.width+"px";
      span.style.height=this.height+"px";
      span.style.backgroundColor=i===0?this.headColor:this.bodyColor;
      span.style.position="absolute";
      span.style.left=this.body[i].x*this.width+"px";
      span.style.top=this.body[i].y*this.height+"px";
      target.appendChild(span);
    }
  };
//蛇移动

  Snake.prototype.move=function (target,food) {
    var newNode={
      x:this.body[0].x,
      y:this.body[0].y
    };
    switch (this.direction){
      case "left":
        newNode.x--;
        break;
      case "up":
        newNode.y--;
        break;
      case "right":
        newNode.x++;
        break;
      case "down":
        newNode.y++;
        break;
    }
    this.body.unshift(newNode);
    if(newNode.x===food.x && newNode.y===food.y){
      var div=target.querySelector("div");
      target.removeChild(div);
      food.render(target);
    }else {
      this.body.pop();
    }

    var spans=target.querySelectorAll("span");
    for (var i = 0; i < spans.length; i++) {
      target.removeChild(spans[i]);
    }
    this.render(target);
  };
  window.Snake=Snake;
})(window)