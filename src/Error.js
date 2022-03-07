const EmptyCartException = require("./CartItem.js");

class Error {
    #message;
    constructor(message) {
        this.#message = message;
    }

    get message(){
        return this.#message;
    }
}

class CartItemException extends Error{
}

module.exports = class InvalidArticleIdException extends CartItemException{}

module.exports = class InvalidQuantityException extends CartItemException{}

module.exports = class InvalidPriceException extends CartItemException{}

module.exports = class InvalidArticleIdException extends CartItemException{}


class CartException extends Error{
}

module.exports = class EmptyCartException extends CartException{}