/**
 * Created by dell on 2018/5/9.
 */
(function (window) {
  //食物对象

  function Food(options) {
    options = options || {};
    this.width = options.width || 40;
    this.height = options.height || 40;
    this.bgColor = options.bgColor || "red";
    this.x = options.x || 0;
    this.y = options.y || 0;
  }

  //食物方法
  Food.prototype.render = function (target) {
    var div = document.createElement("div");
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.bgColor;
    this.x = parseInt(Math.random() * target.offsetWidth / this.width);
    this.y = parseInt(Math.random() * target.offsetHeight / this.height);
    div.style.position="absolute";
    div.style.left = this.x * this.width + "px";
    div.style.top = this.y * this.height + "px";

    target.appendChild(div);

  };
  window.Food=Food;
})(window)