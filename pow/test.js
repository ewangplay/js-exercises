describe("pow", function () {

    /*
    before(() => alert("Testing started - before all tests"));
    after(() => alert("Testing finished - after all tests"));

    beforeEach(() => alert("Before a test - enter a test"));
    afterEach(() => alert("After a test - exit a test"));
    */

    describe("abnormal test cases", function () {
        it("for negative n the result is NaN", function () {
            assert.isNaN(pow(2, -1));
        });

        it("for non-integer n the result is NaN", function () {
            assert.isNaN(pow(2, 1.5));
        });
    });

    describe("normal test cases", function () {
        it("2 raises to power 3 is 8", function () {
            assert.equal(pow(2, 3), 8);
        });

        it("3 raises to power 4 is 81", function () {
            assert.equal(pow(3, 4), 81);
        });
    });

    describe("raises to power 3 automatically", function () {
        function makeTest(n) {
            let expected = n * n * n
            it(`${n} raises to power 3 is ${expected}`, function () {
                assert.equal(pow(n, 3), expected)
            });
        }

        for (let i = 1; i < 5; i++) {
            makeTest(i)
        }
    });

});