import Tax from "./tax.js";
//QUnit test cases for Ontario taxes
QUnit.test("Ontario Tax calculation for income less than $40922", function (assert) {
    const ontarioTax = new Tax();
    var tax = ontarioTax.calculate(13000, 500);
    var ontarioTaxResult = tax[0];
    assert.equal(ontarioTaxResult, "656.50", "We expect Ontario tax to be 656.50");
});

QUnit.test("Ontario Tax calculation for income between $40922 and $81847", function (assert) {
    const ontarioTax = new Tax();
    var tax = ontarioTax.calculate(53000, 200);
    var ontarioTaxResult = tax[0];
    assert.equal(ontarioTaxResult, "3172.14", "We expect Ontario tax to be 3172.14");
});

QUnit.test("Ontario Tax calculation for income between $81847 and $150000", function (assert) {
    const ontarioTax = new Tax();
    var tax = ontarioTax.calculate(99000, 300);
    var ontarioTaxResult = tax[0];
    assert.equal(ontarioTaxResult, "7725.27", "We expect Ontario tax to be 7725.27");
});

QUnit.test("Ontario Tax calculation for income between  $150000 and $220000", function (assert) {
    const ontarioTax = new Tax();
    var tax = ontarioTax.calculate(170000, 200);
    var ontarioTaxResult = tax[0];
    assert.equal(ontarioTaxResult, "15849.00", "We expect Ontario tax to be 15849.00");
});

QUnit.test("Ontario Tax calculation for income greater than $220000", function (assert) {
    const ontarioTax = new Tax();
    var tax = ontarioTax.calculate(253000, 700);
    var ontarioTaxResult = tax[0];
    assert.equal( ontarioTaxResult, "26271.80", "We expect Ontario tax to be 26271.80");
});

//QUnit test cases for Federal taxes
QUnit.test("Federal Tax calculation for income less than $40922", function (assert) {
    const federalTax = new Tax();
    var tax = federalTax.calculate(23000, 500);
    var federalTaxResult = tax[1];
    assert.equal(federalTaxResult, "3450.00", "We expect federal tax to be 3450.00");
});

QUnit.test("Federal Tax calculation for income between $40922 and $81847", function (assert) {
    const federalTax = new Tax();
    var tax = federalTax.calculate(55000, 800);
    var federalTaxResult = tax[1];
    assert.equal(federalTaxResult, "8784.19", "We expect federal tax to be 8784.19");
});

QUnit.test("Federal Tax calculation for income between $81847 and $150000", function (assert) {
    const federalTax = new Tax();
    var tax = federalTax.calculate(101000, 700);
    var federalTaxResult = tax[1];
    assert.equal(federalTaxResult, "18788.62", "We expect federal tax to be 18788.62");
});

QUnit.test("Federal Tax calculation for income between  $150000 and $220000", function (assert) {
    const federalTax = new Tax();
    var tax = federalTax.calculate(171000, 400);
    var federalTaxResult = tax[1];
    assert.equal(federalTaxResult, "37906.48", "We expect federal tax to be 37906.48");
});

QUnit.test("Federal Tax calculation for income greater than $220000", function (assert) {
    const federalTax = new Tax();
    var tax = federalTax.calculate(255000, 200);
    var federalTaxResult = tax[1];
    assert.equal(federalTaxResult, "64467.00", "We expect federal tax to be 64467.00");
});
