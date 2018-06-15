/**
 * Created by dell on 2018/5/9.
 */
(function (window) {
  //游戏对象
  function Game(map) {
    this.snake=new Snake();
    this.food=new Food();
    this.map=map;
  }
//游戏方法
  Game.prototype.start=function () {
    this.food.render(this.map);
    this.snake.render(this.map);

    var that=this;
    var timeId=setInterval(function () {
      that.snake.move(that.map,that.food);
      var head=that.snake.body[0];
      if(head.x<0 || head.y<0 || head.x>=that.map.offsetWidth/that.snake.width || head.y>=that.map.offsetHeight/that.snake.height){
        alert("Game Over");
        clearInterval(timeId);
      }

      for (var i = 4; i < that.snake.body.length; i++) {
        if(head.x===that.snake.body[i].x && head.y===that.snake.body[i].y){
          alert("Game Over");
          clearInterval(timeId);
        }
      }
    },300)
    document.addEventListener("keyup",function (e) {
      switch (e.keyCode){
        case 37:
          if(that.snake.direction!=="right"){
            that.snake.direction="left";
          }
          break;
        case 38:
          if(that.snake.direction!=="down"){
            that.snake.direction="up";
          }
          break;
        case 39:
          if(that.snake.direction!=="left"){
            that.snake.direction="right";
          }
          break;
        case 40:
          if(that.snake.direction!=="up"){
            that.snake.direction="down";
          }
          break;
      }
    })
  };
  window.Game=Game;
})(window)