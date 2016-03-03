var dom = (function () {

	var _counter = 0;

	function _generateID() {
		return 'node-' + _counter++;
	}

	function create(tagName, id) {
		var el = document.createElement(tagName);
		el.id = id || _generateID();
		return el;
	}

	return {
		create
	}

}());

var div = dom.create('div');
var divMain = dom.create('div', 'main');
var span = dom.create('span');

console.log(div, divMain, span);

console.log(dom === dom);