const expect = require('chai').expect;
const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return fizz-buzz for multiples of 15', function() {
        const normalCases = [ 15, 30, 45 ];
        normalCases.forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
            
 
    });
});

