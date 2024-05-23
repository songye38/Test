const MAKE_UPPERCASE_NODE_SPEC = {
    'id': 'make-uppercase',
    'name': 'Make Uppercase',
    'description': 'Transform the input text to uppercase.',
  
    'category': 'processor',
    'collection': 'Jason Collection',
  
    // Properties.
    'propertySpecs': [
      {
        'name': 'option',
        'type': 'string',
        'editorSpec': {
          'type': 'dropdown',
          'options': [
            {
              'value': 'first-letter',
              'label': 'First letter only'
            },
            {
              'value': 'all-letters',
              'label': 'All letters'
            }
          ]
        }
      }
    ],
  
    // Inputs.
    'inputSpecs': [{
      'name': 'text',
      'type': 'string'
    }],
  
    // Outputs.
    'outputSpecs': [{
      'name': 'result',
      'type': 'string',
    }]
  };
  
  
  /**
   * Transform the input text to upper case.
   * A minimal example for Visual Blocks custom nodes.
   */
  class MakeUppercase extends HTMLElement {
    constructor() {
      super();
    }
  
    runWithInputs(inputs) {
      let {text, option} = inputs;
      const upperText = option === 'first-letter' ?
          (text.charAt(0).toUpperCase() + text.slice(1)) : text.toUpperCase();
  
      this.dispatchEvent(new CustomEvent('outputs', {detail: {
          result: upperText}}));
    }
  }
  
  
  // Finally register the custom node with Visual Blocks to start using it.
  visualblocks.registerCustomNode({nodeSpec: MAKE_UPPERCASE_NODE_SPEC, nodeImpl: MakeUppercase});

  //Test