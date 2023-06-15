//import fetch from "node-fetch";

//Elements(arr,obj,str,url) to use on the functions
//1 and 2 
const decad = [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010];
//3
const array1 = ["cat", "dog", "horse"];
const array2 = ["turtle", "elephant"];
//4 and 6
const numers = [1, 6, 15, 23, 5, 2, 32, 10, 2, 43, 76, 0, 4, 2, 1, 8, 54, 23];
//5
const stringToCheck = "This function must return the number of times the element appears in the string received";
//7
const url = "https://storage.googleapis.com/mm-tse-latam/orders.json";
//8
const arrayObj1 = ["Name", "Address", "Zip Code", "Phone"];
const arrayObj2 = [["Manuel", "Street 01", "00414010", "999918888"], ["Maria", "Street 02", "00414015", "998818877"], ["Eduardo", "Street 03", "02614010", "974640566"]];

//functions
function arrayPosition(array) {
  // Return the fifth item of the array received as parameter
  console.log(array[4]);
  return array[4];
}

function arraySize(array) {
  // Return the size of the array received as parameter
  let arraySize = array.length - 1;
  console.log(arraySize);
  return arraySize;
}

function arrayMerge(array1, array2) {
  // Return one array with all elements from array1 and all elements from array2 
  // received as parameters in the function
  // Example: array1 = ["cat", "dog", "horse"] array2 = ["turtle", "elephant"]
  // Output = ["cat", "dog", "horse", "turtle", "elephant"]
  console.log(array1.concat(array2));
  return array1.concat(array2);
}

arrayMerge(array1, array2);

function arrayChange(array) {
  // Receive an array of numbers and return an array with the same numbers, but as strings.
  let arrayToString = array.map(arrayNum => {
    return String(arrayNum);
  });
  console.log(arrayToString);
  return arrayToString;
}

function loopConditional(string, element) {
  // This function must return the number of times the element appears in the string received
  // Example: String: "today I woke up" element: "o" result: 2
  // lowercase in case some letter is on uppercase
  let lowerString = string.toLowerCase();
  let appearLetter = lowerString.split(element.toLowerCase()).length - 1;
  console.log(appearLetter);
  return appearLetter;
}

function sortItOut(array) {
  // This function should receive an array of numbers that is out of order,  
  // and sort it from smallest to largest without using the sort() function.
  // Sample array to use as test: [1,6,15,23,5,2,32,10]
  // Output: [1,2,5,6,10,15,23,32]
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // value - 1 for the loop
      // exchange of positions from the equals on [j] + 1 in case the next is higher than the first [j]
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(array);
  return array;
}

const objectData = async (url) => {
  // This function should be able to do the following:
  // 1) Capture the information from the url received as parameter (JSON file)
  // 1.1) url to be used as test: https://storage.googleapis.com/mm-tse-latam/orders.json
  // 2) Write a code that can verify the value of all products, and:
  // 3) Return the NAME of the product with the highest price. p.s.: (The NAME of the product is the 'product' parameter of the JSON file)
  try {
    const response = await fetch(url, {
      'mode': 'no-cors',
      'headers': {
        'Access-Control-Allow-Origin': '*'
      }
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    let result = await response.json();
    let jsonProducts = result;

    // sort with highest prices and check values
    const sortArray = (arr) => {
      let prop = "price";
      let orderProduct = [...arr].sort((a, b) => {
        if (a[prop] == b[prop]) {
          return 0;
        } else if (a[prop] < b[prop]) {
          return 1;
        } else if (a[prop] > b[prop]) {
          return -1;
        }
      });
      return result = orderProduct;
    };
    sortArray(result);

    // push and return/log name product with highest price
    for (let i = 0; i < result.length; i++) {
      if (result[0].price === result[i].price) {
        console.log(result[i].product);
        return result = result[i].product;
      }
    }
    return result;
  } catch (e) {
    console.log(`Error :${e}`);
  }
};
objectData(url);

function arrayToObject(array1, array2) {
  // This function should receive 2 arrays, and transform it into a single object, similar to columns and rows of a spreadsheet
  // Esta función debe recibir 2 matrices y transformarla en un solo objeto, similar a las columnas y filas de una hoja de cálculo
  // Sample array1: ["Name", "Address","Zip Code","Phone"]
  // Sample array2: [["Manuel", "Street 01", "00414010","999918888"],["Maria", "Street 02", "00414015","998818877"],["Eduardo", "Street 03", "02614010","974640566"]]
  // Sample expected output: [{Name: "Manuel", Address: "Street 01", Zip Code: "00414010", Phone: "999918888"},{Name: "Maria", Address: "Street 02"...}]
  let newArray = [];
  const [keysName, keyAdress, keyZip, keyPhone] = [array1[0], array1[1], array1[2], array1[3]];

  // transform array to object and key
  for (let i = 0; i < array2.length; i++) {
    let objArray = Object.assign({}, array2[i]);

    objArray = {
      [keysName]: objArray[0],
      [keyAdress]: objArray[1],
      [keyZip]: objArray[2],
      [keyPhone]: objArray[3]
    };
    newArray.push(objArray);
  }

  console.log(newArray);

  return newArray;
}

arrayPosition(decad);
arraySize(decad);
arrayChange(numers);
loopConditional(stringToCheck, "E");
sortItOut(numers);
/*objectData(url);*/
arrayToObject(arrayObj1, arrayObj2);
//module.exports =  {arrayPosition,arraySize,arrayMerge,arrayChange,loopConditional,sortItOut,objectData,arrayToObject}
