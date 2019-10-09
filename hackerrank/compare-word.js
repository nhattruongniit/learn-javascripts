// s = "145/12/42/42 tô hiến thành quận 10"
// trả về 1 hàm 
// ['145","/", "12","/","42,","/","42","Tô hiến thành quận",""10]

var s = ' 146/1A Nguyễn Chế Nghĩa quận 8';


function name(string){
  var reg = /[0-9]*\d/g;
  
  var splited = string.trim().split(' ');
  console.log(splited);
  
  var joined = splited.reduce((acc, cur)=>{
    reg.test(cur)?
      acc.push(cur):
      reg.test(acc[acc.length-1])?
        acc.push(cur):
        acc[acc.length-1] += (" " + cur);
    return acc;
  },[]);
  console.log(joined);
  
  var splitedNumber = joined.map((val)=>{
    if(!reg.test(val)) return val;
    
    var listNumber = val.match(reg);
    var splited = val.replace(reg,"00").split("0");
    
    !splited[splited.length-1] && splited.pop();
    !splited[0] && splited.shift();
    
    return splited.reduce((acc,cur)=>{
      acc.push(!cur ? listNumber.shift() : cur);
      return acc;
    },[]);
  });
  console.log(splitedNumber);
  
  return splitedNumber.reduce((acc,val)=>{
    reg.test(val)? acc.push(...val): acc.push(val); 
    return acc},[])
  
  
}
console.log(name(s));

//[146,/,1,A, NGuyễn Chế Nghĩa quận, 8]