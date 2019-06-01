
    $('.password').keyup(()=>{
        let password = $('.password').val();
        console.log(password);
        let alert = $('#incorrectAlert1');
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

    $('.rePassword').keyup(()=>{
        let rePassword = $('.rePassword').val();
        let password = $('.password').val();
        let alert = $('#incorrectAlert2');
        if(rePassword !== password){
            alert
            .removeClass('invisible')
            .text("Re-entered password doesn't match!");
        }else{
            alert
            .addClass('invisible');
        }
    });

    //Checking if phone number is of correct length i.e 4-15
    $('#phoneNo').keyup(()=>{
        let phoneNo = $('#phoneNo').val();
        let alert = $('#incorrectAlert3');
        if(phoneNo.length <4 || phoneNo.length >15){
            alert
            .removeClass('invisible')
            .text('Phone number length should be between 4-15');
        }else{
            alert
            .addClass('invisible');
        }
    });

