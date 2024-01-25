import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToNavItemPage extends NavigationMixin(
  LightningElement
) {
  navigateToTab() {
    this[NavigationMixin.Navigate]({
      type: "standard__navItemPage",
      attributes: {
        apiName: "home" // Enter name of avalable tabs in the same scratch org
      }
    });
  }
}
