document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the weight and height values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    // Calculate BMI
    if (height > 0) {
        const bmi = weight / (height * height);

        // Display the BMI and category
        const bmiValue = document.getElementById('bmi-value');
        const bmiCategory = document.getElementById('bmi-category');

        bmiValue.textContent = `Your BMI: ${bmi.toFixed(2)}`;

        if (bmi < 18.5) {
            bmiCategory.textContent = 'Category: Underweight';
        } else if (bmi < 24.9) {
            bmiCategory.textContent = 'Category: Normal weight';
        } else if (bmi < 29.9) {
            bmiCategory.textContent = 'Category: Overweight';
        } else {
            bmiCategory.textContent = 'Category: Obesity';
        }
    } else {
        alert('Please enter a valid height.');
    }
});
