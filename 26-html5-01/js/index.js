$(function () {
    // 初始化fullpage组件
    // 设置每一个屏幕的背景颜色
    // 设置屏幕内容的对其方式 默认是垂直居中的 改为顶部对其
    // 设置导航 点容器
    $('.container').fullpage(
        {
            // 配置参数
            sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
            verticalCentered:false,
            navigation:true,
            afterLoad:function (link,index) {
                /*index 序号 1开始  当前屏的序号*/
                $('.section').eq(index-1).addClass('now');
            },
            // 点击更多切换到下一页:(在插件初始完毕后再绑定功能)
            afterRender:function () {
                /*console.log(this);*/
                /*this没有api方法*/

                /*jquery插件初始的时候封装这个方法*/
                /*1.回想jquery插件的封装 $.fn.fullpage = function(){} */
                /*2.jquery本身没有的方法通过$.fn的方式追加方法  认为是插件方法*/
                /*3.例如：$.fn.src = function(){ return this.attr('src') } this 你选择谁this（jquery对象）执行谁 */
                /*点击更多切换下一页*/
                $('.more').on('click',function () {
                    $.fn.fullpage.moveSectionDown()
                });
                /*当第四屏的购物车动画结束之后执行收货地址的动画*/
                $('.screen04 .cart').on('transitionend',function () {
                    /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                    // 等待购物车动画以后显示收货地址:
                    $('.screen04 .address').show().find('img:last').fadeIn(1000);
                    $('.screen04 .text').addClass('show');
                });
            },
            onLeave:function (index,nextIndex,direction) {
                if(index == 2 && nextIndex == 3){
                    $('.section').eq(index-1).addClass('leaved');
                }else if(index == 3 && nextIndex == 4){
                    /*当前是从第三页到第四页*/
                    $('.section').eq(index-1).addClass('leaved');
                }
            },
            // 为了让第二屏下落沙发和页面滚动同步:
            scrollingSpeed:1000

        }
    );






})