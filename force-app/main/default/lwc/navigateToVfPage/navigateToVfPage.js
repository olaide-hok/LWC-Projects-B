import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToVfPage extends NavigationMixin(
  LightningElement
) {
  navigateToVFPage() {
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: "/apex/navigateVFPage"
      }
    }).then((generatedUrl) => {
      console.log(generatedUrl);
      window.open(generatedUrl, "__blank");
    });
  }
}
