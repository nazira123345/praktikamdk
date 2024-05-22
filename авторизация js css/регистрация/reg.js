function entrance() { 
    //Переменные
    let password = document.getElementById('password').value;
    let password_check = document.getElementById('password_check').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
 
     //Проверка, ввел ли пользователь ФИО
    if (name === '') {
      alert('Вы не ввели ФИО');
      return false;
    }
   
     // Проверка, ввел ли пользователь номер телефона
    if (phone === '') {
      alert('Вы не ввели номер телефона');
      return false;
    }
   
     // Проверка, ввел ли пользователь email
    if (email === '') {
      alert('Вы не ввели email');
      return false;
    }
   
     // Проверка, совпадают ли пароли
    if(password !== password_check) {
       alert('Пароли не совпадают. Попробуйте еще раз');
       return false;
     }
     alert ('Регистрация прошла успешно')
 }
 