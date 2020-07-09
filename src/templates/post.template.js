export function renderPost(post, options = {}) {
    const tag = post.type === 'news'
        ? '<li class="tag tag-blue tag-rounded">Новость</li>'
        : '<li class="tag tag-rounded">Заметка</li>'

    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const candidate = favorites.find(p => p.id === post.id)

    const button = candidate
        ? `<button class="button-round button-small button-danger" data-id="${post.id}" data-title="${post.title}">Удалить</button>`
        : `<button class="button-round button-small button-primary" data-id="${post.id}" data-title="${post.title}">Сохранить</button>`

    return `
    <div class="panel">
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
          ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${options.withButton ? button : ''}
      </div>
    </div>
  `
}
// создаем метод который будет возвращать html раметку
//на входе он пролучет обьект поста
// function renderPost(post){
//     // оздаем переменную и проверяем сразу тернарным вырожением
//     const tag = post.type === 'news'
//         ?  '<li class="tag tag-blue tag-rounded">Новость</li>'
//         :  '<li class="tag tag-rounded">Заметка</li>'
//     // добовляем атребут id  data-id = '${post.id}' для прослушки события
//     // делаем проверку
//     const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id)
//         ?`<button class="button-round button-small button-danger"
//         data-id="${post.id}">Удалить</button>`
//         : `<button class="button-round button-small button-primary"
//         data-id="${post.id}">Сохранить</button>`
//     //возвращаем html раметку
//     return `
//     <div class="panel">
//         <div class="panel-head">
//           <p class="panel-title">${post.title}/p>
//           <ul class="tags">
//            ${tag}
//           </ul>
//         </div>
//         <div class="panel-body">
//           <p class="multi-line">${post.fulltext}</p>
//         </div>
//         <div class="panel-footer w-panel-footer">
//           <small>${post.data}</small>
//           ${button}
//         </div>
//      </div>
//   `
// }