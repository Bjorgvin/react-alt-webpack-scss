import React from 'react';  
import connectToStores from 'alt/utils/connectToStores';  
import DocumentStore from 'stores/documentStore';  
import DocumentActions from 'actions/documentActions';
import 'components/style';
import AceEditor from 'react-ace-wrapper'

// load used syntax highlighting
import 'brace/mode/markdown';
// load used themes
import 'brace/theme/github';

@connectToStores
class Editor extends React.Component {  
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
    	
			<AceEditor
				mode='markdown'
				theme='github'
				height="500em"
				name='ace-editor'
				onChange={this.onChange}/>
		
    );
  }

  onChange = evt => {
  	console.log("Markdown text: " + evt)
  }  
}

export default Editor;  