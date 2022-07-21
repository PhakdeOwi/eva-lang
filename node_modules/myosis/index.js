module.exports = (query) => {
  if (query === undefined) {
    return process.platform;
  } else {
    if (query !== undefined) {
      return query.toLowerCase() == process.platform ? true : false;
    } else {
      return false;
    }
  }
};
