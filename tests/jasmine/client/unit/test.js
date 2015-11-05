'use strict'

describe('hello template', function() {

    it('should be session variable increase', function() {

        var counter = Session.get('counter');
        // expect after button click session increase
        $('body > button').click(function(event) {
            console.log("button click !")
            var result = Session.get('counter');
            expect(result).toBeGreaterThan(counter);
        });
    });


});