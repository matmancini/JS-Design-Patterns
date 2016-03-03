// Observers.js
class Observers {

	constructor() {
		this.observers = [];
	}

	add(observer) {
		this.observers.push(observer);
	}

	remove(observer) {
		this.observers = this.observers.filter(o => o !== observer);
	}

	get() {
		return this.observers;
	}

}

// Observer.js
class Observer {

	constructor(name) {
		this.name = name;
	}

	notify(event, data) {
		var message = `Notify - Name: ${this.name}, Event: ${event}, Data: `;
		console.log(message, data);
	}

}


// Subject.js
class Collection {

	constructor(items) {
		this.observers = new Observers();
		this.collection = items || [];
	}

	observe(observer) {
		this.observers.add(observer);
	}

	unObserve(observer) {
		this.observers.remove(observer);
	}

	notify(event, data) {
		this.observers.get().forEach(o => o.notify(event, data));
	}

	add(item) {
		this.collection.push(item);
		this.notify('added', item);
	}

	remove(item) {
		this.collection = this.collection.filter(i => {
			
			if (i !== item) {
				return true;
			}

			this.notify('removed', i);
			return false;
		})
	}

}


var collection = new Collection();
var observer1 = new Observer('observer1');
var observer2 = new Observer('observer2');

var data1 = {
	prop: 'something'
}

var data2 = {
	prop: 'something else'
}

collection.observe(observer1);
collection.observe(observer2);

collection.add(data1);
collection.add(data2);

collection.unObserve(observer2);

collection.remove(data1);
collection.remove(data2);

