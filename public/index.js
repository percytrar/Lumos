$('.password').keyup(()=>{
    let password = $('.password').val();
    console.log(password);
    let alert = $('.incorrectAlert');
    if(password.length < 8 ){
        alert
        .removeClass('invisible')
        .text('Password must be atleast 8 characters long!');
    }else{
        
        //Checking if password contains any capital letter
        if(!password.match(/[A-Z]/g)){
            alert
            .removeClass('invisible')
            .text('Password must contain atleast one Capital letter!');
        }else{
            
            //Checking if password contains any small letter
            if(!password.match(/[a-z]/g)){
                alert
                .removeClass('invisible')
                .text('Password must contain atleast one small letter!');
            }else{
    
                //Checking if password contains any digit
                if(!password.match(/[0-9]/g)){
                    alert
                    .removeClass('invisible')
                    .text('Password must contain atleast one digit!');
                }else{
                    alert
                    .addClass('invisible');
                }
            }
        }
    }
    
})