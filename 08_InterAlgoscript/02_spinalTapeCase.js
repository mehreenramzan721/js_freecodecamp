function spinalCase(str) {
  
  const spaced = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  
  const words = spaced.split(/[\s_-]+/);
  
  return words.map(word => word.toLowerCase()).join('-');
}