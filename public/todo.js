var myapp=angular.module('surveyapp',['ngRoute','ngStorage']);
myapp.controller('surveyscontroller',['$location','$http','$rootScope','$window','$sessionStorage','surveyservice',function($location,$http,$rootScope,$window,$sessionStorage,surveyservice){
    var main=this;
    this.data="me";
    
    this.clicking=function(){
        var mydata={
            email:main.email,
            password:main.password
        }
        console.log("hello")
        $http.post('/api/login',mydata)
        .then((response)=>{
            console.log(response)
            if(response.data.token){
            surveyservice.loggedin.x=true
                
                
                
                console.log(surveyservice.loggedin.x)
                $location.path('/adminhome')

            }
           

            

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
    this.complete=""
    console.log(this.test)
    this.post=$routeParams.postId
    console.log(this.post)
    this.getpost=function(){
        $http.get('/api/'+ main.post)
        .then((response)=>{
            console.log(response)
            main.complete=response.data

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
            data:main.data,
            para2:main.para2,
            para3:main.para3,
            para4:main.para4,
            para5:main.para5,
            para6:main.para6
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
            main.heading=response.data.heading,
            main.para2=response.data.para2,
            main.para3=response.data.para3,
            main.para4=response.data.para4,
            main.para5=response.data.para5,
            main.para6=response.data.para6
        })
        .catch((err)=>{
            console.log(response)
        })

    }
    this.getthispost()
    this.editingpost=function(){
        var mydata={
            data:main.data,
            heading:main.heading,
            para2:main.para2,
            para3:main.para3,
            para4:main.para4,
            para5:main.para5,
            para6:main.para6
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
myapp.controller('homecontroller',['$location','$http','$routeParams','surveyservice',function($location,$http,$routeParams,surveyservice){
    var main=this;
    this.data="hello"
    this.logout=function(){
        surveyservice.loggedin.x=false
        $location.path('/admin')
    }
    this.tab = 1;
    
        this.setTab = function(newTab){
          main.tab = newTab;
        };
        this.tabledata="";
    
        this.isSet = function(tabNum){
          return main.tab === tabNum;
        };
        this.getdata=function(){
            $http.get('/api/posts')
            .then((response)=>{
                console.log(response)
                main.tabledata=response.data

            })
            .catch((err)=>{
                console.log(err)
            })
        }
        this.getdata()
        this.editing=function(index){
            $location.path('/'+index+'/edit')
        }

        this.deleting=function(index){
            $http.delete('api/'+index+'/delete')
            .then((response)=>{
                console.log(response)
                main.tabledata.splice(index,1)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

}])
myapp.controller('newusercontroller',['$location','$http','$routeParams','surveyservice',function($location,$http,$routeParams,surveyservice){
    var main=this;
    this.clicking=function(){
        var mydata={
            email:main.email,
            password:main.password
        }
        $http.post('/api/register',mydata)
        .then((response)=>{
            console.log(response)
            $location.path('/admin')
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
}])