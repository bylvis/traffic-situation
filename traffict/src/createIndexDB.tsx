// 创建indexDB数据库
export default function createIndexDB(){
    console.log('创建数据库');
    const request = indexedDB.open('carMoveDataBase',1)
    let db
    request.onerror = (event) =>{
        console.log('数据库打开报错！',event);
    }
    request.onsuccess = () => {
        db = request.result
        console.log('数据库创建成功！',db);
    }
}