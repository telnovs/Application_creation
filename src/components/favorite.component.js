import { Component } from '../core/component'
import {apiService} from '../services/api.service'
import { renderPost } from '../templates/post.template'



// export class FavoriteComponent extends Component {
//   constructor(id) {
//     super(id)
//   }
// }

export class FavoriteComponent extends Component {
  constructor(id,options) {
    super(id)

    //присваеваем локальной переменной options)
    this.loader = options.loader
  }
  init(){
    //добовляем прослушку событий
    this.$el.addEventListener('click',linkClickHandler.bind(this))
  }
  onShow(){
    //показывакем список избранных элементов
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    const html = renderList(favorites)
    //добовляем html
     this.$el.insertAdjacentHTML('afterbegin',html)
  }
  //читстим шаблом
  onHide() {
    this.$el.innerHTML = ''
  }
}
async function linkClickHandler(event){
  //отменяем поведение по дефолту
  event.preventDefault()
  //делаем проверку
  if(event.target.classList.contains('js-link')){
    const postId = event.target.textContent
    //очищаем наш компонент
    this.$el.innerHTML = ''
    this.loader.show()
    //получаем id
    const post = await apiService.fetchPostById(postId)
    //скрываем загрузку
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', renderPost(post, {withButton: false}))
   }
  }

function renderList(list=[]){

  if ( list && list.length){
    return `
    <ul>
    //пробегаемся по массиву лист с помощью map  прообразовываем строку
    ${list.map(i =>`,<li><a href = "#" class="js-link">${i}</a></li>`).join(' ')}
    </ul>
    `
  }
  return `<p class="center">Вы пока ничего не добавили</p>`
}