//comentariox 
let def = {
  artifact_1: { 
    buttonsActive: true,
    variableX: "2",
    characteristicsArtifact: {
      typeForm: 'form_1',
      width:'320px',
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
      screen: {defaultText:[{textValue:''}, {textValue:''}, {textValue:''},{textValue:''},{textValue:'2\\exponentialE^{\\left(x-1\\right)}+2',disabled:true},] },
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['x-1'], ['exponentialE^{x-1}'], ['2exponentialE^{x-1}','2cdotexponentialE^{x-1}','2timesexponentialE^{x-1}'],['']],
      key: [['left(right)-1','6'], ['exponentialE^{left(right)}'], ['2left(right)','2cdotleft(right)','2timesleft(right)'], ['left(right)+2']]
    }
  },
  artifact_2: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width:'320px',
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
              height: '55px'
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
  
      screen: {defaultText:[{textValue:''}, {textValue:''}, {textValue:''},{textValue:''},{textValue:'-\\frac{\\sin\\left(x\\right)+1}{2}',disabled:true},] ,},
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['sinleft(xright)'], ['-sinleft(xright)'], ['left(-sinleft(xright)right)+1','-sinleft(xright)+1'],['']],
      key: [['sinleft(right)'], ['-left(right)'], ['left(right)+1'], ['frac{left(right)}{2}']]
    }
  },
  artifact_3: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width:'320px',
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
  
      screen: {defaultText:[{textValue:''}, {textValue:''}, {textValue:''},{textValue:''},{textValue:'-\\frac{\\sin\\left(x\\right)+1}{2}',disabled:true},] },
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['sinleft(xright)'], ['-sinleft(xright)'], ['left(-sinleft(xright)right)+1','-sinleft(xright)+1'],['']],
      key: [['sinleft(right)'], ['-left(right)'], ['left(right)+1'], ['frac{left(right)}{2}']]
    }
  },
  artifact_4: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width:'320px',
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
  
      screen: {defaultText:[{textValue:''}, {textValue:''}, {textValue:''},{textValue:''},{textValue:'\\frac{\\ln\\left(3\\left(x-\\frac{1}{2}\\right)\\right)}{5}',disabled:true},] },
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['x-frac{1}{2}'], ['3cdotleft(x-frac{3}{2}right)','3left(x-frac{3}{2}right)','3timesleft(x-frac{3}{2}right)'], ['lnleft(right)3timesleft(x-frac{1}{2}right)','lnleft(3cdotleft(x-frac{1}{2}right)right)','lnleft(3left(x-frac{1}{2}right)right)']],
      key: [['left(right)-frac{1}{2}'], ['3+left(right)'], ['lnleft(right)'], ['frac{left(right)}{5}']]
    }
  },
  artifact_5: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width:'320px',
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
  
      screen: {defaultText:[{textValue:''}, {textValue:''}, {textValue:''},{textValue:''},{textValue:'\\frac{\\ln\\left(3x\\right)}{5}-\\frac{1}{5}',disabled:true},] },
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['3left(xright)','3x'], ['lnleft(3xright)'], ['frac{lnleft(3xright)}{5}']],
      key: [['3left(right)','3cdotleft(right)','3timesleft(right)'], ['lnleft(right)'], ['frac{left(right)}{5}'], ['left(right)-frac{1}{5}']]
    }
  },
  artifact_6: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width:'320px',
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
  
      screen: {defaultText:[{textValue:''}, {textValue:''}, {textValue:''},{textValue:''},{textValue:'\\frac{\ln\\left(3x\\right)-\\frac{1}{2}}{5}',disabled:true},] },
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['3x','3left(right)'], ['lnleft(3xright)'], ['lnleft(3xright)-frac{1}{2}']],
      key: [[ '3left(right)','3cdotleft(right)','3timesleft(right)'], ['lnleft(right)'], ['left(right)-frac{1}{2}'], ['frac{left(right)}{5}']]
    }
  },
  artifact_7: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width:'320px',
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
  
      screen: {defaultText:[{textValue:''}, {textValue:''}, {textValue:''},{textValue:''},{textValue:'\\exponentialE^{\\left(3,2y-0,41\\right)}+1,14',disabled:true},] },
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['y'], ['3,2y'], ['3,2y-0,41'], ['exponentialE^{left(3,2y-0,41right)}']],
      key: [['3,2left(right)','3,2cdotleft(right)','3,2timesleft(right)'], ['left(right)-0,41'], ['exponentialE^{left(right)}'], ['left(right)+1,14']]
    }
  },
  artifact_8: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width:'320px',
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
  
      screen: {defaultText:[{textValue:''}, {textValue:''}, {textValue:''},{textValue:''},{textValue:'\\frac{1}{\\frac{1}{\\exponentialE^x}+2}',disabled:true},] },
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [['x'], ['exponentialE^x'], ['frac{1}{exponentialE^x}'], ['frac{1}{exponentialE^x}+2']],
      key: [['exponentialE^{left(right)}'], ['frac{1}{left(right)}'], ['left(right)+2'], ['frac{1}{left(right)}']]
    }
  },

/*   artifact_Text_1: {
    characteristicsArtifact: {
      page:[
        {
          typeTag: 'h1',
          content:{
              property:{
                typeText: 'text',
                defaultClass:'itemMargin-2 itemMarginLeft-2'
                
              },
              textValue:[{text:'FORMULAS'}],
            },
          },
          {
          typeTag: 'p',
          content:{
            property:{
              typeText: 'text',
              defaultClass:'itemMargin-2 itemMarginLeft-2'
            },
            textValue:[{text:'Ponga su calculadora en radianes.'},{text:'Efectue con una calculadora las operaciones.'}]
            },

          },
          {
          typeTag: 'li',
          content:{
              property:{
                typeText: 'text',
                defaultClass: 'formatList'
              },
              textValue: [{text:'I) Marque el numero 2.'},{text:'II) Presione la tecla que corresponde al seno.'},{text:'III) Presione la tecla que corresponde al exponencial'}],
            },
          },
          {
            typeTag: 'p',
          content:{
            property:{
              typeText: 'text',
              defaultClass: 'itemMargin-2'
            },
            textValue:[{text:'El numero que aparece en la pantalla es:'}]
            },
          },
          
          
      ],
      
    },
    
  },/*
  artifact_1:{
      characteristicsArtifact:{
        page:[
          {
            typeTag: 'math-field',
            classContent:'contetMathInput',
          content:{
            property:{
              typeText:'text',
            },
            textValue:[
              { 
                class:'inputExample math element',
                addons:{
                  keyboardActive:true,
                  classAddons: 'contentText',
                }}],
            },
          },
        ]
      }
  },
  artifact_Text_2:{
    characteristicsArtifact:{
      page:[
        {
          typeTag: 'p',
        content:{
          property:{
            typeText: 'text',
            defaultClass:'itemMargin-2 itemMarginLeft-2'
          },
            textValue:[{text:`Este número, tiene algo que ver con el número 2.
            En efecto ppor haber hecho las operaciones sabemos que fué obtenido a partir del número 2, haciendo ciertas transforamciones.
            De manera más precisa: 2.482577728 fué obtenido "sacánole el seno al 2" y luego, al resultado de esa transformación, "se le sacó la exponencial".
            Esta relación que acabamos de explicar, se suele escribir de manera abreviada:`}]
          },
        },
        {
          typeTag: 'math-field',
          classContent:'contetMathInput',
        content:{
          property:{
            typeText:'latex',
            defaultClass:'mathExample element'
          }, 
          textValue:[{text:`2.482577728 = e^{sen(2)}`, class:`mathExample element`, atribute:'disabled'}],
          },
        },
        {
          typeTag: 'math-field',
          classContent:'mathExampleTextExample',
        content:{
          property:{
            typeText:'latex',
            defaultClass:'mathExampleText'
              // esta sentencia latex es mejor para añadir texto que se le separe las cadenas \\text{texto que quieras colocar}
          }, //para crear un espacio en este campo que acepta formato latex es de esta manera \\hspace{4px}
          textValue:
          [
            {text:`\\begin{autobreak} \\text{De esta manera, calcular} \\hspace{4px} e^{sen(5)},\\text{ quiere decir efectuar los pasos I), II) y III) descritos al comienzo.} \\end{autobreak}`},
            {text:`\\text{Con la salvedad de que en I) en vez de marcar 2 hay que marcar 5. Complete:}`}
          ], 
          },
        },
      ]
    }
  },/*
  artifact_2:{
    characteristicsArtifact:{
      page:[
        {
          typeTag: 'math-field',
          classContent:'contetMathInput',
        content:{
          property:{
            typeText:'text',
            defaultClass: 'mathExampleTextExample'

              // esta sentencia latex es mejor para añadir texto que se le separe las cadenas \\text{texto que quieras colocar}
          }, //para crear un espacio en este campo que acepta formato latex es de esta manera \\hspace{4px}
          textValue:[{text:`e^{sen(5)} = }`, atribute:'disabled'},
        { class:'inputExample', addons:{
          keyboardActive:true,
          classAddons: 'contentText',
        }}], 
          },
        },
      ]
    }
  }, */
  /* artifact_Text_3:{
    characteristicsArtifact:{
      page:[
        {
          typeTag: 'math-field',
          classContent:'mathExampleTextExample',
        content:{
          property:{
            typeText:'latex',
            defaultClass:'mathExampleText'
              // esta sentencia latex es mejor para añadir texto que se le separe las cadenas \\text{texto que quieras colocar}
          }, //para crear un espacio en este campo que acepta formato latex es de esta manera \\hspace{4px}
          textValue:
          [
            {text:`\\text{Por lo tanto, para calcular} \\hspace{4px} e^{sen(4)},e^{sen(3)},e^{sen(-1)}.`,},
          ], 
          },
        },
        {
          typeTag: 'p',
          content:{
            property:{
              typeText: 'text',
              defaultClass:'itemMargin-2 itemMarginLeft-2'
            },
            textValue:[{text:'Siempre se seguiran los mismos pasos con la calculadora, pero marcando al comienzo: 4,3,-1, etc. Es frecuente querer indicar los pasos sin referirse a ningun numero en particular con el cual comenzar. Para ello se suele escribir la misma expresion pero en vez de poner un numero entre los parentesis, se pone una letra. A menudo la letra escogida es la x. Asi se obtiene.'}]
            },

          },
          {
            typeTag: 'math-field',
            classContent:'contetMathInput',
          content:{
            property:{
              typeText:'latex',
            }, 
            textValue:[{text:`e^{sen(x)}`, class:`inputExample element mathExampleTextExample`, atribute:'disabled'}],
            },
          },
          {
            typeTag: 'p',
            content:{
              property:{
                typeText: 'text',
                defaultClass:'itemMargin-2 itemMarginLeft-2'
              },
              textValue:[{text:'Lo que aparece en el recuadro es un ejemplo de lo que se llama fórmula. La letra X recibe el nombre de variable.'}]
              },
  
            },
            {
              typeTag: 'math-field',
              classContent:'contetMathInput',
            content:{
              property:{
                typeText:'latex',
                defaultClass:'mathExampleText'
              }, 
              textValue:[{text:`\\text{Otra manera de descrbir el proceso hecho con una calculadora para calcular }e^{sen(2)} \\text{ es:}`, }],
              },
            },
      ]
    }
  }, */

  }
  
  generateArtifact(def)