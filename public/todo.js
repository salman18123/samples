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
    this.data=0;

    this.comb='salman'
    console.log(this.comb)
    this.onloading=function(){
        $http.get('/api/posts')
        .then((response)=>{
            console.log(response)
            main.data=response.data;
            console.log(main.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    this.onloading();
    console.log(main.data)
}])
myapp.controller('surveycontroller',['$location','$routeParams','$http',function($location,$routeParams,$http){
    var main=this;
    this.test="hello"
    console.log(this.test)
    this.post=$routeParams.postId
    console.log(this.post)
    this.getpost=function(){
        $http.get('/api/'+ main.post)
        .then((response)=>{
            console.log(response)

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    this.getpost()
}])
myapp.controller('createcontroller',['$location','$routeParams','$http',function($location,$routeParams,$http){
    var main=this;
    this.saving=function(){
        var mydata={
            heading:main.heading,
            data:main.data
        }
        $http.post('/api/posts',mydata)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}])
myapp.controller('editpostcontroller',['$location','$routeParams','$http',function($location,$routeParams,$http){
    var main=this;
    this.postid=$routeParams.postId
    this.getthispost=function(){
        $http.get('api/'+main.postid)
        .then((response)=>{
            console.log(response)
            main.data=response.data.data,
            main.heading=response.data.heading
        })
        .catch((err)=>{
            console.log(response)
        })

    }
    this.getthispost()
    this.editingpost=function(){
        var mydata={
            data:main.data,
            heading:main.heading
        }
        $http.put('/api/'+main.postid,mydata)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(response)
        })
    }
}])