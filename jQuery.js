$().ready(function() {
    //valiadte singup form on keyup and submit
    $("#signupFrom").validate({
        rules: {
            FirstName: {
                required: true
            },
            LastName: {
                required: true
            },
            DOB: {
                required: true                
            },
            email: {
                required: true,
                email: true
            },
            Password1: {
                required: true,
                minlength: 5
            },
            confirmPassword: {
                required: true, 
                minlength: 5,
                equalTo: "#Password1"
            },
            country: {
                required: true
            },
            remember: {
                required: true
            }
        },
        messages: {
            FirstName: "Please enter your first name",
            LastName: "Please enter your last name"
        },
        Password1: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
        confirmPassword: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Your password must match the one above"
        }
    });
    invalideHandler: function (event, validator) {
        
        var errors = validator.numberOfInvalids(); 
        if(error) {
            var message = "errors" ;
            ducument.getElementById("vresult").value = message;
        }
    };
});





