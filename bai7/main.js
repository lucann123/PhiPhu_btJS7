//!Short getElement
function getEle(id){
    return document.getElementById(id);
}
var nArr = [];
function demMang(event){
    event.preventDefault();
    var num = getEle('txtNum').value;
    nArr.push(parseFloat(num));
    if(nArr.length >=2){
        sortArr();
        getEle('noti').innerHTML = "Mảng sau khi sắp xếp : " + nArr;
    }
    else getEle('noti').innerHTML = "Mảng : " + nArr;
    
}

function sortArr(){
    for(var i = 0; i < nArr.length; i++){
        for(var j = 0; j < nArr.length; j++){
            if(nArr[j] > nArr[i]){
                var A = nArr[j];
                var B = nArr[i];
                A = A + B;
                B = A - B;
                A = A - B;
                nArr[j] = A;
                nArr[i] = B;
            }
            
        }
    }
    
}