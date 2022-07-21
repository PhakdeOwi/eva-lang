const UReset = "\x1b[0m";
const UColor = {
  color: {
    colorSupport: [
      "black",
      "red",
      "green",
      "yellow",
      "blue",
      "magenta",
      "cyan",
      "white",
    ],
    black: "\x1b[30m",

    red: "\x1b[31m",

    green: "\x1b[32m",

    yellow: "\x1b[33m",

    blue: "\x1b[34m",

    magenta: "\x1b[35m",

    cyan: "\x1b[36m",

    white: "\x1b[37m",
  },
};

const UFont = {
  font: {
    fontSupport: ["dim", "italic", "underline", "bold"],
    bold: "\x1b[1m",
    italic: "\x1b[3m",
    dim: "\x1b[2m",
    underline: "\x1b[4m",
  },
};

const UBrightColor = {
  BrightColor: {
    BrightColorSupport: [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
  ],

  black: "\x1b[90m",
  red: "\x1b[91m",
  green: "\x1b[92m",
  yellow: "\x1b[93m",
  blue: "\x1b[94m",
  magenta: "\x1b[95m",
  cyan: "\x1b[96m",
  white: "\x1b[97m",

  }
}

const UBackgroundColor =  {
  AllBackgroundColorSupport: [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
  ],

  black: "\x1b[40m",
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[44m",
  magenta: "\x1b[45m",
  cyan: "\x1b[46m",
  white: "\x1b[47m",
}

module.exports = {
  UColor,
  UReset,
  UFont,
  UBrightColor,
  UBackgroundColor
};
