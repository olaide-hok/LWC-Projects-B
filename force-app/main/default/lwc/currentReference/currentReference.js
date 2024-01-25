import { LightningElement, wire } from "lwc";
import { CurrentPageReference } from "lightning/navigation";

export default class CurrentReference extends LightningElement {
  @wire(CurrentPageReference) // this is asynchronous hence the use of a getter
  pageRef;

  get currentPageReference() {
    return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : "";
  }
}
