//!Short getElement
function getEle(id){
    return document.getElementById(id);
}
var nArr = [];
function tinhTong(event){
    event.preventDefault();
    var num = getEle('txtNum').value;
    nArr.push(parseFloat(num));
    getEle('noti').innerHTML = "Tổng các số dương : " + sumArr(nArr);
}

function sumArr(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] >= 0){
            sum = sum + arr[i];
        }
    }
    return sum;
}