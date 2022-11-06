//1
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};
console.log(user.studentstatus);
//2
let numbers = [12, 14, 78, 35];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let y = 0
while (y < numbers.length) {
    console.log(numbers[y]);
    y++;
}
//3
let a = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let i = 0; i < a.length; i++) {
if (a [i]>5) {
    console.log(a[i])
} 
}
//4
let usera = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}
if (usera.age < 18 && usera.studentstatus == 'active') {
    console.log('hello');
} else if (usera.name == 'levani') {
    console.log('hello, levani');
} else if (usera.studentstatus == 'active' || usera.age > 25) {
    console.log('hello world');
} else {
    console.log("error");
}
//5
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
    for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < array[i].length; y++) {
           if (array[i][y] > 0) {
            console.log(array[i][y]);
            } 
        }
        
    }
//6
let arra = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
//even
    for (let y of arra) {
        if (y % 2 !=1) {
            console.log(y);
        }
    }
//odd
    for (let y of arra) {
        if (y % 2 !=0) {
            console.log(y);
        }
    }
//10
let ar = [1,2,4,10,34,5,7,87];
    for(let item of ar) {
        if (item > 0 && item <10 ) {
            console.log(item);
        } 
    }
//11
let num =[1,2,3,4,5,6,7,8,9,10];
    for (let item of num) {
        if (item == 5) {
            break;
        }
        console.log(item)
    }
//functions 7  
function task6(...number) {
    let sum = 0;
    for (let number of number) {
        if (number > 0) {
            sum += number;
        }
    }
    return sum;
}   
task6(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
//8
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  function dava(user) {
    if (user.isloggedin == true) {
        console.log(user.firstname + ' ' + user.lastname);
    }else if (user.isloggedin == false) {
        console.log(false);
    }
  }
  dava(user);
 //9 
 function meh(...numb) {
    console.log(Math.min(...numb));
}
meh(11, 12, 14, -25, -40);

