// Function


// -----------------------------

// function myFunction(){
//     document.write("Hello World" + " <br/>");
// }
// myFunction();
// myFunction();

// ------------------------------

// function myFunc(firstName){
//     document.write(firstName + " <br/>");
//     document.write("Hello Man " + firstName + " <br/>");
// }
// myFunc("Arif");
// myFunc("Mahmud");


// -----------------------------

// function myFunc(firstName, lastName, age){
//     document.write(firstName + lastName + age + " <br/>");
// }
// myFunc("Arif", " Mahmud ", 30);

// ------------------------------

function mybtn(){
    document.write("Thanks You");
}

document.getElementById("btn").addEventListener('click', mybtn);

// -------------------------------

// (function myFunc(){
//     document.write("Hello Bangladesh" + " <br/>");
// })();

(function myFunc(Country){
    document.write("Hello Bangladesh", Country + " <br/>");
    
})(' Australia');


// -------------------------------

let math = function (a, b){
    return a + b;
}
document.write(math(10, 20));

// -------------------------------

let number = [5, 6, 7, 8, 9]
let squareNum = number.map(function (num){
    return num * num;
})
document.write(squareNum);


// -------------Array Function------------------

let add = (a, b) => a + b;
document.write(add(15, 20)
)

// ---------------Nested Function----------------

function yFunc(name){
    function xFunc(){
        document.write(" Developer " + name + " <br/>");
    }
   return xFunc();
}
yFunc("Arif");
    



