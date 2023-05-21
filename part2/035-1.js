function checkNumber(val){
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}
try{
    checkNumber(100);
    checkNumber('Wrong type');
}catch(e){
    console.log(`에러가 발생했습니다. >>> ${e}`); // e = 유효하지 않은 값입니다.
}finally{
    console.log('완료'); // 코드가 모두 처리되고 난뒤 마지막에 실행. 에러 여부와 상관없이 항상 실행됨
}