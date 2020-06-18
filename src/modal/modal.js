import React from "react"
import "./modal.css"

export default class Modal extends React.Component {
  state = {
      isOpen: false
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})}>Открыть модальное окно</button>

        {this.state.isOpen && (<div className="modal">
          <div className="modal-body">
            <h1>Заголовок окна</h1>
            <p>Невероятное модальное окно!</p>
            <button onClick={() => this.setState({isOpen: false})}>Закрыть окно</button>
          </div>
        </div>)}
      </React.Fragment>
    )
  }
}
