//!Short getElement
function getEle(id){
    return document.getElementById(id);
}
var nArr = [];
function demMang(event){
    event.preventDefault();
    var num = getEle('txtNum').value;
    nArr.push(parseFloat(num));
    getEle('noti').innerHTML = "Số chẵn cuối cùng trong mảng là : "  + soChanArr(nArr);
}

function soChanArr(arr){
    var chan = -1;
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] % 2 == 0){
            chan = arr[i];
        }
    }
    return chan;
}