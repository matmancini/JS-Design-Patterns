(function () {
'use strict';

var johnDoe = {
	first: 'John',
	last: 'Doe',
	sayName() {
		return `My name is ${this.first} ${this.last}`;
	}
}

var janeDoe = Object.create(johnDoe, {
	first: {value: 'Jane'},
	greet: {value: function (person) {
		return `Hello, ${person.first} ${person.last}`;
	}}
});

var jimSmith = Object.create(janeDoe, {
	first: {value: 'Jim'},
	last: {value: 'Smith'}
});

console.log(johnDoe);
console.log(johnDoe.sayName());


console.log(janeDoe);
console.log(janeDoe.sayName());
console.log(janeDoe.greet(jimSmith));


console.log(jimSmith);
console.log(jimSmith.sayName());
console.log(jimSmith.greet(johnDoe));
console.log(jimSmith.greet(janeDoe));


var foo = {
	name: 'foo',
	getFoo() {
		return 'foo';
	}
}

var bar = {
	name: 'bar',
	getBar() {
		return 'bar';
	}
}

var mix = _.mixin(foo, bar);
console.log(mix, mix.name, mix.getFoo, mix.getBar);

var assign = _.assign(foo, bar);
console.log(assign, assign.name, assign.getFoo, assign.getBar);

})();