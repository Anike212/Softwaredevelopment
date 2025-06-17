//break and continue statements

// let v =0;
// while (v < 5) {
//     // if (v === 3) {
//     //     break; // exit the loop when v is 3
//     // }
//     if (v % 2 === 0) {
//         v++;
//         continue; // skip the rest of the loop when b is 2
//     }
//     console.log(v);
//     v++;
// }

//exercise

// console.log(isLandscape(300, 600));

// function isLandscape(width, height) {
//     return width > height;
// } 

//exercise1
// const output = fizzBuzz(false);
// console.log(output);

// const output = fizzBuzz(3);
// console.log(output);

// 

const output = fizzBuzz(5);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'not a number';
    }
    
    if (input % 3 === 0 && input % 5 === 0) {
        return 'fizzbuzz';
    }

    if (input % 3 === 0) {
        return 'fizz';
    }

    if (input % 5 === 0) {
        return 'buzz';
    }


    return 'input';  
}

//exercise2
//speed limit=70;
//5 -> 1 point
//math.floor(1.3) 
//12 points -> license suspended

// checkSpeed(80);
// checkSpeed(71);
checkSpeed(130);



function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed <= speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if (points >= 12) 
        console.log('License suspended');
    else 
        console.log('Points:', points);
    
}

//exercise3
showNumbers(10);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

//exercise 4
const count = countTruthy([0, null, undefined, '5', 3, 4]);
console.log(count); 

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) count++;
    }
    return count;
}

//exercise 5
const movie = {
    title: 'a',
    releaseYear: 2023,
    rating: 4.5,
    director: 'b',
    isReleased: true    
};

showProperties(movie);
function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
}

//exercise 6
console.log(sum(10));
function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}


//exercise 7
const marks = [80, 80, 50];
console.log(calculateGrade(marks));
// function calculateGrade(marks) {
//    let sum = 0;
//     for (let mark of marks) {
//         sum += mark;
//     }

//     let average = sum / marks.length;
    
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     if (average <= 100) return 'A';
// }

//OR
function calculateGrade(marks) {
    const average = calculateAverage(marks);
    
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum / array.length;
}

//exercise 8
showStars(5);
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

//exercise 9
showPrimes(20);
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }
}
function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) return false;
    }
    return true;
}

//Objects
//basic object
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};
circle.draw();

//factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);

//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}
const circle3 = new Circle(3);
const circle4 = new Circle(4);
console.log(circle3);
console.log(circle4);

//dyanamic nature of objects
// const circle5 ={
//     radius: 5,
// };

// circle5.color = 'red'; // adding a new property
// circle5.draw = function() { // adding a new method
//     console.log('draw');
// };

// console.log(circle5);

// //delete a property
// delete circle5.color; // removing a property    
// console.log(circle5);

//primitive and references

let x = 10; // primitive type
let y = x; // y is a copy of x
x = 20; // changing x does not affect y
console.log(x); // 20
console.log(y); // 10

let a = { value: 10 }; // reference type
let b = a; // b is a reference to the same object as a
a.value = 20; // changing a affects b
console.log(a.value); // 20

let number = 10; // primitive type

function increase(number) {
    number++;
}

increase(number); // passing a primitive type
console.log(number);


let obj = { value: 10 }; // reference type

function increaseObject(obj) {
    obj.value++;
} 
increaseObject(obj); // passing a reference type
console.log(obj.value); // 11

//enumerating properties
const circle5 ={
    radius: 5,
    draw: function() {
        console.log('draw');
    }
};

for (let key in circle5) {
    console.log(key, circle5[key]); // key is the property name, circle5[key] is the property value
}

