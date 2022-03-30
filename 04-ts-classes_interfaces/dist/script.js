"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(`${phrase} from ${this.name}`);
    }
}
let user1;
user1 = new Person("Max");
//# sourceMappingURL=script.js.map