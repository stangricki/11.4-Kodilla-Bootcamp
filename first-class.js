function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price);
}

var iPhone6S = new Phone('Apple', 2250, 'silver');
var samsungGalaxyS6 = new Phone('Samsung Galaxy S6', 1650, 'black');
var onePlusOne = new Phone('OnePlus One', 1200, 'white');
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo()