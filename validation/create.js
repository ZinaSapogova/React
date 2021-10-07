const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCreateInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.tname = !isEmpty(data.tname) ? data.tname : ""; //templateName
  data.tblog = !isEmpty(data.tblog) ? data.tblog : "";
  data.tauthor = !isEmpty(data.tauthor) ? data.tauthor : "";
  data.tanchor = !isEmpty(data.tanchor) ? data.tanchor : "";
  data.ttext = !isEmpty(data.ttext) ? data.ttext : "";
  data.timage = !isEmpty(data.timage) ? data.timage : "";
  data.tsocial = !isEmpty(data.tsocial) ? data.tsocial : "";
  data.tinfo = !isEmpty(data.tinfo) ? data.tinfo : "";

  // tName checks
  if (Validator.isEmpty(data.tname)) {
    errors.tname = "Name field is required";
  } else if ((data.tname).includes("badWord")) {
    errors.tname = "Ops! You are dirty!";
  }
    
  // tText checks
  if (Validator.isEmpty(data.ttext)) {
     errors.ttext = "Name field is required";
  } else if ((data.ttext).includes("badWord")) {
     errors.ttext = "Ops! You are dirty!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
