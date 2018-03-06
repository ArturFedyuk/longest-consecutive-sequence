module.exports = function longestConsecutiveLength(array) {
    num = 0;
    count = 1;

    if (array.length < 2) 
    {
        return array.length
    }

    array = array.sort((a, b) => a - b);
    for (i = 1; i < array.length; i++) 
    {
        if ((array[i] - 1 === array[i - 1]) || (array[i] === array[i - 1])) 
        {
            count += array[i] - array[i - 1];
        } else 
        {
            count = 1;
        }
        if (count > num) 
          num = count
    }
    return num
};
