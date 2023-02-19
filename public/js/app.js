/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// JS\n__webpack_require__(/*! ./main */ \"./resources/js/main.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLG1CQUFPLENBQUMsc0NBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanM/Y2VkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBKU1xucmVxdWlyZSgnLi9tYWluJyk7XG4iXSwibmFtZXMiOlsicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ (() => {

eval("function copyMessage() {\n  var insertText = document.querySelector('.insert-text-message');\n  var buttons = document.querySelectorAll('.show-message');\n  var hiddenText = document.querySelectorAll('.message-hide');\n  if (buttons) {\n    buttons.forEach(function (but, i) {\n      but.addEventListener('click', function (event) {\n        insertText.innerText = hiddenText[i].innerText;\n      });\n    });\n  }\n}\nfunction closeAlertPopUp() {\n  var closeButton = document.querySelectorAll('.close-alert');\n  var AlertPopUp = document.querySelectorAll('.alert');\n  if (closeButton) {\n    closeButton.forEach(function (button, n) {\n      button.addEventListener('click', function (event) {\n        AlertPopUp[n].style.display = \"none\";\n      });\n    });\n  }\n}\nfunction noEmptyFormInputs() {\n  var titleInput = document.querySelector('.title-input');\n  var emailInput = document.querySelector('.email-input');\n  var textInput = document.querySelector('.text-input');\n  var form = document.querySelector('.sendmail-form');\n  var checkTitle = function checkTitle() {\n    var valid = false;\n    var min = 5,\n      max = 200;\n    var title = titleInput.value.trim();\n    if (!isRequired(title)) {\n      showError(titleInput, 'Title cannot be blank.');\n    } else if (!isBetween(title.length, min, max)) {\n      showError(titleInput, \"Title must be between \".concat(min, \" and \").concat(max, \" characters.\"));\n    } else {\n      showSuccess(titleInput);\n      valid = true;\n    }\n    return valid;\n  };\n  var checkText = function checkText() {\n    var valid = false;\n    var min = 5,\n      max = 245;\n    var text = textInput.value.trim();\n    if (!isRequired(text)) {\n      showError(textInput, 'Text cannot be blank.');\n    } else if (!isBetween(text.length, min, max)) {\n      showError(textInput, \"Text must be between \".concat(min, \" and \").concat(max, \" characters.\"));\n    } else {\n      showSuccess(textInput);\n      valid = true;\n    }\n    return valid;\n  };\n  var checkEmail = function checkEmail() {\n    var valid = false;\n    var email = emailInput.value.trim();\n    if (!isRequired(email)) {\n      showError(emailInput, 'Email cannot be blank.');\n    } else if (!isEmailValid(email)) {\n      showError(emailInput, 'Email is not valid.');\n    } else {\n      showSuccess(emailInput);\n      valid = true;\n    }\n    return valid;\n  };\n  var isEmailValid = function isEmailValid(email) {\n    var re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return re.test(email);\n  };\n  var isRequired = function isRequired(value) {\n    return value === '' ? false : true;\n  };\n  var isBetween = function isBetween(length, min, max) {\n    return length < min || length > max ? false : true;\n  };\n  var showError = function showError(input, message) {\n    // get the form-field element\n    var formField = input.parentElement;\n    // add the error class\n    formField.classList.remove('success');\n    formField.classList.add('error');\n\n    // show the error message\n    var error = formField.querySelector('small');\n    error.textContent = message;\n  };\n  var showSuccess = function showSuccess(input) {\n    // get the form-field element\n    var formField = input.parentElement;\n\n    // remove the error class\n    formField.classList.remove('error');\n    formField.classList.add('success');\n\n    // hide the error message\n    var error = formField.querySelector('small');\n    error.textContent = '';\n  };\n  form.addEventListener('submit', function (e) {\n    // e.preventDefault();\n\n    var isTitleValid = checkTitle(),\n      isEmailValid = checkEmail(),\n      isTextValid = checkText();\n    var isFormValid = isTitleValid && isEmailValid && isTextValid;\n    if (isFormValid) {\n      e.currentTarget.submit();\n    }\n  });\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  copyMessage();\n  closeAlertPopUp();\n  noEmptyFormInputs();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3B5TWVzc2FnZSIsImluc2VydFRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImhpZGRlblRleHQiLCJmb3JFYWNoIiwiYnV0IiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImlubmVyVGV4dCIsImNsb3NlQWxlcnRQb3BVcCIsImNsb3NlQnV0dG9uIiwiQWxlcnRQb3BVcCIsImJ1dHRvbiIsIm4iLCJzdHlsZSIsImRpc3BsYXkiLCJub0VtcHR5Rm9ybUlucHV0cyIsInRpdGxlSW5wdXQiLCJlbWFpbElucHV0IiwidGV4dElucHV0IiwiZm9ybSIsImNoZWNrVGl0bGUiLCJ2YWxpZCIsIm1pbiIsIm1heCIsInRpdGxlIiwidmFsdWUiLCJ0cmltIiwiaXNSZXF1aXJlZCIsInNob3dFcnJvciIsImlzQmV0d2VlbiIsImxlbmd0aCIsInNob3dTdWNjZXNzIiwiY2hlY2tUZXh0IiwidGV4dCIsImNoZWNrRW1haWwiLCJlbWFpbCIsImlzRW1haWxWYWxpZCIsInJlIiwidGVzdCIsImlucHV0IiwibWVzc2FnZSIsImZvcm1GaWVsZCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJlcnJvciIsInRleHRDb250ZW50IiwiZSIsImlzVGl0bGVWYWxpZCIsImlzVGV4dFZhbGlkIiwiaXNGb3JtVmFsaWQiLCJjdXJyZW50VGFyZ2V0Iiwic3VibWl0Il0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9tYWluLmpzP2ZkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gIGNvcHlNZXNzYWdlKCl7XG4gICAgbGV0IGluc2VydFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zZXJ0LXRleHQtbWVzc2FnZScpO1xuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctbWVzc2FnZScpO1xuICAgIGxldCBoaWRkZW5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lc3NhZ2UtaGlkZScpO1xuXG4gICAgaWYoYnV0dG9ucyl7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0LCBpKSA9PiB7XG4gICAgICAgICAgICBidXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRUZXh0LmlubmVyVGV4dCA9IGhpZGRlblRleHRbaV0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VBbGVydFBvcFVwKCl7XG4gICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWFsZXJ0Jyk7XG4gICAgbGV0IEFsZXJ0UG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQnKTtcblxuICAgIGlmKGNsb3NlQnV0dG9uKXtcbiAgICAgICAgY2xvc2VCdXR0b24uZm9yRWFjaCgoYnV0dG9uLCBuKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBBbGVydFBvcFVwW25dLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBub0VtcHR5Rm9ybUlucHV0cygpe1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLWlucHV0Jyk7XG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtaW5wdXQnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbmRtYWlsLWZvcm0nKTtcblxuICAgIGNvbnN0IGNoZWNrVGl0bGUgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWluID0gNSxcbiAgICAgICAgICAgIG1heCA9IDIwMDtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghaXNSZXF1aXJlZCh0aXRsZSkpIHtcbiAgICAgICAgICAgIHNob3dFcnJvcih0aXRsZUlucHV0LCAnVGl0bGUgY2Fubm90IGJlIGJsYW5rLicpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc0JldHdlZW4odGl0bGUubGVuZ3RoLCBtaW4sIG1heCkpIHtcbiAgICAgICAgICAgIHNob3dFcnJvcih0aXRsZUlucHV0LCBgVGl0bGUgbXVzdCBiZSBiZXR3ZWVuICR7bWlufSBhbmQgJHttYXh9IGNoYXJhY3RlcnMuYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dTdWNjZXNzKHRpdGxlSW5wdXQpO1xuICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tUZXh0ID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1pbiA9IDUsXG4gICAgICAgICAgICBtYXggPSAyNDU7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IHRleHRJbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgaWYgKCFpc1JlcXVpcmVkKHRleHQpKSB7XG4gICAgICAgICAgICBzaG93RXJyb3IodGV4dElucHV0LCAnVGV4dCBjYW5ub3QgYmUgYmxhbmsuJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzQmV0d2Vlbih0ZXh0Lmxlbmd0aCwgbWluLCBtYXgpKSB7XG4gICAgICAgICAgICBzaG93RXJyb3IodGV4dElucHV0LCBgVGV4dCBtdXN0IGJlIGJldHdlZW4gJHttaW59IGFuZCAke21heH0gY2hhcmFjdGVycy5gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd1N1Y2Nlc3ModGV4dElucHV0KTtcbiAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrRW1haWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICBpZiAoIWlzUmVxdWlyZWQoZW1haWwpKSB7XG4gICAgICAgICAgICBzaG93RXJyb3IoZW1haWxJbnB1dCwgJ0VtYWlsIGNhbm5vdCBiZSBibGFuay4nKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNFbWFpbFZhbGlkKGVtYWlsKSkge1xuICAgICAgICAgICAgc2hvd0Vycm9yKGVtYWlsSW5wdXQsICdFbWFpbCBpcyBub3QgdmFsaWQuJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dTdWNjZXNzKGVtYWlsSW5wdXQpO1xuICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNFbWFpbFZhbGlkID0gKGVtYWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc1JlcXVpcmVkID0gdmFsdWUgPT4gdmFsdWUgPT09ICcnID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IGlzQmV0d2VlbiA9IChsZW5ndGgsIG1pbiwgbWF4KSA9PiBsZW5ndGggPCBtaW4gfHwgbGVuZ3RoID4gbWF4ID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IHNob3dFcnJvciA9IChpbnB1dCwgbWVzc2FnZSkgPT4ge1xuICAgICAgICAvLyBnZXQgdGhlIGZvcm0tZmllbGQgZWxlbWVudFxuICAgICAgICBjb25zdCBmb3JtRmllbGQgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAvLyBhZGQgdGhlIGVycm9yIGNsYXNzXG4gICAgICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XG4gICAgICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuXG4gICAgICAgIC8vIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgY29uc3QgZXJyb3IgPSBmb3JtRmllbGQucXVlcnlTZWxlY3Rvcignc21hbGwnKTtcbiAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIH07XG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgLy8gZ2V0IHRoZSBmb3JtLWZpZWxkIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZm9ybUZpZWxkID0gaW5wdXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGVycm9yIGNsYXNzXG4gICAgICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgICAgICBmb3JtRmllbGQuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpO1xuXG4gICAgICAgIC8vIGhpZGUgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgY29uc3QgZXJyb3IgPSBmb3JtRmllbGQucXVlcnlTZWxlY3Rvcignc21hbGwnKTtcbiAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgaXNUaXRsZVZhbGlkID0gY2hlY2tUaXRsZSgpLFxuICAgICAgICAgICAgaXNFbWFpbFZhbGlkID0gY2hlY2tFbWFpbCgpLFxuICAgICAgICAgICAgaXNUZXh0VmFsaWQgPSBjaGVja1RleHQoKTtcblxuICAgICAgICBsZXQgaXNGb3JtVmFsaWQgPSBpc1RpdGxlVmFsaWQgJiZcbiAgICAgICAgICAgIGlzRW1haWxWYWxpZCAmJlxuICAgICAgICAgICAgaXNUZXh0VmFsaWQ7XG5cbiAgICAgICAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3VibWl0KCk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29weU1lc3NhZ2UoKTtcbiAgICBjbG9zZUFsZXJ0UG9wVXAoKTtcbiAgICBub0VtcHR5Rm9ybUlucHV0cygpO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVVBLFdBQVcsR0FBRTtFQUNuQixJQUFJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQy9ELElBQUlDLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7RUFDeEQsSUFBSUMsVUFBVSxHQUFHSixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztFQUUzRCxJQUFHRCxPQUFPLEVBQUM7SUFDUEEsT0FBTyxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxDQUFDLEVBQUs7TUFD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\n//# sourceURL=webpack-internal:///./resources/js/main.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz9hODBiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

/***/ }),

/***/ "./resources/sass/style/style.scss":
/*!*****************************************!*\
  !*** ./resources/sass/style/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9zdHlsZS9zdHlsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL3N0eWxlL3N0eWxlLnNjc3M/MzA0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/sass/style/style.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/style"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/style"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/style"], () => (__webpack_require__("./resources/sass/style/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;