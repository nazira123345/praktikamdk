/*document.getElementById("accountForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвратить отправку формы

    // Получить значения полей
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;

    // Сохранить изменения (для примера просто выведем в консоль)
    console.log("Фамилия: " + lastName);
    console.log("Имя: " + firstName);
    console.log("Отчество: " + middleName);
});*/
function editData() {
    document.getElementById("lastName").readOnly = false;
    document.getElementById("firstName").readOnly = false;
    document.getElementById("middleName").readOnly = false;
    document.querySelector(".editBtn").style.display = "none";
    document.querySelector(".saveBtn").style.display = "block";
}

document.querySelector(".account-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвратить отправку формы

    // Получить значения полей
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;

    // Сохранить изменения (для примера просто выведем в консоль)
    console.log("Фамилия: " + lastName);
    console.log("Имя: " + firstName);
    console.log("Отчество: " + middleName);

    // Заблокировать поля после сохранения изменений
    document.getElementById("lastName").readOnly = true;
    document.getElementById("firstName").readOnly = true;
    document.getElementById("middleName").readOnly = true;
    document.querySelector(".editBtn").style.display = "block";
    document.querySelector(".saveBtn").style.display = "none";
});