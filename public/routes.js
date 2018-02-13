myapp.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/',{
    templateUrl:'views/loginview.html',
    controller:'surveycontroller',
    controllerAs:'survey'
})
.when('/posts',{
    templateUrl:'views/viewposts.html',
    controller:'postcontroller',
    controllerAS:'posting'
})

}])