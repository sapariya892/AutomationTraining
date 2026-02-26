class Parent {
    add(a: number, b: number): number {
        return a + b;
    }
}
class Child extends Parent {
    add(a: number, b: number): number {
        return a + b + 10;
    }
}

let objp=new Parent();
console.log(objp.add(10,20));


let obj=new Child();
console.log(obj.add(10,20));
