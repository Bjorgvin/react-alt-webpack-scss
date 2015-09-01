import React from 'react';  
import {RouteHandler, Link} from 'react-router';

class Main extends React.Component {  
  render() {
    return (
      <div>
        <h1>Example</h1>

        <div id='navitation'>
          <Link to='example'>Go to the Example page...</Link>
        	<Link to='/'>Go to the Main page...</Link>
        </div>
        
        <div id='page-content'>
        	<RouteHandler/>
        </div>
      </div>
    );
  }
}

export default Main;  