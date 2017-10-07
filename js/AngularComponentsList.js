var app = angular.module("compApp", []);
app.controller("compController", function($scope) {
$scope.showView='Buttons';
$scope.componentsList = ["Buttons","Tabs","Badges","Spinners","PopUps","PrograssBar","Accordion",
                         "coursoel","Model Dialogue","Pagination"," Breadcrumbs","NavBars","Cards",
                         "Pannels","Toster"]         

$scope.currentView=function(view){
    $scope.showView=view;
}

});
