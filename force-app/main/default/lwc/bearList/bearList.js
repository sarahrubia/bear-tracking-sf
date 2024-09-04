import { LightningElement, wire } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
/** BearController.getAllBears() Apex method */
import getAllBears from '@salesforce/apex/BearController.getAllBears';

export default class BearList extends LightningElement {

  
  /**************************************
   * 
   ------------------- Imperative Apex using Connected Callback ----------------------
  bears;
  error;
  appResources = {
    bearSilhouette: `${ursusResources}/standing-bear-silhouette.png`,
  };
  
  connectedCallback() {
    this.loadBears();
  }
 
  loadBears() {
    getAllBears()
      .then(result => {
        this.bears = result;
      })
      .catch(error => {
        this.error = error;
      });
  }
  
  ******************************************/

  // Wired Apex

  @wire(getAllBears) bears;

  appResources = {
    bearSilhouette: `${ursusResources}/standing-bear-silhouette.png`,
  }
}
