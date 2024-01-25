import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToRelatedRelationship extends NavigationMixin(
  LightningElement
) {
  navigateToRelatedList() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordRelationshipPage",
      attributes: {
        recordId: "0037E00001Bapt2QAB", // 0037E00001Bapt4QAB",
        objectApiName: "Account",
        relationshipApiName: "Contacts",
        actionName: "view"
      }
    });
  }
}
