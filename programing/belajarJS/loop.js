function reversestring(str) {
    var newstring = "";
    for(var i = str.length - 1; i >= 0; i--){
        newstring += str[i];
    }
    return newstring;
}
console.log(reversestring("botakkkkkk"))

function faktornomber(num) {
    if (num === 0 || num === 1) 
    return 1;
    for (let i = num - 1; i >= 1; i--) {
        num = num *= i;
    }
    return num;
}
console.log(faktornomber(5))


const person = {
    name: "rizky",
    age: 19,
    address: "bandung",
    job: "Programmer",
    hobby: "ngoding",
};

const { name, age, ...infokan } = person;

console.log(name);
console.log(age);
console.log(infokan); // we get all the rest in person variable