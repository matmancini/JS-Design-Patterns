var dom = (function () {

	var _counter = 0;
	var _instance;

	function _generateID() {
		return 'node-' + _counter++;
	}

	function create(tagName, id) {
		var el = document.createElement(tagName);
		el.id = id || _generateID();
		return el;
	}

	function _getInstance() {
		return {
			create
		}
	}

	return {
		get() {
			return _instance || (_instance = _getInstance());
		}
	}

}());

var div = dom.get().create('div');
var divMain = dom.get().create('div', 'main');
var span = dom.get().create('span');

console.log(div, divMain, span);

console.log(dom.get() === dom.get());