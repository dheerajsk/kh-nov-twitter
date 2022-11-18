

const arr = [2,3,4,5,6];
// [4, 9, 16, 25, 36]

const result = arr.map((num)=>{return num*num; });

console.log(result);

const names=["jake", "khushboo", "harmit"];
// ["Jake", "Khushboo", "Harmit"]

const resultNames = names.map((name)=>{
    let result="";
    result = result+name[0].toUpperCase();

    for(let i=1; i<name.length; i++){
        result+=name[i];
    }
    console.log(result);
    return result;

});
console.log(resultNames);