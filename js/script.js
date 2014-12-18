var DATE = (function(module) {

	module.addDate = function(resultObject){
		resultObject.prepend(Date() + '<br />');
	};

	return module;
}(DATE || {}))