import React from 'react';  
import connectToStores from 'alt/utils/connectToStores';  
import DocumentStore from 'stores/documentStore';  
import DocumentActions from 'actions/documentActions';
import 'components/style';
import Markdown from 'react-remarkable'

@connectToStores
class Preview extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      name: props.markdown
    }
  }

  static getStores(props) {
    return [DocumentStore];
  }

  static getPropsFromStores(props) {
    return DocumentStore.getState();
  }

  render() {
    return (
		<Markdown source={this.props.markdown} />
    );
  }
}

export default Preview;  