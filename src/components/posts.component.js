import { Component } from '../core/component'
import {apiService} from '../services/api.service'
import {TransformService} from '../services/Transform.service.js'


export class PostsComponent extends Component {
  constructor(id,{loader}) {
    super(id)
    this.loader = loader
  }
  //добовляем прослушку событий обрабатываем клик на кпопку мыши
  init(){
    //обращаемся к текущиму элементу и добовляем прослушку событий
    this.$el.addEventListener('click',buttonHandler.bind(this))
  }
  //добовляем прослушку событий
  async onShow(){
    //показываем загрузку
    this.loader.show()
    const fbData = await apiService.fetchPosts()
    // для вывода обьетка с сервеса
    const posts = TransformService.fbObjectToArray(fbData)
    //для вывода поста
    const html =posts.map(post =>renderPost(post,{withButton:true}))
    // скрываем загрузку после получения постов
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin',html.join(' '))
  }
  //очищаем html  когда уходим с данной компаненты с помощью метода onHide
  onHide() {
   this.$el.innerHTML = ' '
  }
}

// создаем метод который будет возвращать html раметку
//на входе он пролучет обьект поста
function renderPost(post){
  // оздаем переменную и проверяем сразу тернарным вырожением
  const tag = post.type === 'news'
      ?  '<li class="tag tag-blue tag-rounded">Новость</li>'
      :  '<li class="tag tag-rounded">Заметка</li>'
  // добовляем атребут id  data-id = '${post.id}' для прослушки события
  // делаем проверку
  const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id)
      ?`<button class="button-round button-small button-danger"
        data-id="${post.id}">Удалить</button>`
      : `<button class="button-round button-small button-primary"
        data-id="${post.id}">Сохранить</button>`
  //возвращаем html раметку
  return `
    <div class="panel">
        <div class="panel-head">
          <p class="panel-title">${post.title}/p>
          <ul class="tags">
           ${tag}
          </ul>
        </div>
        <div class="panel-body">
          <p class="multi-line">${post.fulltext}</p>
        </div>
        <div class="panel-footer w-panel-footer">
          <small>${post.data}</small>
          ${button}
        </div>
     </div>
  `
}
function buttonHandler(event){
  const $el = event.target
  const id = $el.dataset.id
  //поверяем  если у нас обьект в localStorage
  if (id){
    //создаем переменную и парсим ее
    // если обьект будет пустым (null) тсделаем так что бы возвращался
    //  пусытой массив
   let favorites =JSON.parse(localStorage.getItem('favorites')) || []
    //делаем проверку если в данном массиве уже id
    //для того что бы проверить  если что то в массиве мы можем использовать inc ludes
    if(favorites.includes(id)){
      $el.textContent = 'Сохранить'
      $el.classList.add('button-primary')
      $el.classList.remove('button-danger')
      //если там что то есть то надо удалить элемет
      // удаляем лишнии id из списка путем проверки проверки id c помощью filter
      favorites = favorites.filter(fid => fid !== id)
    }else{
      $el.textContent = 'Удалить'
      $el.classList.remove('button-primary')
      $el.classList.add('button-danger')
      //если нет то нам необходимо добавить элемент
      favorites.push(id)
    }
    //обновляем новый полученный массив в  localStorage и парсим его
    localStorage.setItem('favorites',JSON.stringify(favorites))
  }
}