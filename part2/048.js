const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student){
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function(){
        this.exp++;
    }
}
console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);
/* 객체 지향 프로그래밍이란, 프로그램을 객체들로 구성하고 객체들 간에 서로 상호작용하도록 작성하는 방법
객체는 특징적인 행동과 변경 가능한 상태를 가짐
 */