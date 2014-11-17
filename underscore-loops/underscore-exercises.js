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
