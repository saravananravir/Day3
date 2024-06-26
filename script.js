let obj1 = { name: 'Person 1', age: 5 };
let obj2 = { age: 5, name: 'Person 1' };

function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
 
    if (keys1.length !== keys2.length) {
        return false;
    }
 
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
 
    return true;
}
console.log(areObjectsEqual(obj1, obj2));

//use the rest countries
var  resquest = new XMLHttpRequest();
resquest.open("GET","https://restcountries.com/v3.1/all");
resquest.send();
resquest.onload = function(){
var res= JSON.parse(resquest.response);
console.log(res);
var details_countries = res.filter((ele)=>ele.region == "countries");
console.log(details_countries);
}
