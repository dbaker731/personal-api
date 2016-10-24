/*jshint esversion: 6 */

const user = require( '../user.js' );

module.exports = app => {
  app.get( '/api/name', user.getName );
  app.get( '/api/location', user.getLocation );
  app.get( '/api/occupation', user.getOccupation );
  app.get( '/api/hobbies', user.getHobbies );
  app.get( '/api/hobbies/search', user.searchHobbie );
  app.get( '/api/family', user.getFamily );
  app.get( '/api/family/search', user.searchFamily );
  app.get( '/api/restaurants', user.getRestaurants );
  app.get( '/api/restaurants/search', user.searchRestaurants );

  app.put( '/api/name', user.changeName );
  app.put( '/api/location', user.changeLocation );

  app.post( '/api/hobbies', user.addHobbie );
  app.post( '/api/occupation', user.addOccupation );
  app.post( '/api/family', user.addFamily );
  app.post( '/api/restaurants', user.addResteraunt );
};
