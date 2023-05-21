let value = "바깥값";
if(true){
    console.log(value);
    let value = "안쪽값"; //value는 if 블록문 안에 위쪽으로 호이스팅 되어 실제 let으로 선언이 이루어지기 전까지 일시적으로 접근이 안되는 영역을 만들고 
    //그 안에서 접근 하게 되면 에러를 발생
    console.log(value);
}