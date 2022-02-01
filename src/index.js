module.exports = function toReadable (number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = [0, 0, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let x = [];
    let res = [];
    let y;
    x = String(number).split('')
    let res1 = Number(x.slice(-2).join(''));
    if (number < 20) {
        res.push(arr1[number]); 
    } else if (number >= 20 && number < 100) {
        if (x[1] == 0) {
            res.push(arr2[Number(x[0])]);
        } else {
        res.push(arr2[Number(x[0])]);
        res.push(arr1[Number(x[1])]);
        }
    }
    if (number >= 100) {
        if (res1 < 20 && x[1] == 0 && x[2] == 0) {
        res.push(arr1[Number(x[0])]);
        res.push('hundred');
        } else if  (res1 < 20 && x[1] == 0) {
            res.push(arr1[Number(x[0])]);
            res.push('hundred');
            res.push(arr1[Number(x[2])]);
        }  else if (res1 < 20) {
            res.push(arr1[Number(x[0])]);
            res.push('hundred');
            res.push(arr1[res1]);
        } else if (x[2] == 0) {
            res.push(arr1[Number(x[0])]);
            res.push('hundred');
            res.push(arr2[Number(x[1])]);
        } else {
            res.push(arr1[Number(x[0])]);
            res.push('hundred');
            res.push(arr2[Number(x[1])]);
            res.push(arr1[Number(x[2])]);
        }
    }
    y = res.join(' '); 
    return y;
  }     




