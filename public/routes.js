myapp.config(['$routeProvider',function($routeProvider){
$routeProvider

.when('/admin',{
    resolve:{
        "check":function($location,$rootScope,surveyservice){
            if(surveyservice.loggedin.x){
                $location.path('/adminhome')
            }
        }
    },
    templateUrl:'views/loginview.html',
    controller:'surveyscontroller',
    controllerAs:'survey'
})
.when('/register',{
    templateUrl:'views/createuser.html',
    controller:'newusercontroller',
    controllerAs:'newuser'
})
.when('/adminhome',{
    resolve:{
        "check":function($location,$rootScope,surveyservice){
            if(!surveyservice.loggedin.x){
                $location.path('/admin')
            }
        }
    },
    templateUrl:'views/adminhome.html',
    controller:'homecontroller',
    controllerAs:'home'
})

.when('/',{
    templateUrl:'views/viewposts.html',
    controller:'postcontroller',
    controllerAs:'survey'
})
.when('/createpost',{
    resolve:{
        "check":function($location,surveyservice){
            if(!surveyservice.loggedin.x){
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