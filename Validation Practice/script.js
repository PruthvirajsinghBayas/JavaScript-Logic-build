const fullNameElmt = document.querySelector("#fullName")
const emailAddressElmt = document.querySelector("#emailAddress")
const mobileNumberElmt = document.querySelector("#mobileNumber")
const maleElmt = document.querySelector("#male")
const femaleElmt = document.querySelector("#female")
const passwordElmt = document.querySelector("#password")
const confirmPasswordElmt = document.querySelector("#confirmPassword")




function isValidEmail(emailAddress) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailAddress);
}


function isValidPassword(password) {
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return pwdRegex.test(password);
}
    function formValidation(){
        success = false

         let fullName = fullNameElmt.value;
    let regex = /\d/;
    if (fullName.trim().length === 0) {
        document.querySelector("#errorName").classList.remove('d-none');
        document.querySelector("#errorName").innerHTML = "Should not be empty";
        success = false;
    } else if (fullName.trim().length < 2) {
        document.querySelector("#errorName").classList.remove('d-none');
        document.querySelector("#errorName").innerHTML = "Name must be at least 2 characters";
        success = false;
    } else if (regex.test(fullName.trim())) {
        document.querySelector("#errorName").classList.remove('d-none');
        document.querySelector("#errorName").innerHTML = "Must not contain digit";
        success = false;
    } else {
        document.querySelector("#errorName").classList.add('d-none');
    }
        

         let emailAddress = emailAddressElmt.value;
    if (emailAddress.trim().length === 0) {
        document.querySelector("#errorEmail").classList.remove('d-none');
        document.querySelector("#errorEmail").innerHTML = "Should not be empty";
        success = false;
    } else if (!isValidEmail(emailAddress.trim())) {
        document.querySelector("#errorEmail").classList.remove('d-none');
        document.querySelector("#errorEmail").innerHTML = "Enter a valid E-mail";
        success = false;
    } else {
        document.querySelector("#errorEmail").classList.add('d-none');
    }

    if (success) {
        document.querySelector("#submitMSG").classList.remove('d-none');
        document.querySelector("#submitMSG").innerHTML = "Form Submitted";
    } else {
        document.querySelector("#submitMSG").classList.add('d-none');
    }
         

   let mobileNumber = mobileNumberElmt.value.trim();
if (mobileNumber.length === 0) {
    document.querySelector("#errorNumber").classList.remove('d-none');
    document.querySelector("#errorNumber").innerHTML = "Should not be empty";
    success = false;
} else if (!/^\d{10}$/.test(mobileNumber)) {
    document.querySelector("#errorNumber").classList.remove('d-none');
    document.querySelector("#errorNumber").innerHTML = "Enter a valid 10-digit mobile number";
    success = false;
} else if (mobileNumber.startsWith('0')) {
    document.querySelector("#errorNumber").classList.remove('d-none');
    document.querySelector("#errorNumber").innerHTML = "Mobile number should not start with 0";
    success = false;
} else {
    document.querySelector("#errorNumber").classList.add('d-none');
    success = true;
}
 
    if (!maleElmt.checked && !femaleElmt.checked) {
        document.querySelector("#errorGender").classList.remove('d-none');
        document.querySelector("#errorGender").innerHTML = "Please select a gender";
        success = false;
    } else {
        document.querySelector("#errorGender").classList.add('d-none');
    }

    
    let password = passwordElmt.value;
    if (password.trim().length === 0) {
        document.querySelector("#errorPassword").classList.remove('d-none');
        document.querySelector("#errorPassword").innerHTML = "Should not be empty";
        success = false;
    } else if (!isValidPassword(password.trim())) {
        document.querySelector("#errorPassword").classList.remove('d-none');
        document.querySelector("#errorPassword").innerHTML = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character";
        success = false;
    } else {
        document.querySelector("#errorPassword").classList.add('d-none');
    }

    let confirmPassword = confirmPasswordElmt.value;
    if (confirmPassword.trim().length === 0) {
        document.querySelector("#errorConfirmPassword").classList.remove('d-none');
        document.querySelector("#errorConfirmPassword").innerHTML = "Should not be empty";
        success = false;
    } else if (confirmPassword !== password) {
        document.querySelector("#errorConfirmPassword").classList.remove('d-none');
        document.querySelector("#errorConfirmPassword").innerHTML = "Passwords do not match";
        success = false;
    } else {
        document.querySelector("#errorConfirmPassword").classList.add('d-none');
    }




        if(success){
            document.querySelector("#submitMSG").classList.remove('d-none')
            document.querySelector("#submitMSG").innerHTML = "Form Submitted";
        }
}

