const myObject = {
    js:'Javascript',
    cpp:'C++',
    rb:'ruby'
}
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js","cpp","rb","oops"]
for(const key in programming){
    // console.log(programming[key]);
}







const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
// console.log(map)
for(const key in map){
    console.log(key);
}