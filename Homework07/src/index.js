"use strict";
exports.__esModule = true;
var data = require("./sources.json");
var Product = /** @class */ (function () {
    function Product(prod) {
        this.id = prod.id;
        this.name = prod.name;
        this.price = prod.price;
        this.qty = prod.qty;
        this.discount = 0;
        this.likeability = 0;
    }
    Product.prototype.printDetails = function () {
        console.log(this.name + "| price: " + this.price + "$| discount: " + this.discount + "$");
    };
    Product.prototype.printAllDetails = function () {
        console.log(this.name + "| price: " + this.price + "$| stock: " + this.qty + "| likeability: " + this.likeability + "| discount: " + this.discount + "$");
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price - this.discount;
    };
    Product.prototype.getQty = function () {
        return this.qty;
    };
    Product.prototype.decrementQty = function () {
        if (this.qty > 0)
            this.qty--;
    };
    Product.prototype.isAvailable = function () {
        return this.qty > 0 ? true : false;
    };
    Product.prototype.addDiscount = function (value) {
        this.discount += value;
    };
    Product.prototype.incrementLikeability = function () {
        this.likeability++;
        if (this.likeability > 3) {
            this.discount += 30;
        }
        else if (this.likeability > 5) {
            this.discount += 20;
        }
        else if (this.likeability > 10) {
            this.discount += 50;
        }
    };
    Product.prototype.reffilStock = function () {
        if (!this.isAvailable()) {
            this.qty = 10;
            console.log("Reffiling stock for " + this.name);
            console.log("-----------------------------");
        }
    };
    return Product;
}());
var Customer = /** @class */ (function () {
    function Customer(person) {
        this.id = person.id;
        this.name = person.name;
        this.favorites = [];
        this.cart = [];
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.addToCart = function (product) {
        var _this = this;
        products.forEach(function (current) {
            if (current.getId() == product.getId()) {
                if (!product.isAvailable()) {
                    console.log("Item is out of stock.");
                    return;
                }
                // add product to bought items list of customer
                _this.cart.push(current);
                // decrease available quantity of the product
                product.decrementQty();
                // increase likeability of the product
                product.incrementLikeability();
            }
        });
    };
    Customer.prototype.saveItem = function (product) {
        // check if the product is already in the list
        this.favorites.forEach(function (current) {
            if (current.getId() == product.getId()) {
                console.log("Product is already in your favorites list.");
                return;
            }
        });
        // if not, then add it
        this.favorites.push(product);
        // offer a discount
        if (product.getPrice() > 1000 && product.getQty() > 0) {
            var discount = 100;
            console.log(this.name + " saved '" + product.getName() + "' and got a " + discount + "$ discount.");
            product.addDiscount(discount);
        }
    };
    Customer.prototype.makePurchase = function () {
        // create new order
        var order = {
            customerId: this.id,
            products: this.cart,
            total: this.calcTotalPrice()
        };
        if (order.total == 0) {
            console.log("Cart is empty.");
            return;
        }
        // add order to order list
        orders.push(order);
        // clear cart
        this.cart = [];
        // display order details
        console.log(this.name + " purchased the following items:");
        order.products.forEach(function (current) {
            current.printDetails();
        });
        console.log("Total: " + order.total + "$");
        console.log("---------------------");
    };
    Customer.prototype.calcTotalPrice = function () {
        var total = 0;
        this.cart.forEach(function (current) {
            total += current.getPrice();
        });
        return total;
    };
    return Customer;
}());
var products = [];
var customers = [];
var orders = [];
function init() {
    var items = data.items, persons = data.persons;
    items.forEach(function (item) {
        var p = new Product(item);
        products.push(p);
    });
    persons.forEach(function (person) {
        var p = new Customer(person);
        customers.push(p);
    });
    printProducts();
    customers[0].addToCart(products[0]);
    customers[0].addToCart(products[2]);
    customers[0].makePurchase();
    printProducts();
    customers[1].saveItem(products[1]);
    customers[1].addToCart(products[1]);
    customers[1].addToCart(products[1]);
    customers[1].addToCart(products[5]);
    customers[1].makePurchase();
    products[1].reffilStock();
    printProducts();
}
function printProducts() {
    console.log("Products:");
    products.forEach(function (current) {
        current.printAllDetails();
    });
    console.log("-------------------------");
}
init();
