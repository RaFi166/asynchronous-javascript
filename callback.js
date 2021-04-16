
//callback ................
const funOne = (name, callfunTwo) => {
    console.log(`Hello mr ${name}`);
    callfunTwo();

}

const funTwo = () => {
    console.log('see you later, i am busy');
}

funOne("Rafi", funTwo);


//map,Callback ..............
var arr = [10, 20, 30, 40, 50];

arr.map((value, i) => {
    console.log(i);
})


var arr = [10, 20, 30, 40, 50];

arr.map((value) => {
    value++;
    console.log(value);
})

const arr = [
    {
        name: "rafi",
        age: 25,
    },
    {
        name: "bappy",
        age: 27,
    }
];

arr.map((details) => {
    console.log(details.name);
})


//filter,callback.........................
const numbers = [0, 1, 2, -2, -3, 5];

const filNum = numbers.filter((filteredNum) => {
    return filteredNum >= 1;
})
console.log(filNum);

