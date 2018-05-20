window.onload = function (ev) {
    // 需求:点击左右按钮,实现轮播图旋转
    // 原理:点击右侧按钮,让3号盒子的样式赋值给4号盒子,4号给5号,5号给1号,1号给2号,2号给3号
    // 步骤:
    // 1.鼠标放到轮播图上,两个的按钮显示,移开的时候隐藏
    // 2.让页面加载出来所有盒子的样式
    // 3.把两侧按钮绑定事件(调用同一个方法,ture为正向旋转,false为反向旋转)(4->3为反,2->3为正)
    // 4.书写函数(操作数组.正向旋转: 删除数组中第一个样式,添加到最后一位)
    // 4.书写函数(操作数组.反向旋转: 删除数组中最后一个样式,添加到数组中的第一位)


    var arr = [
        {   //  1
            width: 400,
            top: 70,
            left: 50,
            opacity: 20,
            z: 2
        },
        {  // 2
            width: 600,
            top: 120,
            left: 0,
            opacity: 80,
            z: 3
        },
        {   // 3
            width: 800,
            top: 100,
            left: 200,
            opacity: 100,
            z: 4
        },
        {  // 4
            width: 600,
            top: 120,
            left: 600,
            opacity: 80,
            z: 3
        },
        {   //5
            width: 400,
            top: 70,
            left: 750,
            opacity: 20,
            z: 2
        }
    ];

    // 0.获取元素
    var slide = document.getElementById('slide');
    var liArr = slide.getElementsByTagName('li');
    var arrow = slide.children[1];
    var btn = arrow.getElementsByTagName('a');

// 1.鼠标放到轮播图上,两侧的按钮显示,移开隐藏
    slide.onmouseenter = function (ev1) {
        // arrow.style.opacity = 1;
        // 缓动显示(第二个参数必须是JSON)
        animate(arrow, {"opacity": 100});
    }
    slide.onmouseleave = function (ev1) {
        // arrow.style.opacity = 1;
        // 缓动显示(第二个参数必须是JSON)
        animate(arrow, {"opacity": 0});
    }

    // 第二步:让页面加载出所有的样式

    for (var i = 0; i < liArr.length; i++) {
        // 给所有图片添加索引
        liArr[i].index = i;
        // 利用animate()方法,让指定的属性缓慢运动到指定的位置
        animate(liArr[i], {
            "width": arr[i].width, /*(第一个li必须对应第一个数组元素中的第一个json的width属性)*/
            "top": arr[i].top,
            "left": arr[i].left,
            "opacity": arr[i].opacity,
            "zIndex": arr[i].z
        })
    }

// 第三部:把两侧按钮绑定事件
    btn[0].onclick = move(true);
    btn[1].onclick = move(false);
// 第四步:书写事件(再次为页面上所有元素赋值)
//     老师版
    function move(bool) {
        // 操作数组:
        // arr.push()在最后添加
        // arr.pop()在最后删除
        // arr.shift()在最开头删除
        // arr.unshift()在最开头添加
        console.log("move");
        if(bool){
            var ele = arr.pop();
            arr.unshift(ele);
        }
        else {
            var ele = arr.shift();
            arr.push(ele);
        }

    }

    // 自己写的版本
   /* function move(bool) {
        if (bool) {
            // (操作数组.正向旋转: 删除数组中第一个样式,添加到最后一位)
            for (var i = 0; i < liArr.length; i++) {
                // 利用animate()方法,让指定的属性缓慢运动到指定的位置
                if (i >= 1) {
                    animate(liArr[i], {
                        "width": arr[i - 1].width,
                        "top": arr[i - 1].top,
                        "left": arr[i - 1].left,
                        "opacity": arr[i - 1].opacity,
                        "zIndex": arr[i - 1].z
                    })

                }
                else  {
                    animate(liArr[i], {
                        "width": arr[4].width,
                        "top": arr[4].top,
                        "left": arr[4].left,
                        "opacity": arr[4].opacity,
                        "zIndex": arr[4].z
                    })
                }
            }


        }
        else {
            // (操作数组.反向旋转: 删除数组中最后一个样式,添加到数组中的第一位)
            for (var i = 0; i < liArr.length; i++) {
                // 利用animate()方法,让指定的属性缓慢运动到指定的位置
                if (i<4){
                    animate(liArr[i], {
                        "width": arr[i+1].width, /!*(第一个li必须对应第一个数组元素中的第一个json的width属性)*!/
                        "top": arr[i+1].top,
                        "left": arr[i+1].left,
                        "opacity": arr[i+1].opacity,
                        "zIndex": arr[i+1].z
                    })
                }
                else{
                    animate(liArr[i], {
                        "width": arr[0].width, /!*(第一个li必须对应第一个数组元素中的第一个json的width属性)*!/
                        "top": arr[0].top,
                        "left": arr[0].left,
                        "opacity": arr[0].opacity,
                        "zIndex": arr[0].z
                    })
                }
            }
        }
    }*/
}






