module.exports = function (array, verb, path) {
  var output;
  var pathMatches;
  array.reverse().forEach(function (obj) {
    var objPathArray = obj.path.split('/').slice(1,obj.path.length);
    var pathArray = path.split('/').slice(1,path.length);
    if (objPathArray.length !== pathArray.length) {
      pathMatches = false;
    } else {
      var numMatched = 0;
      for (var i = 0; i < objPathArray.length; i++) {
        if (objPathArray[i].charAt(0) === ':' || objPathArray[i] === pathArray[i]) {
          numMatched++;
        }
      } if (numMatched === objPathArray.length) {
        pathMatches = true;
      }
    }
    if (obj.verb === verb && pathMatches === true) {
      output = obj;
    }
  });
  if (output === undefined) {
    return null;
  } else {
    return output;
  }
};
