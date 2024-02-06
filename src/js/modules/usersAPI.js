import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000/users',
  headers: { api: 'foobar' },
  params: {
    api_key: 'efsfsefsefsefsef',
  },
});

export class UsersAPI_OLD {
  constructor() {}

  async getUsers() {
    const url = '';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async createUser(user) {
    const url = 'http://localhost:3000/users';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async updateUser({ id, ...user }) {
    const url = `http://localhost:3000/users/${id}`;

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async resetUser({ id, ...user }) {
    const url = `http://localhost:3000/users/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
    }
  }
  async deleteUser(id) {
    const url = `http://localhost:3000/users/${id}`;

    const options = {
      method: 'DELETE',
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export class UsersAPI {
  constructor() {}

  async getUsers() {
    const response1 = await axios.get('', {
      headers: {},
    });
    return response1.data;
  }

  async createUser(user) {
    const response = await axios.post('', user);
    return response.data;
  }

  async updateUser({ id, ...user }) {
    const response = await axios.patch(`/${id}`, user);
    return response.data;
  }

  async resetUser({ id, ...user }) {
    const response = await axios.put(`/${id}`, user);
    return response.data;
  }

  async deleteUser(id) {
    const response = await axios.delete(`/${id}`);
    return response.data;
  }
}
