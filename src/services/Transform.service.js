export class TransformService {
    //создаем статический метод
    static fbObjectToArray(fbData) {
        //возвращаем и пробегамеся по обьекту с создаем новый массив с помощью map
        return Object.keys(fbData).map(key => {
            //получаем каждый обьект
            const item = fbData[key]
            //получаем ключи обьекта
            item.id = key
            //возвращаем сам обьект
            return item
        })
    }
}