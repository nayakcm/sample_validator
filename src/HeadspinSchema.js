const Joi = require('joi');

const BaseSchema = require('./BaseSchema');

const valid = require('./validationHelper');

class HeadspinSchema extends BaseSchema {

	hsschema = {
		'headspin:capture.video': valid.hsCaptureVideo,
		headspinToken: valid.headspinToken,
	}

	copySchema = Object.assign(this.baseSchema,this.hsschema)
	
	schema = Joi.object(this.baseSchema).unknown();

};
module.exports = new HeadspinSchema();
