/******  Seccion para convertir las formulas matematicas en latex******/


/* let formula = document.querySelector('#formula')
let latex = document.querySelector('#latex')
let button = document.querySelector('#test')
latex.addEventListener('input', ()=>formula.setValue(latex.value))


function onMathfieldInput() {

    console.clear();
   // console.log('MathJSON expression', formula.expression.json);

    latex.value = formula.value;
}
    
    formula.addEventListener('input', onMathfieldInput);
    onMathfieldInput();
    console.log()

button.addEventListener('click', (e)=>{
   let val = formula.value.replace(new RegExp('/[]/','gi'),"")
   console.log(val, 'aqui esta la cosa')
}) */

let isActiveCounter = false
let targetActive = '';

/*********  FUNCION INICIAL DEL MOTOR  *********/ 

function generateArtifact(def){
    const template = document.querySelector('#template'), mainArtifact = document.querySelector('#mainArtifact');
    let fragment = new DocumentFragment();

    /* Recorre el objeto def de la definicion por cada artefacto que se encuentre dentro de el */

    for (const artifact of Object.keys(def)) {

        /* Caracterizacion del Artefacto tipo: Simple */
        /* Establece las caracteristicas que debe de tener el artifacto por defecto si en la definicion se encuentra un artefacto vacio  */

        let defDefault = {
            dataInteraction:{
                correct : 0,
                incorrect: 0,
                forAnswer:0
            },
            timeInteraction : 0,
            statusValidate: false,
            buttonsActive: def[artifact].buttonsActive || false,
            inputActive: def[artifact].inputActive || false,
            characteristicsArtifact:{
                typeForm: def[artifact]?.characteristicsArtifact?.typeForm || false,
                    arrow:{
                        count: def[artifact]?.characteristicsArtifact?.arrow?.count || 2,
                        direction: def[artifact]?.characteristicsArtifact?.arrow?.direction || false
                    },
                    width: def[artifact]?.characteristicsArtifact?.width || '320px',
                    height: def[artifact]?.characteristicsArtifact?.height || '500px',
                    typeDiv: def[artifact]?.characteristicsArtifact?.typeDiv != undefined ?
                    def[artifact]?.characteristicsArtifact?.typeDiv :
                    [
                        {
                            rounded:{
                                count: 3,
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
                                count: 2,
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
            conditions: def[artifact].conditions || {},
        }

        const clone = template.content.firstElementChild.cloneNode(true);
        clone.setAttribute('data-ejercicio', artifact);

         clone.addEventListener('mouseenter',()=>{
             gTime(def[artifact])
             targetActive = clone.dataset.ejercicio
         });

        clone.addEventListener('mouseleave',()=>{
            gTime(def[artifact], false, false);
            targetActive = '';
        });
        
        def[artifact]={...def[artifact], ...defDefault}
        
        fragment.appendChild(clone);
        
        mainArtifact.appendChild(fragment)
        
        artifactDefault(defDefault, artifact, clone,def[artifact].typeForm, targetActive);
        
    }
 
}

/****** Logica para el manejo de los estado de los botones ******/

function stateButton(artifact, input){
        if(def.inputActive){

        }
        input.addEventListener('keyup', (e)=>{
           
        })
        input.addEventListener("blur", (e) => {
            gTime(def[artifact], false, false);
            isActiveCounter = false
         });
         
         
    
            input.addEventListener('input', (e, updateValue) => {
                if (e.data != null && !isActiveCounter) {
                    isActiveCounter = true
                    def[artifact].statusValidate = false
                    gTime(def[artifact], true)
                }
            
            })
    
            
    
          
    
    
        
    
            input.addEventListener('beforeinput', (e) => {
            const targetRanges = e.getTargetRanges();
           
    })

}

function typeArtifactTemplate(mode = 'easy' || mode){
    let typeMode = [
        {easy:['easy']},
        {multiply:['multiply']}
    ]
    
    Object.values(typeMode).map((typeMode, index) => {
        for (const modit of Object.keys(typeMode)) {
            if(typeMode[modit].includes(mode)){
        
                return `<div>Hola</div>`
            }
        }
    })    

    

}



/****** Funcion que diseña el artefacto por defecto ******/  

function artifactDefault(defDefault, artifact, clone,typeForm, targetActive){
        const formStyle = ['form_1','form_2','form_3']

    let stateChange = false;
    let targetInput = ''
    let screenDivArray = [];
    let keyDivArray = [];
    // let contentDefault= {
    //     screen:[['5'],['sinleft(5right)'],['exponentialE^{sinleft(5right)}']],
    //     key:[['\sin'],['\exponentialE^{\placeholder{}}']]
    // }

    
    
    /* Nota: mejorar la logica de typediv antes estaba negada !def[artifact].characteristicsArtifact.hasOwnProperty('typeDiv') */
    if(def[artifact].characteristicsArtifact.hasOwnProperty('typeDiv')){
 
        if(formStyle.includes(def[artifact].characteristicsArtifact.typeForm)){
            clone.classList.add(`${def[artifact].characteristicsArtifact.typeForm}`);
            
            
        }else{
            clone.classList.add('artifactGrid');
            
            
        }
       
        if(def[artifact].modeDouble){
            for (const [key, value ] of Object.entries(defDefault.characteristicsArtifact.typeDiv)) {
                Object.keys(value).map(type =>{  
    
                    for(countType = 0; countType < value[type].count; countType++){
                        let mathLatex = document.createElement('math-field');
                        mathLatex.setAttribute('virtual-keyboard-mode',"onfocus");
                        mathLatex.classList.add('math','element')
                        mathLatex.setAttribute('data-type', type);
                        mathLatex.style.width = value[type].size.width;
                        mathLatex.style.height = value[type].size.height;
                        mathLatex.style.border = value[type].border;
                        type.match(/rounded/gi) ? 
                        (mathLatex.style.borderRadius = '2rem',
                        mathLatex.classList.add(`rounded-${countType}`,`screenDouble-${countType}`),
                        stateButton(artifact, mathLatex),
                        screenDivArray.push(mathLatex)) : 
                        (mathLatex.style.borderRadius = '0.2rem',
                        mathLatex.classList.add(`square-${countType}`),
                        stateButton(artifact, mathLatex),
                        keyDivArray.push(mathLatex))
                        
                        clone.appendChild(mathLatex);
                        
                       
                    }
                    
                }) 
            }
            if(def[artifact].modeVF){
                
                let input = document.createElement('math-field');
                input.style.border = '1px solid black'
                input.classList.add('math','divInputVF')
                
                        input.value = def[artifact].defaultinput.titleExam
                        input.disabled = true;
                
                clone.appendChild(input);


            }
        }else{
            for (const [key, value ] of Object.entries(defDefault.characteristicsArtifact.typeDiv)) {
                Object.keys(value).map(type =>{  
    
                    for(countType = 0; countType < value[type].count; countType++){
                        let mathLatex = document.createElement('math-field');
                        mathLatex.setAttribute('virtual-keyboard-mode',"onfocus");
                        mathLatex.classList.add('math','element')
                        mathLatex.setAttribute('data-type', type);
                        mathLatex.style.width = value[type].size.width;
                        mathLatex.style.height = value[type].size.height;
                        mathLatex.style.border = value[type].border;
                        type.match(/rounded/gi) ? 
                        (mathLatex.style.borderRadius = '2rem',
                        mathLatex.classList.add(`rounded-${countType}`),
                        stateButton(artifact, mathLatex),
                        screenDivArray.push(mathLatex)) : 
                        (mathLatex.style.borderRadius = '0.2rem',
                        mathLatex.classList.add(`square-${countType}`),
                        stateButton(artifact, mathLatex),
                        keyDivArray.push(mathLatex))
                        
                        clone.appendChild(mathLatex);
                        
                       
                    }
                }) 
            }

        }

        
        if(def[artifact].hasOwnProperty('defaultinput')){
            
            screenDivArray.map((math, index) =>{
                if(def[artifact].defaultinput.screen[index] !== ''){
                    math.disabled = true;
                    math.value = def[artifact].defaultinput.screen[index];
                }
            })
            if(def[artifact].defaultinput.hasOwnProperty('key')){
                keyDivArray.map((math, index)=>{
                    if(def[artifact].defaultinput.key[index] !== ''){
                        math.disabled = true;
                    math.value = def[artifact].defaultinput.key[index];
                    }
                })
               
            }

                /* if(def[artifact].defaultinput.key !== undefined || ''){
                    console.log(math)
                    math.disabled = true;
                    math.value = def[artifact].defaultinput.key[index];
                } */
            
           
        }
        
        if(def[artifact].arrowUpDown){
            for(countArrow = 0; countArrow < def[artifact].characteristicsArtifact.arrow.count; countArrow++){
                let arrow = document.createElement('div');
                    if(countArrow === 4 || countArrow === 5 || countArrow === 6 || countArrow === 7){
                        arrow.classList.add('arrowUp'), 
                        arrow.setAttribute('data-type', 'arrow-up'),
                        arrow.classList.add(`arrowD-${countArrow}`) 
                    }else{
                        arrow.classList.add('arrowDown'), 
                        arrow.setAttribute('data-type', 'arrow-down'), 
                        arrow.classList.add(`arrowD-${countArrow}`)
                    }
                    clone.appendChild(arrow)
                }
        }else{
            if(defDefault.characteristicsArtifact.hasOwnProperty('arrow')){
                for(countArrow = 0; countArrow < defDefault.characteristicsArtifact.arrow.count; countArrow++){
                let arrow = document.createElement('div');
                def[artifact].characteristicsArtifact.arrow.direction == 'down' ?
                (arrow.classList.add('arrowDown'), 
                arrow.setAttribute('data-type', 'arrow-down'), arrow.classList.add(`arrowD-${countArrow}`)) : 
                (arrow.classList.add('arrowUp'), 
                arrow.setAttribute('data-type', 'arrow-up'),arrow.classList.add(`arrowD-${countArrow}`) )
                clone.appendChild(arrow)
    
                }
            }
            
        }

        
        

        clone.style.width = defDefault.characteristicsArtifact.width
        clone.style.height = defDefault.characteristicsArtifact.height 
        clone.style.margin = '8px'
        def[artifact].characteristicsArtifact.border != undefined ?
        def[artifact].characteristicsArtifact.border : clone.classList.add('borderDefault')
        contenedor.appendChild(clone)
        divControllerButton(clone, screenDivArray, keyDivArray, def, artifact)
    }else{
      
    }  

}

/****** Funcion de la logica de los botones de validar y resetear ******/  

function divControllerButton(clone, screenDivArray, keyDivArray, def, artifact, targetInput){
    let formatLatex = /[\\]/gi;
    let divControllerButton = document.createElement('div');
    let buttonValidate = document.createElement('button');
    let buttonReset = document.createElement('button');
    divControllerButton.classList.add('divControllerButton');
    buttonValidate.classList.add('check', 'buttonPrimary', 'button-marg', 'buttonKey');
    buttonReset.classList.add('reset', 'buttonSecundary', 'button-marg', 'buttonKey');
    
    buttonValidate.addEventListener('click', ()=>{
            
            def[artifact].dataInteraction.correct = 0;
            def[artifact].dataInteraction.incorrect = 0;
            def[artifact].dataInteraction.forAnswer = 0;

            if(targetInput !== undefined || null){
                if(targetInput.value !== ''){

                   if(def[artifact].conditionsVF.quest.includes(targetInput.value.toLowerCase())){
                        targetInput.classList.add('pass')
                        targetInput.setAttribute('data-pass','pass')
                        targetInput.classList.remove('failed')
                        targetInput.removeAttribute('data-failed')  
                        targetInput.removeAttribute('data-forAnswer')        
                        def[artifact].dataInteraction.correct++
                   }else{
                    targetInput.classList.add('failed')
                    targetInput.setAttribute('data-failed','failed')
                    targetInput.classList.remove('pass')
                    targetInput.removeAttribute('data-pass')
                    targetInput.removeAttribute('data-forAnswer')        
                    def[artifact].dataInteraction.incorrect++

                }
                }else{
                    targetInput.setAttribute('data-forAnswer','forAnswer')
                    targetInput.removeAttribute('data-pass')
                    targetInput.removeAttribute('data-failed')        
                    targetInput.classList.remove('pass')
                    targetInput.classList.remove('failed')
                    def[artifact].dataInteraction.forAnswer++
                } 
                
                sendData(cleanDataEngine(def[artifact],targetActive));
            }else{
                screenDivArray.map((math, index )=>{
                    if(math.getAttribute('disabled') !== ''){
                        
                        
                        if(math.value !== ''){
                            
                            if(def[artifact].conditions.screen[index].includes(math.value.replace(new RegExp(formatLatex), ""))){        
                                math.classList.add('pass')
                                math.setAttribute('data-pass','pass')
                                math.classList.remove('failed')
                                math.removeAttribute('data-failed')  
                                math.removeAttribute('data-forAnswer')        
                                def[artifact].dataInteraction.correct++
                            
                                
                                
                            }else{
                                math.classList.add('failed')
                                math.setAttribute('data-failed','failed')
                                math.classList.remove('pass')
                                math.removeAttribute('data-pass')
                                math.removeAttribute('data-forAnswer')        
                                def[artifact].dataInteraction.incorrect++
            
                            }
                            
                            
                        }else{
                            math.setAttribute('data-forAnswer','forAnswer')
                            math.removeAttribute('data-pass')
                            math.removeAttribute('data-failed')        
                            math.classList.remove('pass')
                            math.classList.remove('failed')
                            def[artifact].dataInteraction.forAnswer++
                        } 
                       
                       // sendData(cleanDataEngine(def[artifact],targetActive));
                    }
                    
                    
                })
    
                keyDivArray.map((math, index )=>{
                    
                    if(math.getAttribute('disabled') !== ''){
                    
    
                        if(math.value != ''){
                      
                            if(def[artifact].conditions.key[index].includes(math.value.replace(new RegExp(formatLatex), ""))){        
                                math.classList.add('pass')
                                math.setAttribute('data-pass','pass')
                                math.classList.remove('failed')
                                math.removeAttribute('data-failed')  
                                math.removeAttribute('data-forAnswer')        
                                def[artifact].dataInteraction.correct++
                            
                                
                                
                            }else{
                                math.classList.add('failed')
                                math.setAttribute('data-failed','failed')
                                math.classList.remove('pass')
                                math.removeAttribute('data-pass')
                                math.removeAttribute('data-forAnswer')        
                                def[artifact].dataInteraction.incorrect++
            
                            }
                            
                            
                        }else{
                            math.setAttribute('data-forAnswer','forAnswer')
                            math.removeAttribute('data-pass')
                            math.removeAttribute('data-failed')        
                            math.classList.remove('pass')
                            math.classList.remove('failed')
                            def[artifact].dataInteraction.forAnswer++
                        }
                        
                        
                    }
                    
                    
                    
                })
                sendData(cleanDataEngine(def[artifact],targetActive));

            }
      
        gTime(def[artifact], false)
        def[artifact].statusValidate = true
            
        })

    buttonReset.addEventListener('click', ()=>{
                
        screenDivArray.map((math, index )=>{
            if(math.getAttribute('disabled') !== null){
                
            }else{
                if(math.value != ''){
                    math.value = ''
                    math.classList.remove('pass')
                    math.classList.remove('failed')
                    def[artifact].dataInteraction.correct=0
                    def[artifact].dataInteraction.incorrect=0
                    def[artifact].dataInteraction.forAnswer=0
                }
            }
            
        })
        keyDivArray.map((math, index )=>{
            if(math.getAttribute('disabled') !== null){
                
            }else{
                if(math.value != ''){
                    math.value = ''
                    math.classList.remove('pass')
                    math.classList.remove('failed')
                    def[artifact].dataInteraction.correct=0
                    def[artifact].dataInteraction.incorrect=0
                    def[artifact].dataInteraction.forAnswer=0
                }
            }
            
        })
        sendData(cleanDataEngine(def[artifact],targetActive));

    })
        divControllerButton.appendChild(buttonReset)
        divControllerButton.appendChild(buttonValidate)
        clone.appendChild(divControllerButton)
        
}
function cleanDataEngine(def,targetActive){
    let auxResult = {}
    auxResult = {results:def.dataInteraction}
    auxResult.artifact =  Number(targetActive.split("_").at(-1));
    auxResult.typeArtifact = "Standard";
    auxResult.seconds = def.timeInteraction;
   auxResult.idMoodle = !targetActive.debug ? $idMoodle : "debug";
  
    return auxResult

}