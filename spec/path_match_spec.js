var pathMatch = require('../lib/path_match');

describe('pathMatch', function () {
  it('returns the object that has an exact-matching verb and path to the input', function () {
    //setup - define inputs
    var routeDefinitions = [
      { verb: 'get', path: '/about' },
      { verb: 'get', path: '/' },
      { verb: 'post', path: '/' },
      { verb: 'get', path: '/contact' },
    ];

    //execution - call your function
    var actual = pathMatch(routeDefinitions, 'get', '/contact');

    //expectation - check the result against an expected result
    var expected = { verb: 'get', path: '/contact'};
    expect(actual).toEqual(expected);
    expect(pathMatch(routeDefinitions, 'get', '/about')).toEqual({ verb: 'get', path: '/about'});
    expect(pathMatch(routeDefinitions, 'get', '/')).toEqual({ verb: 'get', path: '/'});
    expect(pathMatch(routeDefinitions, 'post', '/')).toEqual({ verb: 'post', path: '/'});
  });

  it('returns null if the verb does not match any in array', function () {
    //setup - define inputs
    var routeDefinitions = [
      { verb: 'get', path: '/about' },
      { verb: 'get', path: '/' },
      { verb: 'post', path: '/' },
      { verb: 'get', path: '/contact' },
    ];

    //execution - call your function
    var actual = pathMatch(routeDefinitions, 'post', '/about');

    //expectation - check the result against an expected result
    var expected = null;
    expect(actual).toEqual(expected);
  });

});
