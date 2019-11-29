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
                minlength: 6
            },
            "re-password":{
                required:true,
                equalTo: "#password"
            }
        },
        messages: {
            "email": {
                required: "Email must be filled"
            },
            "password": {
                required: "Pass must be filled",
                minlength: "Passwords must be at least 6 characters in length."
            },
            "re-password":{
                required:"Pass must be filled",
                equalTo: "That password did not match, please try again"
            }
        }
    });
    $(':radio').change(function(){
        //let isCh = $('input[type="radio"] :checked').val();
        var isCh = $("input[type='radio'] :checked").val();
        if( isCh =="individual"){
            $("#company").attr("disabled",true);
        }
        else{
            $("#company").attr("disabled",false);
        }
        console.log(isCh);
    })
    
});