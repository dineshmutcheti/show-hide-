// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFrirstNameVisible: false, isLastNameVisible: false}
  firstName = () => {
    const {isFrirstNameVisible} = this.state
    this.setState({isFrirstNameVisible: !isFrirstNameVisible})
  }
  lastName = () => {
    const {isLastNameVisible} = this.state
    this.setState({isLastNameVisible: !isLastNameVisible})
  }
  render() {
    const {isFrirstNameVisible, isLastNameVisible} = this.state
    return (
      <div className="hide-container">
        <div className="show-hide-app-card">
          <h1 className="heading">Show/Hide</h1>
          <div className="show-hide-app-items-icon">
            <div className="show-hide-app-item-icon">
              <button type="button" onClick={this.firstName} className="button">
                Show/Hide Firstname
              </button>
              {isFrirstNameVisible && (
                <div className="show-hide-app-output-con">
                  <p>Joe</p>
                </div>
              )}

              <button type="button" onClick={this.lastName} className="button">
                Show/Hide LastName
              </button>
              {isLastNameVisible && (
                <div className="show-hide-app-output-con">
                  <p>Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
