export default class Tax {
    calculate(amount, taxPaid) {
        const ontarioTax = ontarioTaxCalculation(amount);
        const federalTax = federalTaxCalculation(amount);

        const tax = ontarioTax + federalTax;
        const owingTax = tax - taxPaid;

        return [
            formatCurrency(ontarioTax),
            formatCurrency(federalTax),
            formatCurrency(tax),
            formatCurrency(owingTax)
        ];
    }
}
// Tax calculation for Ontario
function ontarioTaxCalculation(amount) {
    return (
        amount <= 40922 ? 0.0505 * amount :
        amount <= 81847 ? 0.0915 * (amount - 40922) + 2067 :
        amount <= 150000 ? 0.1116 * (amount - 81847) + 5811 :
        amount <= 220000 ? 0.1216 * (amount - 150000) + 13417 :
        0.1316 * (amount - 220000) + 21929
    );
}

// Tax calculation for Federal
function federalTaxCalculation(amount) {
    return (
        amount <= 45282 ? 0.15 * amount :
        amount <= 90563 ? 0.205 * (amount - 45282) + 6792 :
        amount <= 140388 ? 0.26 * (amount - 90563) + 16075 :
        amount <= 200000 ? 0.29 * (amount - 140388) + 29029 :
        0.33 * (amount - 200000) + 46317
    );
}

// fixing to two decimals
function formatCurrency(value) {
    return value.toFixed(2);
}
