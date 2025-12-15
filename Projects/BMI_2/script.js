    const form = document.querySelector('form');

    form.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const msg = document.getElementById("msg");

    if (height <= 0 || isNaN(height)) {
        results.textContent = `Please give a valid height`;
        msg.textContent = "";
    } else if (weight <= 0 || isNaN(weight)) {
        results.textContent = `Please give a valid weight`;
        msg.textContent = "";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Show BMI
        results.textContent = `Your BMI is: ${bmi}`;

        // Show category
        if (bmi < 18.6) {
        msg.textContent = "You are Underweight.";
        msg.style.color = "red";
        } else if (bmi <= 24.9) {
        msg.textContent = "You are in Normal Range.";
        msg.style.color = "black";
        } else {
        msg.textContent = "You are Overweight.";
        msg.style.color = "purple";
        }
    }
    });
