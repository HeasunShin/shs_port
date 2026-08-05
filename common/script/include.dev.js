"use strict";

document.addEventListener("DOMContentLoaded", function _callee() {
  var includes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, el, file, res;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          includes = document.querySelectorAll("[data-include]");
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;
          _iterator = includes[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 26;
            break;
          }

          el = _step.value;
          file = el.dataset.include;
          _context.prev = 9;
          _context.next = 12;
          return regeneratorRuntime.awrap(fetch(file));

        case 12:
          res = _context.sent;

          if (res.ok) {
            _context.next = 15;
            break;
          }

          throw new Error("".concat(file, " (").concat(res.status, ")"));

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(res.text());

        case 17:
          el.innerHTML = _context.sent;
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](9);
          console.error(_context.t0);

        case 23:
          _iteratorNormalCompletion = true;
          _context.next = 6;
          break;

        case 26:
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t1 = _context["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 32:
          _context.prev = 32;
          _context.prev = 33;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 35:
          _context.prev = 35;

          if (!_didIteratorError) {
            _context.next = 38;
            break;
          }

          throw _iteratorError;

        case 38:
          return _context.finish(35);

        case 39:
          return _context.finish(32);

        case 40:
          document.dispatchEvent(new Event("includeLoaded"));

        case 41:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 28, 32, 40], [9, 20], [33,, 35, 39]]);
});