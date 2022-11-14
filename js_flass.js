jsonObj = [];
var a = document.querySelectorAll('.msp-product-item-name.ellipsis')
for (let i = 0; i < a.length; i++) {
    console.log(i,a[i].innerHTML,a[i].href)
    item = {}
    item ["title"] = a[i].innerHTML;
    item ["link"] = a[i].href;

    jsonObj.push(item);
}
console.log(jsonObj);