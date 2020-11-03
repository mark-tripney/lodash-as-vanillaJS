const _ = {
  clamp(number, lower, upper) {
    /*
    Clamps number within the inclusive lower and upper bounds.
    */
    const lowerComparison = Math.max(number, lower);
    return Math.min(lowerComparison, upper);
  },

  inRange(number, start, end) {
    /*
    Checks if number is between start and up to, but not including, end.
    If end is not specified, it's set to start; start is then set to 0.
    If start is greater than end, the params are swapped to support negative
    ranges.
    */
    if (!end) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    return number < start || number >= end ? false : true;
  },

  words(str) {
    /*
    Splits string into an array of its words.
    A word is defined by a space-separated string of characters, so each space
    character indicates the end of one word and the start of the next.
    Note: This does not (currently) include Lodash's pattern parameter.
    */
    return str.split(' ');
  },

  pad(str, len, char = ' ') {
    /*
    Pads, with char, string on the left and right sides if it's shorter than
    length. Padding characters are truncated if they can't be evenly divided by
    length.
    */
    if (str.length >= len) {
      return str;
    }
    // Get length of padding on left
    let padLeftLen = Math.floor((len - str.length) / 2);
    // Get length of padding on right (it includes any remainder)
    let padRightLen = Math.ceil((len - str.length) / 2);
    // Repeat char as many times as it fits entirely in padLeftLen
    let padLeft = char.repeat(Math.floor(padLeftLen / char.length));
    // Repeat char as many times as it fits, *rounded up*, then slice excess
    let padRight = char
      .repeat(Math.ceil(padRightLen / char.length))
      .slice(0, padRightLen);
    return `${padLeft}${str}${padRight}`;
  },

  has(obj, key) {
    /*
    Checks if object contains a value at the specified key.
    */
    return obj.hasOwnProperty(key);
  },

  invert(obj) {
    /*
    Creates an object composed of the inverted keys and values of object. If
    object contains duplicate values, subsequent values overwrite property
    assignments of previous values.
    */
    const objAsArray = Object.entries(obj);
    objAsArray.map(element => {
      let temp = element[0];
      element[0] = element[1].toString();
      element[1] = temp;
    });

    return Object.fromEntries(objAsArray);
  },
};
