QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});
QUnit.test( "Errors thrown for getAreaCode", function( assert ) {
    assert.throws( function() {
        getAreCode("415)444-5555");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown." );
});
QUnit.test( "Test getLineCode function", function( assert ) {
    var num = "(415)555-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid line code test passed.");
});
    QUnit.test( "Errors thrown for getLineCode", function( assert ) {
assert.throws( function() {
        getLineCode("(415)444-55595");
    }, "Line code has more than 4 numbers. An error should have been thrown" );
    });
QUnit.test( "Test getCentralCode function", function( assert ) {
    var num = "(415)555-5555";
    var result = getCentralCode(num);
    assert.deepEqual(result, "555", "Valid central code test passed.");
});
    QUnit.test( "Errors thrown for getCentralCode", function( assert ) {
assert.throws( function() {
        getCentralCode("(415)4445-5555");
    }, "Central code has more than 4 numbers. An error should have been thrown" );
        assert.throws( function() {
            getCentralCode("(415)44?-5555");
        }, "Central code has a non number. An error should have been thrown" );
    });
