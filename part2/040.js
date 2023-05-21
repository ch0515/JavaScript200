hello();
function hello(){
    console.log('안녕!');
} // 자바스크립트에서는 함수를 선언하기 전에 호출 가능 <-- 호이스팅 -> 직역하면 끌어올리기 
//함수가 실제 호출하기 이전으로 끌어 올라간 것처럼 동작하기 때문

hello2(); //호이스팅이 이루어지면 값을 undefined로 할당 그렇기 때문에 출력 결과는 typeError
var hello2 = function(){
    console.log("안녕하세요~");
}