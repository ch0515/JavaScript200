let user = {
    name: "jeado"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name'); //속성 기술자 객체 가져오기
console.log(descriptor);

let user2 = {};
Object.defineProperty(user2, "name", { //해당 객체 속성 정의
    value: "jeado",
    enumberable: true,
    configurable: true,
    writable: false
});
console.log(user2.name);
user2.name = "bbo";
console.log(user2.name);

let user3 = {
    name: "jeado",
    toString(){
        return this.name;
    }
};
Object.defineProperty(user3, "toString", {
    enumerable: false
});
for(let key in user3){
    console.log(key);
}

let user4 = {};
Object.defineProperty(user4, "name", {
    value: "jeado",
    configurable: false
});
delete user4.name
console.log(user4);
Object.defineProperty(user4, "name", {
    writable: true
});