app.controller("mainController", function($scope, navigation){
    this.view = true;

    $scope.sideNav = navigation.protoList;

    this.trustHtml = navigation.trustHtml;

    this.updateNav = navigation.updateNav;

    this.protoList = navigation.getProtoList($scope.sideNav);

    this.pastNow = navigation.pastNow;

}).controller("navController", function($scope){

    this.objKeys = function(obj){
        return Object.keys(obj);
    };

    this.showOption = function(arr, func){
        var len = arr.length;

        for(var i=0; i<len; i++){
            if(func(arr[i].date)){
                return true;
            }
        }
        return false;
    }

}).controller("angController", function($scope){

    $scope.logoUrl = 'assets/images/logos/AngularJS-large.png';
    $scope.lang = 'AngularJS';
    $scope.type = 'prototypes';

}).controller("bootstrapController", function($scope){

    $scope.logoUrl = 'assets/images/logos/bootstrap.png';
    $scope.lang = 'Bootstrap';
    $scope.type = 'prototypes';

}).controller('cssController', function($scope){

    $scope.logoUrl = 'assets/images/logos/css.png';
    $scope.lang = 'CSS';
    $scope.type = 'prototypes';

}).controller('htmlController', function($scope){

    $scope.logoUrl = 'assets/images/logos/html.png';
    $scope.lang = 'HTML';
    $scope.type = 'prototypes';

}).controller('jsController', function($scope){

    $scope.logoUrl = 'assets/images/logos/js.png';
    $scope.lang = 'JS';
    $scope.type = 'prototypes';

}).controller('phpController', function($scope){

    $scope.logoUrl = 'assets/images/logos/php.png';
    $scope.lang = 'PHP';
    $scope.type = 'prototypes';

}).controller('tutorialController', function($scope){

    $scope.logoUrl = 'assets/images/logos/tutorial.png';
    $scope.lang = 'Tutorials';
    $scope.type = 'tutorials';

}).controller('dbController', function($scope){

    $scope.logoUrl = 'assets/images/logos/db.png';
    $scope.lang = 'Databases';
    $scope.type = 'prototypes';
});