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
                minlength: 6
            },
            "firstName":{
                required:true
            },
            "lastName":{
                required:true
            },
            "phone":{
                required:true
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
                minlength:" Comany must be at least 6 characters in length"
            },
            "firstName":{
                required:"First Name must be filled"
            },
            "lastName":{
                required:"Last Name must be filled"
            },
            "phone":{
                required:"Phone must be filled"
            }
           
        }
    });
   
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