 //создаем сервис который будет работать с асинхронами запросами
 class ApiService{
    constructor(baseUrl){
        this.url =baseUrl
    }
    //метод для создание нового синхроного метода для создание поста
   async creatPost(post){
        try {
            // создаем переменую с присвоением Интерфейса Request из Fetch API является запросом ресурсов или данных.
            const  request = new Request(this.url + '/posts.json',{
                method : 'post',
                body : JSON.stringify('post')
            })
            //повторные строку
            return useRequest(request)
        }catch(error){
            console.log(error)
        }
        }

   async fetchPosts(){
        try{
            // создаем переменую с присвоением Интерфейса Request из Fetch API является запросом ресурсов или данных.
            const  request = new Request(this.url + '/posts.json',{
                // get идет по умолчанию его можно не писать
                method : 'get',
            })
            //повторные строку
            return useRequest(request)
        }catch(error){
            //Показываем ошибку
            console.log(error)
        }
   }
   //загражаем пость по определенному id
     async fetchPostById(id) {
         try {
             const request = new Request(`${this.url}/posts/${id}.json`, {
                 method: 'get'
             })
             return useRequest(request)
         } catch (error) {
             console.error(error)
         }
     }
 }
// убираем повторяющийся код в метод
 async function useRequest(request){
     //оброщаемся к сервесу с помощью метода fetch
     const response =  await   fetch(request)
     return await response.json()
 }

 export const apiService = new ApiService('https://webformyself-javascript.firebaseio.com')