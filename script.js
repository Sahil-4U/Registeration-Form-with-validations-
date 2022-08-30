
function validate(){
 let firstNameInput = document.getElementById('first-name').value;
 let lastNameInput = document.getElementById('last-name').value;
 let emailInput = document.getElementById('Email').value;
 let batchInput = document.getElementById('Batch').value;
 let moduleInput = document.getElementById('Module').value;
 let phoneInput = document.getElementById('Phone').value;
 let tncInput = document.getElementById('tnC').checked;
 
 let error = false;
 if(firstNameInput && firstNameInput.length >= 3)
 {
    document.getElementById('first-name-valid').style.display = "block";
    document.getElementById('first-name-invalid').style.display = "none";
 }
 else
  {
    document.getElementById('first-name-invalid').style.display = "block";
    document.getElementById('first-name-valid').style.display = "none";
    error = true;
 }

 if(lastNameInput && lastNameInput.length >= 3)
 {
   document.getElementById('last-name-valid').style.display = "block";
   document.getElementById('last-name-invalid').style.display = "none";
 }
 else 
 {
   document.getElementById('last-name-invalid').style.display = "block";
   document.getElementById('last-name-valid').style.display = "none";
   error = true;
 }


 if(emailInput && emailInput.includes('@') && emailInput.includes('.') && emailInput.indexOf('.') <= emailInput.length -3 && emailInput.indexOf('@') !== 0)
 {
  document.getElementById('email-valid').style.display = "block";
  document.getElementById('email-invalid').style.display = "none";
 }
 else
 {
  document.getElementById('email-invalid').style.display = "block";
  document.getElementById('email-valid').style.display = "none";
  error = true;
 }

 if(parseInt(phoneInput) && phoneInput.length === 10)
 {
  document.getElementById('phone-valid').style.display = "block";
  document.getElementById('phone-invalid').style.display = "none";
 }
 else
 {
  document.getElementById('phone-invalid').style.display = "block";
  document.getElementById('phone-valid').style.display = "none";
  error = true;
 }


 if(tncInput)
 {
  document.getElementById('tnC-valid').style.display = "none";
 }
 else 
 {
  document.getElementById('tnC-valid').style.display = "block";
  error = true;
 }

 if(batchInput !== 'Select Batch No__')
 {
  document.getElementById('batch-valid').style.display = "block";
  document.getElementById('batch-invalid').style.display = "none";
 }
 else
 {
  document.getElementById('batch-invalid').style.display = "block";
  document.getElementById('batch-valid').style.display = "none";
  error = true;
 }
 if(moduleInput !== 'Current Module No__')
 {
  document.getElementById('module-valid').style.display = "block";
  document.getElementById('module-invalid').style.display = "none";
 }
 else
 {
  document.getElementById('module-invalid').style.display = "block";
  document.getElementById('module-valid').style.display = "none";
  error = true;
 }

 if(!error)
 {
  alert('Your details are successfully submit');
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('Email').value = '';
  document.getElementById('Phone').value = '';
  document.getElementById('Batch').value = 'Select Batch No__';
  document.getElementById('Module').value = 'Current Module No__';
  document.getElementById('tnC').checked = false;

  document.getElementById('first-name-valid').style.display = "none";
  document.getElementById('last-name-valid').style.display = "none";
  document.getElementById('email-valid').style.display = "none";
  document.getElementById('phone-valid').style.display = "none";
  document.getElementById('batch-valid').style.display = "none";
  document.getElementById('module-valid').style.display="none";
 }
}