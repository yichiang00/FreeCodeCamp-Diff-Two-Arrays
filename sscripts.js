
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var allItem=arr1.concat(arr2);
  allItem.sort();
  console.log(allItem);
  for (var i = 0; i < allItem.length; i++) {
    var result=allItem;
    if(allItem[i]>allItem[i-1]&&allItem[i]<allItem[i+1])
    {
      console.log(i);
      console.log(allItem[i]);
      newArr.push(allItem[i]);
    }
  }

  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
