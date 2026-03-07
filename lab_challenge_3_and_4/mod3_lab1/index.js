function getRandomSet(m, n, uniq, sorted) {
    let string = '';
    if (uniq == true){
        string += 'unique values, ';
    }


    if (sorted == true){
        string += 'sort values';
    }

    if (uniq == false && sorted == false){
        string += 'only generate values';
    }

    let retVal = uniq ? new Set() : [];
    let push = (e) => uniq ? retVal.add(e) : retVal.push(e);
    let length = () => uniq ? retVal.size : retVal.length;

    for(;length() < m;) {
        push(Math.floor(Math.random() * Math.floor(n)));
    }

    return `${string} : ${sorted ? [...retVal].sort((n1, n2) => n1 - n2) : [...retVal]}`;
}


console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));  