let generatedOTP = '';

function generateOTP() {
    // Create a 4-digit random OTP and store in variable
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    alert('Generated OTP: ' + generatedOTP); // For demo purposes, show OTP
}

function validateOTP(event) {
    event.preventDefault();
    // Collect digits from input boxes
    const enteredOTP = [
        document.getElementById('digit1').value,
        document.getElementById('digit2').value,
        document.getElementById('digit3').value,
        document.getElementById('digit4').value
    ].join('');
    // Compare and show result
    if (enteredOTP === generatedOTP) {
        alert('✅ Success! OTP is correct.');
    } else {
        alert('❌ Error! OTP is incorrect.');
    }
}

// Autofocus for smoother input experience
document.querySelectorAll('.otp-input').forEach((input, idx, arr) => {
    input.addEventListener('input', function() {
        if (this.value.length === 1 && idx < arr.length - 1)
            arr[idx + 1].focus();
    });
});
