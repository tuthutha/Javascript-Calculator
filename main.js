// Khai  báo biến
var age = 18
console.log(age); 

var fullName = 'Cấn Văn Tú'
console.log(typeof fullName); 

// Object - Đối tượng 
// typeof: object 
var myObj = {
    name: 'Cấn Văn Tú',
    age: 18, 
    address: 'Hà Nội', 
}

console.log(myObj.name);
console.log(typeof myObj);

// Array 
// typeof: object
var myArray = [1, 2, 'Tú', 4]
console.log(myArray[2]);

var myArray = [5, 6, 'Tú', { name:'Cấn Văn Tú' }, 9];
var myObject = myArray[3];

console.log(myObject.name);

// null
// typeof: object

var isNull = null;
console.log(null);
console.log(typeof isNull);

// boolean: true/false
const isBoolean = true;
console.log(isBoolean);
console.log(typeof isBoolean);

var myArray = [1, isNull, 3];
console.log(myArray[1]);

var isArray2 = [
    null, 
    undefined, 
    'Hoan',
    {
        name: 'Hoan Nguyen 2',
        age: 15,
        phone: '0984894098'
    }
];
console.log(isArray2);

// lấy phone từ aray isArray2
var phone = isArray2[3].phone;
console.log(phone) 