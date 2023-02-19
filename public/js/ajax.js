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

/***/ "./resources/js/ajax.js":
/*!******************************!*\
  !*** ./resources/js/ajax.js ***!
  \******************************/
/***/ (() => {

eval("$(document).ready(function () {\n  function deleteMessage(data) {\n    $.ajax({\n      type: \"POST\",\n      url: \"/deletemail\",\n      data: data,\n      success: function success(responce) {\n        $('.changing-content').remove();\n        $('.table-content').append(responce);\n        console.log(responce);\n      },\n      error: function error(_error) {\n        console.log(_error);\n      }\n    });\n  }\n  $.ajaxSetup({\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    }\n  });\n  $(document).on('click', '.delete-mail-button', function (e) {\n    e.preventDefault();\n    var data = {\n      \"id\": $(this).attr(\"data-id\")\n    };\n    deleteMessage(data);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImRlbGV0ZU1lc3NhZ2UiLCJkYXRhIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwicmVzcG9uY2UiLCJyZW1vdmUiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hamF4LmpzPzQ1ODYiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCl7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVNZXNzYWdlKGRhdGEpXG4gICAge1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogXCIvZGVsZXRlbWFpbFwiLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25jZSkge1xuICAgICAgICAgICAgICAgICQoJy5jaGFuZ2luZy1jb250ZW50JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJCgnLnRhYmxlLWNvbnRlbnQnKS5hcHBlbmQocmVzcG9uY2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbmNlKTtcbiAgICAgICAgICAgIH0sZXJyb3IgOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICQuYWpheFNldHVwKHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kZWxldGUtbWFpbC1idXR0b24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGRhdGEgID0ge1xuICAgICAgICAgICAgXCJpZFwiOiAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpXG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGVNZXNzYWdlKGRhdGEpO1xuICAgIH0pXG5cbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBVztFQUV6QixTQUFTQyxhQUFhLENBQUNDLElBQUksRUFDM0I7SUFFSUosQ0FBQyxDQUFDSyxJQUFJLENBQUM7TUFDSEMsSUFBSSxFQUFFLE1BQU07TUFDWkMsR0FBRyxFQUFFLGFBQWE7TUFDbEJILElBQUksRUFBRUEsSUFBSTtNQUNWSSxPQUFPLEVBQUUsaUJBQVVDLFFBQVEsRUFBRTtRQUN6QlQsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNVLE1BQU0sRUFBRTtRQUMvQlYsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNXLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDO1FBQ3BDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osUUFBUSxDQUFDO01BQ3pCLENBQUM7TUFBQ0ssS0FBSyxFQUFHLGVBQVNBLE1BQUssRUFBQztRQUNyQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQUssQ0FBQztNQUN0QjtJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUFkLENBQUMsQ0FBQ2UsU0FBUyxDQUFDO0lBQ1JDLE9BQU8sRUFBRTtNQUNMLGNBQWMsRUFBRWhCLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDaUIsSUFBSSxDQUFDLFNBQVM7SUFDL0Q7RUFDSixDQUFDLENBQUM7RUFFRmpCLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNpQixFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVVDLENBQUMsRUFBRTtJQUN4REEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFFbEIsSUFBSWhCLElBQUksR0FBSTtNQUNSLElBQUksRUFBRUosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaUIsSUFBSSxDQUFDLFNBQVM7SUFDaEMsQ0FBQztJQUVEZCxhQUFhLENBQUNDLElBQUksQ0FBQztFQUN2QixDQUFDLENBQUM7QUFFTixDQUFDLENBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYWpheC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/ajax.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/ajax.js"]();
/******/ 	
/******/ })()
;