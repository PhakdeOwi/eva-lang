// eapstyles - because creative is you
// created by erlanggaabdeepasha@gmail.com
// 2 march 2021
//!  DO NOT COPY PASTE IT'S ILLEGAL!

const version = require("./package.json").version;
const Reset = require("./Unicode").UReset;

const baseColorSupport = require("./Unicode").UColor.color.colorSupport;
const BaseColor = require("./Unicode").UColor.color;

const BaseFontSupport = require("./Unicode").UFont.font.fontSupport;
const BaseFont = require("./Unicode").UFont.font;

const BaseBrightColorSupport = require("./Unicode").UBrightColor.BrightColor.BrightColorSupport
const BaseBrightColor = require("./Unicode").UBrightColor.BrightColor

const BaseBackgroundColorSupport  = require("./Unicode").UBackgroundColor.AllBackgroundColorSupport
const BaseBackgroundColor  = require("./Unicode").UBackgroundColor

const color = {
  AllColorSupport: baseColorSupport,
  black: function (txt) {
    return `${BaseColor.black}${txt}${Reset}`;
  },
  red: function (txt) {
    return `${BaseColor.red}${txt}${Reset}`;
  },
  green: function (txt) {
    return `${BaseColor.green}${txt}${Reset}`;
  },
  yellow: function (txt) {
    return `${BaseColor.yellow}${txt}${Reset}`;
  },
  blue: function (txt) {
    return `${BaseColor.blue}${txt}${Reset}`;
  },
  magenta: function (txt) {
    return `${BaseColor.magenta}${txt}${Reset}`;
  },
  cyan: function (txt) {
    return `${BaseColor.cyan}${txt}${Reset}`;
  },
  white: function (txt) {
    return `${BaseColor.white}${txt}${Reset}`;
  },
};

// font family

const font = {
  AllFontFamilySupport : BaseFontSupport,
  bold: function(text){
    return `${BaseFont.bold}${text}${Reset}`
  },
  underline: function(text){
    return `${BaseFont.underline}${text}${Reset}`
  },
  dim: function (text){
    return `${BaseFont.dim}${text}${Reset}`
  },
  italic: function(text){
    return `${BaseFont.italic}${text}${Reset}`
  }


}

const brightColor = {
  AllBrightColorSupport: BaseBrightColorSupport,
  black: function (txt) {
    return `${BaseBrightColor.black}${txt}${Reset}`;
  },
  red: function (txt) {
    return `${BaseBrightColor.red}${txt}${Reset}`;
  },
  green: function (txt) {
    return `${BaseBrightColor.green}${txt}${Reset}`;
  },
  yellow: function (txt) {
    return `${BaseBrightColor.yellow}${txt}${Reset}`;
  },
  blue: function (txt) {
    return `${BaseBrightColor.blue}${txt}${Reset}`;
  },
  magenta: function (txt) {
    return `${BaseBrightColor.magenta}${txt}${Reset}`;
  },
  cyan: function (txt) {
    return `${BaseBrightColor.cyan}${txt}${Reset}`;
  },
  white: function (txt) {
    return `${BaseBrightColor.white}${txt}${Reset}`;
  },
}

const background = {
  AllBackgroundColorSupport: BaseBackgroundColorSupport,
  black: function (txt) {
    return `${BaseBackgroundColor.black}${txt}${Reset}`;
  },
  red: function (txt) {
    return `${BaseBackgroundColor.red}${txt}${Reset}`;
  },
  green: function (txt) {
    return `${BaseBackgroundColor.green}${txt}${Reset}`;
  },
  yellow: function (txt) {
    return `${BaseBackgroundColor.yellow}${txt}${Reset}`;
  },
  blue: function (txt) {
    return `${BaseBackgroundColor.blue}${txt}${Reset}`;
  },
  magenta: function (txt) {
    return `${BaseBackgroundColor.magenta}${txt}${Reset}`;
  },
  cyan: function (txt) {
    return `${BaseBackgroundColor.cyan}${txt}${Reset}`;
  },
  white: function (txt) {
    return `${BaseBackgroundColor.white}${txt}${Reset}`;
  },
}
module.exports = {
  version,
  color,
  font,
  brightColor,
  background
};

//* made with LOVE and write in javascript
