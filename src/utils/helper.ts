export const getSlugFromUrl = (url: string) => {
    const urlObject = new URL(url);
    return (urlObject.pathname == '/') ? 'home' : urlObject.pathname.replace(/(^\/|\/$)/g, '');
}
export const htmlSpecialcharsDecode = (text: string): string => {
    if (text === undefined || text === null) {
      return '';
    }
  
    const map: Record<string, string> = {
      '&amp;': '&',
      '&#038;': '&',
      '&nbsp;': ' ',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#039;': "'",
      '&#8217;': '’',
      '&#8216;': '‘',
      '&#8211;': '–',
      '&#8212;': '—',
      '&#8230;': '…',
      '&#8221;': '”',
    };
  
    return text.replace(/\&[\w\d\#]{2,5}\;/g, (m) => map[m] ?? m);
  }