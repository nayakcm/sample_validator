const BSschema  = require('../src/BrowserStackSchema');

const data = require('../testDataCaps')

const HSschema = require('../src/HeadspinSchema');


describe('validating the Browser Stack schema', () => {

    beforeAll(() => {
        bsschema = new BSschema().schema
    })

    it(' should not return error', () => {
        const response = bsschema.validate(data.android_mob);
        expect(response.error).toBeUndefined();
    });


    it(' should return no user error', () => {
        const response = bsschema.validate(data.nouser_BS);
        const error = response.error.details[0].message
        expect(error).toEqual("\"browserstack.user\" is not allowed to be empty");
    });



})
