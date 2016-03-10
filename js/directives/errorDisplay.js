angular.module('examen')
    .directive('errorDisplay', function() {
        return {
            restrict: 'E',
            replace: false,
            template:
                '<div id= "diverror" class="container">' + 
                '<h1>404 Error Not Found :(</h1>' +
                '<h2><small>We are sorry! We could not find the specified link or it does not exist!</small></h2>' +
                '<a  href="" role="button" class="btn btn-primary active">Go Back</a>' +
                '</div>'
        }
    })