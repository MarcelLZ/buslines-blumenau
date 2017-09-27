'use strict';

var _LinesSpider = require('./services/LinesSpider');

var _LinesSpider2 = _interopRequireDefault(_LinesSpider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _LinesSpider2.default().execute();

// JSDOM.fromURL('https://moovitapp.com/index/pt-br/transporte_publico-lines-Blumenau-1-2400-850008', {
//   features: {
//     FetchExternalResources: ['script'],
//     ProcessExternalResources: ['script'],
//     SkipExternalResources: false
//   },
// }).then(dom => {
//   Array.from(pages).forEach(page => {
//     let link = page.getAttribute('href');
//     let sufix = 'https://moovitapp.com/index/pt-br/';
//     if (link) {
//       JSDOM.fromURL(`${sufix}${link}`, {
//         features: {
//           FetchExternalResources: ['script'],
//           ProcessExternalResources: ['script'],
//           SkipExternalResources: false
//         }
//       }).then(domm => {
//         let documentt = domm.window.document;
//         let lines = documentt.querySelectorAll('.line-item a');

//         Array.from(lines).forEach(line => {
//           console.log(`Número da linha: ${line.querySelector('.line-number').innerHTML} | Nome da linha: ${line.querySelector('.line-title').innerHTML}`);
//         });
//       });
//     }
//   });
// });