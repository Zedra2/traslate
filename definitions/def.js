//comentariox
let def = {
  artifact_1: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: "form_1",
      width: "320px",
      height: "auto",
      arrow: {
        count: 4,
        direction: "down",
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "200px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 4,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: "x" },
          { textValue: "\\sqrt{\\left(x\\right)}" },
          { textValue: "\\sin\\left(\\sqrt{x}\\right)" },
          { textValue: "\\sqrt{ \\sin\\left(\\sqrt{x}\\right)}" },
          {
            textValue:
              "\\sin\\left(\\sqrt{\\sin\\left(\\sqrt{x}\\right)}\\right)",
          },
        ],
        disabled: true,
      },
      key: {
        defaultText: [
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
        ],
        disabled: false,
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [
        ["x"],
        ["cosleft(xright)"],
        ["cos^2left(xright)"],
        ["sinleft(cos^2left(xright)right)"],
      ],
      key: [
        ["sqrt{left(right)}"],
        ["sinleft(right)"],
        ["sqrt{left(right)}"],
        ["sinleft(right)"],
      ],
    },
  },
  artifact_2: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: "form_1",
      width: "320px",
      height: "auto",
      arrow: {
        count: 4,
        direction: "down",
        size: {
          height: "190px",
        },
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "200px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 4,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: "x" },
          { textValue: "\\sqrt{\\left(x\\right)}" },
          { textValue: "\\exponentialE^{\\sqrt{\\left(x\\right)}}" },
          { textValue: "\\left(e^{\\sqrt{\\left(x\\right)}}\\right)^2" },
          { textValue: "2\\ln\\left(\\exponentialE^{\\sqrt{x}}\\right)" },
        ],
        disabled: true,
      },
      key: {
        defaultText: [
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
        ],
        disabled: false,
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [
        ["x"],
        ["cosleft(xright)"],
        ["cos^2left(xright)"],
        ["sinleft(cos^2left(xright)right)"],
      ],
      key: [
        ["sqrt{left(right)}"],
        ["exponentialE^{left(right)}"],
        ["left(right)^2"],
        ["lnleft(right)"],
      ],
    },
  },
  artifact_3: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: "form_1",
      width: "320px",
      height: "auto",
      arrow: {
        count: 4,
        direction: "down",
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "200px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 4,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: "y" },
          { textValue: "2y" },
          { textValue: "\\ln\\left(y\\right)+\\ln\\left(2\\right)" },
          { textValue: "\\ln\\left(y\\right)" },
          { textValue: "\\exponentialE^{\\ln\\left(y\\right)}" },
        ],
        disabled: true,
      },
      key: {
        defaultText: [
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
        ],
        disabled: false,
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [
        ["x"],
        ["cosleft(xright)"],
        ["cos^2left(xright)"],
        ["sinleft(cos^2left(xright)right)"],
      ],
      key: [
        ["2left(right)", "2cdotleft(right)", "2timesleft(right)"],
        ["lnleft(right)"],
        ["left(right)-lnleft(2right)"],
        ["exponentialE^{left(right)}"],
      ],
    },
  },
  artifact_4: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: "form_1",
      width: "320px",
      height: "auto",
      arrow: {
        count: 4,
        direction: "down",
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "200px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 4,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: "z" },
          { textValue: "2z" },
          { textValue: "\\exponentialE^{2z}" },
          { textValue: "\\exponentialE^{4z}" },
          { textValue: "\\exponentialE^{8z}" },
        ],
        disabled: true,
      },
      key: {
        defaultText: [
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
        ],
        disabled: false,
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [
        ["x"],
        ["cosleft(xright)"],
        ["cos^2left(xright)"],
        ["sinleft(cos^2left(xright)right)"],
      ],
      key: [
        ["2left(right)", "2cdotleft(right)", "2timesleft(right)"],
        ["exponentialE^{left(right)}"],
        ["left(right)^2"],
        ["left(right)^2"],
      ],
    },
  },
  artifact_5: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: "form_1",
      width: "320px",
      height: "auto",
      arrow: {
        count: 4,
        direction: "down",
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "200px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 4,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: "x" },
          { textValue: "x^2" },
          { textValue: "2\\ln\\left(x\\right)" },
          { textValue: "4\\left(\\ln\\left(x\\right)\\right)^2" },
          { textValue: "\\ln4+2\\ln\\ln x" },
        ],
        disabled: true,
      },
      key: {
        defaultText: [
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
        ],
        disabled: false,
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [[""], [""], [""], [""]],
      key: [
        ["left(right)^2"],
        ["lnleft(right)"],
        ["left(right)^2"],
        ["lnleft(right)"],
      ],
    },
  },
  artifact_6: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: "form_1",
      width: "320px",
      height: "auto",
      arrow: {
        count: 4,
        direction: "down",
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "200px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 4,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: "x" },
          { textValue: "x+2" },
          { textValue: "\\exponentialE^x\\cdot\\exponentialE^2" },
          { textValue: "2 + x" },
          { textValue: "\\left(x+2\\right)^{\\frac{1}{2}}" },
        ],
        disabled: true,
      },
      key: {
        defaultText: [
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
          { textValue: `` },
        ],
        disabled: false,
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [[""], [""], [""], [""]],
      key: [
        ["left(right)+2"],
        ["exponentialE^{left(right)}"],
        ["lnleft(right)"],
        ["left(right)^{frac{1}{2}}"],
      ],
    },
  },
  artifact_7: {
    buttonsActive: true,
    arrowUpDown: true,
    characteristicsArtifact: {
      typeForm: "form_5",
      width: "340px",
      height: "320px",
      arrow: {
        count: 2,
        styleArrowUp: "margin-left:1.5rem",
        styleArrowDown: "margin-left:2.5rem",
      },
      typeDiv: [
        {
          rounded: {
            count: 2,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "150px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 2,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    defaultinput: {
      screen: {
        defaultText: [{ textValue: "x" }, { textValue: "x+1" }],
      },
      key: {
        defaultText: [{ textValue: `` }, { textValue: `` }],
        disabled: false,
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [[2], [3]],
      key: [["left(right)+1"], ["left(right)-1"]],
    },
  },
  artifact_8: {
    variableX: "2",
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: "artifactGridSimple",
      width: "320px",
      height: "320px",
      arrow: {
        count: 1,
        direction: "down",
      },
      typeDiv: [
        {
          rounded: {
            count: 2,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "200px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 1,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    defaultinput: {
      screen: {
        defaultText: [{ textValue: "x" }, { textValue: "x+1" }],
        disabled: true,
      },
      key: { defaultText: [{ textValue: `` }] },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [[""], [""]],
      key: [2],
    },
  },
  artifact_9: {
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: "form_6",
      width: "auto",
      height: "auto",
      arrow: {
        count: 2,
        direction: "down",
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
            border: "1px solid black",
            formClas: "rounded",
            inputEnable: true,
            size: {
              width: "150px",
              height: "50px",
            },
          },
        },
        {
          square: {
            count: 2,
            border: "1px solid black",
            formClas: "square",
            inputEnable: true,
            size: {
              width: "100px",
              height: "50px",
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: { textValue: "\\tan\\left(y\\right)=16"},
          size: {
            width: "320px",
            height: "50px",
          },

        },
      },
      {
        solution: {
          defaultText: { textValue: "Solution", disabled: true},
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: "Incógnita" },
          { textValue: "Solución" },
          { textValue: "Fórmula" },
          { textValue: "Valor Final" },
        ],
      },
      key: {
        defaultText: [
          { textValue: `Tecla` },
          {
            textValue: `\\begin{matrix}
      Tecla \\cr
      Inversa
      \\end{matrix}`,
          },
        ],
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      screen: [[""], [""], [""], [""]],
      key: [
        ["left(right)+1"],
        ["exponentialE^{left(right)}"],
        ["frac{1}{left(right)}"],
        [
          "left(right)cdotfrac{1}{exponentialE^{left(x+1right)}}",
          "left(right)timesfrac{1}{exponentialE^{left(x+1right)}}",
        ],
      ],
      equation:[['tanleft(yright)=16']],
      solution:[[2]],
    },
  },
  /*  artifact_9:{
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_4',
      width:'320px',
      height: 'auto',
      arrow: {
        count: 3,
        direction: 'down'
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
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
            count: 3,
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
  
      screen: {defaultText:[{textValue:'x'}, {textValue:'x+1'}, {textValue:'\\exponentialE^{\\left(x+1\\right)}'},{textValue:'\\frac{1}{\\exponentialE^{\\left(x+1\\right)}}'},{textValue:'\\frac{1}{\\exponentialE^{\\left(2 x+2\\right)}}'},] ,disabled:true},
      key:{defaultText:[{textValue:``},{textValue:``},{textValue:``},{textValue:``}],disabled:false}

    },
    conditions: {//\sin\left(\cos^2\left(x\right)\right)
      screen: [[''], [''], [''], ['']],
      key: [['left(right)+1'], ['exponentialE^{left(right)}'], ['frac{1}{left(right)}'], ['left(right)cdotfrac{1}{exponentialE^{left(x+1right)}}','left(right)timesfrac{1}{exponentialE^{left(x+1right)}}']]
    }
  }, */
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
    
  },
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
            {text:`\\text{De esta manera, calcular} \\hspace{4px} e^{sen(5)},\\text{ quiere decir efectuar los pasos I), II) y III) descritos al comienzo.}`},
            {text:`\\text{Con la salvedad de que en I) en vez de marcar 2 hay que marcar 5. Complete:}`}
          ], 
          },
        },
      ]
    }
  },
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
};

generateArtifact(def);
