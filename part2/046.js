let user = {};
Object.defineProperty(user, "age", {
    get: function (){
        return this._age;
    },
    set: function (age){
        if (age < 0){
            console.error('0보다 작은 값은 올 수 없습니다.');
        }else{
            this._age = age;
        }
    },
    enumerable: true
});
user.age = 10;
console.log(user.age);
user.age = -1;

let user2 = {
    get name(){ //get 메소드는 속성에 접근할 때 호출 user.age에 접근하면 user._age의 결과를 반환함.
        return this._name;
    },
    set name(val){ //set메소드는 속성에 값을 대입할 때 호출 user.age에 값을 할당할때 0보다 작은 값을 주면 에러 로그를 출력하고
        // 0 보다 큰 값을 주었을 때 user객체의 _age 속성에 값을 대입함.
        if (val.length > 3){
            throw new Error('3자 이상이어야 합니다.');
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';