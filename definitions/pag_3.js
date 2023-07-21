let def = {
    artifact_1: {
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
      
          screen: {defaultText:[
            {textValue:'x', disabled:true},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},] },
          key:{defaultText:[{textValue:`2.()`},{textValue:`sen()`},{textValue:`3.()`},{textValue:`2+()`}],disabled:true}
    
        },
        conditions: {//\sin\left(\cos^2\left(x\right)\right)
          screen: [[''],
           ['2.x'],
           ['senleft(2.xright)'], 
           ['3.left(senleft(2.xright)right)'],
           ['2+3.left(senleft(2.xright)right)']],
          key: [[''], [''], [''], ['']]
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
        
            screen: {defaultText:[
                {textValue:'y', disabled:true},
                {textValue:'',disabled:false},
                {textValue:'',disabled:false},
                {textValue:'',disabled:false},
                {textValue:'',disabled:false},] },
            key:{defaultText:[{textValue:`3.()`},{textValue:`()+1`},{textValue:`sen()`},{textValue:`()+1`}],disabled:true}
        
            },
            conditions: {
            screen: [[''], ['3.y'], ['3.y+1'], ['senleft(3.y+1right)'], ['senleft(3.y+1right)+1']],
            key: [[''], [''], [''], ['']]
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
      
          screen: {defaultText:[
            {textValue:'#', disabled:true},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},] },
          key:{defaultText:[{textValue:`3.()`},{textValue:`()-1`},{textValue:`Ln()`},{textValue:`()+0.5`}],disabled:true}
    
        },
        conditions: {
          screen: [[''], ['3.#'], ['3.#-1'], ['lnleft(3.#-1right)'], ['lnleft(3.#-1right)+0.5']],
          key: [[''], [''], [''], ['']]
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
      
          screen: {defaultText:[
            {textValue:'s', disabled:true},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},] },
          key:{defaultText:[{textValue:`()+1`},{textValue:`0,3.()`},{textValue:`sen()`},{textValue:`()+1`}],disabled:true}
    
        },
        conditions: {
          screen: [[''], ['s+1'], ['0,3.s+1'], ['senleft(0,3.s+1right)'],['senleft(0,3.s+1right)+1']],
          key: [[''], [''], [''], ['']]
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
      
          screen: {defaultText:[
            {textValue:'h', disabled:true},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},] },

          key:{defaultText:[{textValue:`tang()`},{textValue:`()^{-1}`},{textValue:`sen()`},{textValue:`cos()`}],disabled:true}
    
        },
        conditions: {
          screen: [[''], ['tan gleft(hright)'],
            ['tan gleft(hright)^{-1}'],
            ['senleft(tan gleft(hright)^{-1}right)'],
            ['cosleft(senleft(tan gleft(hright)^{-1}right)right)']],
          key: [[''], [''], [''], ['']]
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
      
          screen: {defaultText:[
            {textValue:'x', disabled:true},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},] },

          key:{defaultText:[
            {textValue:`()^2`},{textValue:`()^{-1}`},{textValue:`-1.()`},{textValue:`e^{()}`}],disabled:true}
    
        },
        conditions: {
          screen: [['x'], 
             ['x^2'],
            ['left(x^2right)^{-1}'],
            ['-1left(x^2right)^{-1}'],
            ['e^{-1left(x^2right)^{-1}}']],
          key: [[''], [''], [''], ['']]
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
      
          screen: {defaultText:[
            {textValue:'x^3', disabled:true},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},] },

          key:{defaultText:[
            {textValue:`sen()`},{textValue:`ln()`},{textValue:`().(-5)`},{textValue:`e^{()}`}],disabled:true}
    
        },
        conditions: {
          screen: [['x'], 
             ['senleft(x^3right)'],
            ['lnleft(senleft(x^3right)right)'],
            ['lnleft(senleft(x^3right)right).-5'],
            ['e^{lnleft(senleft(x^3right)right).-5}']],
          key: [[''], [''], [''], ['']]
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
      
          screen: {defaultText:[
            {textValue:'u^2', disabled:true},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},
            {textValue:'',disabled:false},] },

          key:{defaultText:[
            {textValue:`()^{-1}`},{textValue:`()+1`},{textValue:`()^{-1}`},{textValue:`()+1`}],disabled:true}
    
        },
        conditions: {
          screen: [[''], 
             ['left(u^2right)^{-1}'],
            ['left(u^2right)^{-1}+1'],
            ['left(left(u^2right)^{-1}+1right)^{-1}'],
            ['left(left(u^2right)^{-1}+1right)^{-1}+1']],
          key: [[''], [''], [''], ['']]
        }
   },

} 

    
    generateArtifact(def)