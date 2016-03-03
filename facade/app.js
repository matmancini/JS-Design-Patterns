// Facade.js
var facade = (function () {

	let methods = {

		executeString(str) {
			return str.substring(0, str.length / 2);
		},
		executeNumber(num) {
			return num * num;
		},
		executeArray(arr) {
			return arr.map(x => x.toUpperCase());
		},
		executeBoolean(bool) {
			return bool.toString();
		},
		executeObject(obj) {
			return Object.keys(obj);
		},

	}	


	return {
		print(x) {
			var method = 'execute' + Object.prototype.toString.call(x).slice(8, -1);
			console.log(methods[method](x));
		}	
	}

}());

facade.print('Hello World');
facade.print(10);
facade.print(['foo', 'bar', 'baz']);
facade.print(true);
facade.print({id: 1, name: 'Matias'});


var MyModule = ( function( window, undefined ) {

  // revealing module pattern ftw
  function MyModule() {
    
    function someMethod() {
      alert( 'some method' );
    }
    
    function someOtherMethod() {
      alert( 'some other method' );
    }
    
    // expose publicly available methods
    return {
      
      // in our normal revealing module pattern, we'd do the following:
      someMethod : someMethod,
      
      // in the facade pattern, we mask the internals so no one has direct access by doing this:
      someMethod : function() {
        someMethod();
      }
      
    };
    
  }
  
} )( window );