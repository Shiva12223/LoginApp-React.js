// Write your code here

import {Component} from 'react'
import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message message={isLogin} />
          <div>
            {isLogin ? (
              <Logout logout={this.onClickButton} />
            ) : (
              <Login login={this.onClickButton} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
