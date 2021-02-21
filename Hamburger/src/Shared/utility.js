export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = isValid && value.trim() !== '';
  }

  if (rules.minLenght) {
    isValid = isValid && value.length >= rules.minLenght;
  }

  if (rules.maxLength) {
    isValid = isValid && value.length <= rules.maxLength;
  }

  return isValid;
};
