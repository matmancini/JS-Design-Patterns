var Iterator = (function () {

	class Iterator {

		constructor(collection) {
			this._collection = collection;
			this._index = 0;
		}

		next() {
			return this._collection[this._index++];
		}

		isDone() {
			return  this._collection.length === this._index;
		}

		reset() {
			this._index = 0;
			return this;
		}

		take(num) {
			var newIndex = this._index + num;
			var newArr = Array.prototype.slice.call(this._collection, this._index, newIndex);

			this._index = newIndex;
			return newArr;
		}

	}

	return {
		build: function (collection) {
			var keys = Object.keys(collection);
			var prop;

			if (typeof collection === 'number') {
				collection = collection.toString();
			}

			if (keys.length) {
				collection = keys.map(k => collection[k]);
			}

			if (collection.length) {
				return new Iterator(collection);
			} else {
				throw 'Iterator cannot be built from ' + typeof collection;
			}
		}
	}

}());

var arr = [
	{ id: 1, name: 'foo'},
	{ id: 2, name: 'bar'},
	{ id: 3, name: 'baz'},
	{ id: 4, name: 'bat'},
	{ id: 5, name: 'sup'},
	{ id: 6, name: 'ret'},
]
var arrIterator = Iterator.build(arr);

var obj = {
	foo: { id: 1, name: 'foo'},
	bar: { id: 2, name: 'bar'},
	baz: { id: 3, name: 'baz'},
	bat: { id: 4, name: 'bat'},
	sup: { id: 5, name: 'sup'},
	ret: { id: 6, name: 'ret'},
}
var objIterator = Iterator.build(obj);

var strIterator = Iterator.build('Hello World!');

var numIterator = Iterator.build(1161279543);