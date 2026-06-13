//Date(year,month,day,hour,minutes,second,ms)
//const date=new Date(2026,0,1,2,3,4,5);
// const date=new Date();
// console.log(date);

const date=new Date();
const year=date.getFullYear();
const month=date.getMonth();
const day=date.getDate();
const hour=date.getHours()
const minutes=date.getMinutes();
const seconds=date.getSeconds();
const dayOfWeek=date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);
