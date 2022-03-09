const EmptyCartException = require("./CartItem/CartItem.js");

class Error {
    #message;
    constructor(message) {
        this.#message = message;
    }

    get message(){
        return this.#message;
    }
}





