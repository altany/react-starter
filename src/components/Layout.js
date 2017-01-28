import React from 'react';
const Layout = React.createClass({
  render: function() {
    return (
      <div>
        <div className='wrapper'>
          {this.props.children}
        </div>
        <div className='footer'></div>
      </div>
    );
  }
});

export default Layout;
