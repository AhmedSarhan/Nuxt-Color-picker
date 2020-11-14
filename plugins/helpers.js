// this file isn't for deployment and was left on purpose for referral

// copy to clipboard
function adjust(color, amount) {
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, (color) =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}

// messages on copy
copiedMessages = [
  'COPIED!',
  'PANDA STYLE!',
  'GOT IT!',
  'PASTE ME!',
  "IT'LL ROCK!",
];

// conver hex to rgb
function hexToRgb(hex) {
  var res = hex.match(/[a-f0-9]{2}/gi);
  return res && res.length === 3
    ? res.map(function (v) {
        return parseInt(v, 16);
      })
    : null;
}
function convertHex(color) {
  color = color.replace('#', '');
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);
  let result = 'rgba(' + r + ',' + g + ',' + b + ',' + this.opacity / 100 + ')';
  return result;
}
var hexColors = [
  '#ffffff',
  '#ffffff',
  '#ffffff',
  '#f3f3f3',
  '#f3f3f3',
  '#f3f3f3',
];
var rgbColors = hexColors.map(hexToRgb);

console.log(hexColors);
console.log(rgbColors);
