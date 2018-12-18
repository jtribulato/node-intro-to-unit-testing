const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return "fizz-buzz" for multiples of 15', function() {
        [ 15, 30, 45 ].forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return "buzz" for multiples of 5', function() {
        [ 5, 10, 15, 20 ].forEach(input => {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

});

