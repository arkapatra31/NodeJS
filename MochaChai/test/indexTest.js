const assert = require('chai').assert;
const { describe, it } = require('mocha');
const method1 = require('../index').obj1;
const addNum = require('../index').addNum;

const first = method1();
const second = addNum(2,5);


//describe is used to create a test
describe('App', () => {
    describe('First Method', () => {
        //it is used to test a value
        it('Index.JS should return Hello', () => {
            assert.equal(first, 'hello');
        });

        it('Hello should be of type String', () => {
            assert.typeOf(first, 'string', "DataType does not match");
        });
    });

    describe('Second Method', () => {
        it("Addition Value is positive", () => {
            assert.isAbove(second, 0, "Value is not positive");
        });
    }); 
});