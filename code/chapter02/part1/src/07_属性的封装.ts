(function(){

  // 表示一个表示人的类
  class Person{
    // TS 可以在属性前添加属性的修饰符
    /**
     *  public 修饰的属性可以在任意位置访问（修改）默认值
     *  private 私有属性，私有属性只能在类内部进行访问（修改）默认值
     *      - 通过在类中添加方法使得私有属性可以被外部访问
     *  protected 受保护的属性，只能再当前类和当前类的子类中使用
     */
    public _name:string;
    private _age:number;

    constructor(name:string, age:number){
      this._name = name;
      this._age = age;
    }

    /**
     *  get方法用来读取属性，set方法用来设置属性
     *    - 它们被称为属性的存取器
     */

    // // 定义方法 用来获取age属性
    // getAge(){
    //   return this._age;
    // }

    // // 定义方法，用来设置age属性
    // setAge(value:number){
    //   if (value >= 0) {
    //     this._age = value;
    //   };
    // }

    // TS中设置getter方法的方式
    get name(){
      console.log('get name()执行了');
      return this._name;
    }

    set name(value:string){
      this._name = value
    }

    get age(){
      return this._age;
    }

    set age(value:number){
      if (value >= 0) {
        this._age = value;
      };
    }

  }

  const per = new Person('孙悟空', 18);

  console.log(per);

  /**
   *    现在数学是直接在对象中设置的，属性可以任意的被修改
   *        属性可以任意被修改将会导致对象中的属性变得非常不安全
   */

  // console.log(per);
  // console.log(per.getAge());

  // per.setAge(49);
  // per.setAge(-49);
  // console.log(per.getAge());

  console.log(per.name);
  per.name = 'xxxx';
  console.log(per.name);

  per.age = -38;
  console.log(per.age);

  class A{
    protected num:number;
    // private num:number;

    // protected

    constructor(num:number){
      this.num = num;
    }
  }

  class B extends A{
    test(){
      console.log(this.num);
    }
  }

  const b = new B(12);
  // B.test();
  b.test();

  class C{
    // 可以直接将属性定义再构造函数中
    constructor(public name:string, public age: number){
      
    }
  }

  const c = new C('xxx', 12)
  console.log(c);

})()