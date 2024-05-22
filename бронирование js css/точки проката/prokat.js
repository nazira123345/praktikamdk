let modals = document.querySelectorAll('.modal');
let map = document.querySelector('.map');

//Перебор всех участков карты
map.addEventListener('click', function(event) {
    //Проверка, был ли кликнут элемент area
    if(event.target.tagName.toLowerCase() === 'area') {

        let modalId = event.target.getAttribute('href');
        
        //Модальное окно с соответствующим id и его отображение
        let modal = document.querySelector(modalId);
        if(modal) {
            modal.style.display = 'block';
        }
        
        //Стандартное действие по клику на ссылку
        event.preventDefault();
    }
});

//Закрытие модального окна
modals.forEach(function(modal) {
    let closeButton = modal.querySelector('.close');
    if(closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
});