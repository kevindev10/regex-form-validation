

// Validate name event listener
document.querySelector('#name').addEventListener('blur', validateName);


// Validate zip code event listener
document.querySelector('#zip').addEventListener('blur', validateZip);


// Validate email event listener
document.querySelector('#email').addEventListener('blur', validateEmail);


// Validate phone number event listener
document.querySelector('#phone').addEventListener('blur', validatePhone);


// Validate name function 

function validateName(){
 
  const name = document.querySelector('#name');
  const re = /^[A-Za-z]{2,10}$/;
  
  if(!(re.test(name.value))){
    
    //console.log(re.test(name.value))
    name.classList.add('is-invalid');

  }else{
    //console.log(re.exec(name.value));
    name.classList.remove('is-invalid')
  }

}


// Validate name function 

function validateZip() {

  const zip = document.querySelector('#zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){


    zip.classList.add('is-invalid');
  } else {

    
    zip.classList.remove('is-invalid');
  }
}



// Validate  email function 

function validateEmail(){
 
  const email = document.querySelector('#email');
  const re = /^([A-Za-z0-9_\.\-]+)@([A-Za-z0-9_\.\-]+)\.([A-Za-z0-9]{2,5})$/;
  
  if(!(re.test(email.value))){
    
    
    email.classList.add('is-invalid');

  }else{
  
    email.classList.remove('is-invalid')
  }

}

// Validate  phone function 

function validatePhone(){
 
  const phone = document.querySelector('#phone');
  const re = /^(\d{4})[ ,\-]?(\d{3})[ ,\-]?(\d{3})$/;
  
  if(!(re.test(phone.value))){
    
    
    phone.classList.add('is-invalid');

  }else{
    
    phone.classList.remove('is-invalid')
  }

}