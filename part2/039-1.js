var a = 'global';

function print1(){
    console.log(a); 
}

function print2(){
    var a = "local";
    print1(); //이미 print1이 var a = global 을 참조하고 있기 때문에 global 출력
}

print1();
print2();