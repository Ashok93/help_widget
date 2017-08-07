import React, { Component } from 'react';

class Tab extends Component {
  render() {
    return(
      <div className="nav-tabs clearfix">
        {
          this.props.tabs.map((tab, index) => {
            return(
              <div
              className={this.props.current_tab === index ? 'tab active' : 'tab'}
              key={index}
              onClick={() => {this.props.onTabClick(index)} }>
                <div className="tab-inner">
                  <i className={tab.font_class}></i>
                  {tab.tab_name}
                </div>
              </div>

            )
          })
        }
      </div>
    )
  }
}

export default Tab
