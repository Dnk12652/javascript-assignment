function CreateObject(arr) {
    var dic = {}
    for (var i=0;i<arr.length;i+=2){
        dic[arr[i]]=arr[i+1]
    }
    return dic
  
    // Write your code here
} 

module.exports = CreateObject;
