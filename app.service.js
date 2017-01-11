var projServ = angular.module('service', []);

projServ.factory('apiService', ['$http', '$q', function ($http, $q) {
  var factory = {};
    
  factory.servReq = function (requestor) {
    var headerType = { 'Content-Type': 'application/x-www-form-urlencoded' };
    var responHandler = function (data, status) { requestor.deferred.resolve(data); };
    var errHandler = function (data) { requestor.deferred.reject(data);};

    $http({
      method: requestor.httpMethod, 
      url: requestor.url,
      data: JSON.stringify(requestor.parameter),
      headers: headerType,
      timeout: requestor.timeout
    }).success(responHandler).catch(errHandler);
  };

  factory.serverPostReq = function (requestor) {
    var headerType = { 'Content-Type': 'application/x-www-form-urlencoded' };
    var responHandler = function (data, status) { requestor.deferred.resolve(data); };
    var errHandler = function (data) { requestor.deferred.reject(data);};

    $http({ 
      method: 'POST', 
      url: requestor.url,
      data: requestor.parameter,
      transformRequest: $.param,
      headers: headerType,
      timeout: requestor.timeout,
    }).success(responHandler).catch(errHandler);
  };

  factory.serverGetReq = function (requestor) {
    var headerType = { 'Content-Type': 'application/x-www-form-urlencoded' };
    var responHandler = function (data, status) { requestor.deferred.resolve(data); };
    var errHandler = function (data) { requestor.deferred.reject(data);};

    $http({
      method: 'GET',
      url: requestor.url,
      headers: headerType,
      timeout: requestor.timeout
    }).success(responHandler).catch(errHandler);
  };

	factory.serverDeleteReq = function (requestor) {
    var headerType = { 'Content-Type': 'application/x-www-form-urlencoded' };
    var responHandler = function (data, status) { requestor.deferred.resolve(data); };
    var errHandler = function (data) { requestor.deferred.reject(data);};

    $http({ 
      method: 'DELETE', 
      url: requestor.url,
      headers: headerType,
      timeout: requestor.timeout
    }).success(responHandler).catch(errHandler);
  };
   
  return factory;
}]);
