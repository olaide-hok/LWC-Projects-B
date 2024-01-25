import { LightningElement, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import Id from "@salesforce/user/Id";
import NAME_FIELD from "@salesforce/schema/User.Name";
import EMAIL_FIELD from "@salesforce/schema/User.Email";
const fields = [NAME_FIELD, EMAIL_FIELD];
export default class WireDemoUserDetail extends LightningElement {
  userId = Id;
  //0057E00000GHXhbQAH"

  userDetail;
  @wire(getRecord, { recordId: "$userId", fields }) // shows that "$userId" of the userId for the @wire method is reactive.
  userDetailHandler({ data, error }) {
    if (data) {
      this.userDetail = data.fields;
      //   console.log(data);
    }
    if (error) {
      console.error(error);
    }
  }

  @wire(getRecord, { recordId: "$userId", fields })
  userDetailProperty;
}
