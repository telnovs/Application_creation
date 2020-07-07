import {HeaderComponent} from "./components/header.component"
import {NavigationComponent} from "./components/navigation.component"
import {PostsComponent} from "./components/posts.component.js" //компонента отвечающая за показ блока с id posts
import {CreateComponent} from "./components/create.component.js" //компонента отвечающая за показ блока с id create
import {FavoriteComponent} from "./components/favorite.component.js"
import {LoaderComponent} from "./components/loader.component"; //компонента отвечающая за показ блока с id favorite


new HeaderComponent('header') //создаем компоненту header

const navigation = new NavigationComponent('navigation') //создаем компоненту navigation
const loader = new LoaderComponent('loader') //создаем компоненту loader

//создаем переменные содержащие с себе компоненты для удобства дальнейшего использования
const posts = new PostsComponent('posts', {loader})
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite')

//передаем все три пункта меню (табы) в массив
navigation.registerTabs([
  {name: 'create', component: create},
  {name: 'posts', component: posts},
  {name: 'favorite', component: favorite}
])

