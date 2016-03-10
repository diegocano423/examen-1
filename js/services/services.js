angular.module('examen.services', [])
 .factory('saveService', [function ()  {
   var saveServiceFunctions = {
       
       getAccount: function(){
           // agarra un item de local storage 
           var storageAccount = angular.fromJson(localStorage.getItem('accounts')) || [];
           
           // añadir cuando fueron agregados
           return storageAccount;

       },
       saveAccount: function (pObject) {
           pObject.forEach(function (i, j) {
               i.id = j;
           });
           localStorage.setItem('accounts', angular.toJson(pObject));
       },
       getOneAccount: function (pIndex) {
           if ( pIndex ) {
               var allAccounts = saveServiceFunctions.getAccount();
               var newAccounts = allAccounts.filter(function(pObj) {
                   return Number(pObj.id) === Number(pIndex);
               });

               if ( newAccounts && newAccounts.length > 0 ) {
                   return newAccounts[0];
               }    
          }
      },
      remove: function(index) {
           var allAccounts = saveServiceFunctions.getContacts();

           if (index) {
               allAccounts.splice(index, 1);
               saveServiceFunctions.saveContacts(allAccounts);
           }
       },
   };

   return saveServiceFunctions;
}])