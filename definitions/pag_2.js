let def = {
    artifact_1: {
      buttonsActive: true,
      characteristicsArtifact: {
        typeForm: 'artifactGrid',
        width:'320px',
        height: 'auto',
        arrow: {
          count: 2,
          direction: 'down'
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
    
        screen: {defaultText:[{textValue:'u', disabled:true},
         {textValue:'u+1',disabled:true}, {textValue:'3u+1', disabled:true}, ]},
        key:{defaultText:[{textValue:`1+()`},{textValue:`3.()`}],disabled:true}//teclas
  
      },
      conditions: {//\sin\left(\cos^2\left(x\right)\right)
        screen: [[''], [''], [''], ['']],
        key: [['cosleft(right)'], ['left(right)^2'], ['sinleft(right)'], ['left(right)^2']]
      }
    },
    artifact_2: {
      buttonsActive: true,
      characteristicsArtifact: {
        typeForm: 'artifactGrid',
        width:'320px',
        height: 'auto',
        arrow: {
          count: 2,
          direction: 'down'
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
    
        screen: {defaultText:[{textValue:'x', disabled:true},
         {textValue:'x+2',disabled:true},
         {textValue:'senx+sen2', disabled:false}, ]},
        key:{defaultText:[{textValue:`()+2`},{textValue:`sen{()}`}],disabled:true}//teclas
  
      },
      conditions: {//\sin\left(\cos^2\left(x\right)\right)
        screen: [[''], [''], ['senleft(x+2right)']], //error
        key: [[''], [''], [''], ['']]
      }
    },
  
    artifact_3: {
      buttonsActive: true,
      characteristicsArtifact: {
        typeForm: 'artifactGrid',
        width:'320px',
        height: 'auto',
        arrow: {
          count: 2,
          direction: 'down'
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
    
        screen: {defaultText:[{textValue:'x', disabled:true}, 
        {textValue:'x+2',disabled:true}, {textValue:'(x+4)^2', disabled:false}, ]},
        key:{defaultText:[{textValue:`( )+2`},{textValue:`( )²`}],disabled:true}//teclas
  
      },
      conditions: {//\sin\left(\cos^2\left(x\right)\right)
        screen: [[''], [''], ['(x+2)^2']], //pantalla
        key: [[''], [''], [''], ['']]
      }
    },
  
   
    artifact_4: {
      buttonsActive: true,
      characteristicsArtifact: {
        typeForm: 'artifactGrid',
        width:'320px',
        height: 'auto',
        arrow: {
          count: 2,
          direction: 'down'
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
    
        screen: {
          defaultText:[
          {textValue:'e^x', disabled:true}, 
          {textValue:'e^{-x}',disabled:false},
         {textValue:'e^x', disabled:false},
          ]},
        key:{defaultText:[{textValue:`()^{-1}`},{textValue:`-1.( )`}],disabled:true}//teclas
  
      },
      conditions: {
        screen: [[''], ['left(e^xright)^{-1}'], ['-1left(e^xright)^{-1}']], //pantalla
        key: [[''], [''], [''], ['']]
      }
    },
  
    artifact_5: {
      buttonsActive: true,
      characteristicsArtifact: {
        typeForm: 'artifactGrid',
        width:'320px',
        height: 'auto',
        arrow: {
          count: 2,
          direction: 'down'
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
    
        screen: {defaultText:[
          {textValue:'x', disabled:true}, 
          {textValue:'x+3',disabled:true},
         {textValue:'\\sqrt{x}+\\sqrt{3}', disabled:false},
          ]},
        key:{defaultText:[
        {textValue:`()+3`},
        {textValue:`\\sqrt{{▢}}`}
        ],disabled:true}//teclas
  
      },
      conditions: {
        screen: [[''], [''], ['sqrt{x+3}']], 
        key: [[''], [''], [''], ['']]
      }
    },
    artifact_6: {
      buttonsActive: true,
      characteristicsArtifact: {
        typeForm: 'artifactGrid',
        width:'320px',
        height: 'auto',
        arrow: {
          count: 2,
          direction: 'down'
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
                height: '58px'
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
    
        screen: {defaultText:[
          {textValue:'f', disabled:true}, 
          {textValue:'f+1',disabled:true},
         {textValue:'\\frac{1}{f}+1', disabled:false},
          ]},
        key:{defaultText:[{textValue:`()+1`},{textValue:`()^{-1}`}],disabled:true}//teclas
  
      },
      conditions: {
        screen: [[''], [''], ['left(f+1right)^{-1}']], 
        key: [[''], [''], [''], ['']]
      }
    },
    artifact_7: {
      buttonsActive: true,
      characteristicsArtifact: {
        typeForm: 'artifactGrid',
        width:'320px',
        height: 'auto',
        arrow: {
          count: 2,
          direction: 'down'
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
    
        screen: {defaultText:[
          {textValue:'x', disabled:true}, 
          {textValue:'-x',disabled:false},
         {textValue:'x', disabled:false},
          ]},
        key:{defaultText:[{textValue:`()^{^{-1}}`},{textValue:`-()`}],disabled:true}//teclas
  
      },
      conditions: {
        screen: [[''], ['x^{-1}'], ['-x^{-1}']], 
        key: [[''], [''], [''], ['']]
      }
    },
  
   
    }
    
    generateArtifact(def)