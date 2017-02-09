class LoginService{
    constructor($http,$rootScope){
        this.$http = $http;
        this.loginUri = '';
        $rootScope.authenciated = '';
        this.config = {
            headers:{
            'Content-Type': 'application/json'
        }}
    }
    
    getAuthentication(username,password){
        this.loginData={
            user: username;
            pass: password;
        };
        $http.post(this.loginUri,this.loginData,this.config).then((respsone) => {
            $rootScope.authenticated = respsone.data;
        })
    }
}