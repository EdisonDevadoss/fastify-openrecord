const Store = require('openrecord/store/postgres');

class User extends Store.BaseModel {
  static definition() {
    this.validatesUniquenessOf('mobile_no');
    this.validatesPresenceOf('name', 'email', 'mobile_no', 'gender');
    this.validatesLengthOf('name', 50);
    this.validatesLengthOf('email', 100);
    this.validatesLengthOf('mobile_no', 15);
    this.validatesFormatOf('email', 'email');
    this.validatesFormatOf('name', /^[a-zA-Z0-9][a-zA-Z0-9\s]+$/);
    this.validatesInclusionOf('gender', ['male', 'female', 'other']);
  }

}
module.exports = User;
