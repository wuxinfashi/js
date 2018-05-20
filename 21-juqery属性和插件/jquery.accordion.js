/**
 * Created by HUCC on 2017/4/12.
 */
$.fn.accordion = function (colors, width) {
  colors = colors || [];
  width = width || 0;

// 要使用插件就要遵循一定结构,通过find("li")来找到设置的对象
  var $li = this.find("li");
// 获取初始盒子的宽度
  var boxLength = this.width();
  // 大盒子的宽度
  var maxLength = boxLength - ($li.length - 1) * width;
  // 鼠标离开后恢复的宽度
  var avgLength = boxLength / $li.length;

  //更改li的颜色
  $li.each(function (i, e) {
    $(e).css("backgroundColor", colors[i]);
  });

  //给li注册鼠标经过事件
  $li.on("mouseenter", function () {
    $(this).stop().animate({width: maxLength}).siblings().stop().animate({width: width})
  });

  $li.on("mouseleave", function () {
    $li.stop().animate({width: avgLength});
  });
};