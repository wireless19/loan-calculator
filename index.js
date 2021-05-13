document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
    // UI

    const UIamount = document.getElementById("amount").value;

    const UIyears = document.getElementById("years").value;

    const formatter = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",

    })





    if (UIamount > 10000000) {
        document.getElementById("errorm").innerHTML = "₦10,000,000 is the maximum we can loan";
    } else if (UIamount < 20000) {
        document.getElementById("errorm").innerHTML = "₦20,000 is the minimum we can loan";
    } else {

        // Calculate

        const principal = parseFloat(UIamount);
        const CalculateInterest = parseFloat(2) / 100 / 12;
        const calculatedPayments = parseFloat(UIyears) * 12;

        //Compute monthly Payment

        const x = Math.pow(1 + CalculateInterest, calculatedPayments);
        const monthly = (principal * x * CalculateInterest) / (x - 1);
        // const monthlyPayment = monthly;
        const monthlyPayment = monthly.toFixed(2);

        //Compute Interest

        // const totalInterest = (monthly * calculatedPayments - principal);
        const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

        //Compute Total Payment

        // const totalPayment = (monthly * calculatedPayments);
        const totalPayment = (monthly * calculatedPayments).toFixed(2);


        //Show results



        document.getElementById("monthlyPayment").innerHTML = formatter.format(monthlyPayment);

        document.getElementById("totalInterest").innerHTML = formatter.format(totalInterest);

        document.getElementById("totalPayment").innerHTML = formatter.format(totalPayment);


    }

    e.preventDefault();

}