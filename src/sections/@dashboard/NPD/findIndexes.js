
const array = [
    {
      name: "John",
      age: 25,
    },
    {
      name: "Jane",
      age: 27,
    },
    {
      name: "Mike",
      age: 30,
    },
  ];
  
/* find index */

function findIndex(array, property, value){
    for(var i=0; i<array.length; i++){
        if (array[i][property] === value ) {
            return i;
            
        }
        
    }
    return -1
}

const index = findIndex(array, "age", 30);  // 0



/* find indexes */
  const findValue = (name) => {
    const indexes = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        indexes.push(i);
      }
    }
    return indexes;
  };
  
  const indexes = findValue("John");
  console.log(indexes); // [0]

  

