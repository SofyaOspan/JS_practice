webpackJsonp([1], [, , , , , , , , , , function(e, t, n) {
    "use strict";
    var i = n(77);
    n.d(t, "d", function() {
        return i.a
    });
    var a = n(48);
    n.d(t, "u", function() {
        return a.a
    });
    var r = n(536);
    n.d(t, "t", function() {
        return r.a
    });
    var d = n(537);
    n.d(t, "p", function() {
        return d.a
    });
    var o = n(538);
    n.d(t, "n", function() {
        return o.a
    });
    var s = n(539);
    n.d(t, "y", function() {
        return s.a
    });
    var l = n(170);
    n.d(t, "f", function() {
        return l.a
    });
    var u = n(172);
    n.d(t, "w", function() {
        return u.a
    });
    var c = n(173);
    n.d(t, "g", function() {
        return c.a
    });
    var f = n(547);
    n.d(t, "x", function() {
        return f.a
    });
    var h = n(118);
    n.d(t, "e", function() {
        return h.a
    });
    var p = n(174);
    n.d(t, "a", function() {
        return p.a
    });
    var m = n(175);
    n.d(t, "b", function() {
        return m.a
    });
    var v = n(552);
    n.d(t, "j", function() {
        return v.a
    });
    var g = n(13);
    n.d(t, "c", function() {
        return g.a
    }),
    n.d(t, "o", function() {
        return g.d
    }),
    n.d(t, "k", function() {
        return g.b
    }),
    n.d(t, "m", function() {
        return g.c
    });
    var $ = n(553);
    n.d(t, "l", function() {
        return $.a
    });
    var b = n(554);
    n.d(t, "h", function() {
        return b.a
    });
    var T = n(162);
    n.d(t, "r", function() {
        return T.a
    }),
    n.d(t, "s", function() {
        return T.b
    });
    var y = n(53);
    n.d(t, "q", function() {
        return y.a
    });
    var S = n(111);
    n.d(t, "v", function() {
        return S.b
    }),
    n.d(t, "i", function() {
        return S.a
    })
}
, , function(e, t, n) {
    "use strict";
    function i(e, t) {
        var n = Array.prototype.slice.call(t);
        return n.push(a.a),
        e.apply(this, n)
    }
    t.b = i;
    var a = n(529);
    t.a = a.a
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function d(e, t, n) {
        return t && r(e.prototype, t),
        n && r(e, n),
        e
    }
    function o(e, t) {
        switch (t) {
        case "FIXED_LINE":
            return e[0];
        case "MOBILE":
            return e[1];
        case "TOLL_FREE":
            return e[2];
        case "PREMIUM_RATE":
            return e[3];
        case "PERSONAL_NUMBER":
            return e[4];
        case "VOICEMAIL":
            return e[5];
        case "UAN":
            return e[6];
        case "PAGER":
            return e[7];
        case "VOIP":
            return e[8];
        case "SHARED_COST":
            return e[9]
        }
    }
    function s(e) {
        if (!e)
            throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
        if (!C(e) || !C(e.countries))
            throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(C(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + P(e) + ": " + e, "."))
    }
    function l(e, t) {
        return t = new $(t),
        t.hasCountry(e) ? t.country(e).ext() : v
    }
    function u(e, t) {
        if (t = new $(t),
        t.hasCountry(e))
            return t.country(e).countryCallingCode();
        throw new Error("Unknown country: ".concat(e))
    }
    function c(e, t) {
        return void 0 !== t.countries[e]
    }
    function f(e) {
        var t = e.version;
        "number" == typeof t ? (this.v1 = 1 === t,
        this.v2 = 2 === t,
        this.v3 = 3 === t,
        this.v4 = 4 === t) : t ? -1 === Object(h.a)(t, p) ? this.v2 = !0 : -1 === Object(h.a)(t, m) ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
    }
    n.d(t, "a", function() {
        return $
    }),
    t.c = l,
    t.b = u,
    t.d = c;
    var h = n(530)
      , p = "1.2.0"
      , m = "1.7.35"
      , v = " ext. "
      , g = /^\d+$/
      , $ = function() {
        function e(t) {
            a(this, e),
            s(t),
            this.metadata = t,
            f.call(this, t)
        }
        return d(e, [{
            key: "getCountries",
            value: function() {
                return Object.keys(this.metadata.countries).filter(function(e) {
                    return "001" !== e
                })
            }
        }, {
            key: "getCountryMetadata",
            value: function(e) {
                return this.metadata.countries[e]
            }
        }, {
            key: "nonGeographic",
            value: function() {
                if (!(this.v1 || this.v2 || this.v3))
                    return this.metadata.nonGeographic || this.metadata.nonGeographical
            }
        }, {
            key: "hasCountry",
            value: function(e) {
                return void 0 !== this.getCountryMetadata(e)
            }
        }, {
            key: "hasCallingCode",
            value: function(e) {
                if (this.getCountryCodesForCallingCode(e))
                    return !0;
                if (this.nonGeographic()) {
                    if (this.nonGeographic()[e])
                        return !0
                } else {
                    var t = this.countryCallingCodes()[e];
                    if (t && 1 === t.length && "001" === t[0])
                        return !0
                }
            }
        }, {
            key: "isNonGeographicCallingCode",
            value: function(e) {
                return this.nonGeographic() ? !!this.nonGeographic()[e] : !this.getCountryCodesForCallingCode(e)
            }
        }, {
            key: "country",
            value: function(e) {
                return this.selectNumberingPlan(e)
            }
        }, {
            key: "selectNumberingPlan",
            value: function(e, t) {
                if (e && g.test(e) && (t = e,
                e = null),
                e && "001" !== e) {
                    if (!this.hasCountry(e))
                        throw new Error("Unknown country: ".concat(e));
                    this.numberingPlan = new b(this.getCountryMetadata(e),this)
                } else if (t) {
                    if (!this.hasCallingCode(t))
                        throw new Error("Unknown calling code: ".concat(t));
                    this.numberingPlan = new b(this.getNumberingPlanMetadata(t),this)
                } else
                    this.numberingPlan = void 0;
                return this
            }
        }, {
            key: "getCountryCodesForCallingCode",
            value: function(e) {
                var t = this.countryCallingCodes()[e];
                if (t) {
                    if (1 === t.length && 3 === t[0].length)
                        return;
                    return t
                }
            }
        }, {
            key: "getCountryCodeForCallingCode",
            value: function(e) {
                var t = this.getCountryCodesForCallingCode(e);
                if (t)
                    return t[0]
            }
        }, {
            key: "getNumberingPlanMetadata",
            value: function(e) {
                var t = this.getCountryCodeForCallingCode(e);
                if (t)
                    return this.getCountryMetadata(t);
                if (this.nonGeographic()) {
                    var n = this.nonGeographic()[e];
                    if (n)
                        return n
                } else {
                    var i = this.countryCallingCodes()[e];
                    if (i && 1 === i.length && "001" === i[0])
                        return this.metadata.countries["001"]
                }
            }
        }, {
            key: "countryCallingCode",
            value: function() {
                return this.numberingPlan.callingCode()
            }
        }, {
            key: "IDDPrefix",
            value: function() {
                return this.numberingPlan.IDDPrefix()
            }
        }, {
            key: "defaultIDDPrefix",
            value: function() {
                return this.numberingPlan.defaultIDDPrefix()
            }
        }, {
            key: "nationalNumberPattern",
            value: function() {
                return this.numberingPlan.nationalNumberPattern()
            }
        }, {
            key: "possibleLengths",
            value: function() {
                return this.numberingPlan.possibleLengths()
            }
        }, {
            key: "formats",
            value: function() {
                return this.numberingPlan.formats()
            }
        }, {
            key: "nationalPrefixForParsing",
            value: function() {
                return this.numberingPlan.nationalPrefixForParsing()
            }
        }, {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.numberingPlan.nationalPrefixTransformRule()
            }
        }, {
            key: "leadingDigits",
            value: function() {
                return this.numberingPlan.leadingDigits()
            }
        }, {
            key: "hasTypes",
            value: function() {
                return this.numberingPlan.hasTypes()
            }
        }, {
            key: "type",
            value: function(e) {
                return this.numberingPlan.type(e)
            }
        }, {
            key: "ext",
            value: function() {
                return this.numberingPlan.ext()
            }
        }, {
            key: "countryCallingCodes",
            value: function() {
                return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
            }
        }, {
            key: "chooseCountryByCountryCallingCode",
            value: function(e) {
                return this.selectNumberingPlan(e)
            }
        }, {
            key: "hasSelectedNumberingPlan",
            value: function() {
                return void 0 !== this.numberingPlan
            }
        }]),
        e
    }()
      , b = function() {
        function e(t, n) {
            a(this, e),
            this.globalMetadataObject = n,
            this.metadata = t,
            f.call(this, n.metadata)
        }
        return d(e, [{
            key: "callingCode",
            value: function() {
                return this.metadata[0]
            }
        }, {
            key: "getDefaultCountryMetadataForRegion",
            value: function() {
                return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
            }
        }, {
            key: "IDDPrefix",
            value: function() {
                if (!this.v1 && !this.v2)
                    return this.metadata[1]
            }
        }, {
            key: "defaultIDDPrefix",
            value: function() {
                if (!this.v1 && !this.v2)
                    return this.metadata[12]
            }
        }, {
            key: "nationalNumberPattern",
            value: function() {
                return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
            }
        }, {
            key: "possibleLengths",
            value: function() {
                if (!this.v1)
                    return this.metadata[this.v2 ? 2 : 3]
            }
        }, {
            key: "_getFormats",
            value: function(e) {
                return e[this.v1 ? 2 : this.v2 ? 3 : 4]
            }
        }, {
            key: "formats",
            value: function() {
                var e = this;
                return (this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || []).map(function(t) {
                    return new T(t,e)
                })
            }
        }, {
            key: "nationalPrefix",
            value: function() {
                return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
            }
        }, {
            key: "_getNationalPrefixFormattingRule",
            value: function(e) {
                return e[this.v1 ? 4 : this.v2 ? 5 : 6]
            }
        }, {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
            }
        }, {
            key: "_nationalPrefixForParsing",
            value: function() {
                return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
            }
        }, {
            key: "nationalPrefixForParsing",
            value: function() {
                return this._nationalPrefixForParsing() || this.nationalPrefix()
            }
        }, {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
            }
        }, {
            key: "_getNationalPrefixIsOptionalWhenFormatting",
            value: function() {
                return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
            }
        }, {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
            }
        }, {
            key: "leadingDigits",
            value: function() {
                return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
            }
        }, {
            key: "types",
            value: function() {
                return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
            }
        }, {
            key: "hasTypes",
            value: function() {
                return (!this.types() || 0 !== this.types().length) && !!this.types()
            }
        }, {
            key: "type",
            value: function(e) {
                if (this.hasTypes() && o(this.types(), e))
                    return new S(o(this.types(), e),this)
            }
        }, {
            key: "ext",
            value: function() {
                return this.v1 || this.v2 ? v : this.metadata[13] || v
            }
        }]),
        e
    }()
      , T = function() {
        function e(t, n) {
            a(this, e),
            this._format = t,
            this.metadata = n
        }
        return d(e, [{
            key: "pattern",
            value: function() {
                return this._format[0]
            }
        }, {
            key: "format",
            value: function() {
                return this._format[1]
            }
        }, {
            key: "leadingDigitsPatterns",
            value: function() {
                return this._format[2] || []
            }
        }, {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._format[3] || this.metadata.nationalPrefixFormattingRule()
            }
        }, {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
            }
        }, {
            key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
            value: function() {
                return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
            }
        }, {
            key: "usesNationalPrefix",
            value: function() {
                return !(!this.nationalPrefixFormattingRule() || y.test(this.nationalPrefixFormattingRule()))
            }
        }, {
            key: "internationalFormat",
            value: function() {
                return this._format[5] || this.format()
            }
        }]),
        e
    }()
      , y = /^\(?\$1\)?$/
      , S = function() {
        function e(t, n) {
            a(this, e),
            this.type = t,
            this.metadata = n
        }
        return d(e, [{
            key: "pattern",
            value: function() {
                return this.metadata.v1 ? this.type : this.type[0]
            }
        }, {
            key: "possibleLengths",
            value: function() {
                if (!this.metadata.v1)
                    return this.type[1] || this.metadata.possibleLengths()
            }
        }]),
        e
    }()
      , C = function(e) {
        return "object" === i(e)
    }
      , P = function(e) {
        return i(e)
    }
}
, , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return i
    }),
    n.d(t, "b", function() {
        return a
    }),
    n.d(t, "a", function() {
        return r
    }),
    n.d(t, "e", function() {
        return d
    }),
    n.d(t, "f", function() {
        return o
    }),
    n.d(t, "d", function() {
        return s
    });
    var i = 2
      , a = 17
      , r = 3
      , d = "0-9０-９٠-٩۰-۹"
      , o = "".concat("-‐-―−ー－").concat("／/").concat("．.").concat("  ­​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～")
      , s = "+＋"
}
, , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                r(e, t, n[t])
            })
        }
        return e
    }
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function d(e, t) {
        return l(e) || s(e, t) || o()
    }
    function o() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function s(e, t) {
        var n = []
          , i = !0
          , a = !1
          , r = void 0;
        try {
            for (var d, o = e[Symbol.iterator](); !(i = (d = o.next()).done) && (n.push(d.value),
            !t || n.length !== t); i = !0)
                ;
        } catch (e) {
            a = !0,
            r = e
        } finally {
            try {
                i || null == o.return || o.return()
            } finally {
                if (a)
                    throw r
            }
        }
        return n
    }
    function l(e) {
        if (Array.isArray(e))
            return e
    }
    function u() {
        var e = c(arguments)
          , t = e.text
          , n = e.options
          , i = e.metadata;
        return Object(f.a)(t, n, i)
    }
    function c(e) {
        var t, n, i, r = Array.prototype.slice.call(e), o = d(r, 4), s = o[0], l = o[1], u = o[2], c = o[3];
        if ("string" != typeof s)
            throw new TypeError("A text for parsing must be a string.");
        if (t = s,
        l && "string" != typeof l) {
            if (!h(l))
                throw new Error("Invalid second argument: ".concat(l));
            u ? (n = l,
            i = u) : i = l
        } else
            c ? (n = u,
            i = c) : (n = void 0,
            i = u),
            l && (n = a({
                defaultCountry: l
            }, n));
        return {
            text: t,
            options: n,
            metadata: i
        }
    }
    t.a = u,
    t.b = c;
    var f = n(109)
      , h = function(e) {
        return "object" === i(e)
    }
}
, , , , , function(e, t, n) {
    "use strict";
    function i(e) {
        return r[e]
    }
    function a(e) {
        for (var t = "", n = e.split(""), a = Array.isArray(n), r = 0, n = a ? n : n[Symbol.iterator](); ; ) {
            var d;
            if (a) {
                if (r >= n.length)
                    break;
                d = n[r++]
            } else {
                if (r = n.next(),
                r.done)
                    break;
                d = r.value
            }
            var o = d
              , s = i(o);
            s && (t += s)
        }
        return t
    }
    t.b = i,
    t.a = a;
    var r = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "０": "0",
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9"
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return e = e || "",
        new RegExp("^(?:" + t + ")$").test(e)
    }
    t.a = i
}
, , , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = []
      , d = !1
      , o = null
      , s = null
      , l = null
      , u = null
      , c = !0
      , f = void 0
      , h = void 0
      , p = void 0
      , m = function() {
        function e() {
            if (i(this, e),
            window.AudioContext || window.webkitAudioContext) {
                var t = window.AudioContext || window.webkitAudioContext;
                new t
            }
        }
        return a(e, [{
            key: "addClickSound",
            value: function(e) {
                o = new Audio(e)
            }
        }, {
            key: "addExplosionSound",
            value: function(e) {
                u = new Audio(e)
            }
        }, {
            key: "addHoverSound",
            value: function(e) {
                s = new Audio(e)
            }
        }, {
            key: "addShowSound",
            value: function(e) {
                l = new Audio(e)
            }
        }, {
            key: "addSound",
            value: function(e) {
                var t = new Audio(e.src);
                t.loop = e.loop || !1;
                var n = void 0 !== e.x && void 0 !== e.y || !1
                  , i = void 0 !== e.volume ? e.volume : 1;
                t.volume = i,
                r.push({
                    audio: t,
                    mutable: n,
                    volume: i,
                    x: e.x || 0,
                    y: e.y || 0
                })
            }
        }, {
            key: "isSoundOn",
            value: function() {
                return c
            }
        }, {
            key: "toggleSound",
            value: function() {
                c = !c
            }
        }, {
            key: "isPaused",
            value: function() {
                return d
            }
        }, {
            key: "pauseAllSounds",
            value: function() {
                for (d = !0,
                f = 0; f < r.length; f++)
                    r[f].audio.pause();
                o.volume = 0,
                s.volume = 0,
                l.volume = 0,
                u.volume = 0
            }
        }, {
            key: "playAllSounds",
            value: function() {
                for (d = !1,
                f = 0; f < r.length; f++)
                    r[f].audio.play();
                o.volume = .45,
                s.volume = .75,
                l.volume = .5,
                u.volume = 1
            }
        }, {
            key: "playClickSound",
            value: function() {
                o && (o.currentTime = 0,
                o.play())
            }
        }, {
            key: "playExplosionSound",
            value: function() {
                u && (u.currentTime = 0,
                u.play())
            }
        }, {
            key: "playHoverSound",
            value: function() {
                s && (s.currentTime = 0,
                s.play())
            }
        }, {
            key: "playShowSound",
            value: function() {
                l && (l.currentTime = 0,
                l.play())
            }
        }, {
            key: "setHeadphonesPosition",
            value: function(e, t) {
                for (f = 0; f < r.length; f++) {
                    var n = r[f];
                    if (n.mutable) {
                        h = e - n.x,
                        p = t - n.y;
                        var i = Math.sqrt(h * h + p * p);
                        n.audio.volume = i > 3 ? 0 : n.volume - .8 * i / 3 * n.volume
                    }
                }
            }
        }]),
        e
    }();
    t.default = new m
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return a(e, void 0, t)
    }
    function a(e, t, n) {
        var i = n.type(t)
          , d = i && i.possibleLengths() || n.possibleLengths();
        if (!d)
            return "IS_POSSIBLE";
        if ("FIXED_LINE_OR_MOBILE" === t) {
            if (!n.type("FIXED_LINE"))
                return a(e, "MOBILE", n);
            var o = n.type("MOBILE");
            o && (d = Object(r.a)(d, o.possibleLengths()))
        } else if (t && !i)
            return "INVALID_LENGTH";
        var s = e.length
          , l = d[0];
        return l === s ? "IS_POSSIBLE" : l > s ? "TOO_SHORT" : d[d.length - 1] < s ? "TOO_LONG" : d.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
    }
    t.a = i;
    var r = n(532)
}
, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    function i(e) {
        this.type = e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    i.ERROR = 1,
    i.LOAD = 2,
    i.LOAD_PROGRESS_CHANGE = 3,
    i.PROGRESS_CHANGE = 4,
    t.default = i
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    n.d(t, "a", function() {
        return a
    });
    var a = function e(t) {
        i(this, e),
        this.name = this.constructor.name,
        this.message = t,
        this.stack = new Error(t).stack
    };
    a.prototype = Object.create(Error.prototype),
    a.prototype.constructor = a
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function o(e, t, n) {
        return t && d(e.prototype, t),
        n && d(e, n),
        e
    }
    n.d(t, "a", function() {
        return p
    });
    var s = n(13)
      , l = n(164)
      , u = n(112)
      , c = (n(533),
    n(113))
      , f = n(534)
      , h = !1
      , p = function() {
        function e(t, n, i) {
            if (r(this, e),
            !t)
                throw new TypeError("`country` or `countryCallingCode` not passed");
            if (!n)
                throw new TypeError("`nationalNumber` not passed");
            if (!i)
                throw new TypeError("`metadata` not passed");
            var a = new s.a(i);
            m(t) ? (this.country = t,
            a.country(t),
            t = a.countryCallingCode()) : h && a.isNonGeographicCallingCode(t) && (this.country = "001"),
            this.countryCallingCode = t,
            this.nationalNumber = n,
            this.number = "+" + this.countryCallingCode + this.nationalNumber,
            this.metadata = i
        }
        return o(e, [{
            key: "setExt",
            value: function(e) {
                this.ext = e
            }
        }, {
            key: "isPossible",
            value: function() {
                return Object(l.a)(this, {
                    v2: !0
                }, this.metadata)
            }
        }, {
            key: "isValid",
            value: function() {
                return Object(u.a)(this, {
                    v2: !0
                }, this.metadata)
            }
        }, {
            key: "isNonGeographic",
            value: function() {
                return new s.a(this.metadata).isNonGeographicCallingCode(this.countryCallingCode)
            }
        }, {
            key: "isEqual",
            value: function(e) {
                return this.number === e.number && this.ext === e.ext
            }
        }, {
            key: "getType",
            value: function() {
                return Object(c.a)(this, {
                    v2: !0
                }, this.metadata)
            }
        }, {
            key: "format",
            value: function(e, t) {
                return Object(f.a)(this, e, t ? i({}, t, {
                    v2: !0
                }) : {
                    v2: !0
                }, this.metadata)
            }
        }, {
            key: "formatNational",
            value: function(e) {
                return this.format("NATIONAL", e)
            }
        }, {
            key: "formatInternational",
            value: function(e) {
                return this.format("INTERNATIONAL", e)
            }
        }, {
            key: "getURI",
            value: function(e) {
                return this.format("RFC3966", e)
            }
        }]),
        e
    }()
      , m = function(e) {
        return /^[A-Z]{2}$/.test(e)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (e < 0 || t <= 0 || t < e)
            throw new TypeError;
        return "{".concat(e, ",").concat(t, "}")
    }
    function a(e, t) {
        var n = t.search(e);
        return n >= 0 ? t.slice(0, n) : t
    }
    function r(e, t) {
        return 0 === e.indexOf(t)
    }
    function d(e, t) {
        return e.indexOf(t, e.length - t.length) === e.length - t.length
    }
    t.b = i,
    t.d = a,
    t.c = r,
    t.a = d
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.recruiting = {
        web: {
            samara: !1,
            saratov: !1,
            kazan: !1,
            krasnodar: !1,
            tolyatti: !1,
            petersburg: !1,
            uralsk: !1,
            online: !1
        },
        mobile: {
            samara: !1,
            saratov: !1,
            kazan: !1,
            krasnodar: !1,
            tolyatti: !1,
            petersburg: !1,
            uralsk: !1,
            online: !1
        },
        business: {
            samara: !1,
            saratov: !1,
            kazan: !1,
            krasnodar: !1,
            tolyatti: !1,
            petersburg: !1,
            uralsk: !1,
            online: !1
        },
        qa: {
            samara: !1,
            saratov: !1,
            kazan: !1,
            krasnodar: !1,
            tolyatti: !1,
            petersburg: !1,
            uralsk: !1,
            online: !1
        },
        net: {
            samara: !1,
            saratov: !1,
            kazan: !1,
            krasnodar: !1,
            tolyatti: !1,
            petersburg: !1,
            uralsk: !1,
            online: !1
        }
    },
    t.activeTrends = []
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r(e, t, n) {
        return Object(d.a)(e, i({}, t, {
            v2: !0
        }), n)
    }
    t.a = r;
    var d = n(160)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return r + d("20") + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)[:\\.．]?[  \\t,-]*" + d("20") + "#?|[  \\t,]*(?:[xｘ#＃~～]|int|ｉｎｔ)[:\\.．]?[  \\t,-]*" + d("9") + "#?|[- ]+" + d("6") + "#|[  \\t]*(?:,{2}|;)[:\\.．]?[  \\t,-]*" + d("15") + "#?|[  \\t]*(?:,)+[:\\.．]?[  \\t,-]*" + d("9") + "#?"
    }
    t.a = i;
    var a = n(31)
      , r = ";ext="
      , d = function(e) {
        return "([".concat(a.e, "]{1,").concat(e, "})")
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return d(e) || r(e, t) || a()
    }
    function a() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function r(e, t) {
        var n = []
          , i = !0
          , a = !1
          , r = void 0;
        try {
            for (var d, o = e[Symbol.iterator](); !(i = (d = o.next()).done) && (n.push(d.value),
            !t || n.length !== t); i = !0)
                ;
        } catch (e) {
            a = !0,
            r = e
        } finally {
            try {
                i || null == o.return || o.return()
            } finally {
                if (a)
                    throw r
            }
        }
        return n
    }
    function d(e) {
        if (Array.isArray(e))
            return e
    }
    function o(e) {
        var t, n;
        e = e.replace(/^tel:/, "tel=");
        for (var a = e.split(";"), r = Array.isArray(a), d = 0, a = r ? a : a[Symbol.iterator](); ; ) {
            var o;
            if (r) {
                if (d >= a.length)
                    break;
                o = a[d++]
            } else {
                if (d = a.next(),
                d.done)
                    break;
                o = d.value
            }
            var s = o
              , u = s.split("=")
              , c = i(u, 2)
              , f = c[0]
              , h = c[1];
            switch (f) {
            case "tel":
                t = h;
                break;
            case "ext":
                n = h;
                break;
            case "phone-context":
                "+" === h[0] && (t = h + t)
            }
        }
        if (!Object(l.a)(t))
            return {};
        var p = {
            number: t
        };
        return n && (p.ext = n),
        p
    }
    function s(e) {
        var t = e.number
          , n = e.ext;
        if (!t)
            return "";
        if ("+" !== t[0])
            throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
        return "tel:".concat(t).concat(n ? ";ext=" + n : "")
    }
    t.b = o,
    t.a = s;
    var l = n(161)
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        if (t = t || {},
        n = new a.a(n),
        !e.country)
            return !1;
        if (n.selectNumberingPlan(e.country, e.countryCallingCode),
        n.hasTypes())
            return void 0 !== Object(d.a)(e, t, n.metadata);
        var i = t.v2 ? e.nationalNumber : e.phone;
        return Object(r.a)(i, n.nationalNumberPattern())
    }
    t.a = i;
    var a = n(13)
      , r = n(54)
      , d = n(113)
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        if (t = t || {},
        e.country) {
            n = new r.a(n),
            n.selectNumberingPlan(e.country, e.countryCallingCode);
            var i = t.v2 ? e.nationalNumber : e.phone;
            if (Object(d.a)(i, n.nationalNumberPattern())) {
                if (a(i, "FIXED_LINE", n))
                    return n.type("MOBILE") && "" === n.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : n.type("MOBILE") ? a(i, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
                for (var s = 0, l = o; s < l.length; s++) {
                    var u = l[s];
                    if (a(i, u, n))
                        return u
                }
            }
        }
    }
    function a(e, t, n) {
        return !(!(t = n.type(t)) || !t.pattern()) && (!(t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0) && Object(d.a)(e, t.pattern()))
    }
    t.a = i;
    var r = n(13)
      , d = n(54)
      , o = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"]
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        var i = n.useInternationalFormat
          , d = n.withNationalPrefix
          , o = (n.carrierCode,
        n.metadata,
        e.replace(new RegExp(t.pattern()), i ? t.internationalFormat() : d && t.nationalPrefixFormattingRule() ? t.format().replace(r, t.nationalPrefixFormattingRule()) : t.format()));
        return i ? Object(a.a)(o) : o
    }
    n.d(t, "a", function() {
        return r
    }),
    t.b = i;
    var a = n(165)
      , r = /(\$\d)/
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n, i) {
        if (t) {
            var r = new a.a(i);
            r.selectNumberingPlan(t, n);
            var o = new RegExp(r.IDDPrefix());
            if (0 === e.search(o)) {
                e = e.slice(e.match(o)[0].length);
                var s = e.match(d);
                if (!(s && null != s[1] && s[1].length > 0 && "0" === s[1]))
                    return e
            }
        }
    }
    t.a = i;
    var a = n(13)
      , r = n(31)
      , d = new RegExp("([" + r.e + "])")
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n, i) {
        var l = t ? Object(s.a)(t, i) : n;
        if (0 === e.indexOf(l)) {
            i = new a.a(i),
            i.selectNumberingPlan(t, n);
            var u = e.slice(l.length)
              , c = Object(d.a)(u, i)
              , f = c.nationalNumber
              , h = Object(d.a)(e, i)
              , p = h.nationalNumber;
            if (!Object(r.a)(p, i.nationalNumberPattern()) && Object(r.a)(f, i.nationalNumberPattern()) || "TOO_LONG" === Object(o.a)(p, i))
                return {
                    countryCallingCode: l,
                    number: u
                }
        }
        return {
            number: e
        }
    }
    t.a = i;
    var a = n(13)
      , r = n(54)
      , d = n(167)
      , o = n(61)
      , s = n(163)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r(e, t, n) {
        t && t.defaultCountry && !Object(s.d)(t.defaultCountry, n) && (t = i({}, t, {
            defaultCountry: void 0
        }));
        try {
            return Object(d.a)(e, t, n)
        } catch (e) {
            if (!(e instanceof o.a))
                throw e
        }
    }
    t.a = r;
    var d = n(109)
      , o = n(77)
      , s = n(13)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function d(e, t, n) {
        return t && r(e.prototype, t),
        n && r(e, n),
        e
    }
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    n.d(t, "a", function() {
        return O
    });
    var s = n(78)
      , l = n(31)
      , u = n(110)
      , c = n(541)
      , f = n(79)
      , h = n(171)
      , p = n(543)
      , m = n(544)
      , v = n(545)
      , g = n(546)
      , $ = n(13)
      , b = n(160)
      , T = Object(u.a)("matching")
      , y = ["\\/+(.*)/", "(\\([^(]*)", "(?:".concat(h.g, "-|-").concat(h.g, ")").concat(h.g, "*(.+)"), "[‒-―－]".concat(h.g, "*(.+)"), "\\.+".concat(h.g, "*([^.]+)"), "".concat(h.g, "+(").concat(h.a, "+)")]
      , S = Object(f.b)(0, 2)
      , C = Object(f.b)(0, 4)
      , P = l.b + l.a
      , w = Object(f.b)(0, P)
      , E = "[".concat(l.f, "]") + C
      , x = h.f + Object(f.b)(1, P)
      , M = "(?:" + g.a + E + ")" + S + x + "(?:" + E + x + ")" + w + "(?:" + T + ")?"
      , A = new RegExp("[^".concat(h.c).concat(h.b, "#]+$"))
      , G = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1
      , O = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = arguments.length > 2 ? arguments[2] : void 0;
            if (a(this, e),
            o(this, "state", "NOT_READY"),
            o(this, "searchIndex", 0),
            o(this, "regExpCache", new c.a(32)),
            n = i({}, n, {
                defaultCallingCode: n.defaultCallingCode,
                defaultCountry: n.defaultCountry && Object($.d)(n.defaultCountry, r) ? n.defaultCountry : void 0,
                leniency: n.leniency || n.extended ? "POSSIBLE" : "VALID",
                maxTries: n.maxTries || G
            }),
            !n.leniency)
                throw new TypeError("`Leniency` not supplied");
            if (n.maxTries < 0)
                throw new TypeError("`maxTries` not supplied");
            if (this.text = t,
            this.options = n,
            this.metadata = r,
            this.leniency = p.a[n.leniency],
            !this.leniency)
                throw new TypeError("Unknown leniency: ".concat(n.leniency, "."));
            this.maxTries = n.maxTries,
            this.PATTERN = new RegExp(M,"ig")
        }
        return d(e, [{
            key: "find",
            value: function() {
                for (var e; this.maxTries > 0 && null !== (e = this.PATTERN.exec(this.text)); ) {
                    var t = e[0]
                      , n = e.index;
                    if (t = Object(m.a)(t),
                    Object(v.a)(t, n, this.text)) {
                        var i = this.parseAndVerify(t, n, this.text) || this.extractInnerMatch(t, n, this.text);
                        if (i) {
                            if (this.options.v2) {
                                var a = new s.a(i.country || i.countryCallingCode,i.phone,this.metadata);
                                return i.ext && (a.ext = i.ext),
                                {
                                    startsAt: i.startsAt,
                                    endsAt: i.endsAt,
                                    number: a
                                }
                            }
                            return i
                        }
                    }
                    this.maxTries--
                }
            }
        }, {
            key: "extractInnerMatch",
            value: function(e, t, n) {
                for (var i = 0, a = y; i < a.length; i++)
                    for (var r = a[i], d = !0, o = void 0, s = new RegExp(r,"g"); this.maxTries > 0 && null !== (o = s.exec(e)); ) {
                        if (d) {
                            var l = Object(f.d)(A, e.slice(0, o.index))
                              , u = this.parseAndVerify(l, t, n);
                            if (u)
                                return u;
                            this.maxTries--,
                            d = !1
                        }
                        var c = Object(f.d)(A, o[1])
                          , h = e.indexOf(c, o.index)
                          , p = this.parseAndVerify(c, t + h, n);
                        if (p)
                            return p;
                        this.maxTries--
                    }
            }
        }, {
            key: "parseAndVerify",
            value: function(e, t, n) {
                if (Object(g.b)(e, t, n, this.options.leniency)) {
                    var i = Object(b.a)(e, {
                        extended: !0,
                        defaultCountry: this.options.defaultCountry,
                        defaultCallingCode: this.options.defaultCallingCode
                    }, this.metadata);
                    if (i.possible && this.leniency(i, e, this.metadata, this.regExpCache)) {
                        var a = {
                            startsAt: t,
                            endsAt: t + e.length,
                            phone: i.phone
                        };
                        return i.country && "001" !== i.country ? a.country = i.country : a.countryCallingCode = i.countryCallingCode,
                        i.ext && (a.ext = i.ext),
                        a
                    }
                }
            }
        }, {
            key: "hasNext",
            value: function() {
                return "NOT_READY" === this.state && (this.lastMatch = this.find(),
                this.lastMatch ? this.state = "READY" : this.state = "DONE"),
                "READY" === this.state
            }
        }, {
            key: "next",
            value: function() {
                if (!this.hasNext())
                    throw new Error("No next element");
                var e = this.lastMatch;
                return this.lastMatch = null,
                this.state = "NOT_READY",
                e
            }
        }]),
        e
    }()
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    /*!mobile-detect v1.4.1 2017-12-24*/
    /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
    !function(e, t) {
        e(function() {
            "use strict";
            function e(e, t) {
                return null != e && null != t && e.toLowerCase() === t.toLowerCase()
            }
            function t(e, t) {
                var n, i, a = e.length;
                if (!a || !t)
                    return !1;
                for (n = t.toLowerCase(),
                i = 0; i < a; ++i)
                    if (n === e[i].toLowerCase())
                        return !0;
                return !1
            }
            function n(e) {
                for (var t in e)
                    o.call(e, t) && (e[t] = new RegExp(e[t],"i"))
            }
            function i(e) {
                return (e || "").substr(0, 500)
            }
            function a(e, t) {
                this.ua = i(e),
                this._cache = {},
                this.maxPhoneWidth = t || 600
            }
            var r = {};
            r.mobileDetectRules = {
                phones: {
                    iPhone: "\\biPhone\\b|\\biPod\\b",
                    BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                    HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                    Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                    Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092",
                    Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F",
                    LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                    Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                    Asus: "Asus.*Galaxy|PadFone.*Mobile",
                    NokiaLumia: "Lumia [0-9]{3,4}",
                    Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    Palm: "PalmSource|Palm",
                    Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                    iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                    Alcatel: "Alcatel",
                    Nintendo: "Nintendo 3DS",
                    Amoi: "Amoi",
                    INQ: "INQ",
                    GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                },
                tablets: {
                    iPad: "iPad|iPad.*Mobile",
                    NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                    SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
                    Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                    SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                    HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                    AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
                    BlackBerryTablet: "PlayBook|RIM Tablet",
                    HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                    MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                    ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                    FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                    LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-8703F",
                    DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                    YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                    IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                    IRUTablet: "M702pro",
                    MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                    AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    NokiaLumiaTablet: "Lumia 2520",
                    SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                    PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                    CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                    MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                    SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    FlyTablet: "IQ310|Fly Vision",
                    bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                    HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L",
                    NecTablet: "\\bN-06D|\\bN-08D",
                    PantechTablet: "Pantech.*P4100",
                    BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                    VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                    PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    NabiTablet: "Android.*\\bNabi",
                    KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    PlaystationTablet: "Playstation.*(Portable|Vita)",
                    TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                    PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: "Android.*\\bG1\\b",
                    MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                    PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                    HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    DPSTablet: "DPS Dream 9|DPS Dual 7",
                    VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                    StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                    EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    iMobileTablet: "i-mobile i-note",
                    TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                    AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    AMPETablet: "Android.* A78 ",
                    SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    TecnoTablet: "TECNO P9",
                    JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    FX2Tablet: "FX2 PAD7|FX2 PAD10",
                    XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                    OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                    CaptivaTablet: "CAPTIVA PAD",
                    IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                    OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                    JaytechTablet: "TPC-PA762",
                    BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                    DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                    EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                    LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                    AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                    MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                    CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                    WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                    MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                    NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                    NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                    LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                    UbislateTablet: "UbiSlate[\\s]?7C",
                    PocketBookTablet: "Pocketbook",
                    KocasoTablet: "\\b(TB-1207)\\b",
                    HisenseTablet: "\\b(F5281|E2371)\\b",
                    Hudl: "Hudl HT7S3|Hudl 2",
                    TelstraTablet: "T-Hub2",
                    GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b"
                },
                oss: {
                    AndroidOS: "Android",
                    BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                    PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                    WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                    iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                    MeeGoOS: "MeeGo",
                    MaemoOS: "Maemo",
                    JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                    webOS: "webOS|hpwOS",
                    badaOS: "\\bBada\\b",
                    BREWOS: "BREW"
                },
                uas: {
                    Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                    Dolfin: "\\bDolfin\\b",
                    Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                    Skyfire: "Skyfire",
                    Edge: "Mobile Safari/[.0-9]* Edge",
                    IE: "IEMobile|MSIEMobile",
                    Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                    Bolt: "bolt",
                    TeaShark: "teashark",
                    Blazer: "Blazer",
                    Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                    UCBrowser: "UC.*Browser|UCWEB",
                    baiduboxapp: "baiduboxapp",
                    baidubrowser: "baidubrowser",
                    DiigoBrowser: "DiigoBrowser",
                    Puffin: "Puffin",
                    Mercury: "\\bMercury\\b",
                    ObigoBrowser: "Obigo",
                    NetFront: "NF-Browser",
                    GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                },
                props: {
                    Mobile: "Mobile/[VER]",
                    Build: "Build/[VER]",
                    Version: "Version/[VER]",
                    VendorID: "VendorID/[VER]",
                    iPad: "iPad.*CPU[a-z ]+[VER]",
                    iPhone: "iPhone.*CPU[a-z ]+[VER]",
                    iPod: "iPod.*CPU[a-z ]+[VER]",
                    Kindle: "Kindle/[VER]",
                    Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                    Coast: ["Coast/[VER]"],
                    Dolfin: "Dolfin/[VER]",
                    Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                    Fennec: "Fennec/[VER]",
                    Edge: "Edge/[VER]",
                    IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                    NetFront: "NetFront/[VER]",
                    NokiaBrowser: "NokiaBrowser/[VER]",
                    Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                    MQQBrowser: "MQQBrowser/[VER]",
                    MicroMessenger: "MicroMessenger/[VER]",
                    baiduboxapp: "baiduboxapp/[VER]",
                    baidubrowser: "baidubrowser/[VER]",
                    SamsungBrowser: "SamsungBrowser/[VER]",
                    Iron: "Iron/[VER]",
                    Safari: ["Version/[VER]", "Safari/[VER]"],
                    Skyfire: "Skyfire/[VER]",
                    Tizen: "Tizen/[VER]",
                    Webkit: "webkit[ /][VER]",
                    PaleMoon: "PaleMoon/[VER]",
                    Gecko: "Gecko/[VER]",
                    Trident: "Trident/[VER]",
                    Presto: "Presto/[VER]",
                    Goanna: "Goanna/[VER]",
                    iOS: " \\bi?OS\\b [VER][ ;]{1}",
                    Android: "Android [VER]",
                    BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                    BREW: "BREW [VER]",
                    Java: "Java/[VER]",
                    "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                    webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                },
                utils: {
                    Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                    MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                    DesktopMode: "WPDesktop",
                    TV: "SonyDTV|HbbTV",
                    WebKit: "(webkit)[ /]([\\w.]+)",
                    Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                    Watch: "SM-V700"
                }
            },
            r.detectMobileBrowsers = {
                fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                tabletPattern: /android|ipad|playbook|silk/i
            };
            var d, o = Object.prototype.hasOwnProperty;
            return r.FALLBACK_PHONE = "UnknownPhone",
            r.FALLBACK_TABLET = "UnknownTablet",
            r.FALLBACK_MOBILE = "UnknownMobile",
            d = "isArray"in Array ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ,
            function() {
                var e, t, i, a, s, l, u = r.mobileDetectRules;
                for (e in u.props)
                    if (o.call(u.props, e)) {
                        for (t = u.props[e],
                        d(t) || (t = [t]),
                        s = t.length,
                        a = 0; a < s; ++a)
                            i = t[a],
                            l = i.indexOf("[VER]"),
                            l >= 0 && (i = i.substring(0, l) + "([\\w._\\+]+)" + i.substring(l + 5)),
                            t[a] = new RegExp(i,"i");
                        u.props[e] = t
                    }
                n(u.oss),
                n(u.phones),
                n(u.tablets),
                n(u.uas),
                n(u.utils),
                u.oss0 = {
                    WindowsPhoneOS: u.oss.WindowsPhoneOS,
                    WindowsMobileOS: u.oss.WindowsMobileOS
                }
            }(),
            r.findMatch = function(e, t) {
                for (var n in e)
                    if (o.call(e, n) && e[n].test(t))
                        return n;
                return null
            }
            ,
            r.findMatches = function(e, t) {
                var n = [];
                for (var i in e)
                    o.call(e, i) && e[i].test(t) && n.push(i);
                return n
            }
            ,
            r.getVersionStr = function(e, t) {
                var n, i, a, d, s = r.mobileDetectRules.props;
                if (o.call(s, e))
                    for (n = s[e],
                    a = n.length,
                    i = 0; i < a; ++i)
                        if (null !== (d = n[i].exec(t)))
                            return d[1];
                return null
            }
            ,
            r.getVersion = function(e, t) {
                var n = r.getVersionStr(e, t);
                return n ? r.prepareVersionNo(n) : NaN
            }
            ,
            r.prepareVersionNo = function(e) {
                var t;
                return t = e.split(/[a-z._ \/\-]/i),
                1 === t.length && (e = t[0]),
                t.length > 1 && (e = t[0] + ".",
                t.shift(),
                e += t.join("")),
                Number(e)
            }
            ,
            r.isMobileFallback = function(e) {
                return r.detectMobileBrowsers.fullPattern.test(e) || r.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
            }
            ,
            r.isTabletFallback = function(e) {
                return r.detectMobileBrowsers.tabletPattern.test(e)
            }
            ,
            r.prepareDetectionCache = function(e, t, n) {
                if (void 0 === e.mobile) {
                    var i, d, o;
                    if (d = r.findMatch(r.mobileDetectRules.tablets, t))
                        return e.mobile = e.tablet = d,
                        void (e.phone = null);
                    if (i = r.findMatch(r.mobileDetectRules.phones, t))
                        return e.mobile = e.phone = i,
                        void (e.tablet = null);
                    r.isMobileFallback(t) ? (o = a.isPhoneSized(n),
                    void 0 === o ? (e.mobile = r.FALLBACK_MOBILE,
                    e.tablet = e.phone = null) : o ? (e.mobile = e.phone = r.FALLBACK_PHONE,
                    e.tablet = null) : (e.mobile = e.tablet = r.FALLBACK_TABLET,
                    e.phone = null)) : r.isTabletFallback(t) ? (e.mobile = e.tablet = r.FALLBACK_TABLET,
                    e.phone = null) : e.mobile = e.tablet = e.phone = null
                }
            }
            ,
            r.mobileGrade = function(e) {
                var t = null !== e.mobile();
                return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"),
                "C")
            }
            ,
            r.detectOS = function(e) {
                return r.findMatch(r.mobileDetectRules.oss0, e) || r.findMatch(r.mobileDetectRules.oss, e)
            }
            ,
            r.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }
            ,
            a.prototype = {
                constructor: a,
                mobile: function() {
                    return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                    this._cache.mobile
                },
                phone: function() {
                    return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                    this._cache.phone
                },
                tablet: function() {
                    return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                    this._cache.tablet
                },
                userAgent: function() {
                    /*!mobile-detect v1.4.1 2017-12-24*/
                    /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
                    return void 0 === this._cache.userAgent && (this._cache.userAgent = r.findMatch(r.mobileDetectRules.uas, this.ua)),
                    this._cache.userAgent
                },
                userAgents: function() {
                    return void 0 === this._cache.userAgents && (this._cache.userAgents = r.findMatches(r.mobileDetectRules.uas, this.ua)),
                    this._cache.userAgents
                },
                os: function() {
                    return void 0 === this._cache.os && (this._cache.os = r.detectOS(this.ua)),
                    this._cache.os
                },
                version: function(e) {
                    return r.getVersion(e, this.ua)
                },
                versionStr: function(e) {
                    return r.getVersionStr(e, this.ua)
                },
                is: function(n) {
                    return t(this.userAgents(), n) || e(n, this.os()) || e(n, this.phone()) || e(n, this.tablet()) || t(r.findMatches(r.mobileDetectRules.utils, this.ua), n)
                },
                match: function(e) {
                    return e instanceof RegExp || (e = new RegExp(e,"i")),
                    e.test(this.ua)
                },
                isPhoneSized: function(e) {
                    return a.isPhoneSized(e || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    return void 0 === this._cache.grade && (this._cache.grade = r.mobileGrade(this)),
                    this._cache.grade
                }
            },
            "undefined" != typeof window && window.screen ? a.isPhoneSized = function(e) {
                return e < 0 ? void 0 : r.getDeviceSmallerSide() <= e
            }
            : a.isPhoneSized = function() {}
            ,
            a._impl = r,
            a.version = "1.4.1 2017-12-24",
            a
        })
    }(function(t) {
        return void 0 !== e && e.exports ? function(t) {
            e.exports = t()
        }
        : n(509)
    }())
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        if (t = t || {},
        n = new u.a(n),
        t.defaultCountry && !n.hasCountry(t.defaultCountry)) {
            if (t.v2)
                throw new l.a("INVALID_COUNTRY");
            throw new Error("Unknown country: ".concat(t.defaultCountry))
        }
        var i = r(e, t.v2, t.extract)
          , a = i.number
          , c = i.ext
          , f = i.error;
        if (!a) {
            if (t.v2) {
                if ("TOO_SHORT" === f)
                    throw new l.a("TOO_SHORT");
                throw new l.a("NOT_A_NUMBER")
            }
            return {}
        }
        var h = o(a, t.defaultCountry, t.defaultCallingCode, n)
          , p = h.country
          , v = h.nationalNumber
          , b = h.countryCallingCode
          , T = h.carrierCode;
        if (!n.hasSelectedNumberingPlan()) {
            if (t.v2)
                throw new l.a("INVALID_COUNTRY");
            return {}
        }
        if (!v || v.length < s.c) {
            if (t.v2)
                throw new l.a("TOO_SHORT");
            return {}
        }
        if (v.length > s.b) {
            if (t.v2)
                throw new l.a("TOO_LONG");
            return {}
        }
        if (t.v2) {
            var y = new g.a(b,v,n.metadata);
            return p && (y.country = p),
            T && (y.carrierCode = T),
            c && (y.ext = c),
            y
        }
        var S = !(t.extended ? !n.hasSelectedNumberingPlan() : !p) && Object($.a)(v, n.nationalNumberPattern());
        return t.extended ? {
            country: p,
            countryCallingCode: b,
            carrierCode: T,
            valid: S,
            possible: !!S || !(!0 !== t.extended || !n.possibleLengths() || !Object(m.b)(v, n)),
            phone: v,
            ext: c
        } : S ? d(p, v, c) : {}
    }
    function a(e, t, n) {
        if (e)
            if (e.length > S) {
                if (n)
                    throw new l.a("TOO_LONG")
            } else {
                if (!1 === t)
                    return e;
                var i = e.search(C);
                if (!(i < 0))
                    return e.slice(i).replace(P, "")
            }
    }
    function r(e, t, n) {
        if (e && 0 === e.indexOf("tel:"))
            return Object(v.b)(e);
        var i = a(e, n, t);
        if (!i)
            return {};
        if (!Object(c.a)(i))
            return Object(c.b)(i) ? {
                error: "TOO_SHORT"
            } : {};
        var r = Object(f.a)(i);
        return r.ext ? r : {
            number: i
        }
    }
    function d(e, t, n) {
        var i = {
            country: e,
            phone: t
        };
        return n && (i.ext = n),
        i
    }
    function o(e, t, n, i) {
        var a, r = Object(b.a)(Object(h.a)(e), t, n, i.metadata), d = r.countryCallingCode, o = r.number;
        if (d)
            i.selectNumberingPlan(d);
        else {
            if (!o || !t && !n)
                return {};
            i.selectNumberingPlan(t, n),
            t ? a = t : w && i.isNonGeographicCallingCode(n) && (a = "001"),
            d = n || Object(p.a)(t, i.metadata)
        }
        if (!o)
            return {
                countryCallingCode: d
            };
        var s = Object(T.a)(Object(h.a)(o), i)
          , l = s.nationalNumber
          , u = s.carrierCode
          , c = Object(y.a)(d, l, i);
        return c && (a = c,
        "001" === c || i.country(a)),
        {
            country: a,
            countryCallingCode: d,
            nationalNumber: l,
            carrierCode: u
        }
    }
    t.a = i;
    var s = n(31)
      , l = n(77)
      , u = n(13)
      , c = n(161)
      , f = n(531)
      , h = n(162)
      , p = n(163)
      , m = n(164)
      , v = n(111)
      , g = n(78)
      , $ = n(54)
      , b = n(166)
      , T = (n(116),
    n(167))
      , y = (n(115),
    n(169))
      , S = 250
      , C = new RegExp("[" + s.d + s.e + "]")
      , P = new RegExp("[^" + s.e + "#]+$")
      , w = !1
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e.length >= r.c && c.test(e)
    }
    function a(e) {
        return l.test(e)
    }
    t.a = i,
    t.b = a;
    var r = n(31)
      , d = n(110)
      , o = "[" + r.e + "]{" + r.c + "}"
      , s = "[" + r.d + "]{0,1}(?:[" + r.f + "]*[" + r.e + "]){3,}[" + r.f + r.e + "]*"
      , l = new RegExp("^[" + r.d + "]{0,1}(?:[" + r.f + "]*[" + r.e + "]){1,2}$","i")
      , u = s + "(?:" + Object(d.a)() + ")?"
      , c = new RegExp("^" + o + "$|^" + u + "$","i")
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = "", n = e.split(""), i = Array.isArray(n), r = 0, n = i ? n : n[Symbol.iterator](); ; ) {
            var d;
            if (i) {
                if (r >= n.length)
                    break;
                d = n[r++]
            } else {
                if (r = n.next(),
                r.done)
                    break;
                d = r.value
            }
            t += a(d, t) || ""
        }
        return t
    }
    function a(e, t) {
        if ("+" === e) {
            if (t)
                return;
            return "+"
        }
        return Object(r.b)(e)
    }
    t.a = i,
    t.b = a;
    var r = n(53)
}
, function(e, t, n) {
    "use strict";
    var i = n(13);
    n.d(t, "a", function() {
        return i.b
    })
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        if (void 0 === t && (t = {}),
        n = new r.a(n),
        t.v2) {
            if (!e.countryCallingCode)
                throw new Error("Invalid phone number object passed");
            n.selectNumberingPlan(e.countryCallingCode)
        } else {
            if (!e.phone)
                return !1;
            if (e.country) {
                if (!n.hasCountry(e.country))
                    throw new Error("Unknown country: ".concat(e.country));
                n.country(e.country)
            } else {
                if (!e.countryCallingCode)
                    throw new Error("Invalid phone number object passed");
                n.selectNumberingPlan(e.countryCallingCode)
            }
        }
        if (n.possibleLengths())
            return a(e.phone || e.nationalNumber, n);
        if (e.countryCallingCode && n.isNonGeographicCallingCode(e.countryCallingCode))
            return !0;
        throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
    }
    function a(e, t) {
        switch (Object(d.a)(e, t)) {
        case "IS_POSSIBLE":
            return !0;
        default:
            return !1
        }
    }
    t.a = i,
    t.b = a;
    var r = n(13)
      , d = n(61)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e.replace(new RegExp("[".concat(a.f, "]+"),"g"), " ").trim()
    }
    t.a = i;
    var a = n(31)
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n, i) {
        if (!e)
            return {};
        if ("+" !== e[0]) {
            var s = Object(a.a)(e, t, n, i);
            if (!s || s === e) {
                if (t || n) {
                    var l = Object(r.a)(e, t, n, i)
                      , u = l.countryCallingCode
                      , c = l.number;
                    if (u)
                        return {
                            countryCallingCode: u,
                            number: c
                        }
                }
                return {
                    number: e
                }
            }
            e = "+" + s
        }
        if ("0" === e[1])
            return {};
        i = new d.a(i);
        for (var f = 2; f - 1 <= o.a && f <= e.length; ) {
            var h = e.slice(1, f);
            if (i.hasCallingCode(h))
                return i.selectNumberingPlan(h),
                {
                    countryCallingCode: h,
                    number: e.slice(f)
                };
            f++
        }
        return {}
    }
    t.a = i;
    var a = n(115)
      , r = n(116)
      , d = n(13)
      , o = n(31)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        var n = Object(r.a)(e, t)
          , i = n.nationalNumber
          , d = n.carrierCode;
        if (!a(e, i, t))
            return {
                nationalNumber: e
            };
        if (e.length !== i.length + (d ? d.length : 0) && t.possibleLengths())
            switch (Object(o.a)(i, t)) {
            case "TOO_SHORT":
            case "INVALID_LENGTH":
                return {
                    nationalNumber: e
                }
            }
        return {
            nationalNumber: i,
            carrierCode: d
        }
    }
    function a(e, t, n) {
        return !(Object(d.a)(e, n.nationalNumberPattern()) && !Object(d.a)(t, n.nationalNumberPattern()))
    }
    t.a = i;
    var r = n(168)
      , d = n(54)
      , o = n(61)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (e && t.numberingPlan.nationalPrefixForParsing()) {
            var n = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")")
              , i = n.exec(e);
            if (i) {
                var a, r, d = i.length - 1, o = d > 0 && i[d];
                if (t.nationalPrefixTransformRule() && o)
                    a = e.replace(n, t.nationalPrefixTransformRule()),
                    d > 1 && (r = i[1]);
                else {
                    var s = i[0];
                    a = e.slice(s.length),
                    o && (r = i[1])
                }
                var l;
                if (o) {
                    var u = e.indexOf(i[1]);
                    e.slice(0, u) === t.numberingPlan.nationalPrefix() && (l = t.numberingPlan.nationalPrefix())
                } else
                    l = i[0];
                return {
                    nationalNumber: a,
                    nationalPrefix: l,
                    carrierCode: r
                }
            }
        }
        return {
            nationalNumber: e
        }
    }
    t.a = i
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        if (o && n.isNonGeographicCallingCode(e))
            return "001";
        var i = n.getCountryCodesForCallingCode(e);
        if (i)
            return 1 === i.length ? i[0] : a(i, t, n.metadata)
    }
    function a(e, t, n) {
        n = new r.a(n);
        for (var i = e, a = Array.isArray(i), o = 0, i = a ? i : i[Symbol.iterator](); ; ) {
            var s;
            if (a) {
                if (o >= i.length)
                    break;
                s = i[o++]
            } else {
                if (o = i.next(),
                o.done)
                    break;
                s = o.value
            }
            var l = s;
            if (n.country(l),
            n.leadingDigits()) {
                if (t && 0 === t.search(n.leadingDigits()))
                    return l
            } else if (Object(d.a)({
                phone: t,
                country: l
            }, void 0, n.metadata))
                return l
        }
    }
    t.a = i;
    var r = n(13)
      , d = n(113)
      , o = !1
}
, function(e, t, n) {
    "use strict";
    function i() {
        var e = Object(r.b)(arguments)
          , t = e.text
          , n = e.options
          , i = e.metadata;
        return Object(a.a)(t, n, i)
    }
    t.a = i;
    var a = n(540)
      , r = n(48)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return !(!f.test(e) && !v.test(e)) && g.test(e)
    }
    function a(e) {
        return "%" === e || p.test(e)
    }
    n.d(t, "g", function() {
        return d
    }),
    n.d(t, "a", function() {
        return o
    }),
    n.d(t, "c", function() {
        return s
    }),
    n.d(t, "f", function() {
        return l
    }),
    n.d(t, "b", function() {
        return u
    }),
    t.e = i,
    t.d = a;
    var r = "   ᠎ - \u2028\u2029  　"
      , d = "[".concat(r, "]")
      , o = "[^".concat(r, "]")
      , s = "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９"
      , l = "[".concat("0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９", "]")
      , u = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
      , c = "[".concat(u, "]")
      , f = new RegExp(c)
      , h = "[".concat("$¢-¥֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦", "]")
      , p = new RegExp(h)
      , m = "[".concat("̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦", "]")
      , v = new RegExp(m)
      , g = new RegExp("[\0--ÿĀ-ſḀ-ỿƀ-ɏ̀-ͯ]")
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function a() {
        var e = Object(r.b)(arguments)
          , t = e.text
          , n = e.options
          , a = e.metadata
          , o = new d.a(t,n,a);
        return i({}, Symbol.iterator, function() {
            return {
                next: function() {
                    return o.hasNext() ? {
                        done: !1,
                        value: o.next()
                    } : {
                        done: !0
                    }
                }
            }
        })
    }
    t.a = a;
    var r = n(48)
      , d = n(118)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                r(e, t, n[t])
            })
        }
        return e
    }
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function d(e, t, n, i) {
        var a = o(t, n, i);
        return Object(s.a)(e, a.options, a.metadata)
    }
    function o(e, t, n) {
        return n ? e && (t = a({}, t, {
            defaultCountry: e
        })) : t ? (n = t,
        t = e ? l(e) ? e : {
            defaultCountry: e
        } : void 0) : (n = e,
        t = void 0),
        {
            options: a({}, t, {
                v2: !0
            }),
            metadata: n
        }
    }
    t.a = d,
    t.b = o;
    var s = n(170)
      , l = function(e) {
        return "object" === i(e)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function a(e, t) {
        return o(e) || d(e, t) || r()
    }
    function r() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function d(e, t) {
        var n = []
          , i = !0
          , a = !1
          , r = void 0;
        try {
            for (var d, o = e[Symbol.iterator](); !(i = (d = o.next()).done) && (n.push(d.value),
            !t || n.length !== t); i = !0)
                ;
        } catch (e) {
            a = !0,
            r = e
        } finally {
            try {
                i || null == o.return || o.return()
            } finally {
                if (a)
                    throw r
            }
        }
        return n
    }
    function o(e) {
        if (Array.isArray(e))
            return e
    }
    function s(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function u(e, t, n) {
        return t && l(e.prototype, t),
        n && l(e, n),
        e
    }
    n.d(t, "a", function() {
        return g
    });
    var c = n(13)
      , f = n(78)
      , h = n(548)
      , p = n(175)
      , m = n(551)
      , v = n(169)
      , g = function() {
        function e(t, n) {
            s(this, e),
            this.metadata = new c.a(n);
            var i = this.getCountryAndCallingCode(t)
              , r = a(i, 2)
              , d = r[0]
              , o = r[1];
            this.defaultCountry = d,
            this.defaultCallingCode = o,
            this.reset()
        }
        return u(e, [{
            key: "getCountryAndCallingCode",
            value: function(e) {
                var t, n;
                return e && ("object" === i(e) ? (t = e.defaultCountry,
                n = e.defaultCallingCode) : t = e),
                t && !this.metadata.hasCountry(t) && (t = void 0),
                [t, n]
            }
        }, {
            key: "input",
            value: function(e) {
                var t = this.parser.input(e, this.state)
                  , n = t.digits;
                if (t.justLeadingPlus)
                    this.formattedOutput = "+";
                else if (n) {
                    this.determineTheCountryIfNeeded(),
                    this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
                    var i;
                    if (this.metadata.hasSelectedNumberingPlan() && (i = this.formatter.format(n, this.state)),
                    void 0 === i && this.parser.reExtractNationalSignificantNumber(this.state)) {
                        this.determineTheCountryIfNeeded();
                        var a = this.state.getNationalDigits();
                        a && (i = this.formatter.format(a, this.state))
                    }
                    this.formattedOutput = i ? this.getFullNumber(i) : this.getNonFormattedNumber()
                }
                return this.formattedOutput
            }
        }, {
            key: "reset",
            value: function() {
                var e = this;
                return this.state = new h.a({
                    onCountryChange: function(t) {
                        e.country = t
                    },
                    onCallingCodeChange: function(t, n) {
                        e.metadata.selectNumberingPlan(t, n),
                        e.formatter.reset(e.metadata.numberingPlan, e.state),
                        e.parser.reset(e.metadata.numberingPlan)
                    }
                }),
                this.formatter = new p.b({
                    state: this.state,
                    metadata: this.metadata
                }),
                this.parser = new m.a({
                    defaultCountry: this.defaultCountry,
                    defaultCallingCode: this.defaultCallingCode,
                    metadata: this.metadata,
                    state: this.state,
                    onNationalSignificantNumberChange: function() {
                        e.determineTheCountryIfNeeded(),
                        e.formatter.reset(e.metadata.numberingPlan, e.state)
                    }
                }),
                this.state.reset(this.defaultCountry, this.defaultCallingCode),
                this.formattedOutput = "",
                this
            }
        }, {
            key: "isInternational",
            value: function() {
                return this.state.international
            }
        }, {
            key: "getCallingCode",
            value: function() {
                return this.state.callingCode
            }
        }, {
            key: "getCountryCallingCode",
            value: function() {
                return this.getCallingCode()
            }
        }, {
            key: "getCountry",
            value: function() {
                var e = this.state
                  , t = e.digits
                  , n = e.country;
                if (t) {
                    var i = n;
                    return i
                }
            }
        }, {
            key: "determineTheCountryIfNeeded",
            value: function() {
                this.state.country && !this.isCountryCallingCodeAmbiguous() || this.determineTheCountry()
            }
        }, {
            key: "getFullNumber",
            value: function(e) {
                var t = this;
                if (this.isInternational()) {
                    var n = function(e) {
                        return t.formatter.getInternationalPrefixBeforeCountryCallingCode(t.state, {
                            spacing: !!e
                        }) + e
                    }
                      , i = this.state.callingCode;
                    return n(i ? e ? "".concat(i, " ").concat(e) : i : "".concat(this.state.getDigitsWithoutInternationalPrefix()))
                }
                return e
            }
        }, {
            key: "getNonFormattedNationalNumberWithPrefix",
            value: function() {
                var e = this.state
                  , t = e.nationalSignificantNumber
                  , n = e.complexPrefixBeforeNationalSignificantNumber
                  , i = e.nationalPrefix
                  , a = t
                  , r = n || i;
                return r && (a = r + a),
                a
            }
        }, {
            key: "getNonFormattedNumber",
            value: function() {
                var e = this.state.nationalSignificantNumberMatchesInput;
                return this.getFullNumber(e ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits())
            }
        }, {
            key: "getNonFormattedTemplate",
            value: function() {
                var e = this.getNonFormattedNumber();
                if (e)
                    return e.replace(/[\+\d]/g, p.a)
            }
        }, {
            key: "isCountryCallingCodeAmbiguous",
            value: function() {
                var e = this.state.callingCode
                  , t = this.metadata.getCountryCodesForCallingCode(e);
                return t && t.length > 1
            }
        }, {
            key: "determineTheCountry",
            value: function() {
                this.state.setCountry(Object(v.a)(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, this.state.nationalSignificantNumber, this.metadata))
            }
        }, {
            key: "getNumber",
            value: function() {
                var e = this.state
                  , t = e.nationalSignificantNumber
                  , n = e.carrierCode;
                if (this.isInternational()) {
                    if (!this.state.callingCode)
                        return
                } else if (!this.state.country && !this.defaultCallingCode)
                    return;
                if (t) {
                    var i = this.getCountry()
                      , a = this.getCountryCallingCode() || this.defaultCallingCode
                      , r = new f.a(i || a,t,this.metadata.metadata);
                    return n && (r.carrierCode = n),
                    r
                }
            }
        }, {
            key: "isPossible",
            value: function() {
                var e = this.getNumber();
                return !!e && e.isPossible()
            }
        }, {
            key: "isValid",
            value: function() {
                var e = this.getNumber();
                return !!e && e.isValid()
            }
        }, {
            key: "getNationalNumber",
            value: function() {
                return this.state.nationalSignificantNumber
            }
        }, {
            key: "getChars",
            value: function() {
                return (this.state.international ? "+" : "") + this.state.digits
            }
        }, {
            key: "getTemplate",
            value: function() {
                return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || ""
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r(e, t, n) {
        return t && a(e.prototype, t),
        n && a(e, n),
        e
    }
    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    n.d(t, "b", function() {
        return b
    });
    var o = n(176)
      , s = n(549)
      , l = n(550)
      , u = n(53);
    n.d(t, "a", function() {
        return o.a
    });
    var c = n(114)
      , f = n(31)
      , h = n(165)
      , p = Object(o.d)("9", 15)
      , m = /[- ]/
      , v = function() {
        return /\[([^\[\]])*\]/g
    }
      , g = function() {
        return /\d(?=[^,}][^,}])/g
    }
      , $ = new RegExp("^[" + f.f + "]*(\\$\\d[" + f.f + "]*)+$")
      , b = function() {
        function e(t) {
            var n = this
              , a = (t.state,
            t.metadata);
            i(this, e),
            d(this, "getSeparatorAfterNationalPrefix", function(e) {
                return n.isNANP ? " " : e && e.nationalPrefixFormattingRule() && m.test(e.nationalPrefixFormattingRule()) ? " " : ""
            }),
            d(this, "shouldTryNationalPrefixFormattingRule", function(e, t) {
                var n = t.international
                  , i = t.nationalPrefix;
                if (e.nationalPrefixFormattingRule()) {
                    var a = e.usesNationalPrefix();
                    if (a && i || !a && !n)
                        return !0
                }
            }),
            this.metadata = a,
            this.resetFormat()
        }
        return r(e, [{
            key: "resetFormat",
            value: function() {
                this.chosenFormat = void 0,
                this.template = void 0,
                this.nationalNumberTemplate = void 0,
                this.populatedNationalNumberTemplate = void 0,
                this.populatedNationalNumberTemplatePosition = -1
            }
        }, {
            key: "reset",
            value: function(e, t) {
                this.resetFormat(),
                e ? (this.isNANP = "1" === e.callingCode(),
                this.matchingFormats = e.formats(),
                t.nationalSignificantNumber && this.narrowDownMatchingFormats(t)) : (this.isNANP = void 0,
                this.matchingFormats = [])
            }
        }, {
            key: "format",
            value: function(e, t) {
                var n = this;
                if (Object(s.a)(t.nationalSignificantNumber, this.metadata))
                    for (var i = this.matchingFormats, a = Array.isArray(i), r = 0, i = a ? i : i[Symbol.iterator](); ; ) {
                        var d;
                        if (a) {
                            if (r >= i.length)
                                break;
                            d = i[r++]
                        } else {
                            if (r = i.next(),
                            r.done)
                                break;
                            d = r.value
                        }
                        var l = d
                          , u = Object(s.b)(t, l, {
                            metadata: this.metadata,
                            shouldTryNationalPrefixFormattingRule: function(e) {
                                return n.shouldTryNationalPrefixFormattingRule(e, {
                                    international: t.international,
                                    nationalPrefix: t.nationalPrefix
                                })
                            },
                            getSeparatorAfterNationalPrefix: this.getSeparatorAfterNationalPrefix
                        });
                        if (u)
                            return this.resetFormat(),
                            this.chosenFormat = l,
                            this.setNationalNumberTemplate(u.replace(/\d/g, o.a), t),
                            this.populatedNationalNumberTemplate = u,
                            this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(o.a),
                            u
                    }
                return this.formatNationalNumberWithNextDigits(e, t)
            }
        }, {
            key: "formatNationalNumberWithNextDigits",
            value: function(e, t) {
                var n = this.chosenFormat
                  , i = this.chooseFormat(t);
                if (i)
                    return i === n ? this.formatNextNationalNumberDigits(e) : this.formatNextNationalNumberDigits(t.getNationalDigits())
            }
        }, {
            key: "narrowDownMatchingFormats",
            value: function(e) {
                var t = this
                  , n = e.nationalSignificantNumber
                  , i = e.nationalPrefix
                  , a = e.international
                  , r = n
                  , d = r.length - 3;
                d < 0 && (d = 0),
                this.matchingFormats = this.matchingFormats.filter(function(e) {
                    return t.formatSuits(e, a, i) && t.formatMatches(e, r, d)
                }),
                this.chosenFormat && -1 === this.matchingFormats.indexOf(this.chosenFormat) && this.resetFormat()
            }
        }, {
            key: "formatSuits",
            value: function(e, t, n) {
                return !(n && !e.usesNationalPrefix() && !e.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) && !(!t && !n && e.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
            }
        }, {
            key: "formatMatches",
            value: function(e, t, n) {
                var i = e.leadingDigitsPatterns().length;
                if (0 === i)
                    return !0;
                n = Math.min(n, i - 1);
                var a = e.leadingDigitsPatterns()[n];
                if (t.length < 3)
                    try {
                        return void 0 !== new l.a(a).match(t, {
                            allowOverflow: !0
                        })
                    } catch (e) {
                        return console.error(e),
                        !0
                    }
                return new RegExp("^(".concat(a, ")")).test(t)
            }
        }, {
            key: "getFormatFormat",
            value: function(e, t) {
                return t ? e.internationalFormat() : e.format()
            }
        }, {
            key: "chooseFormat",
            value: function(e) {
                var t = this;
                e: for (var n = this.matchingFormats.slice(), i = Array.isArray(n), a = 0, n = i ? n : n[Symbol.iterator](); ; ) {
                    var r, d = function() {
                        if (i) {
                            if (a >= n.length)
                                return "break";
                            r = n[a++]
                        } else {
                            if (a = n.next(),
                            a.done)
                                return "break";
                            r = a.value
                        }
                        var d = r;
                        return t.chosenFormat === d ? "break" : $.test(t.getFormatFormat(d, e.international)) ? t.createTemplateForFormat(d, e) ? (t.chosenFormat = d,
                        "break") : (t.matchingFormats = t.matchingFormats.filter(function(e) {
                            return e !== d
                        }),
                        "continue") : "continue"
                    }();
                    switch (d) {
                    case "break":
                        break e;
                    case "continue":
                        continue
                    }
                }
                return this.chosenFormat || this.resetFormat(),
                this.chosenFormat
            }
        }, {
            key: "createTemplateForFormat",
            value: function(e, t) {
                if (!(e.pattern().indexOf("|") >= 0)) {
                    var n = this.getTemplateForFormat(e, t);
                    return n ? (this.setNationalNumberTemplate(n, t),
                    !0) : void 0
                }
            }
        }, {
            key: "getInternationalPrefixBeforeCountryCallingCode",
            value: function(e, t) {
                var n = e.IDDPrefix
                  , i = e.missingPlus;
                return n ? t && !1 === t.spacing ? n : n + " " : i ? "" : "+"
            }
        }, {
            key: "getTemplate",
            value: function(e) {
                if (this.template) {
                    for (var t = -1, n = 0, i = e.international ? this.getInternationalPrefixBeforeCountryCallingCode(e, {
                        spacing: !1
                    }) : ""; n < i.length + e.getDigitsWithoutInternationalPrefix().length; )
                        t = this.template.indexOf(o.a, t + 1),
                        n++;
                    return Object(o.b)(this.template, t + 1)
                }
            }
        }, {
            key: "setNationalNumberTemplate",
            value: function(e, t) {
                this.nationalNumberTemplate = e,
                this.populatedNationalNumberTemplate = e,
                this.populatedNationalNumberTemplatePosition = -1,
                t.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(t).replace(/[\d\+]/g, o.a) + Object(o.d)(o.a, t.callingCode.length) + " " + e : this.template = e
            }
        }, {
            key: "getTemplateForFormat",
            value: function(e, t) {
                var n = t.nationalSignificantNumber
                  , i = t.international
                  , a = t.nationalPrefix
                  , r = t.complexPrefixBeforeNationalSignificantNumber
                  , d = e.pattern();
                d = d.replace(v(), "\\d").replace(g(), "\\d");
                var s = p.match(d)[0];
                if (!(n.length > s.length)) {
                    var l = new RegExp("^" + d + "$")
                      , f = n.replace(/\d/g, "9");
                    l.test(f) && (s = f);
                    var m, $ = this.getFormatFormat(e, i);
                    if (this.shouldTryNationalPrefixFormattingRule(e, {
                        international: i,
                        nationalPrefix: a
                    })) {
                        var b = $.replace(c.a, e.nationalPrefixFormattingRule());
                        if (Object(u.a)(e.nationalPrefixFormattingRule()) === (a || "") + Object(u.a)("$1") && ($ = b,
                        m = !0,
                        a))
                            for (var T = a.length; T > 0; )
                                $ = $.replace(/\d/, o.a),
                                T--
                    }
                    var y = s.replace(new RegExp(d), $).replace(new RegExp("9","g"), o.a);
                    return m || (r ? y = Object(o.d)(o.a, r.length) + " " + y : a && (y = Object(o.d)(o.a, a.length) + this.getSeparatorAfterNationalPrefix(e) + y)),
                    i && (y = Object(h.a)(y)),
                    y
                }
            }
        }, {
            key: "formatNextNationalNumberDigits",
            value: function(e) {
                var t = Object(o.c)(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, e);
                return t ? (this.populatedNationalNumberTemplate = t[0],
                this.populatedNationalNumberTemplatePosition = t[1],
                Object(o.b)(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)) : void this.resetFormat()
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (t < 1)
            return "";
        for (var n = ""; t > 1; )
            1 & t && (n += e),
            t >>= 1,
            e += e;
        return n + e
    }
    function a(e, t) {
        return ")" === e[t] && t++,
        r(e.slice(0, t))
    }
    function r(e) {
        for (var t = [], n = 0; n < e.length; )
            "(" === e[n] ? t.push(n) : ")" === e[n] && t.pop(),
            n++;
        var i = 0
          , a = "";
        t.push(e.length);
        for (var r = 0, d = t; r < d.length; r++) {
            var o = d[r];
            a += e.slice(i, o),
            i = o + 1
        }
        return a
    }
    function d(e, t, n) {
        for (var i = n.split(""), a = Array.isArray(i), r = 0, i = a ? i : i[Symbol.iterator](); ; ) {
            var d;
            if (a) {
                if (r >= i.length)
                    break;
                d = i[r++]
            } else {
                if (r = i.next(),
                r.done)
                    break;
                d = r.value
            }
            var o = d;
            if (e.slice(t + 1).search(s) < 0)
                return;
            t = e.search(s),
            e = e.replace(s, o)
        }
        return [e, t]
    }
    n.d(t, "a", function() {
        return o
    }),
    t.d = i,
    t.b = a,
    t.c = d;
    var o = "x"
      , s = new RegExp(o)
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    n(55),
    e.exports = n(501)
}
, function(e, t, n) {
    "use strict";
    n(502);
    var i = n(503)
      , a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(i);
    window.academy.pages = new a.default
}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function i(a, r) {
                    try {
                        var d = t[a](r)
                          , o = d.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!d.done)
                        return Promise.resolve(o).then(function(e) {
                            i("next", e)
                        }, function(e) {
                            i("throw", e)
                        });
                    e(o)
                }
                return i("next")
            }
            )
        }
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(e) {
        return fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + e + "&key=AIzaSyCP_XwYhoMEq3AKV5ce9vOQO-j4ScHqzs4", {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(e) {
            if (e.status >= 400)
                throw new Error("Bad response from server. Status: " + e.status);
            return e.json()
        }).then(function(e) {
            return e
        })
    }
    function o() {
        return (46656 * Math.random() | 0).toString(36).slice(-3) + (46656 * Math.random() | 0).toString(36).slice(-3)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var s = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , l = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , u = n(504)
      , c = n(507)
      , f = i(c)
      , h = n(508)
      , p = i(h)
      , m = n(159)
      , v = i(m)
      , g = n(510)
      , $ = i(g)
      , b = n(76)
      , T = i(b)
      , y = n(522)
      , S = i(y)
      , C = n(573)
      , P = n(60)
      , w = i(P);
    n(575);
    var E = n(576)
      , x = i(E)
      , M = new v.default(window.navigator.userAgent)
      , A = !!M.mobile()
      , G = []
      , O = null
      , I = 0;
    A && (document.querySelector("html").classList.add("mobile"),
    (new Image).src = n(577),
    (new Image).src = n(578));
    var N = function() {
        function e() {
            r(this, e),
            this.config = {
                popUp: {
                    animateTime: 300
                }
            },
            this.isMobile = A,
            this._started3D = !1,
            this._deviceView = new p.default,
            this._init()
        }
        return l(e, [{
            key: "_closeTooltips",
            value: function(e) {
                document.querySelectorAll(".tooltip.open").forEach(function(t) {
                    for (var n = e.target; n && n !== t; )
                        n = n.parentNode;
                    n !== t && t.classList.remove("open")
                })
            }
        }, {
            key: "_init",
            value: function() {
                function e() {
                    return t.apply(this, arguments)
                }
                var t = a(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return this._initMobileNav(),
                                this._initStopStart3D(),
                                this._page__request(),
                                e.prev = 3,
                                e.next = 6,
                                this._initVideos();
                            case 6:
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(3),
                                console.error(e.t0);
                            case 11:
                                this._initPopUp(),
                                this._initForms(),
                                this._initSwiper(),
                                this._initScrollingTo(),
                                A || this._initParallax(),
                                this._initTooltip(),
                                this._initDetails();
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[3, 8]])
                }));
                return e
            }()
        }, {
            key: "_initDetails",
            value: function() {
                document.querySelectorAll(".details").forEach(function(e) {
                    var t = e.querySelector(".summary")
                      , n = e.querySelector(".content");
                    if (t && n) {
                        var i = n.querySelector("p");
                        i && t.addEventListener("click", function() {
                            e.classList.toggle("open"),
                            e.classList.contains("open") ? n.style.height = i.offsetHeight + "px" : n.style.height = 0
                        }, !1)
                    }
                })
            }
        }, {
            key: "_initScrollingTo",
            value: function() {
                document.querySelectorAll(".scroll-to").forEach(function(e) {
                    e.addEventListener("click", function(t) {
                        var n = e.closest(".scroll")
                          , i = void 0;
                        if (n && e.dataset.scrollTo && (i = n.querySelector(e.dataset.scrollTo))) {
                            var a = {
                                scrollTo: 0
                            };
                            (0,
                            f.default)({
                                targets: a,
                                scrollTo: i.getBoundingClientRect().top,
                                duration: 500,
                                easing: "easeOutQuad",
                                begin: function() {
                                    n.classList.add("animating")
                                },
                                update: function() {
                                    n.scrollTop = a.scrollTo
                                },
                                complete: function(e) {
                                    n.classList.remove("animating")
                                }
                            }),
                            t.stopPropagation(),
                            t.preventDefault()
                        }
                    })
                })
            }
        }, {
            key: "_initTooltip",
            value: function() {
                document.querySelectorAll(".tooltip-open, .tooltip-close").forEach(function(e) {
                    var t = e.closest(".tooltip");
                    t || (t = e.closest(".tooltip-containing").querySelector(".tooltip")),
                    t && e.addEventListener("click", function(e) {
                        t.classList.toggle("open"),
                        e.stopPropagation()
                    })
                });
                var e = this;
                window.addEventListener("ontouchstart"in window ? "touchstart" : "click", function(t) {
                    e._closeTooltips(t)
                })
            }
        }, {
            key: "_initParallax",
            value: function() {
                var e = [];
                document.querySelectorAll("[data-parallax]").forEach(function(t) {
                    var n = t.closest(".scroll");
                    if (n) {
                        var i = e.find(function(e) {
                            return e.scrollingContent === n
                        })
                          , a = {
                            elem: t,
                            options: JSON.parse(t.dataset.parallax)
                        };
                        i ? i.elems.push(a) : e.push({
                            scrollingContent: n,
                            elems: [a]
                        })
                    }
                }),
                e.forEach(function(e) {
                    var t = function() {
                        e.elems.forEach(function(t) {
                            t.elem.style.transform = "translate3d(0," + (e.scrollingContent.scrollTop * t.options.perspective + t.options.y).toFixed(2) + "px, 0)"
                        })
                    };
                    e.scrollingContent.addEventListener("scroll", t),
                    t()
                })
            }
        }, {
            key: "_initVideos",
            value: function() {
                function e() {
                    return t.apply(this, arguments)
                }
                var t = a(regeneratorRuntime.mark(function e() {
                    var t, n, i, a, r, s, l, u, c = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t = regeneratorRuntime.mark(function e(t) {
                                    var n, i, a, r;
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if (t.dataset.playListId) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return", "continue");
                                            case 2:
                                                return e.next = 4,
                                                d(t.dataset.playListId);
                                            case 4:
                                                n = e.sent,
                                                i = t.querySelector(".list"),
                                                n.items.slice(0, 4).forEach(function(e) {
                                                    var t = document.createElement("a");
                                                    t.dataset.videoId = e.snippet.resourceId.videoId,
                                                    t.classList.add("item");
                                                    var n = new Image;
                                                    n.src = c._getVideoThumbnailUrl(e.snippet.thumbnails),
                                                    t.appendChild(n),
                                                    i.appendChild(t)
                                                }),
                                                a = 0;
                                            case 8:
                                                if (!(a < i.childNodes.length)) {
                                                    e.next = 16;
                                                    break
                                                }
                                                if (r = i.childNodes[a],
                                                "mWsWg1hxSF0" !== r.dataset.videoId) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return i.insertBefore(r, i.childNodes[0]),
                                                e.abrupt("break", 16);
                                            case 13:
                                                a++,
                                                e.next = 8;
                                                break;
                                            case 16:
                                            case "end":
                                                return e.stop()
                                            }
                                    }, e, c)
                                }),
                                n = !0,
                                i = !1,
                                a = void 0,
                                e.prev = 4,
                                r = document.querySelectorAll(".videos")[Symbol.iterator]();
                            case 6:
                                if (n = (s = r.next()).done) {
                                    e.next = 15;
                                    break
                                }
                                return l = s.value,
                                e.delegateYield(t(l), "t0", 9);
                            case 9:
                                if ("continue" !== (u = e.t0)) {
                                    e.next = 12;
                                    break
                                }
                                return e.abrupt("continue", 12);
                            case 12:
                                n = !0,
                                e.next = 6;
                                break;
                            case 15:
                                e.next = 21;
                                break;
                            case 17:
                                e.prev = 17,
                                e.t1 = e.catch(4),
                                i = !0,
                                a = e.t1;
                            case 21:
                                e.prev = 21,
                                e.prev = 22,
                                !n && r.return && r.return();
                            case 24:
                                if (e.prev = 24,
                                !i) {
                                    e.next = 27;
                                    break
                                }
                                throw a;
                            case 27:
                                return e.finish(24);
                            case 28:
                                return e.finish(21);
                            case 29:
                                document.querySelectorAll(".videos .item").forEach(function(e) {
                                    var t = e.closest(".videos")
                                      , n = t.querySelector(".show")
                                      , i = t.querySelector(".overlay");
                                    n.addEventListener("closed", function() {
                                        n.player && (n.player.stopVideo(),
                                        i.classList.remove("visible"))
                                    }),
                                    e.addEventListener("click", function(t) {
                                        if (!n.player) {
                                            var a = document.createElement("div");
                                            a.id = "video-" + o(),
                                            n.appendChild(a),
                                            n.player = (0,
                                            $.default)(a.id, {
                                                playerVars: {
                                                    showinfo: 0
                                                }
                                            })
                                        }
                                        if (document.documentElement.clientWidth > 1024) {
                                            var r = document.querySelector(".menu-icon-button-sound");
                                            r.classList.contains("on") && r.click()
                                        }
                                        var d = (0,
                                        C.getPopUp)(n, c.config.popUp);
                                        d.isOpen() || d.up(),
                                        n.player.loadVideoById({
                                            videoId: e.dataset.videoId,
                                            startSeconds: 0
                                        }),
                                        A ? n.player.stopVideo() : n.player.playVideo(),
                                        i.classList.add("visible"),
                                        t.stopPropagation(),
                                        t.preventDefault()
                                    })
                                });
                            case 30:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[4, 17, 21, 29], [22, , 24, 28]])
                }));
                return e
            }()
        }, {
            key: "_getVideoThumbnailUrl",
            value: function(e) {
                return e.maxres ? e.maxres.url : e.standard ? e.standard.url : e.high ? (console.log(e),
                e.high.url) : e.medium ? e.medium.url : e.default.url
            }
        }, {
            key: "_initMobileNav",
            value: function() {
                var e = document.querySelector("html")
                  , t = document.querySelector(".no-render-page")
                  , n = t.querySelector("nav");
                n.querySelector("a.ico").addEventListener("click", function(t) {
                    n.classList.toggle("open"),
                    e.classList.toggle("nav-mobile-open")
                }),
                t.querySelector(".page-wrap").addEventListener("scroll", function(e) {
                    var t = n.getBoundingClientRect();
                    e.target.scrollTop > t.height ? n.classList.add("collapsed") : n.classList.remove("collapsed")
                })
            }
        }, {
            key: "_globalStart3D",
            value: function() {
                if (!this._started3D) {
                    var e = window.academy["3d"]
                      , t = document.getElementById("preloader");
                    if (!this.isMobile && e) {
                        var n = new u.Preloader(t);
                        n.start();
                        var i = function(e) {
                            document.querySelectorAll(".progress-3d-loaded").forEach(function(t) {
                                t.innerHTML = e.progress
                            })
                        }
                          , a = function t() {
                            e.removeEventListener(T.default.LOAD_PROGRESS_CHANGE, i),
                            e.removeEventListener(T.default.LOAD, t),
                            document.querySelectorAll(".progress-3d-loaded").forEach(function(e) {
                                var t = e.parentNode
                                  , i = t.parentNode
                                  , a = i.querySelector(".buttons");
                                t.classList.add("text-hide"),
                                a.classList.remove("buttons-hide"),
                                i.classList.add("bottom--position");
                                var r = function e() {
                                    n.hidden(),
                                    a.querySelector("#button-start").removeEventListener("click", e)
                                }
                                  , d = function e() {
                                    w.default.toggleSound(),
                                    n.hidden(),
                                    a.querySelector("#button-sound-off").removeEventListener("click", e)
                                };
                                a.querySelector("#button-start").addEventListener("click", r),
                                a.querySelector("#button-sound-off").addEventListener("click", d)
                            })
                        };
                        e.addEventListener(T.default.LOAD_PROGRESS_CHANGE, i),
                        e.addEventListener(T.default.LOAD, a),
                        e.run()
                    } else
                        t.parentNode.removeChild(t);
                    this._started3D = !0
                }
            }
        }, {
            key: "_initStopStart3D",
            value: function() {
                var e = this
                  , t = function() {
                    var t = window.academy["3d"];
                    if (e._deviceView.isMobile())
                        return t && t.pause(),
                        void (e._informerSwiper && (e._informerSwiper.allowTouchMove = e._deviceView.isPhone()));
                    if (e._globalStart3D(),
                    O) {
                        I = 0;
                        for (var n = 0; n < G.length && G[n].classList.contains("past"); n++)
                            I += G[n].offsetWidth;
                        O.width = I + "px"
                    }
                    t && ((0,
                    C.getOpenedPopUp)() ? t.pause() : t.play())
                };
                window.addEventListener("resize", t),
                document.querySelectorAll(".page").forEach(function(e) {
                    e.addEventListener("closed", t),
                    e.addEventListener("open", t)
                }),
                t()
            }
        }, {
            key: "_initPopUp",
            value: function() {
                var e = this
                  , t = document.querySelector(".popup-pages")
                  , n = t.querySelector(".bottom-menu-container")
                  , i = n.querySelector("ul")
                  , a = window.academy["3d"];
                if (O = document.querySelector(".bottom-menu-progress-bar").style,
                I = 0,
                a && a.addEventListener(T.default.PROGRESS_CHANGE, function(e) {
                    I = 0;
                    for (var t = 0; t < G.length; t++)
                        t <= e.progressCheckpointIndex ? (G[t].classList.add("past"),
                        I += G[t].offsetWidth) : G[t].classList.remove("past");
                    O.width = I + "px"
                }),
                t.querySelectorAll(".page").forEach(function(e) {
                    var t = s({
                        menu: !0
                    }, e.dataset.pageSettings ? JSON.parse(e.dataset.pageSettings) : {});
                    if (t.menu) {
                        var n = t.title ? t.title : e.querySelector("h1").textContent.replace(". Базовый курс", "").replace(": Basic course", "")
                          , a = document.createElement("li")
                          , r = e.getAttribute("id")
                          , d = document.createElement("a");
                        G.push(a),
                        d.setAttribute("href", "#" + r),
                        d.classList.add("page-open"),
                        d.appendChild(document.createTextNode(n)),
                        a.appendChild(d),
                        i.appendChild(a)
                    }
                }),
                document.querySelectorAll(".page-open").forEach(function(t) {
                    function n(e) {
                        t.classList.toggle("active")
                    }
                    if (document.querySelector(t.hash)) {
                        var i = (0,
                        C.getPopUp)(t.hash, e.config.popUp);
                        i.e.addEventListener("close", n),
                        i.e.addEventListener("open", n);
                        var a = e;
                        t.addEventListener("click", function(n) {
                            if (w.default.playClickSound(),
                            i.isOpen())
                                i.down();
                            else {
                                if ((t.dataset.pageOpenSettings ? JSON.parse(t.dataset.pageOpenSettings) : {}).defer) {
                                    var r = function() {
                                        (0,
                                        C.getPopUp)(t.closest(".popup"), e.config.popUp).up()
                                    }
                                      , d = function e() {
                                        i.e.removeEventListener("close", e),
                                        i.close.removeEventListener("click", r)
                                    };
                                    i.close.addEventListener("click", r),
                                    i.e.addEventListener("closed", d)
                                }
                                i.up()
                            }
                            a._closeTooltips(n),
                            n.stopPropagation(),
                            n.preventDefault()
                        })
                    }
                }),
                document.querySelectorAll(".page-close").forEach(function(t) {
                    t.addEventListener("click", function(n) {
                        var i = t.hash ? document.querySelector(t.hash) : t.closest(".popup");
                        if (i && i.id) {
                            var a = (0,
                            C.getPopUp)(i, e.config.popUp);
                            a && a.isOpen() && a.down(),
                            n.stopPropagation(),
                            n.preventDefault()
                        }
                    })
                }),
                window.addEventListener("keydown", function(e) {
                    var t = void 0;
                    "Escape" === e.key && (t = (0,
                    C.getOpenedPopUp)()) && t.down()
                }),
                location.hash)
                    try {
                        (0,
                        C.getPopUp)(location.hash, this.config.popUp).up()
                    } catch (e) {}
            }
        }, {
            key: "_initForms",
            value: function() {
                document.querySelectorAll("form.form-request").forEach(function(e) {
                    (0,
                    S.default)(e)
                }),
                document.querySelectorAll(".form-reset").forEach(function(e) {
                    e.addEventListener("click", function(t) {
                        var n = e.dataset.formId ? document.querySelector('form[data-form-id="' + e.dataset.formId + '"]') : e.closest("form");
                        if (n) {
                            (0,
                            S.default)(n).reset(),
                            t.stopPropagation(),
                            t.preventDefault()
                        }
                    })
                })
            }
        }, {
            key: "_initSwiper",
            value: function() {
                var e = new x.default(".swiper-container",{
                    slidesPerView: "auto",
                    spaceBetween: 0
                });
                this._informerSwiper = null;
                for (var t = 0; t < e.length; t++)
                    if (e[t].el.querySelector(".informer")) {
                        this._informerSwiper = e[t],
                        this._informerSwiper.allowTouchMove = this._deviceView.isPhone();
                        break
                    }
            }
        }, {
            key: "_page__request",
            value: function() {
                document.querySelectorAll(".page").forEach(function(e) {
                    e.addEventListener("closed", function(t) {
                        var n = (0,
                        S.default)(e.querySelector("form.form-request"));
                        n && n.is("lastStep") && n.reset()
                    })
                })
            }
        }]),
        e
    }();
    t.default = N
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t, n, i, a) {
        var r = null
          , d = null
          , o = 0
          , s = function() {
            e.apply(a, d)
        };
        return function() {
            ++o,
            d = arguments,
            clearTimeout(r),
            r = setTimeout(s, !n || o > n ? t : i)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Preloader = void 0;
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }();
    n(505);
    var d = n(506)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(d)
      , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
      , l = function() {
        function e(t) {
            i(this, e),
            this.preloaderContainer = t,
            this.html = document.querySelector("html"),
            this._requestHidden = !1,
            this.isSafari = function() {
                return /version.*safari/i.test(navigator.userAgent.toLowerCase())
            }(),
            this._resizeLoader = this._resizeLoader.bind(this)
        }
        return r(e, [{
            key: "_initCommon",
            value: function() {
                var e = o.default.replace("[% i18n_use_controls %]", window.i18n.use_controls);
                e = e.replace("[% i18n_button %]", window.i18n.button),
                e = e.replace("[% i18n_sound %]", window.i18n.sound),
                "en" === window.i18n.language ? (e = e.replace("[% i18n_loaded_en %]", window.i18n.loading + ": "),
                e = e.replace("[% i18n_loaded_ru %]", "")) : "ru" === window.i18n.language && (e = e.replace("[% i18n_loaded_en %]", ""),
                e = e.replace("[% i18n_loaded_ru %]", window.i18n.loading));
                var t = document.createElement("div");
                t.classList.add("media-container", "common"),
                t.classList.add("common"),
                t.innerHTML = e,
                this.preloaderContainer.appendChild(t),
                ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend", "transitionend", "webkitTransitionEnd", "oTransitionEnd", "otransitionend", "MSTransitionEnd"].forEach(function(e) {
                    t.addEventListener(e, function(e) {
                        e.stopPropagation()
                    })
                })
            }
        }, {
            key: "start",
            value: function() {
                this._alreadyStart || (this._initCommon(),
                this._resizeLoader(),
                window.addEventListener("resize", this._resizeLoader),
                this._alreadyStart = !0)
            }
        }, {
            key: "hidden",
            value: function() {
                var e = this;
                this._alreadyHidden || (["transitionend", "webkitTransitionEnd", "oTransitionEnd", "otransitionend", "MSTransitionEnd"].forEach(function(t) {
                    e.preloaderContainer.addEventListener(t, a(function() {
                        e._clear()
                    }, 150))
                }),
                this.preloaderContainer.classList.add("close"),
                this._alreadyHidden = !0)
            }
        }, {
            key: "_clear",
            value: function() {
                this._alreadyClear || (window.removeEventListener("resize", this._resizeLoader),
                this.html.classList.remove("preloader"),
                this.preloaderContainer.parentNode && this.preloaderContainer.parentNode.removeChild(this.preloaderContainer),
                this._alreadyClear = !0)
            }
        }, {
            key: "_resizeLoader",
            value: function() {
                var e = this;
                s(function() {
                    var t = e.preloaderContainer.getBoundingClientRect();
                    t.width / t.height < 1 ? e.preloaderContainer.classList.add("by-height") : e.preloaderContainer.classList.remove("by-height")
                })
            }
        }]),
        e
    }();
    t.Preloader = l
}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = '\n<div class="top">\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="386px" height="70px" viewBox="0 0 386 70">\n        <style>\n    @keyframes mouse-academy_t { 0% { transform: translate(110px,0px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 66.6666% { transform: translate(110px,2px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(110px,0px); } }\n    @keyframes mouse-scroll_t { 0% { transform: translate(0px,-1.5px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 66.6666% { transform: translate(0px,4.5px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(0px,-1.5px); } }\n    @keyframes arrow-R_t { 0% { transform: translate(259px,45px) scale(1,1) translate(-149px,-45px); } 66.6666% { transform: translate(259px,45px) scale(1,1) translate(-149px,-45px); } 68.8888% { transform: translate(259px,45px) scale(0.95,0.95) translate(-149px,-45px); } 81.1111% { transform: translate(259px,45px) scale(0.95,0.95) translate(-149px,-45px); } 83.3333% { transform: translate(259px,45px) scale(1,1) translate(-149px,-45px); } 100% { transform: translate(259px,45px) scale(1,1) translate(-149px,-45px); } }\n    @keyframes arrow-R_f { 0% { fill: #FFFFFF; } 66.6667% { fill: #FFFFFF; } 68.8889% { fill: #ed4159; } 81.1111% { fill: #ed4159; } 83.3333% { fill: #FFFFFF; } 100% { fill: #ffffff; } }\n    @keyframes arrow-L_t { 0% { transform: translate(199px,45px) scale(1,1) translate(-89px,-45px); } 50% { transform: translate(199px,45px) scale(1,1) translate(-89px,-45px); } 52.2222% { transform: translate(199px,45px) scale(0.95,0.95) translate(-89px,-45px); } 64.4444% { transform: translate(199px,45px) scale(0.95,0.95) translate(-89px,-45px); } 66.6666% { transform: translate(199px,45px) scale(1,1) translate(-89px,-45px); } 100% { transform: translate(199px,45px) scale(1,1) translate(-89px,-45px); } }\n    @keyframes arrow-L_f { 0% { fill: #FFFFFF; } 50% { fill: #FFFFFF; } 52.2222% { fill: #ed4159; } 64.4444% { fill: #ed4159; } 66.6667% { fill: #FFFFFF; } 100% { fill: #ffffff; } }\n    @keyframes arrow-D_t { 0% { transform: translate(229px,45px) scale(1,1) translate(-119px,-45px); } 16.6666% { transform: translate(229px,45px) scale(1,1) translate(-119px,-45px); } 18.8888% { transform: translate(229px,45px) scale(0.95,0.95) translate(-119px,-45px); } 31.1111% { transform: translate(229px,45px) scale(0.95,0.95) translate(-119px,-45px); } 33.3333% { transform: translate(229px,45px) scale(1,1) translate(-119px,-45px); } 100% { transform: translate(229px,45px) scale(1,1) translate(-119px,-45px); } }\n    @keyframes arrow-D_f { 0% { fill: #FFFFFF; } 16.6667% { fill: #FFFFFF; } 18.8889% { fill: #ed4159; } 31.1111% { fill: #ed4159; } 33.3333% { fill: #FFFFFF; } 100% { fill: #FFFFFF; } }\n    @keyframes arrow-U_t { 0% { transform: translate(229px,15px) scale(1,1) translate(-119px,-15px); } 2.2222% { transform: translate(229px,15px) scale(0.95,0.95) translate(-119px,-15px); } 14.4444% { transform: translate(229px,15px) scale(0.95,0.95) translate(-119px,-15px); } 16.6666% { transform: translate(229px,15px) scale(1,1) translate(-119px,-15px); } 100% { transform: translate(229px,15px) scale(1,1) translate(-119px,-15px); } }\n    @keyframes arrow-U_f { 0% { fill: #ffffff; } 2.2222% { fill: #ed4159; } 14.4444% { fill: #ed4159; } 16.6667% { fill: #ffffff; } 100% { fill: #ffffff; } }\n        </style>\n        <title>academy-preloader</title>\n        <desc>Created with Sketch.</desc>\n        <g id="mouse-academy" transform="translate(128,30) translate(-18,-30)" style="animation: mouse-academy_t 1s linear infinite both;">\n            <path id="mouse-shape" d="M18,2C9.16344,2,2,9.16344,2,18L2,42C2,50.8366,9.16344,58,18,58C26.8366,58,34,50.8366,34,42L34,18C34,9.16344,26.8366,2,18,2ZM18,0C27.9411,0,36,8.05887,36,18L36,42C36,51.9411,27.9411,60,18,60C8.05887,60,0,51.9411,0,42L0,18C0,8.05887,8.05887,0,18,0Z" fill="#FFFFFF" fill-rule="nonzero" stroke="none" stroke-width="1"/>\n            <path id="mouse-scroll" d="M18,14C19.1046,14,20,14.8954,20,16L20,23C20,24.1046,19.1046,25,18,25C16.8954,25,16,24.1046,16,23L16,16C16,14.8954,16.8954,14,18,14Z" fill="#ED4159" stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(18,18) translate(-18,-19.5)" style="animation: mouse-scroll_t 1s linear infinite both;"/>\n        </g>\n        <path id="arrow-R" d="M162,54C162,56.2091,160.209,58,158,58L140,58C137.791,58,136,56.2091,136,54L136,36C136,33.7909,137.791,32,140,32L158,32C160.209,32,162,33.7909,162,36L162,54ZM160,54L160,36C160,34.8954,159.105,34,158,34L140,34C138.895,34,138,34.8954,138,36L138,54C138,55.1046,138.895,56,140,56L158,56C159.105,56,160,55.1046,160,54ZM149.586,45L147.293,42.7071C146.902,42.3166,146.902,41.6834,147.293,41.2929C147.683,40.9024,148.317,40.9024,148.707,41.2929L151.707,44.2929C152.098,44.6834,152.098,45.3166,151.707,45.7071L148.707,48.7071C148.317,49.0976,147.683,49.0976,147.293,48.7071C146.902,48.3166,146.902,47.6834,147.293,47.2929L149.586,45Z" fill="#FFFFFF" fill-rule="nonzero" stroke="none" stroke-width="1" transform="translate(259,45) translate(-149,-45)" style="animation: arrow-R_t 3s linear infinite both, arrow-R_f 3s linear infinite both;"/>\n        <path id="arrow-L" d="M76,54L76,36C76,33.7909,77.7909,32,80,32L98,32C100.209,32,102,33.7909,102,36L102,54C102,56.2091,100.209,58,98,58L80,58C77.7909,58,76,56.2091,76,54ZM78,54C78,55.1046,78.8954,56,80,56L98,56C99.1046,56,100,55.1046,100,54L100,36C100,34.8954,99.1046,34,98,34L80,34C78.8954,34,78,34.8954,78,36L78,54ZM88.4142,45L90.7071,47.2929C91.0976,47.6834,91.0976,48.3166,90.7071,48.7071C90.3166,49.0976,89.6834,49.0976,89.2929,48.7071L86.2929,45.7071C85.9024,45.3166,85.9024,44.6834,86.2929,44.2929L89.2929,41.2929C89.6834,40.9024,90.3166,40.9024,90.7071,41.2929C91.0976,41.6834,91.0976,42.3166,90.7071,42.7071L88.4142,45Z" fill="#FFFFFF" fill-rule="nonzero" stroke="none" stroke-width="1" transform="translate(199,45) translate(-89,-45)" style="animation: arrow-L_t 3s linear infinite both, arrow-L_f 3s linear infinite both;"/>\n        <path id="arrow-D" d="M128,58L110,58C107.791,58,106,56.2091,106,54L106,36C106,33.7909,107.791,32,110,32L128,32C130.209,32,132,33.7909,132,36L132,54C132,56.2091,130.209,58,128,58ZM128,56C129.105,56,130,55.1046,130,54L130,36C130,34.8954,129.105,34,128,34L110,34C108.895,34,108,34.8954,108,36L108,54C108,55.1046,108.895,56,110,56L128,56ZM119,45.5858L121.293,43.2929C121.683,42.9024,122.317,42.9024,122.707,43.2929C123.098,43.6834,123.098,44.3166,122.707,44.7071L119.707,47.7071C119.317,48.0976,118.683,48.0976,118.293,47.7071L115.293,44.7071C114.902,44.3166,114.902,43.6834,115.293,43.2929C115.683,42.9024,116.317,42.9024,116.707,43.2929L119,45.5858Z" fill="#FFFFFF" fill-rule="nonzero" stroke="none" stroke-width="1" transform="translate(229,45) translate(-119,-45)" style="animation: arrow-D_t 3s linear infinite both, arrow-D_f 3s linear infinite both;"/>\n        <path id="arrow-U" d="M110,2L128,2C130.209,2,132,3.79086,132,6L132,24C132,26.2091,130.209,28,128,28L110,28C107.791,28,106,26.2091,106,24L106,6C106,3.79086,107.791,2,110,2ZM110,4C108.895,4,108,4.89543,108,6L108,24C108,25.1046,108.895,26,110,26L128,26C129.105,26,130,25.1046,130,24L130,6C130,4.89543,129.105,4,128,4L110,4ZM119,14.4142L116.707,16.7071C116.317,17.0976,115.683,17.0976,115.293,16.7071C114.902,16.3166,114.902,15.6834,115.293,15.2929L118.293,12.2929C118.683,11.9024,119.317,11.9024,119.707,12.2929L122.707,15.2929C123.098,15.6834,123.098,16.3166,122.707,16.7071C122.317,17.0976,121.683,17.0976,121.293,16.7071L119,14.4142Z" fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" transform="translate(229,15) translate(-119,-15)" style="animation: arrow-U_t 3s linear infinite both, arrow-U_f 3s linear infinite both;"/>\n    </svg>\n    \n    <p>[% i18n_use_controls %]</p>\n</div>\n<div class="bottom">\n    <div class="text">[% i18n_loaded_en %]<span class="progress-3d-loaded"></span>% [% i18n_loaded_ru %]</div>\n    <div class="buttons buttons-hide">\n        <div class="button-container-start">\n            <span class="button button-red--border-red" id="button-start">\n                <span class="button-content">\n                    <span class="button-text">[% i18n_button %]</span>\n                </span>\n            </span>\n        </div>\n        <div class="button-container-sound">\n            <span class="button button-transparent" id="button-sound-off">\n                <span class="button-content">\n                    <span class="button-text">[% i18n_sound %]</span>\n                </span>\n            </span>\n        </div>\n    </div>\n</div>\n\n'
}
, function(e, t, n) {
    (function(n) {
        var i, a, r, d = {
            scope: {}
        };
        d.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
            if (n.get || n.set)
                throw new TypeError("ES3 does not support getters and setters.");
            e != Array.prototype && e != Object.prototype && (e[t] = n.value)
        }
        ,
        d.getGlobal = function(e) {
            return "undefined" != typeof window && window === e ? e : void 0 !== n && null != n ? n : e
        }
        ,
        d.global = d.getGlobal(this),
        d.SYMBOL_PREFIX = "jscomp_symbol_",
        d.initSymbol = function() {
            d.initSymbol = function() {}
            ,
            d.global.Symbol || (d.global.Symbol = d.Symbol)
        }
        ,
        d.symbolCounter_ = 0,
        d.Symbol = function(e) {
            return d.SYMBOL_PREFIX + (e || "") + d.symbolCounter_++
        }
        ,
        d.initSymbolIterator = function() {
            d.initSymbol();
            var e = d.global.Symbol.iterator;
            e || (e = d.global.Symbol.iterator = d.global.Symbol("iterator")),
            "function" != typeof Array.prototype[e] && d.defineProperty(Array.prototype, e, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return d.arrayIterator(this)
                }
            }),
            d.initSymbolIterator = function() {}
        }
        ,
        d.arrayIterator = function(e) {
            var t = 0;
            return d.iteratorPrototype(function() {
                return t < e.length ? {
                    done: !1,
                    value: e[t++]
                } : {
                    done: !0
                }
            })
        }
        ,
        d.iteratorPrototype = function(e) {
            return d.initSymbolIterator(),
            e = {
                next: e
            },
            e[d.global.Symbol.iterator] = function() {
                return this
            }
            ,
            e
        }
        ,
        d.array = d.array || {},
        d.iteratorFromArray = function(e, t) {
            d.initSymbolIterator(),
            e instanceof String && (e += "");
            var n = 0
              , i = {
                next: function() {
                    if (n < e.length) {
                        var a = n++;
                        return {
                            value: t(a, e[a]),
                            done: !1
                        }
                    }
                    return i.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                    ,
                    i.next()
                }
            };
            return i[Symbol.iterator] = function() {
                return i
            }
            ,
            i
        }
        ,
        d.polyfill = function(e, t, n, i) {
            if (t) {
                for (n = d.global,
                e = e.split("."),
                i = 0; i < e.length - 1; i++) {
                    var a = e[i];
                    a in n || (n[a] = {}),
                    n = n[a]
                }
                e = e[e.length - 1],
                i = n[e],
                t = t(i),
                t != i && null != t && d.defineProperty(n, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        }
        ,
        d.polyfill("Array.prototype.keys", function(e) {
            return e || function() {
                return d.iteratorFromArray(this, function(e) {
                    return e
                })
            }
        }, "es6-impl", "es3");
        var o = this;
        !function(n, d) {
            a = [],
            i = d,
            void 0 !== (r = "function" == typeof i ? i.apply(t, a) : i) && (e.exports = r)
        }(0, function() {
            function e(e) {
                if (!B.col(e))
                    try {
                        return document.querySelectorAll(e)
                    } catch (e) {}
            }
            function t(e, t) {
                for (var n = e.length, i = 2 <= arguments.length ? arguments[1] : void 0, a = [], r = 0; r < n; r++)
                    if (r in e) {
                        var d = e[r];
                        t.call(i, d, r, e) && a.push(d)
                    }
                return a
            }
            function n(e) {
                return e.reduce(function(e, t) {
                    return e.concat(B.arr(t) ? n(t) : t)
                }, [])
            }
            function i(t) {
                return B.arr(t) ? t : (B.str(t) && (t = e(t) || t),
                t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
            }
            function a(e, t) {
                return e.some(function(e) {
                    return e === t
                })
            }
            function r(e) {
                var t, n = {};
                for (t in e)
                    n[t] = e[t];
                return n
            }
            function d(e, t) {
                var n, i = r(e);
                for (n in e)
                    i[n] = t.hasOwnProperty(n) ? t[n] : e[n];
                return i
            }
            function s(e, t) {
                var n, i = r(e);
                for (n in t)
                    i[n] = B.und(e[n]) ? t[n] : e[n];
                return i
            }
            function l(e) {
                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                    return t + t + n + n + i + i
                });
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                e = parseInt(t[1], 16);
                var n = parseInt(t[2], 16)
                  , t = parseInt(t[3], 16);
                return "rgba(" + e + "," + n + "," + t + ",1)"
            }
            function u(e) {
                function t(e, t, n) {
                    return 0 > n && (n += 1),
                    1 < n && --n,
                    n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                }
                var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
                e = parseInt(n[1]) / 360;
                var i = parseInt(n[2]) / 100
                  , a = parseInt(n[3]) / 100
                  , n = n[4] || 1;
                if (0 == i)
                    a = i = e = a;
                else {
                    var r = .5 > a ? a * (1 + i) : a + i - a * i
                      , d = 2 * a - r
                      , a = t(d, r, e + 1 / 3)
                      , i = t(d, r, e);
                    e = t(d, r, e - 1 / 3)
                }
                return "rgba(" + 255 * a + "," + 255 * i + "," + 255 * e + "," + n + ")"
            }
            function c(e) {
                if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))
                    return e[2]
            }
            function f(e) {
                return -1 < e.indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0
            }
            function h(e, t) {
                return B.fnc(e) ? e(t.target, t.id, t.total) : e
            }
            function p(e, t) {
                if (t in e.style)
                    return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
            }
            function m(e, t) {
                return B.dom(e) && a(D, t) ? "transform" : B.dom(e) && (e.getAttribute(t) || B.svg(e) && e[t]) ? "attribute" : B.dom(e) && "transform" !== t && p(e, t) ? "css" : null != e[t] ? "object" : void 0
            }
            function v(e, n) {
                var i = f(n)
                  , i = -1 < n.indexOf("scale") ? 1 : 0 + i;
                if (!(e = e.style.transform))
                    return i;
                for (var a = [], r = [], d = [], o = /(\w+)\((.+?)\)/g; a = o.exec(e); )
                    r.push(a[1]),
                    d.push(a[2]);
                return e = t(d, function(e, t) {
                    return r[t] === n
                }),
                e.length ? e[0] : i
            }
            function g(e, t) {
                switch (m(e, t)) {
                case "transform":
                    return v(e, t);
                case "css":
                    return p(e, t);
                case "attribute":
                    return e.getAttribute(t)
                }
                return e[t] || 0
            }
            function $(e, t) {
                var n = /^(\*=|\+=|-=)/.exec(e);
                if (!n)
                    return e;
                var i = c(e) || 0;
                switch (t = parseFloat(t),
                e = parseFloat(e.replace(n[0], "")),
                n[0][0]) {
                case "+":
                    return t + e + i;
                case "-":
                    return t - e + i;
                case "*":
                    return t * e + i
                }
            }
            function b(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }
            function T(e) {
                e = e.points;
                for (var t, n = 0, i = 0; i < e.numberOfItems; i++) {
                    var a = e.getItem(i);
                    0 < i && (n += b(t, a)),
                    t = a
                }
                return n
            }
            function y(e) {
                if (e.getTotalLength)
                    return e.getTotalLength();
                switch (e.tagName.toLowerCase()) {
                case "circle":
                    return 2 * Math.PI * e.getAttribute("r");
                case "rect":
                    return 2 * e.getAttribute("width") + 2 * e.getAttribute("height");
                case "line":
                    return b({
                        x: e.getAttribute("x1"),
                        y: e.getAttribute("y1")
                    }, {
                        x: e.getAttribute("x2"),
                        y: e.getAttribute("y2")
                    });
                case "polyline":
                    return T(e);
                case "polygon":
                    var t = e.points;
                    return T(e) + b(t.getItem(t.numberOfItems - 1), t.getItem(0))
                }
            }
            function S(e, t) {
                function n(n) {
                    return n = void 0 === n ? 0 : n,
                    e.el.getPointAtLength(1 <= t + n ? t + n : 0)
                }
                var i = n()
                  , a = n(-1)
                  , r = n(1);
                switch (e.property) {
                case "x":
                    return i.x;
                case "y":
                    return i.y;
                case "angle":
                    return 180 * Math.atan2(r.y - a.y, r.x - a.x) / Math.PI
                }
            }
            function C(e, t) {
                var n, i = /-?\d*\.?\d+/g;
                if (n = B.pth(e) ? e.totalLength : e,
                B.col(n))
                    if (B.rgb(n)) {
                        var a = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
                        n = a ? "rgba(" + a[1] + ",1)" : n
                    } else
                        n = B.hex(n) ? l(n) : B.hsl(n) ? u(n) : void 0;
                else
                    a = (a = c(n)) ? n.substr(0, n.length - a.length) : n,
                    n = t && !/\s/g.test(n) ? a + t : a;
                return n += "",
                {
                    original: n,
                    numbers: n.match(i) ? n.match(i).map(Number) : [0],
                    strings: B.str(e) || t ? n.split(i) : []
                }
            }
            function P(e) {
                return e = e ? n(B.arr(e) ? e.map(i) : i(e)) : [],
                t(e, function(e, t, n) {
                    return n.indexOf(e) === t
                })
            }
            function w(e) {
                var t = P(e);
                return t.map(function(e, n) {
                    return {
                        target: e,
                        id: n,
                        total: t.length
                    }
                })
            }
            function E(e, t) {
                var n = r(t);
                if (B.arr(e)) {
                    var a = e.length;
                    2 !== a || B.obj(e[0]) ? B.fnc(t.duration) || (n.duration = t.duration / a) : e = {
                        value: e
                    }
                }
                return i(e).map(function(e, n) {
                    return n = n ? 0 : t.delay,
                    e = B.obj(e) && !B.pth(e) ? e : {
                        value: e
                    },
                    B.und(e.delay) && (e.delay = n),
                    e
                }).map(function(e) {
                    return s(e, n)
                })
            }
            function x(e, t) {
                var n, i = {};
                for (n in e) {
                    var a = h(e[n], t);
                    B.arr(a) && (a = a.map(function(e) {
                        return h(e, t)
                    }),
                    1 === a.length && (a = a[0])),
                    i[n] = a
                }
                return i.duration = parseFloat(i.duration),
                i.delay = parseFloat(i.delay),
                i
            }
            function M(e) {
                return B.arr(e) ? F.apply(this, e) : _[e]
            }
            function A(e, t) {
                var n;
                return e.tweens.map(function(i) {
                    i = x(i, t);
                    var a = i.value
                      , r = g(t.target, e.name)
                      , d = n ? n.to.original : r
                      , d = B.arr(a) ? a[0] : d
                      , o = $(B.arr(a) ? a[1] : a, d)
                      , r = c(o) || c(d) || c(r);
                    return i.from = C(d, r),
                    i.to = C(o, r),
                    i.start = n ? n.end : e.offset,
                    i.end = i.start + i.delay + i.duration,
                    i.easing = M(i.easing),
                    i.elasticity = (1e3 - Math.min(Math.max(i.elasticity, 1), 999)) / 1e3,
                    i.isPath = B.pth(a),
                    i.isColor = B.col(i.from.original),
                    i.isColor && (i.round = 1),
                    n = i
                })
            }
            function G(e, i) {
                return t(n(e.map(function(e) {
                    return i.map(function(t) {
                        var n = m(e.target, t.name);
                        if (n) {
                            var i = A(t, e);
                            t = {
                                type: n,
                                property: t.name,
                                animatable: e,
                                tweens: i,
                                duration: i[i.length - 1].end,
                                delay: i[0].delay
                            }
                        } else
                            t = void 0;
                        return t
                    })
                })), function(e) {
                    return !B.und(e)
                })
            }
            function O(e, t, n, i) {
                var a = "delay" === e;
                return t.length ? (a ? Math.min : Math.max).apply(Math, t.map(function(t) {
                    return t[e]
                })) : a ? i.delay : n.offset + i.delay + i.duration
            }
            function I(e) {
                var t, n = d(L, e), i = d(H, e), a = w(e.targets), r = [], o = s(n, i);
                for (t in e)
                    o.hasOwnProperty(t) || "targets" === t || r.push({
                        name: t,
                        offset: o.offset,
                        tweens: E(e[t], i)
                    });
                return e = G(a, r),
                s(n, {
                    children: [],
                    animatables: a,
                    animations: e,
                    duration: O("duration", e, n, i),
                    delay: O("delay", e, n, i)
                })
            }
            function N(e) {
                function n() {
                    return window.Promise && new Promise(function(e) {
                        return c = e
                    }
                    )
                }
                function i(e) {
                    return h.reversed ? h.duration - e : e
                }
                function a(e) {
                    for (var n = 0, i = {}, a = h.animations, r = a.length; n < r; ) {
                        var d = a[n]
                          , o = d.animatable
                          , s = d.tweens
                          , l = s.length - 1
                          , u = s[l];
                        l && (u = t(s, function(t) {
                            return e < t.end
                        })[0] || u);
                        for (var s = Math.min(Math.max(e - u.start - u.delay, 0), u.duration) / u.duration, c = isNaN(s) ? 1 : u.easing(s, u.elasticity), s = u.to.strings, f = u.round, l = [], m = void 0, m = u.to.numbers.length, v = 0; v < m; v++) {
                            var g = void 0
                              , g = u.to.numbers[v]
                              , $ = u.from.numbers[v]
                              , g = u.isPath ? S(u.value, c * g) : $ + c * (g - $);
                            f && (u.isColor && 2 < v || (g = Math.round(g * f) / f)),
                            l.push(g)
                        }
                        if (u = s.length)
                            for (m = s[0],
                            c = 0; c < u; c++)
                                f = s[c + 1],
                                v = l[c],
                                isNaN(v) || (m = f ? m + (v + f) : m + (v + " "));
                        else
                            m = l[0];
                        R[d.type](o.target, d.property, m, i, o.id),
                        d.currentValue = m,
                        n++
                    }
                    if (n = Object.keys(i).length)
                        for (a = 0; a < n; a++)
                            k || (k = p(document.body, "transform") ? "transform" : "-webkit-transform"),
                            h.animatables[a].target.style[k] = i[a].join(" ");
                    h.currentTime = e,
                    h.progress = e / h.duration * 100
                }
                function r(e) {
                    h[e] && h[e](h)
                }
                function d() {
                    h.remaining && !0 !== h.remaining && h.remaining--
                }
                function o(e) {
                    var t = h.duration
                      , o = h.offset
                      , p = o + h.delay
                      , m = h.currentTime
                      , v = h.reversed
                      , g = i(e);
                    if (h.children.length) {
                        var $ = h.children
                          , b = $.length;
                        if (g >= h.currentTime)
                            for (var T = 0; T < b; T++)
                                $[T].seek(g);
                        else
                            for (; b--; )
                                $[b].seek(g)
                    }
                    (g >= p || !t) && (h.began || (h.began = !0,
                    r("begin")),
                    r("run")),
                    g > o && g < t ? a(g) : (g <= o && 0 !== m && (a(0),
                    v && d()),
                    (g >= t && m !== t || !t) && (a(t),
                    v || d())),
                    r("update"),
                    e >= t && (h.remaining ? (l = s,
                    "alternate" === h.direction && (h.reversed = !h.reversed)) : (h.pause(),
                    h.completed || (h.completed = !0,
                    r("complete"),
                    "Promise"in window && (c(),
                    f = n()))),
                    u = 0)
                }
                e = void 0 === e ? {} : e;
                var s, l, u = 0, c = null, f = n(), h = I(e);
                return h.reset = function() {
                    var e = h.direction
                      , t = h.loop;
                    for (h.currentTime = 0,
                    h.progress = 0,
                    h.paused = !0,
                    h.began = !1,
                    h.completed = !1,
                    h.reversed = "reverse" === e,
                    h.remaining = "alternate" === e && 1 === t ? 2 : t,
                    a(0),
                    e = h.children.length; e--; )
                        h.children[e].reset()
                }
                ,
                h.tick = function(e) {
                    s = e,
                    l || (l = s),
                    o((u + s - l) * N.speed)
                }
                ,
                h.seek = function(e) {
                    o(i(e))
                }
                ,
                h.pause = function() {
                    var e = V.indexOf(h);
                    -1 < e && V.splice(e, 1),
                    h.paused = !0
                }
                ,
                h.play = function() {
                    h.paused && (h.paused = !1,
                    l = 0,
                    u = i(h.currentTime),
                    V.push(h),
                    z || j())
                }
                ,
                h.reverse = function() {
                    h.reversed = !h.reversed,
                    l = 0,
                    u = i(h.currentTime)
                }
                ,
                h.restart = function() {
                    h.pause(),
                    h.reset(),
                    h.play()
                }
                ,
                h.finished = f,
                h.reset(),
                h.autoplay && h.play(),
                h
            }
            var k, L = {
                update: void 0,
                begin: void 0,
                run: void 0,
                complete: void 0,
                loop: 1,
                direction: "normal",
                autoplay: !0,
                offset: 0
            }, H = {
                duration: 1e3,
                delay: 0,
                easing: "easeOutElastic",
                elasticity: 500,
                round: 0
            }, D = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), B = {
                arr: function(e) {
                    return Array.isArray(e)
                },
                obj: function(e) {
                    return -1 < Object.prototype.toString.call(e).indexOf("Object")
                },
                pth: function(e) {
                    return B.obj(e) && e.hasOwnProperty("totalLength")
                },
                svg: function(e) {
                    return e instanceof SVGElement
                },
                dom: function(e) {
                    return e.nodeType || B.svg(e)
                },
                str: function(e) {
                    return "string" == typeof e
                },
                fnc: function(e) {
                    return "function" == typeof e
                },
                und: function(e) {
                    return void 0 === e
                },
                hex: function(e) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                },
                rgb: function(e) {
                    return /^rgb/.test(e)
                },
                hsl: function(e) {
                    return /^hsl/.test(e)
                },
                col: function(e) {
                    return B.hex(e) || B.rgb(e) || B.hsl(e)
                }
            }, F = function() {
                function e(e, t, n) {
                    return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
                }
                return function(t, n, i, a) {
                    if (0 <= t && 1 >= t && 0 <= i && 1 >= i) {
                        var r = new Float32Array(11);
                        if (t !== n || i !== a)
                            for (var d = 0; 11 > d; ++d)
                                r[d] = e(.1 * d, t, i);
                        return function(d) {
                            if (t === n && i === a)
                                return d;
                            if (0 === d)
                                return 0;
                            if (1 === d)
                                return 1;
                            for (var o = 0, s = 1; 10 !== s && r[s] <= d; ++s)
                                o += .1;
                            --s;
                            var s = o + (d - r[s]) / (r[s + 1] - r[s]) * .1
                              , l = 3 * (1 - 3 * i + 3 * t) * s * s + 2 * (3 * i - 6 * t) * s + 3 * t;
                            if (.001 <= l) {
                                for (o = 0; 4 > o && 0 !== (l = 3 * (1 - 3 * i + 3 * t) * s * s + 2 * (3 * i - 6 * t) * s + 3 * t); ++o)
                                    var u = e(s, t, i) - d
                                      , s = s - u / l;
                                d = s
                            } else if (0 === l)
                                d = s;
                            else {
                                var s = o
                                  , o = o + .1
                                  , c = 0;
                                do {
                                    u = s + (o - s) / 2,
                                    l = e(u, t, i) - d,
                                    0 < l ? o = u : s = u
                                } while (1e-7 < Math.abs(l) && 10 > ++c);
                                d = u
                            }
                            return e(d, n, a)
                        }
                    }
                }
            }(), _ = function() {
                function e(e, t) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
                }
                var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), i = {
                    In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], e],
                    Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(t, n) {
                        return 1 - e(1 - t, n)
                    }
                    ],
                    InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(t, n) {
                        return .5 > t ? e(2 * t, n) / 2 : 1 - e(-2 * t + 2, n) / 2
                    }
                    ]
                }, a = {
                    linear: F(.25, .25, .75, .75)
                }, r = {};
                for (t in i)
                    r.type = t,
                    i[r.type].forEach(function(e) {
                        return function(t, i) {
                            a["ease" + e.type + n[i]] = B.fnc(t) ? t : F.apply(o, t)
                        }
                    }(r)),
                    r = {
                        type: r.type
                    };
                return a
            }(), R = {
                css: function(e, t, n) {
                    return e.style[t] = n
                },
                attribute: function(e, t, n) {
                    return e.setAttribute(t, n)
                },
                object: function(e, t, n) {
                    return e[t] = n
                },
                transform: function(e, t, n, i, a) {
                    i[a] || (i[a] = []),
                    i[a].push(t + "(" + n + ")")
                }
            }, V = [], z = 0, j = function() {
                function e() {
                    z = requestAnimationFrame(t)
                }
                function t(t) {
                    var n = V.length;
                    if (n) {
                        for (var i = 0; i < n; )
                            V[i] && V[i].tick(t),
                            i++;
                        e()
                    } else
                        cancelAnimationFrame(z),
                        z = 0
                }
                return e
            }();
            return N.version = "2.2.0",
            N.speed = 1,
            N.running = V,
            N.remove = function(e) {
                e = P(e);
                for (var t = V.length; t--; )
                    for (var n = V[t], i = n.animations, r = i.length; r--; )
                        a(e, i[r].animatable.target) && (i.splice(r, 1),
                        i.length || n.pause())
            }
            ,
            N.getValue = g,
            N.path = function(t, n) {
                var i = B.str(t) ? e(t)[0] : t
                  , a = n || 100;
                return function(e) {
                    return {
                        el: i,
                        property: e,
                        totalLength: y(i) * (a / 100)
                    }
                }
            }
            ,
            N.setDashoffset = function(e) {
                var t = y(e);
                return e.setAttribute("stroke-dasharray", t),
                t
            }
            ,
            N.bezier = F,
            N.easings = _,
            N.timeline = function(e) {
                var t = N(e);
                return t.pause(),
                t.duration = 0,
                t.add = function(n) {
                    return t.children.forEach(function(e) {
                        e.began = !0,
                        e.completed = !0
                    }),
                    i(n).forEach(function(n) {
                        var i = s(n, d(H, e || {}));
                        i.targets = i.targets || e.targets,
                        n = t.duration;
                        var a = i.offset;
                        i.autoplay = !1,
                        i.direction = t.direction,
                        i.offset = B.und(a) ? n : $(a, n),
                        t.began = !0,
                        t.completed = !0,
                        t.seek(i.offset),
                        i = N(i),
                        i.began = !0,
                        i.completed = !0,
                        i.duration > n && (t.duration = i.duration),
                        t.children.push(i)
                    }),
                    t.seek(0),
                    t.reset(),
                    t.autoplay && t.restart(),
                    t
                }
                ,
                t
            }
            ,
            N.random = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }
            ,
            N
        })
    }
    ).call(t, n(56))
}
, function(e, t, n) {
    "use strict";
    function i() {
        this._resize = this._resize.bind(this),
        this._desktop = !1,
        this._phone = !1,
        this._tablet = !1,
        window.addEventListener("resize", this._resize, !1),
        this._resize()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    i.prototype._resize = function(e) {
        this._desktop = window.matchMedia("(min-width: 1024px)").matches,
        this._phone = window.matchMedia("(max-width: 767px)").matches,
        this._tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
    }
    ,
    i.prototype.isDesktop = function() {
        return this._desktop
    }
    ,
    i.prototype.isMobile = function() {
        return this._phone || this._tablet
    }
    ,
    i.prototype.isPhone = function() {
        return this._phone
    }
    ,
    i.prototype.isTablet = function() {
        return this._tablet
    }
    ,
    t.default = i
}
, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = n(511)
      , d = i(r)
      , o = n(512)
      , s = i(o)
      , l = n(514)
      , u = i(l)
      , c = void 0;
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = (0,
        d.default)();
        if (c || (c = (0,
        s.default)()),
        t.events)
            throw new Error("Event handlers cannot be overwritten.");
        if ("string" == typeof e && !document.getElementById(e))
            throw new Error('Element "' + e + '" does not exist.');
        t.events = u.default.proxyEvents(i);
        var r = new Promise(function(n) {
            if ("string" == typeof e || e instanceof HTMLElement)
                c.then(function(a) {
                    var r = new a.Player(e,t);
                    return i.on("ready", function() {
                        n(r)
                    }),
                    null
                });
            else {
                if (!("object" === (void 0 === e ? "undefined" : a(e)) && e.playVideo instanceof Function))
                    throw new TypeError("Unexpected state.");
                n(e)
            }
        }
        )
          , o = u.default.promisifyPlayer(r, n);
        return o.on = i.on,
        o.off = i.off,
        o
    }
    ,
    e.exports = t.default
}
, function(e, t, n) {
    (function(t) {
        /**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
        function n() {
            var e = {}
              , t = {};
            return e.on = function(e, n) {
                var i = {
                    name: e,
                    handler: n
                };
                return t[e] = t[e] || [],
                t[e].unshift(i),
                i
            }
            ,
            e.off = function(e) {
                var n = t[e.name].indexOf(e);
                -1 != n && t[e.name].splice(n, 1)
            }
            ,
            e.trigger = function(e, n) {
                var i, a = t[e];
                if (a)
                    for (i = a.length; i--; )
                        a[i].handler(n)
            }
            ,
            e
        }
        t.gajus = t.gajus || {},
        t.gajus.Sister = n,
        e.exports = n
    }
    ).call(t, n(56))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(513)
      , a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(i);
    t.default = function() {
        var e = new Promise(function(e) {
            if (window.YT && window.YT.Player && window.YT.Player instanceof Function)
                return void e(window.YT);
            var t = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function() {
                t && t(),
                e(window.YT)
            }
        }
        )
          , t = "http:" === window.location.protocol ? "http:" : "https:";
        return (0,
        a.default)(t + "//www.youtube.com/iframe_api"),
        e
    }
    ,
    e.exports = t.default
}
, function(e, t) {
    function n(e, t) {
        for (var n in t)
            e.setAttribute(n, t[n])
    }
    function i(e, t) {
        e.onload = function() {
            this.onerror = this.onload = null,
            t(null, e)
        }
        ,
        e.onerror = function() {
            this.onerror = this.onload = null,
            t(new Error("Failed to load " + this.src), e)
        }
    }
    function a(e, t) {
        e.onreadystatechange = function() {
            "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null,
            t(null, e))
        }
    }
    e.exports = function(e, t, r) {
        var d = document.head || document.getElementsByTagName("head")[0]
          , o = document.createElement("script");
        "function" == typeof t && (r = t,
        t = {}),
        t = t || {},
        r = r || function() {}
        ,
        o.type = t.type || "text/javascript",
        o.charset = t.charset || "utf8",
        o.async = !("async"in t) || !!t.async,
        o.src = e,
        t.attrs && n(o, t.attrs),
        t.text && (o.text = "" + t.text),
        ("onload"in o ? i : a)(o, r),
        o.onload || i(o, r),
        d.appendChild(o)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(515)
      , r = i(a)
      , d = n(518)
      , o = i(d)
      , s = n(519)
      , l = i(s)
      , u = n(520)
      , c = i(u)
      , f = (0,
    r.default)("youtube-player")
      , h = {};
    h.proxyEvents = function(e) {
        var t = {}
          , n = !0
          , i = !1
          , a = void 0;
        try {
            for (var r, d = l.default[Symbol.iterator](); !(n = (r = d.next()).done); n = !0) {
                var o = r.value;
                !function(n) {
                    var i = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                    t[i] = function(t) {
                        f('event "%s"', i, t),
                        e.trigger(n, t)
                    }
                }(o)
            }
        } catch (e) {
            i = !0,
            a = e
        } finally {
            try {
                !n && d.return && d.return()
            } finally {
                if (i)
                    throw a
            }
        }
        return t
    }
    ,
    h.promisifyPlayer = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = {}
          , i = !0
          , a = !1
          , r = void 0;
        try {
            for (var d, s = o.default[Symbol.iterator](); !(i = (d = s.next()).done); i = !0) {
                var l = d.value;
                !function(i) {
                    t && c.default[i] ? n[i] = function() {
                        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++)
                            n[a] = arguments[a];
                        return e.then(function(e) {
                            var t = c.default[i]
                              , a = e.getPlayerState()
                              , r = e[i].apply(e, n);
                            return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(a) ? new Promise(function(n) {
                                var i = function i() {
                                    var a = e.getPlayerState()
                                      , r = void 0;
                                    "number" == typeof t.timeout && (r = setTimeout(function() {
                                        e.removeEventListener("onStateChange", i),
                                        n()
                                    }, t.timeout)),
                                    Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(a) && (e.removeEventListener("onStateChange", i),
                                    clearTimeout(r),
                                    n())
                                };
                                e.addEventListener("onStateChange", i)
                            }
                            ).then(function() {
                                return r
                            }) : r
                        })
                    }
                    : n[i] = function() {
                        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++)
                            n[a] = arguments[a];
                        return e.then(function(e) {
                            return e[i].apply(e, n)
                        })
                    }
                }(l)
            }
        } catch (e) {
            a = !0,
            r = e
        } finally {
            try {
                !i && s.return && s.return()
            } finally {
                if (a)
                    throw r
            }
        }
        return n
    }
    ,
    t.default = h,
    e.exports = t.default
}
, function(e, t, n) {
    (function(i) {
        function a() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }
        function r(e) {
            var n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff),
            n) {
                var i = "color: " + this.color;
                e.splice(1, 0, i, "color: inherit");
                var a = 0
                  , r = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                    "%%" !== e && (a++,
                    "%c" === e && (r = a))
                }),
                e.splice(r, 0, i)
            }
        }
        function d() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }
        function o(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }
        function s() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== i && "env"in i && (e = i.env.DEBUG),
            e
        }
        t = e.exports = n(516),
        t.log = d,
        t.formatArgs = r,
        t.save = o,
        t.load = s,
        t.useColors = a,
        t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(),
        t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
        t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
        ,
        t.enable(s())
    }
    ).call(t, n(153))
}
, function(e, t, n) {
    function i(e) {
        var n, i = 0;
        for (n in e)
            i = (i << 5) - i + e.charCodeAt(n),
            i |= 0;
        return t.colors[Math.abs(i) % t.colors.length]
    }
    function a(e) {
        function n() {
            if (n.enabled) {
                var e = n
                  , i = +new Date
                  , a = i - (l || i);
                e.diff = a,
                e.prev = l,
                e.curr = i,
                l = i;
                for (var r = new Array(arguments.length), d = 0; d < r.length; d++)
                    r[d] = arguments[d];
                r[0] = t.coerce(r[0]),
                "string" != typeof r[0] && r.unshift("%O");
                var o = 0;
                r[0] = r[0].replace(/%([a-zA-Z%])/g, function(n, i) {
                    if ("%%" === n)
                        return n;
                    o++;
                    var a = t.formatters[i];
                    if ("function" == typeof a) {
                        var d = r[o];
                        n = a.call(e, d),
                        r.splice(o, 1),
                        o--
                    }
                    return n
                }),
                t.formatArgs.call(e, r);
                (n.log || t.log || console.log.bind(console)).apply(e, r)
            }
        }
        return n.namespace = e,
        n.enabled = t.enabled(e),
        n.useColors = t.useColors(),
        n.color = i(e),
        "function" == typeof t.init && t.init(n),
        n
    }
    function r(e) {
        t.save(e),
        t.names = [],
        t.skips = [];
        for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), i = n.length, a = 0; a < i; a++)
            n[a] && (e = n[a].replace(/\*/g, ".*?"),
            "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }
    function d() {
        t.enable("")
    }
    function o(e) {
        var n, i;
        for (n = 0,
        i = t.skips.length; n < i; n++)
            if (t.skips[n].test(e))
                return !1;
        for (n = 0,
        i = t.names.length; n < i; n++)
            if (t.names[n].test(e))
                return !0;
        return !1
    }
    function s(e) {
        return e instanceof Error ? e.stack || e.message : e
    }
    t = e.exports = a.debug = a.default = a,
    t.coerce = s,
    t.disable = d,
    t.enable = r,
    t.enabled = o,
    t.humanize = n(517),
    t.names = [],
    t.skips = [],
    t.formatters = {};
    var l
}
, function(e, t) {
    function n(e) {
        if (e = String(e),
        !(e.length > 100)) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (t) {
                var n = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return n * u;
                case "days":
                case "day":
                case "d":
                    return n * l;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return n * s;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return n * o;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return n * d;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return n;
                default:
                    return
                }
            }
        }
    }
    function i(e) {
        return e >= l ? Math.round(e / l) + "d" : e >= s ? Math.round(e / s) + "h" : e >= o ? Math.round(e / o) + "m" : e >= d ? Math.round(e / d) + "s" : e + "ms"
    }
    function a(e) {
        return r(e, l, "day") || r(e, s, "hour") || r(e, o, "minute") || r(e, d, "second") || e + " ms"
    }
    function r(e, t, n) {
        if (!(e < t))
            return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    var d = 1e3
      , o = 60 * d
      , s = 60 * o
      , l = 24 * s
      , u = 365.25 * l;
    e.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if ("string" === r && e.length > 0)
            return n(e);
        if ("number" === r && !1 === isNaN(e))
            return t.long ? a(e) : i(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"],
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"],
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(521)
      , a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(i);
    t.default = {
        pauseVideo: {
            acceptableStates: [a.default.ENDED, a.default.PAUSED],
            stateChangeRequired: !1
        },
        playVideo: {
            acceptableStates: [a.default.ENDED, a.default.PLAYING],
            stateChangeRequired: !1
        },
        seekTo: {
            acceptableStates: [a.default.ENDED, a.default.PLAYING, a.default.PAUSED],
            stateChangeRequired: !0,
            timeout: 3e3
        }
    },
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        BUFFERING: 3,
        ENDED: 0,
        PAUSED: 2,
        PLAYING: 1,
        UNSTARTED: -1,
        VIDEO_CUED: 5
    },
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function i(a, r) {
                    try {
                        var d = t[a](r)
                          , o = d.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!d.done)
                        return Promise.resolve(o).then(function(e) {
                            i("next", e)
                        }, function(e) {
                            i("throw", e)
                        });
                    e(o)
                }
                return i("next")
            }
            )
        }
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }();
    t.default = function(e) {
        if (!e)
            throw new Error("attempt to create a form from a nonexistent node");
        var t = e
          , n = $.getController();
        if ("string" == typeof t && !(t = document.querySelector(t)))
            throw new Error("attempt to create a form from a nonexistent node");
        return n.getForm(t)
    }
    ;
    var s = n(159)
      , l = i(s)
      , u = n(523)
      , c = i(u)
      , f = n(525)
      , h = (i(f),
    n(526))
      , p = n(80)
      , m = n(572)
      , v = new l.default(window.navigator.userAgent)
      , g = !!v.mobile()
      , $ = function() {
        function e() {
            r(this, e),
            this.all = []
        }
        return o(e, [{
            key: "getForm",
            value: function(e) {
                var t = this.all.find(function(t) {
                    return t.domForm === e
                });
                return t || (t = new b(e),
                this.all.push(t)),
                t
            }
        }, {
            key: "sendRequest",
            value: function(e) {
                var t = this;
                return new Promise(function() {
                    var n = a(regeneratorRuntime.mark(function n(i, a) {
                        var r, o, s, l, u, c, f, h, m, v, g, $, b;
                        return regeneratorRuntime.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    for (r = e.getStepData(),
                                    r.data.isActive = !1,
                                    o = !0,
                                    s = !1,
                                    l = void 0,
                                    n.prev = 5,
                                    u = p.activeTrends[Symbol.iterator](); !(o = (c = u.next()).done); o = !0)
                                        (f = c.value) && f.trend.toLowerCase() === r.data.trend.toLowerCase() && f.city.toLowerCase() === r.data.city.toLowerCase() && (r.data.isActive = !0);
                                    n.next = 13;
                                    break;
                                case 9:
                                    n.prev = 9,
                                    n.t0 = n.catch(5),
                                    s = !0,
                                    l = n.t0;
                                case 13:
                                    n.prev = 13,
                                    n.prev = 14,
                                    !o && u.return && u.return();
                                case 16:
                                    if (n.prev = 16,
                                    !s) {
                                        n.next = 19;
                                        break
                                    }
                                    throw l;
                                case 19:
                                    return n.finish(16);
                                case 20:
                                    return n.finish(13);
                                case 21:
                                    if (!r.hasErrors) {
                                        n.next = 24;
                                        break
                                    }
                                    return i({
                                        sending: !1
                                    }),
                                    n.abrupt("return");
                                case 24:
                                    return e.setError(!1),
                                    e.setSending(!0),
                                    t.callInSimilarForms(e, "block", [!0]),
                                    h = "en",
                                    n.prev = 28,
                                    m = d({}, r.data, Object({
                                        dev: !1
                                    }), {
                                        language: h
                                    }),
                                    n.next = 32,
                                    t.constructor.fetchJSON("https://api.academy.mercdev.com/send/mercdev", {
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        method: "post",
                                        body: JSON.stringify(m)
                                    });
                                case 32:
                                    v = n.sent,
                                    e.setSending(!1),
                                    t.callInSimilarForms(e, "block", [!1]),
                                    g = document.querySelectorAll(".request-message"),
                                    $ = function(e) {
                                        e.classList.add("request-message--visible")
                                    }
                                    ,
                                    b = function(e) {
                                        e.classList.remove("request-message--visible")
                                    }
                                    ,
                                    Array.prototype.forEach.call(g, function(e) {
                                        var t = e.classList.contains("qa-message")
                                          , n = e.classList.contains("net-message")
                                          , i = "QA" === m.trend
                                          , a = "Net" === m.trend
                                          , r = "Business" === m.trend;
                                        m && m.isActive ? i && t || (a || r) && n || !i && !a && !r && !t && !n ? $(e) : b(e) : t || n ? b(e) : $(e)
                                    }),
                                    e.nextStep(),
                                    t.callInSimilarForms(e, "nextStep", []),
                                    i(v),
                                    n.next = 51;
                                    break;
                                case 44:
                                    n.prev = 44,
                                    n.t1 = n.catch(28),
                                    console.error("Sending error:", n.t1),
                                    e.setSending(!1),
                                    t.callInSimilarForms(e, "block", [!1]),
                                    e.setError(!0),
                                    a(n.t1);
                                case 51:
                                case "end":
                                    return n.stop()
                                }
                        }, n, t, [[5, 9, 13, 21], [14, , 16, 20], [28, 44]])
                    }));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }())
            }
        }, {
            key: "reset",
            value: function(e) {
                e._reset(!0),
                this.callInSimilarForms(e, "_reset", [])
            }
        }, {
            key: "clearFieldError",
            value: function(e, t) {
                e._clearFieldError(t),
                this.callInSimilarForms(e, "_clearFieldError", [t])
            }
        }, {
            key: "setFieldError",
            value: function(e, t) {
                e._setFieldError(t)
            }
        }, {
            key: "setCheckboxFieldValue",
            value: function(e, t, n) {
                this.callInSimilarForms(e, "_setCheckboxFieldValue", [t, n])
            }
        }, {
            key: "setTextFieldValue",
            value: function(e, t, n) {
                this.callInSimilarForms(e, "_setTextFieldValue", [t, n])
            }
        }, {
            key: "callInSimilarForms",
            value: function(e, t, n) {
                var i = e.domForm.dataset.formId;
                i && this.all.forEach(function(a) {
                    if (e !== a) {
                        var r = a.domForm.dataset.formId;
                        r && r === i && a[t].apply(a, n)
                    }
                })
            }
        }], [{
            key: "getController",
            value: function() {
                return this._instance || (this._instance = new this),
                this._instance
            }
        }, {
            key: "fetchJSON",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return fetch(e, t).then(function(e) {
                    if (e.status >= 400)
                        throw new Error("Bad response from server. Status: " + e.status);
                    return e.json()
                }).then(function(e) {
                    return e
                })
            }
        }]),
        e
    }()
      , b = function() {
        function e(t) {
            var n = this;
            r(this, e),
            this._onCheckboxFieldChange = this._onCheckboxFieldChange.bind(this),
            this._onSelectFieldChange = this._onSelectFieldChange.bind(this),
            this._onTextFieldChange = this._onTextFieldChange.bind(this),
            this.clearFieldError = this.clearFieldError.bind(this),
            this.setFieldError = this.setFieldError.bind(this),
            this.domForm = t,
            this.fields = {
                texts: [],
                selects: [],
                checkboxes: [],
                submits: this.domForm.querySelectorAll(".button.submit")
            },
            this._components = {
                selects: []
            };
            var i = Array.prototype.map;
            this.steps = i.call(this.domForm.querySelectorAll(".step"), function(e) {
                var t = i.call(e.querySelectorAll('input[type="text"]'), function(e) {
                    return e
                })
                  , a = i.call(e.querySelectorAll("select"), function(e) {
                    return e
                })
                  , r = i.call(e.querySelectorAll('input[type="checkbox"]'), function(e) {
                    return e
                });
                return n.fields.texts = n.fields.texts.concat(t),
                n.fields.selects = n.fields.selects.concat(a),
                n.fields.checkboxes = n.fields.checkboxes.concat(r),
                {
                    dom: e,
                    texts: t,
                    selects: a,
                    checkboxes: r
                }
            }),
            this.setSending(!1),
            this.setError(!1),
            this.setStep(0),
            this._initHandlers()
        }
        return o(e, [{
            key: "_initFilters",
            value: function() {
                for (var e = this._components.selects, t = 0; t < this.fields.selects.length; t++)
                    e.push(new c.default(this.fields.selects[t]));
                for (var n = 0; n < e.length; n++) {
                    var i = e[n]
                      , a = i.getHTMLElement().dataset.filterNames;
                    if (a) {
                        a = a.split("|");
                        for (var r = 0; r < a.length; r++)
                            for (var d = 0; d < e.length; d++) {
                                var o = e[d];
                                e[n] !== o && (a[r] === o.getName() && e[n].addFilterElement(o))
                            }
                    }
                }
                if (!g)
                    for (var s = 0; s < e.length; s++)
                        ;
            }
        }, {
            key: "_initHandlers",
            value: function() {
                var e = this;
                this.domForm.addEventListener("submit", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.submit()
                }),
                this.fields.texts.forEach(function(t) {
                    t.addEventListener("keyup", function(n) {
                        e.clearFieldError(t.name)
                    }),
                    t.addEventListener("focus", function(n) {
                        e.clearFieldError(t.name)
                    }),
                    t.addEventListener("blur", e._onTextFieldChange, !1),
                    t.addEventListener("paste", e._onTextFieldChange, !1),
                    "phone" === t.name && t.addEventListener("input", h.handlePhoneInput)
                }),
                window.addEventListener("hashchange", function() {
                    e.fields.checkboxes.forEach(function(e) {
                        e.checked = !1
                    }),
                    e.domForm.classList.contains("form-request--disabled") || e.domForm.classList.toggle("form-request--disabled"),
                    "#qa" === window.location.hash && e.domForm.classList.toggle("form-request--disabled")
                }),
                this.fields.checkboxes.forEach(function(t) {
                    t.defaultValue = t.checked;
                    t.closest(".form-field");
                    t.addEventListener("click", function(n) {
                        e.clearFieldError(t.name),
                        e._onCheckboxFieldChange(n)
                    }),
                    e.domForm.classList.add("form-request--disabled"),
                    t.addEventListener("change", function(t) {
                        e.domForm.classList.toggle("form-request--disabled")
                    })
                }),
                this.fields.selects.forEach(function(t) {
                    var n = t.closest(".form-field");
                    t.addEventListener("focus", function(i) {
                        e.clearFieldError(t.name),
                        n.classList.add("focus")
                    }),
                    t.addEventListener("blur", function(e) {
                        n.classList.remove("focus")
                    }),
                    t.addEventListener("change", function(n) {
                        e.clearFieldError(t.name),
                        e._onSelectFieldChange(n)
                    })
                }),
                this.fields.submits.forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        e.submit()
                    })
                }),
                this._initFilters()
            }
        }, {
            key: "setStep",
            value: function(t) {
                var n = this.steps.length;
                if (this.steps.forEach(function(e, n) {
                    e.dom.classList.remove("active"),
                    e.dom.classList.remove("finish"),
                    e.dom.classList.remove("passed"),
                    t > n ? e.dom.classList.add("passed") : t === n && e.dom.classList.add("active")
                }),
                t >= n ? (this.steps[n - 1].add("finish"),
                this.stepCurrent = n - 1) : this.stepCurrent = t,
                this.is("lastStep") && !e._closeTimeout) {
                    var i = this;
                    e._closeTimeout = setTimeout(function() {
                        e._clearCloseTimeout(),
                        i.reset()
                    }, 5e3)
                }
            }
        }, {
            key: "nextStep",
            value: function() {
                this.setStep(this.stepCurrent + 1)
            }
        }, {
            key: "is",
            value: function(e) {
                switch (e) {
                case "lastStep":
                    return this.steps.length - 1 === this.stepCurrent;
                default:
                    return !1
                }
            }
        }, {
            key: "setSending",
            value: function(e) {
                this.block(e),
                this.domForm.classList[e ? "add" : "remove"]("sending")
            }
        }, {
            key: "setError",
            value: function(e) {
                this.domForm.classList[e ? "add" : "remove"]("fail")
            }
        }, {
            key: "block",
            value: function(e) {
                this.isBlocked = e
            }
        }, {
            key: "getStepData",
            value: function() {
                var e = this
                  , t = this.steps[this.stepCurrent]
                  , n = {}
                  , i = !1;
                return t.texts.forEach(function(t) {
                    var a = t.closest(".form-field")
                      , r = a.parentElement.querySelector(".error-text")
                      , d = a.classList.contains("required")
                      , o = t.dataset.validate && new RegExp(t.dataset.validate)
                      , s = t.value.trim()
                      , l = !1;
                    if (s)
                        if (n[t.name] = s,
                        "phone" === t.name) {
                            var u = (0,
                            h.validatePhoneNumber)(s);
                            u || (l = !0,
                            r && (r.dataset.visible = !0))
                        } else
                            o && !o.test(s) && (l = !0,
                            r && (r.dataset.visible = !0));
                    else
                        l = d;
                    l && (e.setFieldError(t.name),
                    i = !0)
                }),
                t.checkboxes.forEach(function(t) {
                    var a = t.closest(".form-field");
                    t.checked && (n[t.name] = t.value),
                    a.classList.contains("required") && (t.checked || (e.setFieldError(t.name),
                    i = !0))
                }),
                t.selects.forEach(function(t) {
                    var a = t.closest(".form-field");
                    n[t.name] = t.value,
                    a.classList.contains("required") && (t.value && "None" !== t.value || (e.setFieldError(t.name),
                    i = !0))
                }),
                {
                    data: n,
                    hasErrors: i
                }
            }
        }, {
            key: "submit",
            value: function() {
                this.isBlocked || $.getController().sendRequest(this)
            }
        }, {
            key: "_reset",
            value: function() {
                var e = this;
                this.fields.texts.forEach(function(t) {
                    t.value = "",
                    e.clearFieldError(t.name)
                }),
                this.fields.checkboxes.forEach(function(t) {
                    t.checked = t.defaultValue,
                    e.clearFieldError(t.name)
                }),
                this.fields.selects.forEach(function(t) {
                    for (var n = 0; n < e._components.selects.length; n++) {
                        var i = e._components.selects[n];
                        if (t.name === i.getName()) {
                            i.reset();
                            break
                        }
                    }
                    e.clearFieldError(t.name)
                }),
                this.setError(!1),
                this.setStep(0)
            }
        }, {
            key: "reset",
            value: function() {
                this.isBlocked || (e._clearCloseTimeout(),
                $.getController().reset(this))
            }
        }, {
            key: "_setCheckboxFieldValue",
            value: function(e, t) {
                this.fields.checkboxes.forEach(function(n) {
                    n.name === e && (n.checked = t)
                })
            }
        }, {
            key: "_clearFieldError",
            value: function(e) {
                this.fields.texts.forEach(function(t) {
                    if (t.name === e) {
                        var n = t.closest(".form-field");
                        n.classList.remove("error");
                        var i = n.parentElement.querySelector(".error-text");
                        i && (i.dataset.visible = !1)
                    }
                }),
                this.fields.selects.forEach(function(t) {
                    t.name === e && t.closest(".form-field").classList.remove("error")
                }),
                this.fields.checkboxes.forEach(function(t) {
                    t.name === e && t.closest(".form-field").classList.remove("error")
                })
            }
        }, {
            key: "_setFieldError",
            value: function(e) {
                this.fields.texts.forEach(function(t) {
                    t.name === e && t.closest(".form-field").classList.add("error")
                }),
                this.fields.selects.forEach(function(t) {
                    t.name === e && t.closest(".form-field").classList.add("error")
                }),
                this.fields.checkboxes.forEach(function(t) {
                    t.name === e && t.closest(".form-field").classList.add("error")
                })
            }
        }, {
            key: "_setTextFieldValue",
            value: function(e, t) {
                this.fields.texts.forEach(function(n) {
                    n.name === e && (n.value = t)
                })
            }
        }, {
            key: "clearFieldError",
            value: function(e) {
                this.isBlocked || $.getController().clearFieldError(this, e)
            }
        }, {
            key: "setFieldError",
            value: function(e) {
                this.isBlocked || $.getController().setFieldError(this, e)
            }
        }, {
            key: "setCheckboxFieldValue",
            value: function(e, t) {
                this.isBlocked || $.getController().setCheckboxFieldValue(this, e, t)
            }
        }, {
            key: "setTextFieldValue",
            value: function(e, t) {
                this.isBlocked || $.getController().setTextFieldValue(this, e, t)
            }
        }, {
            key: "_onCheckboxFieldChange",
            value: function(e) {
                var t = e.target;
                this.setCheckboxFieldValue(t.name, t.checked)
            }
        }, {
            key: "_onSelectFieldChange",
            value: function(e) {
                this._updateFieldsVisibility()
            }
        }, {
            key: "_onTextFieldChange",
            value: function(e) {
                var t = e.target;
                this.setTextFieldValue(t.name, t.value)
            }
        }, {
            key: "_updateFieldsVisibility",
            value: function() {
                var e = this
                  , t = this.fields.selects[0].value
                  , n = this.domForm.querySelector("#form-qa")
                  , i = this.domForm.querySelector(".form-info")
                  , a = function() {
                    n.style.display = "none",
                    i.classList.remove("form-info--disabled"),
                    i.classList.remove("form-info--hide"),
                    e.domForm.classList.add("form-request--disabled"),
                    e.fields.texts.forEach(function(e) {
                        return e.disabled = !1
                    })
                };
                switch (t) {
                case "None":
                    n.style.display = "none",
                    i.classList.add("form-info--disabled"),
                    i.classList.remove("form-info--hide"),
                    this.domForm.classList.add("form-request--disabled"),
                    this.fields.texts.forEach(function(e) {
                        return e.disabled = !0
                    }),
                    this.fields.checkboxes.disabled = !0,
                    this.fields.checkboxes[0].checked = !1;
                    break;
                case "QA":
                    (0,
                    m.isActiveTrend)("QA") ? (n.style.display = "inline-block",
                    i.classList.add("form-info--hide"),
                    this.domForm.classList.remove("form-request--disabled")) : a();
                    break;
                default:
                    a()
                }
                "None" !== t && this.fields.checkboxes[0].checked && this.domForm.classList.remove("form-request--disabled");
                this.fields.texts.forEach(function(e) {
                    e.closest(".form-item").classList.remove("form-item-hidden")
                }),
                this.fields.checkboxes.forEach(function(e) {
                    e.closest(".form-item").classList.remove("form-item-hidden")
                });
                var r = this.domForm.querySelector(".google-form-link");
                r && r.classList.add("google-form-link-hidden")
            }
        }]),
        e
    }();
    b._closeTimeout = null,
    b._clearCloseTimeout = function() {
        b._closeTimeout && (clearTimeout(b._closeTimeout),
        b._closeTimeout = null)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        this._onFilterChange = this._onFilterChange.bind(this),
        this._htmlElement = e,
        this._filter = new r.default,
        this._options = [],
        this._hasDefaultOption = !1;
        for (var t = 0; t < this._htmlElement.options.length; t++) {
            var n = this._htmlElement.options[t];
            this._options.push({
                value: n.value,
                text: n.text,
                selected: !!n.selected,
                filterValues: n.dataset.filterValues ? n.dataset.filterValues.split("|") : null,
                visible: !0
            }),
            n.value === d && (this._hasDefaultOption = !0)
        }
        this._updateHTMLElement()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(524)
      , r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , d = "None";
    i.prototype._dispatchChangeEvent = function() {
        try {
            this._htmlElement.dispatchEvent(new Event("change"))
        } catch (t) {
            var e = document.createEvent("Event");
            e.initEvent("change", !0, !0),
            this._htmlElement.dispatchEvent(e)
        }
    }
    ,
    i.prototype._updateHTMLElement = function() {
        if (0 !== this._htmlElement.options.length) {
            for (var e = this._htmlElement.options[this._htmlElement.selectedIndex].value; this._htmlElement.options.length; )
                this._htmlElement.remove(0);
            for (var t = 0, n = 0; n < this._options.length; n++) {
                var i = this._options[n];
                if (this._filter.getValue(i.filterValues)) {
                    var a = document.createElement("option");
                    a.value = i.value,
                    a.text = i.text,
                    e === i.value && (a.selected = !0),
                    this._htmlElement.add(a, null),
                    t++
                } else
                    e === i.value && (e = null)
            }
            if (2 === t && this._hasDefaultOption)
                for (var r = 0; r < this._htmlElement.options.length; r++)
                    if (this._htmlElement.options[r].value === d) {
                        this._htmlElement.remove(r);
                        break
                    }
            e || (this._htmlElement.selectedIndex = 0),
            this._dispatchChangeEvent()
        }
    }
    ,
    i.prototype._onFilterChange = function(e) {
        this._updateHTMLElement()
    }
    ,
    i.prototype.addFilterElement = function(e) {
        e.getHTMLElement().addEventListener("change", this._onFilterChange),
        this._filter.addElement(e),
        this._updateHTMLElement()
    }
    ,
    i.prototype.getHTMLElement = function() {
        return this._htmlElement
    }
    ,
    i.prototype.getName = function() {
        return this._htmlElement.name
    }
    ,
    i.prototype.getOptions = function() {
        for (var e = [], t = 0; t < this._htmlElement.options.length; t++)
            e.push({
                value: this._htmlElement.options[t].value,
                text: this._htmlElement.options[t].text,
                selected: this._htmlElement.selectedIndex === t
            });
        return e
    }
    ,
    i.prototype.getText = function() {
        return this._htmlElement.options[this._htmlElement.selectedIndex].text
    }
    ,
    i.prototype.getValue = function() {
        if (0 !== this._htmlElement.options.length)
            return this._htmlElement.options[this._htmlElement.selectedIndex].value
    }
    ,
    i.prototype.reset = function() {
        for (var e = 0; e < this._options.length; e++) {
            var t = this._options[e];
            t.selected && this.selectValue(t.value)
        }
    }
    ,
    i.prototype.selectValue = function(e) {
        for (var t = 0; t < this._htmlElement.options.length; t++)
            if (this._htmlElement.options[t].value === e) {
                this._htmlElement.selectedIndex = t,
                this._dispatchChangeEvent();
                break
            }
    }
    ,
    t.default = i
}
, function(e, t, n) {
    "use strict";
    function i() {
        this._elements = []
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    i.prototype.addElement = function(e) {
        this._elements.push(e)
    }
    ,
    i.prototype.getValue = function(e) {
        if (this._elements.length && e) {
            for (var t = !0, n = 0; n < this._elements.length; n++) {
                for (var i = !1, a = 0; a < e.length; a++)
                    i = i || this._elements[n].getValue() === e[a];
                t = t && i
            }
            return t
        }
        return !0
    }
    ,
    t.default = i
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        this._onClick = this._onClick.bind(this),
        this._onKeyDown = this._onKeyDown.bind(this),
        this._onOptionClick = this._onOptionClick.bind(this),
        this._onOptionKeyDown = this._onOptionKeyDown.bind(this),
        this._onOptionMouseOver = this._onOptionMouseOver.bind(this),
        this._onSelectElementtChange = this._onSelectElementtChange.bind(this),
        this._onSelectElementFocus = this._onSelectElementFocus.bind(this),
        this._onWindowClick = this._onWindowClick.bind(this),
        this._selectComponent = e,
        this._selectComponent.getHTMLElement().addEventListener("change", this._onSelectElementtChange),
        window.addEventListener("focusin", this._onSelectElementFocus, !1),
        this._formItem = this._selectComponent.getHTMLElement().closest(".form-item"),
        this._init()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {
        ACTIVE: "form-item-active",
        HIDDEN: "hidden",
        HIGHLIGHTED_OPTION: "select-option-highlighted"
    };
    i.prototype._init = function() {
        this._create(),
        this._update()
    }
    ,
    i.prototype._create = function() {
        var e = document.createElement("div");
        e.style.overflow = "hidden",
        e.style.position = "fixed",
        e.style.left = "-100%",
        e.style.width = "0",
        e.style.height = "0";
        var t = this._selectComponent.getHTMLElement()
          , n = document.createElement("div");
        n.className = "select-container";
        var i = t.parentNode;
        i.appendChild(e),
        e.appendChild(t),
        i.appendChild(n),
        this._select = document.createElement("div"),
        this._select.className = "select",
        this._select.innerHTML = this._selectComponent.getText(),
        this._select.addEventListener("click", this._onClick, !1),
        n.appendChild(this._select),
        this._optionContainer = document.createElement("div"),
        this._optionContainer.className = "select-option-container hidden",
        n.appendChild(this._optionContainer)
    }
    ,
    i.prototype._hideOptions = function(e) {
        window.removeEventListener("keydown", this._onOptionKeyDown, !0),
        this._optionContainer.classList.add(a.HIDDEN)
    }
    ,
    i.prototype._highlightNextOption = function(e) {
        for (var t = 0; t < this._optionContainer.children.length; t++) {
            var n = this._optionContainer.children[t];
            if (n.classList.contains(a.HIGHLIGHTED_OPTION) && t < this._optionContainer.children.length - 1) {
                n.classList.remove(a.HIGHLIGHTED_OPTION),
                this._optionContainer.children[t + 1].classList.add(a.HIGHLIGHTED_OPTION);
                break
            }
        }
    }
    ,
    i.prototype._highlightPreviousOption = function(e) {
        for (var t = 0; t < this._optionContainer.children.length; t++) {
            var n = this._optionContainer.children[t];
            if (n.classList.contains(a.HIGHLIGHTED_OPTION) && t > 0) {
                n.classList.remove(a.HIGHLIGHTED_OPTION),
                this._optionContainer.children[t - 1].classList.add(a.HIGHLIGHTED_OPTION);
                break
            }
        }
    }
    ,
    i.prototype._isActive = function() {
        return this._formItem.classList.contains(a.ACTIVE)
    }
    ,
    i.prototype._selectHighlightedOption = function() {
        for (var e = 0; e < this._optionContainer.children.length; e++) {
            var t = this._optionContainer.children[e];
            if (t.classList.contains(a.HIGHLIGHTED_OPTION)) {
                this._selectOption(t.dataset.value);
                break
            }
        }
    }
    ,
    i.prototype._selectOption = function(e) {
        this._selectComponent.selectValue(e),
        this._hideOptions()
    }
    ,
    i.prototype._setActive = function() {
        this._formItem.classList.add(a.ACTIVE),
        window.addEventListener("click", this._onWindowClick, !1),
        window.addEventListener("keydown", this._onKeyDown, !1)
    }
    ,
    i.prototype._setInactive = function() {
        this._formItem.classList.remove(a.ACTIVE),
        window.removeEventListener("click", this._onWindowClick, !1),
        window.removeEventListener("keydown", this._onKeyDown, !1)
    }
    ,
    i.prototype._showOptions = function(e) {
        window.addEventListener("keydown", this._onOptionKeyDown, !0);
        for (var t = 0; t < this._optionContainer.children.length; t++) {
            var n = this._optionContainer.children[t];
            n.dataset.selected ? n.classList.add(a.HIGHLIGHTED_OPTION) : n.classList.remove(a.HIGHLIGHTED_OPTION)
        }
        this._optionContainer.classList.remove(a.HIDDEN)
    }
    ,
    i.prototype._toggleOptions = function(e) {
        this._optionContainer.classList.contains(a.HIDDEN) ? this._showOptions() : this._hideOptions()
    }
    ,
    i.prototype._update = function(e) {
        for (this._select.innerHTML = this._selectComponent.getText(); this._optionContainer.children.length; ) {
            var t = this._optionContainer.children[0];
            t.removeEventListener("click", this._onOptionClick, !1),
            t.removeEventListener("mouseover", this._onOptionMouseOver, !1),
            this._optionContainer.removeChild(t)
        }
        for (var n = this._selectComponent.getOptions(), i = 0; i < n.length; i++) {
            var a = n[i]
              , r = document.createElement("div");
            r.className = "select-option",
            r.innerHTML = a.text,
            r.dataset.value = a.value,
            a.selected && (r.dataset.selected = "true"),
            r.addEventListener("click", this._onOptionClick, !1),
            r.addEventListener("mouseover", this._onOptionMouseOver, !1),
            this._optionContainer.appendChild(r)
        }
    }
    ,
    i.prototype._onClick = function(e) {
        this._setActive(),
        this._toggleOptions()
    }
    ,
    i.prototype._onKeyDown = function(e) {
        if (this._formItem === e.target.closest(".form-item"))
            switch (e.key) {
            case "Enter":
                this._showOptions()
            }
    }
    ,
    i.prototype._onOptionClick = function(e) {
        this._selectOption(e.target.dataset.value)
    }
    ,
    i.prototype._onOptionKeyDown = function(e) {
        switch (e.key) {
        case "ArrowUp":
        case "Up":
            this._highlightPreviousOption();
            break;
        case "ArrowDown":
        case "Down":
            this._highlightNextOption();
            break;
        case "Escape":
        case "Tab":
            this._hideOptions();
            break;
        case "Enter":
            this._selectHighlightedOption()
        }
        e.stopPropagation(),
        e.preventDefault()
    }
    ,
    i.prototype._onOptionMouseOver = function(e) {
        for (var t = 0; t < this._optionContainer.children.length; t++) {
            var n = this._optionContainer.children[t];
            n === e.target ? n.classList.add(a.HIGHLIGHTED_OPTION) : n.classList.remove(a.HIGHLIGHTED_OPTION)
        }
    }
    ,
    i.prototype._onSelectElementtChange = function(e) {
        this._update()
    }
    ,
    i.prototype._onSelectElementFocus = function(e) {
        this._formItem === e.target.closest(".form-item") ? this._setActive() : this._setInactive()
    }
    ,
    i.prototype._onWindowClick = function(e) {
        this._formItem !== e.target.closest(".form-item") && (this._hideOptions(),
        this._setInactive())
    }
    ,
    t.default = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.validatePhoneNumber = t.handlePhoneInput = void 0;
    var i = n(527)
      , a = [4, 3, 2, 2, 4]
      , r = function(e, t, n) {
        var i = e.split("")
          , a = [];
        return t.forEach(function(e, t) {
            var n = 0 === t ? e + 1 : e
              , r = i.splice(0, n).join("");
            r && a.push(r)
        }),
        a.join(n)
    }
      , d = function(e) {
        var t = e.replaceAll("=", "+").replace(/[^\d\+]/g, "");
        return t.slice(0, 1) + t.slice(1).replace(/\+/g, "")
    };
    t.handlePhoneInput = function(e) {
        var t = ""
          , n = e.target
          , i = d(n.value)
          , o = "1" === i[1] || "7" === i[1] ? 11 : 15;
        if (1 === i.length)
            switch (i) {
            case "+":
                t = i;
                break;
            case "0":
                t = "";
                break;
            case "1":
                t = "+" + i;
                break;
            case "7":
            case "8":
                t = "+7";
                break;
            default:
                t = "+7" + i
            }
        else
            t = 2 === i.length ? "+0" === i ? "+" : i : i.length > o + 1 ? i.slice(0, o + 1) : i;
        n.value = r(t, a, " ")
    }
    ,
    t.validatePhoneNumber = function(e) {
        var t = e.replaceAll(/[^\d\+]/g, "");
        return (0,
        i.isValidPhoneNumber)(t)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(528);
    n.d(t, "parsePhoneNumberWithError", function() {
        return i.a
    }),
    n.d(t, "parsePhoneNumber", function() {
        return i.a
    });
    var a = n(555);
    n.d(t, "parsePhoneNumberFromString", function() {
        return a.a
    }),
    n.d(t, "default", function() {
        return a.a
    });
    var r = n(556);
    n.d(t, "isValidPhoneNumber", function() {
        return r.a
    });
    var d = n(557);
    n.d(t, "isPossiblePhoneNumber", function() {
        return d.a
    });
    var o = n(558);
    n.d(t, "validatePhoneNumberLength", function() {
        return o.a
    });
    var s = n(559);
    n.d(t, "findNumbers", function() {
        return s.a
    });
    var l = n(560);
    n.d(t, "searchNumbers", function() {
        return l.a
    });
    var u = n(561);
    n.d(t, "findPhoneNumbersInText", function() {
        return u.a
    });
    var c = n(562);
    n.d(t, "searchPhoneNumbersInText", function() {
        return c.a
    });
    var f = n(563);
    n.d(t, "PhoneNumberMatcher", function() {
        return f.a
    });
    var h = n(564);
    n.d(t, "AsYouType", function() {
        return h.a
    });
    var p = n(565);
    n.d(t, "isSupportedCountry", function() {
        return p.a
    });
    var m = n(566);
    n.d(t, "getCountries", function() {
        return m.a
    });
    var v = n(567);
    n.d(t, "getCountryCallingCode", function() {
        return v.a
    });
    var g = n(568);
    n.d(t, "getExtPrefix", function() {
        return g.a
    });
    var $ = n(569);
    n.d(t, "Metadata", function() {
        return $.a
    });
    var b = n(570);
    n.d(t, "getExampleNumber", function() {
        return b.a
    });
    var T = n(571);
    n.d(t, "formatIncompletePhoneNumber", function() {
        return T.a
    });
    var y = n(10);
    n.d(t, "ParseError", function() {
        return y.d
    }),
    n.d(t, "parseIncompletePhoneNumber", function() {
        return y.r
    }),
    n.d(t, "parsePhoneNumberCharacter", function() {
        return y.s
    }),
    n.d(t, "parseDigits", function() {
        return y.q
    }),
    n.d(t, "parseRFC3966", function() {
        return y.v
    }),
    n.d(t, "formatRFC3966", function() {
        return y.i
    }),
    n.d(t, "DIGIT_PLACEHOLDER", function() {
        return y.b
    })
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.u, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    t.a = {
        version: 4,
        country_calling_codes: {
            1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
            7: ["RU", "KZ"],
            20: ["EG"],
            27: ["ZA"],
            30: ["GR"],
            31: ["NL"],
            32: ["BE"],
            33: ["FR"],
            34: ["ES"],
            36: ["HU"],
            39: ["IT", "VA"],
            40: ["RO"],
            41: ["CH"],
            43: ["AT"],
            44: ["GB", "GG", "IM", "JE"],
            45: ["DK"],
            46: ["SE"],
            47: ["NO", "SJ"],
            48: ["PL"],
            49: ["DE"],
            51: ["PE"],
            52: ["MX"],
            53: ["CU"],
            54: ["AR"],
            55: ["BR"],
            56: ["CL"],
            57: ["CO"],
            58: ["VE"],
            60: ["MY"],
            61: ["AU", "CC", "CX"],
            62: ["ID"],
            63: ["PH"],
            64: ["NZ"],
            65: ["SG"],
            66: ["TH"],
            81: ["JP"],
            82: ["KR"],
            84: ["VN"],
            86: ["CN"],
            90: ["TR"],
            91: ["IN"],
            92: ["PK"],
            93: ["AF"],
            94: ["LK"],
            95: ["MM"],
            98: ["IR"],
            211: ["SS"],
            212: ["MA", "EH"],
            213: ["DZ"],
            216: ["TN"],
            218: ["LY"],
            220: ["GM"],
            221: ["SN"],
            222: ["MR"],
            223: ["ML"],
            224: ["GN"],
            225: ["CI"],
            226: ["BF"],
            227: ["NE"],
            228: ["TG"],
            229: ["BJ"],
            230: ["MU"],
            231: ["LR"],
            232: ["SL"],
            233: ["GH"],
            234: ["NG"],
            235: ["TD"],
            236: ["CF"],
            237: ["CM"],
            238: ["CV"],
            239: ["ST"],
            240: ["GQ"],
            241: ["GA"],
            242: ["CG"],
            243: ["CD"],
            244: ["AO"],
            245: ["GW"],
            246: ["IO"],
            247: ["AC"],
            248: ["SC"],
            249: ["SD"],
            250: ["RW"],
            251: ["ET"],
            252: ["SO"],
            253: ["DJ"],
            254: ["KE"],
            255: ["TZ"],
            256: ["UG"],
            257: ["BI"],
            258: ["MZ"],
            260: ["ZM"],
            261: ["MG"],
            262: ["RE", "YT"],
            263: ["ZW"],
            264: ["NA"],
            265: ["MW"],
            266: ["LS"],
            267: ["BW"],
            268: ["SZ"],
            269: ["KM"],
            290: ["SH", "TA"],
            291: ["ER"],
            297: ["AW"],
            298: ["FO"],
            299: ["GL"],
            350: ["GI"],
            351: ["PT"],
            352: ["LU"],
            353: ["IE"],
            354: ["IS"],
            355: ["AL"],
            356: ["MT"],
            357: ["CY"],
            358: ["FI", "AX"],
            359: ["BG"],
            370: ["LT"],
            371: ["LV"],
            372: ["EE"],
            373: ["MD"],
            374: ["AM"],
            375: ["BY"],
            376: ["AD"],
            377: ["MC"],
            378: ["SM"],
            380: ["UA"],
            381: ["RS"],
            382: ["ME"],
            383: ["XK"],
            385: ["HR"],
            386: ["SI"],
            387: ["BA"],
            389: ["MK"],
            420: ["CZ"],
            421: ["SK"],
            423: ["LI"],
            500: ["FK"],
            501: ["BZ"],
            502: ["GT"],
            503: ["SV"],
            504: ["HN"],
            505: ["NI"],
            506: ["CR"],
            507: ["PA"],
            508: ["PM"],
            509: ["HT"],
            590: ["GP", "BL", "MF"],
            591: ["BO"],
            592: ["GY"],
            593: ["EC"],
            594: ["GF"],
            595: ["PY"],
            596: ["MQ"],
            597: ["SR"],
            598: ["UY"],
            599: ["CW", "BQ"],
            670: ["TL"],
            672: ["NF"],
            673: ["BN"],
            674: ["NR"],
            675: ["PG"],
            676: ["TO"],
            677: ["SB"],
            678: ["VU"],
            679: ["FJ"],
            680: ["PW"],
            681: ["WF"],
            682: ["CK"],
            683: ["NU"],
            685: ["WS"],
            686: ["KI"],
            687: ["NC"],
            688: ["TV"],
            689: ["PF"],
            690: ["TK"],
            691: ["FM"],
            692: ["MH"],
            850: ["KP"],
            852: ["HK"],
            853: ["MO"],
            855: ["KH"],
            856: ["LA"],
            880: ["BD"],
            886: ["TW"],
            960: ["MV"],
            961: ["LB"],
            962: ["JO"],
            963: ["SY"],
            964: ["IQ"],
            965: ["KW"],
            966: ["SA"],
            967: ["YE"],
            968: ["OM"],
            970: ["PS"],
            971: ["AE"],
            972: ["IL"],
            973: ["BH"],
            974: ["QA"],
            975: ["BT"],
            976: ["MN"],
            977: ["NP"],
            992: ["TJ"],
            993: ["TM"],
            994: ["AZ"],
            995: ["GE"],
            996: ["KG"],
            998: ["UZ"]
        },
        countries: {
            AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6], 0, 0, 0, 0, 0, 0, 0, [["6[2-467]\\d{3}", [5]], ["4\\d{4}", [5]], 0, 0, 0, 0, ["(?:0[1-9]|[1589]\\d)\\d{4}", [6]]]],
            AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [["[78]\\d{5}", [6]], ["690\\d{6}|[356]\\d{5}", [6, 9]], ["180[02]\\d{4}", [8]], ["[19]\\d{5}", [6]]]],
            AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0", 0, 0, 0, 0, 0, [["[2-4679][2-8]\\d{6}", [8]], ["5[024-68]\\d{7}", [9]], ["400\\d{6}|800\\d{2,9}"], ["900[02]\\d{5}", [9]], 0, 0, ["600[25]\\d{5}", [9]], 0, 0, ["700[05]\\d{5}", [9]]]],
            AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}"], ["7\\d{8}"]]],
            AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268", [["268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}"], ["268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["26840[69]\\d{4}"], ["26848[01]\\d{4}"]]],
            AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264", [["264(?:292|4(?:6[12]|9[78]))\\d{4}"], ["264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["264724\\d{4}"]]],
            AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0", 0, 0, 0, 0, 0, [["4505[0-2]\\d{3}|(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}", [8]], ["6(?:[78][2-9]|9\\d)\\d{6}", [9]], ["800\\d{4}", [7]], ["900[1-9]\\d\\d", [6]], ["700[2-9]\\d{4}", [8]], 0, 0, 0, 0, ["808[1-9]\\d\\d", [6]]]],
            AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}"], ["(?:33|4[1349]|55|77|88|9[13-9])\\d{6}"], ["800\\d{5}"], ["90[016]\\d{5}"], 0, 0, 0, 0, ["60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|9[01])\\d{4}"], ["80[1-4]\\d{5}"]]],
            AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]], 0, 0, 0, 0, 0, 0, [["2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}"], ["9[1-49]\\d{7}"]]],
            AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", 0, 0, [["3888[013-9]\\d{5}|(?:29(?:54|66)|3(?:777|865))[2-8]\\d{5}|3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:284|302|657|920)|3(?:4(?:8[27]|92)|541|755|878))[2-7]\\d{5}|(?:2(?:(?:26|62)2|32[03]|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:[03][45]|[17][2-6]|[58][3-6])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", [10]], ["93888[013-9]\\d{5}|9(?:29(?:54|66)|3(?:777|865))[2-8]\\d{5}|93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:284|302|657|920)|3(?:4(?:8[27]|92)|541|755|878))[2-7]\\d{5}|9(?:2(?:(?:26|62)2|32[03]|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:[03][45]|[17][2-6]|[58][3-6]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}"], ["800\\d{7,8}"], ["60[04579]\\d{7}", [10]], 0, 0, ["810\\d{7}", [10]]]],
            AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684", [["6846(?:22|33|44|55|77|88|9[19])\\d{4}"], ["684(?:2(?:48|5[2468]|72)|7(?:3[13]|70|82))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}"], ["6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", [7, 8, 9, 10, 11, 12, 13]], ["800\\d{6,10}", [9, 10, 11, 12, 13]], ["(?:8[69][2-68]|9(?:0[01]|3[019]))\\d{6,10}", [9, 10, 11, 12, 13]], 0, 0, 0, 0, ["5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", [5, 6, 7, 8, 9, 10, 11, 12, 13]], ["8(?:10|2[018])\\d{6,10}|828\\d{5}", [8, 9, 10, 11, 12, 13]]]],
            AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "0|(183[12])", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
            AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]], 0, 0, 0, 0, 0, 0, [["5(?:2\\d|8[1-9])\\d{4}"], ["(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}"], ["800\\d{4}"], ["900\\d{4}"], 0, 0, 0, 0, ["(?:28\\d|501)\\d{4}"]]],
            AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", [["18[1-8]\\d{3,6}", [6, 7, 8, 9]], ["4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]], ["800\\d{4,6}", [7, 8, 9]], ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}"]], "00"],
            AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[12]428|3655[02])\\d{4}|(?:2(?:22[0-79]|63[0-28])|3654)\\d{5}|(?:(?:1[28]|46)\\d|2(?:[014-6]2|[23]3))\\d{6}"], ["36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}"], ["88\\d{7}"], ["900200\\d{3}"]]],
            BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", [8]], ["6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}"], ["8[08]\\d{6}", [8]], ["9[0246]\\d{6}", [8]], 0, 0, ["703[235]0\\d{3}|70(?:2[0-5]|3[0146]|[56]0)\\d{4}", [8]], 0, 0, ["8[12]\\d{6}", [8]]]],
            BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246", [["246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}"], ["246(?:2(?:[3568]\\d|4[0-57-9])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["(?:246976|900[2-9]\\d\\d)\\d{4}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}"], 0, ["24631\\d{5}"]]],
            BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2(?:222|[45]\\d)\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}"], ["(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", [10]], ["80[03]\\d{7}", [10]], 0, 0, 0, 0, 0, ["96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}", [10]]]],
            BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0", 0, 0, 0, 0, 0, [["80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}", [8]], ["4[5-9]\\d{7}", [9]], ["800[1-9]\\d{4}", [8]], ["(?:70(?:2[0-57]|3[04-7]|44|69|7[0579])|90(?:0[0-8]|1[36]|2[0-3568]|3[013-689]|[47][2-68]|5[1-68]|6[0-378]|9[34679]))\\d{4}", [8]], 0, 0, ["78(?:0[57]|1[0458]|2[25]|3[15-8]|48|[56]0|7[078]|9\\d)\\d{4}", [8]], 0, 0, ["7879\\d{4}", [8]]]],
            BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]], 0, 0, 0, 0, 0, 0, [["2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}"], ["(?:0[1267]|5[1-8]|[67]\\d)\\d{6}"]]],
            BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}", [6, 7, 8]], ["43[07-9]\\d{5}|(?:48|8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}", [8, 9]], ["800\\d{5}", [8]], ["90\\d{6}", [8]], 0, 0, 0, 0, 0, ["700\\d{5}", [8]]]],
            BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]], 0, 0, 0, 0, 0, 0, [["(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}"], ["(?:3(?:[1-79]\\d|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}"], ["80\\d{6}"], ["(?:87|9[014578])\\d{6}"], 0, 0, 0, 0, 0, ["84\\d{6}"]]],
            BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]], 0, 0, 0, 0, 0, 0, [["22\\d{6}"], ["(?:29|31|6[1257-9]|7[125-9])\\d{6}"]]],
            BJ: ["229", "00", "[25689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25689]"]]], 0, 0, 0, 0, 0, 0, [["2(?:02|1[037]|2[45]|3[68])\\d{5}"], ["(?:5[1-35-8]|6\\d|9[013-9])\\d{6}"], 0, 0, 0, 0, ["81\\d{6}"], 0, ["857[58]\\d{4}"]]],
            BL: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
            BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441", [["441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}"], ["441(?:[2378]\\d|5[0-39])\\d{5}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]], 0, 0, 0, 0, 0, 0, [["22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}"], ["(?:22[89]|[78]\\d\\d)\\d{4}"], 0, 0, 0, 0, 0, 0, ["5[34]\\d{5}"]]],
            BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?", 0, 0, 0, [["(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", [8]], ["[67]\\d{7}", [8]], ["8001[07]\\d{4}", [9]]]],
            BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]", [["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}"], ["(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]]],
            BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", 0, 0, [["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", [10]], ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}", [10, 11]], ["800\\d{6,7}", [9, 10]], ["300\\d{6}|[59]00\\d{6,7}", [9, 10]], 0, 0, 0, 0, 0, ["300\\d{7}|[34]00\\d{5}|4(?:02|37)0\\d{4}", [8, 10]]]],
            BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242", [["242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}"], ["242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}"], ["242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["242225\\d{4}"]]],
            BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]], 0, 0, 0, 0, 0, 0, [["(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", [7]], ["(?:1[67]|77)\\d{6}", [8]]]],
            BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[03489]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", [7]], ["(?:321|7(?:[1-7]\\d|8[01]))\\d{5}", [8]], ["(?:0800|800\\d)\\d{6}", [10]], ["90\\d{5}", [7]], 0, 0, 0, 0, ["79(?:1(?:[01]\\d|20)|2[0-25-7]\\d)\\d{3}", [8]]]],
            BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, [["(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", [9]], ["(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", [9]], ["800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}"], ["(?:810|902)\\d{7}", [10]], 0, 0, 0, 0, ["249\\d{6}", [9]]], "8~10"],
            BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:[02]\\d|36|[68]0)|[3-58](?:[02]\\d|[68]0)|7(?:[02]\\d|32|[68]0))\\d{4}", [7]], ["6[0-35-7]\\d{5}", [7]], ["0800\\d{7}", [11]]]],
            CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|74)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]]],
            CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
            CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["12\\d{7}|[1-6]\\d{6}"], ["88\\d{5}|(?:8[0-59]|9[017-9])\\d{7}"]]],
            CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]], 0, 0, 0, 0, 0, 0, [["2[12]\\d{6}"], ["7[0257]\\d{6}"], 0, ["8776\\d{4}"]]],
            CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]], 0, 0, 0, 0, 0, 0, [["222[1-589]\\d{5}"], ["026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}"], 0, ["80(?:0\\d\\d|120)\\d{4}"]]],
            CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}"], ["7[35-9]\\d{7}"], ["800\\d{6}"], ["90[016]\\d{6}"], ["878\\d{6}"], 0, ["5[18]\\d{7}"], ["74[0248]\\d{6}"], 0, ["84[0248]\\d{6}"]]],
            CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]], 0, 0, 0, 0, 0, 0, [["2(?:[15]\\d{3}|7(?:2(?:0[23]|1[2357]|[23][45]|4[3-5])|3(?:06|1[69]|[2-6]7)))\\d{5}"], ["0704[0-7]\\d{5}|0(?:[15]\\d\\d|7(?:0[0-37-9]|[4-9][7-9]))\\d{6}"]]],
            CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]], 0, 0, 0, 0, 0, 0, [["(?:2\\d|3[13-7]|4[1-5])\\d{3}"], ["[578]\\d{4}"]]],
            CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-3]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], 0, 0, 0, 0, 0, 0, [["2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[034]\\d|1[0-35-9]|2[1-9]|5[0-2])|600))|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}", [9]], ["", [9]], ["(?:123|8)00\\d{6}", [9, 11]], 0, 0, 0, 0, 0, ["44\\d{7}", [9]], ["600\\d{7,8}", [10, 11]]]],
            CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]], 0, 0, 0, 0, 0, 0, [["2(?:22|33)\\d{6}", [9]], ["(?:24[23]|6[5-9]\\d)\\d{6}", [9]], ["88\\d{6,7}"]]],
            CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, [["(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))", [7, 8, 9, 10, 11]], ["1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[0135-9])\\d{8}", [11]], ["(?:(?:10|21)8|8)00\\d{7}", [10, 12]], ["16[08]\\d{5}", [8]], 0, 0, 0, 0, 0, ["400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", [7, 8, 9, 10, 11]]], "00"],
            CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:(?:1\\d|[36])\\d{3}|9101)\\d{6}|[124-8]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1 $2", ["[146][2-9]|[2578]"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["[39]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?", 0, 0, 0, [["60[124-8][2-9]\\d{6}|[124-8][2-9]\\d{6}", [8, 10]], ["3333(?:0(?:0\\d|1[0-5])|[4-9]\\d\\d)\\d{3}|(?:3(?:24[2-6]|3(?:00|3[0-24-9]))|9101)\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}", [10]], ["1800\\d{7}", [11]], ["19(?:0[01]|4[78])\\d{7}", [11]]]],
            CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))", 0, 0, 0, [["210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}", [8]], ["(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}", [8]], ["800\\d{7}", [10]], ["90[059]\\d{7}", [10]], 0, 0, 0, 0, ["(?:210[0-6]|4\\d{3}|5100)\\d{4}", [8]]]],
            CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3[23]|48)\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}"], ["5\\d{7}", [8]], ["800\\d{7}", [10]], 0, 0, 0, 0, 0, 0, ["807\\d{7}", [10]]]],
            CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]], 0, 0, 0, 0, 0, 0, [["2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}"], ["(?:[34][36]|5[1-389]|9\\d)\\d{5}"], ["800\\d{4}"]]],
            CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]", [["9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}"], ["953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}"], 0, 0, 0, 0, 0, ["955\\d{5}", [8]], 0, ["60[0-2]\\d{4}", [7]]]],
            CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
            CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]], 0, 0, 0, 0, 0, 0, [["2[2-6]\\d{6}"], ["9[4-79]\\d{6}"], ["800\\d{5}"], ["90[09]\\d{5}"], ["700\\d{5}"], 0, ["(?:50|77)\\d{6}"], 0, 0, ["80[1-9]\\d{5}"]]],
            CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, [["(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}"], ["(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}"], ["800\\d{6}"], ["9(?:0[05689]|76)\\d{6}"], ["70[01]\\d{6}"], 0, ["9(?:5\\d|7[2-4])\\d{6}"], 0, ["9[17]0\\d{6}"], ["8[134]\\d{7}"]]],
            DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:1\\d|2[02-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[05]\\d|[23]1|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0", 0, 0, 0, 0, 0, [["32\\d{9,11}|49[2-6]\\d{10}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}", [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]], ["15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}", [10, 11]], ["800\\d{7,12}", [10, 11, 12, 13, 14, 15]], ["(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", [10, 11]], ["700\\d{8}", [11]], 0, ["18(?:1\\d{5,11}|[2-9]\\d{8})", [8, 9, 10, 11, 12, 13, 14]], ["16(?:4\\d{1,10}|[89]\\d{1,11})", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], 0, ["180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}", [7, 8, 9, 10, 11, 12, 13, 14]]]],
            DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]], 0, 0, 0, 0, 0, 0, [["2(?:1[2-5]|7[45])\\d{5}"], ["77\\d{6}"]]],
            DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}"], [""], ["80\\d{6}"], ["90\\d{6}"]]],
            DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767", [["767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}"], ["767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9", [["8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}"], ["8[024]9[2-9]\\d{6}"], ["8(?:00(?:14|[2-9]\\d)|(?:33|44|55|66|77|88)[2-9]\\d)\\d{5}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}"], ["(?:5(?:4[0-29]|5\\d|6[0-2])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}", [9]], ["800\\d{6}", [9]], ["80[3-689]1\\d{5}", [9]], 0, 0, 0, 0, ["98[23]\\d{6}", [9]], ["80[12]1\\d{5}", [9]]]],
            EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0", 0, 0, 0, 0, 0, [["[2-7][2-7]\\d{6}", [8]], ["964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}", [9]], ["1800\\d{7}|1[78]00\\d{6}", [10, 11]], 0, 0, 0, 0, 0, ["[2-7]890\\d{4}", [8]]]],
            EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], 0, 0, 0, 0, 0, 0, [["(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", [7]], ["(?:5\\d{5}|8(?:1(?:0(?:000|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:23|[3-79]\\d)\\d)\\d)|2(?:0(?:000|(?:19|[24-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9])\\d|7(?:[679]\\d|8[13-9])|8(?:[2-6]\\d|7[01]))\\d)|[349]\\d{4}))\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", [7, 8]], ["800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}"], ["(?:40\\d\\d|900)\\d{4}", [7, 8]], ["70[0-2]\\d{5}", [8]]]],
            EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2[2-4]|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}", [8, 9]], ["1[0-25]\\d{8}", [10]], ["800\\d{7}", [10]], ["900\\d{7}", [10]]]],
            EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]", [["528[89]\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[01]\\d|6[1267]|7[0-57]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]],
            ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}"], ["(?:17[1-3]|7\\d\\d)\\d{4}"]]],
            ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]], 0, 0, 0, 0, 0, 0, [["96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}"], ["(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}"], ["[89]00\\d{6}"], ["80[367]\\d{6}"], ["70\\d{7}"], 0, ["51\\d{7}"], 0, 0, ["90[12]\\d{6}"]]],
            ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["11667[01]\\d{3}|(?:11(?:1(?:1[124]|2[2-7]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[78]|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}"], ["9\\d{8}"]]],
            FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", [["(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}", [5, 6, 7, 8, 9]], ["4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]], ["800\\d{4,6}", [7, 8, 9]], ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}"]], "00"],
            FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, [["603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}", [7]], ["(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", [7]], ["0800\\d{7}", [11]]], "00"],
            FK: ["500", "00", "[2-7]\\d{4}", [5], 0, 0, 0, 0, 0, 0, 0, [["[2-47]\\d{4}"], ["[56]\\d{4}"]]],
            FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]], 0, 0, 0, 0, 0, 0, [["31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}"], ["31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}"]]],
            FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))", 0, 0, 0, [["(?:20|[34]\\d|8[19])\\d{4}"], ["(?:[27][1-9]|5\\d|91)\\d{4}"], ["80[257-9]\\d{3}"], ["90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d"], 0, 0, 0, 0, ["(?:6[0-36]|88)\\d{4}"]]],
            FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:[1-35]\\d|4[1-9])\\d{7}"], ["(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7(?:00|[3-9]\\d))\\d{6}"], ["80[0-5]\\d{6}"], ["836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}"], 0, 0, ["80[6-9]\\d{6}"], 0, ["9\\d{8}"], ["8(?:1[01]|2[0156]|84)\\d{6}"]]],
            GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[47]\\d{6}|76\\d{6})", "$1", 0, 0, [["[01]1\\d{6}", [8]], ["(?:(?:0[2-7]\\d|6(?:0[0-4]|10|[256]\\d))\\d|7(?:[47]\\d\\d|658))\\d{4}|[2-7]\\d{6}"]]],
            GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0359])|(?:5[0-26-9]|[78][0-49])\\d\\d|6(?:[0-4]\\d\\d|50[0-24-69]))|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-278])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
            GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473", [["473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}"], ["473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}"], ["5(?:(?:0555|1177)[5-9]|757(?:7[7-9]|8[01]))\\d{3}|5(?:0070|(?:11|33)33|[25]222)[0-4]\\d{3}|5(?:00(?:0\\d|50)|11(?:00|1\\d|2[0-4])|5200|75(?:00|[57]5)|8(?:0(?:[01]\\d|2[0-4])|58[89]|8(?:55|88)))\\d{4}|(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}"], ["800\\d{6}"], 0, 0, 0, 0, 0, ["70[67]\\d{6}"]]],
            GF: ["594", "00", "(?:[56]94|80\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[0-4])\\d{4}"], ["694(?:[0-249]\\d|3[0-48])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976\\d{6}"]]],
            GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]],
            GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["3082[0-5]\\d{4}|3(?:0(?:[237]\\d|8[01])|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", [9]], ["(?:2(?:[0346-8]\\d|5[67])|5(?:[0457]\\d|6[01]|9[1-9]))\\d{6}", [9]], ["800\\d{5}", [8]]]],
            GI: ["350", "00", "(?:[25]\\d\\d|606)\\d{5}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]], 0, 0, 0, 0, 0, 0, [["21(?:6[24-7]\\d|90[0-2])\\d{3}|2(?:00|2[25])\\d{5}"], ["(?:5[146-8]\\d|606)\\d{5}"]]],
            GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:19|3[1-7]|6[14689]|70|8[14-79]|9\\d)\\d{4}"], ["[245]\\d{5}"], ["80\\d{4}"], 0, 0, 0, 0, 0, ["3[89]\\d{4}"]]],
            GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}"], ["(?:[23679]\\d|5[0-389])\\d{5}"]]],
            GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]], 0, 0, 0, 0, 0, 0, [["3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}", [8]], ["6[0-356]\\d{7}", [9]], 0, 0, 0, 0, 0, 0, ["722\\d{6}", [9]]]],
            GP: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
            GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]], 0, 0, 0, 0, 0, 0, [["33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}"], ["(?:222|55\\d)\\d{6}"], ["80\\d[1-9]\\d{5}"], ["90\\d[1-9]\\d{5}"]]],
            GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]], 0, 0, 0, 0, 0, 0, [["2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", [10]], ["68[57-9]\\d{7}|(?:69|94)\\d{8}", [10]], ["800\\d{7,9}"], ["90[19]\\d{7}", [10]], ["70\\d{8}", [10]], 0, ["5005000\\d{3}", [10]], 0, 0, ["8(?:0[16]|12|[27]5|50)\\d{7}", [10]]]],
            GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [["[267][2-9]\\d{6}", [8]], ["[3-5]\\d{7}", [8]], ["18[01]\\d{8}", [11]], ["19\\d{9}", [11]]]],
            GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671", [["671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]], 0, 0, 0, 0, 0, 0, [["443\\d{6}", [9]], ["9(?:5\\d|6[569]|77)\\d{6}", [9]], 0, 0, 0, 0, 0, 0, ["40\\d{5}", [7]]]],
            GY: ["592", "001", "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}"], ["6\\d{6}"], ["(?:289|862)\\d{4}"], ["9008\\d{3}"]]],
            HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:[13-9]\\d|2[013-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[0-8]|5[0-5]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}", [8]], ["(?:46(?:[07][0-7]|1[0-6]|4[0-57-9]|5[0-8]|6[0-4])|573[0-6]|6(?:26[013-7]|66[0-3])|70(?:7[1-5]|8[0-4])|848[015-9]|929[03-9])\\d{4}|(?:46[238]|5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|84[09]|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", [8]], ["800\\d{6}", [9]], ["900(?:[0-24-9]\\d{7}|3\\d{1,4})", [5, 6, 7, 8, 11]], ["8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", [8]], 0, ["30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", [8]], ["7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", [8]]], "00"],
            HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]], 0, 0, 0, 0, 0, 0, [["2(?:2(?:0[0-39]|1[1-367]|[23]\\d|4[03-6]|5[57]|6[245]|7[0135689]|8[01346-9]|9[0-2])|4(?:0[78]|2[3-59]|3[13-9]|4[0-68]|5[1-35])|5(?:0[7-9]|16|4[03-5]|5\\d|6[014-6]|7[04]|80)|6(?:[056]\\d|17|2[067]|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}", [8]], ["[37-9]\\d{7}", [8]], ["8002\\d{7}", [11]]]],
            HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", [8, 9]], ["9(?:751\\d{5}|8\\d{6,7})|9(?:0[1-9]|[1259]\\d|7[0679])\\d{6}", [8, 9]], ["80[01]\\d{4,6}", [7, 8, 9]], ["6[01459]\\d{6}|6[01]\\d{4,5}", [6, 7, 8]], ["7[45]\\d{6}", [8]], 0, ["62\\d{6,7}|72\\d{6}", [8, 9]]]],
            HT: ["509", "00", "[2-489]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]], 0, 0, 0, 0, 0, 0, [["2(?:2\\d|5[1-5]|81|9[149])\\d{5}"], ["[34]\\d{7}"], ["8\\d{7}"], 0, 0, 0, 0, 0, ["9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}"]]],
            HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06", 0, 0, 0, 0, 0, [["(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", [8]], ["(?:[257]0|3[01])\\d{7}", [9]], ["(?:[48]0\\d|680[29])\\d{5}"], ["9[01]\\d{6}", [8]], 0, 0, ["38\\d{7}", [9]], 0, ["21\\d{7}", [9]]]],
            ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", [7, 8, 9, 10, 11]], ["8[1-35-9]\\d{7,10}", [9, 10, 11, 12]], ["00[17]803\\d{7}|(?:177\\d|800)\\d{5,7}|001803\\d{6}", [8, 9, 10, 11, 12, 13]], ["809\\d{7}", [10]], 0, 0, ["(?:1500|8071\\d{3})\\d{3}", [7, 10]], 0, 0, ["804\\d{7}", [10]]]],
            IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}"], ["8(?:22|[35-9]\\d)\\d{6}", [9]], ["1800\\d{6}", [10]], ["15(?:1[2-8]|[2-8]0|9[089])\\d{6}", [10]], ["700\\d{6}", [9]], 0, ["818\\d{6}", [9]], 0, ["76\\d{7}", [9]], ["18[59]0\\d{6}", [10]]]],
            IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0", 0, 0, 0, 0, 0, [["153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}", [8, 11, 12]], ["5(?:(?:[02368]\\d|[19][2-9]|4[1-9])\\d|5(?:01|1[79]|2[2-9]|3[0-3]|4[34]|5[015689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", [9]], ["1(?:255|80[019]\\d{3})\\d{3}", [7, 10]], ["1212\\d{4}|1(?:200|9(?:0[01]|19))\\d{6}", [8, 10]], 0, 0, ["1599\\d{6}", [10]], 0, ["7(?:380|8(?:33|55|77|81))\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[235-9])\\d{6}", [9]], ["1700\\d{6}", [10]]]],
            IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([25-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24", [["1624(?:230|[5-8]\\d\\d)\\d{3}"], ["76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}"], ["808162\\d{4}"], ["8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}"], ["70\\d{8}"], 0, ["3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}"], 0, ["56\\d{8}"]]],
            IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0", 0, 0, 0, 0, 0, [["2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}", [10]], ["(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}", [10]], ["000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))"], ["186[12]\\d{9}", [13]], 0, 0, ["140\\d{7}", [10]], 0, 0, ["1860\\d{7}", [11]]]],
            IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]], 0, 0, 0, 0, 0, 0, [["37\\d{5}"], ["38\\d{5}"]]],
            IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", [8, 9]], ["7[3-9]\\d{8}", [10]]]],
            IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}", [6, 7, 10]], ["9(?:(?:0(?:[0-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d)\\d|9(?:(?:[0-3]\\d|4[0145])\\d|5[15]0|8(?:1\\d|88)|9(?:0[013]|[19]\\d|21|77|8[7-9])))\\d{5}", [10]], 0, 0, 0, 0, ["96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", [4, 5]]]],
            IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}", [7]], ["(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[28]))\\d{4}"], ["80[08]\\d{4}", [7]], ["90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}", [7]], 0, 0, ["809\\d{4}", [7]], 0, ["49[0-24-79]\\d{4}", [7]]], "00"],
            IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|55\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[38]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
            JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}"], ["56\\d{8}"]]],
            JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876", [["8766060\\d{3}|(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:52[35]|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}"], ["(?:658295|876(?:2(?:0[2-9]|[14-9]\\d|2[013-9]|3[3-9])|[348]\\d\\d|5(?:0[1-9]|[1-9]\\d)|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, [["87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}", [8]], ["7(?:[78][0-25-9]|9\\d)\\d{6}", [9]], ["80\\d{6}", [8]], ["9\\d{7}", [8]], ["70\\d{7}", [9]], 0, ["8(?:10|8\\d)\\d{5}", [8]], ["74(?:66|77)\\d{5}", [9]], 0, ["85\\d{6}", [8]]]],
            JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", [9]], ["[7-9]0[1-9]\\d{7}", [10]], ["00777(?:[01]|5\\d)\\d\\d|(?:00(?:7778|882[1245])|(?:120|800\\d)\\d\\d)\\d{4}|00(?:37|66|78)\\d{6,13}"], ["990\\d{6}", [9]], ["60\\d{7}", [9]], 0, ["570\\d{6}", [9]], ["20\\d{8}", [10]], ["50[1-9]\\d{7}", [10]]]],
            KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}", [7, 8, 9]], ["(?:1(?:0[0-6]|1[0-5]|2[014])|7\\d\\d)\\d{6}", [9]], ["800[24-8]\\d{5,6}", [9, 10]], ["900[02-9]\\d{5}", [9]]]],
            KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", [9]], ["312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|880|99[05-9])\\d{6}", [9]], ["800\\d{6,7}"]]],
            KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0", 0, 0, 0, 0, 0, [["23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})", [8, 9]], ["(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", [8, 9]], ["1800(?:1\\d|2[019])\\d{4}", [10]], ["1900(?:1\\d|2[09])\\d{4}", [10]]]],
            KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0", 0, 0, 0, 0, 0, [["(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}"], ["(?:63\\d{3}|73(?:0[0-5]\\d|140))\\d{3}|[67]200[01]\\d{3}", [8]], 0, 0, 0, 0, 0, 0, ["30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", [8]]]],
            KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]], 0, 0, 0, 0, 0, 0, [["7[4-7]\\d{5}"], ["[34]\\d{6}"], 0, ["8\\d{6}"]]],
            KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869", [["869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\\d{4}"], ["869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}"], ["19[1-3]\\d{7}", [10]]]],
            KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?", 0, 0, 0, [["(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}", [5, 6, 8, 9, 10]], ["1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[1-46-9]|[16-9]\\d|2[013-9])\\d{6,7}", [9, 10]], ["00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}", [9, 11, 12, 13, 14]], ["60[2-9]\\d{6}", [9]], ["50\\d{8,9}", [10, 11]], 0, ["1(?:5(?:22|33|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}", [8]], ["15\\d{7,8}", [9, 10]], ["70\\d{8}", [10]]]],
            KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]], 0, 0, 0, 0, 0, 0, [["2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", [8]], ["(?:41\\d\\d|5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|222|333|444|7(?:0[013-9]|[67]\\d)|888|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|22|[4679]\\d|8[057-9])\\d|1(?:1[01]|99)|3(?:00|33)|5(?:00|5\\d)))\\d{4}", [8]], ["18\\d{5}", [7]]]],
            KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345", [["345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}"], ["345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["(?:345976|900[2-9]\\d\\d)\\d{4}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["345849\\d{4}"]]],
            KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", [["(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}", [10]], ["7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}", [10]], ["8(?:00|108\\d{3})\\d{7}"], ["809\\d{7}", [10]], ["808\\d{7}", [10]], 0, 0, 0, ["751\\d{7}", [10]]], "8~10"],
            LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", [8]], ["(?:20(?:[239]\\d|5[24-9]|7[6-8])|302\\d)\\d{6}", [10]], 0, 0, 0, 0, ["30[013-9]\\d{6}", [9]]]],
            LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0", 0, 0, 0, 0, 0, [["7(?:62|8[0-7]|9[04-9])\\d{4}|(?:[14-69]\\d|2(?:[14-69]\\d|[78][1-9])|7[2-57]|8[02-9])\\d{5}"], ["793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}"], 0, ["9[01]\\d{6}", [8]], 0, 0, 0, 0, 0, ["80\\d{6}", [8]]]],
            LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758", [["758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}"], ["758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "0|(1001)", 0, 0, 0, [["(?:2(?:01|1[27]|2[02]|3\\d|6[02-578]|96)|3(?:[24]0|33|7[0135-7]|8[048]|9[0269]))\\d{4}", [7]], ["(?:6(?:4(?:5[4-9]|[6-9]\\d)|5[0-4]\\d|6(?:[0245]\\d|[17]0|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}"], ["8002[28]\\d\\d|80(?:05\\d|9)\\d{4}"], ["90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", [7]], 0, 0, ["870(?:28|87)\\d\\d", [7]]]],
            LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}"], ["7(?:[0-25-8]\\d|4[0-4])\\d{6}"], 0, 0, 0, 0, ["1973\\d{5}"]]],
            LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2\\d{3}|33333)\\d{4}", [8, 9]], ["(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|[56]\\d{6}", [7, 9]], 0, ["332(?:02|[34]\\d)\\d{4}", [9]]]],
            LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]], 0, 0, 0, 0, 0, 0, [["2\\d{7}"], ["[56]\\d{7}"], ["800[256]\\d{4}"]]],
            LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]", 0, 0, 0, [["(?:3[1478]|4[124-6]|52)\\d{6}"], ["6\\d{7}"], ["80[02]\\d{5}"], ["9(?:0[0239]|10)\\d{5}"], ["70[05]\\d{5}"], 0, ["70[67]\\d{5}"], 0, ["[89]01\\d{5}"], ["808\\d{5}"]]],
            LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", 0, 0, 0, [["(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}"], ["6(?:[269][18]|5[1568]|7[189]|81)\\d{6}", [9]], ["800\\d{5}", [8]], ["90[015]\\d{5}", [8]], 0, 0, 0, 0, ["20(?:1\\d{5}|[2-689]\\d{1,7})", [4, 5, 6, 7, 8, 9, 10]], ["801\\d{5}", [8]]]],
            LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]], 0, 0, 0, 0, 0, 0, [["6\\d{7}"], ["2\\d{7}"], ["80\\d{6}"], ["90\\d{6}"], 0, 0, 0, 0, 0, ["81\\d{6}"]]],
            LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}"], ["9[1-6]\\d{7}"]]],
            MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]", "5(?:29|38)[89]0"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[01]\\d|6[1267]|7[0-57]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]],
            MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:870|9[2-47-9]\\d)\\d{5}", [8]], ["4(?:[46]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}"], ["(?:800|90\\d)\\d{5}", [8]]]],
            MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}"], ["562\\d{5}|(?:6\\d|7[16-9])\\d{6}"], ["800\\d{5}"], ["90[056]\\d{5}"], 0, 0, ["803\\d{5}"], 0, ["3[08]\\d{6}"], ["808\\d{5}"]]],
            ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}", [8]], ["6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}", [8]], ["80(?:[0-2578]|9\\d)\\d{5}"], ["9(?:4[1568]|5[178])\\d{5}", [8]], 0, 0, ["77[1-9]\\d{5}", [8]], 0, ["78[1-49]\\d{5}", [8]]]],
            MF: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
            MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "0|([24-9]\\d{6})$", "20$1", 0, 0, [["2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}"], ["3[2-489]\\d{7}"], 0, 0, 0, 0, 0, 0, ["22\\d{7}"]]],
            MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1", 0, 0, 0, 0, 0, [["(?:247|528|625)\\d{4}"], ["(?:(?:23|54)5|329|45[56])\\d{4}"], 0, 0, 0, 0, 0, 0, ["635\\d{4}"]]],
            MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}"], ["7(?:3555|4(?:60\\d|747)|94(?:[01]\\d|2[0-4]))\\d{3}|7(?:[0-25-8]\\d|3[2-4]|42|9[23])\\d{5}"], ["800\\d{5}"], ["5[02-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:0[1-9]|[1-9]\\d)\\d{5}"]]],
            ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], 0, 0, 0, 0, 0, 0, [["2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}"], ["2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[239])\\d{6}"], ["80\\d{6}"]]],
            MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|46|6[25]|7[0-3]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|46|62|7[0-3]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[0-3])|3(?:20\\d|4(?:70|83)|56)|420\\d|5470)|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|247[23]|3(?:20\\d|470)|4(?:2[04]\\d|47[23])|7(?:(?:3\\d|8[01459])\\d|4(?:39|60|7[013]))))\\d{4}|5(?:2(?:2\\d{5,6}|47[023]\\d{4})|(?:347[23]|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[0-2])|8(?:20\\d|47[02])|9(?:20\\d|47[01]))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:2\\d|4[1-9]|51)\\d|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|[35]2\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}", [6, 7, 8, 9]], ["(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}", [7, 8, 9, 10]], ["80080(?:[01][1-9]|2\\d)\\d{3}", [10]], 0, 0, 0, 0, 0, ["1333\\d{4}|[12]468\\d{4}", [8]]]],
            MN: ["976", "001", "[12]\\d{7,9}|[57-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["[12]2[1-3]\\d{5,6}|7(?:0[0-5]\\d|128)\\d{4}|(?:[12](?:1|27)|5[368])\\d{6}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}"], ["(?:83[01]|920)\\d{5}|(?:5[05]|8[05689]|9[013-9])\\d{6}", [8]], 0, 0, 0, 0, 0, 0, ["712[0-79]\\d{4}|7(?:1[013-9]|[5-8]\\d)\\d{5}", [8]]]],
            MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]], 0, 0, 0, 0, 0, 0, [["(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}", [8]], ["6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}", [8]], ["0800\\d{3}", [7]]]],
            MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670", [["670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            MQ: ["596", "00", "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["596(?:[04-7]\\d|10|2[7-9]|3[04-9]|8[09]|9[4-9])\\d{4}"], ["69(?:6(?:[0-46-9]\\d|5[0-6])|727)\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976(?:6\\d|7[0-367])\\d{4}"]]],
            MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]], 0, 0, 0, 0, 0, 0, [["(?:25[08]|35\\d|45[1-7])\\d{5}"], ["[2-4][0-46-9]\\d{6}"], ["800\\d{5}"]]],
            MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664", [["6644(?:1[0-3]|91)\\d{4}"], ["664(?:3(?:49|9[1-6])|49[2-6])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]], 0, 0, 0, 0, 0, 0, [["20(?:3[1-4]|6[059])\\d{4}|2(?:0[19]|[1-357]\\d|60)\\d{5}"], ["(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}"], ["800[3467]\\d{4}"], ["5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}"], 0, 0, ["501\\d{5}"], ["7117\\d{4}"], ["3550\\d{4}"]]],
            MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:5|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["5"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:[0346-8]\\d|1[0-7])|4(?:[013568]\\d|2[4-7])|54(?:[3-5]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", [7, 8]], ["5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[5-9]|4[3-589]|[57]\\d|8[0-689]|9[0-8])\\d{5}", [8]], ["802\\d{7}|80[0-2]\\d{4}", [7, 10]], ["30\\d{5}", [7]], 0, 0, 0, 0, ["3(?:20|9\\d)\\d{4}", [7]]], "020"],
            MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, [["(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}", [7]], ["46[46]\\d{4}|(?:7\\d|9[13-9])\\d{5}", [7]], ["800\\d{7}", [10]], ["900\\d{7}", [10]], 0, 0, ["4[05]0\\d{4}", [7]]], "00"],
            MW: ["265", "00", "(?:[19]\\d|[23]1|77|88)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1[2-9]|21\\d\\d)\\d{5}"], ["111\\d{6}|(?:31|77|88|9[89])\\d{7}", [9]]]],
            MX: ["52", "0[09]", "1(?:(?:44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[017]\\d|[235][1-9]|4[0-35-9]|6[0-46-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, [["6571\\d{6}|(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|6[1-9]|7[12]|8[1-8]|9\\d))\\d{7}", [10]], ["6571\\d{6}|(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|6[1-9]|7[12]|8[1-8]|9\\d))\\d{7}"], ["8(?:00|88)\\d{7}", [10]], ["900\\d{7}", [10]], ["500\\d{7}", [10]], 0, 0, 0, 0, ["300\\d{7}", [10]]], "00"],
            MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9])|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", [8, 9]], ["1(?:1888[69]|4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0134]\\d|2[1-9]|5[0-6]))|(?:(?:[269]|59)\\d|[37][1-9]|4[235-9])\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}", [9, 10]], ["1[378]00\\d{6}", [10]], ["1600\\d{6}", [10]], 0, 0, 0, 0, ["15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}", [10]]]],
            MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], 0, 0, 0, 0, 0, 0, [["2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", [8]], ["8[2-79]\\d{7}", [9]], ["800\\d{6}", [9]]]],
            NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["64426\\d{3}|6(?:1(?:2[2-7]|3[01378]|4[0-4])|254|32[0237]|4(?:27|41|5[25])|52[236-8]|626|7(?:2[2-4]|30))\\d{4,5}|6(?:1(?:(?:0\\d|2[0189]|3[24-69]|4[5-9])\\d|17|69|7[014])|2(?:17|5[0-36-8]|69|70)|3(?:17|2[14-689]|34|6[289]|7[01]|81)|4(?:17|2[0-2]|4[06]|5[0137]|69|7[01])|5(?:17|2[0459]|69|7[01])|6(?:17|25|38|42|69|7[01])|7(?:17|2[569]|3[13]|6[89]|7[01]))\\d{4}"], ["(?:60|8[1245])\\d{7}", [9]], ["80\\d{7}", [9]], ["8701\\d{5}", [9]], 0, 0, 0, 0, ["8(?:3\\d\\d|86)\\d{5}"]]],
            NC: ["687", "00", "[2-57-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}"], ["(?:5[0-4]|[79]\\d|8[0-79])\\d{4}"], 0, ["36\\d{4}"]]],
            NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]], 0, 0, 0, 0, 0, 0, [["2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}"], ["(?:23|7[04]|[89]\\d)\\d{6}"], ["08\\d{6}"], ["09\\d{6}"]]],
            NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1", 0, 0, [["(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}"], ["(?:14|3[58])\\d{4}"]]],
            NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:(?:[1-356]\\d|4[02-8]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|7(?:0(?:[013-689]\\d|2[0-24-9])\\d{3,4}|[1-79]\\d{6})|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[1-3578])\\d{5}", [7, 8]], ["(?:702[0-24-9]|8(?:01|19)[01])\\d{6}|(?:70[13-689]|8(?:0[2-9]|1[0-8])|9(?:0[1-9]|1[2356]))\\d{7}", [10]], ["800\\d{7,11}", [10, 11, 12, 13, 14]], 0, 0, 0, ["700\\d{7,11}", [10, 11, 12, 13, 14]]]],
            NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]], 0, 0, 0, 0, 0, 0, [["2\\d{7}"], ["(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}"], ["1800\\d{4}"]]],
            NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", [9]], ["6[1-58]\\d{7}", [9]], ["800\\d{4,7}", [7, 8, 9, 10]], ["90[069]\\d{4,7}", [7, 8, 9, 10]], 0, 0, ["140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d", [5, 6, 9]], ["66\\d{7}", [9]], ["(?:85|91)\\d{7}", [9]]]],
            NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]", [["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", [8]], ["(?:4[015-8]|59|9\\d)\\d{6}", [8]], ["80[01]\\d{5}", [8]], ["82[09]\\d{5}", [8]], ["880\\d{5}", [8]], 0, ["(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}"], 0, ["85[0-5]\\d{5}", [8]], ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]]],
            NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-579]|6[2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0", 0, 0, 0, 0, 0, [["(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}", [8]], ["9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}", [10]], ["1(?:66001|800\\d\\d)\\d{5}", [11]]]],
            NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]], 0, 0, 0, 0, 0, 0, [["444\\d{4}"], ["(?:55[3-9]|666|8\\d\\d)\\d{4}"]]],
            NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, [["[47]\\d{3}", [4]], ["888[4-9]\\d{3}", [7]]]],
            NZ: ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]], "0", 0, 0, 0, 0, 0, [["24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}", [8]], ["2[0-27-9]\\d{7,8}|21\\d{6}", [8, 9, 10]], ["508\\d{6,7}|80\\d{6,8}", [8, 9, 10]], ["(?:11\\d{5}|50(?:0[08]|30|66|77|88))\\d{3}|90\\d{6,8}", [7, 8, 9, 10]], ["70\\d{7}", [9]], 0, ["8(?:1[6-9]|22|3\\d|4[045]|5[459]|7[0-3579]|90)\\d{2,7}"], ["[28]6\\d{6,7}", [8, 9]]], "00"],
            OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]], 0, 0, 0, 0, 0, 0, [["2[2-6]\\d{6}", [8]], ["1505\\d{4}|(?:7(?:[1289]\\d|70)|9(?:0[1-9]|[1-9]\\d))\\d{5}", [8]], ["8007\\d{4,5}|(?:500|800[05])\\d{4}"], ["900\\d{5}", [8]]]],
            PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], 0, 0, 0, 0, 0, 0, [["(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[58]|7[0167]|8[258]|9[1389])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[02-9])|3(?:[089]\\d|1[0-7]|2[0-5]|33|4[0-79]|5[05]|6[068]|7[0-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[056]|7[0-24-9]|8[6-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", [7]], ["(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-8])\\d|8(?:1[01]|7[23]))\\d{4}", [7, 8]], ["800\\d{4,5}|(?:00800|800\\d)\\d{6}"], ["(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", [7]]]],
            PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, [["(?:(?:4[34]|5[14])[0-8]\\d|7(?:173|3[0-8]\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}", [8]], ["9\\d{8}", [9]], ["800\\d{5}", [8]], ["805\\d{5}", [8]], ["80[24]\\d{5}", [8]], 0, 0, 0, 0, ["801\\d{5}", [8]]], 0, " Anexo "],
            PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]], 0, 0, 0, 0, 0, 0, [["4(?:0[4-689]|9[4-68])\\d{5}", [8]], ["8[7-9]\\d{6}", [8]], ["80[0-5]\\d{6}", [9]], 0, 0, 0, ["44\\d{4}", [6]], 0, ["499\\d{5}", [8]]]],
            PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, [["(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|85[02-46-9])\\d{4}", [7]], ["(?:7\\d|8[18])\\d{6}", [8]], ["180\\d{4}", [7]], 0, 0, 0, 0, ["27[01]\\d{4}", [7]], ["2(?:0[0-47]|7[568])\\d{4}", [7]]], "00"],
            PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0", 0, 0, 0, 0, 0, [["(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|(?:2|8[2-8]\\d\\d)\\d{5}", [6, 8, 9, 10]], ["(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\\d|4[2-9]|8[135-9]|9[1-9]))\\d{7}", [10]], ["1800\\d{7,9}", [11, 12, 13]]]],
            PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, [["(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}", [9, 10]], ["3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}", [10]], ["800\\d{5}(?:\\d{3})?", [8, 11]], ["900\\d{5}", [8]], ["122\\d{6}", [9]], 0, ["(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", [11, 12]]]],
            PL: ["48", "00", "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]], 0, 0, 0, 0, 0, 0, [["47\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))", [7, 9]], ["211(?:1\\d|3[1-5])\\d{4}|(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", [9]], ["800\\d{6,7}", [9, 10]], ["70[01346-8]\\d{6}", [9]], 0, 0, ["804\\d{6}", [9]], ["64\\d{4,7}", [6, 7, 8, 9]], ["39\\d{7}", [9]], ["801\\d{6}", [9]]]],
            PM: ["508", "00", "(?:[45]|80\\d\\d)\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:4[1-3]|50)\\d{4}", [6]], ["(?:4[02-4]|5[05])\\d{4}", [6]], ["80[0-5]\\d{6}", [9]]]],
            PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939", [["(?:787|939)[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0", 0, 0, 0, 0, 0, [["(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}", [8]], ["5[69]\\d{7}", [9]], ["1800\\d{6}", [10]], 0, 0, 0, 0, 0, 0, ["1700\\d{6}", [10]]]],
            PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]], 0, 0, 0, 0, 0, 0, [["2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}"], ["6[0356]92(?:30|9\\d)\\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\\d\\d|480))\\d{5}"], ["80[02]\\d{6}"], ["(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}"], ["884[0-4689]\\d{5}"], 0, ["70(?:7\\d|8[17])\\d{5}"], 0, ["30\\d{7}"], ["80(?:8\\d|9[1579])\\d{5}"]]],
            PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}"], ["(?:46[0-5]|6[2-4689]0)\\d{4}|(?:45|77|88)\\d{5}"]]],
            PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, [["(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}", [7, 8, 9]], ["9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", [9]], ["9800\\d{5,7}", [9, 10, 11]], 0, 0, 0, ["[2-9]0\\d{4,7}", [6, 7, 8, 9]], 0, ["8700[0-4]\\d{4}", [9]]]],
            QA: ["974", "00", "[2-7]\\d{7}|800\\d{4}(?:\\d{2})?|2\\d{6}", [7, 8, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]], 0, 0, 0, 0, 0, 0, [["4141\\d{4}|(?:23|4[04])\\d{6}", [8]], ["(?:28|[35-7]\\d)\\d{6}", [8]], ["800\\d{4}(?:\\d{2})?", [7, 9]], 0, 0, 0, 0, ["2(?:[12]\\d|61)\\d{4}", [7]]]],
            RE: ["262", "00", "9769\\d{5}|(?:26|[68]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, "26[23]|69|[89]", [["26(?:2\\d\\d|30[0-5])\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-27]|8[0-8]|9[0-479]))|9769\\d)\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],
            RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d"], ["7020\\d{5}|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[019])\\d{6}", [9]], ["800\\d{6}", [9]], ["90[0136]\\d{6}", [9]], 0, 0, ["(?:37\\d|80[578])\\d{6}", [9]], 0, 0, ["801\\d{6}", [9]]], 0, " int "],
            RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}", [7, 8, 9, 10, 11, 12]], ["6(?:[0-689]|7\\d)\\d{6,7}", [8, 9, 10]], ["800\\d{3,9}"], ["(?:78\\d|90[0169])\\d{3,7}", [6, 7, 8, 9, 10]], 0, 0, ["7[06]\\d{4,10}"]]],
            RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", [["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", [10]], ["9\\d{9}", [10]], ["8(?:0[04]|108\\d{3})\\d{7}"], ["80[39]\\d{7}", [10]], ["808\\d{7}", [10]]], "8~10"],
            RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]], "0", 0, 0, 0, 0, 0, [["(?:06|2[23568]\\d)\\d{6}"], ["7[2389]\\d{7}", [9]], ["800\\d{6}", [9]], ["900\\d{6}", [9]]]],
            SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, 0, 0, 0, 0, [["1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", [9]], ["579[01]\\d{5}|5(?:[013-689]\\d|7[0-36-8])\\d{6}", [9]], ["800\\d{7}", [10]], ["925\\d{6}", [9]], 0, 0, ["811\\d{7}", [10]], 0, 0, ["920\\d{6}", [9]]]],
            SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]], 0, 0, 0, 0, 0, 0, [["(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", [5]], ["48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}"], ["1[38]\\d{3}", [5]], 0, 0, 0, 0, 0, ["5[12]\\d{3}", [5]]]],
            SC: ["248", "010|0[0-2]", "8000\\d{3}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, [["4[2-46]\\d{5}"], ["2[5-8]\\d{5}"], ["8000\\d{3}"], 0, 0, 0, 0, 0, ["971\\d{4}|(?:64|95)\\d{5}"]], "00"],
            SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1(?:5\\d|8[35-7])\\d{6}"], ["(?:1[0-2]|9[0-3569])\\d{7}"]]],
            SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0", 0, 0, 0, 0, 0, [["(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}", [7, 8, 9]], ["7[02369]\\d{7}", [9]], ["20\\d{4,7}", [6, 7, 8, 9]], ["649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", [7, 8, 9, 10]], ["75[1-8]\\d{6}", [9]], 0, ["10[1-8]\\d{6}", [9]], ["74[02-9]\\d{6}", [9]], 0, ["77[0-7]\\d{6}", [9]]]],
            SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-4]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [["662[0-24-9]\\d{4}|6(?:[1-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}", [8]], ["895[0-2]\\d{4}|(?:8(?:0[1-4]|[1-8]\\d|9[0-4])|9[0-8]\\d)\\d{5}", [8]], ["(?:18|8)00\\d{7}", [10, 11]], ["1900\\d{7}", [11]], 0, 0, ["7000\\d{7}", [11]], 0, ["(?:3[12]\\d|666)\\d{5}", [8]]]],
            SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]", [["2(?:[0-57-9]\\d|6[4-9])\\d\\d"], ["[56]\\d{4}", [5]], 0, 0, 0, 0, 0, 0, ["262\\d\\d", [5]]]],
            SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, [["(?:[1-357][2-8]|4[24-8])\\d{6}", [8]], ["65(?:1\\d|55|[67]0)\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}", [8]], ["80\\d{4,6}", [6, 7, 8]], ["89[1-3]\\d{2,5}|90\\d{4,6}"], 0, 0, 0, 0, ["(?:59\\d\\d|8(?:1(?:[67]\\d|8[0-489])|2(?:0\\d|2[0-37-9]|8[0-2489])|3[389]\\d))\\d{4}", [8]]], "00"],
            SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79", [["79\\d{6}", [8]], ["(?:4[015-8]|59|9\\d)\\d{6}", [8]], ["80[01]\\d{5}", [8]], ["82[09]\\d{5}", [8]], ["880\\d{5}", [8]], 0, ["(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}"], 0, ["85[0-5]\\d{5}", [8]], ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]]],
            SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d"], ["909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}", [9]], ["800\\d{6}", [9]], ["9(?:00|[78]\\d)\\d{6}", [9]], 0, 0, ["96\\d{7}", [9]], ["9090\\d{3}", [7]], ["6(?:02|5[0-4]|9[0-6])\\d{6}", [9]], ["8[5-9]\\d{7}", [9]]]],
            SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, [["22[2-4][2-9]\\d{4}"], ["(?:25|3[0-5]|66|7[3-9]|8[08]|9[09])\\d{6}"]]],
            SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1", 0, 0, [["0549(?:8[0157-9]|9\\d)\\d{4}", [10]], ["6[16]\\d{6}", [8]], 0, ["7[178]\\d{6}", [8]], 0, 0, 0, 0, ["5[158]\\d{6}", [8]]]],
            SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]], 0, 0, 0, 0, 0, 0, [["3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}"], ["75(?:01|[38]3)\\d{5}|7(?:[06-8]\\d|21|5[4-7]|90)\\d{6}"], ["800\\d{6}"], ["88[4689]\\d{6}"], 0, 0, 0, 0, ["(?:3(?:392|9[01]\\d)\\d|93(?:3[13]0|929))\\d{4}"], ["81[02468]\\d{6}"]]],
            SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]], "0", 0, 0, 0, 0, 0, [["(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}", [6, 7]], ["(?:(?:15|(?:3[59]|4[89]|79|8[08])\\d|6(?:0[5-7]|[1-9]\\d)|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:6\\d|7[1-9])\\d{6}", [7, 8, 9]]]],
            SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]], 0, 0, 0, 0, 0, 0, [["(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}"], ["(?:7[124-7]|8[124-9])\\d{5}", [7]], 0, 0, 0, 0, 0, 0, ["56\\d{4}", [6]]]],
            SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["1[89]\\d{7}"], ["(?:12|9[1257-9])\\d{7}"]]],
            ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]], 0, 0, 0, 0, 0, 0, [["22\\d{5}"], ["900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}"]]],
            SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, [["2(?:[1-6]\\d{3}|[79]90[034]|890[0245])\\d{3}", [8]], ["66(?:[02-9]\\d\\d|1(?:[02-9]\\d|16))\\d{3}|(?:6[0-57-9]|7\\d)\\d{6}", [8]], ["800\\d{4}(?:\\d{4})?", [7, 11]], ["900\\d{4}(?:\\d{4})?", [7, 11]]]],
            SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721", [["7215(?:4[2-8]|8[239]|9[056])\\d{4}"], ["7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0", 0, 0, 0, 0, 0, [["21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}"], ["9(?:22|[3-689]\\d)\\d{6}", [9]]]],
            SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]], 0, 0, 0, 0, 0, 0, [["[23][2-5]\\d{6}", [8]], ["7[6-9]\\d{6}", [8]], ["0800\\d{4}", [8]], ["900\\d{6}", [9]], 0, 0, 0, 0, ["70\\d{6}", [8]]]],
            TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8", [["8\\d{3}"]]],
            TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649", [["649(?:266|712|9(?:4\\d|50))\\d{4}"], ["649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["649(?:71[01]|966)\\d{4}"]]],
            TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, [["22(?:[37-9]0|5[0-5]|6[89])\\d{4}"], ["(?:6[023568]|77|9\\d)\\d{6}"]], "00"],
            TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]], 0, 0, 0, 0, 0, 0, [["2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}"], ["(?:7[09]|9[0-36-9])\\d{6}"]]],
            TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0", 0, 0, 0, 0, 0, [["(?:1[0689]|2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", [8]], ["671[0-8]\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}", [9]], ["(?:001800\\d|1800)\\d{6}", [10, 13]], ["1900\\d{6}", [10]], 0, 0, 0, 0, ["6[08]\\d{7}", [9]]]],
            TJ: ["992", "810", "(?:00|[1-57-9]\\d)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}"], ["41[18]\\d{6}|(?:[034]0|1[01]|2[02]|5[05]|7[017]|8[08]|9\\d)\\d{7}"]], "8~10"],
            TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7], 0, 0, 0, 0, 0, 0, 0, [["(?:2[2-4]|[34]\\d)\\d{2,5}"], ["7[2-4]\\d{2,5}"]]],
            TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]], 0, 0, 0, 0, 0, 0, [["(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", [7]], ["7[2-8]\\d{6}", [8]], ["80\\d{5}", [7]], ["90\\d{5}", [7]], ["70\\d{5}", [7]]]],
            TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, [["(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}"], ["6\\d{7}"]], "8~10"],
            TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]], 0, 0, 0, 0, 0, 0, [["81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}"], ["3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-7])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}"], ["8010\\d{4}"], ["88\\d{6}"], 0, 0, 0, 0, 0, ["8[12]10\\d{4}"]]],
            TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}", [5]], ["(?:55[4-6]|6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}", [7]], ["0800\\d{3}", [7]], 0, 0, 0, 0, 0, ["55[0-37-9]\\d{4}", [7]]]],
            TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0", 0, 0, 0, 0, 0, [["(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", [10]], ["56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", [10]], ["8(?:00\\d{7}(?:\\d{2,3})?|11\\d{7})", [10, 12, 13]], ["(?:8[89]8|900)\\d{7}", [10]], ["592(?:21[12]|461)\\d{4}", [10]], 0, ["444\\d{4}", [7]], ["512\\d{7}", [10]], ["850\\d{7}", [10]]]],
            TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868", [["868(?:2(?:0[13]|1[89]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}"], ["868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]], 0, 0, 0, 0, 0, 0, [["2[02-9]\\d{3}", [5]], ["(?:7[01]\\d|90)\\d{4}", [6, 7]]]],
            TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}", [8, 9]], ["(?:40001[0-2]|9[0-8]\\d{4})\\d{3}", [9]], ["80[0-79]\\d{6}|800\\d{5}", [8, 9]], ["20(?:[013-9]\\d\\d|2)\\d{4}", [7, 9]], ["99\\d{7}", [9]], 0, ["50[0-46-9]\\d{6}", [9]], 0, ["7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}", [10, 11]]], 0, "#"],
            TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2[2-8]\\d{7}"], ["77[2-9]\\d{6}|(?:6[1-9]|7[1-689])\\d{7}"], ["80[08]\\d{6}"], ["90\\d{7}"], 0, 0, 0, 0, ["41\\d{7}"], ["8(?:40|6[01])\\d{6}"]]],
            UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", [9]], ["(?:50|6[36-8]|7[1-3]|9[1-9])\\d{7}", [9]], ["800[1-8]\\d{5,6}"], ["900[239]\\d{5,6}"], 0, 0, 0, 0, ["89[1-579]\\d{6}", [9]]], "0~0"],
            UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["20(?:(?:(?:24|81)0|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[0147]\\d|2[5-9]|32|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}"], ["726[01]\\d{5}|7(?:[0157-9]\\d|20|36|[46][0-4])\\d{6}"], ["800[1-3]\\d{5}"], ["90[1-3]\\d{6}"]]],
            US: ["1", "011", "[2-9]\\d{9}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))|82(?:2(?:0[0-3]|[268]2)|3(?:0[02]|33)|4(?:00|4[24]|65|82)|5(?:00|29|83)|6(?:00|66|82)|777|8(?:00|88)|9(?:00|9[89])))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[39]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01579]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            UY: ["598", "0(?:0|1[3-9]\\d)", "4\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:770|987)|(?:2\\d|4[2-7])\\d\\d)\\d{4}", [8]], ["9[1-9]\\d{6}", [8]], ["(?:4\\d{5}|80[05])\\d{4}|405\\d{4}", [7, 10]], ["90[0-8]\\d{4}", [7]]], "00", " int. "],
            UZ: ["998", "810", "(?:33|55|[679]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, [["(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|(?:1[12]|8\\d)\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}"], ["(?:(?:33|88|9[0-57-9])\\d{3}|55(?:50[013]|90\\d)|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}"]], "8~10"],
            VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698", [["06698\\d{1,6}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
            VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784", [["784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}"], ["784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}"], ["4(?:1[24-8]|2[46])\\d{7}"], ["800\\d{7}"], ["90[01]\\d{7}"], 0, 0, ["501\\d{7}"]]],
            VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284", [["284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}"], ["284496[6-9]\\d{3}|284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|5(?:4[0-7]|68|9[69]))\\d{4}"], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340", [["340(?:2(?:0[0-38]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]]],
            VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0", 0, 0, 0, 0, 0, [["2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-79]|9[0-4679])\\d{7}", [10]], ["(?:5(?:2[238]|59)|89[689]|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-8]|9[0-8])\\d{7}", [9]], ["1800\\d{4,6}|12(?:0[13]|28)\\d{4}", [8, 9, 10]], ["1900\\d{4,6}", [8, 9, 10]], 0, 0, ["(?:[17]99|80\\d)\\d{4}|69\\d{5,6}", [7, 8]], 0, ["672\\d{6}", [9]]]],
            VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]], 0, 0, 0, 0, 0, 0, [["(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}", [5]], ["(?:[58]\\d|7[013-7])\\d{5}", [7]], 0, 0, 0, 0, ["(?:3[03]|900\\d)\\d{3}"], 0, ["9(?:0[1-9]|1[01])\\d{4}", [7]]]],
            WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]], 0, 0, 0, 0, 0, 0, [["72\\d{4}", [6]], ["(?:72|8[23])\\d{4}", [6]], ["80[0-5]\\d{6}", [9]]]],
            WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]], 0, 0, 0, 0, 0, 0, [["6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}", [5, 6]], ["(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}", [7, 10]], ["800\\d{3}", [6]]]],
            XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2[89]|39)0\\d{6}|[23][89]\\d{6}"], ["4[3-9]\\d{6}", [8]], ["800\\d{5}", [8]], ["900\\d{5}", [8]]]],
            YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, [["78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}", [7, 8]], ["7[0137]\\d{7}", [9]]]],
            YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63", [["269(?:0[67]|5[0-3]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"]]],
            ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", [9]], ["(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d|7[0-46-9])\\d{3}|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}", [5, 6, 7, 8, 9]], ["80\\d{7}", [9]], ["(?:86[2-9]|9[0-2]\\d)\\d{6}", [9]], 0, 0, ["861\\d{6,7}", [9, 10]], 0, ["87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}", [9]], ["860\\d{6}", [9]]]],
            ZM: ["260", "00", "(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["21[1-8]\\d{6}"], ["(?:7[679]|9[5-8])\\d{7}"], ["800\\d{6}"], 0, 0, 0, 0, 0, ["630\\d{6}"]]],
            ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}"], ["7(?:[178]\\d|3[1-9])\\d{6}", [9]], ["80(?:[01]\\d|20|8[0-8])\\d{3}", [7]], 0, 0, 0, 0, 0, ["86(?:1[12]|22|30|44|55|77|8[368])\\d{6}", [10]]]]
        },
        nonGeographic: {
            800: ["800", 0, "(?:005|[1-9]\\d\\d)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:005|[1-9]\\d\\d)\\d{5}"]]],
            808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]],
            870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],
            878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]],
            881: ["881", 0, "[0-36-9]\\d{8}", [9], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]],
            882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["4"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]],
            883: ["883", 0, "(?:210|370\\d\\d)\\d{7}|51\\d{7}(?:\\d{3})?", [9, 10, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[35]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:210|(?:370[1-9]|51[013]0)\\d)\\d{7}|5100\\d{5}"]]],
            888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]],
            979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]]
        }
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        e = e.split("-"),
        t = t.split("-");
        for (var n = e[0].split("."), i = t[0].split("."), a = 0; a < 3; a++) {
            var r = Number(n[a])
              , d = Number(i[a]);
            if (r > d)
                return 1;
            if (d > r)
                return -1;
            if (!isNaN(r) && isNaN(d))
                return 1;
            if (isNaN(r) && !isNaN(d))
                return -1
        }
        return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        var t = e.search(r);
        if (t < 0)
            return {};
        for (var n = e.slice(0, t), i = e.match(r), a = 1; a < i.length; ) {
            if (i[a])
                return {
                    number: n,
                    ext: i[a]
                };
            a++
        }
    }
    t.a = i;
    var a = n(110)
      , r = new RegExp("(?:" + Object(a.a)() + ")$","i")
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        for (var n = e.slice(), i = t, a = Array.isArray(i), r = 0, i = a ? i : i[Symbol.iterator](); ; ) {
            var d;
            if (a) {
                if (r >= i.length)
                    break;
                d = i[r++]
            } else {
                if (r = i.next(),
                r.done)
                    break;
                d = r.value
            }
            var o = d;
            e.indexOf(o) < 0 && n.push(o)
        }
        return n.sort(function(e, t) {
            return e - t
        })
    }
    t.a = i
}
, function(e, t, n) {
    "use strict";
    n(112)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r(e, t, n, a) {
        if (n = n ? i({}, m, n) : m,
        a = new f.a(a),
        e.country && "001" !== e.country) {
            if (!a.hasCountry(e.country))
                throw new Error("Unknown country: ".concat(e.country));
            a.country(e.country)
        } else {
            if (!e.countryCallingCode)
                return e.phone || "";
            a.selectNumberingPlan(e.countryCallingCode)
        }
        var r, o = a.countryCallingCode(), u = n.v2 ? e.nationalNumber : e.phone;
        switch (t) {
        case "NATIONAL":
            return u ? (r = d(u, e.carrierCode, "NATIONAL", a, n),
            s(r, e.ext, a, n.formatExtension)) : "";
        case "INTERNATIONAL":
            return u ? (r = d(u, null, "INTERNATIONAL", a, n),
            r = "+".concat(o, " ").concat(r),
            s(r, e.ext, a, n.formatExtension)) : "+".concat(o);
        case "E.164":
            return "+".concat(o).concat(u);
        case "RFC3966":
            return Object(p.a)({
                number: "+".concat(o).concat(u),
                ext: e.ext
            });
        case "IDD":
            if (!n.fromCountry)
                return;
            return s(l(u, e.carrierCode, o, n.fromCountry, a), e.ext, a, n.formatExtension);
        default:
            throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'))
        }
    }
    function d(e, t, n, i, a) {
        var r = o(i.formats(), e);
        return r ? Object(c.b)(e, r, {
            useInternationalFormat: "INTERNATIONAL" === n,
            withNationalPrefix: !r.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !a || !1 !== a.nationalPrefix,
            carrierCode: t,
            metadata: i
        }) : e
    }
    function o(e, t) {
        for (var n = e, i = Array.isArray(n), a = 0, n = i ? n : n[Symbol.iterator](); ; ) {
            var r;
            if (i) {
                if (a >= n.length)
                    break;
                r = n[a++]
            } else {
                if (a = n.next(),
                a.done)
                    break;
                r = a.value
            }
            var d = r;
            if (d.leadingDigitsPatterns().length > 0) {
                var o = d.leadingDigitsPatterns()[d.leadingDigitsPatterns().length - 1];
                if (0 !== t.search(o))
                    continue
            }
            if (Object(u.a)(t, d.pattern()))
                return d
        }
    }
    function s(e, t, n, i) {
        return t ? i(e, t, n) : e
    }
    function l(e, t, n, i, a) {
        if (Object(f.b)(i, a.metadata) === n) {
            var r = d(e, t, "NATIONAL", a);
            return "1" === n ? n + " " + r : r
        }
        var o = Object(h.a)(i, void 0, a.metadata);
        if (o)
            return "".concat(o, " ").concat(n, " ").concat(d(e, null, "INTERNATIONAL", a))
    }
    t.a = r;
    var u = n(54)
      , c = n(114)
      , f = n(13)
      , h = n(535)
      , p = n(111)
      , m = {
        formatExtension: function(e, t, n) {
            return "".concat(e).concat(n.ext()).concat(t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        var i = new a.a(n);
        return i.selectNumberingPlan(e, t),
        i.defaultIDDPrefix() ? i.defaultIDDPrefix() : r.test(i.IDDPrefix()) ? i.IDDPrefix() : void 0
    }
    t.a = i;
    var a = n(13)
      , r = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/
}
, function(e, t, n) {
    "use strict";
    function i() {
        var e = Object(a.b)(arguments)
          , t = e.text
          , n = e.options
          , i = e.metadata;
        return Object(r.a)(t, n, i)
    }
    t.a = i;
    var a = n(48)
      , r = n(117)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r() {
        var e = Object(d.b)(arguments)
          , t = e.text
          , n = e.options
          , a = e.metadata;
        n = i({}, n, {
            extract: !1
        });
        var r = Object(o.a)(t, n, a);
        return r && r.isValid() || !1
    }
    t.a = r;
    var d = n(48)
      , o = n(117)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r() {
        var e = Object(d.b)(arguments)
          , t = e.text
          , n = e.options
          , a = e.metadata;
        n = i({}, n, {
            extract: !1
        });
        var r = Object(o.a)(t, n, a);
        return r && r.isPossible() || !1
    }
    t.a = r;
    var d = n(48)
      , o = n(117)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function r() {
        var e = Object(d.b)(arguments)
          , t = e.text
          , n = e.options
          , a = e.metadata;
        n = i({}, n, {
            extract: !1
        });
        try {
            var r = Object(o.a)(t, n, a);
            a = new l.a(a),
            a.selectNumberingPlan(r.countryCallingCode);
            var c = Object(u.a)(r.nationalNumber, a);
            if ("IS_POSSIBLE" !== c)
                return c
        } catch (e) {
            if (e instanceof s.a)
                return e.message;
            throw e
        }
    }
    t.a = r;
    var d = n(48)
      , o = n(109)
      , s = n(77)
      , l = n(13)
      , u = n(61)
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        for (var i = new a.a(e,t,n), r = []; i.hasNext(); )
            r.push(i.next());
        return r
    }
    t.a = i;
    var a = n(118)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r(e, t, n) {
        return t && a(e.prototype, t),
        n && a(e, n),
        e
    }
    n.d(t, "a", function() {
        return o
    });
    var d = n(542)
      , o = function() {
        function e(t) {
            i(this, e),
            this.cache = new d.a(t)
        }
        return r(e, [{
            key: "getPatternForRegExp",
            value: function(e) {
                var t = this.cache.get(e);
                return t || (t = new RegExp("^" + e),
                this.cache.put(e, t)),
                t
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function a(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    n.d(t, "a", function() {
        return o
    });
    var d = function e(t, n) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        r(this, e),
        this.key = t,
        this.value = n,
        this.next = i,
        this.prev = a
    }
      , o = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
            r(this, e),
            this.size = 0,
            this.limit = t,
            this.head = null,
            this.tail = null,
            this.cache = {}
        }
        return a(e, [{
            key: "put",
            value: function(e, t) {
                if (this.ensureLimit(),
                this.head) {
                    var n = new d(e,t,this.head);
                    this.head.prev = n,
                    this.head = n
                } else
                    this.head = this.tail = new d(e,t);
                this.cache[e] = this.head,
                this.size++
            }
        }, {
            key: "get",
            value: function(e) {
                if (this.cache[e]) {
                    var t = this.cache[e].value;
                    return this.remove(e),
                    this.put(e, t),
                    t
                }
                console.log("Item not available in cache for key ".concat(e))
            }
        }, {
            key: "ensureLimit",
            value: function() {
                this.size === this.limit && this.remove(this.tail.key)
            }
        }, {
            key: "remove",
            value: function(e) {
                var t = this.cache[e];
                null !== t.prev ? t.prev.next = t.next : this.head = t.next,
                null !== t.next ? t.next.prev = t.prev : this.tail = t.prev,
                delete this.cache[e],
                this.size--
            }
        }, {
            key: "clear",
            value: function() {
                this.head = null,
                this.tail = null,
                this.size = 0,
                this.cache = {}
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        for (var i = 0; i < t.length - 1; i++) {
            var a = t.charAt(i);
            if ("x" === a || "X" === a) {
                var r = t.charAt(i + 1);
                if ("x" === r || "X" === r) {
                    if (i++,
                    util.isNumberMatch(e, t.substring(i)) != MatchType.NSN_MATCH)
                        return !1
                } else if (Object(c.a)(t.substring(i)) !== e.ext)
                    return !1
            }
        }
        return !0
    }
    function a(e, t) {
        if ("FROM_DEFAULT_COUNTRY" != e.getCountryCodeSource())
            return !0;
        var n = util.getRegionCodeForCountryCode(e.getCountryCode())
          , i = util.getMetadataForRegion(n);
        if (null == i)
            return !0;
        var a = util.getNationalSignificantNumber(e)
          , r = util.chooseFormattingPatternForNumber(i.numberFormats(), a);
        if (r && r.getNationalPrefixFormattingRule().length > 0) {
            if (r.getNationalPrefixOptionalWhenFormatting())
                return !0;
            if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly(r.getNationalPrefixFormattingRule()))
                return !0;
            var d = PhoneNumberUtil.normalizeDigitsOnly(e.getRawInput());
            return util.maybeStripNationalPrefixAndCarrierCode(d, i, null)
        }
        return !0
    }
    function r(e, t) {
        var n = t.indexOf("/");
        if (n < 0)
            return !1;
        var i = t.indexOf("/", n + 1);
        return !(i < 0) && (!(e.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || e.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN) || PhoneNumberUtil.normalizeDigitsOnly(t.substring(0, n)) !== String(e.getCountryCode()) || t.slice(i + 1).indexOf("/") >= 0)
    }
    function d(e, t, n, i, a) {
        var r = normalizeDigits(t, !0)
          , d = o(n, e, null);
        if (i(n, e, r, d))
            return !0;
        var s = MetadataManager.getAlternateFormatsForCountry(e.getCountryCode())
          , l = util.getNationalSignificantNumber(e);
        if (s)
            for (var u = s.numberFormats(), c = Array.isArray(u), f = 0, u = c ? u : u[Symbol.iterator](); ; ) {
                var h;
                if (c) {
                    if (f >= u.length)
                        break;
                    h = u[f++]
                } else {
                    if (f = u.next(),
                    f.done)
                        break;
                    h = f.value
                }
                var p = h;
                if (p.leadingDigitsPatterns().length > 0) {
                    var m = a.getPatternForRegExp("^" + p.leadingDigitsPatterns()[0]);
                    if (!m.test(l))
                        continue
                }
                if (d = o(n, e, p),
                i(n, e, r, d))
                    return !0
            }
        return !1
    }
    function o(e, t, n) {
        if (n) {
            var i = util.getNationalSignificantNumber(t);
            return util.formatNsnUsingPattern(i, n, "RFC3966", e).split("-")
        }
        var a = formatNumber(t, "RFC3966", e)
          , r = a.indexOf(";");
        r < 0 && (r = a.length);
        var d = a.indexOf("-") + 1;
        return a.slice(d, r).split("-")
    }
    function s(e, t, n, i) {
        var a = n.split(NON_DIGITS_PATTERN)
          , r = t.hasExtension() ? a.length - 2 : a.length - 1;
        if (1 == a.length || a[r].contains(util.getNationalSignificantNumber(t)))
            return !0;
        for (var d = i.length - 1; d > 0 && r >= 0; ) {
            if (a[r] !== i[d])
                return !1;
            d--,
            r--
        }
        return r >= 0 && Object(f.a)(a[r], i[0])
    }
    function l(e, t, n, i) {
        var a = 0;
        if (t.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
            var r = String(t.getCountryCode());
            a = n.indexOf(r) + r.length()
        }
        for (var d = 0; d < i.length; d++) {
            if ((a = n.indexOf(i[d], a)) < 0)
                return !1;
            if (a += i[d].length(),
            0 == d && a < n.length()) {
                var o = util.getRegionCodeForCountryCode(t.getCountryCode());
                if (null != util.getNddPrefixForRegion(o, !0) && Character.isDigit(n.charAt(a))) {
                    var s = util.getNationalSignificantNumber(t);
                    return Object(f.c)(n.slice(a - i[d].length), s)
                }
            }
        }
        return n.slice(a).contains(t.getExtension())
    }
    var u = n(112)
      , c = n(53)
      , f = n(79);
    t.a = {
        POSSIBLE: function(e, t, n) {
            return !0
        },
        VALID: function(e, t, n) {
            return !(!Object(u.a)(e, void 0, n) || !i(e, t.toString(), n))
        },
        STRICT_GROUPING: function(e, t, n, o) {
            var s = t.toString();
            return !(!Object(u.a)(e, void 0, n) || !i(e, s, n) || r(e, s) || !a(e, n)) && d(e, t, n, l, o)
        },
        EXACT_GROUPING: function(e, t, n, o) {
            var l = t.toString();
            return !(!Object(u.a)(e, void 0, n) || !i(e, l, n) || r(e, l) || !a(e, n)) && d(e, t, n, s, o)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return Object(a.d)(r, e)
    }
    t.a = i;
    var a = n(79)
      , r = /[\\\/] *x/
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        if (a.test(e))
            return !1;
        if (r.test(e)) {
            var i = n.slice(t + e.length);
            if (d.test(i))
                return !1
        }
        return !0
    }
    t.a = i;
    var a = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/
      , r = /[12]\d{3}[-\/]?[01]\d[-\/]?[0-3]\d +[0-2]\d$/
      , d = /^:[0-5]\d/
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n, i) {
        if (c.test(e) && !f.test(e)) {
            if ("POSSIBLE" !== i) {
                if (t > 0 && !l.test(e)) {
                    var a = n[t - 1];
                    if (Object(d.d)(a) || Object(d.e)(a))
                        return !1
                }
                var r = t + e.length;
                if (r < n.length) {
                    var o = n[r];
                    if (Object(d.d)(o) || Object(d.e)(o))
                        return !1
                }
            }
            return !0
        }
    }
    n.d(t, "a", function() {
        return s
    }),
    t.b = i;
    var a = n(31)
      , r = n(79)
      , d = n(171)
      , o = "[^".concat("(\\[（［").concat(")\\]）］", "]")
      , s = "[".concat("(\\[（［").concat(a.d, "]")
      , l = new RegExp("^" + s)
      , u = Object(r.b)(0, 3)
      , c = new RegExp("^(?:[(\\[（［])?(?:" + o + "+[)\\]）］])?" + o + "+(?:[(\\[（［]" + o + "+[)\\]）］])" + u + o + "*$")
      , f = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n, i) {
        var d = Object(r.b)(t, n, i);
        return Object(a.a)(e, d.options, d.metadata)
    }
    t.a = i;
    var a = n(172)
      , r = n(173)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r(e, t, n) {
        return t && a(e.prototype, t),
        n && a(e, n),
        e
    }
    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    n.d(t, "a", function() {
        return o
    });
    var o = function() {
        function e(t) {
            var n = this
              , a = t.onCountryChange
              , r = t.onCallingCodeChange;
            i(this, e),
            d(this, "update", function(e) {
                for (var t = 0, i = Object.keys(e); t < i.length; t++) {
                    var a = i[t];
                    n[a] = e[a]
                }
            }),
            this.onCountryChange = a,
            this.onCallingCodeChange = r
        }
        return r(e, [{
            key: "reset",
            value: function(e, t) {
                this.international = !1,
                this.IDDPrefix = void 0,
                this.missingPlus = void 0,
                this.callingCode = void 0,
                this.digits = "",
                this.resetNationalSignificantNumber(),
                this.initCountryAndCallingCode(e, t)
            }
        }, {
            key: "resetNationalSignificantNumber",
            value: function() {
                this.nationalSignificantNumber = this.getNationalDigits(),
                this.nationalSignificantNumberMatchesInput = !0,
                this.nationalPrefix = void 0,
                this.carrierCode = void 0,
                this.complexPrefixBeforeNationalSignificantNumber = void 0
            }
        }, {
            key: "initCountryAndCallingCode",
            value: function(e, t) {
                this.setCountry(e),
                this.setCallingCode(t)
            }
        }, {
            key: "setCountry",
            value: function(e) {
                this.country = e,
                this.onCountryChange(e)
            }
        }, {
            key: "setCallingCode",
            value: function(e) {
                return this.callingCode = e,
                this.onCallingCodeChange(this.country, e)
            }
        }, {
            key: "startInternationalNumber",
            value: function() {
                this.international = !0,
                this.initCountryAndCallingCode()
            }
        }, {
            key: "appendDigits",
            value: function(e) {
                this.digits += e
            }
        }, {
            key: "appendNationalSignificantNumberDigits",
            value: function(e) {
                this.nationalSignificantNumber += e
            }
        }, {
            key: "getNationalDigits",
            value: function() {
                return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits
            }
        }, {
            key: "getDigitsWithoutInternationalPrefix",
            value: function() {
                return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        var i = n.metadata
          , a = n.shouldTryNationalPrefixFormattingRule
          , d = n.getSeparatorAfterNationalPrefix;
        if (new RegExp("^(?:".concat(t.pattern(), ")$")).test(e.nationalSignificantNumber))
            return r(e, t, {
                metadata: i,
                shouldTryNationalPrefixFormattingRule: a,
                getSeparatorAfterNationalPrefix: d
            })
    }
    function a(e, t) {
        return "IS_POSSIBLE" === Object(s.a)(e, t)
    }
    function r(e, t, n) {
        var i = n.metadata
          , a = n.shouldTryNationalPrefixFormattingRule
          , r = n.getSeparatorAfterNationalPrefix;
        e.nationalSignificantNumber,
        e.international,
        e.nationalPrefix,
        e.carrierCode;
        if (a(t)) {
            var o = d(e, t, {
                useNationalPrefixFormattingRule: !0,
                getSeparatorAfterNationalPrefix: r,
                metadata: i
            });
            if (o)
                return o
        }
        return d(e, t, {
            useNationalPrefixFormattingRule: !1,
            getSeparatorAfterNationalPrefix: r,
            metadata: i
        })
    }
    function d(e, t, n) {
        var i = n.metadata
          , a = n.useNationalPrefixFormattingRule
          , r = n.getSeparatorAfterNationalPrefix
          , d = Object(u.b)(e.nationalSignificantNumber, t, {
            carrierCode: e.carrierCode,
            useInternationalFormat: e.international,
            withNationalPrefix: a,
            metadata: i
        });
        if (a || (e.nationalPrefix ? d = e.nationalPrefix + r(t) + d : e.complexPrefixBeforeNationalSignificantNumber && (d = e.complexPrefixBeforeNationalSignificantNumber + " " + d)),
        o(d, e))
            return d
    }
    function o(e, t) {
        return Object(l.a)(e) === t.getNationalDigits()
    }
    t.b = i,
    t.a = a;
    var s = n(61)
      , l = n(53)
      , u = n(114)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r(e, t, n) {
        return t && a(e.prototype, t),
        n && a(e, n),
        e
    }
    function d(e, t, n) {
        if ("string" != typeof t) {
            if (Array.isArray(t)) {
                for (var i = e.slice(), a = 0; a < t.length; ) {
                    var r = t[a]
                      , o = d(i, r, n && a === t.length - 1);
                    if (!o || o.overflow)
                        return o;
                    if (!o.match) {
                        if (o.partialMatch)
                            return {
                                partialMatch: !0
                            };
                        throw new Error("Unsupported match result:\n".concat(JSON.stringify(o, null, 2)))
                    }
                    if (i = i.slice(o.matchedChars.length),
                    0 === i.length)
                        return a === t.length - 1 ? {
                            match: !0,
                            matchedChars: e
                        } : {
                            partialMatch: !0
                        };
                    a++
                }
                return n ? {
                    overflow: !0
                } : {
                    match: !0,
                    matchedChars: e.slice(0, e.length - i.length)
                }
            }
            switch (t.op) {
            case "|":
                for (var s, l = t.args, u = Array.isArray(l), c = 0, l = u ? l : l[Symbol.iterator](); ; ) {
                    var f;
                    if (u) {
                        if (c >= l.length)
                            break;
                        f = l[c++]
                    } else {
                        if (c = l.next(),
                        c.done)
                            break;
                        f = c.value
                    }
                    var h = f
                      , p = d(e, h, n);
                    if (p) {
                        if (p.overflow)
                            return p;
                        if (p.match)
                            return {
                                match: !0,
                                matchedChars: p.matchedChars
                            };
                        p.partialMatch && (s = !0)
                    }
                }
                if (s)
                    return {
                        partialMatch: !0
                    };
                return;
            case "[]":
                for (var m = t.args, v = Array.isArray(m), g = 0, m = v ? m : m[Symbol.iterator](); ; ) {
                    var $;
                    if (v) {
                        if (g >= m.length)
                            break;
                        $ = m[g++]
                    } else {
                        if (g = m.next(),
                        g.done)
                            break;
                        $ = g.value
                    }
                    var b = $;
                    if (e[0] === b)
                        return 1 === e.length ? {
                            match: !0,
                            matchedChars: e
                        } : n ? {
                            overflow: !0
                        } : {
                            match: !0,
                            matchedChars: [b]
                        }
                }
                return;
            default:
                throw new Error("Unsupported instruction tree: ".concat(t))
            }
        } else {
            if (n && e.length > t.length)
                return {
                    overflow: !0
                };
            var T = e.join("");
            if (0 === t.indexOf(T))
                return e.length === t.length ? {
                    match: !0,
                    matchedChars: e
                } : {
                    partialMatch: !0
                };
            if (0 === T.indexOf(t))
                return {
                    match: !0,
                    matchedChars: e.slice(0, t.length)
                }
        }
    }
    function o(e) {
        for (var t = [], n = 0; n < e.length; ) {
            if ("-" === e[n]) {
                if (0 === n || n === e.length - 1)
                    throw new Error("Couldn't parse a one-of set pattern: ".concat(e));
                for (var i = e[n - 1].charCodeAt(0) + 1, a = e[n + 1].charCodeAt(0) - 1, r = i; r <= a; )
                    t.push(String.fromCharCode(r)),
                    r++
            } else
                t.push(e[n]);
            n++
        }
        return t
    }
    n.d(t, "a", function() {
        return s
    });
    var s = function() {
        function e(t) {
            i(this, e),
            this.matchTree = (new u).parse(t)
        }
        return r(e, [{
            key: "match",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.allowOverflow;
                if (!e)
                    throw new Error("String is required");
                var i = d(e.split(""), this.matchTree, !0);
                if (i && i.match && delete i.matchedChars,
                !i || !i.overflow || n)
                    return i
            }
        }]),
        e
    }()
      , l = new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])")
      , u = function() {
        function e() {
            i(this, e)
        }
        return r(e, [{
            key: "parse",
            value: function(e) {
                if (this.context = [{
                    or: !0,
                    instructions: []
                }],
                this.parsePattern(e),
                1 !== this.context.length)
                    throw new Error("Non-finalized contexts left when pattern parse ended");
                var t = this.context[0]
                  , n = t.branches
                  , i = t.instructions;
                if (n)
                    return [{
                        op: "|",
                        args: n.concat([i])
                    }];
                if (0 === i.length)
                    throw new Error("Pattern is required");
                return i
            }
        }, {
            key: "startContext",
            value: function(e) {
                this.context.push(e)
            }
        }, {
            key: "endContext",
            value: function() {
                this.context.pop()
            }
        }, {
            key: "getContext",
            value: function() {
                return this.context[this.context.length - 1]
            }
        }, {
            key: "parsePattern",
            value: function(e) {
                if (!e)
                    throw new Error("Empty pattern passed");
                var t = e.match(l);
                if (!t)
                    return void (this.getContext().instructions = this.getContext().instructions.concat(e.split("")));
                var n = t[1]
                  , i = e.slice(0, t.index)
                  , a = e.slice(t.index + n.length);
                switch (n) {
                case "(?:":
                    i && this.parsePattern(i),
                    this.startContext({
                        or: !0,
                        instructions: [],
                        branches: []
                    });
                    break;
                case ")":
                    if (!this.getContext().or)
                        throw new Error('")" operator must be preceded by "(?:" operator');
                    if (i && this.parsePattern(i),
                    0 === this.getContext().instructions.length)
                        throw new Error('No instructions found after "|" operator in an "or" group');
                    var r = this.getContext()
                      , d = r.branches;
                    d.push(this.getContext().instructions),
                    this.endContext(),
                    this.getContext().instructions.push({
                        op: "|",
                        args: d
                    });
                    break;
                case "|":
                    if (!this.getContext().or)
                        throw new Error('"|" operator can only be used inside "or" groups');
                    if (i && this.parsePattern(i),
                    !this.getContext().branches) {
                        if (1 !== this.context.length)
                            throw new Error('"branches" not found in an "or" group context');
                        this.getContext().branches = []
                    }
                    this.getContext().branches.push(this.getContext().instructions),
                    this.getContext().instructions = [];
                    break;
                case "[":
                    i && this.parsePattern(i),
                    this.startContext({
                        oneOfSet: !0
                    });
                    break;
                case "]":
                    if (!this.getContext().oneOfSet)
                        throw new Error('"]" operator must be preceded by "[" operator');
                    this.endContext(),
                    this.getContext().instructions.push({
                        op: "[]",
                        args: o(i)
                    });
                    break;
                default:
                    throw new Error("Unknown operator: ".concat(n))
                }
                a && this.parsePattern(a)
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return d(e) || r(e, t) || a()
    }
    function a() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function r(e, t) {
        var n = []
          , i = !0
          , a = !1
          , r = void 0;
        try {
            for (var d, o = e[Symbol.iterator](); !(i = (d = o.next()).done) && (n.push(d.value),
            !t || n.length !== t); i = !0)
                ;
        } catch (e) {
            a = !0,
            r = e
        } finally {
            try {
                i || null == o.return || o.return()
            } finally {
                if (a)
                    throw r
            }
        }
        return n
    }
    function d(e) {
        if (Array.isArray(e))
            return e
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function l(e, t, n) {
        return t && s(e.prototype, t),
        n && s(e, n),
        e
    }
    function u(e) {
        var t = e.search(y);
        if (!(t < 0)) {
            e = e.slice(t);
            var n;
            return "+" === e[0] && (n = !0,
            e = e.slice("+".length)),
            e = e.replace(S, ""),
            n && (e = "+" + e),
            e
        }
    }
    function c(e) {
        var t = u(e) || "";
        return "+" === t[0] ? [t.slice("+".length), !0] : [t]
    }
    function f(e) {
        var t = c(e)
          , n = i(t, 2)
          , a = n[0]
          , r = n[1];
        return T.test(a) || (a = ""),
        [a, r]
    }
    n.d(t, "a", function() {
        return P
    });
    var h = n(166)
      , p = n(116)
      , m = n(168)
      , v = n(115)
      , g = n(53)
      , $ = n(31)
      , b = "[" + $.f + $.e + "]+"
      , T = new RegExp("^" + b + "$","i")
      , y = "(?:[" + $.d + "][" + $.f + $.e + "]*|[" + $.f + $.e + "]+)"
      , S = new RegExp("[^" + $.f + $.e + "]+.*$")
      , C = /[^\d\[\]]/
      , P = function() {
        function e(t) {
            var n = t.defaultCountry
              , i = t.defaultCallingCode
              , a = t.metadata
              , r = t.onNationalSignificantNumberChange;
            o(this, e),
            this.defaultCountry = n,
            this.defaultCallingCode = i,
            this.metadata = a,
            this.onNationalSignificantNumberChange = r
        }
        return l(e, [{
            key: "input",
            value: function(e, t) {
                var n, a = f(e), r = i(a, 2), d = r[0], o = r[1], s = Object(g.a)(d);
                return o && (t.digits || (t.startInternationalNumber(),
                s || (n = !0))),
                s && this.inputDigits(s, t),
                {
                    digits: s,
                    justLeadingPlus: n
                }
            }
        }, {
            key: "inputDigits",
            value: function(e, t) {
                var n = t.digits
                  , i = n.length < 3 && n.length + e.length >= 3;
                if (t.appendDigits(e),
                i && this.extractIddPrefix(t),
                this.isWaitingForCountryCallingCode(t)) {
                    if (!this.extractCountryCallingCode(t))
                        return
                } else
                    t.appendNationalSignificantNumberDigits(e);
                t.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(t.getNationalDigits(), t.update)
            }
        }, {
            key: "isWaitingForCountryCallingCode",
            value: function(e) {
                var t = e.international
                  , n = e.callingCode;
                return t && !n
            }
        }, {
            key: "extractCountryCallingCode",
            value: function(e) {
                var t = Object(h.a)("+" + e.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata)
                  , n = t.countryCallingCode
                  , i = t.number;
                if (n)
                    return e.setCallingCode(n),
                    e.update({
                        nationalSignificantNumber: i
                    }),
                    !0
            }
        }, {
            key: "reset",
            value: function(e) {
                if (e) {
                    this.hasSelectedNumberingPlan = !0;
                    var t = e._nationalPrefixForParsing();
                    this.couldPossiblyExtractAnotherNationalSignificantNumber = t && C.test(t)
                } else
                    this.hasSelectedNumberingPlan = void 0,
                    this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0
            }
        }, {
            key: "extractNationalSignificantNumber",
            value: function(e, t) {
                if (this.hasSelectedNumberingPlan) {
                    var n = Object(m.a)(e, this.metadata)
                      , i = n.nationalPrefix
                      , a = n.nationalNumber
                      , r = n.carrierCode;
                    if (a !== e)
                        return this.onExtractedNationalNumber(i, r, a, e, t),
                        !0
                }
            }
        }, {
            key: "extractAnotherNationalSignificantNumber",
            value: function(e, t, n) {
                if (!this.hasExtractedNationalSignificantNumber)
                    return this.extractNationalSignificantNumber(e, n);
                if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
                    var i = Object(m.a)(e, this.metadata)
                      , a = i.nationalPrefix
                      , r = i.nationalNumber
                      , d = i.carrierCode;
                    if (r !== t)
                        return this.onExtractedNationalNumber(a, d, r, e, n),
                        !0
                }
            }
        }, {
            key: "onExtractedNationalNumber",
            value: function(e, t, n, i, a) {
                var r, d, o = i.lastIndexOf(n);
                if (o >= 0 && o === i.length - n.length) {
                    d = !0;
                    var s = i.slice(0, o);
                    s !== e && (r = s)
                }
                a({
                    nationalPrefix: e,
                    carrierCode: t,
                    nationalSignificantNumber: n,
                    nationalSignificantNumberMatchesInput: d,
                    complexPrefixBeforeNationalSignificantNumber: r
                }),
                this.hasExtractedNationalSignificantNumber = !0,
                this.onNationalSignificantNumberChange()
            }
        }, {
            key: "reExtractNationalSignificantNumber",
            value: function(e) {
                return !!this.extractAnotherNationalSignificantNumber(e.getNationalDigits(), e.nationalSignificantNumber, e.update) || (this.extractIddPrefix(e) ? (this.extractCallingCodeAndNationalSignificantNumber(e),
                !0) : this.fixMissingPlus(e) ? (this.extractCallingCodeAndNationalSignificantNumber(e),
                !0) : void 0)
            }
        }, {
            key: "extractIddPrefix",
            value: function(e) {
                var t = e.international
                  , n = e.IDDPrefix
                  , i = e.digits;
                e.nationalSignificantNumber;
                if (!t && !n) {
                    var a = Object(v.a)(i, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
                    return void 0 !== a && a !== i ? (e.update({
                        IDDPrefix: i.slice(0, i.length - a.length)
                    }),
                    this.startInternationalNumber(e),
                    !0) : void 0
                }
            }
        }, {
            key: "fixMissingPlus",
            value: function(e) {
                if (!e.international) {
                    var t = Object(p.a)(e.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata)
                      , n = t.countryCallingCode;
                    t.number;
                    if (n)
                        return e.update({
                            missingPlus: !0
                        }),
                        this.startInternationalNumber(e),
                        !0
                }
            }
        }, {
            key: "startInternationalNumber",
            value: function(e) {
                e.startInternationalNumber(),
                e.nationalSignificantNumber && (e.resetNationalSignificantNumber(),
                this.onNationalSignificantNumberChange(),
                this.hasExtractedNationalSignificantNumber = void 0)
            }
        }, {
            key: "extractCallingCodeAndNationalSignificantNumber",
            value: function(e) {
                this.extractCountryCallingCode(e) && this.extractNationalSignificantNumber(e.getNationalDigits(), e.update)
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return new a.a(e).getCountries()
    }
    t.a = i;
    var a = n(13)
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        if (t[e])
            return new a.a(e,t[e],n)
    }
    t.a = i;
    var a = n(78)
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        return n || (n = t,
        t = void 0),
        new a.a(t,n).input(e)
    }
    t.a = i;
    var a = n(174)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.t, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.p, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.n, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.y, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.f, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.w, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.g, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.x, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return r.e.call(this, e, t, a.a)
    }
    t.a = i;
    var a = n(12)
      , r = n(10);
    i.prototype = Object.create(r.e.prototype, {}),
    i.prototype.constructor = i
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return r.a.call(this, e, a.a)
    }
    t.a = i;
    var a = n(12)
      , r = n(10);
    i.prototype = Object.create(r.a.prototype, {}),
    i.prototype.constructor = i
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.o, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.j, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.k, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.m, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return r.c.call(this, a.a)
    }
    t.a = i;
    var a = n(12)
      , r = n(10);
    i.prototype = Object.create(r.c.prototype, {}),
    i.prototype.constructor = i
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.l, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    function i() {
        return Object(a.b)(r.h, arguments)
    }
    t.a = i;
    var a = n(12)
      , r = n(10)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isActiveTrend = void 0;
    var i = n(80);
    t.isActiveTrend = function(e) {
        return i.activeTrends.some(function(t) {
            return t.trend === e
        })
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        return c.getController().getPopUp(e, t)
    }
    function r() {
        return c.getController().getOpenedPopUp()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }();
    t.getPopUp = a,
    t.getOpenedPopUp = r;
    var s = n(574)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = function() {
        function e() {
            i(this, e),
            this.blocked = !1,
            this.html = document.querySelector("html"),
            this.handlers = new l.default,
            this.on = this.handlers.add.bind(this.handlers),
            this.off = this.handlers.remove.bind(this.handlers),
            this._initEvents()
        }
        return o(e, [{
            key: "_block",
            value: function(e) {
                this.blocked = e
            }
        }, {
            key: "push",
            value: function(e) {
                if (e) {
                    location.hash.replace(/^#/, "") !== e && (this._block(!0),
                    location.hash = e)
                }
            }
        }, {
            key: "pop",
            value: function(e) {
                if (e) {
                    var t = location.hash.replace(/^#/, "");
                    t && e === t && (this._block(!0),
                    location.hash = "")
                }
            }
        }, {
            key: "_initEvents",
            value: function() {
                var e = this;
                window.addEventListener("hashchange", function(t) {
                    if (!e.blocked) {
                        var n = -1 !== t.newURL.indexOf("#") ? t.newURL.replace(/^[^#]*#/, "") : ""
                          , i = -1 !== t.oldURL.indexOf("#") ? t.oldURL.replace(/^[^#]*#/, "") : "";
                        e.handlers.call("hashChange", [{
                            newHash: n,
                            oldHash: i
                        }])
                    }
                    e._block(!1)
                }, !1),
                this._resizeFunc = function() {
                    var t = window.innerWidth / window.innerHeight;
                    e.html.classList[t < 1 ? "add" : "remove"]("popup-square-by-height"),
                    e.html.classList[t < 1.777777778 ? "add" : "remove"]("popup-hd-by-height")
                }
                ,
                window.addEventListener("resize", this._resizeFunc),
                this._resizeFunc()
            }
        }]),
        e
    }()
      , c = function() {
        function e() {
            i(this, e),
            this.all = [],
            this.html = document.querySelector("html"),
            this.history = new u,
            this.history.on("hashChange", this._hashChanged.bind(this))
        }
        return o(e, [{
            key: "_hashChanged",
            value: function(e) {
                var t = e.newHash;
                e.oldHash;
                if (t)
                    try {
                        var n = this.getPopUp("#" + t);
                        n.isOpen() || n.up()
                    } catch (e) {}
                else
                    this.getOpenedPopUp().down()
            }
        }, {
            key: "getPopUp",
            value: function(e, t) {
                if (!e)
                    throw new Error("attempt to create a popup from a nonexistent node");
                var n = e;
                if ("string" == typeof n && !(n = document.querySelector(n)))
                    throw new Error("attempt to create a popup from a nonexistent node");
                var i = this.all.find(function(e) {
                    return e.e === n
                });
                return i || (i = new f(n,t),
                this.all.push(i)),
                i
            }
        }, {
            key: "getOpenedPopUp",
            value: function() {
                return this.all.find(function(e, t) {
                    return e.isOpen() && !e.opener
                })
            }
        }, {
            key: "up",
            value: function(e) {
                var t = null
                  , n = e.e.parentElement.closest(".popup");
                this.all.forEach(function(i, a) {
                    i === e ? t = a : i.isOpen() && (i.e === n ? (i.addChild(e),
                    e.setOpener(i)) : i.down())
                }),
                e.opener && (e.opener.e.classList.remove("child-close-" + t),
                e.opener.e.classList.add("child-opening-" + t)),
                e.e.classList.remove("close"),
                this.html.classList.remove("popup-close-" + t),
                this.html.classList.add("popup-opening-" + t),
                e.e.classList.add("opening");
                var i = document.createEvent("CustomEvent");
                i.initEvent("open", !0, !0),
                e.e.dispatchEvent(i)
            }
        }, {
            key: "down",
            value: function(e) {
                var t = this.all.indexOf(e);
                e.e.classList.remove("opened"),
                e.e.classList.remove("opening"),
                e.e.classList.add("close"),
                this.html.classList.remove("popup-opened-" + t),
                this.html.classList.remove("popup-opening-" + t),
                this.html.classList.add("popup-close-" + t),
                e.opener && (e.opener.e.classList.remove("child-opened-" + t),
                e.opener.e.classList.remove("child-opening-" + t),
                e.opener.e.classList.add("child-close-" + t));
                var n = document.createEvent("CustomEvent");
                n.initEvent("close", !0, !0),
                e.e.dispatchEvent(n)
            }
        }, {
            key: "opened",
            value: function(e) {
                var t = this.all.indexOf(e);
                this.html.classList.remove("popup-opening-" + t),
                this.html.classList.add("popup-opened-" + t),
                e.opener && (e.opener.e.classList.remove("child-opening-" + t),
                e.opener.e.classList.add("child-opened-" + t)),
                e.e.classList.remove("opening"),
                e.e.classList.add("opened");
                var n = document.createEvent("CustomEvent");
                n.initEvent("opened", !0, !0),
                e.e.dispatchEvent(n),
                this.history.push(e.e.id)
            }
        }, {
            key: "closed",
            value: function(e) {
                var t = this.all.indexOf(e);
                e.e.classList.remove("close"),
                this.html.classList.remove("popup-close-" + t),
                e.opener && e.opener.e.classList.remove("child-close-" + t);
                var n = document.createEvent("CustomEvent");
                n.initEvent("closed", !0, !0),
                e.e.dispatchEvent(n),
                this.getOpenedPopUp() || this.history.pop(e.e.id)
            }
        }], [{
            key: "getController",
            value: function() {
                return this._instance || (this._instance = new this),
                this._instance
            }
        }]),
        e
    }()
      , f = function() {
        function e(t, n) {
            i(this, e),
            this.options = d({
                animateTime: 500
            }, n),
            this.e = t,
            this.timeoutClose = null,
            this.timeoutOpen = null,
            this.children = [],
            this.opener = null,
            this._init()
        }
        return o(e, [{
            key: "_init",
            value: function() {
                var e = this;
                this.e.classList.add("popup"),
                this.close = this.e.querySelector(".close-button"),
                this.close || (this.close = document.createElement("a"),
                this.close.setAttribute("href", "#"),
                this.close.classList.add("close-button"),
                this.e.appendChild(this.close),
                this.close.addEventListener("click", function(t) {
                    if (e.close.closest(".videos") && document.documentElement.clientWidth > 1024) {
                        document.querySelector(".menu-icon-button-sound").click()
                    }
                    e.down(),
                    t.stopPropagation(),
                    t.preventDefault()
                })),
                this.e.addEventListener("click", function(t) {
                    if (e.hasChildren() && (e.children.forEach(function(e) {
                        e.down()
                    }),
                    e.e.closest("#lectures") && document.documentElement.clientWidth > 1024)) {
                        document.querySelector(".menu-icon-button-sound").click()
                    }
                })
            }
        }, {
            key: "isOpen",
            value: function() {
                return this.e.classList.contains("opening") || this.e.classList.contains("opened")
            }
        }, {
            key: "up",
            value: function() {
                var e = this
                  , t = c.getController();
                clearTimeout(this.timeoutClose),
                t.up(this),
                this.timeoutOpen = setTimeout(function() {
                    t.opened(e)
                }, this.options.animateTime)
            }
        }, {
            key: "down",
            value: function() {
                var e = this
                  , t = c.getController();
                clearTimeout(this.timeoutOpen),
                t.down(this),
                this.children.forEach(function(e) {
                    e.down()
                }),
                this.children = [],
                this.opener && this.opener.removeChild(this),
                this.timeoutClose = setTimeout(function() {
                    t.closed(e)
                }, this.options.animateTime)
            }
        }, {
            key: "hasChildren",
            value: function() {
                return !!this.children.length
            }
        }, {
            key: "addChild",
            value: function(e) {
                this.children.some(function(t, n) {
                    return t.e === e.e
                }) || this.children.push(e)
            }
        }, {
            key: "removeChild",
            value: function(e) {
                this.children = this.children.filter(function(t) {
                    return t.e !== e.e
                })
            }
        }, {
            key: "setOpener",
            value: function(e) {
                this.opener = e
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    var i = function e() {
        this instanceof e || new e,
        this.list = {}
    };
    i.prototype.add = function(e, t) {
        return this.list.hasOwnProperty(e) || (this.list[e] = []),
        this.list[e].push(t),
        this.list[e].length - 1
    }
    ,
    i.prototype.remove = function(e, t) {
        return this.hasHandlers(e) && (this.list[e] = this.list[e].filter(function(e) {
            return e !== t
        })),
        this
    }
    ,
    i.prototype.hasHandlers = function(e) {
        return !(!this.list.hasOwnProperty(e) || !this.list[e].length)
    }
    ,
    i.prototype.call = function(e, t, n) {
        return this.hasHandlers(e) && this.list[e].map(function(e) {
            e && e.apply(n || null, t)
        }),
        this
    }
    ,
    e.exports = i
}
, function(e, t) {}
, function(e, t, n) {
    !function(t, n) {
        e.exports = n()
    }(0, function() {
        "use strict";
        function e(e, t) {
            var n = []
              , i = 0;
            if (e && !t && e instanceof z)
                return e;
            if (e)
                if ("string" == typeof e) {
                    var a, r, d = e.trim();
                    if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                        var o = "div";
                        for (0 === d.indexOf("<li") && (o = "ul"),
                        0 === d.indexOf("<tr") && (o = "tbody"),
                        0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (o = "tr"),
                        0 === d.indexOf("<tbody") && (o = "table"),
                        0 === d.indexOf("<option") && (o = "select"),
                        r = document.createElement(o),
                        r.innerHTML = d,
                        i = 0; i < r.childNodes.length; i += 1)
                            n.push(r.childNodes[i])
                    } else
                        for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])],
                        i = 0; i < a.length; i += 1)
                            a[i] && n.push(a[i])
                } else if (e.nodeType || e === window || e === document)
                    n.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (i = 0; i < e.length; i += 1)
                        n.push(e[i]);
            return new z(n)
        }
        function t(e) {
            for (var t = [], n = 0; n < e.length; n += 1)
                -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }
        function n(e) {
            var t = this;
            if (void 0 === e)
                return this;
            for (var n = e.split(" "), i = 0; i < n.length; i += 1)
                for (var a = 0; a < this.length; a += 1)
                    void 0 !== t[a].classList && t[a].classList.add(n[i]);
            return this
        }
        function i(e) {
            for (var t = this, n = e.split(" "), i = 0; i < n.length; i += 1)
                for (var a = 0; a < this.length; a += 1)
                    void 0 !== t[a].classList && t[a].classList.remove(n[i]);
            return this
        }
        function a(e) {
            return !!this[0] && this[0].classList.contains(e)
        }
        function r(e) {
            for (var t = this, n = e.split(" "), i = 0; i < n.length; i += 1)
                for (var a = 0; a < this.length; a += 1)
                    void 0 !== t[a].classList && t[a].classList.toggle(n[i]);
            return this
        }
        function d(e, t) {
            var n = arguments
              , i = this;
            if (1 !== arguments.length || "string" != typeof e) {
                for (var a = 0; a < this.length; a += 1)
                    if (2 === n.length)
                        i[a].setAttribute(e, t);
                    else
                        for (var r in e)
                            i[a][r] = e[r],
                            i[a].setAttribute(r, e[r]);
                return this
            }
            if (this[0])
                return this[0].getAttribute(e)
        }
        function o(e) {
            for (var t = this, n = 0; n < this.length; n += 1)
                t[n].removeAttribute(e);
            return this
        }
        function s(e, t) {
            var n, i = this;
            if (void 0 !== t) {
                for (var a = 0; a < this.length; a += 1)
                    n = i[a],
                    n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                    n.dom7ElementDataStorage[e] = t;
                return this
            }
            if (n = this[0]) {
                if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage)
                    return n.dom7ElementDataStorage[e];
                var r = n.getAttribute("data-" + e);
                if (r)
                    return r
            } else
                ;
        }
        function l(e) {
            for (var t = this, n = 0; n < this.length; n += 1) {
                var i = t[n].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        }
        function u(e) {
            var t = this;
            "string" != typeof e && (e += "ms");
            for (var n = 0; n < this.length; n += 1) {
                var i = t[n].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        }
        function c() {
            function t(t) {
                var n = t.target;
                if (n) {
                    var i = t.target.dom7EventData || [];
                    if (i.unshift(t),
                    e(n).is(o))
                        s.apply(n, i);
                    else
                        for (var a = e(n).parents(), r = 0; r < a.length; r += 1)
                            e(a[r]).is(o) && s.apply(a[r], i)
                }
            }
            function n(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e),
                s.apply(this, t)
            }
            for (var i = this, a = [], r = arguments.length; r--; )
                a[r] = arguments[r];
            var d = a[0]
              , o = a[1]
              , s = a[2]
              , l = a[3];
            if ("function" == typeof a[1]) {
                var u;
                u = a,
                d = u[0],
                s = u[1],
                l = u[2],
                o = void 0
            }
            l || (l = !1);
            for (var c, f = d.split(" "), h = 0; h < this.length; h += 1) {
                var p = i[h];
                if (o)
                    for (c = 0; c < f.length; c += 1)
                        p.dom7LiveListeners || (p.dom7LiveListeners = []),
                        p.dom7LiveListeners.push({
                            type: d,
                            listener: s,
                            proxyListener: t
                        }),
                        p.addEventListener(f[c], t, l);
                else
                    for (c = 0; c < f.length; c += 1)
                        p.dom7Listeners || (p.dom7Listeners = []),
                        p.dom7Listeners.push({
                            type: d,
                            listener: s,
                            proxyListener: n
                        }),
                        p.addEventListener(f[c], n, l)
            }
            return this
        }
        function f() {
            for (var e = this, t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            var i = t[0]
              , a = t[1]
              , r = t[2]
              , d = t[3];
            if ("function" == typeof t[1]) {
                var o;
                o = t,
                i = o[0],
                r = o[1],
                d = o[2],
                a = void 0
            }
            d || (d = !1);
            for (var s = i.split(" "), l = 0; l < s.length; l += 1)
                for (var u = 0; u < this.length; u += 1) {
                    var c = e[u];
                    if (a) {
                        if (c.dom7LiveListeners)
                            for (var f = 0; f < c.dom7LiveListeners.length; f += 1)
                                r ? c.dom7LiveListeners[f].listener === r && c.removeEventListener(s[l], c.dom7LiveListeners[f].proxyListener, d) : c.dom7LiveListeners[f].type === s[l] && c.removeEventListener(s[l], c.dom7LiveListeners[f].proxyListener, d)
                    } else if (c.dom7Listeners)
                        for (var h = 0; h < c.dom7Listeners.length; h += 1)
                            r ? c.dom7Listeners[h].listener === r && c.removeEventListener(s[l], c.dom7Listeners[h].proxyListener, d) : c.dom7Listeners[h].type === s[l] && c.removeEventListener(s[l], c.dom7Listeners[h].proxyListener, d)
                }
            return this
        }
        function h() {
            for (var e = this, t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            for (var i = t[0].split(" "), a = t[1], r = 0; r < i.length; r += 1)
                for (var d = 0; d < this.length; d += 1) {
                    var o = void 0;
                    try {
                        o = new window.CustomEvent(i[r],{
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        o = document.createEvent("Event"),
                        o.initEvent(i[r], !0, !0),
                        o.detail = a
                    }
                    e[d].dom7EventData = t.filter(function(e, t) {
                        return t > 0
                    }),
                    e[d].dispatchEvent(o),
                    e[d].dom7EventData = [],
                    delete e[d].dom7EventData
                }
            return this
        }
        function p(e) {
            function t(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    n = 0; n < i.length; n += 1)
                        a.off(i[n], t)
            }
            var n, i = ["webkitTransitionEnd", "transitionend"], a = this;
            if (e)
                for (n = 0; n < i.length; n += 1)
                    a.on(i[n], t);
            return this
        }
        function m(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }
        function v(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }
        function g() {
            if (this.length > 0) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , n = document.body
                  , i = e.clientTop || n.clientTop || 0
                  , a = e.clientLeft || n.clientLeft || 0
                  , r = e === window ? window.scrollY : e.scrollTop
                  , d = e === window ? window.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + d - a
                }
            }
            return null
        }
        function $() {
            return this[0] ? window.getComputedStyle(this[0], null) : {}
        }
        function b(e, t) {
            var n, i = this;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var a in e)
                            i[n].style[a] = e[a];
                    return this
                }
                if (this[0])
                    return window.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (n = 0; n < this.length; n += 1)
                    i[n].style[e] = t;
                return this
            }
            return this
        }
        function T(e) {
            var t = this;
            if (!e)
                return this;
            for (var n = 0; n < this.length; n += 1)
                if (!1 === e.call(t[n], n, t[n]))
                    return t;
            return this
        }
        function y(e) {
            var t = this;
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var n = 0; n < this.length; n += 1)
                t[n].innerHTML = e;
            return this
        }
        function S(e) {
            var t = this;
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var n = 0; n < this.length; n += 1)
                t[n].textContent = e;
            return this
        }
        function C(t) {
            var n, i, a = this[0];
            if (!a || void 0 === t)
                return !1;
            if ("string" == typeof t) {
                if (a.matches)
                    return a.matches(t);
                if (a.webkitMatchesSelector)
                    return a.webkitMatchesSelector(t);
                if (a.msMatchesSelector)
                    return a.msMatchesSelector(t);
                for (n = e(t),
                i = 0; i < n.length; i += 1)
                    if (n[i] === a)
                        return !0;
                return !1
            }
            if (t === document)
                return a === document;
            if (t === window)
                return a === window;
            if (t.nodeType || t instanceof z) {
                for (n = t.nodeType ? [t] : t,
                i = 0; i < n.length; i += 1)
                    if (n[i] === a)
                        return !0;
                return !1
            }
            return !1
        }
        function P() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        }
        function w(e) {
            if (void 0 === e)
                return this;
            var t, n = this.length;
            return e > n - 1 ? new z([]) : e < 0 ? (t = n + e,
            new z(t < 0 ? [] : [this[t]])) : new z([this[e]])
        }
        function E() {
            for (var e = this, t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            for (var i, a = 0; a < t.length; a += 1) {
                i = t[a];
                for (var r = 0; r < this.length; r += 1)
                    if ("string" == typeof i) {
                        var d = document.createElement("div");
                        for (d.innerHTML = i; d.firstChild; )
                            e[r].appendChild(d.firstChild)
                    } else if (i instanceof z)
                        for (var o = 0; o < i.length; o += 1)
                            e[r].appendChild(i[o]);
                    else
                        e[r].appendChild(i)
            }
            return this
        }
        function x(e) {
            var t, n, i = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var a = document.createElement("div");
                    for (a.innerHTML = e,
                    n = a.childNodes.length - 1; n >= 0; n -= 1)
                        i[t].insertBefore(a.childNodes[n], i[t].childNodes[0])
                } else if (e instanceof z)
                    for (n = 0; n < e.length; n += 1)
                        i[t].insertBefore(e[n], i[t].childNodes[0]);
                else
                    i[t].insertBefore(e, i[t].childNodes[0]);
            return this
        }
        function M(t) {
            return new z(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        }
        function A(t) {
            var n = []
              , i = this[0];
            if (!i)
                return new z([]);
            for (; i.nextElementSibling; ) {
                var a = i.nextElementSibling;
                t ? e(a).is(t) && n.push(a) : n.push(a),
                i = a
            }
            return new z(n)
        }
        function G(t) {
            if (this.length > 0) {
                var n = this[0];
                return new z(t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? [n.previousElementSibling] : [] : n.previousElementSibling ? [n.previousElementSibling] : [])
            }
            return new z([])
        }
        function O(t) {
            var n = []
              , i = this[0];
            if (!i)
                return new z([]);
            for (; i.previousElementSibling; ) {
                var a = i.previousElementSibling;
                t ? e(a).is(t) && n.push(a) : n.push(a),
                i = a
            }
            return new z(n)
        }
        function I(n) {
            for (var i = this, a = [], r = 0; r < this.length; r += 1)
                null !== i[r].parentNode && (n ? e(i[r].parentNode).is(n) && a.push(i[r].parentNode) : a.push(i[r].parentNode));
            return e(t(a))
        }
        function N(n) {
            for (var i = this, a = [], r = 0; r < this.length; r += 1)
                for (var d = i[r].parentNode; d; )
                    n ? e(d).is(n) && a.push(d) : a.push(d),
                    d = d.parentNode;
            return e(t(a))
        }
        function k(e) {
            var t = this;
            return void 0 === e ? new z([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        }
        function L(e) {
            for (var t = this, n = [], i = 0; i < this.length; i += 1)
                for (var a = t[i].querySelectorAll(e), r = 0; r < a.length; r += 1)
                    n.push(a[r]);
            return new z(n)
        }
        function H(n) {
            for (var i = this, a = [], r = 0; r < this.length; r += 1)
                for (var d = i[r].childNodes, o = 0; o < d.length; o += 1)
                    n ? 1 === d[o].nodeType && e(d[o]).is(n) && a.push(d[o]) : 1 === d[o].nodeType && a.push(d[o]);
            return new z(t(a))
        }
        function D() {
            for (var e = this, t = 0; t < this.length; t += 1)
                e[t].parentNode && e[t].parentNode.removeChild(e[t]);
            return this
        }
        function B() {
            for (var t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            var i, a, r = this;
            for (i = 0; i < t.length; i += 1) {
                var d = e(t[i]);
                for (a = 0; a < d.length; a += 1)
                    r[r.length] = d[a],
                    r.length += 1
            }
            return r
        }
        function F() {
            var e = this
              , t = e.params
              , n = e.touchEvents
              , i = e.el
              , a = e.wrapperEl;
            e.onTouchStart = De.bind(e),
            e.onTouchMove = Be.bind(e),
            e.onTouchEnd = Fe.bind(e),
            e.onClick = Re.bind(e);
            var r = "container" === t.touchEventsTarget ? i : a
              , d = !!t.nested;
            if (q.pointerEvents || q.prefixedPointerEvents)
                r.addEventListener(n.start, e.onTouchStart, !1),
                (q.touch ? r : Y).addEventListener(n.move, e.onTouchMove, d),
                (q.touch ? r : Y).addEventListener(n.end, e.onTouchEnd, !1);
            else {
                if (q.touch) {
                    var o = !("touchstart" !== n.start || !q.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.addEventListener(n.start, e.onTouchStart, o),
                    r.addEventListener(n.move, e.onTouchMove, q.passiveListener ? {
                        passive: !1,
                        capture: d
                    } : d),
                    r.addEventListener(n.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !He.ios && !He.android || t.simulateTouch && !q.touch && He.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1),
                Y.addEventListener("mousemove", e.onTouchMove, d),
                Y.addEventListener("mouseup", e.onTouchEnd, !1))
            }
            (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
            e.on("resize observerUpdate", _e)
        }
        function _() {
            var e = this
              , t = e.params
              , n = e.touchEvents
              , i = e.el
              , a = e.wrapperEl
              , r = "container" === t.touchEventsTarget ? i : a
              , d = !!t.nested;
            if (q.pointerEvents || q.prefixedPointerEvents)
                r.removeEventListener(n.start, e.onTouchStart, !1),
                (q.touch ? r : Y).removeEventListener(n.move, e.onTouchMove, d),
                (q.touch ? r : Y).removeEventListener(n.end, e.onTouchEnd, !1);
            else {
                if (q.touch) {
                    var o = !("onTouchStart" !== n.start || !q.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(n.start, e.onTouchStart, o),
                    r.removeEventListener(n.move, e.onTouchMove, d),
                    r.removeEventListener(n.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !He.ios && !He.android || t.simulateTouch && !q.touch && He.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1),
                Y.removeEventListener("mousemove", e.onTouchMove, d),
                Y.removeEventListener("mouseup", e.onTouchEnd, !1))
            }
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
            e.off("resize observerUpdate", _e)
        }
        function R() {
            var e = this
              , t = e.isLocked;
            e.isLocked = 1 === e.snapGrid.length,
            e.allowTouchMove = !e.isLocked,
            t && t !== e.isLocked && (e.isEnd = !1,
            e.navigation.update())
        }
        function V() {
            var e = "onwheel"in Y;
            if (!e) {
                var t = Y.createElement("div");
                t.setAttribute("onwheel", "return;"),
                e = "function" == typeof t.onwheel
            }
            return !e && Y.implementation && Y.implementation.hasFeature && !0 !== Y.implementation.hasFeature("", "") && (e = Y.implementation.hasFeature("Events.wheel", "3.0")),
            e
        }
        var z = function(e) {
            for (var t = this, n = 0; n < e.length; n += 1)
                t[n] = e[n];
            return t.length = e.length,
            this
        };
        e.fn = z.prototype,
        e.Class = z,
        e.Dom7 = z;
        var j = ("resize scroll".split(" "),
        {
            addClass: n,
            removeClass: i,
            hasClass: a,
            toggleClass: r,
            attr: d,
            removeAttr: o,
            data: s,
            transform: l,
            transition: u,
            on: c,
            off: f,
            trigger: h,
            transitionEnd: p,
            outerWidth: m,
            outerHeight: v,
            offset: g,
            css: b,
            each: T,
            html: y,
            text: S,
            is: C,
            index: P,
            eq: w,
            append: E,
            prepend: x,
            next: M,
            nextAll: A,
            prev: G,
            prevAll: O,
            parent: I,
            parents: N,
            closest: k,
            find: L,
            children: H,
            remove: D,
            add: B,
            styles: $
        });
        Object.keys(j).forEach(function(t) {
            e.fn[t] = j[t]
        });
        var X;
        X = "undefined" == typeof window ? {
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {}
            },
            Image: function() {},
            Date: function() {},
            screen: {}
        } : window;
        var W, U = X, K = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0),
                setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                void 0 === t && (t = "x");
                var n, i, a, r = U.getComputedStyle(e, null);
                return U.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")),
                a = new U.WebKitCSSMatrix("none" === i ? "" : i)) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                n = a.toString().split(",")),
                "x" === t && (i = U.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
                "y" === t && (i = U.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
                i || 0
            },
            parseUrlQuery: function(e) {
                var t, n, i, a, r = {}, d = e || U.location.href;
                if ("string" == typeof d && d.length)
                    for (d = d.indexOf("?") > -1 ? d.replace(/\S*\?/, "") : "",
                    n = d.split("&").filter(function(e) {
                        return "" !== e
                    }),
                    a = n.length,
                    t = 0; t < a; t += 1)
                        i = n[t].replace(/#\S+/g, "").split("="),
                        r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return r
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var a = e[i];
                    if (void 0 !== a && null !== a)
                        for (var r = Object.keys(Object(a)), d = 0, o = r.length; d < o; d += 1) {
                            var s = r[d]
                              , l = Object.getOwnPropertyDescriptor(a, s);
                            void 0 !== l && l.enumerable && (K.isObject(n[s]) && K.isObject(a[s]) ? K.extend(n[s], a[s]) : !K.isObject(n[s]) && K.isObject(a[s]) ? (n[s] = {},
                            K.extend(n[s], a[s])) : n[s] = a[s])
                        }
                }
                return n
            }
        };
        W = "undefined" == typeof document ? {
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return {}
            },
            querySelectorAll: function() {
                return []
            },
            createElement: function() {
                return {
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document;
        var Y = W
          , q = function() {
            var e = Y.createElement("div");
            return {
                touch: U.Modernizr && !0 === U.Modernizr.touch || function() {
                    return !!("ontouchstart"in U || U.DocumentTouch && Y instanceof U.DocumentTouch)
                }(),
                pointerEvents: !(!U.navigator.pointerEnabled && !U.PointerEvent),
                prefixedPointerEvents: !!U.navigator.msPointerEnabled,
                transition: function() {
                    var t = e.style;
                    return "transition"in t || "webkitTransition"in t || "MozTransition"in t
                }(),
                transforms3d: U.Modernizr && !0 === U.Modernizr.csstransforms3d || function() {
                    var t = e.style;
                    return "webkitPerspective"in t || "MozPerspective"in t || "OPerspective"in t || "MsPerspective"in t || "perspective"in t
                }(),
                flexbox: function() {
                    for (var t = e.style, n = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < n.length; i += 1)
                        if (n[i]in t)
                            return !0;
                    return !1
                }(),
                observer: function() {
                    return "MutationObserver"in U || "WebkitMutationObserver"in U
                }(),
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        U.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: function() {
                    return "ongesturestart"in U
                }()
            }
        }()
          , Q = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e,
            t.eventsListeners = {},
            t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        }
          , Z = {
            components: {
                configurable: !0
            }
        };
        Q.prototype.on = function(e, t) {
            var n = this;
            return "function" != typeof t ? n : (e.split(" ").forEach(function(e) {
                n.eventsListeners[e] || (n.eventsListeners[e] = []),
                n.eventsListeners[e].push(t)
            }),
            n)
        }
        ,
        Q.prototype.once = function(e, t) {
            function n() {
                for (var a = [], r = arguments.length; r--; )
                    a[r] = arguments[r];
                t.apply(i, a),
                i.off(e, n)
            }
            var i = this;
            return "function" != typeof t ? i : i.on(e, n)
        }
        ,
        Q.prototype.off = function(e, t) {
            var n = this;
            return e.split(" ").forEach(function(e) {
                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e].forEach(function(i, a) {
                    i === t && n.eventsListeners[e].splice(a, 1)
                })
            }),
            n
        }
        ,
        Q.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = this;
            if (!n.eventsListeners)
                return n;
            var i, a, r;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
            a = e.slice(1, e.length),
            r = n) : (i = e[0].events,
            a = e[0].data,
            r = e[0].context || n),
            (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
                if (n.eventsListeners[e]) {
                    var t = [];
                    n.eventsListeners[e].forEach(function(e) {
                        t.push(e)
                    }),
                    t.forEach(function(e) {
                        e.apply(r, a)
                    })
                }
            }),
            n
        }
        ,
        Q.prototype.useModulesParams = function(e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(n) {
                var i = t.modules[n];
                i.params && K.extend(e, i.params)
            })
        }
        ,
        Q.prototype.useModules = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(n) {
                var i = t.modules[n]
                  , a = e[n] || {};
                i.instance && Object.keys(i.instance).forEach(function(e) {
                    var n = i.instance[e];
                    t[e] = "function" == typeof n ? n.bind(t) : n
                }),
                i.on && t.on && Object.keys(i.on).forEach(function(e) {
                    t.on(e, i.on[e])
                }),
                i.create && i.create.bind(t)(a)
            })
        }
        ,
        Z.components.set = function(e) {
            var t = this;
            t.use && t.use(e)
        }
        ,
        Q.installModule = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
                t[n] = arguments[n + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var a = e.name || Object.keys(i.prototype.modules).length + "_" + K.now();
            return i.prototype.modules[a] = e,
            e.proto && Object.keys(e.proto).forEach(function(t) {
                i.prototype[t] = e.proto[t]
            }),
            e.static && Object.keys(e.static).forEach(function(t) {
                i[t] = e.static[t]
            }),
            e.install && e.install.apply(i, t),
            i
        }
        ,
        Q.use = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
                t[n] = arguments[n + 1];
            var i = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return i.installModule(e)
            }),
            i) : i.installModule.apply(i, [e].concat(t))
        }
        ,
        Object.defineProperties(Q, Z);
        var J = function() {
            var e, t, n = this, i = n.$el;
            e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth,
            t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight,
            0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            K.extend(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t
            }))
        }
          , ee = function() {
            var e = this
              , t = e.params
              , n = e.$wrapperEl
              , i = e.size
              , a = e.rtl
              , r = e.wrongRTL
              , d = n.children("." + e.params.slideClass)
              , o = e.virtual && t.virtual.enabled
              , s = o ? e.virtual.slides.length : d.length
              , l = []
              , u = []
              , c = []
              , f = t.slidesOffsetBefore;
            "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
            var h = t.slidesOffsetAfter;
            "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
            var p = s
              , m = e.snapGrid.length
              , v = e.snapGrid.length
              , g = t.spaceBetween
              , $ = -f
              , b = 0
              , T = 0;
            if (void 0 !== i) {
                "string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * i),
                e.virtualSize = -g,
                a ? d.css({
                    marginLeft: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: ""
                });
                var y;
                t.slidesPerColumn > 1 && (y = Math.floor(s / t.slidesPerColumn) === s / e.params.slidesPerColumn ? s : Math.ceil(s / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
                for (var S, C = t.slidesPerColumn, P = y / C, w = P - (t.slidesPerColumn * P - s), E = 0; E < s; E += 1) {
                    S = 0;
                    var x = d.eq(E);
                    if (t.slidesPerColumn > 1) {
                        var M = void 0
                          , A = void 0
                          , G = void 0;
                        "column" === t.slidesPerColumnFill ? (A = Math.floor(E / C),
                        G = E - A * C,
                        (A > w || A === w && G === C - 1) && (G += 1) >= C && (G = 0,
                        A += 1),
                        M = A + G * y / C,
                        x.css({
                            "-webkit-box-ordinal-group": M,
                            "-moz-box-ordinal-group": M,
                            "-ms-flex-order": M,
                            "-webkit-order": M,
                            order: M
                        })) : (G = Math.floor(E / P),
                        A = E - G * P),
                        x.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== G && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", G)
                    }
                    "none" !== x.css("display") && ("auto" === t.slidesPerView ? (S = e.isHorizontal() ? x.outerWidth(!0) : x.outerHeight(!0),
                    t.roundLengths && (S = Math.floor(S))) : (S = (i - (t.slidesPerView - 1) * g) / t.slidesPerView,
                    t.roundLengths && (S = Math.floor(S)),
                    d[E] && (e.isHorizontal() ? d[E].style.width = S + "px" : d[E].style.height = S + "px")),
                    d[E] && (d[E].swiperSlideSize = S),
                    c.push(S),
                    t.centeredSlides ? ($ = $ + S / 2 + b / 2 + g,
                    0 === b && 0 !== E && ($ = $ - i / 2 - g),
                    0 === E && ($ = $ - i / 2 - g),
                    Math.abs($) < .001 && ($ = 0),
                    T % t.slidesPerGroup == 0 && l.push($),
                    u.push($)) : (T % t.slidesPerGroup == 0 && l.push($),
                    u.push($),
                    $ = $ + S + g),
                    e.virtualSize += S + g,
                    b = S,
                    T += 1)
                }
                e.virtualSize = Math.max(e.virtualSize, i) + h;
                var O;
                if (a && r && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                q.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : n.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                t.slidesPerColumn > 1 && (e.virtualSize = (S + t.spaceBetween) * y,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : n.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }),
                t.centeredSlides)) {
                    O = [];
                    for (var I = 0; I < l.length; I += 1)
                        l[I] < e.virtualSize + l[0] && O.push(l[I]);
                    l = O
                }
                if (!t.centeredSlides) {
                    O = [];
                    for (var N = 0; N < l.length; N += 1)
                        l[N] <= e.virtualSize - i && O.push(l[N]);
                    l = O,
                    Math.floor(e.virtualSize - i) - Math.floor(l[l.length - 1]) > 1 && l.push(e.virtualSize - i)
                }
                0 === l.length && (l = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? a ? d.css({
                    marginLeft: g + "px"
                }) : d.css({
                    marginRight: g + "px"
                }) : d.css({
                    marginBottom: g + "px"
                })),
                K.extend(e, {
                    slides: d,
                    snapGrid: l,
                    slidesGrid: u,
                    slidesSizesGrid: c
                }),
                s !== p && e.emit("slidesLengthChange"),
                l.length !== m && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                u.length !== v && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        }
          , te = function() {
            var e, t = this, n = [], i = 0;
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                    var a = t.activeIndex + e;
                    if (a > t.slides.length)
                        break;
                    n.push(t.slides.eq(a)[0])
                }
            else
                n.push(t.slides.eq(t.activeIndex)[0]);
            for (e = 0; e < n.length; e += 1)
                if (void 0 !== n[e]) {
                    var r = n[e].offsetHeight;
                    i = r > i ? r : i
                }
            i && t.$wrapperEl.css("height", i + "px")
        }
          , ne = function() {
            for (var e = this, t = e.slides, n = 0; n < t.length; n += 1)
                t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
        }
          , ie = function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this
              , n = t.params
              , i = t.slides
              , a = t.rtl;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                a && (r = e),
                i.removeClass(n.slideVisibleClass);
                for (var d = 0; d < i.length; d += 1) {
                    var o = i[d]
                      , s = (r + (n.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + n.spaceBetween);
                    if (n.watchSlidesVisibility) {
                        var l = -(r - o.swiperSlideOffset)
                          , u = l + t.slidesSizesGrid[d];
                        (l >= 0 && l < t.size || u > 0 && u <= t.size || l <= 0 && u >= t.size) && i.eq(d).addClass(n.slideVisibleClass)
                    }
                    o.progress = a ? -s : s
                }
            }
        }
          , ae = function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this
              , n = t.params
              , i = t.maxTranslate() - t.minTranslate()
              , a = t.progress
              , r = t.isBeginning
              , d = t.isEnd
              , o = r
              , s = d;
            0 === i ? (a = 0,
            r = !0,
            d = !0) : (a = (e - t.minTranslate()) / i,
            r = a <= 0,
            d = a >= 1),
            K.extend(t, {
                progress: a,
                isBeginning: r,
                isEnd: d
            }),
            (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            d && !s && t.emit("reachEnd toEdge"),
            (o && !r || s && !d) && t.emit("fromEdge"),
            t.emit("progress", a)
        }
          , re = function() {
            var e = this
              , t = e.slides
              , n = e.params
              , i = e.$wrapperEl
              , a = e.activeIndex
              , r = e.realIndex
              , d = e.virtual && n.virtual.enabled;
            t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
            var o;
            o = d ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a),
            o.addClass(n.slideActiveClass),
            n.loop && (o.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(n.slideDuplicateActiveClass));
            var s = o.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === s.length && (s = t.eq(0),
            s.addClass(n.slideNextClass));
            var l = o.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === l.length && (l = t.eq(-1),
            l.addClass(n.slidePrevClass)),
            n.loop && (s.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass),
            l.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
        }
          , de = function(e) {
            var t, n = this, i = n.rtl ? n.translate : -n.translate, a = n.slidesGrid, r = n.snapGrid, d = n.params, o = n.activeIndex, s = n.realIndex, l = n.snapIndex, u = e;
            if (void 0 === u) {
                for (var c = 0; c < a.length; c += 1)
                    void 0 !== a[c + 1] ? i >= a[c] && i < a[c + 1] - (a[c + 1] - a[c]) / 2 ? u = c : i >= a[c] && i < a[c + 1] && (u = c + 1) : i >= a[c] && (u = c);
                d.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if (t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(u / d.slidesPerGroup),
            t >= r.length && (t = r.length - 1),
            u === o)
                return void (t !== l && (n.snapIndex = t,
                n.emit("snapIndexChange")));
            var f = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
            K.extend(n, {
                snapIndex: t,
                realIndex: f,
                previousIndex: o,
                activeIndex: u
            }),
            n.emit("activeIndexChange"),
            n.emit("snapIndexChange"),
            s !== f && n.emit("realIndexChange"),
            n.emit("slideChange")
        }
          , oe = function(t) {
            var n = this
              , i = n.params
              , a = e(t.target).closest("." + i.slideClass)[0]
              , r = !1;
            if (a)
                for (var d = 0; d < n.slides.length; d += 1)
                    n.slides[d] === a && (r = !0);
            if (!a || !r)
                return n.clickedSlide = void 0,
                void (n.clickedIndex = void 0);
            n.clickedSlide = a,
            n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(e(a).attr("data-swiper-slide-index"), 10) : n.clickedIndex = e(a).index(),
            i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
        }
          , se = {
            updateSize: J,
            updateSlides: ee,
            updateAutoHeight: te,
            updateSlidesOffset: ne,
            updateSlidesProgress: ie,
            updateProgress: ae,
            updateSlidesClasses: re,
            updateActiveIndex: de,
            updateClickedSlide: oe
        }
          , le = function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this
              , n = t.params
              , i = t.rtl
              , a = t.translate
              , r = t.$wrapperEl;
            if (n.virtualTranslate)
                return i ? -a : a;
            var d = K.getTranslate(r[0], e);
            return i && (d = -d),
            d || 0
        }
          , ue = function(e, t) {
            var n = this
              , i = n.rtl
              , a = n.params
              , r = n.$wrapperEl
              , d = n.progress
              , o = 0
              , s = 0;
            n.isHorizontal() ? o = i ? -e : e : s = e,
            a.roundLengths && (o = Math.floor(o),
            s = Math.floor(s)),
            a.virtualTranslate || (q.transforms3d ? r.transform("translate3d(" + o + "px, " + s + "px, 0px)") : r.transform("translate(" + o + "px, " + s + "px)")),
            n.translate = n.isHorizontal() ? o : s;
            var l, u = n.maxTranslate() - n.minTranslate();
            l = 0 === u ? 0 : (e - n.minTranslate()) / u,
            l !== d && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t)
        }
          , ce = function() {
            return -this.snapGrid[0]
        }
          , fe = function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
          , he = {
            getTranslate: le,
            setTranslate: ue,
            minTranslate: ce,
            maxTranslate: fe
        }
          , pe = function(e, t) {
            var n = this;
            n.$wrapperEl.transition(e),
            n.emit("setTransition", e, t)
        }
          , me = function(e) {
            void 0 === e && (e = !0);
            var t = this
              , n = t.activeIndex
              , i = t.params
              , a = t.previousIndex;
            i.autoHeight && t.updateAutoHeight(),
            t.emit("transitionStart"),
            e && n !== a && (t.emit("slideChangeTransitionStart"),
            n > a ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
        }
          , ve = function(e) {
            void 0 === e && (e = !0);
            var t = this
              , n = t.activeIndex
              , i = t.previousIndex;
            t.animating = !1,
            t.setTransition(0),
            t.emit("transitionEnd"),
            e && n !== i && (t.emit("slideChangeTransitionEnd"),
            n > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
        }
          , ge = {
            setTransition: pe,
            transitionStart: me,
            transitionEnd: ve
        }
          , $e = function(e, t, n, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
            var a = this
              , r = e;
            r < 0 && (r = 0);
            var d = a.params
              , o = a.snapGrid
              , s = a.slidesGrid
              , l = a.previousIndex
              , u = a.activeIndex
              , c = a.rtl
              , f = a.$wrapperEl
              , h = Math.floor(r / d.slidesPerGroup);
            h >= o.length && (h = o.length - 1),
            (u || d.initialSlide || 0) === (l || 0) && n && a.emit("beforeSlideChangeStart");
            var p = -o[h];
            if (a.updateProgress(p),
            d.normalizeSlideIndex)
                for (var m = 0; m < s.length; m += 1)
                    -Math.floor(100 * p) >= Math.floor(100 * s[m]) && (r = m);
            if (a.initialized) {
                if (!a.allowSlideNext && p < a.translate && p < a.minTranslate())
                    return !1;
                if (!a.allowSlidePrev && p > a.translate && p > a.maxTranslate() && (u || 0) !== r)
                    return !1
            }
            return c && -p === a.translate || !c && p === a.translate ? (a.updateActiveIndex(r),
            d.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== d.effect && a.setTranslate(p),
            !1) : (0 !== t && q.transition ? (a.setTransition(t),
            a.setTranslate(p),
            a.updateActiveIndex(r),
            a.updateSlidesClasses(),
            a.emit("beforeTransitionStart", t, i),
            a.transitionStart(n),
            a.animating || (a.animating = !0,
            f.transitionEnd(function() {
                a && !a.destroyed && a.transitionEnd(n)
            }))) : (a.setTransition(0),
            a.setTranslate(p),
            a.updateActiveIndex(r),
            a.updateSlidesClasses(),
            a.emit("beforeTransitionStart", t, i),
            a.transitionStart(n),
            a.transitionEnd(n)),
            !0)
        }
          , be = function(e, t, n) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , a = i.params
              , r = i.animating;
            return a.loop ? !r && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, n)
        }
          , Te = function(e, t, n) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , a = i.params
              , r = i.animating;
            return a.loop ? !r && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            i.slideTo(i.activeIndex - 1, e, t, n)) : i.slideTo(i.activeIndex - 1, e, t, n)
        }
          , ye = function(e, t, n) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this;
            return i.slideTo(i.activeIndex, e, t, n)
        }
          , Se = function() {
            var t, n = this, i = n.params, a = n.$wrapperEl, r = "auto" === i.slidesPerView ? n.slidesPerViewDynamic() : i.slidesPerView, d = n.clickedIndex;
            if (i.loop) {
                if (n.animating)
                    return;
                t = parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? d < n.loopedSlides - r / 2 || d > n.slides.length - n.loopedSlides + r / 2 ? (n.loopFix(),
                d = a.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                K.nextTick(function() {
                    n.slideTo(d)
                })) : n.slideTo(d) : d > n.slides.length - r ? (n.loopFix(),
                d = a.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                K.nextTick(function() {
                    n.slideTo(d)
                })) : n.slideTo(d)
            } else
                n.slideTo(d)
        }
          , Ce = {
            slideTo: $e,
            slideNext: be,
            slidePrev: Te,
            slideReset: ye,
            slideToClickedSlide: Se
        }
          , Pe = function() {
            var t = this
              , n = t.params
              , i = t.$wrapperEl;
            i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
            var a = i.children("." + n.slideClass);
            if (n.loopFillGroupWithBlank) {
                var r = n.slidesPerGroup - a.length % n.slidesPerGroup;
                if (r !== n.slidesPerGroup) {
                    for (var d = 0; d < r; d += 1) {
                        var o = e(Y.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                        i.append(o)
                    }
                    a = i.children("." + n.slideClass)
                }
            }
            "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length),
            t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10),
            t.loopedSlides += n.loopAdditionalSlides,
            t.loopedSlides > a.length && (t.loopedSlides = a.length);
            var s = []
              , l = [];
            a.each(function(n, i) {
                var r = e(i);
                n < t.loopedSlides && l.push(i),
                n < a.length && n >= a.length - t.loopedSlides && s.push(i),
                r.attr("data-swiper-slide-index", n)
            });
            for (var u = 0; u < l.length; u += 1)
                i.append(e(l[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (var c = s.length - 1; c >= 0; c -= 1)
                i.prepend(e(s[c].cloneNode(!0)).addClass(n.slideDuplicateClass))
        }
          , we = function() {
            var e, t = this, n = t.params, i = t.activeIndex, a = t.slides, r = t.loopedSlides, d = t.allowSlidePrev, o = t.allowSlideNext;
            t.allowSlidePrev = !0,
            t.allowSlideNext = !0,
            i < r ? (e = a.length - 3 * r + i,
            e += r,
            t.slideTo(e, 0, !1, !0)) : ("auto" === n.slidesPerView && i >= 2 * r || i > a.length - 2 * n.slidesPerView) && (e = -a.length + i + r,
            e += r,
            t.slideTo(e, 0, !1, !0)),
            t.allowSlidePrev = d,
            t.allowSlideNext = o
        }
          , Ee = function() {
            var e = this
              , t = e.$wrapperEl
              , n = e.params
              , i = e.slides;
            t.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
          , xe = {
            loopCreate: Pe,
            loopFix: we,
            loopDestroy: Ee
        }
          , Me = function(e) {
            var t = this;
            if (!q.touch && t.params.simulateTouch) {
                var n = t.el;
                n.style.cursor = "move",
                n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                n.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                n.style.cursor = e ? "grabbing" : "grab"
            }
        }
          , Ae = function() {
            var e = this;
            q.touch || (e.el.style.cursor = "")
        }
          , Ge = {
            setGrabCursor: Me,
            unsetGrabCursor: Ae
        }
          , Oe = function(e) {
            var t = this
              , n = t.$wrapperEl
              , i = t.params;
            if (i.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var a = 0; a < e.length; a += 1)
                    e[a] && n.append(e[a]);
            else
                n.append(e);
            i.loop && t.loopCreate(),
            i.observer && q.observer || t.update()
        }
          , Ie = function(e) {
            var t = this
              , n = t.params
              , i = t.$wrapperEl
              , a = t.activeIndex;
            n.loop && t.loopDestroy();
            var r = a + 1;
            if ("object" == typeof e && "length"in e) {
                for (var d = 0; d < e.length; d += 1)
                    e[d] && i.prepend(e[d]);
                r = a + e.length
            } else
                i.prepend(e);
            n.loop && t.loopCreate(),
            n.observer && q.observer || t.update(),
            t.slideTo(r, 0, !1)
        }
          , Ne = function(e) {
            var t = this
              , n = t.params
              , i = t.$wrapperEl
              , a = t.activeIndex;
            n.loop && (t.loopDestroy(),
            t.slides = i.children("." + n.slideClass));
            var r, d = a;
            if ("object" == typeof e && "length"in e) {
                for (var o = 0; o < e.length; o += 1)
                    r = e[o],
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < d && (d -= 1);
                d = Math.max(d, 0)
            } else
                r = e,
                t.slides[r] && t.slides.eq(r).remove(),
                r < d && (d -= 1),
                d = Math.max(d, 0);
            n.loop && t.loopCreate(),
            n.observer && q.observer || t.update(),
            n.loop ? t.slideTo(d + t.loopedSlides, 0, !1) : t.slideTo(d, 0, !1)
        }
          , ke = function() {
            for (var e = this, t = [], n = 0; n < e.slides.length; n += 1)
                t.push(n);
            e.removeSlide(t)
        }
          , Le = {
            appendSlide: Oe,
            prependSlide: Ie,
            removeSlide: Ne,
            removeAllSlides: ke
        }
          , He = function() {
            var e = U.navigator.userAgent
              , t = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: U.cordova || U.phonegap,
                phonegap: U.cordova || U.phonegap
            }
              , n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
              , i = e.match(/(Android);?[\s\/]+([\d.]+)?/)
              , a = e.match(/(iPad).*OS\s([\d_]+)/)
              , r = e.match(/(iPod)(.*OS\s([\d_]+))?/)
              , d = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (n && (t.os = "windows",
            t.osVersion = n[2],
            t.windows = !0),
            i && !n && (t.os = "android",
            t.osVersion = i[2],
            t.android = !0,
            t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0),
            (a || d || r) && (t.os = "ios",
            t.ios = !0),
            d && !r && (t.osVersion = d[2].replace(/_/g, "."),
            t.iphone = !0),
            a && (t.osVersion = a[2].replace(/_/g, "."),
            t.ipad = !0),
            r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null,
            t.iphone = !0),
            t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
            t.desktop = !(t.os || t.android || t.webView),
            t.webView = (d || a || r) && e.match(/.*AppleWebKit(?!.*Safari)/i),
            t.os && "ios" === t.os) {
                var o = t.osVersion.split(".")
                  , s = Y.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || d) && (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && s && s.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return t.pixelRatio = U.devicePixelRatio || 1,
            t
        }()
          , De = function(t) {
            var n = this
              , i = n.touchEventsData
              , a = n.params
              , r = n.touches
              , d = t;
            if (d.originalEvent && (d = d.originalEvent),
            i.isTouchEvent = "touchstart" === d.type,
            (i.isTouchEvent || !("which"in d) || 3 !== d.which) && (!i.isTouched || !i.isMoved)) {
                if (a.noSwiping && e(d.target).closest("." + a.noSwipingClass)[0])
                    return void (n.allowClick = !0);
                if (!a.swipeHandler || e(d).closest(a.swipeHandler)[0]) {
                    r.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX,
                    r.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
                    var o = r.currentX
                      , s = r.currentY;
                    if (!(He.ios && !He.cordova && a.iOSEdgeSwipeDetection && o <= a.iOSEdgeSwipeThreshold && o >= window.screen.width - a.iOSEdgeSwipeThreshold)) {
                        if (K.extend(i, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }),
                        r.startX = o,
                        r.startY = s,
                        i.touchStartTime = K.now(),
                        n.allowClick = !0,
                        n.updateSize(),
                        n.swipeDirection = void 0,
                        a.threshold > 0 && (i.allowThresholdMove = !1),
                        "touchstart" !== d.type) {
                            var l = !0;
                            e(d.target).is(i.formElements) && (l = !1),
                            Y.activeElement && e(Y.activeElement).is(i.formElements) && Y.activeElement.blur(),
                            l && n.allowTouchMove && d.preventDefault()
                        }
                        n.emit("touchStart", d)
                    }
                }
            }
        }
          , Be = function(t) {
            var n = this
              , i = n.touchEventsData
              , a = n.params
              , r = n.touches
              , d = n.rtl
              , o = t;
            if (o.originalEvent && (o = o.originalEvent),
            !i.isTouchEvent || "mousemove" !== o.type) {
                var s = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX
                  , l = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                if (o.preventedByNestedSwiper)
                    return r.startX = s,
                    void (r.startY = l);
                if (!n.allowTouchMove)
                    return n.allowClick = !1,
                    void (i.isTouched && (K.extend(r, {
                        startX: s,
                        startY: l,
                        currentX: s,
                        currentY: l
                    }),
                    i.touchStartTime = K.now()));
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (n.isVertical()) {
                        if (l < r.startY && n.translate <= n.maxTranslate() || l > r.startY && n.translate >= n.minTranslate())
                            return i.isTouched = !1,
                            void (i.isMoved = !1)
                    } else if (s < r.startX && n.translate <= n.maxTranslate() || s > r.startX && n.translate >= n.minTranslate())
                        return;
                if (i.isTouchEvent && Y.activeElement && o.target === Y.activeElement && e(o.target).is(i.formElements))
                    return i.isMoved = !0,
                    void (n.allowClick = !1);
                if (i.allowTouchCallbacks && n.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1)) {
                    r.currentX = s,
                    r.currentY = l;
                    var u = r.currentX - r.startX
                      , c = r.currentY - r.startY;
                    if (void 0 === i.isScrolling) {
                        var f;
                        n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + c * c >= 25 && (f = 180 * Math.atan2(Math.abs(c), Math.abs(u)) / Math.PI,
                        i.isScrolling = n.isHorizontal() ? f > a.touchAngle : 90 - f > a.touchAngle)
                    }
                    if (i.isScrolling && n.emit("touchMoveOpposite", o),
                    "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                    i.isTouched) {
                        if (i.isScrolling)
                            return void (i.isTouched = !1);
                        if (i.startMoving) {
                            n.allowClick = !1,
                            o.preventDefault(),
                            a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
                            i.isMoved || (a.loop && n.loopFix(),
                            i.startTranslate = n.getTranslate(),
                            n.setTransition(0),
                            n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                            i.allowMomentumBounce = !1,
                            !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0),
                            n.emit("sliderFirstMove", o)),
                            n.emit("sliderMove", o),
                            i.isMoved = !0;
                            var h = n.isHorizontal() ? u : c;
                            r.diff = h,
                            h *= a.touchRatio,
                            d && (h = -h),
                            n.swipeDirection = h > 0 ? "prev" : "next",
                            i.currentTranslate = h + i.startTranslate;
                            var p = !0
                              , m = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (m = 0),
                            h > 0 && i.currentTranslate > n.minTranslate() ? (p = !1,
                            a.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + h, m))) : h < 0 && i.currentTranslate < n.maxTranslate() && (p = !1,
                            a.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - h, m))),
                            p && (o.preventedByNestedSwiper = !0),
                            !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                            !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                            a.threshold > 0) {
                                if (!(Math.abs(h) > a.threshold || i.allowThresholdMove))
                                    return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove)
                                    return i.allowThresholdMove = !0,
                                    r.startX = r.currentX,
                                    r.startY = r.currentY,
                                    i.currentTranslate = i.startTranslate,
                                    void (r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                            }
                            a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (n.updateActiveIndex(),
                            n.updateSlidesClasses()),
                            a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: r[n.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }),
                            i.velocities.push({
                                position: r[n.isHorizontal() ? "currentX" : "currentY"],
                                time: K.now()
                            })),
                            n.updateProgress(i.currentTranslate),
                            n.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        }
          , Fe = function(e) {
            var t = this
              , n = t.touchEventsData
              , i = t.params
              , a = t.touches
              , r = t.rtl
              , d = t.$wrapperEl
              , o = t.slidesGrid
              , s = t.snapGrid
              , l = e;
            if (l.originalEvent && (l = l.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", l),
            n.allowTouchCallbacks = !1,
            n.isTouched) {
                i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var u = K.now()
                  , c = u - n.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(l),
                t.emit("tap", l),
                c < 300 && u - n.lastClickTime > 300 && (n.clickTimeout && clearTimeout(n.clickTimeout),
                n.clickTimeout = K.nextTick(function() {
                    t && !t.destroyed && t.emit("click", l)
                }, 300)),
                c < 300 && u - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout),
                t.emit("doubleTap", l))),
                n.lastClickTime = K.now(),
                K.nextTick(function() {
                    t.destroyed || (t.allowClick = !0)
                }),
                !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === a.diff || n.currentTranslate === n.startTranslate)
                    return n.isTouched = !1,
                    void (n.isMoved = !1);
                n.isTouched = !1,
                n.isMoved = !1;
                var f;
                if (f = i.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate,
                i.freeMode) {
                    if (f < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (f > -t.maxTranslate())
                        return void (t.slides.length < s.length ? t.slideTo(s.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (n.velocities.length > 1) {
                            var h = n.velocities.pop()
                              , p = n.velocities.pop()
                              , m = h.position - p.position
                              , v = h.time - p.time;
                            t.velocity = m / v,
                            t.velocity /= 2,
                            Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                            (v > 150 || K.now() - h.time > 300) && (t.velocity = 0)
                        } else
                            t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio,
                        n.velocities.length = 0;
                        var g = 1e3 * i.freeModeMomentumRatio
                          , $ = t.velocity * g
                          , b = t.translate + $;
                        r && (b = -b);
                        var T, y = !1, S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate())
                            i.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S),
                            T = t.maxTranslate(),
                            y = !0,
                            n.allowMomentumBounce = !0) : b = t.maxTranslate();
                        else if (b > t.minTranslate())
                            i.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S),
                            T = t.minTranslate(),
                            y = !0,
                            n.allowMomentumBounce = !0) : b = t.minTranslate();
                        else if (i.freeModeSticky) {
                            for (var C, P = 0; P < s.length; P += 1)
                                if (s[P] > -b) {
                                    C = P;
                                    break
                                }
                            b = Math.abs(s[C] - b) < Math.abs(s[C - 1] - b) || "next" === t.swipeDirection ? s[C] : s[C - 1],
                            b = -b
                        }
                        if (0 !== t.velocity)
                            g = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                        else if (i.freeModeSticky)
                            return void t.slideReset();
                        i.freeModeMomentumBounce && y ? (t.updateProgress(T),
                        t.setTransition(g),
                        t.setTranslate(b),
                        t.transitionStart(),
                        t.animating = !0,
                        d.transitionEnd(function() {
                            t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"),
                            t.setTransition(i.speed),
                            t.setTranslate(T),
                            d.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(b),
                        t.setTransition(g),
                        t.setTranslate(b),
                        t.transitionStart(),
                        t.animating || (t.animating = !0,
                        d.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(b),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                    }
                    return void ((!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()))
                }
                for (var w = 0, E = t.slidesSizesGrid[0], x = 0; x < o.length; x += i.slidesPerGroup)
                    void 0 !== o[x + i.slidesPerGroup] ? f >= o[x] && f < o[x + i.slidesPerGroup] && (w = x,
                    E = o[x + i.slidesPerGroup] - o[x]) : f >= o[x] && (w = x,
                    E = o[o.length - 1] - o[o.length - 2]);
                var M = (f - o[w]) / E;
                if (c > i.longSwipesMs) {
                    if (!i.longSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (M >= i.longSwipesRatio ? t.slideTo(w + i.slidesPerGroup) : t.slideTo(w)),
                    "prev" === t.swipeDirection && (M > 1 - i.longSwipesRatio ? t.slideTo(w + i.slidesPerGroup) : t.slideTo(w))
                } else {
                    if (!i.shortSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(w + i.slidesPerGroup),
                    "prev" === t.swipeDirection && t.slideTo(w)
                }
            }
        }
          , _e = function() {
            var e = this
              , t = e.params
              , n = e.el;
            if (!n || 0 !== n.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var i = e.allowSlideNext
                  , a = e.allowSlidePrev;
                if (e.allowSlideNext = !0,
                e.allowSlidePrev = !0,
                e.updateSize(),
                e.updateSlides(),
                t.freeMode) {
                    var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(r),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    t.autoHeight && e.updateAutoHeight()
                } else
                    e.updateSlidesClasses(),
                    ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                e.allowSlidePrev = a,
                e.allowSlideNext = i
            }
        }
          , Re = function(e) {
            var t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
        }
          , Ve = {
            attachEvents: F,
            detachEvents: _
        }
          , ze = function() {
            var e = this
              , t = e.activeIndex
              , n = e.loopedSlides;
            void 0 === n && (n = 0);
            var i = e.params
              , a = i.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
                var r = e.getBreakpoint(a);
                if (r && e.currentBreakpoint !== r) {
                    var d = r in a ? a[r] : e.originalParams
                      , o = i.loop && d.slidesPerView !== i.slidesPerView;
                    K.extend(e.params, d),
                    K.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    e.currentBreakpoint = r,
                    o && (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - n + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", d)
                }
            }
        }
          , je = function(e) {
            if (e) {
                var t = !1
                  , n = [];
                Object.keys(e).forEach(function(e) {
                    n.push(e)
                }),
                n.sort(function(e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var i = 0; i < n.length; i += 1) {
                    var a = n[i];
                    a >= U.innerWidth && !t && (t = a)
                }
                return t || "max"
            }
        }
          , Xe = {
            setBreakpoint: ze,
            getBreakpoint: je
        }
          , We = function() {
            var e = this
              , t = e.classNames
              , n = e.params
              , i = e.rtl
              , a = e.$el
              , r = [];
            r.push(n.direction),
            n.freeMode && r.push("free-mode"),
            q.flexbox || r.push("no-flexbox"),
            n.autoHeight && r.push("autoheight"),
            i && r.push("rtl"),
            n.slidesPerColumn > 1 && r.push("multirow"),
            He.android && r.push("android"),
            He.ios && r.push("ios"),
            (q.pointerEvents || q.prefixedPointerEvents) && r.push("wp8-" + n.direction),
            r.forEach(function(e) {
                t.push(n.containerModifierClass + e)
            }),
            a.addClass(t.join(" "))
        }
          , Ue = function() {
            var e = this
              , t = e.$el
              , n = e.classNames;
            t.removeClass(n.join(" "))
        }
          , Ke = {
            addClasses: We,
            removeClasses: Ue
        }
          , Ye = function(e, t, n, i, a, r) {
            function d() {
                r && r()
            }
            var o;
            e.complete && a ? d() : t ? (o = new U.Image,
            o.onload = d,
            o.onerror = d,
            i && (o.sizes = i),
            n && (o.srcset = n),
            t && (o.src = t)) : d()
        }
          , qe = function() {
            function e() {
                void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(),
                t.emit("imagesReady")))
            }
            var t = this;
            t.imagesToLoad = t.$el.find("img");
            for (var n = 0; n < t.imagesToLoad.length; n += 1) {
                var i = t.imagesToLoad[n];
                t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e)
            }
        }
          , Qe = {
            loadImage: Ye,
            preloadImages: qe
        }
          , Ze = {
            checkOverflow: R
        }
          , Je = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }
          , et = {
            update: se,
            translate: he,
            transition: ge,
            slide: Ce,
            loop: xe,
            grabCursor: Ge,
            manipulation: Le,
            events: Ve,
            breakpoints: Xe,
            checkOverflow: Ze,
            classes: Ke,
            images: Qe
        }
          , tt = {}
          , nt = function(t) {
            function n() {
                for (var i = [], a = arguments.length; a--; )
                    i[a] = arguments[a];
                var r, d;
                if (1 === i.length && i[0].constructor && i[0].constructor === Object)
                    d = i[0];
                else {
                    var o;
                    o = i,
                    r = o[0],
                    d = o[1]
                }
                d || (d = {}),
                d = K.extend({}, d),
                r && !d.el && (d.el = r),
                t.call(this, d),
                Object.keys(et).forEach(function(e) {
                    Object.keys(et[e]).forEach(function(t) {
                        n.prototype[t] || (n.prototype[t] = et[e][t])
                    })
                });
                var s = this;
                void 0 === s.modules && (s.modules = {}),
                Object.keys(s.modules).forEach(function(e) {
                    var t = s.modules[e];
                    if (t.params) {
                        var n = Object.keys(t.params)[0]
                          , i = t.params[n];
                        if ("object" != typeof i)
                            return;
                        if (!(n in d && "enabled"in i))
                            return;
                        !0 === d[n] && (d[n] = {
                            enabled: !0
                        }),
                        "object" != typeof d[n] || "enabled"in d[n] || (d[n].enabled = !0),
                        d[n] || (d[n] = {
                            enabled: !1
                        })
                    }
                });
                var l = K.extend({}, Je);
                s.useModulesParams(l),
                s.params = K.extend({}, l, tt, d),
                s.originalParams = K.extend({}, s.params),
                s.passedParams = K.extend({}, d);
                var u = e(s.params.el);
                if (r = u[0]) {
                    if (u.length > 1) {
                        var c = [];
                        return u.each(function(e, t) {
                            var i = K.extend({}, d, {
                                el: t
                            });
                            c.push(new n(i))
                        }),
                        c
                    }
                    r.swiper = s,
                    u.data("swiper", s);
                    var f = u.children("." + s.params.wrapperClass);
                    return K.extend(s, {
                        $el: u,
                        el: r,
                        $wrapperEl: f,
                        wrapperEl: f[0],
                        classNames: [],
                        slides: e(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === s.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === s.params.direction
                        },
                        rtl: "horizontal" === s.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === u.css("direction")),
                        wrongRTL: "-webkit-box" === f.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEvents: function() {
                            var e = ["touchstart", "touchmove", "touchend"]
                              , t = ["mousedown", "mousemove", "mouseup"];
                            return q.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : q.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                            {
                                start: q.touch || !s.params.simulateTouch ? e[0] : t[0],
                                move: q.touch || !s.params.simulateTouch ? e[1] : t[1],
                                end: q.touch || !s.params.simulateTouch ? e[2] : t[2]
                            }
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: K.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }),
                    s.useModules(),
                    s.params.init && s.init(),
                    s
                }
            }
            t && (n.__proto__ = t),
            n.prototype = Object.create(t && t.prototype),
            n.prototype.constructor = n;
            var i = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return n.prototype.slidesPerViewDynamic = function() {
                var e = this
                  , t = e.params
                  , n = e.slides
                  , i = e.slidesGrid
                  , a = e.size
                  , r = e.activeIndex
                  , d = 1;
                if (t.centeredSlides) {
                    for (var o, s = n[r].swiperSlideSize, l = r + 1; l < n.length; l += 1)
                        n[l] && !o && (s += n[l].swiperSlideSize,
                        d += 1,
                        s > a && (o = !0));
                    for (var u = r - 1; u >= 0; u -= 1)
                        n[u] && !o && (s += n[u].swiperSlideSize,
                        d += 1,
                        s > a && (o = !0))
                } else
                    for (var c = r + 1; c < n.length; c += 1)
                        i[c] - i[r] < a && (d += 1);
                return d
            }
            ,
            n.prototype.update = function() {
                function e() {
                    var e = t.rtl ? -1 * t.translate : t.translate
                      , n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(n),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
                var t = this;
                if (t && !t.destroyed) {
                    t.updateSize(),
                    t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses();
                    t.params.freeMode ? (e(),
                    t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
                    t.emit("update")
                }
            }
            ,
            n.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"),
                e.params.breakpoints && e.setBreakpoint(),
                e.addClasses(),
                e.params.loop && e.loopCreate(),
                e.updateSize(),
                e.updateSlides(),
                e.params.watchOverflow && e.checkOverflow(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                e.attachEvents(),
                e.initialized = !0,
                e.emit("init"))
            }
            ,
            n.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                var n = this
                  , i = n.params
                  , a = n.$el
                  , r = n.$wrapperEl
                  , d = n.slides;
                n.emit("beforeDestroy"),
                n.initialized = !1,
                n.detachEvents(),
                i.loop && n.loopDestroy(),
                t && (n.removeClasses(),
                a.removeAttr("style"),
                r.removeAttr("style"),
                d && d.length && d.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
                n.emit("destroy"),
                Object.keys(n.eventsListeners).forEach(function(e) {
                    n.off(e)
                }),
                !1 !== e && (n.$el[0].swiper = null,
                n.$el.data("swiper", null),
                K.deleteProps(n)),
                n.destroyed = !0
            }
            ,
            n.extendDefaults = function(e) {
                K.extend(tt, e)
            }
            ,
            i.extendedDefaults.get = function() {
                return tt
            }
            ,
            i.defaults.get = function() {
                return Je
            }
            ,
            i.Class.get = function() {
                return t
            }
            ,
            i.$.get = function() {
                return e
            }
            ,
            Object.defineProperties(n, i),
            n
        }(Q)
          , it = {
            name: "device",
            proto: {
                device: He
            },
            static: {
                device: He
            }
        }
          , at = {
            name: "support",
            proto: {
                support: q
            },
            static: {
                support: q
            }
        }
          , rt = function() {
            return {
                isSafari: function() {
                    var e = U.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(U.navigator.userAgent)
            }
        }()
          , dt = {
            name: "browser",
            proto: {
                browser: rt
            },
            static: {
                browser: rt
            }
        }
          , ot = {
            name: "resize",
            create: function() {
                var e = this;
                K.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                            e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    U.addEventListener("resize", e.resize.resizeHandler),
                    U.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                },
                destroy: function() {
                    var e = this;
                    U.removeEventListener("resize", e.resize.resizeHandler),
                    U.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        }
          , st = {
            func: U.MutationObserver || U.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var n = this
                  , i = st.func
                  , a = new i(function(e) {
                    e.forEach(function(e) {
                        n.emit("observerUpdate", e)
                    })
                }
                );
                a.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }),
                n.observer.observers.push(a)
            },
            init: function() {
                var e = this;
                if (q.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), n = 0; n < t.length; n += 1)
                            e.observer.attach(t[n]);
                    e.observer.attach(e.$el[0], {
                        childList: !1
                    }),
                    e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                var e = this;
                e.observer.observers.forEach(function(e) {
                    e.disconnect()
                }),
                e.observer.observers = []
            }
        }
          , lt = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    observer: {
                        init: st.init.bind(e),
                        attach: st.attach.bind(e),
                        destroy: st.destroy.bind(e),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        }
          , ut = {
            update: function(e) {
                function t() {
                    n.updateSlides(),
                    n.updateProgress(),
                    n.updateSlidesClasses(),
                    n.lazy && n.params.lazy.enabled && n.lazy.load()
                }
                var n = this
                  , i = n.params
                  , a = i.slidesPerView
                  , r = i.slidesPerGroup
                  , d = i.centeredSlides
                  , o = n.virtual
                  , s = o.from
                  , l = o.to
                  , u = o.slides
                  , c = o.slidesGrid
                  , f = o.renderSlide
                  , h = o.offset;
                n.updateActiveIndex();
                var p, m = n.activeIndex || 0;
                p = n.rtl && n.isHorizontal() ? "right" : n.isHorizontal() ? "left" : "top";
                var v, g;
                d ? (v = Math.floor(a / 2) + r,
                g = Math.floor(a / 2) + r) : (v = a + (r - 1),
                g = r);
                var $ = Math.max((m || 0) - g, 0)
                  , b = Math.min((m || 0) + v, u.length - 1)
                  , T = (n.slidesGrid[$] || 0) - (n.slidesGrid[0] || 0);
                if (K.extend(n.virtual, {
                    from: $,
                    to: b,
                    offset: T,
                    slidesGrid: n.slidesGrid
                }),
                s === $ && l === b && !e)
                    return n.slidesGrid !== c && T !== h && n.slides.css(p, T + "px"),
                    void n.updateProgress();
                if (n.params.virtual.renderExternal)
                    return n.params.virtual.renderExternal.call(n, {
                        offset: T,
                        from: $,
                        to: b,
                        slides: function() {
                            for (var e = [], t = $; t <= b; t += 1)
                                e.push(u[t]);
                            return e
                        }()
                    }),
                    void t();
                var y = []
                  , S = [];
                if (e)
                    n.$wrapperEl.find("." + n.params.slideClass).remove();
                else
                    for (var C = s; C <= l; C += 1)
                        (C < $ || C > b) && n.$wrapperEl.find("." + n.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
                for (var P = 0; P < u.length; P += 1)
                    P >= $ && P <= b && (void 0 === l || e ? S.push(P) : (P > l && S.push(P),
                    P < s && y.push(P)));
                S.forEach(function(e) {
                    n.$wrapperEl.append(f(u[e], e))
                }),
                y.sort(function(e, t) {
                    return e < t
                }).forEach(function(e) {
                    n.$wrapperEl.prepend(f(u[e], e))
                }),
                n.$wrapperEl.children(".swiper-slide").css(p, T + "px"),
                t()
            },
            renderSlide: function(t, n) {
                var i = this
                  , a = i.params.virtual;
                if (a.cache && i.virtual.cache[n])
                    return i.virtual.cache[n];
                var r = e(a.renderSlide ? a.renderSlide.call(i, t, n) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", n),
                a.cache && (i.virtual.cache[n] = r),
                r
            },
            appendSlide: function(e) {
                var t = this;
                t.virtual.slides.push(e),
                t.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this;
                if (t.virtual.slides.unshift(e),
                t.params.virtual.cache) {
                    var n = t.virtual.cache
                      , i = {};
                    Object.keys(n).forEach(function(e) {
                        i[e + 1] = n[e]
                    }),
                    t.virtual.cache = i
                }
                t.virtual.update(!0),
                t.slideNext(0)
            }
        }
          , ct = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    virtual: {
                        update: ut.update.bind(e),
                        appendSlide: ut.appendSlide.bind(e),
                        prependSlide: ut.prependSlide.bind(e),
                        renderSlide: ut.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        K.extend(e.params, t),
                        K.extend(e.originalParams, t),
                        e.virtual.update()
                    }
                },
                setTranslate: function() {
                    var e = this;
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        }
          , ft = {
            handle: function(e) {
                var t = this
                  , n = e;
                n.originalEvent && (n = n.originalEvent);
                var i = n.keyCode || n.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i))
                    return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i))
                    return !1;
                if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || Y.activeElement && Y.activeElement.nodeName && ("input" === Y.activeElement.nodeName.toLowerCase() || "textarea" === Y.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === i || 39 === i || 38 === i || 40 === i)) {
                        var a = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                            return;
                        var r = {
                            left: U.pageXOffset,
                            top: U.pageYOffset
                        }
                          , d = U.innerWidth
                          , o = U.innerHeight
                          , s = t.$el.offset();
                        t.rtl && (s.left -= t.$el[0].scrollLeft);
                        for (var l = [[s.left, s.top], [s.left + t.width, s.top], [s.left, s.top + t.height], [s.left + t.width, s.top + t.height]], u = 0; u < l.length; u += 1) {
                            var c = l[u];
                            c[0] >= r.left && c[0] <= r.left + d && c[1] >= r.top && c[1] <= r.top + o && (a = !0)
                        }
                        if (!a)
                            return
                    }
                    t.isHorizontal() ? (37 !== i && 39 !== i || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                    (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(),
                    (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                    40 === i && t.slideNext(),
                    38 === i && t.slidePrev()),
                    t.emit("keyPress", i)
                }
            },
            enable: function() {
                var t = this;
                t.keyboard.enabled || (e(Y).on("keydown", t.keyboard.handle),
                t.keyboard.enabled = !0)
            },
            disable: function() {
                var t = this;
                t.keyboard.enabled && (e(Y).off("keydown", t.keyboard.handle),
                t.keyboard.enabled = !1)
            }
        }
          , ht = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    keyboard: {
                        enabled: !1,
                        enable: ft.enable.bind(e),
                        disable: ft.disable.bind(e),
                        handle: ft.handle.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy: function() {
                    var e = this;
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        }
          , pt = {
            lastScrollTime: K.now(),
            event: function() {
                return U.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : V() ? "wheel" : "mousewheel"
            }(),
            normalize: function(e) {
                var t = 0
                  , n = 0
                  , i = 0
                  , a = 0;
                return "detail"in e && (n = e.detail),
                "wheelDelta"in e && (n = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
                n = 0),
                i = 10 * t,
                a = 10 * n,
                "deltaY"in e && (a = e.deltaY),
                "deltaX"in e && (i = e.deltaX),
                (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
                a *= 40) : (i *= 800,
                a *= 800)),
                i && !t && (t = i < 1 ? -1 : 1),
                a && !n && (n = a < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: n,
                    pixelX: i,
                    pixelY: a
                }
            },
            handle: function(e) {
                var t = e
                  , n = this
                  , i = n.params.mousewheel;
                t.originalEvent && (t = t.originalEvent);
                var a = 0
                  , r = n.rtl ? -1 : 1
                  , d = pt.normalize(t);
                if (i.forceToAxis)
                    if (n.isHorizontal()) {
                        if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY)))
                            return !0;
                        a = d.pixelX * r
                    } else {
                        if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX)))
                            return !0;
                        a = d.pixelY
                    }
                else
                    a = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * r : -d.pixelY;
                if (0 === a)
                    return !0;
                if (i.invert && (a = -a),
                n.params.freeMode) {
                    var o = n.getTranslate() + a * i.sensitivity
                      , s = n.isBeginning
                      , l = n.isEnd;
                    if (o >= n.minTranslate() && (o = n.minTranslate()),
                    o <= n.maxTranslate() && (o = n.maxTranslate()),
                    n.setTransition(0),
                    n.setTranslate(o),
                    n.updateProgress(),
                    n.updateActiveIndex(),
                    n.updateSlidesClasses(),
                    (!s && n.isBeginning || !l && n.isEnd) && n.updateSlidesClasses(),
                    n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout),
                    n.mousewheel.timeout = K.nextTick(function() {
                        n.slideReset()
                    }, 300)),
                    n.emit("scroll", t),
                    n.params.autoplay && n.params.autoplayDisableOnInteraction && n.stopAutoplay(),
                    0 === o || o === n.maxTranslate())
                        return !0
                } else {
                    if (K.now() - n.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (n.isEnd && !n.params.loop || n.animating) {
                                if (i.releaseOnEdges)
                                    return !0
                            } else
                                n.slideNext(),
                                n.emit("scroll", t);
                        else if (n.isBeginning && !n.params.loop || n.animating) {
                            if (i.releaseOnEdges)
                                return !0
                        } else
                            n.slidePrev(),
                            n.emit("scroll", t);
                    n.mousewheel.lastScrollTime = (new U.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                !1
            },
            enable: function() {
                var t = this;
                if (!pt.event)
                    return !1;
                if (t.mousewheel.enabled)
                    return !1;
                var n = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)),
                n.on(pt.event, t.mousewheel.handle),
                t.mousewheel.enabled = !0,
                !0
            },
            disable: function() {
                var t = this;
                if (!pt.event)
                    return !1;
                if (!t.mousewheel.enabled)
                    return !1;
                var n = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)),
                n.off(pt.event, t.mousewheel.handle),
                t.mousewheel.enabled = !1,
                !0
            }
        }
          , mt = {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: pt.enable.bind(e),
                        disable: pt.disable.bind(e),
                        handle: pt.handle.bind(e),
                        lastScrollTime: K.now()
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy: function() {
                    var e = this;
                    e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }
          , vt = {
            update: function() {
                var e = this
                  , t = e.params.navigation;
                if (!e.params.loop) {
                    var n = e.navigation
                      , i = n.$nextEl
                      , a = n.$prevEl;
                    a && a.length > 0 && (e.isBeginning ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass),
                    a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                    i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass),
                    i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            init: function() {
                var t = this
                  , n = t.params.navigation;
                if (n.nextEl || n.prevEl) {
                    var i, a;
                    n.nextEl && (i = e(n.nextEl),
                    t.params.uniqueNavElements && "string" == typeof n.nextEl && i.length > 1 && 1 === t.$el.find(n.nextEl).length && (i = t.$el.find(n.nextEl))),
                    n.prevEl && (a = e(n.prevEl),
                    t.params.uniqueNavElements && "string" == typeof n.prevEl && a.length > 1 && 1 === t.$el.find(n.prevEl).length && (a = t.$el.find(n.prevEl))),
                    i && i.length > 0 && i.on("click", function(e) {
                        e.preventDefault(),
                        t.isEnd && !t.params.loop || t.slideNext()
                    }),
                    a && a.length > 0 && a.on("click", function(e) {
                        e.preventDefault(),
                        t.isBeginning && !t.params.loop || t.slidePrev()
                    }),
                    K.extend(t.navigation, {
                        $nextEl: i,
                        nextEl: i && i[0],
                        $prevEl: a,
                        prevEl: a && a[0]
                    })
                }
            },
            destroy: function() {
                var e = this
                  , t = e.navigation
                  , n = t.$nextEl
                  , i = t.$prevEl;
                n && n.length && (n.off("click"),
                n.removeClass(e.params.navigation.disabledClass)),
                i && i.length && (i.off("click"),
                i.removeClass(e.params.navigation.disabledClass))
            }
        }
          , gt = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    navigation: {
                        init: vt.init.bind(e),
                        update: vt.update.bind(e),
                        destroy: vt.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.navigation.init(),
                    e.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(t) {
                    var n = this
                      , i = n.navigation
                      , a = i.$nextEl
                      , r = i.$prevEl;
                    !n.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(a) || (a && a.toggleClass(n.params.navigation.hiddenClass),
                    r && r.toggleClass(n.params.navigation.hiddenClass))
                }
            }
        }
          , $t = {
            update: function() {
                var t = this
                  , n = t.rtl
                  , i = t.params.pagination;
                if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var a, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, d = t.pagination.$el, o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (a = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup),
                    a > r - 1 - 2 * t.loopedSlides && (a -= r - 2 * t.loopedSlides),
                    a > o - 1 && (a -= o),
                    a < 0 && "bullets" !== t.params.paginationType && (a = o + a)) : a = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
                    "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        var s = t.pagination.bullets;
                        if (i.dynamicBullets && (t.pagination.bulletSize = s.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                        d.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")),
                        s.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"),
                        d.length > 1)
                            s.each(function(t, n) {
                                var r = e(n);
                                r.index() === a && (r.addClass(i.bulletActiveClass),
                                i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                                r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                            });
                        else {
                            var l = s.eq(a);
                            l.addClass(i.bulletActiveClass),
                            i.dynamicBullets && (l.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                            l.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }
                        if (i.dynamicBullets) {
                            var u = Math.min(s.length, 5)
                              , c = (t.pagination.bulletSize * u - t.pagination.bulletSize) / 2 - a * t.pagination.bulletSize
                              , f = n ? "right" : "left";
                            s.css(t.isHorizontal() ? f : "top", c + "px")
                        }
                    }
                    if ("fraction" === i.type && (d.find("." + i.currentClass).text(a + 1),
                    d.find("." + i.totalClass).text(o)),
                    "progressbar" === i.type) {
                        var h = (a + 1) / o
                          , p = h
                          , m = 1;
                        t.isHorizontal() || (m = h,
                        p = 1),
                        d.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + p + ") scaleY(" + m + ")").transition(t.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (d.html(i.renderCustom(t, a + 1, o)),
                    t.emit("paginationRender", t, d[0])) : t.emit("paginationUpdate", t, d[0]),
                    d[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            },
            render: function() {
                var e = this
                  , t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                      , i = e.pagination.$el
                      , a = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, d = 0; d < r; d += 1)
                            t.renderBullet ? a += t.renderBullet.call(e, d, t.bulletClass) : a += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(a),
                        e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                    i.html(a)),
                    "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                    i.html(a)),
                    "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var t = this
                  , n = t.params.pagination;
                if (n.el) {
                    var i = e(n.el);
                    0 !== i.length && (t.params.uniqueNavElements && "string" == typeof n.el && i.length > 1 && 1 === t.$el.find(n.el).length && (i = t.$el.find(n.el)),
                    "bullets" === n.type && n.clickable && i.addClass(n.clickableClass),
                    i.addClass(n.modifierClass + n.type),
                    "bullets" === n.type && n.dynamicBullets && i.addClass("" + n.modifierClass + n.type + "-dynamic"),
                    n.clickable && i.on("click", "." + n.bulletClass, function(n) {
                        n.preventDefault();
                        var i = e(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (i += t.loopedSlides),
                        t.slideTo(i)
                    }),
                    K.extend(t.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this
                  , t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = e.pagination.$el;
                    n.removeClass(t.hiddenClass),
                    n.removeClass(t.modifierClass + t.type),
                    e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                    t.clickable && n.off("click", "." + t.bulletClass)
                }
            }
        }
          , bt = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    type: "bullets",
                    dynamicBullets: !1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    pagination: {
                        init: $t.init.bind(e),
                        render: $t.render.bind(e),
                        update: $t.update.bind(e),
                        destroy: $t.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.pagination.init(),
                    e.pagination.render(),
                    e.pagination.update()
                },
                activeIndexChange: function() {
                    var e = this;
                    e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
                },
                snapIndexChange: function() {
                    var e = this;
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange: function() {
                    var e = this;
                    e.params.loop && (e.pagination.render(),
                    e.pagination.update())
                },
                snapGridLengthChange: function() {
                    var e = this;
                    e.params.loop || (e.pagination.render(),
                    e.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(t) {
                    var n = this;
                    n.params.pagination.el && n.params.pagination.hideOnClick && n.pagination.$el.length > 0 && !e(t.target).hasClass(n.params.pagination.bulletClass) && n.pagination.$el.toggleClass(n.params.pagination.hiddenClass)
                }
            }
        }
          , Tt = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar
                      , n = e.rtl
                      , i = e.progress
                      , a = t.dragSize
                      , r = t.trackSize
                      , d = t.$dragEl
                      , o = t.$el
                      , s = e.params.scrollbar
                      , l = a
                      , u = (r - a) * i;
                    n && e.isHorizontal() ? (u = -u,
                    u > 0 ? (l = a - u,
                    u = 0) : -u + a > r && (l = r + u)) : u < 0 ? (l = a + u,
                    u = 0) : u + a > r && (l = r - u),
                    e.isHorizontal() ? (q.transforms3d ? d.transform("translate3d(" + u + "px, 0, 0)") : d.transform("translateX(" + u + "px)"),
                    d[0].style.width = l + "px") : (q.transforms3d ? d.transform("translate3d(0px, " + u + "px, 0)") : d.transform("translateY(" + u + "px)"),
                    d[0].style.height = l + "px"),
                    s.hide && (clearTimeout(e.scrollbar.timeout),
                    o[0].style.opacity = 1,
                    e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0,
                        o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                var t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar
                      , n = t.$dragEl
                      , i = t.$el;
                    n[0].style.width = "",
                    n[0].style.height = "";
                    var a, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, d = e.size / e.virtualSize, o = d * (r / e.size);
                    a = "auto" === e.params.scrollbar.dragSize ? r * d : parseInt(e.params.scrollbar.dragSize, 10),
                    e.isHorizontal() ? n[0].style.width = a + "px" : n[0].style.height = a + "px",
                    i[0].style.display = d >= 1 ? "none" : "",
                    e.params.scrollbarHide && (i[0].style.opacity = 0),
                    K.extend(t, {
                        trackSize: r,
                        divider: d,
                        moveDivider: o,
                        dragSize: a
                    }),
                    t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, n = this, i = n.scrollbar, a = i.$el, r = i.dragSize, d = i.trackSize;
                t = n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                var o;
                o = (t - a.offset()[n.isHorizontal() ? "left" : "top"] - r / 2) / (d - r),
                o = Math.max(Math.min(o, 1), 0),
                n.rtl && (o = 1 - o);
                var s = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * o;
                n.updateProgress(s),
                n.setTranslate(s),
                n.updateActiveIndex(),
                n.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this
                  , n = t.params.scrollbar
                  , i = t.scrollbar
                  , a = t.$wrapperEl
                  , r = i.$el
                  , d = i.$dragEl;
                t.scrollbar.isTouched = !0,
                e.preventDefault(),
                e.stopPropagation(),
                a.transition(100),
                d.transition(100),
                i.setDragPosition(e),
                clearTimeout(t.scrollbar.dragTimeout),
                r.transition(0),
                n.hide && r.css("opacity", 1),
                t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this
                  , n = t.scrollbar
                  , i = t.$wrapperEl
                  , a = n.$el
                  , r = n.$dragEl;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                n.setDragPosition(e),
                i.transition(0),
                a.transition(0),
                r.transition(0),
                t.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this
                  , n = t.params.scrollbar
                  , i = t.scrollbar
                  , a = i.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
                n.hide && (clearTimeout(t.scrollbar.dragTimeout),
                t.scrollbar.dragTimeout = K.nextTick(function() {
                    a.css("opacity", 0),
                    a.transition(400)
                }, 1e3)),
                t.emit("scrollbarDragEnd", e),
                n.snapOnRelease && t.slideReset())
            },
            enableDraggable: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var n = t.scrollbar
                      , i = n.$el
                      , a = q.touch ? i[0] : document;
                    i.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart),
                    e(a).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove),
                    e(a).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
                }
            },
            disableDraggable: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var n = t.scrollbar
                      , i = n.$el
                      , a = q.touch ? i[0] : document;
                    i.off(t.scrollbar.dragEvents.start),
                    e(a).off(t.scrollbar.dragEvents.move),
                    e(a).off(t.scrollbar.dragEvents.end)
                }
            },
            init: function() {
                var t = this;
                if (t.params.scrollbar.el) {
                    var n = t.scrollbar
                      , i = t.$el
                      , a = t.touchEvents
                      , r = t.params.scrollbar
                      , d = e(r.el);
                    t.params.uniqueNavElements && "string" == typeof r.el && d.length > 1 && 1 === i.find(r.el).length && (d = i.find(r.el));
                    var o = d.find(".swiper-scrollbar-drag");
                    0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'),
                    d.append(o)),
                    t.scrollbar.dragEvents = function() {
                        return !1 !== t.params.simulateTouch || q.touch ? a : {
                            start: "mousedown",
                            move: "mousemove",
                            end: "mouseup"
                        }
                    }(),
                    K.extend(n, {
                        $el: d,
                        el: d[0],
                        $dragEl: o,
                        dragEl: o[0]
                    }),
                    r.draggable && n.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        }
          , yt = {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock"
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    scrollbar: {
                        init: Tt.init.bind(e),
                        destroy: Tt.destroy.bind(e),
                        updateSize: Tt.updateSize.bind(e),
                        setTranslate: Tt.setTranslate.bind(e),
                        setTransition: Tt.setTransition.bind(e),
                        enableDraggable: Tt.enableDraggable.bind(e),
                        disableDraggable: Tt.disableDraggable.bind(e),
                        setDragPosition: Tt.setDragPosition.bind(e),
                        onDragStart: Tt.onDragStart.bind(e),
                        onDragMove: Tt.onDragMove.bind(e),
                        onDragEnd: Tt.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.scrollbar.init(),
                    e.scrollbar.updateSize(),
                    e.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }
          , St = {
            setTransform: function(t, n) {
                var i = this
                  , a = i.rtl
                  , r = e(t)
                  , d = a ? -1 : 1
                  , o = r.attr("data-swiper-parallax") || "0"
                  , s = r.attr("data-swiper-parallax-x")
                  , l = r.attr("data-swiper-parallax-y")
                  , u = r.attr("data-swiper-parallax-scale")
                  , c = r.attr("data-swiper-parallax-opacity");
                if (s || l ? (s = s || "0",
                l = l || "0") : i.isHorizontal() ? (s = o,
                l = "0") : (l = o,
                s = "0"),
                s = s.indexOf("%") >= 0 ? parseInt(s, 10) * n * d + "%" : s * n * d + "px",
                l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n + "%" : l * n + "px",
                void 0 !== c && null !== c) {
                    var f = c - (c - 1) * (1 - Math.abs(n));
                    r[0].style.opacity = f
                }
                if (void 0 === u || null === u)
                    r.transform("translate3d(" + s + ", " + l + ", 0px)");
                else {
                    var h = u - (u - 1) * (1 - Math.abs(n));
                    r.transform("translate3d(" + s + ", " + l + ", 0px) scale(" + h + ")")
                }
            },
            setTranslate: function() {
                var t = this
                  , n = t.$el
                  , i = t.slides
                  , a = t.progress
                  , r = t.snapGrid;
                n.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) {
                    t.parallax.setTransform(n, a)
                }),
                i.each(function(n, i) {
                    var d = i.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (d += Math.ceil(n / 2) - a * (r.length - 1)),
                    d = Math.min(Math.max(d, -1), 1),
                    e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) {
                        t.parallax.setTransform(n, d)
                    })
                })
            },
            setTransition: function(t) {
                void 0 === t && (t = this.params.speed),
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(n, i) {
                    var a = e(i)
                      , r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (r = 0),
                    a.transition(r)
                })
            }
        }
          , Ct = {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    parallax: {
                        setTransform: St.setTransform.bind(e),
                        setTranslate: St.setTranslate.bind(e),
                        setTransition: St.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.watchSlidesProgress = !0
                },
                init: function() {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate()
                },
                setTranslate: function() {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    t.params.parallax && t.parallax.setTransition(e)
                }
            }
        }
          , Pt = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2)
                    return 1;
                var t = e.targetTouches[0].pageX
                  , n = e.targetTouches[0].pageY
                  , i = e.targetTouches[1].pageX
                  , a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - n, 2))
            },
            onGestureStart: function(t) {
                var n = this
                  , i = n.params.zoom
                  , a = n.zoom
                  , r = a.gesture;
                if (a.fakeGestureTouched = !1,
                a.fakeGestureMoved = !1,
                !q.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                        return;
                    a.fakeGestureTouched = !0,
                    r.scaleStart = Pt.getDistanceBetweenTouches(t)
                }
                if (!(r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this),
                0 === r.$slideEl.length && (r.$slideEl = n.slides.eq(n.activeIndex)),
                r.$imageEl = r.$slideEl.find("img, svg, canvas"),
                r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass),
                r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
                0 !== r.$imageWrapEl.length)))
                    return void (r.$imageEl = void 0);
                r.$imageEl.transition(0),
                n.zoom.isScaling = !0
            },
            onGestureChange: function(e) {
                var t = this
                  , n = t.params.zoom
                  , i = t.zoom
                  , a = i.gesture;
                if (!q.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                        return;
                    i.fakeGestureMoved = !0,
                    a.scaleMove = Pt.getDistanceBetweenTouches(e)
                }
                a.$imageEl && 0 !== a.$imageEl.length && (q.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = a.scaleMove / a.scaleStart * i.currentScale,
                i.scale > a.maxRatio && (i.scale = a.maxRatio - 1 + Math.pow(i.scale - a.maxRatio + 1, .5)),
                i.scale < n.minRatio && (i.scale = n.minRatio + 1 - Math.pow(n.minRatio - i.scale + 1, .5)),
                a.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this
                  , n = t.params.zoom
                  , i = t.zoom
                  , a = i.gesture;
                if (!q.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                        return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !He.android)
                        return;
                    i.fakeGestureTouched = !1,
                    i.fakeGestureMoved = !1
                }
                a.$imageEl && 0 !== a.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, a.maxRatio), n.minRatio),
                a.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                i.currentScale = i.scale,
                i.isScaling = !1,
                1 === i.scale && (a.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this
                  , n = t.zoom
                  , i = n.gesture
                  , a = n.image;
                i.$imageEl && 0 !== i.$imageEl.length && (a.isTouched || (He.android && e.preventDefault(),
                a.isTouched = !0,
                a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this
                  , n = t.zoom
                  , i = n.gesture
                  , a = n.image
                  , r = n.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
                a.isTouched && i.$slideEl)) {
                    a.isMoved || (a.width = i.$imageEl[0].offsetWidth,
                    a.height = i.$imageEl[0].offsetHeight,
                    a.startX = K.getTranslate(i.$imageWrapEl[0], "x") || 0,
                    a.startY = K.getTranslate(i.$imageWrapEl[0], "y") || 0,
                    i.slideWidth = i.$slideEl[0].offsetWidth,
                    i.slideHeight = i.$slideEl[0].offsetHeight,
                    i.$imageWrapEl.transition(0),
                    t.rtl && (a.startX = -a.startX),
                    t.rtl && (a.startY = -a.startY));
                    var d = a.width * n.scale
                      , o = a.height * n.scale;
                    if (!(d < i.slideWidth && o < i.slideHeight)) {
                        if (a.minX = Math.min(i.slideWidth / 2 - d / 2, 0),
                        a.maxX = -a.minX,
                        a.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                        a.maxY = -a.minY,
                        a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                        !a.isMoved && !n.isScaling) {
                            if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x))
                                return void (a.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y))
                                return void (a.isTouched = !1)
                        }
                        e.preventDefault(),
                        e.stopPropagation(),
                        a.isMoved = !0,
                        a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX,
                        a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY,
                        a.currentX < a.minX && (a.currentX = a.minX + 1 - Math.pow(a.minX - a.currentX + 1, .8)),
                        a.currentX > a.maxX && (a.currentX = a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, .8)),
                        a.currentY < a.minY && (a.currentY = a.minY + 1 - Math.pow(a.minY - a.currentY + 1, .8)),
                        a.currentY > a.maxY && (a.currentY = a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, .8)),
                        r.prevPositionX || (r.prevPositionX = a.touchesCurrent.x),
                        r.prevPositionY || (r.prevPositionY = a.touchesCurrent.y),
                        r.prevTime || (r.prevTime = Date.now()),
                        r.x = (a.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                        r.y = (a.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                        Math.abs(a.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                        Math.abs(a.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                        r.prevPositionX = a.touchesCurrent.x,
                        r.prevPositionY = a.touchesCurrent.y,
                        r.prevTime = Date.now(),
                        i.$imageWrapEl.transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this
                  , t = e.zoom
                  , n = t.gesture
                  , i = t.image
                  , a = t.velocity;
                if (n.$imageEl && 0 !== n.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved)
                        return i.isTouched = !1,
                        void (i.isMoved = !1);
                    i.isTouched = !1,
                    i.isMoved = !1;
                    var r = 300
                      , d = 300
                      , o = a.x * r
                      , s = i.currentX + o
                      , l = a.y * d
                      , u = i.currentY + l;
                    0 !== a.x && (r = Math.abs((s - i.currentX) / a.x)),
                    0 !== a.y && (d = Math.abs((u - i.currentY) / a.y));
                    var c = Math.max(r, d);
                    i.currentX = s,
                    i.currentY = u;
                    var f = i.width * t.scale
                      , h = i.height * t.scale;
                    i.minX = Math.min(n.slideWidth / 2 - f / 2, 0),
                    i.maxX = -i.minX,
                    i.minY = Math.min(n.slideHeight / 2 - h / 2, 0),
                    i.maxY = -i.minY,
                    i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                    i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                    n.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this
                  , t = e.zoom
                  , n = t.gesture;
                n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                n.$imageWrapEl.transform("translate3d(0,0,0)"),
                n.$slideEl = void 0,
                n.$imageEl = void 0,
                n.$imageWrapEl = void 0,
                t.scale = 1,
                t.currentScale = 1)
            },
            toggle: function(e) {
                var t = this
                  , n = t.zoom;
                n.scale && 1 !== n.scale ? n.out() : n.in(e)
            },
            in: function(t) {
                var n = this
                  , i = n.zoom
                  , a = n.params.zoom
                  , r = i.gesture
                  , d = i.image;
                if (r.$slideEl || (r.$slideEl = n.clickedSlide ? e(n.clickedSlide) : n.slides.eq(n.activeIndex),
                r.$imageEl = r.$slideEl.find("img, svg, canvas"),
                r.$imageWrapEl = r.$imageEl.parent("." + a.containerClass)),
                r.$imageEl && 0 !== r.$imageEl.length) {
                    r.$slideEl.addClass("" + a.zoomedSlideClass);
                    var o, s, l, u, c, f, h, p, m, v, g, $, b, T, y, S, C, P;
                    void 0 === d.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                    s = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = d.touchesStart.x,
                    s = d.touchesStart.y),
                    i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                    i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                    t ? (C = r.$slideEl[0].offsetWidth,
                    P = r.$slideEl[0].offsetHeight,
                    l = r.$slideEl.offset().left,
                    u = r.$slideEl.offset().top,
                    c = l + C / 2 - o,
                    f = u + P / 2 - s,
                    m = r.$imageEl[0].offsetWidth,
                    v = r.$imageEl[0].offsetHeight,
                    g = m * i.scale,
                    $ = v * i.scale,
                    b = Math.min(C / 2 - g / 2, 0),
                    T = Math.min(P / 2 - $ / 2, 0),
                    y = -b,
                    S = -T,
                    h = c * i.scale,
                    p = f * i.scale,
                    h < b && (h = b),
                    h > y && (h = y),
                    p < T && (p = T),
                    p > S && (p = S)) : (h = 0,
                    p = 0),
                    r.$imageWrapEl.transition(300).transform("translate3d(" + h + "px, " + p + "px,0)"),
                    r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
                }
            },
            out: function() {
                var t = this
                  , n = t.zoom
                  , i = t.params.zoom
                  , a = n.gesture;
                a.$slideEl || (a.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex),
                a.$imageEl = a.$slideEl.find("img, svg, canvas"),
                a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)),
                a.$imageEl && 0 !== a.$imageEl.length && (n.scale = 1,
                n.currentScale = 1,
                a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                a.$slideEl.removeClass("" + i.zoomedSlideClass),
                a.$slideEl = void 0)
            },
            enable: function() {
                var t = this
                  , n = t.zoom;
                if (!n.enabled) {
                    n.enabled = !0;
                    var i = t.slides
                      , a = !("touchstart" !== t.touchEvents.start || !q.passiveListener || !t.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    q.gestures ? (i.on("gesturestart", n.onGestureStart, a),
                    i.on("gesturechange", n.onGestureChange, a),
                    i.on("gestureend", n.onGestureEnd, a)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, n.onGestureStart, a),
                    i.on(t.touchEvents.move, n.onGestureChange, a),
                    i.on(t.touchEvents.end, n.onGestureEnd, a)),
                    t.slides.each(function(i, a) {
                        var r = e(a);
                        r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, n.onTouchMove)
                    })
                }
            },
            disable: function() {
                var t = this
                  , n = t.zoom;
                if (n.enabled) {
                    t.zoom.enabled = !1;
                    var i = t.slides
                      , a = !("touchstart" !== t.touchEvents.start || !q.passiveListener || !t.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    q.gestures ? (i.off("gesturestart", n.onGestureStart, a),
                    i.off("gesturechange", n.onGestureChange, a),
                    i.off("gestureend", n.onGestureEnd, a)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, n.onGestureStart, a),
                    i.off(t.touchEvents.move, n.onGestureChange, a),
                    i.off(t.touchEvents.end, n.onGestureEnd, a)),
                    t.slides.each(function(i, a) {
                        var r = e(a);
                        r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, n.onTouchMove)
                    })
                }
            }
        }
          , wt = {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this
                  , t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) {
                    t[n] = Pt[n].bind(e)
                }),
                K.extend(e, {
                    zoom: t
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    var t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                },
                transitionEnd: function() {
                    var e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                }
            }
        }
          , Et = {
            loadInSlide: function(t, n) {
                void 0 === n && (n = !0);
                var i = this
                  , a = i.params.lazy;
                if (void 0 !== t && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled
                      , d = r ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t)
                      , o = d.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                    !d.hasClass(a.elementClass) || d.hasClass(a.loadedClass) || d.hasClass(a.loadingClass) || (o = o.add(d[0])),
                    0 !== o.length && o.each(function(t, r) {
                        var o = e(r);
                        o.addClass(a.loadingClass);
                        var s = o.attr("data-background")
                          , l = o.attr("data-src")
                          , u = o.attr("data-srcset")
                          , c = o.attr("data-sizes");
                        i.loadImage(o[0], l || s, u, c, !1, function() {
                            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                if (s ? (o.css("background-image", 'url("' + s + '")'),
                                o.removeAttr("data-background")) : (u && (o.attr("srcset", u),
                                o.removeAttr("data-srcset")),
                                c && (o.attr("sizes", c),
                                o.removeAttr("data-sizes")),
                                l && (o.attr("src", l),
                                o.removeAttr("data-src"))),
                                o.addClass(a.loadedClass).removeClass(a.loadingClass),
                                d.find("." + a.preloaderClass).remove(),
                                i.params.loop && n) {
                                    var e = d.attr("data-swiper-slide-index");
                                    if (d.hasClass(i.params.slideDuplicateClass)) {
                                        var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var r = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(r.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", d[0], o[0])
                            }
                        }),
                        i.emit("lazyImageLoad", d[0], o[0])
                    })
                }
            },
            load: function() {
                function t(e) {
                    if (s) {
                        if (a.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                            return !0
                    } else if (d[e])
                        return !0;
                    return !1
                }
                function n(t) {
                    return s ? e(t).attr("data-swiper-slide-index") : e(t).index()
                }
                var i = this
                  , a = i.$wrapperEl
                  , r = i.params
                  , d = i.slides
                  , o = i.activeIndex
                  , s = i.virtual && r.virtual.enabled
                  , l = r.lazy
                  , u = r.slidesPerView;
                if ("auto" === u && (u = 0),
                i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
                i.params.watchSlidesVisibility)
                    a.children("." + r.slideVisibleClass).each(function(t, n) {
                        var a = s ? e(n).attr("data-swiper-slide-index") : e(n).index();
                        i.lazy.loadInSlide(a)
                    });
                else if (u > 1)
                    for (var c = o; c < o + u; c += 1)
                        t(c) && i.lazy.loadInSlide(c);
                else
                    i.lazy.loadInSlide(o);
                if (l.loadPrevNext)
                    if (u > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                        for (var f = l.loadPrevNextAmount, h = u, p = Math.min(o + h + Math.max(f, h), d.length), m = Math.max(o - Math.max(h, f), 0), v = o + u; v < p; v += 1)
                            t(v) && i.lazy.loadInSlide(v);
                        for (var g = m; g < o; g += 1)
                            t(g) && i.lazy.loadInSlide(g)
                    } else {
                        var $ = a.children("." + r.slideNextClass);
                        $.length > 0 && i.lazy.loadInSlide(n($));
                        var b = a.children("." + r.slidePrevClass);
                        b.length > 0 && i.lazy.loadInSlide(n(b))
                    }
            }
        }
          , xt = {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: Et.load.bind(e),
                        loadInSlide: Et.loadInSlide.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function() {
                    var e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                },
                scroll: function() {
                    var e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                resize: function() {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                scrollbarDragMove: function() {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart: function() {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function() {
                    var e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                }
            }
        }
          , Mt = {
            LinearSpline: function(e, t) {
                var n = function() {
                    var e, t, n;
                    return function(i, a) {
                        for (t = -1,
                        e = i.length; e - t > 1; )
                            n = e + t >> 1,
                            i[n] <= a ? t = n : e = n;
                        return e
                    }
                }();
                this.x = e,
                this.y = t,
                this.lastIndex = e.length - 1;
                var i, a;
                return this.interpolate = function(e) {
                    return e ? (a = n(this.x, e),
                    i = a - 1,
                    (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0
                }
                ,
                this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new Mt.LinearSpline(t.slidesGrid,e.slidesGrid) : new Mt.LinearSpline(t.snapGrid,e.snapGrid))
            },
            setTranslate: function(e, t) {
                function n(e) {
                    var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e),
                    a = -r.controller.spline.interpolate(-t)),
                    a && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()),
                    a = (t - r.minTranslate()) * i + e.minTranslate()),
                    r.params.controller.inverse && (a = e.maxTranslate() - a),
                    e.updateProgress(a),
                    e.setTranslate(a, r),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                var i, a, r = this, d = r.controller.control;
                if (Array.isArray(d))
                    for (var o = 0; o < d.length; o += 1)
                        d[o] !== t && d[o]instanceof nt && n(d[o]);
                else
                    d instanceof nt && t !== d && n(d)
            },
            setTransition: function(e, t) {
                function n(t) {
                    t.setTransition(e, a),
                    0 !== e && (t.transitionStart(),
                    t.$wrapperEl.transitionEnd(function() {
                        r && (t.params.loop && "slide" === a.params.controller.by && t.loopFix(),
                        t.transitionEnd())
                    }))
                }
                var i, a = this, r = a.controller.control;
                if (Array.isArray(r))
                    for (i = 0; i < r.length; i += 1)
                        r[i] !== t && r[i]instanceof nt && n(r[i]);
                else
                    r instanceof nt && t !== r && n(r)
            }
        }
          , At = {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: Mt.getInterpolateFunction.bind(e),
                        setTranslate: Mt.setTranslate.bind(e),
                        setTransition: Mt.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
                },
                resize: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
                },
                observerUpdate: function() {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
                },
                setTranslate: function(e, t) {
                    var n = this;
                    n.controller.control && n.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    var n = this;
                    n.controller.control && n.controller.setTransition(e, t)
                }
            }
        }
          , Gt = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"),
                e
            },
            addElRole: function(e, t) {
                return e.attr("role", t),
                e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t),
                e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0),
                e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1),
                e
            },
            onEnterKey: function(t) {
                var n = this
                  , i = n.params.a11y;
                if (13 === t.keyCode) {
                    var a = e(t.target);
                    n.navigation && n.navigation.$nextEl && a.is(n.navigation.$nextEl) && (n.isEnd && !n.params.loop || n.slideNext(),
                    n.isEnd ? n.a11y.notify(i.lastSlideMessage) : n.a11y.notify(i.nextSlideMessage)),
                    n.navigation && n.navigation.$prevEl && a.is(n.navigation.$prevEl) && (n.isBeginning && !n.params.loop || n.slidePrev(),
                    n.isBeginning ? n.a11y.notify(i.firstSlideMessage) : n.a11y.notify(i.prevSlideMessage)),
                    n.pagination && a.is("." + n.params.pagination.bulletClass) && a[0].click()
                }
            },
            notify: function(e) {
                var t = this
                  , n = t.a11y.liveRegion;
                0 !== n.length && (n.html(""),
                n.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation
                      , n = t.$nextEl
                      , i = t.$prevEl;
                    i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
                    n && n.length > 0 && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n))
                }
            },
            updatePagination: function() {
                var t = this
                  , n = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, a) {
                    var r = e(a);
                    t.a11y.makeElFocusable(r),
                    t.a11y.addElRole(r, "button"),
                    t.a11y.addElLabel(r, n.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, n, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
                t && (e.a11y.makeElFocusable(t),
                e.a11y.addElRole(t, "button"),
                e.a11y.addElLabel(t, i.nextSlideMessage),
                t.on("keydown", e.a11y.onEnterKey)),
                n && (e.a11y.makeElFocusable(n),
                e.a11y.addElRole(n, "button"),
                e.a11y.addElLabel(n, i.prevSlideMessage),
                n.on("keydown", e.a11y.onEnterKey)),
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e = this;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                var t, n;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
                t && t.off("keydown", e.a11y.onEnterKey),
                n && n.off("keydown", e.a11y.onEnterKey),
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            }
        }
          , Ot = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !1,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                K.extend(t, {
                    a11y: {
                        liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }),
                Object.keys(Gt).forEach(function(e) {
                    t.a11y[e] = Gt[e].bind(t)
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.a11y.enabled && (e.a11y.init(),
                    e.a11y.updateNavigation())
                },
                toEdge: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                fromEdge: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updatePagination()
                },
                destroy: function() {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.destroy()
                }
            }
        }
          , It = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!U.history || !U.history.pushState)
                        return e.params.history.enabled = !1,
                        void (e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0,
                    t.paths = It.getPathValues(),
                    (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                    e.params.history.replaceState || U.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                var e = this;
                e.params.history.replaceState || U.removeEventListener("popstate", e.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                var e = this;
                e.history.paths = It.getPathValues(),
                e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = U.location.pathname.slice(1).split("/").filter(function(e) {
                    return "" !== e
                })
                  , t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                var n = this;
                if (n.history.initialized && n.params.history.enabled) {
                    var i = n.slides.eq(t)
                      , a = It.slugify(i.attr("data-history"));
                    U.location.pathname.includes(e) || (a = e + "/" + a);
                    var r = U.history.state;
                    r && r.value === a || (n.params.history.replaceState ? U.history.replaceState({
                        value: a
                    }, null, a) : U.history.pushState({
                        value: a
                    }, null, a))
                }
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, n) {
                var i = this;
                if (t)
                    for (var a = 0, r = i.slides.length; a < r; a += 1) {
                        var d = i.slides.eq(a)
                          , o = It.slugify(d.attr("data-history"));
                        if (o === t && !d.hasClass(i.params.slideDuplicateClass)) {
                            var s = d.index();
                            i.slideTo(s, e, n)
                        }
                    }
                else
                    i.slideTo(0, e, n)
            }
        }
          , Nt = {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    history: {
                        init: It.init.bind(e),
                        setHistory: It.setHistory.bind(e),
                        setHistoryPopState: It.setHistoryPopState.bind(e),
                        scrollToSlide: It.scrollToSlide.bind(e),
                        destroy: It.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.history.enabled && e.history.init()
                },
                destroy: function() {
                    var e = this;
                    e.params.history.enabled && e.history.destroy()
                },
                transitionEnd: function() {
                    var e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        }
          , kt = {
            onHashCange: function() {
                var e = this
                  , t = Y.location.hash.replace("#", "");
                t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
            },
            setHash: function() {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && U.history && U.history.replaceState)
                        U.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex)
                          , n = t.attr("data-hash") || t.attr("data-history");
                        Y.location.hash = n || ""
                    }
            },
            init: function() {
                var t = this;
                if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                    t.hashNavigation.initialized = !0;
                    var n = Y.location.hash.replace("#", "");
                    if (n)
                        for (var i = 0, a = t.slides.length; i < a; i += 1) {
                            var r = t.slides.eq(i)
                              , d = r.attr("data-hash") || r.attr("data-history");
                            if (d === n && !r.hasClass(t.params.slideDuplicateClass)) {
                                var o = r.index();
                                t.slideTo(o, 0, t.params.runCallbacksOnInit, !0)
                            }
                        }
                    t.params.hashNavigation.watchState && e(U).on("hashchange", t.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                var t = this;
                t.params.hashNavigation.watchState && e(U).off("hashchange", t.hashNavigation.onHashCange)
            }
        }
          , Lt = {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: kt.init.bind(e),
                        destroy: kt.destroy.bind(e),
                        setHash: kt.setHash.bind(e),
                        onHashCange: kt.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy: function() {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    var e = this;
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                }
            }
        }
          , Ht = {
            run: function() {
                var e = this
                  , t = e.slides.eq(e.activeIndex)
                  , n = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                e.autoplay.timeout = K.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                    e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                    e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                }, n)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
                e.emit("autoplayStart"),
                e.autoplay.run(),
                !0))
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                e.autoplay.timeout = void 0),
                e.autoplay.running = !1,
                e.emit("autoplayStop"),
                !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                t.autoplay.paused = !0,
                0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
                    t && !t.destroyed && (t.autoplay.paused = !1,
                    t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                }) : (t.autoplay.paused = !1,
                t.autoplay.run())))
            }
        }
          , Dt = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: Ht.run.bind(e),
                        start: Ht.start.bind(e),
                        stop: Ht.stop.bind(e),
                        pause: Ht.pause.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    var e = this;
                    e.params.autoplay.enabled && e.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    var n = this;
                    n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
                },
                sliderFirstMove: function() {
                    var e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                destroy: function() {
                    var e = this;
                    e.autoplay.running && e.autoplay.stop()
                }
            }
        }
          , Bt = {
            setTranslate: function() {
                for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                    var i = e.slides.eq(n)
                      , a = i[0].swiperSlideOffset
                      , r = -a;
                    e.params.virtualTranslate || (r -= e.translate);
                    var d = 0;
                    e.isHorizontal() || (d = r,
                    r = 0);
                    var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: o
                    }).transform("translate3d(" + r + "px, " + d + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this
                  , n = t.slides
                  , i = t.$wrapperEl;
                if (n.transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    n.transitionEnd(function() {
                        if (!a && t && !t.destroyed) {
                            a = !0,
                            t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1)
                                i.trigger(e[n])
                        }
                    })
                }
            }
        }
          , Ft = {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    fadeEffect: {
                        setTranslate: Bt.setTranslate.bind(e),
                        setTransition: Bt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        K.extend(e.params, t),
                        K.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "fade" === e.params.effect && e.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "fade" === t.params.effect && t.fadeEffect.setTransition(e)
                }
            }
        }
          , _t = {
            setTranslate: function() {
                var t, n = this, i = n.$el, a = n.$wrapperEl, r = n.slides, d = n.width, o = n.height, s = n.rtl, l = n.size, u = n.params.cubeEffect, c = n.isHorizontal(), f = n.virtual && n.params.virtual.enabled, h = 0;
                u.shadow && (c ? (t = a.find(".swiper-cube-shadow"),
                0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                a.append(t)),
                t.css({
                    height: d + "px"
                })) : (t = i.find(".swiper-cube-shadow"),
                0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                i.append(t))));
                for (var p = 0; p < r.length; p += 1) {
                    var m = r.eq(p)
                      , v = p;
                    f && (v = parseInt(m.attr("data-swiper-slide-index"), 10));
                    var g = 90 * v
                      , $ = Math.floor(g / 360);
                    s && (g = -g,
                    $ = Math.floor(-g / 360));
                    var b = Math.max(Math.min(m[0].progress, 1), -1)
                      , T = 0
                      , y = 0
                      , S = 0;
                    v % 4 == 0 ? (T = 4 * -$ * l,
                    S = 0) : (v - 1) % 4 == 0 ? (T = 0,
                    S = 4 * -$ * l) : (v - 2) % 4 == 0 ? (T = l + 4 * $ * l,
                    S = l) : (v - 3) % 4 == 0 && (T = -l,
                    S = 3 * l + 4 * l * $),
                    s && (T = -T),
                    c || (y = T,
                    T = 0);
                    var C = "rotateX(" + (c ? 0 : -g) + "deg) rotateY(" + (c ? g : 0) + "deg) translate3d(" + T + "px, " + y + "px, " + S + "px)";
                    if (b <= 1 && b > -1 && (h = 90 * v + 90 * b,
                    s && (h = 90 * -v - 90 * b)),
                    m.transform(C),
                    u.slideShadows) {
                        var P = c ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top")
                          , w = c ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === P.length && (P = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'),
                        m.append(P)),
                        0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'),
                        m.append(w)),
                        P.length && (P[0].style.opacity = Math.max(-b, 0)),
                        w.length && (w[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (a.css({
                    "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                    "transform-origin": "50% 50% -" + l / 2 + "px"
                }),
                u.shadow)
                    if (c)
                        t.transform("translate3d(0px, " + (d / 2 + u.shadowOffset) + "px, " + -d / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                    else {
                        var E = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                          , x = 1.5 - (Math.sin(2 * E * Math.PI / 360) / 2 + Math.cos(2 * E * Math.PI / 360) / 2)
                          , M = u.shadowScale
                          , A = u.shadowScale / x
                          , G = u.shadowOffset;
                        t.transform("scale3d(" + M + ", 1, " + A + ") translate3d(0px, " + (o / 2 + G) + "px, " + -o / 2 / A + "px) rotateX(-90deg)")
                    }
                var O = rt.isSafari || rt.isUiWebView ? -l / 2 : 0;
                a.transform("translate3d(0px,0," + O + "px) rotateX(" + (n.isHorizontal() ? 0 : h) + "deg) rotateY(" + (n.isHorizontal() ? -h : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this
                  , n = t.$el;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
            }
        }
          , Rt = {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    cubeEffect: {
                        setTranslate: _t.setTranslate.bind(e),
                        setTransition: _t.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"),
                        e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        K.extend(e.params, t),
                        K.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "cube" === e.params.effect && e.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "cube" === t.params.effect && t.cubeEffect.setTransition(e)
                }
            }
        }
          , Vt = {
            setTranslate: function() {
                for (var t = this, n = t.slides, i = 0; i < n.length; i += 1) {
                    var a = n.eq(i)
                      , r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var d = a[0].swiperSlideOffset
                      , o = -180 * r
                      , s = o
                      , l = 0
                      , u = -d
                      , c = 0;
                    if (t.isHorizontal() ? t.rtl && (s = -s) : (c = u,
                    u = 0,
                    l = -s,
                    s = 0),
                    a[0].style.zIndex = -Math.abs(Math.round(r)) + n.length,
                    t.params.flipEffect.slideShadows) {
                        var f = t.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                          , h = t.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'),
                        a.append(f)),
                        0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'),
                        a.append(h)),
                        f.length && (f[0].style.opacity = Math.max(-r, 0)),
                        h.length && (h[0].style.opacity = Math.max(r, 0))
                    }
                    a.transform("translate3d(" + u + "px, " + c + "px, 0px) rotateX(" + l + "deg) rotateY(" + s + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this
                  , n = t.slides
                  , i = t.activeIndex
                  , a = t.$wrapperEl;
                if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    n.eq(i).transitionEnd(function() {
                        if (!r && t && !t.destroyed) {
                            r = !0,
                            t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1)
                                a.trigger(e[n])
                        }
                    })
                }
            }
        }
          , zt = {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    flipEffect: {
                        setTranslate: Vt.setTranslate.bind(e),
                        setTransition: Vt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"),
                        e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        K.extend(e.params, t),
                        K.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    var e = this;
                    "flip" === e.params.effect && e.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "flip" === t.params.effect && t.flipEffect.setTransition(e)
                }
            }
        }
          , jt = {
            setTranslate: function() {
                for (var t = this, n = t.width, i = t.height, a = t.slides, r = t.$wrapperEl, d = t.slidesSizesGrid, o = t.params.coverflowEffect, s = t.isHorizontal(), l = t.translate, u = s ? n / 2 - l : i / 2 - l, c = s ? o.rotate : -o.rotate, f = o.depth, h = 0, p = a.length; h < p; h += 1) {
                    var m = a.eq(h)
                      , v = d[h]
                      , g = m[0].swiperSlideOffset
                      , $ = (u - g - v / 2) / v * o.modifier
                      , b = s ? c * $ : 0
                      , T = s ? 0 : c * $
                      , y = -f * Math.abs($)
                      , S = s ? 0 : o.stretch * $
                      , C = s ? o.stretch * $ : 0;
                    Math.abs(C) < .001 && (C = 0),
                    Math.abs(S) < .001 && (S = 0),
                    Math.abs(y) < .001 && (y = 0),
                    Math.abs(b) < .001 && (b = 0),
                    Math.abs(T) < .001 && (T = 0);
                    var P = "translate3d(" + C + "px," + S + "px," + y + "px)  rotateX(" + T + "deg) rotateY(" + b + "deg)";
                    if (m.transform(P),
                    m[0].style.zIndex = 1 - Math.abs(Math.round($)),
                    o.slideShadows) {
                        var w = s ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top")
                          , E = s ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'),
                        m.append(w)),
                        0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'),
                        m.append(E)),
                        w.length && (w[0].style.opacity = $ > 0 ? $ : 0),
                        E.length && (E[0].style.opacity = -$ > 0 ? -$ : 0)
                    }
                }
                if (q.pointerEvents || q.prefixedPointerEvents) {
                    r[0].style.perspectiveOrigin = u + "px 50%"
                }
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        }
          , Xt = {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                var e = this;
                K.extend(e, {
                    coverflowEffect: {
                        setTranslate: jt.setTranslate.bind(e),
                        setTransition: jt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                    e.classNames.push(e.params.containerModifierClass + "3d"),
                    e.params.watchSlidesProgress = !0,
                    e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    var e = this;
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    var t = this;
                    "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
                }
            }
        }
          , Wt = [it, at, dt, ot, lt, ct, ht, mt, gt, bt, yt, Ct, wt, xt, At, Ot, Nt, Lt, Dt, Ft, Rt, zt, Xt];
        return void 0 === nt.use && (nt.use = nt.Class.use,
        nt.installModule = nt.Class.installModule),
        nt.use(Wt),
        nt
    })
}
, function(e, t, n) {
    e.exports = n.p + "assets/files/BG-mobile-7816d896c4de4f500615b92621de2ba0.jpg"
}
, function(e, t, n) {
    e.exports = n.p + "assets/files/BG-tablet-726c2d7d6b2d4003b4221d65b713c17f.jpg"
}
], [500]);
