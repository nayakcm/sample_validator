
const valid = require('./validationHelper');

class BaseSchema
{
	constructor () {

		this.baseSchema = {
			device: valid.bsDevice,
			app: valid.bsapp,
			bsIdleTimeout: valid.bsIdleTimeout,
			vendor: valid.vendor,
		}
	};

	getSchema = () => {
		 Object.keys(this.baseSchema)
	}

}
module.exports = BaseSchema;

