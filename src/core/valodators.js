//класс для волидации
export class Validators {
    //первый волидатор провиряет пустой ли контроль или нет
    // по умолчаниюзадаем значение пустой строки
    static required(value = '') {
        //возвращяем булевое значение
        return value && value.trim()
    }

    // стический метод для задание минимального значения текста в символах
    static minLength(length) {
        //создаем замыкание
        return value => {
            return value.length >= length
        }
    }
}