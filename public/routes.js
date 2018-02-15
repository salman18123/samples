myapp.config(['$routeProvider',function($routeProvider){
$routeProvider

.when('/admin',{
    templateUrl:'views/loginview.html',
    controller:'surveyscontroller',
    controllerAs:'survey'
})

.when('/',{
    templateUrl:'views/viewposts.html',
    controller:'postcontroller',
    controllerAs:'survey'
})
.when('/createpost',{
    resolve:{
        "check":function($location,$rootScope){
            if(!$rootScope.loggedin){
                $location.path('/admin')
            }
        }
    },
    templateUrl:'views/createpost.html',
    controller:'createcontroller',
    controllerAs:'newpost'
})
.when('/:postId/edit',{
    templateUrl:'views/editpost.html',
    controller:'editpostcontroller',
    controllerAs:'editpost'
})
.when('/:postId',{
    templateUrl:'views/viewpost.html',
    controller:'surveycontroller',
    controllerAs:'post'

})



}])