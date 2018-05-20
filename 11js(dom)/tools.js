/**
 * Created by hrj on 2018-3-30.
 */


function getEle(id) {
    return document.getElementById(id);
}

function getFirstNode(ele) {
    var node = ele.firstElementChild || ele.firstChild;
    // 必须返回值
    return node;
}
function getLastNode(ele) {

    return ele.lastElementChild || ele.lastChild;
}

function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}

function getPrevNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}

function getEleOfIndex(ele,index) {
    return ele.parentNode.children[index];
}

function getAllSibilings(ele) {
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
//        如果不是传递过来的元素本身,那么添加到新数组中
        if(arr[i]!==ele){
            newArr.push(arr[i]);
//          方法2:  newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}