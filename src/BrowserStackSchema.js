const Joi = require('joi');

const BaseSchema = require('./BaseSchema');

const valid = require('./validationHelper');


class BrowserStackSchema extends BaseSchema {

	bsschema = {
		'browserstack.user': valid.bsUser,
		'browserstack.key': valid.bskey,
		'browserstack.geoLocation': valid.bsGeoLocation,
	}
	

	copySchema = Object.assign(this.baseSchema,this.bsschema)
	
	schema = Joi.object(this.baseSchema).unknown();

};

module.exports =  BrowserStackSchema;