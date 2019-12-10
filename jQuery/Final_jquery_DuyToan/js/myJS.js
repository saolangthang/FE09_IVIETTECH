$(document).ready(function () {
    let users = [];
    $( "#tabs" ).tabs();
    $( "#tabs" ).tabs( "option", "active", 1 );
 
    $('#btnRegisterNow').click(function(){
        Register();
    });
    $('#btnLogin').click(function(){
        console.log('login');
       let getInfo = JSON.parse(localStorage.getItem($('#user_login').val())) ;
      
       console.log(getInfo);
       if( getInfo != null && $('#pass_login').val()==getInfo.password){
           alert('Dang nhap thanh cong');
       }
       else{
           alert("Mat khau hoac user khong chinh xac");
       }
    })

    function Register(){
        if($('#form_register').valid()){
            let infor = {
                user: $('#user_res').val(),
                password: $('#pass_res').val(),
                email: $('#email').val(),
            };
            localStorage.setItem(infor.user,JSON.stringify(infor) );
            $('#form_register').trigger('reset');
        }
       

    }
    $('#form_register').validate({
        rules:{
            'user':{
                required:true,
            },
            'pass':{
                required: true,
            },
            're_pass':{
                required: true,
                equalTo: '#pass_res'
            },
            'email':{
                required:true
            }

        },
        messages:{
            'user':{
                required:"User must be filled",
            },
            'pass':{
                required: "Password must be filled",
            },
            're_pass':{
                equalTo: "Password does not match!"
            },
            'email':{
                required:"Email must be filled"
            }
        }
    })
    
});