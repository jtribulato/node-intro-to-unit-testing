const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return "fizz-buzz" for multiples of 15', function() {
        [ 15, 30, 45 ].forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return "buzz" for multiples of 5', function() {
        [ 5, 10, 20, 25 ].forEach(input => {
            expect(fizzBuzzer(input)).to.equal('buzz');   //fails on 15
        });
    });

    it('should return "fizz" for multiples of 3', function() {
        [ 3, 6, 9, 12 ].forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz');   
        });
    });
    it('should return same number for each input', function() {
        [ 2, 4, 7, 16 ].forEach(input => {
            expect(fizzBuzzer(input)).to.equal(input);   
        });
    });


});

