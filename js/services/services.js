angular.module('examen.services', [])
 .factory('saveService', [function ()  {
   var saveServiceFunctions = {
       
       /**
        * Description: Agarra todas las accounts guardadas en localStorage.
        * @method getAccount
        * @return storageAccount
        */
       getAccount: function(){
           // agarra un item de local storage 
           var storageAccount = angular.fromJson(localStorage.getItem('accounts')) || [];
           
           // añadir cuando fueron agregados
           return storageAccount;

       },
       /**
        * Description: Salva cuentas en localStorage.
        * @method saveAccount
        * @param {} pObject
        * @return 
        */
       saveAccount: function (pObject) {
           pObject.forEach(function (i, j) {
               i.id = j;
           });
           localStorage.setItem('accounts', angular.toJson(pObject));
       },
       /**
        * Description: Agarra una cuenta en especifico.
        * @method getOneAccount
        * @param {} pIndex
        * @return 
        */
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
      /**
       * Description: Guarda y asigna un id al pObjetct, en este caso el objeto movement.
       * @method saveMovement
       * @param {} pObject
       * @return 
       */
      saveMovement: function(pObject){
           pObject.forEach(function (i, j) {
               i.id = j;
           });
          
           localStorage.setItem('accounts', angular.toJson(pObject));
       },
      /**
       * Description: Remueve un movimiento de la cuenta.
       * @method remove
       * @param {} index
       * @return 
       */
      remove: function(index) {
           var allAccounts = saveServiceFunctions.getAccount();

           if (index) {
               allAccounts.movements[index].splice(index, 1);
           }
       },
   };

   return saveServiceFunctions;
}])