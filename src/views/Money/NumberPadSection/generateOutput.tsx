// type InputString = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '删除' | '.' | '清空'

const generateOutput = (text: string, output: string) => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0') {
        return text;
      } else {
        return output + text;
      }
    case '.':
      if (output.indexOf('.') >= 0) return output;
      return output + '.';
    case '删除':
      if (output.length === 1) {return '';} else {
        return output.slice(0, -1) || '';
      }
    case '清空':
      return '';
    default:
      return '';
  }
};
export {generateOutput};
