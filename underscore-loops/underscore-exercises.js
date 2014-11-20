var arr = [1, 2, 3, 4, 5];
_.each(arr, function(element, value, list){
  console.log(element, value, list);
})

var helloArr = ['bonjour', 'hello', 'ahnyoung'];

var checkValue = function (array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return true;
    }
  }
};



/*  if(array.indexOf(val) !== -1) {
    return true;
  }
  else {
    return false;
  }
}; */
//checkValue(helloArr, "why");
//checkValue(helloArr, "ahnyoung");

var checkValue = function(array, val) {
  var result = false;
  _.each(array, function(element){
      if(element===val){
        result = true;
      }
  })
  return result;
};

var testObj = { 
  one: 1,
  two: 2,
  three: 3
};

var pusher = function(object) {
  var newArray = [];
  //for(var key in object) {
  //  newArray.push(object[key]);
  //}
  //return newArray;
 return _.map(object, function(element)  {
    return element
  })
};

console.log(pusher(testObj));

var map = function(object, func, context) {
  context = context || [];
}



  var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };