const Countries = require('./countryController');
module.exports = (router) => {
  router.get('/countries', Countries.getCountries);
//   router.get('/countries/', Countries.getCountries);
}