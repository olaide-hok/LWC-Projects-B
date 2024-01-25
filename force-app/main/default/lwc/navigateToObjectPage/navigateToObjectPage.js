import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";

export default class NavigateToObjectPage extends NavigationMixin(
  LightningElement
) {
  navigateToNewRecord() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new"
      }
    });
  }

  navigateToNewRecordWithDefault() {
    const defaultValue = encodeDefaultFieldValues({
      // Visit 'Setup > Object Manager > Contact > Fields & Relationships' in app to see other fields API names.
      FirstName: "Habeeb",
      LastName: "Kareem",
      LeadSource: "Other",
      Title: "Software Engineer",
      Salutation: "Mr",
      MobilePhone: +2347082163310
    });
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new"
      },
      state: {
        defaultFieldValues: defaultValue
      }
    });
  }
}
