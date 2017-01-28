import React from 'react';

require('../../sass/layout.sass')
const Layout = React.createClass({
  render: function() {
    return (
      <div>
        <div className='wrapper'>
          {this.props.children}
          <div className='push'></div>
        </div>
        <div className='footer'>This is a sticky footer</div>
      </div>
    );
  }
});

export default Layout;
