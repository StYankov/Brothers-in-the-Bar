
Array.prototype.removeRange = function(startIndex, endIndex) {
    if(startIndex >= this.length || endIndex >= this.length) {
        console.warn('Out of range exception', startIndex, endIndex, this.length);
        return this;
    }
    return this.slice(0, startIndex).concat(this.slice(endIndex + 1));
}

function brothersInTheBar(arr) {
    let i = 0;
    let counter = 0;

    if(!hasUniqueValues(arr)) {
        console.log(Math.floor(arr.length / 3));
        return;
    }

    while( i < arr.length ) {
        if( i + 2 >= arr.length ) break; // We cannot get 3 elements, so break
        
        const num1 = arr[i];
        const num2 = arr[i+1];
        const num3 = arr[i+2];

        if( (num1 === num2) && (num2 === num3) ) {
            // remove the three elements and increase counter
            arr = arr.removeRange(i, i + 2);
            counter++;

            i = Math.max(-1, i - 3);
        }

        i++;
    }
    console.log(counter);
}

function hasUniqueValues(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i+1]) return true;
    }
    return false;
}