//check for ready
$("#uName").on("keyup", function(){

    var uName = $("#uName").val();

    $.get("/checkUsername", {username: uName}, function(data){
       if (data.username == uName) {
           $("#uName").css("border", "2px solid red");
           $("#uName").css("color", "red");
           $("#uName").css("background-color", "rgba(255, 0, 0, 0.2)");
           $("#uName").css("box-shadow", "0px 0px 10px red");
           $("#uName").css("outline", "none");
           $("#uName").css("outline-offset", "none");
           $("#uName").css("border-radius", "10px");
       } else{
           $("#uName").css("border", "2px solid green");
           $("#uName").css("color", "green");
           $("#uName").css("background-color", "rgba(0, 255, 0, 0.2)");
           $("#uName").css("box-shadow", "0px 0px 10px green");
           $("#uName").css("outline", "none");
           $("#uName").css("outline-offset", "none");
           $("#uName").css("border-radius", "10px");
       }
    })
})

$("#emailInput").on("keyup", function(){
    var email = $("#emailInput").val();

    $.get("/checkEmail", {email: email}, function(data){
        if (data.email == email) {
            $("#emailInput").css("border", "2px solid red");
            $("#emailInput").css("color", "red");
            $("#emailInput").css("background-color", "rgba(255, 0, 0, 0.2)");
            $("#emailInput").css("box-shadow", "0px 0px 10px red");
            $("#emailInput").css("outline", "none");
            $("#emailInput").css("outline-offset", "none");
            $("#emailInput").css("border-radius", "10px");
        } else{
            $("#emailInput").css("border", "2px solid green");
            $("#emailInput").css("color", "green");
            $("#emailInput").css("background-color", "rgba(0, 255, 0, 0.2)");
            $("#emailInput").css("box-shadow", "0px 0px 10px green");
            $("#emailInput").css("outline", "none");
            $("#emailInput").css("outline-offset", "none");
            $("#emailInput").css("border-radius", "10px");
        }
    })
})
$("#pwInput").on("keyup", function(){
    //check if password is strong
    var pw = $("#pwInput").val();
    //regex for password where it must contain at least one uppercase, one lowercase, one number, and one special character
    var pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
    if (pwRegex.test(pw)){
        $("#pwInput").css("border", "2px solid green");
        $("#pwInput").css("color", "green");
        $("#pwInput").css("background-color", "rgba(0, 255, 0, 0.2)");
        $("#pwInput").css("box-shadow", "0px 0px 10px green");
        $("#pwInput").css("outline", "none");
        $("#pwInput").css("outline-offset", "none");
        $("#pwInput").css("border-radius", "10px");
    }else{
        $("#pwInput").css("border", "2px solid red");
        $("#pwInput").css("color", "red");
        $("#pwInput").css("background-color", "rgba(255, 0, 0, 0.2)");
        $("#pwInput").css("box-shadow", "0px 0px 10px red");
        $("#pwInput").css("outline", "none");
        $("#pwInput").css("outline-offset", "none");
        $("#pwInput").css("border-radius", "10px");
    }
})

$("#pwInputCon").on("keyup", function(){
    var pw = $("#pwInput").val();
    var pwCon = $("#pwInputCon").val();
    if (pw === pwCon){
        $("#pwInputCon").css("border", "2px solid green");
        $("#pwInputCon").css("color", "green");
        $("#pwInputCon").css("background-color", "rgba(0, 255, 0, 0.2)");
        $("#pwInputCon").css("box-shadow", "0px 0px 10px green");
        $("#pwInputCon").css("outline", "none");
        $("#pwInputCon").css("outline-offset", "none");
        $("#pwInputCon").css("border-radius", "10px");


    }else{
        $("#pwInputCon").css("border", "2px solid red");
        $("#pwInputCon").css("color", "red");
        $("#pwInputCon").css("background-color", "rgba(255, 0, 0, 0.2)");
        $("#pwInputCon").css("box-shadow", "0px 0px 10px red");
        $("#pwInputCon").css("outline", "none");
        $("#pwInputCon").css("outline-offset", "none");
        $("#pwInputCon").css("border-radius", "10px");
    }

})