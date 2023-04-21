const Joi = require('joi');

class ValidationHelper{

    bsUser =  Joi.string().required()

    bskey = Joi.string().token().length(20).required().label('Browserstack Key')

    bsGeoLocation = Joi.string().length(2).required()

    bsDevice = Joi.string().required()

    bsOsVersion = Joi.string().required()

    bsapp = Joi.string().pattern(new RegExp('^bs://.*$')).required().messages({
        "string.pattern.base":` Browserstak APP ID is not valid`
    })

    bsIdleTimeout = Joi.number()

    bsdebug = Joi.string()

    bsresignApp = Joi.string()

    vendor = Joi.string().required()

    platformName = Joi.string().required()

    headspinToken = Joi.string().token().length(32).required().label('Headspin Token')

    hsSelector = Joi.string().required()

    hsCaptureVideo = Joi.string().required()

    hsAppId = Joi.any()

    optionalfiled = Joi.any()
}


module.exports =  new ValidationHelper();
