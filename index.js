// Code your solution in this file
function findMatching(array, query){
  let result=[]
  for (thing of array){
    if (thing.toLowerCase() == query.toLowerCase()){
      result.push(thing)
    }
  }
  return result
}

function fuzzyMatch(array, query){
  let result=[]
  for (thing of array){
    if (thing.startsWith(query)){
      result.push(thing)
    }
  }
  return result
}

function matchName(object, query){
  let result =[]
  for (person of object){
    let nameruni = person['name']
    if ( nameruni.toLowerCase() === query.toLowerCase()){
      result.push(person)
    }
  }
  return result
}
