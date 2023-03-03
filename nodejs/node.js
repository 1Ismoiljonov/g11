// let a = 26
// let b = 20 
// if (a>b){
//     console.log(a-b);
// } else {
//     console.log(b-a);
// }

// function sum (a, b) {
//     if (a>b) {
//         console.log(a-b);
//     } else{
//         console.log(b-a);
//     }

// }    

// sum(23, 29)

// let name = `Ismoiljonov Samandar`
// console.log(name.indexOf('dar'));
// console.log(name.lastIndexOf('dar'));

// let num = '+998418438774'
// console.log(num.startsWith('+998'));
// console.log('samandar');

// let names = 'Ismoiljonov Samandar'
// for (i of names) {
//     console.log(i === i.toUpperCase());
// }

// console.log('Samandar');
// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let [bir, ikki, uch, tort, ...rest] = ar
// console.log(rest);

// let date = new Date()

// console.log(date.getDate());   // shu kungi sana  
// console.log(date.getDay());   // hafta kuni
// console.log(date.getHours());    // hozirgi soatni
// console.log(date.getMinutes());    // hozirgi minutni
// console.log(date.getSeconds());    // hozirgi second
// console.log(date.getTime());    // bu 1970 => yildan beri necha sekond o'tganini hisonblaydi

// console.log(date.get);

// let obj = {login: 'Samandar', pw: 9302003}

// localStorage.setItem('info', JSON.stringify(obj , ['login ']))  // becentga malumot jonatish 
// let res = localStorage.getItem('info')
// console.log(JSON.parse(res).pw);



// new theme  MAP

let map = new Map ()
let obj = {}
map.set('name', 'webbrain' )  // map ga malumot set orqali
map.set('title', 'IT center' ) 
map.set(obj, 'object') 
// console.log(map.get('name'));  // agar bizga map ni ichidagi malumotlar kerak bo'lsa uni  ' get ' keywordidan foydalanamiz
// console.log(map.has(obj));  // has bu map ichida shunday malumot bormi shuni tekshirib beradi
console.log('before', map);
map.delete('title')
console.log('after', map);










