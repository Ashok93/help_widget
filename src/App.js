import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import Tab from './components/Tab';
import Chat from './components/help_widget/Chat';
import Faq from './components/help_widget/Faq';
import Mail from './components/help_widget/Mail';

import './stylesheets/App.css';
import './stylesheets/global.css';
import './stylesheets/help_widget/mail.css';
import './stylesheets/help_widget/faq.css';
import './stylesheets/help_widget/chat.css';

import { tabs } from './constants/sample_data/tabs';
import { faqs } from './constants/sample_data/faqs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_tab: 1
    }
  }

  handleTabClick(index) {
    this.setState({ current_tab: index });
  }

  mailUsClicked() {
    this.setState({ current_tab: 2});
  }

  render() {
    let state = this.state;
    return (
      <div className="help-widget">
        <div className="clearfix tabs-wrap">
          <div className="help-close">
            <i className="fa fa-times"></i>
          </div>
          <Tab tabs={tabs} current_tab={state.current_tab} onTabClick={this.handleTabClick.bind(this)} />
        </div>

        <div className="tab-content" style={ state.current_tab === 1 ? { width: "100%" } : { width: "50%" }}>
          <CSSTransitionGroup
          component="span"
          transitionName="help-content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          >
          {
            state.current_tab === 0 ?
              <Chat />
            :
              ''
          }

          {
            state.current_tab === 1 ?
            <Faq faqs={faqs} onMailUsClick={this.mailUsClicked.bind(this)}/>
          :
            ''
          }

          {
            state.current_tab === 2 ?
            <Mail />
          :
            ''
          }
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
