myapp.config(['$routeProvider',function($routeProvider){
$routeProvider

.when('/admin',{
    templateUrl:'views/loginview.html',
    controller:'surveycontroller',
    controllerAs:'survey'
})

.when('/',{
    templateUrl:'views/viewposts.html',
    controller:'postcontroller',
    controllerAs:'survey'
})
.when('/createpost',{
    templateUrl:'views/createpost.html',
    controller:'createcontroller',
    controllerAs:'newpost'
})
.when('/:postId',{
    templateUrl:'views/viewpost.html',
    controller:'surveycontroller',
    controllerAs:'post'

})



}])