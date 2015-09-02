import React from 'react';  
import connectToStores from 'alt/utils/connectToStores';  
import DummyStore from 'stores/dummyStore';  
import DummyActions from 'actions/dummyActions';
import 'components/style';
import Editor from './editor'
import Preview from './preview'

@connectToStores
class Example extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  static getStores(props) {
    return [DummyStore];
  }

  static getPropsFromStores(props) {
    return DummyStore.getState();
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={this.onChange}/>
        <h1 className='header-text'>It works: {this.props.name}</h1>
        <div className='container'>
          <div className='item'>
            <Editor />
          </div>
          <div className='item markdown-preview'>
            <Preview />
          </div>
        </div>
      </div>
    );
  }

  onChange = evt => {
    this.setState({name: evt.target.value});
    DummyActions.updateName(evt.target.value);
  }  
}

export default Example;  