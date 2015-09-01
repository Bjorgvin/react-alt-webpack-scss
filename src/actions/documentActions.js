import flux from 'control';  
import {createActions} from 'alt/utils/decorators';

@createActions(flux)
class DocumentActions {  
  constructor() {
    this.generateActions('saveMarkdown');
  }
}

export default DocumentActions;  