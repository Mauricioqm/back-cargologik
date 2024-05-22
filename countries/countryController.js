const Country = require('./countryModel');

exports.getCountries = async (req, res, next) => {
    try {
        const countries = await Country.find({});
        res.send(countries);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

exports.filterCountries  = async (req, res, next) => {
    try {
        const countries = await Country.find()
                                            .where('name')
                                            .equals(req.query.name)
                                            .where('countryCode')
                                            .equals(req.query.countryCode)
                                            .limit(10);
        res.send(countries);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}