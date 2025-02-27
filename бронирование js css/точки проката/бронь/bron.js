let input = document.querySelector("#bank-card-input"),
            numbers = /[0-9]/,
            regExp = /[0-9]{4}/

        input.addEventListener("input",(ev)=>{

            //Нельзя ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
            if( ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19){
                input.value = input.value.slice(0, input.value.length - 1)
                return
            }

            //Клавиши "backspace","delete"
            let value = input.value
            if( ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4)) ){
                input.value = input.value.slice(0, input.value.length - 1)
                return
            }

            //Пробел после 4 цифр подряд
            if( regExp.test(value.slice(-4)) && value.length < 19){
                input.value += " "
            }
        })