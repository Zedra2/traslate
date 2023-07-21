let def = {

  artifact_1: {
    debug: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
      screen: ['', '', '', '', 'sin^2(cos^2(x))'],

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['cosleft(xright)'], ['cos^2left(xright)'], ['sinleft(cos^2left(xright)right)']],
      key: [['cosleft(right)'], ['left(right)^2'], ['sinleft(right)'], ['left(right)^2']]
    }
  },
  artifact_2: {
    debug: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
      screen: ['x', '', '', '', '2+e^{sin(x^2)}'],
      key: ['()^2', 'sin()', 'e^{()}', '2+()'],

    },
    conditions: {
      screen: [[''], ['x^2'], ['sinleft(x^2right)'], ['exponentialE^{sinleft(x^2right)}']],
      key: [['left(right)^2'], ['sinleft(right)'], ['left(right)^2'], ['left(right)^2']]
    }
  },
  artifact_3: {
    debug: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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

      screen: ['x', '', '', '', ''],
      key: ['()+2', 'e^{()}', 'cos()', '-()'],

    },
    conditions: {
      screen: [[''], ['x+2'], ['exponentialE^{left(x+2right)}'], ['cosleft(exponentialE^{left(x+2right)}right)'], ['-cosleft(exponentialE^{left(x+2right)}right)']],
      key: [['left(right)^2'], ['sinleft(right)'], ['left(right)^2'], ['left(right)^2']]
    }
  },
  /* artifact_2: {
    debug: true,
    characteristicsArtifact:{
      typeForm:'form_1',
      height:'auto',
      arrow:{
        count:4,
        direction: 'down'
      },
      typeDiv:[
        {
          rounded:{
              count: 5,
              border: '1px solid black',
              formClas: 'rounded', 
              inputEnable: true, 
              size:{
                  width: '200px',
                  height: '50px'
              }
          }
      },
      {
          square:{
              count: 4,
              border: '1px solid black',
              formClas: 'square', 
              inputEnable: true,
              size:{
                  width: '100px',
                  height: '50px'
              }
          }
      }
      ]
      
    },
    defaultinput:{
      screen:['','','','','sin^2(cos^2(x))'],
     
    },
    conditions: {
      screen:[['5'],['sinleft(5right)'],['exponentialE^{sinleft(5right)}']],
      key:[['sinleft(right)'],['exponentialE^{left(right)}']]
    }
  }, */
  artifact_4: {
    debug: true,
    modeDouble: true,
    modeVF: true,
    arrowUpDown: true,
    characteristicsArtifact: {
      typeForm: 'form_2',
      width: '340px',
      height: 'auto',
      arrow: {
        count: 8,


      },
      typeDiv: [
        {
          rounded: {
            count: 10,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 8,
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
      titleExam: '-cos(2x+3)=0',
      screen: ['x', '',
        '2x', '-1.429204',
        '2x+3', '1.570796',
        'cos(2x+3)', '0',
        '-cos(2x+3)', '0'],

      key: ['2()', '()+3', 'cos()', '-()', '', '', '', ''],


    },
    conditions: {
      screen: [[''], ['-0.714602'], [''], [''], [''], [''], [''], [''], [''], ['']],
      key: [[''], [''], [''], [''], ['frac{left(right)}{2}'], ['left(right)-3'], ['cos^{-1}left(right)'], ['-left(right)']]
    },
    conditionsVF: {
      quest: ['v']
    }
  },
  artifact_5: {
    debug: true,
    modeDouble: true,
    modeVF: true,
    arrowUpDown: true,
    characteristicsArtifact: {
      typeForm: 'form_2',
      width: '340px',
      height: 'auto',
      arrow: {
        count: 8,


      },
      typeDiv: [
        {
          rounded: {
            count: 10,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 8,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '60px'
            }
          }
        }
      ]

    },
    defaultinput: {
      titleExam: 'ln^2(y+2)^2=6.13',
      screen: ['y', '', 'y+2', '3.448509', '(y+2)^2', '11.892215', 'ln(y+2)^2', '2.475884', 'ln^2(y+2)^2', '6.13'],

      key: ['()+2', '()^2', 'ln()', '()^2', '', '', '', ''],


    },
    conditions: {
      screen: [[''], ['1.448509'], [''], ['']],
      key: [[''], [''], [''], [''], ['left(right)-2'], ['sqrt{left(right)}'], ['exponentialE^{left(right)}'], ['sqrt{left(right)}']]
    },
    conditionsVF: {
      quest: ['v']
    }
  }
}

generateArtifact(def)