// Characters sets
const LOWER = "abcdefghjkmnpqrstuvwxyz"; // removed ambiguous: l
const UPPER = "ABCDEFGHJKMNPQRSTUVWXZ"; // removed ambiguous: I, O
const NUMS = "23456789"; // removed ambiguous: 0, 1
const SPECIAL = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

function getCharset() {
    let charset = LOWER;
    if (document.getElementById('uppercase').checked) charset += UPPER;
    if (document.getElementById('numbers').checked) charset += NUMS;
    if (document.getElementById('special').checked) charset += SPECIAL;
    if (!document.getElementById('excludeAmbiguous').checked) {
        charset += "lIO01";
    }
    return charset;
}

function generatePassword() {
    let length = parseInt(document.getElementById('length').value) || 12;
    let charset = getCharset();
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById('generatedPassword').value = password;
    evaluateStrength(password);
}

function togglePassword() {
    const input = document.getElementById('generatedPassword');
    input.type = document.getElementById('showPassword').checked ? 'text' : 'password';
}

function copyPassword() {
    const input = document.getElementById('generatedPassword');
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function evaluateStrength(password) {
    let strength = 0;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W]/.test(password)) strength += 1;
    let bar = document.getElementById('strengthBar');
    let text = document.getElementById('strengthText');
    if (strength <= 1) {
        bar.style.width = "25%";
        bar.className = "progress-bar bg-danger strength-bar";
        text.textContent = "Weak";
    } else if (strength <= 2) {
        bar.style.width = "50%";
        bar.className = "progress-bar bg-warning strength-bar";
        text.textContent = "Medium";
    } else if (strength === 3) {
        bar.style.width = "75%";
        bar.className = "progress-bar bg-info strength-bar";
        text.textContent = "Strong";
    } else {
        bar.style.width = "100%";
        bar.className = "progress-bar bg-success strength-bar";
        text.textContent = "Very Strong";
    }
}
