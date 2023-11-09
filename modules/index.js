// Your code goes here!

import {modulo,percentage,percentageOf,difference} from "./percentage.js";
import {calculateAspectRatio , fixRoundingErrors} from "./aspect-ratio.js";


// const specialOperations = document.getElementById("modulo-form");
// specialOperations.addEventListener("click")
// console.log(specialOperations)


//module
const moduloForm = document.getElementById("modulo-form");
const moduloInput1 = document.getElementById("modulo_1");
const moduloInput2 = document.getElementById("modulo_2");
const moduloResult = document.getElementById("modulo_result");

//percentage-form
const percentageForm = document.getElementById("percentage-form");
const percentageInput1 = document.getElementById("percentage_1");
const percentageInput2 = document.getElementById("percentage_2");
const percentageResult = document.getElementById("percentage_result");

// percentageOf-form
const percentageOfForm = document.getElementById("percentageOf-form");
const percentageOfInput1 = document.getElementById("percentageOf_1");
const percentageOfInput2 = document.getElementById("percentageOf_2");
const percentageOfResult = document.getElementById("percentageOf_result");

// difference-form
const differenceForm = document.getElementById("difference-form");
const differenceInput1 = document.getElementById("difference_1");
const differenceInput2 = document.getElementById("difference_2");
const differenceResult = document.getElementById("difference_result");

// aspect-form
const aspectForm = document.getElementById("aspect-form");
const ratioInput1 = document.getElementById("ratio_1");
const ratioInput2 = document.getElementById("ratio_2");
const ratioWidthResult = document.getElementById("ratio_result-width");
const ratioHeightResult = document.getElementById("ratio_result-height");

//Resource: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
// why there is a 2 addEventListener? 
// In the modulo calculation, both moduloInput1 and moduloInput2 represent independent values.
// Resource: https://forum.freecodecamp.org/t/binding-two-input-elements-together/522282/4

// Event-prepagation
//modulo-form
moduloForm.addEventListener("input",() =>{
    const input1 = moduloInput1.value;
    const input2 = moduloInput2.value;
    const result = modulo(input1, input2);
    moduloResult.value = result;
});

//percentage
percentageForm.addEventListener("input",() =>{
    const input1 = percentageInput1.value;
    const input2 = percentageInput2.value;
    const result = percentage(input1, input2);
    percentageResult.value = result;
})


//percentageOf-form
percentageOfForm.addEventListener("input",() =>{
    const input1 = percentageOfInput1.value;
    const input2 = percentageOfInput2.value;
    const result = percentageOf(input1, input2);
    percentageOfResult.value = result;
});

// difference-form
differenceForm.addEventListener("input",() =>{
    const input1 = differenceInput1.value;
    const input2 = differenceInput2.value;
    const result = difference(input1, input2);
    differenceResult.value = result;
});

// aspect-form
aspectForm.addEventListener("input",() =>{
    const input1 = ratioInput1.value;
    const input2 = ratioInput2.value;
    const input3 = ratioWidthResult.value;
    const valueType = "w"
    
    const result = calculateAspectRatio(input1, input2 , input3 , valueType);
   
    ratioHeightResult.value = result;
});




