//!Short getElement
function getEle(id){
    return document.getElementById(id);
}
var nArr = [];
function demMang(event){
    event.preventDefault();
    var num = getEle('txtNum').value;
    nArr.push(parseFloat(num));
    getEle('noti').innerHTML = "Số dương nhỏ nhất trong mảng là : "  + minArr(nArr);
}

function minArr(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i ++){
        if(arr[i] < min && arr[i] >= 0){
            min = arr[i];
        }
    }
    return min;
}