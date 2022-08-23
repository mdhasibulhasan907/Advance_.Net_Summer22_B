app.controller("Login",function($scope, ajax, $location){

    $scope.login = function(){

        ajax.post("https://localhost:44375/api/login",$scope.data, success, error)
        function success(resp){
            console.log("success from login");
            if(resp == null)
            {
                
                alert("Invalid Username or Password");
              
            }
            
           
            localStorage.setItem("token", resp.data.AccessToken);
            localStorage.setItem("user", resp.data.UserName);

            var type = resp.data.Type;


            if(type == "Member")
            {
                $location.path("Member/Home.html")
                console.log(type);
            }
            

        }
        
        function error(err){
            
            console.log(err);
            console.log("Error from login");
            
        }
    }
});