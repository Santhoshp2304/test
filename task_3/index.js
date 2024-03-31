// How to compare two JSON have the same properties without order?
console.log("1. How to compare two JSON have the same properties without order?");
let obj1 = {name : "person 1", age : 5};
let obj2 ={age : 5,name : "person 1"};
// to check given objects are equal
function areObjectsEqual(obj1,obj2) {
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
if(key1.length!==key2.length) {
    return false;
}
    for(let i = 0;i<key1.length;i++) {
        if(obj1[key1[i]]===obj2[key1[i]]) {
              return true;
        } else {
            return false;
        }
        
}


return false;
}

let result = areObjectsEqual(obj1,obj2);
console.log(`Are given objects  equal : ${result}` );
console.log("_________________________________________________");


let xhr = new XMLHttpRequest();
let url = "https://restcountries.com/v3.1/all";
xhr.open("GET",url,true);
xhr.onload = function ()  {
    // converting JSON to js
    let countries =JSON.parse(xhr.responseText);
     console.log("2. Use the rest countries API url & display all the countries flag in console.");
     console.log("\n");

    for(let i =0;i<countries.length;i++) {

          console.log(`${countries[i].name.common}'s flag : ${countries[i].flag}`);
        
    }
    console.log("_________________________________________________");
    console.log("3. Use the same rest countries and print all countries names,regions,sub-regions & populations ");
    console.log("\n");
    for(let i =0;i<countries.length;i++) {

        console.log(`Name of the country : ${countries[i].name.common}`);
        console.log(`Region of the country : ${countries[i].region}`);
        console.log(`Sub-Region of the country : ${countries[i].subregion}`);    
        console.log(`Population of the country : ${countries[i].population}`);
        console.log("\n");
    }
    console.log("_________________________________________________");
}
xhr.send();