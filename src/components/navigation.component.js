import {Component} from '../core/component'

export class NavigationComponent extends Component {
    $el;
    constructor(id){
        super(id)
    }
    init(){
        this.$el.addEventListener('click',tabClickHander.bind(this))
    }
}
//функция для навигации
function tabClickHander(event){
    //проверяем был ли сделан клик по ссылки А
    if(event.target.classList.contains('tab')) {
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab =>{
              tab.classList.remove('active')
            }
        )
        event.target.classList.add('active')
    }
}