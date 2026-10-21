export function romanToInteger(str) {
    let result = 0;
    const values = {
     'I': 1,
     'V': 5,
     'X': 10,
     'L': 50,
     'C': 100,
     'D': 500,
     'M': 1000
	};
	for (let i=0;i<str.length;++i){
		const curVal = values[str[i]];
		const nextVal = values[str[i+1]];
		
		if (nextVal && (curVal < nextVal)){
			result -= curVal;
		}
		else{
			result += curVal;
		}
	}
  
    return result;
}
