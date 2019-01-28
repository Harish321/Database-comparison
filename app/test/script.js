

// var a = [2,4,8,16]

// function rec(array){
//     let localArray = array.slice();
//     // console.log(localArray.splice(0,1));
//     // console.log(localArray);
//     // console.log(array);
//     if (array.length <=0)
//         return [0,0]
//     localArray.splice(0,1);
//     var v = rec(localArray);
//     let sum1 = array[0]+ v[0];
//     var v1 = rec(localArray);
//     let sum2 = v[1];
//     var temp = [];
//     temp.push(sum1);
//     temp.push(sum2);
//     console.log(temp);
//     return temp;
// }
// rec(a);


var arr = [2,4,8,16,32,64,128,256,512,1024];

function generatePowerSet(array) {
  var result = {};
  result = {"0":{"2":false,"4":false,"8":false,"16":false,"32":false,"64":false,"124":false,"256":false,"512":false,"1024":false}}

  for (var i = 1; i < (1 << array.length); i++) {
    var tempSum = 0;
    var map = {};
    for (var j = 0; j < array.length; j++){
      if (i & (1 << j)){
        tempSum = tempSum+array[j]
        map[array[j].toString()] = true;
      }
      else{
        map[array[j].toString()] = false;
      }
    }
    result[tempSum.toString()] = map;
  }

  return result;
}
dataSet = generatePowerSet(arr)
classMap = {};
for (var i=0;i<arr.length;i++){
    j = arr[i];
    classMap[j.toString()] = [];
Object.keys(dataSet).forEach(function (key) {
    if (dataSet[key][j.toString()]){
        classMap[j.toString()].push(key);
    }
 });
}

console.log(classMap);
// map = {};
// for (i=0;i<finalSet.length;i++){
//     let tempSum = 0;
//     if (finalSet[i].length <= 0){
//         map[0] = [0];
//         continue;
//     }
//     for (j=0;j<finalSet[i].length;j++){
//         tempSum = tempSum + finalSet[i][j];
//     }
//     map[tempSum] = finalSet[i];
// }