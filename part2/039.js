var a = 10;
console.log(a);

function print(){
    var b = 20;
    if(true){
        var c = 30;
    }
    console.log(c);
}
print();
console.log(b); //유효하지 않음. 레퍼렌스 에러

// 스코프는 유효 범위로써 변수와 매개변수가 어디까지 유효한지 나타냄