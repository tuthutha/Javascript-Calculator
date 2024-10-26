var courses = [
    {
        name: 'Khóa học HTML, CSS',
        description: 'Hiểu rõ các nguyên tắc nền tảng về HTML và CSS để tiếp tục học các công nghệ phát triển web tiên tiến hơn như JavaScript, React',
        price: 'Khóa học miễn phí'
    },
    {
        name: 'Khóa học Javacript',
        description: 'Khóa học JavaScript cơ bản được thiết kế để giúp bạn nắm vững các khái niệm và kỹ năng cần thiết để phát triển các trang web',
        price: '500'
    },
    {
        name: 'Khóa học ReactJS',
        description: 'Khóa học ReactJS là bước đệm hoàn hảo cho những ai muốn phát triển các ứng dụng web',
        price: '1000'
    },
]

// 1. Hiển thị danh sách khóa học thông qua Javascript thay thế cho HTML
document.addEventListener('DOMContentLoaded', function () {
    renderCourses();
});

// Hiển thị danh sách khóa học
function renderCourses() {
    var html = ''
    for (i = 0; i < courses.length; i++) {
        var course = courses[i];
        html += `
        <div class="col col-md-4 mt-2">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${course.name}</h5>
                    <p class="card-text">${course.description}</p>
                    <p class="card-text">${
                        Number(course.price) > 0
                        ? `Giá: ${Number(course.price)}đ`
                        : 'Khóa học miễn phí'
                    }</p>
                    <button type="button" class="btn btn-outline-primary" onclick="onEditCourse(${i})">Sửa</button>
                    <button type="button" class="btn btn-outline-danger" onClick="onDeleteCourse(${i})">Xóa</button>
                </div>
            </div>
        </div>
        `
    }
    // Sử dụng hàm setHTML để cập nhật danh sách khóa học
    setHTML('.courses', html); 
}
// Hàm này được sử dụng để cập nhật nội dung HTML của một phần tử dựa trên bộ chọn CSS.
function setHTML(selector, value) {
    var element = document.querySelector(selector); 
    element.innerHTML = value; 
}

// 2. Xóa khóa học
function onDeleteCourse(index) {
    var isDeleted = confirm('Bạn có muốn xóa không');
    if (isDeleted) {
        deleteCourse(index);
        renderCourses();
        saveCourses();
    }
} 

function deleteCourse(index) {
    courses.splice(index, 1);
}

function saveCourses() {
    localStorage.setItem('courses', JSON.stringify(courses));
} 

// 3. Tạo khóa học
function handleCreateCourse() {
    var name = getValueInput('#name');
    var description = getValueInput('#description');
    var price = getValueInput('#price');
    addCourse({
        name, 
        description,
        price,
    })
    renderCourses();
    resetFormCourse('.form-course');
} 

function getValueInput(selector) {
    var inputElement = document.querySelector(selector);
    return inputElement.value;
}
// Thêm khóa học mới
function addCourse(course) {  
    courses.push(course);   
}
// Reset lại Form sau khi tạo khóa học mới
function resetFormCourse(selector) {
    var formElement = document.querySelector(selector);
    formElement.reset(); 
} 

// Nếu ấn vào Sửa, hoặc ấn vào tạo
function onCreateCourse() {
    if (editMode) {
        handleEditCourse();
    } else {
        handleCreateCourse();
    }
}

// 4. Sửa khóa học 
var editMode = false;
var tmpIdCourse;

// Bật chế độ sửa:
function enableEditMode() {
    editMode = true;
}

// Tắt chế độ sửa:
function disableEditMode() {
    editMode = false;
}

// Hàm xử lý khi nhấn nút "Sửa" cho một khóa học
function onEditCourse(index) {
    enableEditMode();
    tmpIdCourse = index;
    var course = courses[index];
    setInputValue('#name', course.name);
    setInputValue('#description', course.description);
    setInputValue('#price', course.price);
    // Đổi nội dung nút "Tạo khoá học" thành "Lưu khoá học" để hiển thị trạng thái sửa
    setHTML('.btn-create', 'Lưu khoá học');
}

// Hàm xử lý lưu thông tin khóa học sau khi sửa
function handleEditCourse() {
    var name = getValueInput('#name');
    var description = getValueInput('#description');
    var price = getValueInput('#price');
    courses[tmpIdCourse] = { name, description, price };
    renderCourses();
    setHTML('.btn-create', 'Tạo khoá học');
    // Xóa thông tin khỏi form và đặt lại trạng thái
    resetFormCourse('.form-course');
    disableEditMode();
}

function setInputValue(selector, value) {
    document.querySelector(selector).value = value;
}

function getValueInput(selector) {
    return document.querySelector(selector).value;
}
