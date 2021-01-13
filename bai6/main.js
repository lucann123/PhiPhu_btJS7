//!Short getElement
function getEle(id){
    return document.getElementById(id);
}
var nArr = [];
function demMang(event){
    event.preventDefault();
    var num = getEle('txtNum').value;
    nArr.push(parseFloat(num));
    getEle('noti').innerHTML = "Mảng khi chưa đổi vị trí : " + nArr;
}

getEle('btnSwap').addEventListener("click", 
function (){
    var arr1 = getEle('txtArr1').value;
    var arr2 = getEle('txtArr2').value;
    var A = nArr[arr1-1];
    var B = nArr[arr2-1];
    A = A + B;
    B = A - B;
    A = A - B;
    nArr[arr1-1] = A;
    nArr[arr2-1] = B;
    getEle('noti2').innerHTML = "Mảng sau khi đổi vị trí : " + nArr;
})