class MovieValidators {
  lengthCasting(casting) {
    return casting.length <= 10;
  };

};

module.exports = new MovieValidators();