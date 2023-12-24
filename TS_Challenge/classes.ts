abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}
const nico = new Player("nico", "las", "니꼬");
nico.getFullName();
