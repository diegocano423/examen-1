angular.module('examen.services', [])
 .factory('saveService', [function ()  {
   var saveServiceFunctions = {
       
       getContacts: function(){
           // agarra un item de local storage 
           var storageContacts = angular.fromJson(localStorage.getItem('contacts')) || [];
           
           // añadir cuando fueron agregados
           return storageContacts;

       },
       saveContacts: function (pObject) {
           pObject.forEach(function (i, j) {
               i.id = j;
           });
           localStorage.setItem('contacts', angular.toJson(pObject));
       },
       remove: function(index) {
           var allContacts = saveServiceFunctions.getContacts();

           if (index) {
               allContacts.splice(index, 1);
               saveServiceFunctions.saveContacts(allContacts);
           }
       },
       getOneContact: function (pIndex) {
           if ( pIndex ) {
               var allContacts = saveServiceFunctions.getContacts();
               var newContacts = allContacts.filter(function(pObj) {
                   return Number(pObj.id) === Number(pIndex);
               });

               if ( newContacts && newContacts.length > 0 ) {
                   return newContacts[0];
               }    
          }
      },
   };

   return saveServiceFunctions;
}])