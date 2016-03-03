var observer = (function () {

	var _subscribers = {};

	function subscribe(type, fn) {

		if (!_subscribers[type]) {
			_subscribers[type] = [];
		}

		if (_subscribers[type].indexOf(fn) === -1) {
			_subscribers[type].push(fn);
		}

	}

	function unsubscribe(type, fn) {

		var listeners = _subscribers[type];

		if (!listeners) {
			return;
		}

		var index = listeners.indexOf(fn);

		if (index > 1) {
			listeners.splice(index, 1);
		}

	}

	function publish(type, evObj) {
		var listeners = _subscribers[type];

		if (!listeners) {
			return;
		}

		if (!evObj.type) {
			evObj.type = type;
		}

		listeners.forEach(function (fn) {
			fn(evObj);
		});
	}

	return {
		subscribe,
		unsubscribe,
		publish,
	}

}());

observer.subscribe('foo', log1);

observer.subscribe('foo', log2);

observer.subscribe('foo', log3);

observer.unsubscribe('foo', log3);

observer.publish('foo', {message: 'i am foo'});

function log1(ev) {
	console.log('on: foo 1 ->', ev);
}

function log2(ev) {
	console.log('on: foo 2 ->', ev);
}

function log3(ev) {
	console.log('on: foo 3 ->', ev);
}