
function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand: " + this.brand +", the color is " + this.color + " and the price is " + this.price + "." );
	
}

	var SamsungGalaxyS6 = new Phone("Samsung", 3000, "white or black");
	var iPhone6S = new Phone("Apple", 3450, "silver");
	var OnePlusOne = new Phone("One Plus", 1499, "red");

SamsungGalaxyS6.printInfo();
