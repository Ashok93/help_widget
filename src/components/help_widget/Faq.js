import React, { Component } from 'react';

export default class Faq extends Component {
  render() {
    return(
      <div className="flx flx-rw faqs-wrap">
        <div className="flx flx-cl email-pref">
          <div className="mgn-Axs f-20">Prefer email instead?</div>
          <button className="f-12 mgn-Axs btn btn-default clr-gray mail-us-btn" onClick= { () => this.props.onMailUsClick() }>
            <i className="fa fa-envelope"></i> Write to us
          </button>
          <div className="f-12 mgn-Axs clr-gray">We are super quick in responding to your queries.</div>
        </div>
        <div className="faqs-content flx flx-cl">
            <div style={{width: "100%", position: "relative"}}>
              <i className="fa fa-search fa-fw"></i>
              <input  className="faq-input f-12 mgn-Axl form-control"
              type="text"
              placeholder="What can we help you with? Start typing your questions...">
              </input>
            </div>

          <div className="flx flx-rw flx-rw-wrap faq-items-wrap">
            {
              this.props.faqs.map((faq, index)=> {
                return(
                  <div key={index} className="flx flx-cl faq-item f-12">
                    <div className={ faq.font_class + " fa-2x" }></div>
                    <div className="mgn-Txs">{faq.faq}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
