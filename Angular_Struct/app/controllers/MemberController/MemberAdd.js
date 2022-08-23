app.controller("MemberAdd",function($scope,$http,ajax){

    $scope.submit = function(){
       

        var data = {
            


                    Id : $scope.Id,
                    Name : $scope.Name,
                    Password : $scope.Password,
                    Age : $scope.Age,

                    Gname : $scope.Gname,
                    Gender : $scope.Gender,
                    Phone : $scope.Phone,

                    Type :$scope.Type ,
                    Room_Id : $scope.Room_Id,
        }

        ajax.post("https://localhost:44375/api/Member/Create", data, success, error)
        function success(response){
            alert("Member added");
        }
        function error(error){
            alert("Member not  added");
        }
    }
});
