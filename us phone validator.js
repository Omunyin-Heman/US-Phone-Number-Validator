document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');
    
    checkBtn.addEventListener('click', function() {
        if (!userInput.value) {
            alert('Please provide a phone number');
            return;
        }
        
        const phoneNumber = userInput.value;
        const isValid = validatePhoneNumber(phoneNumber);
        
        if (isValid) {
            resultsDiv.innerHTML = `<span class="valid">Valid US number: ${phoneNumber}</span>`;
        } else {
            resultsDiv.innerHTML = `<span class="invalid">Invalid US number: ${phoneNumber}</span>`;
        }
    });
    
    clearBtn.addEventListener('click', function() {
        resultsDiv.textContent = '';
        userInput.value = '';
    });
    
    function validatePhoneNumber(str) {
        // Regular expression to match valid US phone number formats
        const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
        return regex.test(str);
    }
});