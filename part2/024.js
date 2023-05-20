var condition = 5 > 10;
condition ? console.log('Left') : console.log('Right');
var result = condition ? (
    console.log("삼항 연산식의 첫 번째 표현식"),
    "표현식1"
):(
    console.log("삼항 연산식의 두 번째 표현식"),
    "표현식2"
); 
console.log(result); //참이면 표현문 1, 거짓이면 표현문 2