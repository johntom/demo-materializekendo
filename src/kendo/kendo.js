
import { inject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge';

@inject(MdToastService)


export class Kendo {
 datasource = {
    type: 'odata',
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
    },
    pageSize: 5
  };

 constructor(toast) {
    this.toast = toast;
    this.building = 'Sample Card '
    this.headingModal = "headingModal"
    this.Address= '148 W 24th ST'
    this.showingStatus = true
    this.lists = [];
    this.lists.push({ 'Floors': '5', 'Description': 'test of', 'Description2': 'test of test of test of33', 'Description3': 'test of test of test of33 test of test of test of33 test of test of test of33' })
    this.lists.push({ 'Floors': '6,7,8', 'Description': 'test of 2', 'Description2': 'test of test of test of33', 'Description32': 'test of test of test of33' })
 }

  agree(e) {
    this.toast.show('You agreed!', 4000);
  }

  disagree(e) {
    this.toast.show('You disagreed!', 4000);
  }

  // openModal() {
  //   this.modal.open();
  // }

  // modalOpen() {
  //   console.log('  open modal 5 ')
  //   this.toast.show('Youopened modal 5!', 4000);

  //   this.headingModal = 'test '

  //   this.modal5.open();
    
  // }

modalOpen3() {
    console.log('  open modal 3 ')
    this.toast.show('Youopened modal 3!', 4000);

     this.modal3.open();
    
  }

  


}
