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
  
      screen: {defaultText:[{textValue:'y', disabled:false},
       {textValue:'sen(x)',disabled:true}, {textValue:'sen(sen(x))', disabled:true}, ]},
      key:{defaultText:[{textValue:`sen{()}`},{textValue:`sen{()}`}],disabled:true}//teclas

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], [''], [''], ['']],
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
  
      screen: {defaultText:[{textValue:'\\placeholder{', disabled:false},
       {textValue:'e^{(\\placeholder{})}',disabled:false},
       {textValue:'sen{(e^x)}}', disabled:true}, ]},
      key:{defaultText:[{textValue:`e⁽⁾`},{textValue:`sen{()}`}],disabled:true}//teclas

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['e^{(x)}'], ['']], //error
      key: [['cosleft(right)'], ['left(right)^2'], ['sinleft(right)'], ['left(right)^2']]
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
  
      screen: {defaultText:[{textValue:'x', disabled:true}, {textValue:'sen',disabled:false}, {textValue:'e^{sen()}', disabled:false}, ]},
      key:{defaultText:[{textValue:`sen{()}`},{textValue:`e⁽⁾`}],disabled:true}//teclas

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [[''], ['senleft(xright)'], ['e^{sen(x)}']], //pantalla
      key: [['cosleft(right)'], ['left(right)^2'], ['sinleft(right)'], ['left(right)^2']]
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
        {textValue:'x', disabled:true}, 
        {textValue:'sen(x)',disabled:true},
       {textValue:'sen^2(x)', disabled:false},
        ]},
      key:{defaultText:[{textValue:`sen{()}`},{textValue:`sen{()}`}],disabled:true}//teclas

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [[''], [''], ['senleft(senleft(xright)right)']], //pantalla ERRORR
      key: [['cosleft(right)'], ['left(right)^2'], ['sinleft(right)'], ['left(right)^2']]
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
        {textValue:'x^2',disabled:true},
       {textValue:'(e^x)^2', disabled:false},
        ]},
      key:{defaultText:[
      {textValue:`()^2`},
      {textValue:`e^{()}`}
      ],disabled:true}//teclas

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [[''], [''], ['e^{x^2}']], //eroorr
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
        {textValue:'e^x',disabled:true},
       {textValue:'e^x^2', disabled:false},
        ]},
      key:{defaultText:[{textValue:`e⁽⁾`},{textValue:`()^2`}],disabled:true}//teclas

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [[''], [''], ['left(e^xright)^2']], //eroorr
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
        {textValue:'cos',disabled:false},
       {textValue:'cos(x+1)', disabled:false},
        ]},
      key:{defaultText:[{textValue:`cos()`},{textValue:`()+1`}],disabled:true}//teclas

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [[''], ['cosleft(xright)'], ['cos(x)+1']], 
      key: [[''], [''], [''], ['']]
    }
  },

  artifact_8: {
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
        {textValue:'x+1',disabled:true},
       {textValue:'cos(x)+1', disabled:false},
        ]},
      key:{defaultText:[{textValue:`()+1`},{textValue:`cos()`}],disabled:true}//teclas

    },
    conditions: {
      screen: [[''], [''], ['cos(x+1)']], 
      key: [[''], [''], [''], ['']]
    }
  },

  artifact_9: {
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
        {textValue:'u+1', disabled:true}, 
        {textValue:'3u+1',disabled:true},
       {textValue:'e^3^u+3', disabled:false},
        ]},
      key:{defaultText:[{textValue:`3.()`},{textValue:`e^(^)`}],disabled:true}//teclas

    },
    conditions: {
      screen: [[''], [''], ['e^{3u+3}']], 
      key: [[''], [''], [''], ['']]
    }
  },
  }
  
  generateArtifact(def)