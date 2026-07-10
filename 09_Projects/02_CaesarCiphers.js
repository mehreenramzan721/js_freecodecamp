function rot13(str) {
  return str.replace(/[A-Z]/g, function(char) {
    const code = char.charCodeAt(0) - 65; // A = 0, B = 1, ... Z = 25
    const shifted = (code + 13) % 26;
    return String.fromCharCode(shifted + 65);
  });
}

rot13("SERR PBQR PNZC");