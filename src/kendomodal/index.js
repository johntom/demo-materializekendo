 import { inject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge';

@inject(MdToastService)
export class Kendomodal {
    pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
   
  };

  constructor(toast) {
    this.toast = toast;
    this.building = 'Greenport Brewery (modal5)'
    this.headingModal = "headingModal"
    this.showingStatus=true
    this.lists=[];
    this.lists.push({'Floors':'5','Description':'test of','Description2':'test of test of test of33','Description3':'test of test of test of33 test of test of test of33 test of test of test of33'})
    this.lists.push({'Floors':'6,7,8','Description':'test of 2','Description2':'test of test of test of33','Description32':'test of test of test of33'})
    
    this.newopens =true             
         
    this.datasource = {
        
          
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
      },
       sortable: {
                mode: "multiple",
                allowUnsort: true
            },
    //   sortable: true,
         toolbar: ["excel"],
            excel: {
                allPages: true
            },
            filterable: {
                mode: "row"
            },
      pageSize: 15
    };
  }
 

  agree(e) {
    this.toast.show('You agreed!', 4000);
  }

  disagree(e) {
    this.toast.show('You disagreed!', 4000);
  }

  openModal() {
    this.modal.open();
  }

modalOpenEcbviolations(building) {
    console.log('  modalOpenEcbvoilations ')
     this.toast.show('You modalOpenEcbvoilations!', 4000);
  
    this.headingModal = building.Address;
    this.isLoading = false;
    this.modal5.open();
    return api.getopenecbviolations(this.token, building.BIN)
      .then((jsonRes) => {
        let dd = jsonRes.data;
        this.listsV = dd;
        console.log('  status getopenecbviolations ', this.listsV)
        if (dd.length === 0) {
          Materialize.toast('no ecb violations on record for ' + building.BIN, 4000)
 
        } else {

          // $('#modalOpenEcbviolations').openModal();
           this.modal5.open();
        }
      });
  }

}

// export class KendoModal {

//  constructor() {
//     this.datasource = {
        
          
//       type: 'odata',
//       transport: {
//         read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
//       },
//        sortable: {
//                 mode: "multiple",
//                 allowUnsort: true
//             },
//     //   sortable: true,
//          toolbar: ["excel"],
//             excel: {
//                 allPages: true
//             },
//             filterable: {
//                 mode: "row"
//             },
//       pageSize: 15
//     };
//   }
// }