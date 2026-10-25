let height = undefined;
let result;

function checkUndefind(value){
    if(value===undefined){
        result = "Height is not defined";
    }
    return result;
}
checkUndefind(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
