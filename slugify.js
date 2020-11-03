function slugify(text) {
  text = text.toString().toLowerCase().trim();

  const sets = [
    {to: 'a', from: '[а]'},
    {to: 'c', from: '[б]'},
    {to: 'd', from: '[д]'},
    {to: 'e', from: '[е]'},
    {to: 'e', from: '[э]'},
    {to: 'g', from: '[ĜĞĢǴ]'},
    {to: 'h', from: '[ĤḦ]'},
    {to: 'i', from: '[и]'},
    {to: 'j', from: '[Ĵ]'},
    {to: 'ij', from: 'ж'},
    {to: 'k', from: '[к]'},
    {to: 'l', from: '[л]'},
    {to: 'm', from: '[м]'},
    {to: 'n', from: '[н]'},
    {to: 'o', from: '[о]'},
    {to: 'oe', from: 'ё'},
    {to: 'p', from: '[п]'},
    {to: 'r', from: '[р]'},
    {to: 's', from: '[с]'},
    {to: 's', from: '[ш]'},
    {to: 's', from: '[щ]'},
    {to: 't', from: '[т]'},
    {to: 'tj', from: '[ч]'},
    {to: 'ts', from: '[ц]'},
    {to: 'u', from: '[у]'},
    {to: 'u', from: '[ю]'},
    {to: 'w', from: '[во]'},
    {to: 'x', from: '[х]'},
    {to: 'y', from: '[й]'},
    {to: 'ya', from: '[я]'},
    {to: 'z', from: '[з]'},
    {to: '', from: '[ъ]'},
    {to: 'y', from: '[ы]'},
    {to: '', from: '[ь]'},
    // {to: '', from: '[э]'},
    {to: '-', from: '[·/_,:;\']'}
  ];

  sets.forEach(set => {
    text = text.replace(new RegExp(set.from,'gi'), set.to)
  });

  return text
    .replace(/\s+/g, '-')    // Replace spaces with -
    .replace(/[^-a-zа-я\u0370-\u03ff\u1f00-\u1fff]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-')    // Replace multiple - with single -
    .replace(/^-+/, '')      // Trim - from start of text
    .replace(/-+$/, '')      // Trim - from end of text
}
