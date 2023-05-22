class Chart{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    drawLine(){
        console.log('draw line');
    }
}

class BarChart extends Chart {
    constructor(width, height){
        super(width, height)
        //상속을 하게 되면 생성자 함수에서 상속한 부모 클래스의 생성자를호출해야 하는데
        //이때 super 키워드 사용 즉, super가 부모 생성자 함수를 가리킴
    }

    draw(){
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barchart1 = new BarChart(100, 100);
barchart1.draw();