let def = {


  artifact_1: { 
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'320px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
        size: {
          width: '20px !important;',
          height: '50px'
        }
        
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]

    },
    defaultinput: {
  
      screen: {defaultText:[{textValue:'2', disabled:true}, {textValue:'0.909297426'}, {textValue:'2.482577728', disabled:true}, ]},
      key:{defaultText:[{textValue:`sen{()}`},{textValue:`e^{()}`}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['cosleft(xright)'], ['cos^2left(xright)'], ['sinleft(cos^2left(xright)right)']],
      key: [['cosleft(right)'], ['left(right)^2'], ['sinleft(right)'], ['left(right)^2']]
    }
  },
  }
  
  generateArtifact(def)