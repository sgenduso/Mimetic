module.exports = function (input) {
  input = input.replace('?','').split('&');
  var newObj = {};
    for (var i = 0; i < input.length; i++) {
      var splitArray = input[i].split('=');
      newObj[splitArray[0]]=splitArray[1];
    }
    return newObj;
}
