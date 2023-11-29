import Tax from "./tax.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(() => {
    const incomeInput = $("#price");
    const taxInput = $("#paidTax");

    incomeInput.on("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            taxInput.focus();
        }
    });

    taxInput.on("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            $("#calculate").click();
        }
    });

    $("#calculate").click((evt) => {
        evt.preventDefault();

        // Get values
        const amount = parseFloat(incomeInput.val()) || 0;
        const taxPaid = parseFloat(taxInput.val()) || 0;

        // Update displayed values
        $("#Amount").html(amount.toFixed(2));

        const taxes = new Tax();
        const values = taxes.calculate(amount, taxPaid);

        $("#OntarioTax").html(values[0]);
        $("#FederalTax").html(values[1]);
        $("#TotalTax").html(values[2]);
        $("#TaxOwing").html(values[3]);
    });
});
