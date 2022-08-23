app.controller("memberGet",function($scope,$http,ajax,$routeParams){
    ajax.get("https://localhost:44375/api/Member/get",success,error);
    function success(response)
    {
      
      $scope.memberGet=response.data;
    }
    function error(error){
    }
});