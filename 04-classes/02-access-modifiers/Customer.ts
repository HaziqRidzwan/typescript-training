class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get_firstName(): string {
        return this._firstName;
    }

    public set_firstName(_firstName: string): void {
        this._firstName = _firstName;
    }

    public get_lastName(): string {
        return this._lastName;
    }

    public set_lastName(_lastName: string): void {
        this._lastName = _lastName;
    }

}

// create instance
let myCustomer = new Customer("Haziq", "Ridzwan");

//myCustomer.firstName = "Haziq";
//myCustomer.lastName = "Ridzwan";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);