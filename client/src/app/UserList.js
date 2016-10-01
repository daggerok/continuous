import React from 'react';
import {User} from './User';
import {
  users,
  me
} from '../services/UserService';

export class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Guest',
      users: [],
      err: {}
    };
    this.ok = this.ok.bind(this);
    this.err = this.err.bind(this);
  }

  ok(response) {
    if (response) {
      if (response.name || response.principal.username) {
        this.setState({ name: response.name || response.principal.username })
      }
      if (response.authenticated && response.principal.enabled) {
        users.subscribe(ok => this.setState({ users: ok._embedded.users }));
      }
    }
  }

  err(response) {
    console.error('error', response);
  }

  componentDidMount() {
    me.subscribe(this.ok, this.err);
  }

  render() {
    return (
      <div>
        <div>
          <span>hi, {this.state.name}! </span>
          <span>
            {
              this.state.name === 'Guest'
                ? <a href="/login">please login</a>
                : <a href="/logout">logout</a>
            }
          </span>
        </div>
        <ul class="list-style-none">
          {this.state.users.map((user, i) => <User key={i} user={user} />)}
        </ul>
      </div>
    );
  }
}
