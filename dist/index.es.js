import React from 'react';
import PropTypes from 'prop-types';

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ":root {\r\n  --ubk-primary: #089cff;\r\n  --ubk-primary-text: white;\r\n}\r\n\r\n.bk-primary {\r\n  background-color: var(--ubk-primary);\r\n  color: var(--ubk-primary-text);\r\n}";
styleInject(css_248z$2);

var css_248z$1 = ".ubk-button {\r\n  border: none;\r\n  padding: 10px;\r\n  cursor: pointer\r\n}\r\n\r\n.ubk-button:hover {\r\n  opacity: 0.9;\r\n}";
styleInject(css_248z$1);

function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

const Button = _ref => {
  let {
    label,
    onClick,
    isPrimary = false,
    className = '',
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    className: clsx("ubk-button", {
      'bk-primary': isPrimary
    }, className)
  }, props), label);
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isPrimary: PropTypes.bool,
  className: PropTypes.any
};

var css_248z = ".ubk-link {\r\n  color: var(--ubk-primary);\r\n  cursor: pointer;\r\n}\r\n.ubk-link:hover {\r\n  text-decoration: underline;\r\n}";
styleInject(css_248z);

const Link = _ref => {
  let {
    label,
    onClick,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("a", _extends({
    onClick: onClick,
    className: clsx('ubk-link', props.className)
  }, props), label);
};
Link.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export { Button, Link };
//# sourceMappingURL=index.es.js.map
