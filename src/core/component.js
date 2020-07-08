// создаем класс для наследование  и  экспортируем его
export  class Component {
    // конструктор принимает id
    constructor(id) {
        this.$el = document.getElementById(id)
        this.init()
        }

     // создаем пустой метод
    init(){}

    onHide(){}

    onShow(){}
    // Метод для скрытия
    hide(){
        this.$el.classList.add('hide')
        this.onHide()
    }
    // Метод для показа
    show(){
        this.$el.classList.remove('hide')
        this.onShow()
    }
}

