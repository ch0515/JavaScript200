const CONST_USER = { name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'bbo'}; //재할당만 불가능, 객체 내부의 상태만 변경 가능하다.