var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// create instance
var myCustomer = new Customer("Haziq", "Ridzwan");
//myCustomer.firstName = "Haziq";
//myCustomer.lastName = "Ridzwan";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
