//!Short getElement
function getEle(id){
    return document.getElementById(id);
}
var nArr = [];
function demMang(event){
    event.preventDefault();
    var num = getEle('txtNum').value;
    nArr.push(parseFloat(num));
    getEle('noti').innerHTML = countArr(nArr);
}

function countArr(arr){
    var count = 0
    var content = "";
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] >= 0){
            count++;
            if(arr.length == 1 || i == arr.length - 1){
                content += arr[i];
            }
            else content += arr[i] + " - "
        }
    }
    var noti = "Có " + count + " số dương trong mảng<br>" + "Gồm : " +  content;
    return noti;
}