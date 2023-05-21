const URL = 'http://js.com';
URL = 'http://js.com'; //재할당 오류

if(true){
    const URL2 = 'http://js.com';
}

console.log(URL2);
//if 문 블록 안에서 const로 정의된 변수를 블록 밖에서 접근할 경우 에러 발생 불변 객체