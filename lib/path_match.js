module.exports = function (array, thisVerb, thisPath) {
  var output;
  array.forEach(function (obj) {
    if (obj.verb === thisVerb && obj.path === thisPath) {
      output = obj;
    }
  });
  if (output === undefined) {
    return null;
  } else {
    return output;
  }
};
