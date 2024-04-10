
const billingBox = document.getElementById('billing');
const homeBox = document.getElementById('home');
const checkBox = document.querySelector('input[name="useBilling"]');

checkBox.addEventListener('change', function() {
  if (this.checked) {
    homeBox.value = billingBox.value;
  } else {
    homeBox.value = '';
  }
});
