 let pass=document.getElementById('password'); 
 let email=document.getElementById('email'); 
  
  
 pass.addEventListener("click",()=>{ 
     pass.placeholder='Enter your password' 
     pass.style.border='none'; 
 pass.style.width='230px'; 
 email.style.width='200px'; 
 pass.style.transition="ease-in-out 0.5s"; 
 }) 
  
 email.addEventListener("click",()=>{ 
     email.placeholder='Enter your email' 
     email.style.border='none';
  
     email.style.width='230px'; 
     email.style.transition="ease-in-out 0.5s"; 
     pass.style.width='200px'; 
     })