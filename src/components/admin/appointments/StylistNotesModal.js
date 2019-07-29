import React, {Component} from 'react'

export default class StylistNotesModal extends Component {
  state = {
    saveDisabled: false
  }

  render() {
    return (
      <div className="stylistNotes-Div">
        <textarea id="stylistNotes-area" placeholder="Stylist's notes..."></textarea>
        <button
              id="Cancel"
              className="btn btn-warning"
              onClick={() => {
                this.setState({ saveDisabled: true });
                this.props.history.push("/admin/appointments")
                }}
              disabled={this.state.saveDisabled}
        >
          Cancel Notes
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ saveDisabled: true });
            console.log("submit notes clicked");
          }}
          disabled={this.state.saveDisabled}
        >
          Submit Notes
        </button>
          </div>
    )
  }
}