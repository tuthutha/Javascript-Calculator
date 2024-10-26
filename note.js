// Danh sách các khóa học với thông tin gồm tên, mô tả, và giá của khóa học
var courses = [
    {
        name: 'Khóa học HTML, CSS',
        description: 'Hiểu rõ các nguyên tắc nền tảng về HTML và CSS để tiếp tục học các công nghệ phát triển web tiên tiến hơn như JavaScript, React',
        price: 'Khóa học miễn phí'
    },
    {
        name: 'Khóa học JavaScript',
        description: 'Khóa học JavaScript cơ bản được thiết kế để giúp bạn nắm vững các khái niệm và kỹ năng cần thiết để phát triển các trang web',
        price: '500'
    },
    {
        name: 'Khóa học ReactJS',
        description: 'Khóa học ReactJS là bước đệm hoàn hảo cho những ai muốn phát triển các ứng dụng web',
        price: '1000'
    },
];

// 1. Hiển thị danh sách khóa học khi trang được tải xong
document.addEventListener('DOMContentLoaded', function () {
    renderCourses(); // Gọi hàm renderCourses() để hiển thị danh sách khóa học
});

// Hàm hiển thị danh sách khóa học từ mảng `courses`
function renderCourses() {
    var html = '';
    // Duyệt qua từng khóa học và tạo HTML cho từng khóa học
    for (i = 0; i < courses.length; i++) {
        var course = courses[i];
        html += `
        <div class="col col-md-4 mt-2">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${course.name}</h5>
                    <p class="card-text">${course.description}</p>
                    <p class="card-text">${
                        Number(course.price) > 0 // Kiểm tra giá trị của khóa học
                        ? `Giá: ${Number(course.price)}đ` // Hiển thị giá khóa học nếu có
                        : 'Khóa học miễn phí' // Nếu không có giá trị, hiển thị "Khóa học miễn phí"
                    }</p>
                    <button type="button" class="btn btn-outline-primary" onclick="onEditCourse(${i})">Sửa</button>
                    <button type="button" class="btn btn-outline-danger" onClick="onDeleteCourse(${i})">Xóa</button>
                </div>
            </div>
        </div>
        `;
    }
    // Cập nhật danh sách khóa học trong phần tử HTML chứa class "courses"
    setHTML('.courses', html); 
}

// Hàm cập nhật nội dung HTML của một phần tử dựa trên CSS selector
function setHTML(selector, value) {
    var element = document.querySelector(selector); // Tìm phần tử HTML đầu tiên theo selector đã cho
    element.innerHTML = value; // Cập nhật nội dung HTML của phần tử đó
}

// 2. Xóa khóa học
function onDeleteCourse(index) {
    // Xác nhận trước khi xóa khóa học
    var isDeleted = confirm('Bạn có muốn xóa không');
    if (isDeleted) {
        deleteCourse(index); // Xóa khóa học
        renderCourses(); // Cập nhật lại danh sách hiển thị sau khi xóa
        saveCourses(); // Lưu lại danh sách sau khi xóa
    }
} 

// Hàm xóa khóa học khỏi danh sách
function deleteCourse(index) {
    courses.splice(index, 1); // Xóa khóa học tại vị trí `index` trong mảng
}

// Hàm lưu danh sách khóa học vào localStorage
function saveCourses() {
    localStorage.setItem('courses', JSON.stringify(courses)); // Chuyển đổi mảng courses thành chuỗi JSON và lưu vào localStorage
} 

// 3. Tạo khóa học
function onCreateCourse() {
    // Lấy giá trị từ các ô input để tạo khóa học mới
    var name = getValueInput('#name');
    var description = getValueInput('#description');
    var price = getValueInput('#price');
    // Thêm khóa học mới vào danh sách
    addCourse({
        name, 
        description,
        price,
    });
    renderCourses(); // Cập nhật lại danh sách hiển thị
    resetFormCourse('.form-course'); // Xóa dữ liệu trong form
}

// Hàm lấy giá trị từ ô input dựa trên selector
function getValueInput(selector) {
    var inputElement = document.querySelector(selector);
    return inputElement.value; // Trả về giá trị của ô input
}

// Thêm khóa học mới vào mảng `courses`
function addCourse(course) {  
    courses.push(course); // Thêm khóa học mới vào cuối mảng
}

// Reset lại form sau khi tạo khóa học mới
function resetFormCourse(selector) {
    var formElement = document.querySelector(selector);
    formElement.reset(); // Xóa dữ liệu trong form
} 

// 4. Sửa khóa học 
var editMode = false; // Biến trạng thái kiểm tra xem đang ở chế độ sửa hay không
var tmpIdCourse; // Lưu tạm thời vị trí khóa học đang được sửa

// Bật chế độ sửa
function enableEditMode() {
    editMode = true;
}

// Tắt chế độ sửa
function disableEditMode() {
    editMode = false;
}

// Hàm xử lý khi nhấn nút "Sửa" cho một khóa học
function onEditCourse(index) {
    enableEditMode(); // Kích hoạt chế độ sửa
    tmpIdCourse = index; // Lưu vị trí khóa học đang sửa
    var course = courses[index]; // Lấy thông tin khóa học từ mảng
    // Điền thông tin khóa học vào các ô input
    setInputValue('#name', course.name);
    setInputValue('#description', course.description);
    setInputValue('#price', course.price);
    // Thay đổi nội dung nút "Tạo khoá học" thành "Lưu khoá học"
    setHTML('.btn-create', 'Lưu khoá học');
}

// Hàm xử lý lưu thông tin khóa học sau khi sửa
function handleEditCourse() {
    // Lấy thông tin từ các ô input để cập nhật khóa học
    var name = getValueInput('#name');
    var description = getValueInput('#description');
    var price = getValueInput('#price');
    // Cập nhật thông tin khóa học trong mảng `courses`
    courses[tmpIdCourse] = { name, description, price };
    renderCourses(); // Cập nhật lại danh sách hiển thị
    setHTML('.btn-create', 'Tạo khoá học'); // Đổi nút về trạng thái tạo mới
    resetFormCourse('.form-course'); // Xóa dữ liệu form
    disableEditMode(); // Tắt chế độ sửa
}

// Đặt giá trị vào ô input dựa trên selector
function setInputValue(selector, value) {
    document.querySelector(selector).value = value;
}
