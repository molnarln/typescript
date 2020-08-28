var array = ["abc"];
array[123] = null;
console.log(array.length);
array.forEach((v, i)=>console.log(`Az elemek: value: ${v}, index: ${i}`));