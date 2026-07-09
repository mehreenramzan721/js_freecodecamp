function titleCase(str) {
  let sp = str.toLowerCase().split(' ');
  for (let i = 0; i < sp.length; i++) {
    sp[i] = sp[i].charAt(0).toUpperCase() + sp[i].slice(1);
  }
  return sp.join(' ');
}

titleCase("I'm a little tea pot");