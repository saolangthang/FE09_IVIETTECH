$(document).ready(function () {
    // $('input').focusout(function(){
    //     //console.log(this);
    //     var v = $(this).val().trim();
    //    // console.log(v);
    //     if( v ==''){
    //         $(this).parent().next().text('error');
    //         $(this).addClass('err');
    //     }
    //     else{
    //         $(this).parent().next().text('OK');
    //         $(this).removeClass('err');
    //     }
    //     var isCh = $(":radio").val();
    // });
    // $(":radio").change(function(){
    //     var isCh
    // })

    //Dùng plugin
    $('#membershipForm').validate({
        rules: {
            "email": {
                required: true
            },
            "password": {
                required: true,
                minlength: 4,
                // maxlength:10,
            },
            "re-password":{
                required:true,
                equalTo: "#password"
            },
            "company":{
                required:true,
                minlength: 6,
                formatName:true
            },
            "firstName":{
                required:true,
                formatName:true
            },
            "lastName":{
                required:true,
                formatName:true
            },
            "phone":{
                required:true,
                formatPhone: true
            }
        },
        messages: {
            "email": {
                required: "Email must be filled"
            },
            "password": {
                required: "Pass must be filled",
                minlength:  jQuery.validator.format ("Passwords must be at least {0} characters in length."),
                // maxlength:  jQuery.validator.format("Passwords < {0}")
            },
            "re-password":{
                required:"Pass must be filled",
                equalTo: "That password did not match, please try again"
            },
            "company":{
                required:"Company must be filled",
                minlength:" Comany must be at least 6 characters in length",
                formatName:"Company's name only contain character"
            },
            "firstName":{
                required:"First Name must be filled",
                formatName: "Name only contain character"
            },
            "lastName":{
                required:"Last Name must be filled",
                formatName: "Name only contain character"
            },
            "phone":{
                required:"Phone must be filled",
                formatPhone:"Please enter a valid phone number "
            }
           
        }
    });
    $.validator.addMethod("formatName",function(value){
        return /^[A-Za-z]/.test(value);
    });
    $.validator.addMethod("formatPhone",function(value){
        return /^[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(value);
    })
   
    $(':radio').change(function(){
        var isCh = $("input[type='radio']:checked").val();
        if( isCh =="individual"){
            $("#company").attr("disabled",true);
            $("#company").parent().next().text("");
            $("#company").removeClass("error");
            $("#company").next().removeClass("error");
            $("#company-error").remove();
            $("#company").val("");
        }
        else{
            $("#company").attr("disabled",false);
            $("#company").parent().next().text("*");
            
        }
    })
 
    
});