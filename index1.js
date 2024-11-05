const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const logingButton = document.getElementById('loging-button')

logingButton.addEventListener('click',function () {
   console.log(emailInput.value) 

   
   if(emailInput.value=='tomakopali60@gmail.com' || passwordInput.value=='GoogleAccount'){
    window.location.href= "blog.html"
   }
   
   else{
    console.log('password doesnot match')
   }
})