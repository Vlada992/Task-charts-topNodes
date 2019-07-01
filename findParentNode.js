
  var flat =[{ id: 4, parent_id: 1}, { id:1, parent_id:200}, {id:200, parent_id:220}]

  
  // Create root for top-level node(s)


  function findTopNode(flatArr){
      let flatSampple =[ {id:4, parent_id:15}, {id:2,parent_id:15} ]
      if(flatArr.constructor !== Array){
          alert(`You should add Array Object instead ${flatArr.constructor}`)
          flatArr = flatSampple;
          return flatArr;
      }else if( flatArr.constructor === Array && flatArr.length === 0 ){
        alert(`Array length should be more than ${flatArr.length}`)
        flatArr = flatSampple
        return flatArr
      }else {
       
    var root = [];

  flatArr.forEach(node => {
    if (node.parent_id === null) return root.unshift(node);

    const parentIndex = flatArr.findIndex(el => el.id === node.parent_id); 
    if(parentIndex == -1) return root.push(node)
    if (!flatArr[parentIndex].children) {
      return flatArr[parentIndex].children = [node];
    }
    
    flatArr[parentIndex].children.push(node);
  });
  return root

}
};

  //console.log("resenje:",findTopNode([]));

