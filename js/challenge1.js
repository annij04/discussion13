
const toggleEmailField = document.getElementById('toggle');

const emailBox = document.getElementById('emailBox');

// Add event listener to the checkbox
toggleEmailField.addEventListener('change', function() {
  // If checkbox is checked, show the email field, otherwise hide it
    if (toggleEmailField.checked) {
        emailBox.classList.remove('hidden');
    } 
    else {
        emailBox.classList.add('hidden');
    }
});
