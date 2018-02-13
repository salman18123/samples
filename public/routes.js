myapp.config(['$routeProvider',function($routeProvider){
$routeProvider

.when('/admin',{
    templateUrl:'views/loginview.html',
    controller:'surveycontroller',
    controllerAs:'survey'
})

.when('/:postId',{
    templateUrl:'views/viewpost.html',
    controller:'surveycontroller',
    controllerAs:'post'

})

.when('/',{
    templateUrl:'views/viewposts.html',
    controller:'postcontroller',
    controllerAs:'survey'
})



}])