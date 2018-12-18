const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return "fizz-buzz" for multiples of 15', function() {
        const normalCases = [ 15, 30, 45 ];
        normalCases.forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return "fizz-buzz" for multiples of 5', function() {
        const normalCases = [ 5, 10, 15, 20 ];
        [ 15, 30, 45 ].forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

});

