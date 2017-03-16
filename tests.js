QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test("Test the getCentralCode function.", function (assert) {
    var num = "(415) 847-5555";
    var result = getCentralCode(num);
    assert.deepEqual(result, "847", "Valid CO code test passed.");
});

QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415) 847-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid line code test passed.");
});
