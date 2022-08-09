
function validate(){
 let firstNameInput = document.getElementById('first-name').value;
 let lastNameInput = document.getElementById('last-name').value;
 let emailInput = document.getElementById('Email').value;
 let cityInput = document.getElementById('City').value;
 let stateInput = document.getElementById('State').value;
 let zipInput = document.getElementById('Zip').value;
 let tncInput = document.getElementById('tnC').checked;
 
 let error = false;
 if(firstNameInput)
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

 if(lastNameInput)
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

 if(cityInput.length >= 3 && !parseInt(cityInput))
 {
  document.getElementById('city-valid').style.display = "block";
  document.getElementById('city-invalid').style.display = "none";
 }
 else 
 {
  document.getElementById('city-invalid').style.display = "block";
  document.getElementById('city-valid').style.display = "none";
  error = true;
 }
 
 if(parseInt(zipInput) && zipInput.length === 6)
 {
  document.getElementById('zip-valid').style.display = "block";
  document.getElementById('zip-invalid').style.display = "none";
 }
 else
 {
  document.getElementById('zip-invalid').style.display = "block";
  document.getElementById('zip-valid').style.display = "none";
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

 if(stateInput !== 'None')
 {
  document.getElementById('state-valid').style.display = "block";
  document.getElementById('state-invalid').style.display = "none";
 }
 else
 {
  document.getElementById('state-invalid').style.display = "block";
  document.getElementById('state-valid').style.display = "none";
  error = true;
 }

 if(!error)
 {
  alert('Your details are successfully submit');
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('Email').value = '';
  document.getElementById('City').value = '';
  document.getElementById('State').value = 'None';
  document.getElementById('Zip').value = '';
  document.getElementById('tnC').checked = false;

  document.getElementById('first-name-valid').style.display = "none";
  document.getElementById('last-name-valid').style.display = "none";
  document.getElementById('email-valid').style.display = "none";
  document.getElementById('city-valid').style.display = "none";
  document.getElementById('zip-valid').style.display = "none";
  document.getElementById('state-valid').style.display = "none";
 }
}