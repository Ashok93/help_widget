import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Mail extends Component {
  constructor(props) {
      super(props);
      this.state = {
        mail_sent: false
      }
  }

  // mimick success state on send email click
  sendEmail(e) {
    e.preventDefault();
    this.setState({
      mail_sent: true
    });

    setTimeout(()=> {
      this.setState({
        mail_sent: false
      })
    }, 3000);
  }

  render() {
    return(
      <div className="mail-us-wrap flx flx-cl">
        <form>
          <CSSTransitionGroup
          component="span"
          transitionName="help-content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          >
            {
              this.state.mail_sent ?
              <div className="alert alert-success form-group">
                <i className="fa fa-check"></i>
                Message Sent! Thanks for reaching out! Someone from our team will get back to you soon.
              </div>
              :
              ''
            }
          </CSSTransitionGroup>

          <div className="form-group">
            <div type="text" className="form-control" id="support_id" readOnly>
              <strong>To</strong> support@recruiterbox.com
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea type="text" className="form-control" id="message" placeholder="Message" rows="3" />
          </div>
          <div className="form-group">
            <input type="file"  id="file" style={{display: 'none'}} />
            <a href="#"><label htmlFor="file" className="attachement-file"><i className="fa fa-paperclip"></i> Attach files</label></a>
            <button type="submit" className="btn btn-primary pull-right" onClick={this.sendEmail.bind(this)}>Send Mail</button>
          </div>
        </form>
      </div>
    )
  }
}
