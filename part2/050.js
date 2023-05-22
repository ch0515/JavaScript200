function Storage(){
    this.dataStore = {};
}
Storage.prototype.put = function(key, data){
    this.dataStore[key] = data;
} //Storage 생성자 함수의 프로토타입 객체에 put 메소드를 추가
Storage.prototype.getData = function(key){
    return this.dataStore[key];
}
// Storage 생성자 함수의 프로토타입 객체에 getData 메소드를 추가. getData 메소드는 매개변수의 값을 키로 해서
//dataStore 속성에서 찾아 반환
const productStorage = new Storage();
productStorage.put('id001', {name: '키보드', price: 20000});
console.log(productStorage.getData('id001'));

function RemovableStorage(){
    Storage.call(this);
}
RemovableStorage.prototype = Object.create(Storage.prototype);

RemovableStorage.prototype.removeAll = function(){
    this.dataStore = {}
}
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name: '키보드', price: 20000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);