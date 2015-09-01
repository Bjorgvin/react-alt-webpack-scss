import flux from 'control';  
import {createStore, bind} from 'alt/utils/decorators';  
import actions from 'actions/documentActions';

@createStore(flux)
class DocumentStore {  
  constructor() {
    this.markdown = 'awe-some';
  }

  @bind(actions.saveMarkdown)
  saveMarkdown(markdown) {
    this.markdown = markdown;
  }
}

export default DocumentStore;  