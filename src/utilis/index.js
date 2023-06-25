//we can reuse these function across our application

import {surpriseMePrompts} from '../constants/index'


export function getRandomPrompt(prompt){
 
    const randomIndex=Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //check to not getting same pictures twice in a row
    if(randomPrompt === prompt ) return getRandomPrompt(prompt)

    return randomPrompt;
}