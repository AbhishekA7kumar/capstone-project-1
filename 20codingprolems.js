// Write a JavaScript function calculateBMI that calculates a person's Body Mass Index (BMI) based on their weight and height, 
//and returns a corresponding health classification. The BMI is a commonly used indicator of body weight status and health.


// Write a JavaScript function calculateBMI that calculates a person's Body Mass Index (BMI) based on their weight and height, 
//and returns a corresponding health classification. The BMI is a commonly used indicator of body weight status and health.

function calculateBMI(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine health classification
    let classification;
    if (bmi < 18.5) {
        classification = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = "Overweight";
    } else {
        classification = "Obese";
    }

    // Return BMI and classification
    return {
        bmi: bmi.toFixed(2),
        classification: classification
    };
}

// Example usage:
const result = calculateBMI(45,1.60);
console.log(` ${result.classification}`);




// 