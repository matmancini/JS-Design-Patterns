// Module Pattern
var Module = (function () {

	var _privates = {};

	function MyModule() {
		this._pattern = 'Module';
	}

	MyModule.prototype.getPattern = function () {
		return this._pattern + ' Pattern';
	}

	return MyModule;

}());



var ModuleClass = (function () {

	class MyModule {

		constructor() {
			this._pattern = 'ModuleClass';
		}

		getPattern() {
			return this._pattern + ' Pattern';
		}

	}

	return MyModule;

}());

// Revealing Module Pattern
var RevealingModule = (function () {

	var _privates = {};
	var _pattern = 'Revealing Module';

	function getPattern() {
		return _pattern + ' Pattern';
	}

	return {
		getPattern,
	};

}());

var mod = new Module();
console.dir(mod, mod.getPattern());

var modc = new ModuleClass();
console.dir(modc, modc.getPattern());

var rev = RevealingModule;
console.dir(rev, rev.getPattern());