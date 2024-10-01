const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const resultDisplay = document.getElementById('result');

const calculateBMI = () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        resultDisplay.innerText = 'Please enter valid weight and height.';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    resultDisplay.innerText = `Your BMI is ${bmi}. Category: ${category}`;
};

calculateBtn.addEventListener('click', calculateBMI);
