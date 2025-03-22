
export const getValueByAttribute = (e, attribute, topElIdentifier) => {
  let { target } = e;

  while (target) {
    if (target.hasAttribute('value')) {
      return target.getAttribute('value');
    }

    if (target.hasAttribute('picker-top-el')) {
      break;
    }

    target = target.parentElement;
  }
};