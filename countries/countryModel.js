const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema(
    {
        name: {
            type: String
        },
        countryCode: {
            type: String
        }
    },
    { minimize: false },
)

countrySchema.method.toJSON = function (){
    const country = this;
    const countrObject = country.userObject();
}


const Country = mongoose.model('Country', countrySchema);

module.exports = Country;