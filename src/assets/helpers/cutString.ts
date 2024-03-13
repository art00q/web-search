function cutString(string: string, maxLength: number, endingChar?: string) {
  let cuttedString = string;

  if (cuttedString.length > maxLength) {
    cuttedString = cuttedString.substring(0, maxLength);

    if (endingChar) {
      cuttedString += endingChar;

      return cuttedString
    }

    cuttedString += '...';
  }

  return cuttedString;
}

export default cutString;
