bmApp.directive('tokenfield', function(BookDataService){
    return {
        restrict: 'A',
        scope: {
            tokenfield: '='
        },
        link: function(scope, elem){
            elem.tokenfield({
                autocomplete: {
                    source: BookDataService.getTags(),

                    delay: 100
                },
                showAutocompleteOnFocus: false,
                allowDuplicates: false,
                createTokensOnBlur: true
            }).on('afterCreateToken', function(e){
                addToken(e.token.value);
            }).on('removeToken', function(e){
                removeToken(e.token.value);
            });
            var initialized = false;

            function addToken(token) {
                if (initialized) {
                    scope.$apply(function(){
                        scope.tokenfield.tags.push(token);
                    })
                }
            }

            function removeToken(token) {
                if (initialized){
                    scope.$apply(function(){
                        var tags = scope.tokenfield.tags,
                            i = tags.length;
                        while(i--){
                            if (token === tags[i]) {
                                tags.splice(i, 1);
                                break;
                            }
                        }
                    });
                }
            }

            function init(){
                if (angular.isDefined(scope.tokenfield.tags)){
                    if (scope.tokenfield.tags.length > 0){
                        elem.tokenfield('setTokens', scope.tokenfield.tags);
                    }
                } else {
                    scope.tokenfield.tags = [];
                }

                initialized = true;
            }

            init();
        }
    }
});