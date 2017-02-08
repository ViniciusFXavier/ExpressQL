let USERS = [
  {
    id: '1',
    name: 'João',
    username: 'joaohkfaria',
    email: 'joao@joao.com',
    password: 'password',
    admin: false,
  },
  {
    id: '2',
    name: 'Kersul',
    username: 'jhkersul',
    email: 'jhkersul@jhkersul.com',
    password: 'password2',
    admin: true,
  },
];


class UsersController {

  static getUsers() {
    return USERS;
  }

  static getUserByID(id) {
    const resultUser = USERS.filter((user) => {
      if (user.id === id) {
        return true;
      }
      return false;
    });

    return resultUser[0];
  }

  static createUser(args) {
    const user = {
      id: Math.random().toString(36).substring(7),
      name: args.name,
      admin: args.admin,
    };
    USERS.push(user);

    return user;
  }

}

export default UsersController;
