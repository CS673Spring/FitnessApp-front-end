var app = new Vue({
    el: '#app',
    data: {
        trainer: '',
        email: '',
        password: ''
    },
    
    methods: {
        login(){
            if (this.email == ''||this.password == '') {
                alert("Email or password cannot be empty");
                location. reload();
            } 
            var data_l = {};
            data_l.username = this.email;
            data_l.password = this.password;
            var formData = JSON.stringify(data_l);

            if (this.trainer == true) {
                $.ajax({
                    url: "http://35.227.26.131:8000/api/users/login/",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    contentType: "application/json",
                    success: function(rs) {
                        this_ = this;
                        if (rs != null) {
                            window.localStorage.setItem('token', rs.token);
                            alert("Login successful!");
                            window.location.href = "/html/trainer/connection/connection.html";
                        } else {
                            alert(rs.msg);
                        }
                    },
                    error: function(rs, e) {
                        console.error(rs.status);
                        console.error(rs.responseText);
                        alert(rs.msg);
                    }
                });
            }
            else {
                $.ajax({
                    url: "http://35.227.26.131:8000/api/users/login/",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    contentType: "application/json",
                    success: function(rs) {
                        this_ = this;
                        if (rs != null) {
                            window.localStorage.setItem('token', rs.token);
                            alert("Login successful!");
                            window.location.href = "/html/trainee/home/homepage.html";
                        } else {
                            alert(rs.msg);
                        }
                    },
                    error: function(rs, e) {
                        console.error(rs.status);
                        console.error(rs.responseText);
                        alert(rs.msg);
                    }
                });
            }
        },
        jump_to_signup() {
            if (this.trainer == true) {
                window.location.href = "/html/trainer/loginsignup/signup.html";
            }
            else {
                window.location.href = "/html/trainee/loginsignup/signup.html";
            }
        },
        jump_to_Fpwd(){
            window.location.href = "/html/trainee/loginsignup/forgotpassword.html";
        }
    }     
})