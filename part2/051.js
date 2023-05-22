class Cart{
    constructor(){
        this.store = {};
    }

    addProduct(product){
        this.store[product.id] = product;
    }

    getProuduct(id){
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({id: 1, name: '노트북'});
console.log(cart1.store);
/** cart1 인스턴스의 addProduct 메소드에 아이디가 1이고 이름이 "노트북" 인 상품 객체를 전달하여 호출 */

const P = cart1.getProuduct(1);
console.log(P);