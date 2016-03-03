function Beverage(name, temp) {
	this.name = name;
	this.temp = temp;
}

Beverage.prototype.drink = function() {
	return 'Drinking ' + this.temp + ' ' + this.name;
};


function Coffee(type) {
	Beverage.call(this, 'coffee', 'hot');
	this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype);

Coffee.prototype.sip = function () {
	return 'Sipping my ' + this.temp + ' ' + this.type + ' ' + this.name;
}

var water = new Beverage('water', 'cold');

console.log(water);
console.log(water.drink());

var coffee = new Coffee('colombian');
console.log(coffee);
console.log(coffee.drink());
console.log(coffee.sip());

console.log('Coffee.prototype.__proto__', Coffee.prototype.__proto__);
console.log('Beverage.prototype', Beverage.prototype);
console.log(Coffee.prototype.__proto__ === Beverage.prototype);