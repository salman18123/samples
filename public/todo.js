var myapp=angular.module('surveyapp',['ngRoute']);
myapp.controller('surveycontroller',['$location','$http',function($location,$http){
    var main=this;
    this.data="me";
    this.clicking=function(){
        var mydata={
            email:main.email,
            password:main.password
        }
        $http.post('/api/login',mydata)
        .then((response)=>{
            console.log(response)
            $location.path('/posts')

        })
        .catch((err)=>{
            console.log(err)
        })
       
    }

}])
myapp.controller('postcontroller',['$location','$http',function($location,$http){
    var main=this;
    this.onloading=function(){
        $http.get('/api/posts')
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    this.onloading();
}])