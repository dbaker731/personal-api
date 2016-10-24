/*jshint esversion: 6 */

var user = {
  name: 'Daniel Baker',
  location: 'Plano, Texas',
  occupations: [
    {
      name: 'looking'
    }
  ],
  hobbies: [
    {
      name: 'computer games',
      type: 'fun'
    },
    {
      name: 'programming',
      type: 'serious'
    },
    {
      name: 'watching football',
      type: 'casual'
    }
  ],
  family: [
    {
      name: 'Diane Baker',
      relation: 'Mom',
      gender: 'female'
    },
    {
      name: 'John Baker',
      relation: 'Dad',
      gender: 'male'
    },{
      name: 'Amanda Baker',
      relation: 'Sister',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'El Queso',
      type: 'Mexican',
      rating: 9
    },
    {
      name: 'KFC',
      type: 'Fried Chicken',
      rating: 6
    },
    {
      name: 'Bobs',
      type: 'Steakhouse',
      rating: 10
    }
  ]
};



module.exports = {
  getName( req, res ){
    res.status( 200 ).json( user.name );
  },

  getLocation( req, res ){
    res.status( 200 ).json( user.location );
  },

  getOccupation( req, res ){
    res.status( 200 ).json( user.occupations );
  },

  getHobbies( req, res ){
    res.status( 200 ).json( user.hobbies );
  },

  searchHobbie( req, res ){
    const results = user.hobbies.filter( hobbie => hobbie.type === req.query.type );
    return res.status( 200 ).json( results );
  },

  getFamily( req, res ){
    res.status( 200 ).json( user.family );
  },

  searchFamily( req, res ){
    const results = user.family.filter( family => family.gender === req.query.gender );
    return res.status( 200 ).json( results );
  },

  getRestaurants( req, res ){
    res.status( 200 ).json( user.restaurants );
  },

  searchRestaurants( req, res ){
    const results = user.restaurants.filter( restaurant => restaurant.name === req.query.name);
    return res.status( 200 ).json( results );
  },

  changeName( req, res ){
    user.name = req.body.name;
    return res.status( 202 ).json( user );
  },

  changeLocation( req, res ){
    user.location = req.body.location;
    return res.status( 202 ).json( user );
  },

  addHobbie( req, res ){
    user.hobbies.push( req.body );
    return res.status( 201 ).json( user.hobbies );
  },

  addOccupation( req, res ){
    user.occupations.push( req.body );
    return res.status( 201 ).json( user.occupations );
  },

  addFamily( req, res ){
    user.family.push( req.body );
    return res.status( 201 ).json( user.family );
  },

  addResteraunt( req, res ){
    user.restaurants.push( req.body );
    return res.status( 201 ).json( user.restaurants );
  }

};
