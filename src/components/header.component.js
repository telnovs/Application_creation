// делаем импрорт класса Component
import {Component} from '../core/component.js'

export class HeaderComponent extends Component {
    constructor(id){
    super (id)
    }
    init(){
      const btn =this.$el.querySelector('.js-header-start')
        btn.addEventListener('click', buttonHandler.bind(this))
    }
}

 function buttonHandler(){
    // создаем для того чтобы узнать были ли мы на сайте или нет
     localStorage.setItem('visired',JSON.stringify(true))
    this.hide()
 }