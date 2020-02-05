"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


class Status  {
  
  
  
  

   constructor (created_at, id_str, full_text, created_by) {
    this.created_at = created_at
    this.id_str = id_str
    this.full_text = full_text
    this.user = created_by
  }
}

exports. default = Status
