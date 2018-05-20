/**
 * Created by Lenovo on 2016/9/17.
 */

//绑定到原型上,调用者是jquery对象
// 对应第一种绑定方法
// 相当于在原型上绑定新的方法
$.fn.setColorRed = function(){
    // 验证this是否jquery对象
    // console.log(this);
    this.css({"color":"red"})
}


//绑定到$上，调用者是$
$.setColorRed = function (e) {
    e.css({"color":"red"})
}