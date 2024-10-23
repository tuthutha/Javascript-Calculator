// var fullName = 'can van tu';
// 1. Kiểu dữ liệu của chuỗi: typeof -> string
// console.log(typeof fullName);
// var address = 'HA NOI, TAN YEN';

// 2. Độ dài của chuỗi: length
// var length = fullName.length;
// console.log(length);

// 3. Lấy ra ký tự qua index của chuỗi: charAt
// var subText = fullName.charAt(4);
// console.log(subText); // V

// slice, substring, substr
// 3.1 slice
// var sliceText = fullName.slice(4, 7);
// console.log(sliceText); // Van

// var subText = fullName.slice(-6, -3);
// console.log(subText); // Van

// var subText2 = fullName.substring(4, 7);
// console.log(subText2);

// 3.2 substring
// var subText2 = fullName.substring(-6);
// console.log(subText2);

// Note: substring cũng tương tự với slice nhưng khác ở điểm
// không cắt được với index là số âm

//3.3 substr
// var subText3 = fullName.substr(4, 3);
// console.log(subText3);

// 4. toUpperCase, toLowerCase
// var newUpperStr = fullName.toUpperCase();
// console.log(newUpperStr);

// var newUpperStr = address.toLowerCase();
// console.log(newUpperStr);

// 4. Chuỗi thành mảng
// var str = 'It pads a string with another string';
// var strArray = str.split(' ');
// console.log(strArray);

// var strArray = ['hoan', 'tu', 'Huu'];
// for (var i = 0; i < strArray.length; i++) {
//   console.log('Thanh vien: ', strArray[i]);
// }

// Bài tập
// Cho 1 chuỗi như sau
// 'method extract a part of a string and returns'

// Yêu cầu
// 1. Kiểm tra độ dài của chuỗi
// 2. Cắt ra 1 chuỗi mới có giá trị 'extract' từ chuỗi ban đầu
// 3. Chuyển chuỗi ban đầu thành định sang sau
// 'Method Extract A Part Of A String And Returns'

// var str = 'method extract a part of a string and returns';

// 1. Kiểm tra độ dài của chuỗi
// var strLength = str.length;
// Kq: 45
// console.log(strLength);

// 2. Cắt ra 1 chuỗi mới có giá trị 'extract' từ chuỗi ban đầu
// var newStr = str.substr(7, 7);
// var newStr2 = str.slice(7, 14);
// console.log(newStr == 'extract');

// 3. Chuyển chuỗi ban đầu thành định sang sau
// 'Method Extract A Part Of A String And Returns'
// var str = 'method extract a partfasdfasfdasfdasrfda of a string and returns';

// B1: Chuyển chuỗi thành mảng để lặp bằng phương thức split
// var strArray = str.split(' ');

// B2: Lặp qua các phần tử của mảng và mỗi phần tử cắt làm 2 phần
// phần đầu -> sẽ biến đổi thành dạng in hoa
// phần còn lại -> sẽ biến đổi thành dạng in thường
// var newArr = [''];

// for (var i = 0; i < strArray.length; i++) {
//   var str = strArray[i];
//   var firstStr = str[0].toUpperCase();
//   var secondStr = str.slice(1).toLowerCase();

//   var newStr = firstStr + secondStr; // Method
//   newArr.push(newStr);
// }

// var capitalizeStr = newArr.join(' ');

function handleCapitalize() {
    var element = document.getElementById('text');
    var str = element.outerText;

    var strArray = str.split(' ');
    var newArr = [''];

    for (var i = 0; i < strArray.length; i++) {
        var str = strArray[i];
        var firstStr = str[0].toUpperCase();
        var secondStr = str.slice(1).toLowerCase();

        var newStr = firstStr + secondStr;
        newArr.push(newStr);
    }

    var capitalizeStr = newArr.join(' ');
    element.innerHTML = capitalizeStr;
    element.style.color = 'green';
    element.style.background = '#ccc';
}
