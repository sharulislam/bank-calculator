//step 1: add event listener to submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step 2 : get the email address
    //always remember to use .value to get text from an input field
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    //step 3 : get password.
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    
 //DO not verify email password on the client side.
 //step 4: verify email and password.
 if(email==='admin@bank.com' && password==='secret'){
    window.location.href='bank.html'
 }
 else{
    alert('invalid user');
 }
})