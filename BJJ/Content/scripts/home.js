﻿$(document).ready(function() {
        $("#signUpForm").hide();
        $("#successSignInDiv").hide();
        $("#errorSignInDiv").hide();
});

function goToSignUp()
{
    $("#login").hide();
    $("#signUpForm").show();
}

function goToLogin()
{
    $("#signUpForm").hide();
    $("#login").show();
}

function login()
{
    var login = $("#login").val();
    var passwordLogin = $("#passwordLogin").val();
    alert('login: ' + login);
}

function signUp(){
    var data = setAcademyToJSON();
    $.ajax({         type: "POST",         url: location.protocol + '//' + location.host + "/Home/cadastrar",         contentType: "application/json; charset=utf-8",         data: data,         dataType: "json",         success: function (msg) {            if(msg.status == true){
           $("#successMsgSignIn").text(msg.message);
           $("#successSignInDiv").show();
           }
           else{
           $("#errorMsgSignIn").text(msg.message);
                   $("#errorSignInDiv").show();
           }         },         error: function (req, status, error) {             alert('error:' + error);
            alert('req.statusText:' + req.responseText);         }     }); 
}

function setAcademyToJSON() {
    var academyName = $("#academyName").val();
    var academyEmail = $("#academyEmail").val();
    var password = $("#password").val();
    var street = $("#street").val();
    var zipCode = $("#zipCode").val();
    var country = $("#country").val();
    var country = {Country: country};
    var address = {Street: street, ZipCode: zipCode};
    var academy = {AcademyName: academyName, AcademyEmail: academyEmail, Password: password };


    return JSON.stringify({
        AcademyName: academyName, 
        AcademyEmail: academyEmail, 
        Password: password
    });
}

