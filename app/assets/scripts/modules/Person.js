class Person {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  greet(){
      console.log(
        `Hi, my name is ${this.name}.And my favourite color is ${this.color}.`
      );
  }
}



export default Person;
