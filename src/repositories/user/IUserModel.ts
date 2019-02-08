import IVersionableModel from '../versionable/IVersionableModel';
export default interface IUserModel extends IVersionableModel {
  _id: string;
  name: string;
  role: string;
  email: string;
  userPassword: string;
}
