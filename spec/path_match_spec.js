var pathMatch = require('../lib/path_match');

describe('pathMatch', function () {
  it('returns the object that has an exact-matching verb and path to the input', function () {

    var routeDefinitions = [
      { verb: 'get', path: '/about' },
      { verb: 'get', path: '/' },
      { verb: 'post', path: '/' },
      { verb: 'get', path: '/contact' },
    ];

    expect(pathMatch(routeDefinitions, 'get', '/contact')).toEqual({ verb: 'get', path: '/contact'});
    expect(pathMatch(routeDefinitions, 'get', '/about')).toEqual({ verb: 'get', path: '/about'});
    expect(pathMatch(routeDefinitions, 'get', '/')).toEqual({ verb: 'get', path: '/'});
    expect(pathMatch(routeDefinitions, 'post', '/')).toEqual({ verb: 'post', path: '/'});
  });

  it('returns null if the verb does not match any in array', function () {

    var routeDefinitions = [
      { verb: 'get', path: '/about' },
      { verb: 'get', path: '/' },
      { verb: 'post', path: '/' },
      { verb: 'get', path: '/contact' },
    ];

    expect(pathMatch(routeDefinitions, 'post', '/about')).toEqual(null);
  });

  it('returns the object that matches the path to your route definitions even when it contains dynamic segments', function () {
    var routeDefinitions = [
      { verb: 'get', path: '/artists/:artist_name/albums' },
      { verb: 'get', path: '/artists/:artist_name/albums/:album_id' },
      { verb: 'get', path: '/:name' },
    ];

    expect(pathMatch(routeDefinitions, 'get', '/SammyJ')).toEqual({ verb: 'get', path: '/:name' });
    expect(pathMatch(routeDefinitions, 'get', '/artists/bjork/albums')).toEqual({ verb: 'get', path: '/artists/:artist_name/albums' });
    expect(pathMatch(routeDefinitions, 'get', '/artists/bjork/albums/29943')).toEqual({ verb: 'get', path: '/artists/:artist_name/albums/:album_id' });
  });


  it('returns the first matching object even if there is a better one later', function () {
    var routeDefinitions = [
      { verb: 'get', path: '/:id' },
      { verb: 'get', path: '/new' },
    ];

    expect(pathMatch(routeDefinitions, 'get', '/new')).toEqual({ verb: 'get', path: '/:id' });
  });



});
