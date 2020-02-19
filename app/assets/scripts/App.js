import "../styles/styles.css";
import Person from "./modules/Person";

if (module.hot) {
  module.hot.accept();
}

/* lession example code below this line */

/*contructor function/BluePrint8*/
class Adult extends Person {
  payTaxes() {
    console.log(`${this.name} owes £1000,boom,boom!`);
  }
}

let rana = new Person("Rana miah", "red ");
rana.greet();
rana.color;

let mahmud = new Adult("Mahmud Rahman", "blue");
mahmud.greet();
mahmud.payTaxes();
