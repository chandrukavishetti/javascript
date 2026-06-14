import {PI, getCircumference,getArea,getVolumn} from './mathUtil.js';

console.log(PI);
const circutmference=getCircumference(10);
const area=getArea(10);
const volumn=getVolumn(10);

console.log(`${circutmference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volumn.toFixed(2)}cm^3`);