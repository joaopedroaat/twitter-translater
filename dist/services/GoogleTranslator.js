"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _googletranslateopenapi = require('google-translate-open-api'); var _googletranslateopenapi2 = _interopRequireDefault(_googletranslateopenapi);





exports. default = async (text, language) => {
  return _googletranslateopenapi2.default.call(void 0, text, { to: language })
}
