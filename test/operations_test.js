var assert = require('assert');

const operations = require('../calculator.js');
const cientific_operations = require('../cientific_ops.js');



  describe('Arithmetic Operations',function (){

    describe('Adding',function(){
        it('should return 12 when 5+7', function(){
            assert.equal(operations.add(5,7),12)
        })
    }
    )

    describe('Substract',function(){
        it('should return 2 when 7-5', function(){
            assert.equal(operations.substract(7,5),2)
        })
    }
    )

    describe('Adding',function(){
        it('should return 25 when 5*5', function(){
            assert.equal(operations.multiply(5,5),25)
        })
    }
    )

    describe('Adding',function(){
        it('should return 1 when 5/5', function(){
            assert.equal(operations.divide(5,5),1)
        })
    }
    )
  }
  )


  describe('Cientific Operations', function(){
    
    describe('Squared root', function(){
        it('Sqrt of 64 must be 8',function(){
            assert.equal(cientific_operations.sqrt(64),8)
        })
    })

    describe('Logarithm', function(){
        it('Compare Log 10',function(){
            assert.equal(cientific_operations.log(10), 2.302585092994046)
        })
    })

    describe('Exp', function(){
        it('Compare e**2',function(){
            assert.equal(cientific_operations.exp(2), 7.38905609893065)
        })
    })

    describe('Power', function(){
        it('2 to the power 4 must be 16',function(){
            assert.equal(cientific_operations.pow(2,4),16)
        })
    })


  })