class UserService {
  static user;
  static uid;
  static getUser() {
    return UserService.user;
  }
  static updateUser(data) {
    UserService.user = data;
  }
  static getUid() {
    return UserService.user;
  }
  static updateUid(data) {
    UserService.user = data;
  }
}
export default UserService;