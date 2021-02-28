System.register("m", [], function (exports_1, context_1) {
    "use strict";
    var hi, a, c;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hi", hi = '你好');
            a = 10;
            c = 20;
            console.log(a, c);
        }
    };
});
System.register("app", ["m"], function (exports_2, context_2) {
    "use strict";
    var m_js_1, a;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (m_js_1_1) {
                m_js_1 = m_js_1_1;
            }
        ],
        execute: function () {
            a = 12;
            console.log('hello');
            console.log(m_js_1.hi);
            console.log(a);
            document.getElementById("box1");
        }
    };
});
