(window.webpackJsonp = window.webpackJsonp || []).push([
  [1], {
    0: function(n, e, t) {
      n.exports = t("zUnb")
    },
    Dhk8: function(n, e, t) {
      var o = t("Syyo"),
        r = t("KCLV"),
        i = t("kHoZ"),
        s = o ? o.toStringTag : void 0;
      n.exports = function(n) {
        return null == n ? void 0 === n ? "[object Undefined]" : "[object Null]" : s && s in Object(n) ? r(n) : i(n)
      }
    },
    ENE1: function(n, e, t) {
      var o = t("IBsm");
      n.exports = function() {
        return o.Date.now()
      }
    },
    IBsm: function(n, e, t) {
      var o = t("e93E"),
        r = "object" == typeof self && self && self.Object === Object && self,
        i = o || r || Function("return this")();
      n.exports = i
    },
    IRzx: function(n, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = e.gtag = e.install = void 0, e.install = function(n) {
        if (!document.getElementById("ga-gtag")) {
          var e = document.head,
            t = document.createElement("script");
          t.id = "ga-gtag", t.type = "text/javascript", t.async = !0, t.src = "https://www.googletagmanager.com/gtag/js?id=".concat(n), e.insertBefore(t, e.firstChild), window.dataLayer = window.dataLayer || [], o("js", new Date), o("config", n)
        }
      };
      var o = function() {
        window.dataLayer.push(arguments)
      };
      e.gtag = o, e.default = o
    },
    KCLV: function(n, e, t) {
      var o = t("Syyo"),
        r = Object.prototype,
        i = r.hasOwnProperty,
        s = r.toString,
        a = o ? o.toStringTag : void 0;
      n.exports = function(n) {
        var e = i.call(n, a),
          t = n[a];
        try {
          n[a] = void 0;
          var o = !0
        } catch (l) {}
        var r = s.call(n);
        return o && (e ? n[a] = t : delete n[a]), r
      }
    },
    RNvQ: function(n, e, t) {
      var o = t("tQYX"),
        r = t("ENE1"),
        i = t("nvU9"),
        s = Math.max,
        a = Math.min;
      n.exports = function(n, e, t) {
        var l, c, d, u, p, h, f = 0,
          g = !1,
          m = !1,
          b = !0;
        if ("function" != typeof n) throw new TypeError("Expected a function");

        function v(e) {
          var t = l,
            o = c;
          return l = c = void 0, f = e, u = n.apply(o, t)
        }

        function $(n) {
          return f = n, p = setTimeout(y, e), g ? v(n) : u
        }

        function w(n) {
          var t = n - h;
          return void 0 === h || t >= e || t < 0 || m && n - f >= d
        }

        function y() {
          var n = r();
          if (w(n)) return x(n);
          p = setTimeout(y, function(n) {
            var t = e - (n - h);
            return m ? a(t, d - (n - f)) : t
          }(n))
        }

        function x(n) {
          return p = void 0, b && l ? v(n) : (l = c = void 0, u)
        }

        function k() {
          var n = r(),
            t = w(n);
          if (l = arguments, c = this, h = n, t) {
            if (void 0 === p) return $(h);
            if (m) return clearTimeout(p), p = setTimeout(y, e), v(h)
          }
          return void 0 === p && (p = setTimeout(y, e)), u
        }
        return e = i(e) || 0, o(t) && (g = !!t.leading, d = (m = "maxWait" in t) ? s(i(t.maxWait) || 0, e) : d, b = "trailing" in t ? !!t.trailing : b), k.cancel = function() {
          void 0 !== p && clearTimeout(p), f = 0, l = h = c = p = void 0
        }, k.flush = function() {
          return void 0 === p ? u : x(r())
        }, k
      }
    },
    RbKz: function(n, e) {
      function t(n) {
        return Math.round(255 * (n <= .00304 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
      }

      function o(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
      }

      function r(n) {
        return n > .008856452 ? Math.pow(n, 1 / 3) : n / .12841855 + .137931034
      }

      function i(n) {
        return n > .206896552 ? n * n * n : .12841855 * (n - .137931034)
      }

      function s(n) {
        var e = n[1],
          o = n[2],
          r = (n[0] + 16) / 116,
          s = isNaN(e) ? r : r + e / 500,
          a = isNaN(o) ? r : r - o / 200;
        return r = 1 * i(r), [t(3.2404542 * (s = .95047 * i(s)) - 1.5371385 * r - .4985314 * (a = 1.08883 * i(a))), t(-.969266 * s + 1.8760108 * r + .041556 * a), o = t(.0556434 * s - .2040259 * r + 1.0572252 * a)]
      }

      function a(n) {
        return ("0" + n.toString(16)).slice(-2)
      }
      var l = 180 / Math.PI;
      e.validateRgb = function(n) {
        var e = n[0],
          t = n[1],
          o = n[2];
        return e >= 0 && e <= 255 && t >= 0 && t <= 255 && o >= 0 && o <= 255
      }, e.labToRgb = s, e.labToRgbHex = function(n) {
        var e = s(n);
        return "#" + a(e[0]) + a(e[1]) + a(e[2])
      }, e.rgbToLab = function(n) {
        var e = function(n) {
            var e = n[0],
              t = n[1],
              i = n[2];
            return [r((.4124564 * (e = o(e)) + .3575761 * (t = o(t)) + .1804375 * (i = o(i))) / .95047), r((.2126729 * e + .7151522 * t + .072175 * i) / 1), r((.0193339 * e + .119192 * t + .9503041 * i) / 1.08883)]
          }(n),
          t = e[1],
          i = 116 * t - 16;
        return [i < 0 ? 0 : i, 500 * (e[0] - t), 200 * (t - e[2])]
      }, e.labToHcl = function(n) {
        var e = n[0],
          t = n[1],
          o = n[2],
          r = Math.sqrt(t * t + o * o),
          i = (Math.atan2(o, t) * l + 360) % 360;
        return 0 === Math.round(1e4 * r) && (i = NaN), [i, r, e]
      }, e.diffSort = function(n, e) {
        for (var t, o, r, i, s, a, l = [(e = e.slice()).shift()]; e.length > 0;) {
          for (t = -1, o = -1 / 0, r = 0; r < e.length; r++)
            for (i = e[r], a = 0; a < l.length; a++)(s = n(i, l[a])) > o && (o = s, t = r);
          l.push(e[t]), e.splice(t, 1)
        }
        return l
      }
    },
    Syyo: function(n, e, t) {
      var o = t("IBsm");
      n.exports = o.Symbol
    },
    TR4v: function(n, e, t) {
      var o = t("RbKz"),
        r = {
          protanope: {
            x: .7465,
            y: .2535,
            m: 1.273463,
            yint: -.073894
          },
          deuteranope: {
            x: 1.4,
            y: -.4,
            m: .968437,
            yint: .003331
          },
          tritanope: {
            x: .1748,
            y: 0,
            m: .062921,
            yint: .292119
          }
        };

      function i() {
        this.cache = {}
      }
      i.prototype.simulate = function(n, e, t) {
        t = t || 1;
        var i = n.join("-") + "-" + e + "-" + t,
          s = this.cache[i];
        if (s) return s;
        var a = r[e].x,
          l = r[e].y,
          c = r[e].m,
          d = r[e].yint,
          u = o.labToRgb(n),
          p = u[0],
          h = u[1],
          f = u[2],
          g = p,
          m = h,
          b = f,
          v = Math.pow(p, 2.2),
          $ = Math.pow(h, 2.2),
          w = Math.pow(f, 2.2),
          y = .412424 * v + .357579 * $ + .180464 * w,
          x = .212656 * v + .715158 * $ + .0721856 * w,
          k = .0193324 * v + .119193 * $ + .950444 * w,
          C = y / (y + x + k),
          _ = x / (y + x + k),
          z = (_ - l) / (C - a),
          A = _ - C * z,
          S = (d - A) / (z - c),
          I = z * S + A,
          E = .312713 * x / .329016 - (y = S * x / I),
          P = .358271 * x / .329016 - (k = (1 - (S + I)) * x / I),
          T = 3.24071 * E + -.498571 * P,
          M = -.969258 * E + .0415557 * P,
          O = .0556352 * E + 1.05707 * P,
          R = (((g = 3.24071 * y + -1.53726 * x + -.498571 * k) < 0 ? 0 : 1) - g) / T,
          N = (((m = -.969258 * y + 1.87599 * x + .0415557 * k) < 0 ? 0 : 1) - m) / M,
          D = (((b = .0556352 * y + -.203996 * x + 1.05707 * k) < 0 ? 0 : 1) - b) / O,
          F = Math.max(R > 1 || R < 0 ? 0 : R, N > 1 || N < 0 ? 0 : N, D > 1 || D < 0 ? 0 : D);
        g += F * T, m += F * M, b += F * O, g = Math.pow(g, 1 / 2.2), m = Math.pow(m, 1 / 2.2), b = Math.pow(b, 1 / 2.2);
        var j = o.rgbToLab([g = p * (1 - t) + g * t, m = h * (1 - t) + m * t, b = f * (1 - t) + b * t]);
        return this.cache[i] = j, j
      }, i.prototype.euclidean = function(n, e) {
        return Math.sqrt(Math.pow(n[0] - e[0], 2) + Math.pow(n[1] - e[1], 2) + Math.pow(n[2] - e[2], 2))
      }, i.prototype.cmc = (function(n, e, t, o) {
        for (var r = t[0], i = o[0], s = t[1], a = o[1], l = t[2], c = o[2], d = Math.sqrt(Math.pow(s, 2) + Math.pow(l, 2)), u = d - Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2)), p = r - i, h = l - c, f = Math.sqrt(Math.pow(s - a, 2) + Math.pow(h, 2) + Math.pow(u, 2)), g = Math.atan2(l, s) * (180 / Math.PI); g < 0;) g += 360;
        var m = Math.sqrt(Math.pow(d, 4) / (Math.pow(d, 4) + 1900)),
          b = .0638 * d / (1 + .0131 * d) + .638,
          v = b * (m * (g >= 164 && g <= 345 ? .56 + Math.abs(.2 * Math.cos(g + 168)) : .36 + Math.abs(.4 * Math.cos(g + 35))) + 1 - m);
        return Math.sqrt(Math.pow(p / (n * (t[0] < 16 ? .511 : .040975 * r / (1 + .01765 * r))), 2) + Math.pow(u / (e * b), 2) + Math.pow(f / v, 2))
      }).bind(null, 2, 1), i.prototype.colorblind = function(n, e, t) {
        return e = this.simulate(e, n), t = this.simulate(t, n), this.cmc(e, t)
      }, Object.keys(r).forEach((function(n) {
        i.prototype[n] = function(e, t) {
          return this.colorblind(n, e, t)
        }
      })), i.prototype.compromise = function(n, e) {
        var t = 0,
          o = this.cmc(n, e);
        return t += 1e3 * o, o = this.colorblind("protanope", n, e), isNaN(o) || (t += 100 * o), o = this.colorblind("deuteranope", n, e), isNaN(o) || (t += 500 * o), o = this.colorblind("tritanope", n, e), isNaN(o) || (t += 1 * o), t / 1601
      }, i.prototype.get = function(n) {
        return n in r ? this.colorblind.bind(this, n) : this[n].bind(this)
      }, n.exports = i
    },
    a88S: function(n, e, t) {
      var o = t("Dhk8"),
        r = t("tLQN");
      n.exports = function(n) {
        return "symbol" == typeof n || r(n) && "[object Symbol]" == o(n)
      }
    },
    coUc: function(n, e) {
      function t(n) {
        var e;
        n || (e = Math.pow(2, 31) - 1, n = 0 + Math.floor(Math.random() * (e - 0 + 1))), this.seed = n % 2147483647, this.seed <= 0 && (this.seed += 2147483646)
      }
      t.prototype.next = function() {
        return this.seed = 16807 * this.seed % 2147483647, this.seed
      }, t.prototype.nextFloat = function() {
        return (this.next() - 1) / 2147483646
      }, n.exports = t
    },
    e93E: function(n, e) {
      var t = "object" == typeof global && global && global.Object === Object && global;
      n.exports = t
    },
    kHoZ: function(n, e) {
      var t = Object.prototype.toString;
      n.exports = function(n) {
        return t.call(n)
      }
    },
    mgJ4: function(n, e) {
      n.exports = {
        all: [0, 360, 0, 100, 0, 100],
        default: [0, 360, 30, 80, 35, 80],
        colorblind: [0, 360, 40, 70, 15, 85],
        "fancy-light": [0, 360, 15, 40, 70, 100],
        "fancy-dark": [0, 360, 8, 40, 7, 40],
        shades: [0, 240, 0, 15, 0, 100],
        tarnish: [0, 360, 0, 15, 30, 70],
        pastel: [0, 360, 0, 30, 70, 100],
        pimp: [0, 360, 30, 100, 25, 70],
        intense: [0, 360, 20, 100, 15, 80],
        fluo: [0, 300, 35, 100, 75, 100],
        "red-roses": [330, 20, 10, 100, 35, 100],
        "ochre-sand": [20, 60, 20, 50, 35, 100],
        "yellow-lime": [60, 90, 10, 100, 35, 100],
        "green-mint": [90, 150, 10, 100, 35, 100],
        "ice-cube": [150, 200, 0, 100, 35, 100],
        "blue-ocean": [220, 260, 8, 80, 0, 50],
        "indigo-night": [260, 290, 40, 100, 35, 100],
        "purple-wine": [290, 330, 0, 100, 0, 40]
      }
    },
    nvU9: function(n, e, t) {
      var o = t("tQYX"),
        r = t("a88S"),
        i = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
      n.exports = function(n) {
        if ("number" == typeof n) return n;
        if (r(n)) return NaN;
        if (o(n)) {
          var e = "function" == typeof n.valueOf ? n.valueOf() : n;
          n = o(e) ? e + "" : e
        }
        if ("string" != typeof n) return 0 === n ? n : +n;
        n = n.replace(i, "");
        var t = a.test(n);
        return t || l.test(n) ? c(n.slice(2), t ? 2 : 8) : s.test(n) ? NaN : +n
      }
    },
    nxW2: function(n, e, t) {
      var o = t("coUc"),
        r = t("TR4v"),
        i = t("RbKz"),
        s = t("mgJ4"),
        a = i.validateRgb,
        l = i.labToRgb,
        c = i.labToRgbHex,
        d = i.labToHcl,
        u = i.diffSort,
        p = {
          colorFilter: null,
          colorSpace: "default",
          clustering: "k-means",
          quality: 50,
          ultraPrecision: !1,
          distance: "euclidean",
          seed: null
        },
        h = new Set(["force-vector", "k-means"]),
        f = new Set(["euclidean", "cmc", "compromise", "protanope", "deuteranope", "tritanope"]),
        g = new Set(Object.keys(s));
      n.exports = function(n, e) {
        if ("number" != typeof n || n < 2) throw new Error("iwanthue: expecting a color count > 2.");
        e = function(n) {
          var e = Object.assign({}, p, n);
          if (e.colorFilter && "function" != typeof e.colorFilter) throw new Error("iwanthue: invalid `colorFilter` setting. Expecting a function.");
          if (!h.has(e.clustering)) throw new Error('iwanthue: unknown `clustering` "' + e.clustering + '".');
          if ("number" != typeof e.quality || isNaN(e.quality) || e.quality < 1) throw new Error("iwanthue: invalid `quality`. Expecting a number > 0.");
          if ("boolean" != typeof e.ultraPrecision) throw new Error("iwanthue: invalid `ultraPrecision`. Expecting a boolean.");
          if (!f.has(e.distance)) throw new Error('iwanthue: unknown `distance` "' + e.distance + '".');
          if ("string" == typeof e.seed && (e.seed = function(n) {
              for (var e = 0, t = 0, o = n.length; t < o; t++) e += n.charCodeAt(t);
              return e
            }(e.seed)), null !== e.seed && "number" != typeof e.seed) throw new Error("iwanthue: invalid `seed`. Expecting an integer or a string.");
          if (!e.colorFilter && e.colorSpace && "all" !== e.colorSpace) {
            var t;
            if ("string" == typeof e.colorSpace) {
              if (!g.has(e.colorSpace)) throw new Error('iwanthue: unknown `colorSpace` "' + e.colorSpace + '".');
              t = s[e.colorSpace]
            } else if (Array.isArray(e.colorSpace)) {
              if (6 !== e.colorSpace.length) throw new Error("iwanthue: expecting a `colorSpace` array of length 6 ([hmin, hmax, cmin, cmax, lmin, lmax]).");
              t = e.colorSpace
            } else t = [e.colorSpace.hmin || 0, e.colorSpace.hmax || 360, e.colorSpace.cmin || 0, e.colorSpace.cmax || 100, e.colorSpace.lmin || 0, e.colorSpace.lmax || 100];
            e.colorFilter = t[0] < t[1] ? function(n, e) {
              var o = d(e);
              return o[0] >= t[0] && o[0] <= t[1] && o[1] >= t[2] && o[1] <= t[3] && o[2] >= t[4] && o[2] <= t[5]
            } : function(n, e) {
              var o = d(e);
              return (o[0] >= t[0] || o[0] <= t[1]) && o[1] >= t[2] && o[1] <= t[3] && o[2] >= t[4] && o[2] <= t[5]
            }
          }
          return e
        }(e);
        var t = new o(e.seed),
          i = function() {
            return t.nextFloat()
          },
          m = (new r).get(e.distance),
          b = function(n, t) {
            return !(!a(n) || e.colorFilter && !e.colorFilter(n, t))
          },
          v = function(n, e, t) {
            for (var o, r, i = new Array(e), s = 0; s < e; s++) {
              do {
                o = [100 * n(), 100 * (2 * n() - 1), 100 * (2 * n() - 1)], r = l(o)
              } while (!t(r, o));
              i[s] = o
            }
            return i
          }(i, n, b);
        return "force-vector" === e.clustering ? function(n, e, t, o, r) {
          for (var i, s, a, c, d, u, p, h, f, g, m, b, v, $ = new Array(o.length), w = 20 * r.quality, y = o.length; w-- > 0;) {
            for (i = 0; i < y; i++) $[i] = {
              dl: 0,
              da: 0,
              db: 0
            };
            for (i = 0; i < y; i++)
              for (a = o[i], s = 0; s < i; s++)(d = e(a, c = o[s])) > 0 ? (u = a[0] - c[0], p = a[1] - c[1], h = a[2] - c[2], f = 100 / Math.pow(d, 2), $[i].dl += u * f / d, $[i].da += p * f / d, $[i].db += h * f / d, $[s].dl -= u * f / d, $[s].da -= p * f / d, $[s].db -= h * f / d) : ($[s].dl += 2 - 4 * n(), $[s].da += 2 - 4 * n(), $[s].db += 2 - 4 * n());
            for (i = 0; i < y; i++) m = o[i], (v = 100 * Math.sqrt(Math.pow($[i].dl, 2) + Math.pow($[i].da, 2) + Math.pow($[i].db, 2))) > 0 && (b = 100 * Math.min(.1, v) / v, t(l(g = [m[0] + $[i].dl * b, m[1] + $[i].da * b, m[2] + $[i].db * b]), g) && (o[i] = g))
          }
        }(i, m, b, v, e) : function(n, e, t, o) {
          var r, i, s, a, c = [],
            d = [],
            u = 5,
            p = 10,
            h = 10;
          for (o.ultraPrecision && (u = 1, p = 5, h = 5), r = 0; r <= 100; r += u)
            for (i = -100; i <= 100; i += p)
              for (s = -100; s <= 100; s += h) e(l(a = [r, i, s]), a) && (c.push(a), d.push(null));
          for (var f, g, m, b, v, $, w, y, x, k = o.quality, C = c.length, _ = t.length; k-- > 0;) {
            for (f = 0; f < C; f++)
              for (m = c[f], v = 1 / 0, g = 0; g < _; g++)(b = n(t[g], m)) < v && (v = b, d[f] = g);
            for ($ = c.slice(), g = 0; g < _; g++) {
              for (w = 0, y = [0, 0, 0], f = 0; f < C; f++) d[f] === g && (w++, y[0] += c[f][0], y[1] += c[f][1], y[2] += c[f][2]);
              if (0 !== w)
                if (y[0] /= w, y[1] /= w, y[2] /= w, e(l(y), y)) t[g] = y;
                else {
                  if ($.length > 0) {
                    for (v = 1 / 0, x = -1, f = 0; f < $.length; f++)(b = n($[f], y)) < v && (v = b, x = f);
                    t[g] = c[x]
                  } else {
                    for (v = 1 / 0, x = -1, f = 0; f < c.length; f++)(b = n(c[f], y)) < v && (v = b, x = f);
                    t[g] = c[x]
                  }
                  $ = $.filter((function(n) {
                    return n[0] !== t[g][0] || n[1] !== t[g][1] || n[2] !== t[g][2]
                  }))
                }
            }
          }
        }(m, b, v, e), (v = u(m, v)).map(c)
      }
    },
    tLQN: function(n, e) {
      n.exports = function(n) {
        return null != n && "object" == typeof n
      }
    },
    tQYX: function(n, e) {
      n.exports = function(n) {
        var e = typeof n;
        return null != n && ("object" == e || "function" == e)
      }
    },
    wdnw: function(n) {
      n.exports = JSON.parse('{"index":"@import \'sb-ui-kit-pro/styles.scss\';\\n@import \'sb-ui-kit-pro-angular.scss\';\\n@import \'project-variables\';\\n@import \'project-global\';\\n","files":[{"filePath":"sb-ui-kit-pro/styles.scss","scss":"// * * * * * * * * * * * * *\\n// * * Import variables  * *\\n// * * * * * * * * * * * * *\\n\\n@import \'sb-ui-kit-pro/variables.scss\';\\n\\n// * * * * * * * * * * * * *\\n// * * Import Bootstrap  * *\\n// * * * * * * * * * * * * *\\n\\n@import \'bootstrap/scss/bootstrap.scss\';\\n\\n// * * * * * * * * * * * * * * *\\n// * * Import global styling * *\\n// * * * * * * * * * * * * * * *\\n\\n@import \'sb-ui-kit-pro/global.scss\';\\n\\n// * * * * * * * * * * * *\\n// * * Import layouts  * *\\n// * * * * * * * * * * * *\\n\\n@import \'sb-ui-kit-pro/layout/default.scss\';\\n\\n// * * * * * * * * * * * * *\\n// * * Import utilities  * *\\n// * * * * * * * * * * * * *\\n\\n@import \'sb-ui-kit-pro/utilities/animation.scss\';\\n@import \'sb-ui-kit-pro/utilities/background.scss\';\\n@import \'sb-ui-kit-pro/utilities/border.scss\';\\n@import \'sb-ui-kit-pro/utilities/dropdown.scss\';\\n@import \'sb-ui-kit-pro/utilities/general.scss\';\\n@import \'sb-ui-kit-pro/utilities/text.scss\';\\n@import \'sb-ui-kit-pro/utilities/shadow.scss\';\\n@import \'sb-ui-kit-pro/utilities/transform.scss\';\\n@import \'sb-ui-kit-pro/utilities/zindex.scss\';\\n@import \'sb-ui-kit-pro/utilities/images.scss\';\\n@import \'sb-ui-kit-pro/utilities/lift.scss\';\\n\\n// * * * * * * * * * * * * * * * *\\n// * * Import component styles * *\\n// * * * * * * * * * * * * * * * *\\n\\n// -- Alerts\\n@import \'sb-ui-kit-pro/components/alerts/icon.scss\';\\n@import \'sb-ui-kit-pro/components/alerts/solid.scss\';\\n\\n@import \'sb-ui-kit-pro/components/avatars.scss\';\\n\\n// -- Buttons\\n@import \'sb-ui-kit-pro/components/buttons/global.scss\';\\n@import \'sb-ui-kit-pro/components/buttons/social.scss\';\\n@import \'sb-ui-kit-pro/components/buttons/transparent.scss\';\\n@import \'sb-ui-kit-pro/components/buttons/icon.scss\';\\n@import \'sb-ui-kit-pro/components/buttons/sizing.scss\';\\n@import \'sb-ui-kit-pro/components/buttons/marketing.scss\';\\n\\n// -- Cards\\n@import \'sb-ui-kit-pro/components/cards/global.scss\';\\n@import \'sb-ui-kit-pro/components/cards/advanced.scss\';\\n@import \'sb-ui-kit-pro/components/cards/collapsable.scss\';\\n@import \'sb-ui-kit-pro/components/cards/icon.scss\';\\n@import \'sb-ui-kit-pro/components/cards/scrollable.scss\';\\n@import \'sb-ui-kit-pro/components/cards/progress.scss\';\\n@import \'sb-ui-kit-pro/components/cards/link.scss\';\\n@import \'sb-ui-kit-pro/components/cards/portfolio.scss\';\\n@import \'sb-ui-kit-pro/components/cards/flags.scss\';\\n\\n// -- Forms\\n@import \'sb-ui-kit-pro/components/forms/checkboxes.scss\';\\n@import \'sb-ui-kit-pro/components/forms/form-control.scss\';\\n\\n// -- Navigation\\n@import \'sb-ui-kit-pro/components/navigation/navbar.scss\';\\n@import \'sb-ui-kit-pro/components/navigation/navbar-marketing.scss\';\\n@import \'sb-ui-kit-pro/components/navigation/topnav.scss\';\\n@import \'sb-ui-kit-pro/components/navigation/nav-sticky.scss\';\\n@import \'sb-ui-kit-pro/components/navigation/sidenav/sidenav.scss\';\\n@import \'sb-ui-kit-pro/components/navigation/sidenav/sidenav-dark.scss\';\\n@import \'sb-ui-kit-pro/components/navigation/sidenav/sidenav-light.scss\';\\n\\n// -- Dropdowns\\n@import \'sb-ui-kit-pro/components/dropdowns/global.scss\';\\n@import \'sb-ui-kit-pro/components/dropdowns/user.scss\';\\n@import \'sb-ui-kit-pro/components/dropdowns/notifications.scss\';\\n@import \'sb-ui-kit-pro/components/dropdowns/mega.scss\';\\n\\n// -- Icons\\n@import \'sb-ui-kit-pro/components/icons.scss\';\\n\\n// -- Video\\n@import \'sb-ui-kit-pro/components/video.scss\';\\n\\n// -- Media\\n@import \'sb-ui-kit-pro/components/media.scss\';\\n\\n// -- Accordion\\n@import \'sb-ui-kit-pro/components/accordion.scss\';\\n\\n// -- Badges\\n@import \'sb-ui-kit-pro/components/badges.scss\';\\n\\n// -- Pagination\\n@import \'sb-ui-kit-pro/components/pagination.scss\';\\n\\n// -- List Group\\n@import \'sb-ui-kit-pro/components/list-group.scss\';\\n\\n// * * * * * * * * * * * * * * *\\n// * * Import section styles * *\\n// * * * * * * * * * * * * * * *\\n\\n@import \'sb-ui-kit-pro/sections/borders.scss\';\\n@import \'sb-ui-kit-pro/sections/header.scss\';\\n@import \'sb-ui-kit-pro/sections/footer.scss\';\\n@import \'sb-ui-kit-pro/sections/device.scss\';\\n@import \'sb-ui-kit-pro/sections/brands.scss\';\\n@import \'sb-ui-kit-pro/sections/testimonials.scss\';\\n@import \'sb-ui-kit-pro/sections/pricing.scss\';\\n@import \'sb-ui-kit-pro/sections/blog.scss\';\\n\\n// * * * * * * * * * * * * * *\\n// * * Import page styles  * *\\n// * * * * * * * * * * * * * *\\n\\n// -- Error page effect\\n@import \'sb-ui-kit-pro/pages/error.scss\';\\n\\n// * * * * * * * * * * * * * * *\\n// * * Import custom styles  * *\\n// * * * * * * * * * * * * * * *\\n@import \'sb-ui-kit-pro/project-global.scss\';"},{"filePath":"sb-ui-kit-pro/variables.scss","scss":"// Import Project Color Variables\\n@import \'sb-ui-kit-pro/variables/colors.scss\';\\n\\n// Override Color Variables in this file.\\n@import \'sb-ui-kit-pro/variables-colors-overrides.scss\';\\n\\n// Import Project Variables\\n@import \'sb-ui-kit-pro/variables/alerts.scss\';\\n@import \'sb-ui-kit-pro/variables/page-header.scss\';\\n@import \'sb-ui-kit-pro/variables/navbar.scss\';\\n@import \'sb-ui-kit-pro/variables/spacing.scss\';\\n@import \'sb-ui-kit-pro/variables/body.scss\';\\n@import \'sb-ui-kit-pro/variables/error.scss\';\\n@import \'sb-ui-kit-pro/variables/grid.scss\';\\n@import \'sb-ui-kit-pro/variables/components.scss\';\\n@import \'sb-ui-kit-pro/variables/buttons-forms.scss\';\\n@import \'sb-ui-kit-pro/variables/navigation.scss\';\\n@import \'sb-ui-kit-pro/variables/cards.scss\';\\n@import \'sb-ui-kit-pro/variables/dropdowns.scss\';\\n@import \'sb-ui-kit-pro/variables/code.scss\';\\n@import \'sb-ui-kit-pro/variables/typography.scss\';\\n@import \'sb-ui-kit-pro/variables/tables.scss\';\\n@import \'sb-ui-kit-pro/variables/badges.scss\';\\n\\n// Override Start Bootstrap Variables in this file.\\n@import \'sb-ui-kit-pro/variables-sb-ui-kit-pro-overrides.scss\';\\n"},{"filePath":"sb-ui-kit-pro/variables/colors.scss","scss":"// Override Bootstrap color system - flat color palette\\n\\n// $red: #e83d2c;\\n// $orange: #fa8231;\\n// $yellow: #ffc147;\\n// $green: #12ac70;\\n// $teal: #3fbaa1;\\n// $cyan: #2ccfd4;\\n// $blue: #1da1f5;\\n// $indigo: #6e22eb;\\n// $purple: #8039da;\\n// $pink: #e94d8a;\\n\\n// Override Bootstrap color system - sharp color palette\\n\\n$red: #e81500 !default;\\n$orange: #f76400 !default;\\n$yellow: #f4a100 !default;\\n$green: #00ac69 !default;\\n$teal: #00ba94 !default;\\n$cyan: #00cfd5 !default;\\n$blue: #0061f2 !default;\\n$indigo: #5800e8 !default;\\n$purple: #6900c7 !default;\\n$pink: #e30059 !default;\\n\\n// Custom grayscale base hue variable\\n//\\n// Changing this to adjusts the hue of the grayscale\\n\\n$grayscale-base-hue: $blue !default;\\n\\n// Override Bootstrap grayscale with custom adaptive grayscale\\n//\\n// Mixes the $grayscale-base-hue variable with a desaturated\\n// black and white grayscale to produce a grayscale with slight color saturation\\n\\n$white: #fff !default;\\n$gray-100: mix(#f9f9f9, $grayscale-base-hue, 96%) !default;\\n$gray-200: mix(#ececec, $grayscale-base-hue, 96%) !default;\\n$gray-300: mix(#e2e2e2, $grayscale-base-hue, 95%) !default;\\n$gray-400: mix(#d4d4d4, $grayscale-base-hue, 93%) !default;\\n$gray-500: mix(#b4b4b4, $grayscale-base-hue, 90%) !default;\\n$gray-600: mix(#747474, $grayscale-base-hue, 90%) !default;\\n$gray-700: mix(#505050, $grayscale-base-hue, 90%) !default;\\n$gray-800: mix(#3a3a3a, $grayscale-base-hue, 87%) !default;\\n$gray-900: mix(#242424, $grayscale-base-hue, 86%) !default;\\n$black: #000 !default;\\n\\n// Override Bootstrap default state colors\\n\\n$primary: $blue !default;\\n$secondary: $purple !default;\\n$success: $green !default;\\n$info: $cyan !default;\\n$warning: $yellow !default;\\n$danger: $red !default;\\n$dark: $gray-900 !default;\\n\\n// Add soft color variations\\n$red-soft: mix($gray-100, $red, 80%) !default;\\n$orange-soft: mix($gray-100, $orange, 80%) !default;\\n$yellow-soft: mix($gray-100, $yellow, 80%) !default;\\n$green-soft: mix($gray-100, $green, 80%) !default;\\n$teal-soft: mix($gray-100, $teal, 80%) !default;\\n$cyan-soft: mix($gray-100, $cyan, 80%) !default;\\n$blue-soft: mix($gray-100, $blue, 80%) !default;\\n$indigo-soft: mix($gray-100, $indigo, 80%) !default;\\n$purple-soft: mix($gray-100, $purple, 80%) !default;\\n$pink-soft: mix($gray-100, $pink, 80%) !default;\\n\\n$primary-soft: mix($gray-100, $primary, 80%) !default;\\n$secondary-soft: mix($gray-100, $secondary, 80%) !default;\\n$success-soft: mix($gray-100, $success, 80%) !default;\\n$info-soft: mix($gray-100, $info, 80%) !default;\\n$warning-soft: mix($gray-100, $warning, 80%) !default;\\n$danger-soft: mix($gray-100, $danger, 80%) !default;\\n\\n\\n// Add colors to the color map\\n\\n$theme-colors: (\\n    \'black\': $black,\\n    \'white\': $white,\\n    \'red\': $red,\\n    \'orange\': $orange,\\n    \'yellow\': $yellow,\\n    \'green\': $green,\\n    \'teal\': $teal,\\n    \'cyan\': $cyan,\\n    \'blue\': $blue,\\n    \'indigo\': $indigo,\\n    \'purple\': $purple,\\n    \'pink\': $pink,\\n    \'red-soft\': $red-soft,\\n    \'orange-soft\': $orange-soft,\\n    \'yellow-soft\': $yellow-soft,\\n    \'green-soft\': $green-soft,\\n    \'teal-soft\': $teal-soft,\\n    \'cyan-soft\': $cyan-soft,\\n    \'blue-soft\': $blue-soft,\\n    \'indigo-soft\': $indigo-soft,\\n    \'purple-soft\': $purple-soft,\\n    \'pink-soft\': $pink-soft,\\n    \'primary-soft\': $primary-soft,\\n    \'secondary-soft\': $secondary-soft,\\n    \'success-soft\': $success-soft,\\n    \'info-soft\': $info-soft,\\n    \'warning-soft\': $warning-soft,\\n    \'danger-soft\': $danger-soft,\\n);\\n\\n// Override Bootstrap yiq lightness value\\n\\n$yiq-contrasted-threshold: 200 !default;\\n\\n// Brand color variables\\n//\\n// Used to create custom button styles for popular brands\\n// You can add more brand color variables below, a good place to\\n// find official brand colors is https://brandcolors.net/\\n\\n$facebook: #3b5998 !default;\\n$twitter: #1da1f2 !default;\\n$github: #333333 !default;\\n$google: #ea4335 !default;\\n"},{"filePath":"sb-ui-kit-pro/variables-colors-overrides.scss","scss":"// Override any Bootstrap SCSS variables here\\n"},{"filePath":"sb-ui-kit-pro/variables/alerts.scss","scss":"$alert-padding-y: 1.25rem;\\n"},{"filePath":"sb-ui-kit-pro/variables/page-header.scss","scss":"$page-header-padding-y: 8rem !default;"},{"filePath":"sb-ui-kit-pro/variables/navbar.scss","scss":"$navbar-marketing-padding-y: 1.75rem !default;"},{"filePath":"sb-ui-kit-pro/variables/spacing.scss","scss":"// Restate and add to the Bootstrap default spacing variables\\n//\\n// The spacer is restated in order to add new entries to the $spacers map\\n// The 10 and n1 through n10 spacers are newly added allowing for larger\\n// spacing options and negative padding and margin utilities\\n\\n$spacer: 1rem;\\n$spacers: ();\\n$spacers: map-merge((0: 0, 1: ($spacer * 0.25,), 2: ($spacer * 0.5,), 3: $spacer, 4: ($spacer * 1.5,), 5: ($spacer * 3,), 10: ($spacer * 6,), 15: ($spacer * 9), n1: ($spacer * -0.25,), n2: ($spacer * -0.5,), n3: ($spacer * -1,), n4: ($spacer * -1.5,), n5: ($spacer * -3,), n10: ($spacer * -6,), n15: ($spacer * -9),), $spacers);\\n\\n// Sidebar expanded width variable\\n//\\n// The base default width of the sidebar - you can adjust this value\\n// in order to increase or decrease the width of the sidebar component\\n\\n$sidenav-base-width: 15rem;\\n\\n// Topnav fixed height variable\\n//\\n// The fixed height of the topnav\\n\\n$topnav-base-height: 3.625rem;\\n\\n// Footer base height\\n\\n$footer-base-height: 5rem;\\n"},{"filePath":"sb-ui-kit-pro/variables/body.scss","scss":"// Override Bootstrap body variables\\n//\\n// Settings for the `<body>` element.\\n\\n$body-color: $gray-600;\\n$headings-color: $gray-800;"},{"filePath":"sb-ui-kit-pro/variables/error.scss","scss":"// Set the background color of the error page\\n// - Error glitch effect depends on this variable\\n\\n$bg-error-page: $white;\\n"},{"filePath":"sb-ui-kit-pro/variables/grid.scss","scss":"// Override Bootstrap grid column variables\\n//\\n// Override the spacing between columns to add symmetry to the layout\\n\\n$spacer: 1rem;\\n$grid-gutter-width: $spacer * 3;\\n"},{"filePath":"sb-ui-kit-pro/variables/components.scss","scss":"// Bootstrap components overrides\\n//\\n// define/redefine common padding and border radius sizes and more.\\n\\n$border-width: 1px;\\n$border-color: $gray-200;\\n\\n$border-radius: 0.35rem;\\n$border-radius-lg: 0.5rem;\\n$border-radius-sm: 0.25rem;\\n\\n$border-radius-xl: 1rem;\\n\\n// Custom border width variable\\n$border-width-lg: 0.25rem;\\n\\n$box-shadow-sm: 0 0.125rem 0.25rem 0 rgba($gray-900, 0.2);\\n$box-shadow: 0 0.15rem 1.75rem 0 rgba($gray-900, 0.15);\\n$box-shadow-lg: 0 1rem 3rem rgba($black, 0.175);\\n\\n$transition-collapse: height 0.15s ease;\\n\\n// Custom box shadow variables\\n$box-shadow-right-sm: 0.125rem 0 0.25rem 0 rgba($gray-900, 0.15);\\n$box-shadow-right: 0.15rem 0 1.75rem 0 rgba($gray-900, 0.15);\\n$box-shadow-right-lg: 1rem 0 3rem 0 rgba($gray-900, 0.15);\\n\\n$box-shadow-left-sm: -0.125rem 0 0.25rem 0 rgba($gray-900, 0.15);\\n$box-shadow-left: -0.15rem 0 1.75rem 0 rgba($gray-900, 0.15);\\n$box-shadow-left-lg: -1rem 0 3rem 0 rgba($gray-900, 0.15);\\n\\n// Box shadow lift utilities\\n$box-shadow-lift-sm: 0 0.25rem 1.00rem 0 rgba($gray-900, 0.25);\\n\\n$box-shadow-lift: 0 0.5rem 2.00rem 0 rgba($gray-900, 0.25);\\n\\n$box-shadow-lift-lg: 0 1rem 2.00rem 0 rgba($gray-900, 0.25);"},{"filePath":"sb-ui-kit-pro/variables/buttons-forms.scss","scss":"// Override Bootstrap buttons/forms shared variables\\n\\n$input-btn-padding-y: 0.5rem;\\n$input-btn-padding-x: 1rem;\\n\\n// Override Bootstrap form variables\\n\\n$input-bg: $white;\\n\\n$input-color: $body-color;\\n$input-border-color: $gray-200;\\n\\n$input-focus-border-color: $primary;\\n$input-focus-width: 0.0625rem;\\n$input-focus-box-shadow: 0 0 0 $input-focus-width $primary;\\n\\n$input-placeholder-color: $gray-600;\\n\\n$input-group-addon-color: $input-color;\\n$input-group-addon-bg: $input-bg;\\n\\n$custom-control-gutter: 0.75rem;\\n\\n$custom-control-indicator-size: 1.15rem;\\n\\n$custom-control-indicator-border-color: $input-border-color;\\n\\n$custom-checkbox-indicator-border-radius: $border-radius-sm;\\n\\n// Variables for solid form styling\\n\\n$input-solid-bg: mix($gray-100, $gray-200, 75%);\\n$input-solid-border-color: $input-solid-bg;\\n\\n// Variables for custom button sizes\\n$btn-padding-y-xs: 0.15rem;\\n$btn-padding-x-xs: 0.5rem;\\n$btn-font-size-xs: 0.7rem;\\n$btn-border-radius-xs: $border-radius;\\n\\n$btn-padding-y-xl: 1.25rem;\\n$btn-padding-x-xl: 1.5rem;\\n$btn-font-size-xl: 1.25rem;\\n$btn-border-radius-xl: $border-radius-lg;\\n\\n$btn-padding-x-marketing: 1.5rem;\\n$btn-padding-y-marketing: 0.8rem;\\n$btn-height-marketing: 3.125rem;\\n$btn-font-size-marketing: 0.7rem;\\n"},{"filePath":"sb-ui-kit-pro/variables/navigation.scss","scss":"// Color variables for the sidenav\\n\\n// -- Override Base Sidenav Dark\\n$sidenav-dark-footer-bg: fade-out($black, 0.75);\\n\\n// -- Override Base Sidenav Light\\n$sidenav-light-bg: $white;\\n$sidenav-light-color: $gray-900;\\n$sidenav-light-heading-color: $gray-500;\\n$sidenav-light-link-color: $sidenav-light-color;\\n$sidenav-light-link-active-color: $primary;\\n$sidenav-light-icon-color: $gray-500;\\n$sidenav-light-footer-bg: fade-out($gray-900, 0.95);\\n\\n// -- Override Base Sidenav Dark\\n$sidenav-dark-bg: lighten($gray-900, 3%);\\n\\n// -- Sidenav Border Offset\\n$sidenav-nested-border-offest: 0.5625rem;\\n\\n// Color variables for the topnav\\n$topnav-dark-toggler-color: fade-out($white, 0.5);\\n$topnav-light-toggler-color: $gray-900;\\n"},{"filePath":"sb-ui-kit-pro/variables/cards.scss","scss":"// Override Bootstrap card variables\\n\\n$card-spacer-y: 1rem;\\n$card-spacer-x: 1.35rem;\\n$card-inner-border-radius: $border-radius;\\n$card-border-radius: $border-radius;\\n$card-border-width: 0;\\n\\n$card-scrollable-max-height: 15rem;\\n"},{"filePath":"sb-ui-kit-pro/variables/dropdowns.scss","scss":"// Override Bootstrap dropdown variables\\n\\n$dropdown-border-color: $border-color;\\n"},{"filePath":"sb-ui-kit-pro/variables/code.scss","scss":"// Override Bootstrap code variables\\n\\n$pre-color: $gray-600;\\n\\n// Code variables\\n$code-font-family: Roboto Mono, monospace;\\n\\n// Variables for <pre> element\\n$pre-bg: $gray-100;\\n$pre-line-height: 1.5rem;\\n$pre-margin-x: 0;\\n$pre-margin-y: 0.5rem;\\n$pre-padding-x: 1rem;\\n$pre-padding-y: 1.5rem;\\n"},{"filePath":"sb-ui-kit-pro/variables/typography.scss","scss":"// Override Bootstrap typography variables\\n\\n$font-family-sans-serif: \'Metropolis\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto,\\n    \'Helvetica Neue\', Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\',\\n    \'Noto Color Emoji\' !default;\\n\\n$headings-font-weight:        500;\\n\\n$font-family-base:            $font-family-sans-serif !default;\\n\\n$font-weight-normal:          400 !default;\\n\\n$font-size-root:              null !default;\\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\\n$font-size-lg:                $font-size-base * 1.25 !default;\\n$font-size-sm:                $font-size-base * .875 !default;\\n\\n$h1-font-size:                $font-size-base * 1.5 !default;\\n$h2-font-size:                $font-size-base * 1.4 !default;\\n$h3-font-size:                $font-size-base * 1.3 !default;\\n$h4-font-size:                $font-size-base * 1.2 !default;\\n$h5-font-size:                $font-size-base * 1.1 !default;\\n$h6-font-size:                $font-size-base !default;\\n\\n$small-font-size:             0.875em !default;\\n\\n$lead-font-size:              $font-size-base * 1.1 !default;\\n$lead-font-weight:            400 !default;\\n\\n$text-muted:                  $gray-500 !default;\\n\\n$display1-size:               5.5rem !default;\\n$display2-size:               4.5rem !default;\\n$display3-size:               3.5rem !default;\\n$display4-size:               2.5rem !default;"},{"filePath":"sb-ui-kit-pro/variables/tables.scss","scss":"$table-hover-bg: rgba($gray-200, 0.25);\\n$table-border-color: $gray-200;\\n\\n$table-dark-color: fade-out($white, 0.35);\\n"},{"filePath":"sb-ui-kit-pro/variables/badges.scss","scss":"$badge-font-weight: $font-weight-normal !default;"},{"filePath":"sb-ui-kit-pro/variables-sb-ui-kit-pro-overrides.scss","scss":"// Override any SB UI Kit Pro SCSS variables here\\n"},{"filePath":"bootstrap/scss/bootstrap.scss","scss":"/*!\\n * Bootstrap v4.4.1 (https://getbootstrap.com/)\\n * Copyright 2011-2019 The Bootstrap Authors\\n * Copyright 2011-2019 Twitter, Inc.\\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\\n */\\n\\n@import \\"functions\\";\\n@import \\"variables\\";\\n@import \\"mixins\\";\\n@import \\"root\\";\\n@import \\"reboot\\";\\n@import \\"type\\";\\n@import \\"images\\";\\n@import \\"code\\";\\n@import \\"grid\\";\\n@import \\"tables\\";\\n@import \\"forms\\";\\n@import \\"buttons\\";\\n@import \\"transitions\\";\\n@import \\"dropdown\\";\\n@import \\"button-group\\";\\n@import \\"input-group\\";\\n@import \\"custom-forms\\";\\n@import \\"nav\\";\\n@import \\"navbar\\";\\n@import \\"card\\";\\n@import \\"breadcrumb\\";\\n@import \\"pagination\\";\\n@import \\"badge\\";\\n@import \\"jumbotron\\";\\n@import \\"alert\\";\\n@import \\"progress\\";\\n@import \\"media\\";\\n@import \\"list-group\\";\\n@import \\"close\\";\\n@import \\"toasts\\";\\n@import \\"modal\\";\\n@import \\"tooltip\\";\\n@import \\"popover\\";\\n@import \\"carousel\\";\\n@import \\"spinners\\";\\n@import \\"utilities\\";\\n@import \\"print\\";\\n"},{"filePath":"functions.scss","scss":"// Bootstrap functions\\n//\\n// Utility mixins and functions for evaluating source code across our variables, maps, and mixins.\\n\\n// Ascending\\n// Used to evaluate Sass maps like our grid breakpoints.\\n@mixin _assert-ascending($map, $map-name) {\\n  $prev-key: null;\\n  $prev-num: null;\\n  @each $key, $num in $map {\\n    @if $prev-num == null or unit($num) == \\"%\\" or unit($prev-num) == \\"%\\" {\\n      // Do nothing\\n    } @else if not comparable($prev-num, $num) {\\n      @warn \\"Potentially invalid value for #{$map-name}: This map must be in ascending order, but key \'#{$key}\' has value #{$num} whose unit makes it incomparable to #{$prev-num}, the value of the previous key \'#{$prev-key}\' !\\";\\n    } @else if $prev-num >= $num {\\n      @warn \\"Invalid value for #{$map-name}: This map must be in ascending order, but key \'#{$key}\' has value #{$num} which isn\'t greater than #{$prev-num}, the value of the previous key \'#{$prev-key}\' !\\";\\n    }\\n    $prev-key: $key;\\n    $prev-num: $num;\\n  }\\n}\\n\\n// Starts at zero\\n// Used to ensure the min-width of the lowest breakpoint starts at 0.\\n@mixin _assert-starts-at-zero($map, $map-name: \\"$grid-breakpoints\\") {\\n  $values: map-values($map);\\n  $first-value: nth($values, 1);\\n  @if $first-value != 0 {\\n    @warn \\"First breakpoint in #{$map-name} must start at 0, but starts at #{$first-value}.\\";\\n  }\\n}\\n\\n// Replace `$search` with `$replace` in `$string`\\n// Used on our SVG icon backgrounds for custom forms.\\n//\\n// @author Hugo Giraudel\\n// @param {String} $string - Initial string\\n// @param {String} $search - Substring to replace\\n// @param {String} $replace (\'\') - New value\\n// @return {String} - Updated string\\n@function str-replace($string, $search, $replace: \\"\\") {\\n  $index: str-index($string, $search);\\n\\n  @if $index {\\n    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\\n  }\\n\\n  @return $string;\\n}\\n\\n// See https://codepen.io/kevinweber/pen/dXWoRw\\n@function escape-svg($string) {\\n  @if str-index($string, \\"data:image/svg+xml\\") {\\n    @each $char, $encoded in $escaped-characters {\\n      $string: str-replace($string, $char, $encoded);\\n    }\\n  }\\n\\n  @return $string;\\n}\\n\\n// Color contrast\\n@function color-yiq($color, $dark: $yiq-text-dark, $light: $yiq-text-light) {\\n  $r: red($color);\\n  $g: green($color);\\n  $b: blue($color);\\n\\n  $yiq: (($r * 299) + ($g * 587) + ($b * 114)) / 1000;\\n\\n  @if ($yiq >= $yiq-contrasted-threshold) {\\n    @return $dark;\\n  } @else {\\n    @return $light;\\n  }\\n}\\n\\n// Retrieve color Sass maps\\n@function color($key: \\"blue\\") {\\n  @return map-get($colors, $key);\\n}\\n\\n@function theme-color($key: \\"primary\\") {\\n  @return map-get($theme-colors, $key);\\n}\\n\\n@function gray($key: \\"100\\") {\\n  @return map-get($grays, $key);\\n}\\n\\n// Request a theme color level\\n@function theme-color-level($color-name: \\"primary\\", $level: 0) {\\n  $color: theme-color($color-name);\\n  $color-base: if($level > 0, $black, $white);\\n  $level: abs($level);\\n\\n  @return mix($color-base, $color, $level * $theme-color-interval);\\n}\\n\\n// Return valid calc\\n@function add($value1, $value2, $return-calc: true) {\\n  @if $value1 == null {\\n    @return $value2;\\n  }\\n\\n  @if $value2 == null {\\n    @return $value1;\\n  }\\n\\n  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {\\n    @return $value1 + $value2;\\n  }\\n\\n  @return if($return-calc == true, calc(#{$value1} + #{$value2}), $value1 + unquote(\\" + \\") + $value2);\\n}\\n\\n@function subtract($value1, $value2, $return-calc: true) {\\n  @if $value1 == null and $value2 == null {\\n    @return null;\\n  }\\n\\n  @if $value1 == null {\\n    @return -$value2;\\n  }\\n\\n  @if $value2 == null {\\n    @return $value1;\\n  }\\n\\n  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {\\n    @return $value1 - $value2;\\n  }\\n\\n  @return if($return-calc == true, calc(#{$value1} - #{$value2}), $value1 + unquote(\\" - \\") + $value2);\\n}\\n"},{"filePath":"variables.scss","scss":"// Variables\\n//\\n// Variables should follow the `$component-state-property-size` formula for\\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\\n\\n// Color system\\n\\n$white:    #fff !default;\\n$gray-100: #f8f9fa !default;\\n$gray-200: #e9ecef !default;\\n$gray-300: #dee2e6 !default;\\n$gray-400: #ced4da !default;\\n$gray-500: #adb5bd !default;\\n$gray-600: #6c757d !default;\\n$gray-700: #495057 !default;\\n$gray-800: #343a40 !default;\\n$gray-900: #212529 !default;\\n$black:    #000 !default;\\n\\n$grays: () !default;\\n// stylelint-disable-next-line scss/dollar-variable-default\\n$grays: map-merge(\\n  (\\n    \\"100\\": $gray-100,\\n    \\"200\\": $gray-200,\\n    \\"300\\": $gray-300,\\n    \\"400\\": $gray-400,\\n    \\"500\\": $gray-500,\\n    \\"600\\": $gray-600,\\n    \\"700\\": $gray-700,\\n    \\"800\\": $gray-800,\\n    \\"900\\": $gray-900\\n  ),\\n  $grays\\n);\\n\\n$blue:    #007bff !default;\\n$indigo:  #6610f2 !default;\\n$purple:  #6f42c1 !default;\\n$pink:    #e83e8c !default;\\n$red:     #dc3545 !default;\\n$orange:  #fd7e14 !default;\\n$yellow:  #ffc107 !default;\\n$green:   #28a745 !default;\\n$teal:    #20c997 !default;\\n$cyan:    #17a2b8 !default;\\n\\n$colors: () !default;\\n// stylelint-disable-next-line scss/dollar-variable-default\\n$colors: map-merge(\\n  (\\n    \\"blue\\":       $blue,\\n    \\"indigo\\":     $indigo,\\n    \\"purple\\":     $purple,\\n    \\"pink\\":       $pink,\\n    \\"red\\":        $red,\\n    \\"orange\\":     $orange,\\n    \\"yellow\\":     $yellow,\\n    \\"green\\":      $green,\\n    \\"teal\\":       $teal,\\n    \\"cyan\\":       $cyan,\\n    \\"white\\":      $white,\\n    \\"gray\\":       $gray-600,\\n    \\"gray-dark\\":  $gray-800\\n  ),\\n  $colors\\n);\\n\\n$primary:       $blue !default;\\n$secondary:     $gray-600 !default;\\n$success:       $green !default;\\n$info:          $cyan !default;\\n$warning:       $yellow !default;\\n$danger:        $red !default;\\n$light:         $gray-100 !default;\\n$dark:          $gray-800 !default;\\n\\n$theme-colors: () !default;\\n// stylelint-disable-next-line scss/dollar-variable-default\\n$theme-colors: map-merge(\\n  (\\n    \\"primary\\":    $primary,\\n    \\"secondary\\":  $secondary,\\n    \\"success\\":    $success,\\n    \\"info\\":       $info,\\n    \\"warning\\":    $warning,\\n    \\"danger\\":     $danger,\\n    \\"light\\":      $light,\\n    \\"dark\\":       $dark\\n  ),\\n  $theme-colors\\n);\\n\\n// Set a specific jump point for requesting color jumps\\n$theme-color-interval:      8% !default;\\n\\n// The yiq lightness value that determines when the lightness of color changes from \\"dark\\" to \\"light\\". Acceptable values are between 0 and 255.\\n$yiq-contrasted-threshold:  150 !default;\\n\\n// Customize the light and dark text colors for use in our YIQ color contrast function.\\n$yiq-text-dark:             $gray-900 !default;\\n$yiq-text-light:            $white !default;\\n\\n// Characters which are escaped by the escape-svg function\\n$escaped-characters: (\\n  (\\"<\\",\\"%3c\\"),\\n  (\\">\\",\\"%3e\\"),\\n  (\\"#\\",\\"%23\\"),\\n) !default;\\n\\n\\n// Options\\n//\\n// Quickly modify global styling by enabling or disabling optional features.\\n\\n$enable-caret:                                true !default;\\n$enable-rounded:                              true !default;\\n$enable-shadows:                              false !default;\\n$enable-gradients:                            false !default;\\n$enable-transitions:                          true !default;\\n$enable-prefers-reduced-motion-media-query:   true !default;\\n$enable-hover-media-query:                    false !default; // Deprecated, no longer affects any compiled CSS\\n$enable-grid-classes:                         true !default;\\n$enable-pointer-cursor-for-buttons:           true !default;\\n$enable-print-styles:                         true !default;\\n$enable-responsive-font-sizes:                false !default;\\n$enable-validation-icons:                     true !default;\\n$enable-deprecation-messages:                 true !default;\\n\\n\\n// Spacing\\n//\\n// Control the default styling of most Bootstrap elements by modifying these\\n// variables. Mostly focused on spacing.\\n// You can add more entries to the $spacers map, should you need more variation.\\n\\n$spacer: 1rem !default;\\n$spacers: () !default;\\n// stylelint-disable-next-line scss/dollar-variable-default\\n$spacers: map-merge(\\n  (\\n    0: 0,\\n    1: ($spacer * .25),\\n    2: ($spacer * .5),\\n    3: $spacer,\\n    4: ($spacer * 1.5),\\n    5: ($spacer * 3)\\n  ),\\n  $spacers\\n);\\n\\n// This variable affects the `.h-*` and `.w-*` classes.\\n$sizes: () !default;\\n// stylelint-disable-next-line scss/dollar-variable-default\\n$sizes: map-merge(\\n  (\\n    25: 25%,\\n    50: 50%,\\n    75: 75%,\\n    100: 100%,\\n    auto: auto\\n  ),\\n  $sizes\\n);\\n\\n\\n// Body\\n//\\n// Settings for the `<body>` element.\\n\\n$body-bg:                   $white !default;\\n$body-color:                $gray-900 !default;\\n\\n\\n// Links\\n//\\n// Style anchor elements.\\n\\n$link-color:                              theme-color(\\"primary\\") !default;\\n$link-decoration:                         none !default;\\n$link-hover-color:                        darken($link-color, 15%) !default;\\n$link-hover-decoration:                   underline !default;\\n// Darken percentage for links with `.text-*` class (e.g. `.text-success`)\\n$emphasized-link-hover-darken-percentage: 15% !default;\\n\\n// Paragraphs\\n//\\n// Style p element.\\n\\n$paragraph-margin-bottom:   1rem !default;\\n\\n\\n// Grid breakpoints\\n//\\n// Define the minimum dimensions at which your layout will change,\\n// adapting to different screen sizes, for use in media queries.\\n\\n$grid-breakpoints: (\\n  xs: 0,\\n  sm: 576px,\\n  md: 768px,\\n  lg: 992px,\\n  xl: 1200px\\n) !default;\\n\\n@include _assert-ascending($grid-breakpoints, \\"$grid-breakpoints\\");\\n@include _assert-starts-at-zero($grid-breakpoints, \\"$grid-breakpoints\\");\\n\\n\\n// Grid containers\\n//\\n// Define the maximum width of `.container` for different screen sizes.\\n\\n$container-max-widths: (\\n  sm: 540px,\\n  md: 720px,\\n  lg: 960px,\\n  xl: 1140px\\n) !default;\\n\\n@include _assert-ascending($container-max-widths, \\"$container-max-widths\\");\\n\\n\\n// Grid columns\\n//\\n// Set the number of columns and specify the width of the gutters.\\n\\n$grid-columns:                12 !default;\\n$grid-gutter-width:           30px !default;\\n$grid-row-columns:            6 !default;\\n\\n\\n// Components\\n//\\n// Define common padding and border radius sizes and more.\\n\\n$line-height-lg:              1.5 !default;\\n$line-height-sm:              1.5 !default;\\n\\n$border-width:                1px !default;\\n$border-color:                $gray-300 !default;\\n\\n$border-radius:               .25rem !default;\\n$border-radius-lg:            .3rem !default;\\n$border-radius-sm:            .2rem !default;\\n\\n$rounded-pill:                50rem !default;\\n\\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\\n\\n$component-active-color:      $white !default;\\n$component-active-bg:         theme-color(\\"primary\\") !default;\\n\\n$caret-width:                 .3em !default;\\n$caret-vertical-align:        $caret-width * .85 !default;\\n$caret-spacing:               $caret-width * .85 !default;\\n\\n$transition-base:             all .2s ease-in-out !default;\\n$transition-fade:             opacity .15s linear !default;\\n$transition-collapse:         height .35s ease !default;\\n\\n$embed-responsive-aspect-ratios: () !default;\\n// stylelint-disable-next-line scss/dollar-variable-default\\n$embed-responsive-aspect-ratios: join(\\n  (\\n    (21 9),\\n    (16 9),\\n    (4 3),\\n    (1 1),\\n  ),\\n  $embed-responsive-aspect-ratios\\n);\\n\\n// Typography\\n//\\n// Font, line-height, and color for body text, headings, and more.\\n\\n// stylelint-disable value-keyword-case\\n$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\" !default;\\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace !default;\\n$font-family-base:            $font-family-sans-serif !default;\\n// stylelint-enable value-keyword-case\\n\\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\\n$font-size-lg:                $font-size-base * 1.25 !default;\\n$font-size-sm:                $font-size-base * .875 !default;\\n\\n$font-weight-lighter:         lighter !default;\\n$font-weight-light:           300 !default;\\n$font-weight-normal:          400 !default;\\n$font-weight-bold:            700 !default;\\n$font-weight-bolder:          bolder !default;\\n\\n$font-weight-base:            $font-weight-normal !default;\\n$line-height-base:            1.5 !default;\\n\\n$h1-font-size:                $font-size-base * 2.5 !default;\\n$h2-font-size:                $font-size-base * 2 !default;\\n$h3-font-size:                $font-size-base * 1.75 !default;\\n$h4-font-size:                $font-size-base * 1.5 !default;\\n$h5-font-size:                $font-size-base * 1.25 !default;\\n$h6-font-size:                $font-size-base !default;\\n\\n$headings-margin-bottom:      $spacer / 2 !default;\\n$headings-font-family:        null !default;\\n$headings-font-weight:        500 !default;\\n$headings-line-height:        1.2 !default;\\n$headings-color:              null !default;\\n\\n$display1-size:               6rem !default;\\n$display2-size:               5.5rem !default;\\n$display3-size:               4.5rem !default;\\n$display4-size:               3.5rem !default;\\n\\n$display1-weight:             300 !default;\\n$display2-weight:             300 !default;\\n$display3-weight:             300 !default;\\n$display4-weight:             300 !default;\\n$display-line-height:         $headings-line-height !default;\\n\\n$lead-font-size:              $font-size-base * 1.25 !default;\\n$lead-font-weight:            300 !default;\\n\\n$small-font-size:             80% !default;\\n\\n$text-muted:                  $gray-600 !default;\\n\\n$blockquote-small-color:      $gray-600 !default;\\n$blockquote-small-font-size:  $small-font-size !default;\\n$blockquote-font-size:        $font-size-base * 1.25 !default;\\n\\n$hr-border-color:             rgba($black, .1) !default;\\n$hr-border-width:             $border-width !default;\\n\\n$mark-padding:                .2em !default;\\n\\n$dt-font-weight:              $font-weight-bold !default;\\n\\n$kbd-box-shadow:              inset 0 -.1rem 0 rgba($black, .25) !default;\\n$nested-kbd-font-weight:      $font-weight-bold !default;\\n\\n$list-inline-padding:         .5rem !default;\\n\\n$mark-bg:                     #fcf8e3 !default;\\n\\n$hr-margin-y:                 $spacer !default;\\n\\n\\n// Tables\\n//\\n// Customizes the `.table` component with basic values, each used across all table variations.\\n\\n$table-cell-padding:          .75rem !default;\\n$table-cell-padding-sm:       .3rem !default;\\n\\n$table-color:                 $body-color !default;\\n$table-bg:                    null !default;\\n$table-accent-bg:             rgba($black, .05) !default;\\n$table-hover-color:           $table-color !default;\\n$table-hover-bg:              rgba($black, .075) !default;\\n$table-active-bg:             $table-hover-bg !default;\\n\\n$table-border-width:          $border-width !default;\\n$table-border-color:          $border-color !default;\\n\\n$table-head-bg:               $gray-200 !default;\\n$table-head-color:            $gray-700 !default;\\n\\n$table-dark-color:            $white !default;\\n$table-dark-bg:               $gray-800 !default;\\n$table-dark-accent-bg:        rgba($white, .05) !default;\\n$table-dark-hover-color:      $table-dark-color !default;\\n$table-dark-hover-bg:         rgba($white, .075) !default;\\n$table-dark-border-color:     lighten($table-dark-bg, 7.5%) !default;\\n\\n$table-striped-order:         odd !default;\\n\\n$table-caption-color:         $text-muted !default;\\n\\n$table-bg-level:              -9 !default;\\n$table-border-level:          -6 !default;\\n\\n\\n// Buttons + Forms\\n//\\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\\n\\n$input-btn-padding-y:         .375rem !default;\\n$input-btn-padding-x:         .75rem !default;\\n$input-btn-font-family:       null !default;\\n$input-btn-font-size:         $font-size-base !default;\\n$input-btn-line-height:       $line-height-base !default;\\n\\n$input-btn-focus-width:       .2rem !default;\\n$input-btn-focus-color:       rgba($component-active-bg, .25) !default;\\n$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;\\n\\n$input-btn-padding-y-sm:      .25rem !default;\\n$input-btn-padding-x-sm:      .5rem !default;\\n$input-btn-font-size-sm:      $font-size-sm !default;\\n$input-btn-line-height-sm:    $line-height-sm !default;\\n\\n$input-btn-padding-y-lg:      .5rem !default;\\n$input-btn-padding-x-lg:      1rem !default;\\n$input-btn-font-size-lg:      $font-size-lg !default;\\n$input-btn-line-height-lg:    $line-height-lg !default;\\n\\n$input-btn-border-width:      $border-width !default;\\n\\n\\n// Buttons\\n//\\n// For each of Bootstrap\'s buttons, define text, background, and border color.\\n\\n$btn-padding-y:               $input-btn-padding-y !default;\\n$btn-padding-x:               $input-btn-padding-x !default;\\n$btn-font-family:             $input-btn-font-family !default;\\n$btn-font-size:               $input-btn-font-size !default;\\n$btn-line-height:             $input-btn-line-height !default;\\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\\n\\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\\n$btn-line-height-sm:          $input-btn-line-height-sm !default;\\n\\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\\n$btn-line-height-lg:          $input-btn-line-height-lg !default;\\n\\n$btn-border-width:            $input-btn-border-width !default;\\n\\n$btn-font-weight:             $font-weight-normal !default;\\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\\n$btn-focus-width:             $input-btn-focus-width !default;\\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\\n$btn-disabled-opacity:        .65 !default;\\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\\n\\n$btn-link-disabled-color:     $gray-600 !default;\\n\\n$btn-block-spacing-y:         .5rem !default;\\n\\n// Allows for customizing button radius independently from global border radius\\n$btn-border-radius:           $border-radius !default;\\n$btn-border-radius-lg:        $border-radius-lg !default;\\n$btn-border-radius-sm:        $border-radius-sm !default;\\n\\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\\n\\n\\n// Forms\\n\\n$label-margin-bottom:                   .5rem !default;\\n\\n$input-padding-y:                       $input-btn-padding-y !default;\\n$input-padding-x:                       $input-btn-padding-x !default;\\n$input-font-family:                     $input-btn-font-family !default;\\n$input-font-size:                       $input-btn-font-size !default;\\n$input-font-weight:                     $font-weight-base !default;\\n$input-line-height:                     $input-btn-line-height !default;\\n\\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\\n$input-line-height-sm:                  $input-btn-line-height-sm !default;\\n\\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\\n$input-line-height-lg:                  $input-btn-line-height-lg !default;\\n\\n$input-bg:                              $white !default;\\n$input-disabled-bg:                     $gray-200 !default;\\n\\n$input-color:                           $gray-700 !default;\\n$input-border-color:                    $gray-400 !default;\\n$input-border-width:                    $input-btn-border-width !default;\\n$input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;\\n\\n$input-border-radius:                   $border-radius !default;\\n$input-border-radius-lg:                $border-radius-lg !default;\\n$input-border-radius-sm:                $border-radius-sm !default;\\n\\n$input-focus-bg:                        $input-bg !default;\\n$input-focus-border-color:              lighten($component-active-bg, 25%) !default;\\n$input-focus-color:                     $input-color !default;\\n$input-focus-width:                     $input-btn-focus-width !default;\\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\\n\\n$input-placeholder-color:               $gray-600 !default;\\n$input-plaintext-color:                 $body-color !default;\\n\\n$input-height-border:                   $input-border-width * 2 !default;\\n\\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;\\n\\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\\n$input-height-sm:                       add($input-line-height-sm * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\\n$input-height-lg:                       add($input-line-height-lg * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\\n\\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\\n\\n$form-text-margin-top:                  .25rem !default;\\n\\n$form-check-input-gutter:               1.25rem !default;\\n$form-check-input-margin-y:             .3rem !default;\\n$form-check-input-margin-x:             .25rem !default;\\n\\n$form-check-inline-margin-x:            .75rem !default;\\n$form-check-inline-input-margin-x:      .3125rem !default;\\n\\n$form-grid-gutter-width:                10px !default;\\n$form-group-margin-bottom:              1rem !default;\\n\\n$input-group-addon-color:               $input-color !default;\\n$input-group-addon-bg:                  $gray-200 !default;\\n$input-group-addon-border-color:        $input-border-color !default;\\n\\n$custom-forms-transition:               background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\\n\\n$custom-control-gutter:                 .5rem !default;\\n$custom-control-spacer-x:               1rem !default;\\n$custom-control-cursor:                 null !default;\\n\\n$custom-control-indicator-size:         1rem !default;\\n$custom-control-indicator-bg:           $input-bg !default;\\n\\n$custom-control-indicator-bg-size:      50% 50% !default;\\n$custom-control-indicator-box-shadow:   $input-box-shadow !default;\\n$custom-control-indicator-border-color: $gray-500 !default;\\n$custom-control-indicator-border-width: $input-border-width !default;\\n\\n$custom-control-label-color:            null !default;\\n\\n$custom-control-indicator-disabled-bg:          $input-disabled-bg !default;\\n$custom-control-label-disabled-color:           $gray-600 !default;\\n\\n$custom-control-indicator-checked-color:        $component-active-color !default;\\n$custom-control-indicator-checked-bg:           $component-active-bg !default;\\n$custom-control-indicator-checked-disabled-bg:  rgba(theme-color(\\"primary\\"), .5) !default;\\n$custom-control-indicator-checked-box-shadow:   none !default;\\n$custom-control-indicator-checked-border-color: $custom-control-indicator-checked-bg !default;\\n\\n$custom-control-indicator-focus-box-shadow:     $input-focus-box-shadow !default;\\n$custom-control-indicator-focus-border-color:   $input-focus-border-color !default;\\n\\n$custom-control-indicator-active-color:         $component-active-color !default;\\n$custom-control-indicator-active-bg:            lighten($component-active-bg, 35%) !default;\\n$custom-control-indicator-active-box-shadow:    none !default;\\n$custom-control-indicator-active-border-color:  $custom-control-indicator-active-bg !default;\\n\\n$custom-checkbox-indicator-border-radius:       $border-radius !default;\\n$custom-checkbox-indicator-icon-checked:        url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'><path fill=\'#{$custom-control-indicator-checked-color}\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z\'/></svg>\\") !default;\\n\\n$custom-checkbox-indicator-indeterminate-bg:           $component-active-bg !default;\\n$custom-checkbox-indicator-indeterminate-color:        $custom-control-indicator-checked-color !default;\\n$custom-checkbox-indicator-icon-indeterminate:         url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'><path stroke=\'#{$custom-checkbox-indicator-indeterminate-color}\' d=\'M0 2h4\'/></svg>\\") !default;\\n$custom-checkbox-indicator-indeterminate-box-shadow:   none !default;\\n$custom-checkbox-indicator-indeterminate-border-color: $custom-checkbox-indicator-indeterminate-bg !default;\\n\\n$custom-radio-indicator-border-radius:          50% !default;\\n$custom-radio-indicator-icon-checked:           url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'#{$custom-control-indicator-checked-color}\'/></svg>\\") !default;\\n\\n$custom-switch-width:                           $custom-control-indicator-size * 1.75 !default;\\n$custom-switch-indicator-border-radius:         $custom-control-indicator-size / 2 !default;\\n$custom-switch-indicator-size:                  subtract($custom-control-indicator-size, $custom-control-indicator-border-width * 4) !default;\\n\\n$custom-select-padding-y:           $input-padding-y !default;\\n$custom-select-padding-x:           $input-padding-x !default;\\n$custom-select-font-family:         $input-font-family !default;\\n$custom-select-font-size:           $input-font-size !default;\\n$custom-select-height:              $input-height !default;\\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\\n$custom-select-font-weight:         $input-font-weight !default;\\n$custom-select-line-height:         $input-line-height !default;\\n$custom-select-color:               $input-color !default;\\n$custom-select-disabled-color:      $gray-600 !default;\\n$custom-select-bg:                  $input-bg !default;\\n$custom-select-disabled-bg:         $gray-200 !default;\\n$custom-select-bg-size:             8px 10px !default; // In pixels because image dimensions\\n$custom-select-indicator-color:     $gray-800 !default;\\n$custom-select-indicator:           url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'5\' viewBox=\'0 0 4 5\'><path fill=\'#{$custom-select-indicator-color}\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>\\") !default;\\n$custom-select-background:          escape-svg($custom-select-indicator) no-repeat right $custom-select-padding-x center / $custom-select-bg-size !default; // Used so we can have multiple background elements (e.g., arrow and feedback icon)\\n\\n$custom-select-feedback-icon-padding-right: add(1em * .75, (2 * $custom-select-padding-y * .75) + $custom-select-padding-x + $custom-select-indicator-padding) !default;\\n$custom-select-feedback-icon-position:      center right ($custom-select-padding-x + $custom-select-indicator-padding) !default;\\n$custom-select-feedback-icon-size:          $input-height-inner-half $input-height-inner-half !default;\\n\\n$custom-select-border-width:        $input-border-width !default;\\n$custom-select-border-color:        $input-border-color !default;\\n$custom-select-border-radius:       $border-radius !default;\\n$custom-select-box-shadow:          inset 0 1px 2px rgba($black, .075) !default;\\n\\n$custom-select-focus-border-color:  $input-focus-border-color !default;\\n$custom-select-focus-width:         $input-focus-width !default;\\n$custom-select-focus-box-shadow:    0 0 0 $custom-select-focus-width $input-btn-focus-color !default;\\n\\n$custom-select-padding-y-sm:        $input-padding-y-sm !default;\\n$custom-select-padding-x-sm:        $input-padding-x-sm !default;\\n$custom-select-font-size-sm:        $input-font-size-sm !default;\\n$custom-select-height-sm:           $input-height-sm !default;\\n\\n$custom-select-padding-y-lg:        $input-padding-y-lg !default;\\n$custom-select-padding-x-lg:        $input-padding-x-lg !default;\\n$custom-select-font-size-lg:        $input-font-size-lg !default;\\n$custom-select-height-lg:           $input-height-lg !default;\\n\\n$custom-range-track-width:          100% !default;\\n$custom-range-track-height:         .5rem !default;\\n$custom-range-track-cursor:         pointer !default;\\n$custom-range-track-bg:             $gray-300 !default;\\n$custom-range-track-border-radius:  1rem !default;\\n$custom-range-track-box-shadow:     inset 0 .25rem .25rem rgba($black, .1) !default;\\n\\n$custom-range-thumb-width:                   1rem !default;\\n$custom-range-thumb-height:                  $custom-range-thumb-width !default;\\n$custom-range-thumb-bg:                      $component-active-bg !default;\\n$custom-range-thumb-border:                  0 !default;\\n$custom-range-thumb-border-radius:           1rem !default;\\n$custom-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\\n$custom-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\\n$custom-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in IE/Edge\\n$custom-range-thumb-active-bg:               lighten($component-active-bg, 35%) !default;\\n$custom-range-thumb-disabled-bg:             $gray-500 !default;\\n\\n$custom-file-height:                $input-height !default;\\n$custom-file-height-inner:          $input-height-inner !default;\\n$custom-file-focus-border-color:    $input-focus-border-color !default;\\n$custom-file-focus-box-shadow:      $input-focus-box-shadow !default;\\n$custom-file-disabled-bg:           $input-disabled-bg !default;\\n\\n$custom-file-padding-y:             $input-padding-y !default;\\n$custom-file-padding-x:             $input-padding-x !default;\\n$custom-file-line-height:           $input-line-height !default;\\n$custom-file-font-family:           $input-font-family !default;\\n$custom-file-font-weight:           $input-font-weight !default;\\n$custom-file-color:                 $input-color !default;\\n$custom-file-bg:                    $input-bg !default;\\n$custom-file-border-width:          $input-border-width !default;\\n$custom-file-border-color:          $input-border-color !default;\\n$custom-file-border-radius:         $input-border-radius !default;\\n$custom-file-box-shadow:            $input-box-shadow !default;\\n$custom-file-button-color:          $custom-file-color !default;\\n$custom-file-button-bg:             $input-group-addon-bg !default;\\n$custom-file-text: (\\n  en: \\"Browse\\"\\n) !default;\\n\\n\\n// Form validation\\n\\n$form-feedback-margin-top:          $form-text-margin-top !default;\\n$form-feedback-font-size:           $small-font-size !default;\\n$form-feedback-valid-color:         theme-color(\\"success\\") !default;\\n$form-feedback-invalid-color:       theme-color(\\"danger\\") !default;\\n\\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\\n$form-feedback-icon-valid:          url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'><path fill=\'#{$form-feedback-icon-valid-color}\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/></svg>\\") !default;\\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\\n$form-feedback-icon-invalid:        url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'#{$form-feedback-icon-invalid-color}\' viewBox=\'0 0 12 12\'><circle cx=\'6\' cy=\'6\' r=\'4.5\'/><path stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/><circle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'#{$form-feedback-icon-invalid-color}\' stroke=\'none\'/></svg>\\") !default;\\n\\n$form-validation-states: () !default;\\n// stylelint-disable-next-line scss/dollar-variable-default\\n$form-validation-states: map-merge(\\n  (\\n    \\"valid\\": (\\n      \\"color\\": $form-feedback-valid-color,\\n      \\"icon\\": $form-feedback-icon-valid\\n    ),\\n    \\"invalid\\": (\\n      \\"color\\": $form-feedback-invalid-color,\\n      \\"icon\\": $form-feedback-icon-invalid\\n    ),\\n  ),\\n  $form-validation-states\\n);\\n\\n// Z-index master list\\n//\\n// Warning: Avoid customizing these values. They\'re used for a bird\'s eye view\\n// of components dependent on the z-axis and are designed to all work together.\\n\\n$zindex-dropdown:                   1000 !default;\\n$zindex-sticky:                     1020 !default;\\n$zindex-fixed:                      1030 !default;\\n$zindex-modal-backdrop:             1040 !default;\\n$zindex-modal:                      1050 !default;\\n$zindex-popover:                    1060 !default;\\n$zindex-tooltip:                    1070 !default;\\n\\n\\n// Navs\\n\\n$nav-link-padding-y:                .5rem !default;\\n$nav-link-padding-x:                1rem !default;\\n$nav-link-disabled-color:           $gray-600 !default;\\n\\n$nav-tabs-border-color:             $gray-300 !default;\\n$nav-tabs-border-width:             $border-width !default;\\n$nav-tabs-border-radius:            $border-radius !default;\\n$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;\\n$nav-tabs-link-active-color:        $gray-700 !default;\\n$nav-tabs-link-active-bg:           $body-bg !default;\\n$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;\\n\\n$nav-pills-border-radius:           $border-radius !default;\\n$nav-pills-link-active-color:       $component-active-color !default;\\n$nav-pills-link-active-bg:          $component-active-bg !default;\\n\\n$nav-divider-color:                 $gray-200 !default;\\n$nav-divider-margin-y:              $spacer / 2 !default;\\n\\n\\n// Navbar\\n\\n$navbar-padding-y:                  $spacer / 2 !default;\\n$navbar-padding-x:                  $spacer !default;\\n\\n$navbar-nav-link-padding-x:         .5rem !default;\\n\\n$navbar-brand-font-size:            $font-size-lg !default;\\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\\n\\n$navbar-toggler-padding-y:          .25rem !default;\\n$navbar-toggler-padding-x:          .75rem !default;\\n$navbar-toggler-font-size:          $font-size-lg !default;\\n$navbar-toggler-border-radius:      $btn-border-radius !default;\\n\\n$navbar-dark-color:                 rgba($white, .5) !default;\\n$navbar-dark-hover-color:           rgba($white, .75) !default;\\n$navbar-dark-active-color:          $white !default;\\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\\n$navbar-dark-toggler-icon-bg:       url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 30 30\'><path stroke=\'#{$navbar-dark-color}\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/></svg>\\") !default;\\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\\n\\n$navbar-light-color:                rgba($black, .5) !default;\\n$navbar-light-hover-color:          rgba($black, .7) !default;\\n$navbar-light-active-color:         rgba($black, .9) !default;\\n$navbar-light-disabled-color:       rgba($black, .3) !default;\\n$navbar-light-toggler-icon-bg:      url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 30 30\'><path stroke=\'#{$navbar-light-color}\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/></svg>\\") !default;\\n$navbar-light-toggler-border-color: rgba($black, .1) !default;\\n\\n$navbar-light-brand-color:                $navbar-light-active-color !default;\\n$navbar-light-brand-hover-color:          $navbar-light-active-color !default;\\n$navbar-dark-brand-color:                 $navbar-dark-active-color !default;\\n$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;\\n\\n\\n// Dropdowns\\n//\\n// Dropdown menu container and contents.\\n\\n$dropdown-min-width:                10rem !default;\\n$dropdown-padding-y:                .5rem !default;\\n$dropdown-spacer:                   .125rem !default;\\n$dropdown-font-size:                $font-size-base !default;\\n$dropdown-color:                    $body-color !default;\\n$dropdown-bg:                       $white !default;\\n$dropdown-border-color:             rgba($black, .15) !default;\\n$dropdown-border-radius:            $border-radius !default;\\n$dropdown-border-width:             $border-width !default;\\n$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;\\n$dropdown-divider-bg:               $gray-200 !default;\\n$dropdown-divider-margin-y:         $nav-divider-margin-y !default;\\n$dropdown-box-shadow:               0 .5rem 1rem rgba($black, .175) !default;\\n\\n$dropdown-link-color:               $gray-900 !default;\\n$dropdown-link-hover-color:         darken($gray-900, 5%) !default;\\n$dropdown-link-hover-bg:            $gray-100 !default;\\n\\n$dropdown-link-active-color:        $component-active-color !default;\\n$dropdown-link-active-bg:           $component-active-bg !default;\\n\\n$dropdown-link-disabled-color:      $gray-600 !default;\\n\\n$dropdown-item-padding-y:           .25rem !default;\\n$dropdown-item-padding-x:           1.5rem !default;\\n\\n$dropdown-header-color:             $gray-600 !default;\\n\\n\\n// Pagination\\n\\n$pagination-padding-y:              .5rem !default;\\n$pagination-padding-x:              .75rem !default;\\n$pagination-padding-y-sm:           .25rem !default;\\n$pagination-padding-x-sm:           .5rem !default;\\n$pagination-padding-y-lg:           .75rem !default;\\n$pagination-padding-x-lg:           1.5rem !default;\\n$pagination-line-height:            1.25 !default;\\n\\n$pagination-color:                  $link-color !default;\\n$pagination-bg:                     $white !default;\\n$pagination-border-width:           $border-width !default;\\n$pagination-border-color:           $gray-300 !default;\\n\\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;\\n$pagination-focus-outline:          0 !default;\\n\\n$pagination-hover-color:            $link-hover-color !default;\\n$pagination-hover-bg:               $gray-200 !default;\\n$pagination-hover-border-color:     $gray-300 !default;\\n\\n$pagination-active-color:           $component-active-color !default;\\n$pagination-active-bg:              $component-active-bg !default;\\n$pagination-active-border-color:    $pagination-active-bg !default;\\n\\n$pagination-disabled-color:         $gray-600 !default;\\n$pagination-disabled-bg:            $white !default;\\n$pagination-disabled-border-color:  $gray-300 !default;\\n\\n\\n// Jumbotron\\n\\n$jumbotron-padding:                 2rem !default;\\n$jumbotron-color:                   null !default;\\n$jumbotron-bg:                      $gray-200 !default;\\n\\n\\n// Cards\\n\\n$card-spacer-y:                     .75rem !default;\\n$card-spacer-x:                     1.25rem !default;\\n$card-border-width:                 $border-width !default;\\n$card-border-radius:                $border-radius !default;\\n$card-border-color:                 rgba($black, .125) !default;\\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\\n$card-cap-bg:                       rgba($black, .03) !default;\\n$card-cap-color:                    null !default;\\n$card-height:                       null !default;\\n$card-color:                        null !default;\\n$card-bg:                           $white !default;\\n\\n$card-img-overlay-padding:          1.25rem !default;\\n\\n$card-group-margin:                 $grid-gutter-width / 2 !default;\\n$card-deck-margin:                  $card-group-margin !default;\\n\\n$card-columns-count:                3 !default;\\n$card-columns-gap:                  1.25rem !default;\\n$card-columns-margin:               $card-spacer-y !default;\\n\\n\\n// Tooltips\\n\\n$tooltip-font-size:                 $font-size-sm !default;\\n$tooltip-max-width:                 200px !default;\\n$tooltip-color:                     $white !default;\\n$tooltip-bg:                        $black !default;\\n$tooltip-border-radius:             $border-radius !default;\\n$tooltip-opacity:                   .9 !default;\\n$tooltip-padding-y:                 .25rem !default;\\n$tooltip-padding-x:                 .5rem !default;\\n$tooltip-margin:                    0 !default;\\n\\n$tooltip-arrow-width:               .8rem !default;\\n$tooltip-arrow-height:              .4rem !default;\\n$tooltip-arrow-color:               $tooltip-bg !default;\\n\\n// Form tooltips must come after regular tooltips\\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\\n$form-feedback-tooltip-line-height:   $line-height-base !default;\\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\\n\\n\\n// Popovers\\n\\n$popover-font-size:                 $font-size-sm !default;\\n$popover-bg:                        $white !default;\\n$popover-max-width:                 276px !default;\\n$popover-border-width:              $border-width !default;\\n$popover-border-color:              rgba($black, .2) !default;\\n$popover-border-radius:             $border-radius-lg !default;\\n$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;\\n$popover-box-shadow:                0 .25rem .5rem rgba($black, .2) !default;\\n\\n$popover-header-bg:                 darken($popover-bg, 3%) !default;\\n$popover-header-color:              $headings-color !default;\\n$popover-header-padding-y:          .5rem !default;\\n$popover-header-padding-x:          .75rem !default;\\n\\n$popover-body-color:                $body-color !default;\\n$popover-body-padding-y:            $popover-header-padding-y !default;\\n$popover-body-padding-x:            $popover-header-padding-x !default;\\n\\n$popover-arrow-width:               1rem !default;\\n$popover-arrow-height:              .5rem !default;\\n$popover-arrow-color:               $popover-bg !default;\\n\\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\\n\\n\\n// Toasts\\n\\n$toast-max-width:                   350px !default;\\n$toast-padding-x:                   .75rem !default;\\n$toast-padding-y:                   .25rem !default;\\n$toast-font-size:                   .875rem !default;\\n$toast-color:                       null !default;\\n$toast-background-color:            rgba($white, .85) !default;\\n$toast-border-width:                1px !default;\\n$toast-border-color:                rgba(0, 0, 0, .1) !default;\\n$toast-border-radius:               .25rem !default;\\n$toast-box-shadow:                  0 .25rem .75rem rgba($black, .1) !default;\\n\\n$toast-header-color:                $gray-600 !default;\\n$toast-header-background-color:     rgba($white, .85) !default;\\n$toast-header-border-color:         rgba(0, 0, 0, .05) !default;\\n\\n\\n// Badges\\n\\n$badge-font-size:                   75% !default;\\n$badge-font-weight:                 $font-weight-bold !default;\\n$badge-padding-y:                   .25em !default;\\n$badge-padding-x:                   .4em !default;\\n$badge-border-radius:               $border-radius !default;\\n\\n$badge-transition:                  $btn-transition !default;\\n$badge-focus-width:                 $input-btn-focus-width !default;\\n\\n$badge-pill-padding-x:              .6em !default;\\n// Use a higher than normal value to ensure completely rounded edges when\\n// customizing padding or font-size on labels.\\n$badge-pill-border-radius:          10rem !default;\\n\\n\\n// Modals\\n\\n// Padding applied to the modal body\\n$modal-inner-padding:               1rem !default;\\n\\n// Margin between elements in footer, must be lower than or equal to 2 * $modal-inner-padding\\n$modal-footer-margin-between:       .5rem !default;\\n\\n$modal-dialog-margin:               .5rem !default;\\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\\n\\n$modal-title-line-height:           $line-height-base !default;\\n\\n$modal-content-color:               null !default;\\n$modal-content-bg:                  $white !default;\\n$modal-content-border-color:        rgba($black, .2) !default;\\n$modal-content-border-width:        $border-width !default;\\n$modal-content-border-radius:       $border-radius-lg !default;\\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\\n$modal-content-box-shadow-xs:       0 .25rem .5rem rgba($black, .5) !default;\\n$modal-content-box-shadow-sm-up:    0 .5rem 1rem rgba($black, .5) !default;\\n\\n$modal-backdrop-bg:                 $black !default;\\n$modal-backdrop-opacity:            .5 !default;\\n$modal-header-border-color:         $border-color !default;\\n$modal-footer-border-color:         $modal-header-border-color !default;\\n$modal-header-border-width:         $modal-content-border-width !default;\\n$modal-footer-border-width:         $modal-header-border-width !default;\\n$modal-header-padding-y:            1rem !default;\\n$modal-header-padding-x:            1rem !default;\\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\\n\\n$modal-xl:                          1140px !default;\\n$modal-lg:                          800px !default;\\n$modal-md:                          500px !default;\\n$modal-sm:                          300px !default;\\n\\n$modal-fade-transform:              translate(0, -50px) !default;\\n$modal-show-transform:              none !default;\\n$modal-transition:                  transform .3s ease-out !default;\\n$modal-scale-transform:             scale(1.02) !default;\\n\\n\\n// Alerts\\n//\\n// Define alert colors, border radius, and padding.\\n\\n$alert-padding-y:                   .75rem !default;\\n$alert-padding-x:                   1.25rem !default;\\n$alert-margin-bottom:               1rem !default;\\n$alert-border-radius:               $border-radius !default;\\n$alert-link-font-weight:            $font-weight-bold !default;\\n$alert-border-width:                $border-width !default;\\n\\n$alert-bg-level:                    -10 !default;\\n$alert-border-level:                -9 !default;\\n$alert-color-level:                 6 !default;\\n\\n\\n// Progress bars\\n\\n$progress-height:                   1rem !default;\\n$progress-font-size:                $font-size-base * .75 !default;\\n$progress-bg:                       $gray-200 !default;\\n$progress-border-radius:            $border-radius !default;\\n$progress-box-shadow:               inset 0 .1rem .1rem rgba($black, .1) !default;\\n$progress-bar-color:                $white !default;\\n$progress-bar-bg:                   theme-color(\\"primary\\") !default;\\n$progress-bar-animation-timing:     1s linear infinite !default;\\n$progress-bar-transition:           width .6s ease !default;\\n\\n\\n// List group\\n\\n$list-group-color:                  null !default;\\n$list-group-bg:                     $white !default;\\n$list-group-border-color:           rgba($black, .125) !default;\\n$list-group-border-width:           $border-width !default;\\n$list-group-border-radius:          $border-radius !default;\\n\\n$list-group-item-padding-y:         .75rem !default;\\n$list-group-item-padding-x:         1.25rem !default;\\n\\n$list-group-hover-bg:               $gray-100 !default;\\n$list-group-active-color:           $component-active-color !default;\\n$list-group-active-bg:              $component-active-bg !default;\\n$list-group-active-border-color:    $list-group-active-bg !default;\\n\\n$list-group-disabled-color:         $gray-600 !default;\\n$list-group-disabled-bg:            $list-group-bg !default;\\n\\n$list-group-action-color:           $gray-700 !default;\\n$list-group-action-hover-color:     $list-group-action-color !default;\\n\\n$list-group-action-active-color:    $body-color !default;\\n$list-group-action-active-bg:       $gray-200 !default;\\n\\n\\n// Image thumbnails\\n\\n$thumbnail-padding:                 .25rem !default;\\n$thumbnail-bg:                      $body-bg !default;\\n$thumbnail-border-width:            $border-width !default;\\n$thumbnail-border-color:            $gray-300 !default;\\n$thumbnail-border-radius:           $border-radius !default;\\n$thumbnail-box-shadow:              0 1px 2px rgba($black, .075) !default;\\n\\n\\n// Figures\\n\\n$figure-caption-font-size:          90% !default;\\n$figure-caption-color:              $gray-600 !default;\\n\\n\\n// Breadcrumbs\\n\\n$breadcrumb-font-size:              null !default;\\n\\n$breadcrumb-padding-y:              .75rem !default;\\n$breadcrumb-padding-x:              1rem !default;\\n$breadcrumb-item-padding:           .5rem !default;\\n\\n$breadcrumb-margin-bottom:          1rem !default;\\n\\n$breadcrumb-bg:                     $gray-200 !default;\\n$breadcrumb-divider-color:          $gray-600 !default;\\n$breadcrumb-active-color:           $gray-600 !default;\\n$breadcrumb-divider:                quote(\\"/\\") !default;\\n\\n$breadcrumb-border-radius:          $border-radius !default;\\n\\n\\n// Carousel\\n\\n$carousel-control-color:             $white !default;\\n$carousel-control-width:             15% !default;\\n$carousel-control-opacity:           .5 !default;\\n$carousel-control-hover-opacity:     .9 !default;\\n$carousel-control-transition:        opacity .15s ease !default;\\n\\n$carousel-indicator-width:           30px !default;\\n$carousel-indicator-height:          3px !default;\\n$carousel-indicator-hit-area-height: 10px !default;\\n$carousel-indicator-spacer:          3px !default;\\n$carousel-indicator-active-bg:       $white !default;\\n$carousel-indicator-transition:      opacity .6s ease !default;\\n\\n$carousel-caption-width:             70% !default;\\n$carousel-caption-color:             $white !default;\\n\\n$carousel-control-icon-width:        20px !default;\\n\\n$carousel-control-prev-icon-bg:      url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'#{$carousel-control-color}\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'><path d=\'M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z\'/></svg>\\") !default;\\n$carousel-control-next-icon-bg:      url(\\"data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'#{$carousel-control-color}\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'><path d=\'M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z\'/></svg>\\") !default;\\n\\n$carousel-transition-duration:       .6s !default;\\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\\n\\n\\n// Spinners\\n\\n$spinner-width:         2rem !default;\\n$spinner-height:        $spinner-width !default;\\n$spinner-border-width:  .25em !default;\\n\\n$spinner-width-sm:        1rem !default;\\n$spinner-height-sm:       $spinner-width-sm !default;\\n$spinner-border-width-sm: .2em !default;\\n\\n\\n// Close\\n\\n$close-font-size:                   $font-size-base * 1.5 !default;\\n$close-font-weight:                 $font-weight-bold !default;\\n$close-color:                       $black !default;\\n$close-text-shadow:                 0 1px 0 $white !default;\\n\\n\\n// Code\\n\\n$code-font-size:                    87.5% !default;\\n$code-color:                        $pink !default;\\n\\n$kbd-padding-y:                     .2rem !default;\\n$kbd-padding-x:                     .4rem !default;\\n$kbd-font-size:                     $code-font-size !default;\\n$kbd-color:                         $white !default;\\n$kbd-bg:                            $gray-900 !default;\\n\\n$pre-color:                         $gray-900 !default;\\n$pre-scrollable-max-height:         340px !default;\\n\\n\\n// Utilities\\n\\n$displays: none, inline, inline-block, block, table, table-row, table-cell, flex, inline-flex !default;\\n$overflows: auto, hidden !default;\\n$positions: static, relative, absolute, fixed, sticky !default;\\n\\n\\n// Printing\\n\\n$print-page-size:                   a3 !default;\\n$print-body-min-width:              map-get($grid-breakpoints, \\"lg\\") !default;\\n"},{"filePath":"mixins.scss","scss":"// Toggles\\n//\\n// Used in conjunction with global variables to enable certain theme features.\\n\\n// Vendor\\n@import \\"vendor/rfs\\";\\n\\n// Deprecate\\n@import \\"mixins/deprecate\\";\\n\\n// Utilities\\n@import \\"mixins/breakpoints\\";\\n@import \\"mixins/hover\\";\\n@import \\"mixins/image\\";\\n@import \\"mixins/badge\\";\\n@import \\"mixins/resize\\";\\n@import \\"mixins/screen-reader\\";\\n@import \\"mixins/size\\";\\n@import \\"mixins/reset-text\\";\\n@import \\"mixins/text-emphasis\\";\\n@import \\"mixins/text-hide\\";\\n@import \\"mixins/text-truncate\\";\\n@import \\"mixins/visibility\\";\\n\\n// Components\\n@import \\"mixins/alert\\";\\n@import \\"mixins/buttons\\";\\n@import \\"mixins/caret\\";\\n@import \\"mixins/pagination\\";\\n@import \\"mixins/lists\\";\\n@import \\"mixins/list-group\\";\\n@import \\"mixins/nav-divider\\";\\n@import \\"mixins/forms\\";\\n@import \\"mixins/table-row\\";\\n\\n// Skins\\n@import \\"mixins/background-variant\\";\\n@import \\"mixins/border-radius\\";\\n@import \\"mixins/box-shadow\\";\\n@import \\"mixins/gradients\\";\\n@import \\"mixins/transition\\";\\n\\n// Layout\\n@import \\"mixins/clearfix\\";\\n@import \\"mixins/grid-framework\\";\\n@import \\"mixins/grid\\";\\n@import \\"mixins/float\\";\\n"},{"filePath":"vendor/rfs.scss","scss":"// stylelint-disable property-blacklist, scss/dollar-variable-default\\n\\n// SCSS RFS mixin\\n//\\n// Automated font-resizing\\n//\\n// See https://github.com/twbs/rfs\\n\\n// Configuration\\n\\n// Base font size\\n$rfs-base-font-size: 1.25rem !default;\\n$rfs-font-size-unit: rem !default;\\n\\n// Breakpoint at where font-size starts decreasing if screen width is smaller\\n$rfs-breakpoint: 1200px !default;\\n$rfs-breakpoint-unit: px !default;\\n\\n// Resize font-size based on screen height and width\\n$rfs-two-dimensional: false !default;\\n\\n// Factor of decrease\\n$rfs-factor: 10 !default;\\n\\n@if type-of($rfs-factor) != \\"number\\" or $rfs-factor <= 1 {\\n  @error \\"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\\";\\n}\\n\\n// Generate enable or disable classes. Possibilities: false, \\"enable\\" or \\"disable\\"\\n$rfs-class: false !default;\\n\\n// 1 rem = $rfs-rem-value px\\n$rfs-rem-value: 16 !default;\\n\\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\\n$rfs-safari-iframe-resize-bug-fix: false !default;\\n\\n// Disable RFS by setting $enable-responsive-font-sizes to false\\n$enable-responsive-font-sizes: true !default;\\n\\n// Cache $rfs-base-font-size unit\\n$rfs-base-font-size-unit: unit($rfs-base-font-size);\\n\\n// Remove px-unit from $rfs-base-font-size for calculations\\n@if $rfs-base-font-size-unit == \\"px\\" {\\n  $rfs-base-font-size: $rfs-base-font-size / ($rfs-base-font-size * 0 + 1);\\n}\\n@else if $rfs-base-font-size-unit == \\"rem\\" {\\n  $rfs-base-font-size: $rfs-base-font-size / ($rfs-base-font-size * 0 + 1 / $rfs-rem-value);\\n}\\n\\n// Cache $rfs-breakpoint unit to prevent multiple calls\\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\\n\\n// Remove unit from $rfs-breakpoint for calculations\\n@if $rfs-breakpoint-unit-cache == \\"px\\" {\\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1);\\n}\\n@else if $rfs-breakpoint-unit-cache == \\"rem\\" or $rfs-breakpoint-unit-cache == \\"em\\" {\\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1 / $rfs-rem-value);\\n}\\n\\n// Responsive font-size mixin\\n@mixin rfs($fs, $important: false) {\\n  // Cache $fs unit\\n  $fs-unit: if(type-of($fs) == \\"number\\", unit($fs), false);\\n\\n  // Add !important suffix if needed\\n  $rfs-suffix: if($important, \\" !important\\", \\"\\");\\n\\n  // If $fs isn\'t a number (like inherit) or $fs has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\\n  @if not $fs-unit or $fs-unit != \\"\\" and $fs-unit != \\"px\\" and $fs-unit != \\"rem\\" or $fs == 0 {\\n    font-size: #{$fs}#{$rfs-suffix};\\n  }\\n  @else {\\n    // Variables for storing static and fluid rescaling\\n    $rfs-static: null;\\n    $rfs-fluid: null;\\n\\n    // Remove px-unit from $fs for calculations\\n    @if $fs-unit == \\"px\\" {\\n      $fs: $fs / ($fs * 0 + 1);\\n    }\\n    @else if $fs-unit == \\"rem\\" {\\n      $fs: $fs / ($fs * 0 + 1 / $rfs-rem-value);\\n    }\\n\\n    // Set default font-size\\n    @if $rfs-font-size-unit == rem {\\n      $rfs-static: #{$fs / $rfs-rem-value}rem#{$rfs-suffix};\\n    }\\n    @else if $rfs-font-size-unit == px {\\n      $rfs-static: #{$fs}px#{$rfs-suffix};\\n    }\\n    @else {\\n      @error \\"`#{$rfs-font-size-unit}` is not a valid unit for $rfs-font-size-unit. Use `px` or `rem`.\\";\\n    }\\n\\n    // Only add media query if font-size is bigger as the minimum font-size\\n    // If $rfs-factor == 1, no rescaling will take place\\n    @if $fs > $rfs-base-font-size and $enable-responsive-font-sizes {\\n      $min-width: null;\\n      $variable-unit: null;\\n\\n      // Calculate minimum font-size for given font-size\\n      $fs-min: $rfs-base-font-size + ($fs - $rfs-base-font-size) / $rfs-factor;\\n\\n      // Calculate difference between given font-size and minimum font-size for given font-size\\n      $fs-diff: $fs - $fs-min;\\n\\n      // Base font-size formatting\\n      // No need to check if the unit is valid, because we did that before\\n      $min-width: if($rfs-font-size-unit == rem, #{$fs-min / $rfs-rem-value}rem, #{$fs-min}px);\\n\\n      // If two-dimensional, use smallest of screen width and height\\n      $variable-unit: if($rfs-two-dimensional, vmin, vw);\\n\\n      // Calculate the variable width between 0 and $rfs-breakpoint\\n      $variable-width: #{$fs-diff * 100 / $rfs-breakpoint}#{$variable-unit};\\n\\n      // Set the calculated font-size.\\n      $rfs-fluid: calc(#{$min-width} + #{$variable-width}) #{$rfs-suffix};\\n    }\\n\\n    // Rendering\\n    @if $rfs-fluid == null {\\n      // Only render static font-size if no fluid font-size is available\\n      font-size: $rfs-static;\\n    }\\n    @else {\\n      $mq-value: null;\\n\\n      // RFS breakpoint formatting\\n      @if $rfs-breakpoint-unit == em or $rfs-breakpoint-unit == rem {\\n        $mq-value: #{$rfs-breakpoint / $rfs-rem-value}#{$rfs-breakpoint-unit};\\n      }\\n      @else if $rfs-breakpoint-unit == px {\\n        $mq-value: #{$rfs-breakpoint}px;\\n      }\\n      @else {\\n        @error \\"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\\";\\n      }\\n\\n      @if $rfs-class == \\"disable\\" {\\n        // Adding an extra class increases specificity,\\n        // which prevents the media query to override the font size\\n        &,\\n        .disable-responsive-font-size &,\\n        &.disable-responsive-font-size {\\n          font-size: $rfs-static;\\n        }\\n      }\\n      @else {\\n        font-size: $rfs-static;\\n      }\\n\\n      @if $rfs-two-dimensional {\\n        @media (max-width: #{$mq-value}), (max-height: #{$mq-value}) {\\n          @if $rfs-class == \\"enable\\" {\\n            .enable-responsive-font-size &,\\n            &.enable-responsive-font-size {\\n              font-size: $rfs-fluid;\\n            }\\n          }\\n          @else {\\n            font-size: $rfs-fluid;\\n          }\\n\\n          @if $rfs-safari-iframe-resize-bug-fix {\\n            // stylelint-disable-next-line length-zero-no-unit\\n            min-width: 0vw;\\n          }\\n        }\\n      }\\n      @else {\\n        @media (max-width: #{$mq-value}) {\\n          @if $rfs-class == \\"enable\\" {\\n            .enable-responsive-font-size &,\\n            &.enable-responsive-font-size {\\n              font-size: $rfs-fluid;\\n            }\\n          }\\n          @else {\\n            font-size: $rfs-fluid;\\n          }\\n\\n          @if $rfs-safari-iframe-resize-bug-fix {\\n            // stylelint-disable-next-line length-zero-no-unit\\n            min-width: 0vw;\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n// The font-size & responsive-font-size mixin uses RFS to rescale font sizes\\n@mixin font-size($fs, $important: false) {\\n  @include rfs($fs, $important);\\n}\\n\\n@mixin responsive-font-size($fs, $important: false) {\\n  @include rfs($fs, $important);\\n}\\n"},{"filePath":"mixins/deprecate.scss","scss":"// Deprecate mixin\\n//\\n// This mixin can be used to deprecate mixins or functions.\\n// `$enable-deprecation-messages` is a global variable, `$ignore-warning` is a variable that can be passed to\\n// some deprecated mixins to suppress the warning (for example if the mixin is still be used in the current version of Bootstrap)\\n@mixin deprecate($name, $deprecate-version, $remove-version, $ignore-warning: false) {\\n  @if ($enable-deprecation-messages != false and $ignore-warning != true) {\\n    @warn \\"#{$name} has been deprecated as of #{$deprecate-version}. It will be removed entirely in #{$remove-version}.\\";\\n  }\\n}\\n"},{"filePath":"mixins/breakpoints.scss","scss":"// Breakpoint viewport sizes and media queries.\\n//\\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\\n//\\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\\n//\\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\\n\\n// Name of the next breakpoint, or null for the last breakpoint.\\n//\\n//    >> breakpoint-next(sm)\\n//    md\\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    md\\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\\n//    md\\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\\n  $n: index($breakpoint-names, $name);\\n  @return if($n != null and $n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\\n}\\n\\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\\n//\\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    576px\\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\\n  $min: map-get($breakpoints, $name);\\n  @return if($min != 0, $min, null);\\n}\\n\\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\\n// The maximum value is calculated as the minimum of the next one less 0.02px\\n// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\\n//\\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    767.98px\\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\\n  $next: breakpoint-next($name, $breakpoints);\\n  @return if($next, breakpoint-min($next, $breakpoints) - .02, null);\\n}\\n\\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\\n// Useful for making responsive utilities.\\n//\\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    \\"\\"  (Returns a blank string)\\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    \\"-sm\\"\\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\\n  @return if(breakpoint-min($name, $breakpoints) == null, \\"\\", \\"-#{$name}\\");\\n}\\n\\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\\n// Makes the @content apply to the given breakpoint and wider.\\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\\n  $min: breakpoint-min($name, $breakpoints);\\n  @if $min {\\n    @media (min-width: $min) {\\n      @content;\\n    }\\n  } @else {\\n    @content;\\n  }\\n}\\n\\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\\n// Makes the @content apply to the given breakpoint and narrower.\\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\\n  $max: breakpoint-max($name, $breakpoints);\\n  @if $max {\\n    @media (max-width: $max) {\\n      @content;\\n    }\\n  } @else {\\n    @content;\\n  }\\n}\\n\\n// Media that spans multiple breakpoint widths.\\n// Makes the @content apply between the min and max breakpoints\\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\\n  $min: breakpoint-min($lower, $breakpoints);\\n  $max: breakpoint-max($upper, $breakpoints);\\n\\n  @if $min != null and $max != null {\\n    @media (min-width: $min) and (max-width: $max) {\\n      @content;\\n    }\\n  } @else if $max == null {\\n    @include media-breakpoint-up($lower, $breakpoints) {\\n      @content;\\n    }\\n  } @else if $min == null {\\n    @include media-breakpoint-down($upper, $breakpoints) {\\n      @content;\\n    }\\n  }\\n}\\n\\n// Media between the breakpoint\'s minimum and maximum widths.\\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\\n  $min: breakpoint-min($name, $breakpoints);\\n  $max: breakpoint-max($name, $breakpoints);\\n\\n  @if $min != null and $max != null {\\n    @media (min-width: $min) and (max-width: $max) {\\n      @content;\\n    }\\n  } @else if $max == null {\\n    @include media-breakpoint-up($name, $breakpoints) {\\n      @content;\\n    }\\n  } @else if $min == null {\\n    @include media-breakpoint-down($name, $breakpoints) {\\n      @content;\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/hover.scss","scss":"// Hover mixin and `$enable-hover-media-query` are deprecated.\\n//\\n// Originally added during our alphas and maintained during betas, this mixin was\\n// designed to prevent `:hover` stickiness on iOS-an issue where hover styles\\n// would persist after initial touch.\\n//\\n// For backward compatibility, we\'ve kept these mixins and updated them to\\n// always return their regular pseudo-classes instead of a shimmed media query.\\n//\\n// Issue: https://github.com/twbs/bootstrap/issues/25195\\n\\n@mixin hover() {\\n  &:hover { @content; }\\n}\\n\\n@mixin hover-focus() {\\n  &:hover,\\n  &:focus {\\n    @content;\\n  }\\n}\\n\\n@mixin plain-hover-focus() {\\n  &,\\n  &:hover,\\n  &:focus {\\n    @content;\\n  }\\n}\\n\\n@mixin hover-focus-active() {\\n  &:hover,\\n  &:focus,\\n  &:active {\\n    @content;\\n  }\\n}\\n"},{"filePath":"mixins/image.scss","scss":"// Image Mixins\\n// - Responsive image\\n// - Retina image\\n\\n\\n// Responsive image\\n//\\n// Keep images from scaling beyond the width of their parents.\\n\\n@mixin img-fluid() {\\n  // Part 1: Set a maximum relative to the parent\\n  max-width: 100%;\\n  // Part 2: Override the height to auto, otherwise images will be stretched\\n  // when setting a width and height attribute on the img element.\\n  height: auto;\\n}\\n\\n\\n// Retina image\\n//\\n// Short retina mixin for setting background-image and -size.\\n\\n@mixin img-retina($file-1x, $file-2x, $width-1x, $height-1x) {\\n  background-image: url($file-1x);\\n\\n  // Autoprefixer takes care of adding -webkit-min-device-pixel-ratio and -o-min-device-pixel-ratio,\\n  // but doesn\'t convert dppx=>dpi.\\n  // There\'s no such thing as unprefixed min-device-pixel-ratio since it\'s nonstandard.\\n  // Compatibility info: https://caniuse.com/#feat=css-media-resolution\\n  @media only screen and (min-resolution: 192dpi), // IE9-11 don\'t support dppx\\n    only screen and (min-resolution: 2dppx) { // Standardized\\n    background-image: url($file-2x);\\n    background-size: $width-1x $height-1x;\\n  }\\n  @include deprecate(\\"`img-retina()`\\", \\"v4.3.0\\", \\"v5\\");\\n}\\n"},{"filePath":"mixins/badge.scss","scss":"@mixin badge-variant($bg) {\\n  color: color-yiq($bg);\\n  background-color: $bg;\\n\\n  @at-root a#{&} {\\n    @include hover-focus() {\\n      color: color-yiq($bg);\\n      background-color: darken($bg, 10%);\\n    }\\n\\n    &:focus,\\n    &.focus {\\n      outline: 0;\\n      box-shadow: 0 0 0 $badge-focus-width rgba($bg, .5);\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/resize.scss","scss":"// Resize anything\\n\\n@mixin resizable($direction) {\\n  overflow: auto; // Per CSS3 UI, `resize` only applies when `overflow` isn\'t `visible`\\n  resize: $direction; // Options: horizontal, vertical, both\\n}\\n"},{"filePath":"mixins/screen-reader.scss","scss":"// Only display content to screen readers\\n//\\n// See: https://a11yproject.com/posts/how-to-hide-content/\\n// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/\\n\\n@mixin sr-only() {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  padding: 0;\\n  margin: -1px; // Fix for https://github.com/twbs/bootstrap/issues/25686\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  white-space: nowrap;\\n  border: 0;\\n}\\n\\n// Use in conjunction with .sr-only to only display content when it\'s focused.\\n//\\n// Useful for \\"Skip to main content\\" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\\n//\\n// Credit: HTML5 Boilerplate\\n\\n@mixin sr-only-focusable() {\\n  &:active,\\n  &:focus {\\n    position: static;\\n    width: auto;\\n    height: auto;\\n    overflow: visible;\\n    clip: auto;\\n    white-space: normal;\\n  }\\n}\\n"},{"filePath":"mixins/size.scss","scss":"// Sizing shortcuts\\n\\n@mixin size($width, $height: $width) {\\n  width: $width;\\n  height: $height;\\n  @include deprecate(\\"`size()`\\", \\"v4.3.0\\", \\"v5\\");\\n}\\n"},{"filePath":"mixins/reset-text.scss","scss":"@mixin reset-text() {\\n  font-family: $font-family-base;\\n  // We deliberately do NOT reset font-size or word-wrap.\\n  font-style: normal;\\n  font-weight: $font-weight-normal;\\n  line-height: $line-height-base;\\n  text-align: left; // Fallback for where `start` is not supported\\n  text-align: start;\\n  text-decoration: none;\\n  text-shadow: none;\\n  text-transform: none;\\n  letter-spacing: normal;\\n  word-break: normal;\\n  word-spacing: normal;\\n  white-space: normal;\\n  line-break: auto;\\n}\\n"},{"filePath":"mixins/text-emphasis.scss","scss":"// stylelint-disable declaration-no-important\\n\\n// Typography\\n\\n@mixin text-emphasis-variant($parent, $color, $ignore-warning: false) {\\n  #{$parent} {\\n    color: $color !important;\\n  }\\n  @if $emphasized-link-hover-darken-percentage != 0 {\\n    a#{$parent} {\\n      @include hover-focus() {\\n        color: darken($color, $emphasized-link-hover-darken-percentage) !important;\\n      }\\n    }\\n  }\\n  @include deprecate(\\"`text-emphasis-variant()`\\", \\"v4.4.0\\", \\"v5\\", $ignore-warning);\\n}\\n"},{"filePath":"mixins/text-hide.scss","scss":"// CSS image replacement\\n@mixin text-hide($ignore-warning: false) {\\n  // stylelint-disable-next-line font-family-no-missing-generic-family-keyword\\n  font: 0/0 a;\\n  color: transparent;\\n  text-shadow: none;\\n  background-color: transparent;\\n  border: 0;\\n\\n  @include deprecate(\\"`text-hide()`\\", \\"v4.1.0\\", \\"v5\\", $ignore-warning);\\n}\\n"},{"filePath":"mixins/text-truncate.scss","scss":"// Text truncate\\n// Requires inline-block or block for proper styling\\n\\n@mixin text-truncate() {\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n"},{"filePath":"mixins/visibility.scss","scss":"// stylelint-disable declaration-no-important\\n\\n// Visibility\\n\\n@mixin invisible($visibility) {\\n  visibility: $visibility !important;\\n  @include deprecate(\\"`invisible()`\\", \\"v4.3.0\\", \\"v5\\");\\n}\\n"},{"filePath":"mixins/alert.scss","scss":"@mixin alert-variant($background, $border, $color) {\\n  color: $color;\\n  @include gradient-bg($background);\\n  border-color: $border;\\n\\n  hr {\\n    border-top-color: darken($border, 5%);\\n  }\\n\\n  .alert-link {\\n    color: darken($color, 10%);\\n  }\\n}\\n"},{"filePath":"mixins/buttons.scss","scss":"// Button variants\\n//\\n// Easily pump out default styles, as well as :hover, :focus, :active,\\n// and disabled options for all buttons\\n\\n@mixin button-variant($background, $border, $hover-background: darken($background, 7.5%), $hover-border: darken($border, 10%), $active-background: darken($background, 10%), $active-border: darken($border, 12.5%)) {\\n  color: color-yiq($background);\\n  @include gradient-bg($background);\\n  border-color: $border;\\n  @include box-shadow($btn-box-shadow);\\n\\n  @include hover() {\\n    color: color-yiq($hover-background);\\n    @include gradient-bg($hover-background);\\n    border-color: $hover-border;\\n  }\\n\\n  &:focus,\\n  &.focus {\\n    color: color-yiq($hover-background);\\n    @include gradient-bg($hover-background);\\n    border-color: $hover-border;\\n    // Avoid using mixin so we can pass custom focus shadow properly\\n    @if $enable-shadows {\\n      box-shadow: $btn-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\\n    } @else {\\n      box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\\n    }\\n  }\\n\\n  // Disabled comes first so active can properly restyle\\n  &.disabled,\\n  &:disabled {\\n    color: color-yiq($background);\\n    background-color: $background;\\n    border-color: $border;\\n    // Remove CSS gradients if they\'re enabled\\n    @if $enable-gradients {\\n      background-image: none;\\n    }\\n  }\\n\\n  &:not(:disabled):not(.disabled):active,\\n  &:not(:disabled):not(.disabled).active,\\n  .show > &.dropdown-toggle {\\n    color: color-yiq($active-background);\\n    background-color: $active-background;\\n    @if $enable-gradients {\\n      background-image: none; // Remove the gradient for the pressed/active state\\n    }\\n    border-color: $active-border;\\n\\n    &:focus {\\n      // Avoid using mixin so we can pass custom focus shadow properly\\n      @if $enable-shadows and $btn-active-box-shadow != none {\\n        box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\\n      } @else {\\n        box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\\n      }\\n    }\\n  }\\n}\\n\\n@mixin button-outline-variant($color, $color-hover: color-yiq($color), $active-background: $color, $active-border: $color) {\\n  color: $color;\\n  border-color: $color;\\n\\n  @include hover() {\\n    color: $color-hover;\\n    background-color: $active-background;\\n    border-color: $active-border;\\n  }\\n\\n  &:focus,\\n  &.focus {\\n    box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\\n  }\\n\\n  &.disabled,\\n  &:disabled {\\n    color: $color;\\n    background-color: transparent;\\n  }\\n\\n  &:not(:disabled):not(.disabled):active,\\n  &:not(:disabled):not(.disabled).active,\\n  .show > &.dropdown-toggle {\\n    color: color-yiq($active-background);\\n    background-color: $active-background;\\n    border-color: $active-border;\\n\\n    &:focus {\\n      // Avoid using mixin so we can pass custom focus shadow properly\\n      @if $enable-shadows and $btn-active-box-shadow != none {\\n        box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5);\\n      } @else {\\n        box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\\n      }\\n    }\\n  }\\n}\\n\\n// Button sizes\\n@mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {\\n  padding: $padding-y $padding-x;\\n  @include font-size($font-size);\\n  line-height: $line-height;\\n  // Manually declare to provide an override to the browser default\\n  @include border-radius($border-radius, 0);\\n}\\n"},{"filePath":"mixins/caret.scss","scss":"@mixin caret-down() {\\n  border-top: $caret-width solid;\\n  border-right: $caret-width solid transparent;\\n  border-bottom: 0;\\n  border-left: $caret-width solid transparent;\\n}\\n\\n@mixin caret-up() {\\n  border-top: 0;\\n  border-right: $caret-width solid transparent;\\n  border-bottom: $caret-width solid;\\n  border-left: $caret-width solid transparent;\\n}\\n\\n@mixin caret-right() {\\n  border-top: $caret-width solid transparent;\\n  border-right: 0;\\n  border-bottom: $caret-width solid transparent;\\n  border-left: $caret-width solid;\\n}\\n\\n@mixin caret-left() {\\n  border-top: $caret-width solid transparent;\\n  border-right: $caret-width solid;\\n  border-bottom: $caret-width solid transparent;\\n}\\n\\n@mixin caret($direction: down) {\\n  @if $enable-caret {\\n    &::after {\\n      display: inline-block;\\n      margin-left: $caret-spacing;\\n      vertical-align: $caret-vertical-align;\\n      content: \\"\\";\\n      @if $direction == down {\\n        @include caret-down();\\n      } @else if $direction == up {\\n        @include caret-up();\\n      } @else if $direction == right {\\n        @include caret-right();\\n      }\\n    }\\n\\n    @if $direction == left {\\n      &::after {\\n        display: none;\\n      }\\n\\n      &::before {\\n        display: inline-block;\\n        margin-right: $caret-spacing;\\n        vertical-align: $caret-vertical-align;\\n        content: \\"\\";\\n        @include caret-left();\\n      }\\n    }\\n\\n    &:empty::after {\\n      margin-left: 0;\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/pagination.scss","scss":"// Pagination\\n\\n@mixin pagination-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {\\n  .page-link {\\n    padding: $padding-y $padding-x;\\n    @include font-size($font-size);\\n    line-height: $line-height;\\n  }\\n\\n  .page-item {\\n    &:first-child {\\n      .page-link {\\n        @include border-left-radius($border-radius);\\n      }\\n    }\\n    &:last-child {\\n      .page-link {\\n        @include border-right-radius($border-radius);\\n      }\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/lists.scss","scss":"// Lists\\n\\n// Unstyled keeps list items block level, just removes default browser padding and list-style\\n@mixin list-unstyled() {\\n  padding-left: 0;\\n  list-style: none;\\n}\\n"},{"filePath":"mixins/list-group.scss","scss":"// List Groups\\n\\n@mixin list-group-item-variant($state, $background, $color) {\\n  .list-group-item-#{$state} {\\n    color: $color;\\n    background-color: $background;\\n\\n    &.list-group-item-action {\\n      @include hover-focus() {\\n        color: $color;\\n        background-color: darken($background, 5%);\\n      }\\n\\n      &.active {\\n        color: $white;\\n        background-color: $color;\\n        border-color: $color;\\n      }\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/nav-divider.scss","scss":"// Horizontal dividers\\n//\\n// Dividers (basically an hr) within dropdowns and nav lists\\n\\n@mixin nav-divider($color: $nav-divider-color, $margin-y: $nav-divider-margin-y, $ignore-warning: false) {\\n  height: 0;\\n  margin: $margin-y 0;\\n  overflow: hidden;\\n  border-top: 1px solid $color;\\n  @include deprecate(\\"The `nav-divider()` mixin\\", \\"v4.4.0\\", \\"v5\\", $ignore-warning);\\n}\\n"},{"filePath":"mixins/forms.scss","scss":"// Form control focus state\\n//\\n// Generate a customized focus state and for any input with the specified color,\\n// which defaults to the `$input-focus-border-color` variable.\\n//\\n// We highly encourage you to not customize the default value, but instead use\\n// this to tweak colors on an as-needed basis. This aesthetic change is based on\\n// WebKit\'s default styles, but applicable to a wider range of browsers. Its\\n// usability and accessibility should be taken into account with any change.\\n//\\n// Example usage: change the default blue border and shadow to white for better\\n// contrast against a dark gray background.\\n@mixin form-control-focus($ignore-warning: false) {\\n  &:focus {\\n    color: $input-focus-color;\\n    background-color: $input-focus-bg;\\n    border-color: $input-focus-border-color;\\n    outline: 0;\\n    // Avoid using mixin so we can pass custom focus shadow properly\\n    @if $enable-shadows {\\n      box-shadow: $input-box-shadow, $input-focus-box-shadow;\\n    } @else {\\n      box-shadow: $input-focus-box-shadow;\\n    }\\n  }\\n  @include deprecate(\\"The `form-control-focus()` mixin\\", \\"v4.4.0\\", \\"v5\\", $ignore-warning);\\n}\\n\\n// This mixin uses an `if()` technique to be compatible with Dart Sass\\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\\n@mixin form-validation-state-selector($state) {\\n  @if ($state == \\"valid\\" or $state == \\"invalid\\") {\\n    .was-validated #{if(&, \\"&\\", \\"\\")}:#{$state},\\n    #{if(&, \\"&\\", \\"\\")}.is-#{$state} {\\n      @content;\\n    }\\n  } @else {\\n    #{if(&, \\"&\\", \\"\\")}.is-#{$state} {\\n      @content;\\n    }\\n  }\\n}\\n\\n@mixin form-validation-state($state, $color, $icon) {\\n  .#{$state}-feedback {\\n    display: none;\\n    width: 100%;\\n    margin-top: $form-feedback-margin-top;\\n    @include font-size($form-feedback-font-size);\\n    color: $color;\\n  }\\n\\n  .#{$state}-tooltip {\\n    position: absolute;\\n    top: 100%;\\n    z-index: 5;\\n    display: none;\\n    max-width: 100%; // Contain to parent when possible\\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\\n    margin-top: .1rem;\\n    @include font-size($form-feedback-tooltip-font-size);\\n    line-height: $form-feedback-tooltip-line-height;\\n    color: color-yiq($color);\\n    background-color: rgba($color, $form-feedback-tooltip-opacity);\\n    @include border-radius($form-feedback-tooltip-border-radius);\\n  }\\n\\n  @include form-validation-state-selector($state) {\\n    ~ .#{$state}-feedback,\\n    ~ .#{$state}-tooltip {\\n      display: block;\\n    }\\n  }\\n\\n  .form-control {\\n    @include form-validation-state-selector($state) {\\n      border-color: $color;\\n\\n      @if $enable-validation-icons {\\n        padding-right: $input-height-inner;\\n        background-image: escape-svg($icon);\\n        background-repeat: no-repeat;\\n        background-position: right $input-height-inner-quarter center;\\n        background-size: $input-height-inner-half $input-height-inner-half;\\n      }\\n\\n      &:focus {\\n        border-color: $color;\\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\\n      }\\n    }\\n  }\\n\\n  // stylelint-disable-next-line selector-no-qualifying-type\\n  textarea.form-control {\\n    @include form-validation-state-selector($state) {\\n      @if $enable-validation-icons {\\n        padding-right: $input-height-inner;\\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\\n      }\\n    }\\n  }\\n\\n  .custom-select {\\n    @include form-validation-state-selector($state) {\\n      border-color: $color;\\n\\n      @if $enable-validation-icons {\\n        padding-right: $custom-select-feedback-icon-padding-right;\\n        background: $custom-select-background, escape-svg($icon) $custom-select-bg no-repeat $custom-select-feedback-icon-position / $custom-select-feedback-icon-size;\\n      }\\n\\n      &:focus {\\n        border-color: $color;\\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\\n      }\\n    }\\n  }\\n\\n  .form-check-input {\\n    @include form-validation-state-selector($state) {\\n      ~ .form-check-label {\\n        color: $color;\\n      }\\n\\n      ~ .#{$state}-feedback,\\n      ~ .#{$state}-tooltip {\\n        display: block;\\n      }\\n    }\\n  }\\n\\n  .custom-control-input {\\n    @include form-validation-state-selector($state) {\\n      ~ .custom-control-label {\\n        color: $color;\\n\\n        &::before {\\n          border-color: $color;\\n        }\\n      }\\n\\n      &:checked {\\n        ~ .custom-control-label::before {\\n          border-color: lighten($color, 10%);\\n          @include gradient-bg(lighten($color, 10%));\\n        }\\n      }\\n\\n      &:focus {\\n        ~ .custom-control-label::before {\\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\\n        }\\n\\n        &:not(:checked) ~ .custom-control-label::before {\\n          border-color: $color;\\n        }\\n      }\\n    }\\n  }\\n\\n  // custom file\\n  .custom-file-input {\\n    @include form-validation-state-selector($state) {\\n      ~ .custom-file-label {\\n        border-color: $color;\\n      }\\n\\n      &:focus {\\n        ~ .custom-file-label {\\n          border-color: $color;\\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\\n        }\\n      }\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/table-row.scss","scss":"// Tables\\n\\n@mixin table-row-variant($state, $background, $border: null) {\\n  // Exact selectors below required to override `.table-striped` and prevent\\n  // inheritance to nested tables.\\n  .table-#{$state} {\\n    &,\\n    > th,\\n    > td {\\n      background-color: $background;\\n    }\\n\\n    @if $border != null {\\n      th,\\n      td,\\n      thead th,\\n      tbody + tbody {\\n        border-color: $border;\\n      }\\n    }\\n  }\\n\\n  // Hover states for `.table-hover`\\n  // Note: this is not available for cells or rows within `thead` or `tfoot`.\\n  .table-hover {\\n    $hover-background: darken($background, 5%);\\n\\n    .table-#{$state} {\\n      @include hover() {\\n        background-color: $hover-background;\\n\\n        > td,\\n        > th {\\n          background-color: $hover-background;\\n        }\\n      }\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/background-variant.scss","scss":"// stylelint-disable declaration-no-important\\n\\n// Contextual backgrounds\\n\\n@mixin bg-variant($parent, $color, $ignore-warning: false) {\\n  #{$parent} {\\n    background-color: $color !important;\\n  }\\n  a#{$parent},\\n  button#{$parent} {\\n    @include hover-focus() {\\n      background-color: darken($color, 10%) !important;\\n    }\\n  }\\n  @include deprecate(\\"The `bg-variant` mixin\\", \\"v4.4.0\\", \\"v5\\", $ignore-warning);\\n}\\n\\n@mixin bg-gradient-variant($parent, $color) {\\n  #{$parent} {\\n    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x !important;\\n  }\\n}\\n"},{"filePath":"mixins/border-radius.scss","scss":"// stylelint-disable property-blacklist\\n// Single side border-radius\\n\\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\\n  @if $enable-rounded {\\n    border-radius: $radius;\\n  }\\n  @else if $fallback-border-radius != false {\\n    border-radius: $fallback-border-radius;\\n  }\\n}\\n\\n@mixin border-top-radius($radius) {\\n  @if $enable-rounded {\\n    border-top-left-radius: $radius;\\n    border-top-right-radius: $radius;\\n  }\\n}\\n\\n@mixin border-right-radius($radius) {\\n  @if $enable-rounded {\\n    border-top-right-radius: $radius;\\n    border-bottom-right-radius: $radius;\\n  }\\n}\\n\\n@mixin border-bottom-radius($radius) {\\n  @if $enable-rounded {\\n    border-bottom-right-radius: $radius;\\n    border-bottom-left-radius: $radius;\\n  }\\n}\\n\\n@mixin border-left-radius($radius) {\\n  @if $enable-rounded {\\n    border-top-left-radius: $radius;\\n    border-bottom-left-radius: $radius;\\n  }\\n}\\n\\n@mixin border-top-left-radius($radius) {\\n  @if $enable-rounded {\\n    border-top-left-radius: $radius;\\n  }\\n}\\n\\n@mixin border-top-right-radius($radius) {\\n  @if $enable-rounded {\\n    border-top-right-radius: $radius;\\n  }\\n}\\n\\n@mixin border-bottom-right-radius($radius) {\\n  @if $enable-rounded {\\n    border-bottom-right-radius: $radius;\\n  }\\n}\\n\\n@mixin border-bottom-left-radius($radius) {\\n  @if $enable-rounded {\\n    border-bottom-left-radius: $radius;\\n  }\\n}\\n"},{"filePath":"mixins/box-shadow.scss","scss":"@mixin box-shadow($shadow...) {\\n  @if $enable-shadows {\\n    $result: ();\\n\\n    @if (length($shadow) == 1) {\\n      // We can pass `@include box-shadow(none);`\\n      $result: $shadow;\\n    } @else {\\n      // Filter to avoid invalid properties for example `box-shadow: none, 1px 1px black;`\\n      @for $i from 1 through length($shadow) {\\n        @if nth($shadow, $i) != \\"none\\" {\\n          $result: append($result, nth($shadow, $i), \\"comma\\");\\n        }\\n      }\\n    }\\n    @if (length($result) > 0) {\\n      box-shadow: $result;\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/gradients.scss","scss":"// Gradients\\n\\n@mixin gradient-bg($color) {\\n  @if $enable-gradients {\\n    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x;\\n  } @else {\\n    background-color: $color;\\n  }\\n}\\n\\n// Horizontal gradient, from left to right\\n//\\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\\n  background-repeat: repeat-x;\\n}\\n\\n// Vertical gradient, from top to bottom\\n//\\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\\n  background-repeat: repeat-x;\\n}\\n\\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\\n  background-image: linear-gradient($deg, $start-color, $end-color);\\n  background-repeat: repeat-x;\\n}\\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\\n  background-repeat: no-repeat;\\n}\\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\\n  background-repeat: no-repeat;\\n}\\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\\n  background-repeat: no-repeat;\\n}\\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\\n}\\n"},{"filePath":"mixins/transition.scss","scss":"// stylelint-disable property-blacklist\\n@mixin transition($transition...) {\\n  @if $enable-transitions {\\n    @if length($transition) == 0 {\\n      transition: $transition-base;\\n    } @else {\\n      transition: $transition;\\n    }\\n  }\\n\\n  @if $enable-prefers-reduced-motion-media-query {\\n    @media (prefers-reduced-motion: reduce) {\\n      transition: none;\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/clearfix.scss","scss":"@mixin clearfix() {\\n  &::after {\\n    display: block;\\n    clear: both;\\n    content: \\"\\";\\n  }\\n}\\n"},{"filePath":"mixins/grid-framework.scss","scss":"// Framework grid generation\\n//\\n// Used only by Bootstrap to generate the correct number of grid classes given\\n// any value of `$grid-columns`.\\n\\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\\n  // Common properties for all breakpoints\\n  %grid-column {\\n    position: relative;\\n    width: 100%;\\n    padding-right: $gutter / 2;\\n    padding-left: $gutter / 2;\\n  }\\n\\n  @each $breakpoint in map-keys($breakpoints) {\\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\\n\\n    // Allow columns to stretch full width below their breakpoints\\n    @for $i from 1 through $columns {\\n      .col#{$infix}-#{$i} {\\n        @extend %grid-column;\\n      }\\n    }\\n    .col#{$infix},\\n    .col#{$infix}-auto {\\n      @extend %grid-column;\\n    }\\n\\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\\n      .col#{$infix} {\\n        flex-basis: 0;\\n        flex-grow: 1;\\n        max-width: 100%;\\n      }\\n\\n      @for $i from 1 through $grid-row-columns {\\n        .row-cols#{$infix}-#{$i} {\\n          @include row-cols($i);\\n        }\\n      }\\n\\n      .col#{$infix}-auto {\\n        @include make-col-auto();\\n      }\\n\\n      @for $i from 1 through $columns {\\n        .col#{$infix}-#{$i} {\\n          @include make-col($i, $columns);\\n        }\\n      }\\n\\n      .order#{$infix}-first { order: -1; }\\n\\n      .order#{$infix}-last { order: $columns + 1; }\\n\\n      @for $i from 0 through $columns {\\n        .order#{$infix}-#{$i} { order: $i; }\\n      }\\n\\n      // `$columns - 1` because offsetting by the width of an entire row isn\'t possible\\n      @for $i from 0 through ($columns - 1) {\\n        @if not ($infix == \\"\\" and $i == 0) { // Avoid emitting useless .offset-0\\n          .offset#{$infix}-#{$i} {\\n            @include make-col-offset($i, $columns);\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n"},{"filePath":"mixins/grid.scss","scss":"/// Grid system\\n//\\n// Generate semantic grid columns with these mixins.\\n\\n@mixin make-container($gutter: $grid-gutter-width) {\\n  width: 100%;\\n  padding-right: $gutter / 2;\\n  padding-left: $gutter / 2;\\n  margin-right: auto;\\n  margin-left: auto;\\n}\\n\\n\\n// For each breakpoint, define the maximum width of the container in a media query\\n@mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {\\n  @each $breakpoint, $container-max-width in $max-widths {\\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\\n      max-width: $container-max-width;\\n    }\\n  }\\n}\\n\\n@mixin make-row($gutter: $grid-gutter-width) {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin-right: -$gutter / 2;\\n  margin-left: -$gutter / 2;\\n}\\n\\n@mixin make-col-ready($gutter: $grid-gutter-width) {\\n  position: relative;\\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\\n  // always setting `width: 100%;`. This works because we use `flex` values\\n  // later on to override this initial width.\\n  width: 100%;\\n  padding-right: $gutter / 2;\\n  padding-left: $gutter / 2;\\n}\\n\\n@mixin make-col($size, $columns: $grid-columns) {\\n  flex: 0 0 percentage($size / $columns);\\n  // Add a `max-width` to ensure content within each column does not blow out\\n  // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari\\n  // do not appear to require this.\\n  max-width: percentage($size / $columns);\\n}\\n\\n@mixin make-col-auto() {\\n  flex: 0 0 auto;\\n  width: auto;\\n  max-width: 100%; // Reset earlier grid tiers\\n}\\n\\n@mixin make-col-offset($size, $columns: $grid-columns) {\\n  $num: $size / $columns;\\n  margin-left: if($num == 0, 0, percentage($num));\\n}\\n\\n// Row columns\\n//\\n// Specify on a parent element(e.g., .row) to force immediate children into NN\\n// numberof columns. Supports wrapping to new lines, but does not do a Masonry\\n// style grid.\\n@mixin row-cols($count) {\\n  & > * {\\n    flex: 0 0 100% / $count;\\n    max-width: 100% / $count;\\n  }\\n}\\n"},{"filePath":"mixins/float.scss","scss":"// stylelint-disable declaration-no-important\\n\\n@mixin float-left() {\\n  float: left !important;\\n  @include deprecate(\\"The `float-left` mixin\\", \\"v4.3.0\\", \\"v5\\");\\n}\\n@mixin float-right() {\\n  float: right !important;\\n  @include deprecate(\\"The `float-right` mixin\\", \\"v4.3.0\\", \\"v5\\");\\n}\\n@mixin float-none() {\\n  float: none !important;\\n  @include deprecate(\\"The `float-none` mixin\\", \\"v4.3.0\\", \\"v5\\");\\n}\\n"},{"filePath":"root.scss","scss":"// Do not forget to update getting-started/theming.md!\\n:root {\\n  // Custom variable values only support SassScript inside `#{}`.\\n  @each $color, $value in $colors {\\n    --#{$color}: #{$value};\\n  }\\n\\n  @each $color, $value in $theme-colors {\\n    --#{$color}: #{$value};\\n  }\\n\\n  @each $bp, $value in $grid-breakpoints {\\n    --breakpoint-#{$bp}: #{$value};\\n  }\\n\\n  // Use `inspect` for lists so that quoted items keep the quotes.\\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\\n  --font-family-sans-serif: #{inspect($font-family-sans-serif)};\\n  --font-family-monospace: #{inspect($font-family-monospace)};\\n}\\n"},{"filePath":"reboot.scss","scss":"// stylelint-disable at-rule-no-vendor-prefix, declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\\n\\n// Reboot\\n//\\n// Normalization of HTML elements, manually forked from Normalize.css to remove\\n// styles targeting irrelevant browsers while applying new styles.\\n//\\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\\n\\n\\n// Document\\n//\\n// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\\n// 2. Change the default font family in all browsers.\\n// 3. Correct the line height in all browsers.\\n// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\\n// 5. Change the default tap highlight to be completely transparent in iOS.\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box; // 1\\n}\\n\\nhtml {\\n  font-family: sans-serif; // 2\\n  line-height: 1.15; // 3\\n  -webkit-text-size-adjust: 100%; // 4\\n  -webkit-tap-highlight-color: rgba($black, 0); // 5\\n}\\n\\n// Shim for \\"new\\" HTML5 structural elements to display correctly (IE10, older browsers)\\n// TODO: remove in v5\\n// stylelint-disable-next-line selector-list-comma-newline-after\\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\\n  display: block;\\n}\\n\\n// Body\\n//\\n// 1. Remove the margin in all browsers.\\n// 2. As a best practice, apply a default `background-color`.\\n// 3. Set an explicit initial text-align value so that we can later use\\n//    the `inherit` value on things like `<th>` elements.\\n\\nbody {\\n  margin: 0; // 1\\n  font-family: $font-family-base;\\n  @include font-size($font-size-base);\\n  font-weight: $font-weight-base;\\n  line-height: $line-height-base;\\n  color: $body-color;\\n  text-align: left; // 3\\n  background-color: $body-bg; // 2\\n}\\n\\n// Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\\n// on elements that programmatically receive focus but wouldn\'t normally show a visible\\n// focus outline. In general, this would mean that the outline is only applied if the\\n// interaction that led to the element receiving programmatic focus was a keyboard interaction,\\n// or the browser has somehow determined that the user is primarily a keyboard user and/or\\n// wants focus outlines to always be presented.\\n//\\n// See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\\n// and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\\n[tabindex=\\"-1\\"]:focus:not(:focus-visible) {\\n  outline: 0 !important;\\n}\\n\\n\\n// Content grouping\\n//\\n// 1. Add the correct box sizing in Firefox.\\n// 2. Show the overflow in Edge and IE.\\n\\nhr {\\n  box-sizing: content-box; // 1\\n  height: 0; // 1\\n  overflow: visible; // 2\\n}\\n\\n\\n//\\n// Typography\\n//\\n\\n// Remove top margins from headings\\n//\\n// By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\\n// margin for easier control within type scales as it avoids margin collapsing.\\n// stylelint-disable-next-line selector-list-comma-newline-after\\nh1, h2, h3, h4, h5, h6 {\\n  margin-top: 0;\\n  margin-bottom: $headings-margin-bottom;\\n}\\n\\n// Reset margins on paragraphs\\n//\\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\\n// bottom margin to use `rem` units instead of `em`.\\np {\\n  margin-top: 0;\\n  margin-bottom: $paragraph-margin-bottom;\\n}\\n\\n// Abbreviations\\n//\\n// 1. Duplicate behavior to the data-* attribute for our tooltip plugin\\n// 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n// 3. Add explicit cursor to indicate changed behavior.\\n// 4. Remove the bottom border in Firefox 39-.\\n// 5. Prevent the text-decoration to be skipped.\\n\\nabbr[title],\\nabbr[data-original-title] { // 1\\n  text-decoration: underline; // 2\\n  text-decoration: underline dotted; // 2\\n  cursor: help; // 3\\n  border-bottom: 0; // 4\\n  text-decoration-skip-ink: none; // 5\\n}\\n\\naddress {\\n  margin-bottom: 1rem;\\n  font-style: normal;\\n  line-height: inherit;\\n}\\n\\nol,\\nul,\\ndl {\\n  margin-top: 0;\\n  margin-bottom: 1rem;\\n}\\n\\nol ol,\\nul ul,\\nol ul,\\nul ol {\\n  margin-bottom: 0;\\n}\\n\\ndt {\\n  font-weight: $dt-font-weight;\\n}\\n\\ndd {\\n  margin-bottom: .5rem;\\n  margin-left: 0; // Undo browser default\\n}\\n\\nblockquote {\\n  margin: 0 0 1rem;\\n}\\n\\nb,\\nstrong {\\n  font-weight: $font-weight-bolder; // Add the correct font weight in Chrome, Edge, and Safari\\n}\\n\\nsmall {\\n  @include font-size(80%); // Add the correct font size in all browsers\\n}\\n\\n//\\n// Prevent `sub` and `sup` elements from affecting the line height in\\n// all browsers.\\n//\\n\\nsub,\\nsup {\\n  position: relative;\\n  @include font-size(75%);\\n  line-height: 0;\\n  vertical-align: baseline;\\n}\\n\\nsub { bottom: -.25em; }\\nsup { top: -.5em; }\\n\\n\\n//\\n// Links\\n//\\n\\na {\\n  color: $link-color;\\n  text-decoration: $link-decoration;\\n  background-color: transparent; // Remove the gray background on active links in IE 10.\\n\\n  @include hover() {\\n    color: $link-hover-color;\\n    text-decoration: $link-hover-decoration;\\n  }\\n}\\n\\n// And undo these styles for placeholder links/named anchors (without href).\\n// It would be more straightforward to just use a[href] in previous block, but that\\n// causes specificity issues in many other styles that are too complex to fix.\\n// See https://github.com/twbs/bootstrap/issues/19402\\n\\na:not([href]) {\\n  color: inherit;\\n  text-decoration: none;\\n\\n  @include hover() {\\n    color: inherit;\\n    text-decoration: none;\\n  }\\n}\\n\\n\\n//\\n// Code\\n//\\n\\npre,\\ncode,\\nkbd,\\nsamp {\\n  font-family: $font-family-monospace;\\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\\n}\\n\\npre {\\n  // Remove browser default top margin\\n  margin-top: 0;\\n  // Reset browser default of `1em` to use `rem`s\\n  margin-bottom: 1rem;\\n  // Don\'t allow content to break outside\\n  overflow: auto;\\n}\\n\\n\\n//\\n// Figures\\n//\\n\\nfigure {\\n  // Apply a consistent margin strategy (matches our type styles).\\n  margin: 0 0 1rem;\\n}\\n\\n\\n//\\n// Images and content\\n//\\n\\nimg {\\n  vertical-align: middle;\\n  border-style: none; // Remove the border on images inside links in IE 10-.\\n}\\n\\nsvg {\\n  // Workaround for the SVG overflow bug in IE10/11 is still required.\\n  // See https://github.com/twbs/bootstrap/issues/26878\\n  overflow: hidden;\\n  vertical-align: middle;\\n}\\n\\n\\n//\\n// Tables\\n//\\n\\ntable {\\n  border-collapse: collapse; // Prevent double borders\\n}\\n\\ncaption {\\n  padding-top: $table-cell-padding;\\n  padding-bottom: $table-cell-padding;\\n  color: $table-caption-color;\\n  text-align: left;\\n  caption-side: bottom;\\n}\\n\\nth {\\n  // Matches default `<td>` alignment by inheriting from the `<body>`, or the\\n  // closest parent with a set `text-align`.\\n  text-align: inherit;\\n}\\n\\n\\n//\\n// Forms\\n//\\n\\nlabel {\\n  // Allow labels to use `margin` for spacing.\\n  display: inline-block;\\n  margin-bottom: $label-margin-bottom;\\n}\\n\\n// Remove the default `border-radius` that macOS Chrome adds.\\n//\\n// Details at https://github.com/twbs/bootstrap/issues/24093\\nbutton {\\n  // stylelint-disable-next-line property-blacklist\\n  border-radius: 0;\\n}\\n\\n// Work around a Firefox/IE bug where the transparent `button` background\\n// results in a loss of the default `button` focus styles.\\n//\\n// Credit: https://github.com/suitcss/base/\\nbutton:focus {\\n  outline: 1px dotted;\\n  outline: 5px auto -webkit-focus-ring-color;\\n}\\n\\ninput,\\nbutton,\\nselect,\\noptgroup,\\ntextarea {\\n  margin: 0; // Remove the margin in Firefox and Safari\\n  font-family: inherit;\\n  @include font-size(inherit);\\n  line-height: inherit;\\n}\\n\\nbutton,\\ninput {\\n  overflow: visible; // Show the overflow in Edge\\n}\\n\\nbutton,\\nselect {\\n  text-transform: none; // Remove the inheritance of text transform in Firefox\\n}\\n\\n// Remove the inheritance of word-wrap in Safari.\\n//\\n// Details at https://github.com/twbs/bootstrap/issues/24990\\nselect {\\n  word-wrap: normal;\\n}\\n\\n\\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\\n//    controls in Android 4.\\n// 2. Correct the inability to style clickable types in iOS and Safari.\\nbutton,\\n[type=\\"button\\"], // 1\\n[type=\\"reset\\"],\\n[type=\\"submit\\"] {\\n  -webkit-appearance: button; // 2\\n}\\n\\n// Opinionated: add \\"hand\\" cursor to non-disabled button elements.\\n@if $enable-pointer-cursor-for-buttons {\\n  button,\\n  [type=\\"button\\"],\\n  [type=\\"reset\\"],\\n  [type=\\"submit\\"] {\\n    &:not(:disabled) {\\n      cursor: pointer;\\n    }\\n  }\\n}\\n\\n// Remove inner border and padding from Firefox, but don\'t restore the outline like Normalize.\\nbutton::-moz-focus-inner,\\n[type=\\"button\\"]::-moz-focus-inner,\\n[type=\\"reset\\"]::-moz-focus-inner,\\n[type=\\"submit\\"]::-moz-focus-inner {\\n  padding: 0;\\n  border-style: none;\\n}\\n\\ninput[type=\\"radio\\"],\\ninput[type=\\"checkbox\\"] {\\n  box-sizing: border-box; // 1. Add the correct box sizing in IE 10-\\n  padding: 0; // 2. Remove the padding in IE 10-\\n}\\n\\n\\ninput[type=\\"date\\"],\\ninput[type=\\"time\\"],\\ninput[type=\\"datetime-local\\"],\\ninput[type=\\"month\\"] {\\n  // Remove the default appearance of temporal inputs to avoid a Mobile Safari\\n  // bug where setting a custom line-height prevents text from being vertically\\n  // centered within the input.\\n  // See https://bugs.webkit.org/show_bug.cgi?id=139848\\n  // and https://github.com/twbs/bootstrap/issues/11266\\n  -webkit-appearance: listbox;\\n}\\n\\ntextarea {\\n  overflow: auto; // Remove the default vertical scrollbar in IE.\\n  // Textareas should really only resize vertically so they don\'t break their (horizontal) containers.\\n  resize: vertical;\\n}\\n\\nfieldset {\\n  // Browsers set a default `min-width: min-content;` on fieldsets,\\n  // unlike e.g. `<div>`s, which have `min-width: 0;` by default.\\n  // So we reset that to ensure fieldsets behave more like a standard block element.\\n  // See https://github.com/twbs/bootstrap/issues/12359\\n  // and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\\n  min-width: 0;\\n  // Reset the default outline behavior of fieldsets so they don\'t affect page layout.\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n}\\n\\n// 1. Correct the text wrapping in Edge and IE.\\n// 2. Correct the color inheritance from `fieldset` elements in IE.\\nlegend {\\n  display: block;\\n  width: 100%;\\n  max-width: 100%; // 1\\n  padding: 0;\\n  margin-bottom: .5rem;\\n  @include font-size(1.5rem);\\n  line-height: inherit;\\n  color: inherit; // 2\\n  white-space: normal; // 1\\n}\\n\\nprogress {\\n  vertical-align: baseline; // Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n}\\n\\n// Correct the cursor style of increment and decrement buttons in Chrome.\\n[type=\\"number\\"]::-webkit-inner-spin-button,\\n[type=\\"number\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n[type=\\"search\\"] {\\n  // This overrides the extra rounded corners on search inputs in iOS so that our\\n  // `.form-control` class can properly style them. Note that this cannot simply\\n  // be added to `.form-control` as it\'s not specific enough. For details, see\\n  // https://github.com/twbs/bootstrap/issues/11586.\\n  outline-offset: -2px; // 2. Correct the outline style in Safari.\\n  -webkit-appearance: none;\\n}\\n\\n//\\n// Remove the inner padding in Chrome and Safari on macOS.\\n//\\n\\n[type=\\"search\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n//\\n// 1. Correct the inability to style clickable types in iOS and Safari.\\n// 2. Change font properties to `inherit` in Safari.\\n//\\n\\n::-webkit-file-upload-button {\\n  font: inherit; // 2\\n  -webkit-appearance: button; // 1\\n}\\n\\n//\\n// Correct element displays\\n//\\n\\noutput {\\n  display: inline-block;\\n}\\n\\nsummary {\\n  display: list-item; // Add the correct display in all browsers\\n  cursor: pointer;\\n}\\n\\ntemplate {\\n  display: none; // Add the correct display in IE\\n}\\n\\n// Always hide an element with the `hidden` HTML attribute (from PureCSS).\\n// Needed for proper display in IE 10-.\\n[hidden] {\\n  display: none !important;\\n}\\n"},{"filePath":"type.scss","scss":"// stylelint-disable declaration-no-important, selector-list-comma-newline-after\\n\\n//\\n// Headings\\n//\\n\\nh1, h2, h3, h4, h5, h6,\\n.h1, .h2, .h3, .h4, .h5, .h6 {\\n  margin-bottom: $headings-margin-bottom;\\n  font-family: $headings-font-family;\\n  font-weight: $headings-font-weight;\\n  line-height: $headings-line-height;\\n  color: $headings-color;\\n}\\n\\nh1, .h1 { @include font-size($h1-font-size); }\\nh2, .h2 { @include font-size($h2-font-size); }\\nh3, .h3 { @include font-size($h3-font-size); }\\nh4, .h4 { @include font-size($h4-font-size); }\\nh5, .h5 { @include font-size($h5-font-size); }\\nh6, .h6 { @include font-size($h6-font-size); }\\n\\n.lead {\\n  @include font-size($lead-font-size);\\n  font-weight: $lead-font-weight;\\n}\\n\\n// Type display classes\\n.display-1 {\\n  @include font-size($display1-size);\\n  font-weight: $display1-weight;\\n  line-height: $display-line-height;\\n}\\n.display-2 {\\n  @include font-size($display2-size);\\n  font-weight: $display2-weight;\\n  line-height: $display-line-height;\\n}\\n.display-3 {\\n  @include font-size($display3-size);\\n  font-weight: $display3-weight;\\n  line-height: $display-line-height;\\n}\\n.display-4 {\\n  @include font-size($display4-size);\\n  font-weight: $display4-weight;\\n  line-height: $display-line-height;\\n}\\n\\n\\n//\\n// Horizontal rules\\n//\\n\\nhr {\\n  margin-top: $hr-margin-y;\\n  margin-bottom: $hr-margin-y;\\n  border: 0;\\n  border-top: $hr-border-width solid $hr-border-color;\\n}\\n\\n\\n//\\n// Emphasis\\n//\\n\\nsmall,\\n.small {\\n  @include font-size($small-font-size);\\n  font-weight: $font-weight-normal;\\n}\\n\\nmark,\\n.mark {\\n  padding: $mark-padding;\\n  background-color: $mark-bg;\\n}\\n\\n\\n//\\n// Lists\\n//\\n\\n.list-unstyled {\\n  @include list-unstyled();\\n}\\n\\n// Inline turns list items into inline-block\\n.list-inline {\\n  @include list-unstyled();\\n}\\n.list-inline-item {\\n  display: inline-block;\\n\\n  &:not(:last-child) {\\n    margin-right: $list-inline-padding;\\n  }\\n}\\n\\n\\n//\\n// Misc\\n//\\n\\n// Builds on `abbr`\\n.initialism {\\n  @include font-size(90%);\\n  text-transform: uppercase;\\n}\\n\\n// Blockquotes\\n.blockquote {\\n  margin-bottom: $spacer;\\n  @include font-size($blockquote-font-size);\\n}\\n\\n.blockquote-footer {\\n  display: block;\\n  @include font-size($blockquote-small-font-size);\\n  color: $blockquote-small-color;\\n\\n  &::before {\\n    content: \\"\\\\2014\\\\00A0\\"; // em dash, nbsp\\n  }\\n}\\n"},{"filePath":"images.scss","scss":"// Responsive images (ensure images don\'t scale beyond their parents)\\n//\\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\\n// We previously tried the \\"images are responsive by default\\" approach in Bootstrap v2,\\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\\n// which weren\'t expecting the images within themselves to be involuntarily resized.\\n// See also https://github.com/twbs/bootstrap/issues/18178\\n.img-fluid {\\n  @include img-fluid();\\n}\\n\\n\\n// Image thumbnails\\n.img-thumbnail {\\n  padding: $thumbnail-padding;\\n  background-color: $thumbnail-bg;\\n  border: $thumbnail-border-width solid $thumbnail-border-color;\\n  @include border-radius($thumbnail-border-radius);\\n  @include box-shadow($thumbnail-box-shadow);\\n\\n  // Keep them at most 100% wide\\n  @include img-fluid();\\n}\\n\\n//\\n// Figures\\n//\\n\\n.figure {\\n  // Ensures the caption\'s text aligns with the image.\\n  display: inline-block;\\n}\\n\\n.figure-img {\\n  margin-bottom: $spacer / 2;\\n  line-height: 1;\\n}\\n\\n.figure-caption {\\n  @include font-size($figure-caption-font-size);\\n  color: $figure-caption-color;\\n}\\n"},{"filePath":"code.scss","scss":"// Inline code\\ncode {\\n  @include font-size($code-font-size);\\n  color: $code-color;\\n  word-wrap: break-word;\\n\\n  // Streamline the style when inside anchors to avoid broken underline and more\\n  a > & {\\n    color: inherit;\\n  }\\n}\\n\\n// User input typically entered via keyboard\\nkbd {\\n  padding: $kbd-padding-y $kbd-padding-x;\\n  @include font-size($kbd-font-size);\\n  color: $kbd-color;\\n  background-color: $kbd-bg;\\n  @include border-radius($border-radius-sm);\\n  @include box-shadow($kbd-box-shadow);\\n\\n  kbd {\\n    padding: 0;\\n    @include font-size(100%);\\n    font-weight: $nested-kbd-font-weight;\\n    @include box-shadow(none);\\n  }\\n}\\n\\n// Blocks of code\\npre {\\n  display: block;\\n  @include font-size($code-font-size);\\n  color: $pre-color;\\n\\n  // Account for some code outputs that place code tags in pre tags\\n  code {\\n    @include font-size(inherit);\\n    color: inherit;\\n    word-break: normal;\\n  }\\n}\\n\\n// Enable scrollable blocks of code\\n.pre-scrollable {\\n  max-height: $pre-scrollable-max-height;\\n  overflow-y: scroll;\\n}\\n"},{"filePath":"grid.scss","scss":"// Container widths\\n//\\n// Set the container width, and override it for fixed navbars in media queries.\\n\\n@if $enable-grid-classes {\\n  // Single container class with breakpoint max-widths\\n  .container {\\n    @include make-container();\\n    @include make-container-max-widths();\\n  }\\n\\n  // 100% wide container at all breakpoints\\n  .container-fluid {\\n    @include make-container();\\n  }\\n\\n  // Responsive containers that are 100% wide until a breakpoint\\n  @each $breakpoint, $container-max-width in $container-max-widths {\\n    .container-#{$breakpoint} {\\n      @extend .container-fluid;\\n    }\\n\\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\\n      %responsive-container-#{$breakpoint} {\\n        max-width: $container-max-width;\\n      }\\n\\n      @each $name, $width in $grid-breakpoints {\\n        @if ($container-max-width > $width or $breakpoint == $name) {\\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\\n            @extend %responsive-container-#{$breakpoint};\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n\\n// Row\\n//\\n// Rows contain your columns.\\n\\n@if $enable-grid-classes {\\n  .row {\\n    @include make-row();\\n  }\\n\\n  // Remove the negative margin from default .row, then the horizontal padding\\n  // from all immediate children columns (to prevent runaway style inheritance).\\n  .no-gutters {\\n    margin-right: 0;\\n    margin-left: 0;\\n\\n    > .col,\\n    > [class*=\\"col-\\"] {\\n      padding-right: 0;\\n      padding-left: 0;\\n    }\\n  }\\n}\\n\\n// Columns\\n//\\n// Common styles for small and large grid columns\\n\\n@if $enable-grid-classes {\\n  @include make-grid-columns();\\n}\\n"},{"filePath":"tables.scss","scss":"//\\n// Basic Bootstrap table\\n//\\n\\n.table {\\n  width: 100%;\\n  margin-bottom: $spacer;\\n  color: $table-color;\\n  background-color: $table-bg; // Reset for nesting within parents with `background-color`.\\n\\n  th,\\n  td {\\n    padding: $table-cell-padding;\\n    vertical-align: top;\\n    border-top: $table-border-width solid $table-border-color;\\n  }\\n\\n  thead th {\\n    vertical-align: bottom;\\n    border-bottom: (2 * $table-border-width) solid $table-border-color;\\n  }\\n\\n  tbody + tbody {\\n    border-top: (2 * $table-border-width) solid $table-border-color;\\n  }\\n}\\n\\n\\n//\\n// Condensed table w/ half padding\\n//\\n\\n.table-sm {\\n  th,\\n  td {\\n    padding: $table-cell-padding-sm;\\n  }\\n}\\n\\n\\n// Border versions\\n//\\n// Add or remove borders all around the table and between all the columns.\\n\\n.table-bordered {\\n  border: $table-border-width solid $table-border-color;\\n\\n  th,\\n  td {\\n    border: $table-border-width solid $table-border-color;\\n  }\\n\\n  thead {\\n    th,\\n    td {\\n      border-bottom-width: 2 * $table-border-width;\\n    }\\n  }\\n}\\n\\n.table-borderless {\\n  th,\\n  td,\\n  thead th,\\n  tbody + tbody {\\n    border: 0;\\n  }\\n}\\n\\n// Zebra-striping\\n//\\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\\n\\n.table-striped {\\n  tbody tr:nth-of-type(#{$table-striped-order}) {\\n    background-color: $table-accent-bg;\\n  }\\n}\\n\\n\\n// Hover effect\\n//\\n// Placed here since it has to come after the potential zebra striping\\n\\n.table-hover {\\n  tbody tr {\\n    @include hover() {\\n      color: $table-hover-color;\\n      background-color: $table-hover-bg;\\n    }\\n  }\\n}\\n\\n\\n// Table backgrounds\\n//\\n// Exact selectors below required to override `.table-striped` and prevent\\n// inheritance to nested tables.\\n\\n@each $color, $value in $theme-colors {\\n  @include table-row-variant($color, theme-color-level($color, $table-bg-level), theme-color-level($color, $table-border-level));\\n}\\n\\n@include table-row-variant(active, $table-active-bg);\\n\\n\\n// Dark styles\\n//\\n// Same table markup, but inverted color scheme: dark background and light text.\\n\\n// stylelint-disable-next-line no-duplicate-selectors\\n.table {\\n  .thead-dark {\\n    th {\\n      color: $table-dark-color;\\n      background-color: $table-dark-bg;\\n      border-color: $table-dark-border-color;\\n    }\\n  }\\n\\n  .thead-light {\\n    th {\\n      color: $table-head-color;\\n      background-color: $table-head-bg;\\n      border-color: $table-border-color;\\n    }\\n  }\\n}\\n\\n.table-dark {\\n  color: $table-dark-color;\\n  background-color: $table-dark-bg;\\n\\n  th,\\n  td,\\n  thead th {\\n    border-color: $table-dark-border-color;\\n  }\\n\\n  &.table-bordered {\\n    border: 0;\\n  }\\n\\n  &.table-striped {\\n    tbody tr:nth-of-type(#{$table-striped-order}) {\\n      background-color: $table-dark-accent-bg;\\n    }\\n  }\\n\\n  &.table-hover {\\n    tbody tr {\\n      @include hover() {\\n        color: $table-dark-hover-color;\\n        background-color: $table-dark-hover-bg;\\n      }\\n    }\\n  }\\n}\\n\\n\\n// Responsive tables\\n//\\n// Generate series of `.table-responsive-*` classes for configuring the screen\\n// size of where your table will overflow.\\n\\n.table-responsive {\\n  @each $breakpoint in map-keys($grid-breakpoints) {\\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\\n    $infix: breakpoint-infix($next, $grid-breakpoints);\\n\\n    &#{$infix} {\\n      @include media-breakpoint-down($breakpoint) {\\n        display: block;\\n        width: 100%;\\n        overflow-x: auto;\\n        -webkit-overflow-scrolling: touch;\\n\\n        // Prevent double border on horizontal scroll due to use of `display: block;`\\n        > .table-bordered {\\n          border: 0;\\n        }\\n      }\\n    }\\n  }\\n}\\n"},{"filePath":"forms.scss","scss":"// stylelint-disable selector-no-qualifying-type\\n\\n//\\n// Textual form controls\\n//\\n\\n.form-control {\\n  display: block;\\n  width: 100%;\\n  height: $input-height;\\n  padding: $input-padding-y $input-padding-x;\\n  font-family: $input-font-family;\\n  @include font-size($input-font-size);\\n  font-weight: $input-font-weight;\\n  line-height: $input-line-height;\\n  color: $input-color;\\n  background-color: $input-bg;\\n  background-clip: padding-box;\\n  border: $input-border-width solid $input-border-color;\\n\\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\\n  @include border-radius($input-border-radius, 0);\\n\\n  @include box-shadow($input-box-shadow);\\n  @include transition($input-transition);\\n\\n  // Unstyle the caret on `<select>`s in IE10+.\\n  &::-ms-expand {\\n    background-color: transparent;\\n    border: 0;\\n  }\\n\\n  // Remove select outline from select box in FF\\n  &:-moz-focusring {\\n    color: transparent;\\n    text-shadow: 0 0 0 $input-color;\\n  }\\n\\n  // Customize the `:focus` state to imitate native WebKit styles.\\n  @include form-control-focus($ignore-warning: true);\\n\\n  // Placeholder\\n  &::placeholder {\\n    color: $input-placeholder-color;\\n    // Override Firefox\'s unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\\n    opacity: 1;\\n  }\\n\\n  // Disabled and read-only inputs\\n  //\\n  // HTML5 says that controls under a fieldset > legend:first-child won\'t be\\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\\n  // don\'t honor that edge case; we style them as disabled anyway.\\n  &:disabled,\\n  &[readonly] {\\n    background-color: $input-disabled-bg;\\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\\n    opacity: 1;\\n  }\\n}\\n\\nselect.form-control {\\n  &:focus::-ms-value {\\n    // Suppress the nested default white text on blue background highlight given to\\n    // the selected option text when the (still closed) <select> receives focus\\n    // in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\\n    // match the appearance of the native widget.\\n    // See https://github.com/twbs/bootstrap/issues/19398.\\n    color: $input-color;\\n    background-color: $input-bg;\\n  }\\n}\\n\\n// Make file inputs better match text inputs by forcing them to new lines.\\n.form-control-file,\\n.form-control-range {\\n  display: block;\\n  width: 100%;\\n}\\n\\n\\n//\\n// Labels\\n//\\n\\n// For use with horizontal and inline forms, when you need the label (or legend)\\n// text to align with the form controls.\\n.col-form-label {\\n  padding-top: add($input-padding-y, $input-border-width);\\n  padding-bottom: add($input-padding-y, $input-border-width);\\n  margin-bottom: 0; // Override the `<label>/<legend>` default\\n  @include font-size(inherit); // Override the `<legend>` default\\n  line-height: $input-line-height;\\n}\\n\\n.col-form-label-lg {\\n  padding-top: add($input-padding-y-lg, $input-border-width);\\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\\n  @include font-size($input-font-size-lg);\\n  line-height: $input-line-height-lg;\\n}\\n\\n.col-form-label-sm {\\n  padding-top: add($input-padding-y-sm, $input-border-width);\\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\\n  @include font-size($input-font-size-sm);\\n  line-height: $input-line-height-sm;\\n}\\n\\n\\n// Readonly controls as plain text\\n//\\n// Apply class to a readonly input to make it appear like regular plain\\n// text (without any border, background color, focus indicator)\\n\\n.form-control-plaintext {\\n  display: block;\\n  width: 100%;\\n  padding: $input-padding-y 0;\\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\\n  @include font-size($input-font-size);\\n  line-height: $input-line-height;\\n  color: $input-plaintext-color;\\n  background-color: transparent;\\n  border: solid transparent;\\n  border-width: $input-border-width 0;\\n\\n  &.form-control-sm,\\n  &.form-control-lg {\\n    padding-right: 0;\\n    padding-left: 0;\\n  }\\n}\\n\\n\\n// Form control sizing\\n//\\n// Build on `.form-control` with modifier classes to decrease or increase the\\n// height and font-size of form controls.\\n//\\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\\n\\n.form-control-sm {\\n  height: $input-height-sm;\\n  padding: $input-padding-y-sm $input-padding-x-sm;\\n  @include font-size($input-font-size-sm);\\n  line-height: $input-line-height-sm;\\n  @include border-radius($input-border-radius-sm);\\n}\\n\\n.form-control-lg {\\n  height: $input-height-lg;\\n  padding: $input-padding-y-lg $input-padding-x-lg;\\n  @include font-size($input-font-size-lg);\\n  line-height: $input-line-height-lg;\\n  @include border-radius($input-border-radius-lg);\\n}\\n\\n// stylelint-disable-next-line no-duplicate-selectors\\nselect.form-control {\\n  &[size],\\n  &[multiple] {\\n    height: auto;\\n  }\\n}\\n\\ntextarea.form-control {\\n  height: auto;\\n}\\n\\n// Form groups\\n//\\n// Designed to help with the organization and spacing of vertical forms. For\\n// horizontal forms, use the predefined grid classes.\\n\\n.form-group {\\n  margin-bottom: $form-group-margin-bottom;\\n}\\n\\n.form-text {\\n  display: block;\\n  margin-top: $form-text-margin-top;\\n}\\n\\n\\n// Form grid\\n//\\n// Special replacement for our grid system\'s `.row` for tighter form layouts.\\n\\n.form-row {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin-right: -$form-grid-gutter-width / 2;\\n  margin-left: -$form-grid-gutter-width / 2;\\n\\n  > .col,\\n  > [class*=\\"col-\\"] {\\n    padding-right: $form-grid-gutter-width / 2;\\n    padding-left: $form-grid-gutter-width / 2;\\n  }\\n}\\n\\n\\n// Checkboxes and radios\\n//\\n// Indent the labels to position radios/checkboxes as hanging controls.\\n\\n.form-check {\\n  position: relative;\\n  display: block;\\n  padding-left: $form-check-input-gutter;\\n}\\n\\n.form-check-input {\\n  position: absolute;\\n  margin-top: $form-check-input-margin-y;\\n  margin-left: -$form-check-input-gutter;\\n\\n  // Use [disabled] and :disabled for workaround https://github.com/twbs/bootstrap/issues/28247\\n  &[disabled] ~ .form-check-label,\\n  &:disabled ~ .form-check-label {\\n    color: $text-muted;\\n  }\\n}\\n\\n.form-check-label {\\n  margin-bottom: 0; // Override default `<label>` bottom margin\\n}\\n\\n.form-check-inline {\\n  display: inline-flex;\\n  align-items: center;\\n  padding-left: 0; // Override base .form-check\\n  margin-right: $form-check-inline-margin-x;\\n\\n  // Undo .form-check-input defaults and add some `margin-right`.\\n  .form-check-input {\\n    position: static;\\n    margin-top: 0;\\n    margin-right: $form-check-inline-input-margin-x;\\n    margin-left: 0;\\n  }\\n}\\n\\n\\n// Form validation\\n//\\n// Provide feedback to users when form field values are valid or invalid. Works\\n// primarily for client-side validation via scoped `:invalid` and `:valid`\\n// pseudo-classes but also includes `.is-invalid` and `.is-valid` classes for\\n// server side validation.\\n\\n@each $state, $data in $form-validation-states {\\n  @include form-validation-state($state, map-get($data, color), map-get($data, icon));\\n}\\n\\n// Inline forms\\n//\\n// Make forms appear inline(-block) by adding the `.form-inline` class. Inline\\n// forms begin stacked on extra small (mobile) devices and then go inline when\\n// viewports reach <768px.\\n//\\n// Requires wrapping inputs and labels with `.form-group` for proper display of\\n// default HTML form controls and our custom form controls (e.g., input groups).\\n\\n.form-inline {\\n  display: flex;\\n  flex-flow: row wrap;\\n  align-items: center; // Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height)\\n\\n  // Because we use flex, the initial sizing of checkboxes is collapsed and\\n  // doesn\'t occupy the full-width (which is what we want for xs grid tier),\\n  // so we force that here.\\n  .form-check {\\n    width: 100%;\\n  }\\n\\n  // Kick in the inline\\n  @include media-breakpoint-up(sm) {\\n    label {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      margin-bottom: 0;\\n    }\\n\\n    // Inline-block all the things for \\"inline\\"\\n    .form-group {\\n      display: flex;\\n      flex: 0 0 auto;\\n      flex-flow: row wrap;\\n      align-items: center;\\n      margin-bottom: 0;\\n    }\\n\\n    // Allow folks to *not* use `.form-group`\\n    .form-control {\\n      display: inline-block;\\n      width: auto; // Prevent labels from stacking above inputs in `.form-group`\\n      vertical-align: middle;\\n    }\\n\\n    // Make static controls behave like regular ones\\n    .form-control-plaintext {\\n      display: inline-block;\\n    }\\n\\n    .input-group,\\n    .custom-select {\\n      width: auto;\\n    }\\n\\n    // Remove default margin on radios/checkboxes that were used for stacking, and\\n    // then undo the floating of radios and checkboxes to match.\\n    .form-check {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      width: auto;\\n      padding-left: 0;\\n    }\\n    .form-check-input {\\n      position: relative;\\n      flex-shrink: 0;\\n      margin-top: 0;\\n      margin-right: $form-check-input-margin-x;\\n      margin-left: 0;\\n    }\\n\\n    .custom-control {\\n      align-items: center;\\n      justify-content: center;\\n    }\\n    .custom-control-label {\\n      margin-bottom: 0;\\n    }\\n  }\\n}\\n"},{"filePath":"buttons.scss","scss":"// stylelint-disable selector-no-qualifying-type\\n\\n//\\n// Base styles\\n//\\n\\n.btn {\\n  display: inline-block;\\n  font-family: $btn-font-family;\\n  font-weight: $btn-font-weight;\\n  color: $body-color;\\n  text-align: center;\\n  white-space: $btn-white-space;\\n  vertical-align: middle;\\n  cursor: if($enable-pointer-cursor-for-buttons, pointer, null);\\n  user-select: none;\\n  background-color: transparent;\\n  border: $btn-border-width solid transparent;\\n  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);\\n  @include transition($btn-transition);\\n\\n  @include hover() {\\n    color: $body-color;\\n    text-decoration: none;\\n  }\\n\\n  &:focus,\\n  &.focus {\\n    outline: 0;\\n    box-shadow: $btn-focus-box-shadow;\\n  }\\n\\n  // Disabled comes first so active can properly restyle\\n  &.disabled,\\n  &:disabled {\\n    opacity: $btn-disabled-opacity;\\n    @include box-shadow(none);\\n  }\\n\\n  &:not(:disabled):not(.disabled):active,\\n  &:not(:disabled):not(.disabled).active {\\n    @include box-shadow($btn-active-box-shadow);\\n\\n    &:focus {\\n      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);\\n    }\\n  }\\n}\\n\\n// Future-proof disabling of clicks on `<a>` elements\\na.btn.disabled,\\nfieldset:disabled a.btn {\\n  pointer-events: none;\\n}\\n\\n\\n//\\n// Alternate buttons\\n//\\n\\n@each $color, $value in $theme-colors {\\n  .btn-#{$color} {\\n    @include button-variant($value, $value);\\n  }\\n}\\n\\n@each $color, $value in $theme-colors {\\n  .btn-outline-#{$color} {\\n    @include button-outline-variant($value);\\n  }\\n}\\n\\n\\n//\\n// Link buttons\\n//\\n\\n// Make a button look and behave like a link\\n.btn-link {\\n  font-weight: $font-weight-normal;\\n  color: $link-color;\\n  text-decoration: $link-decoration;\\n\\n  @include hover() {\\n    color: $link-hover-color;\\n    text-decoration: $link-hover-decoration;\\n  }\\n\\n  &:focus,\\n  &.focus {\\n    text-decoration: $link-hover-decoration;\\n    box-shadow: none;\\n  }\\n\\n  &:disabled,\\n  &.disabled {\\n    color: $btn-link-disabled-color;\\n    pointer-events: none;\\n  }\\n\\n  // No need for an active state here\\n}\\n\\n\\n//\\n// Button Sizes\\n//\\n\\n.btn-lg {\\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);\\n}\\n\\n.btn-sm {\\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);\\n}\\n\\n\\n//\\n// Block button\\n//\\n\\n.btn-block {\\n  display: block;\\n  width: 100%;\\n\\n  // Vertically space out multiple block buttons\\n  + .btn-block {\\n    margin-top: $btn-block-spacing-y;\\n  }\\n}\\n\\n// Specificity overrides\\ninput[type=\\"submit\\"],\\ninput[type=\\"reset\\"],\\ninput[type=\\"button\\"] {\\n  &.btn-block {\\n    width: 100%;\\n  }\\n}\\n"},{"filePath":"transitions.scss","scss":".fade {\\n  @include transition($transition-fade);\\n\\n  &:not(.show) {\\n    opacity: 0;\\n  }\\n}\\n\\n.collapse {\\n  &:not(.show) {\\n    display: none;\\n  }\\n}\\n\\n.collapsing {\\n  position: relative;\\n  height: 0;\\n  overflow: hidden;\\n  @include transition($transition-collapse);\\n}\\n"},{"filePath":"dropdown.scss","scss":"// The dropdown wrapper (`<div>`)\\n.dropup,\\n.dropright,\\n.dropdown,\\n.dropleft {\\n  position: relative;\\n}\\n\\n.dropdown-toggle {\\n  white-space: nowrap;\\n\\n  // Generate the caret automatically\\n  @include caret();\\n}\\n\\n// The dropdown menu\\n.dropdown-menu {\\n  position: absolute;\\n  top: 100%;\\n  left: 0;\\n  z-index: $zindex-dropdown;\\n  display: none; // none by default, but block on \\"open\\" of the menu\\n  float: left;\\n  min-width: $dropdown-min-width;\\n  padding: $dropdown-padding-y 0;\\n  margin: $dropdown-spacer 0 0; // override default ul\\n  @include font-size($dropdown-font-size);\\n  color: $dropdown-color;\\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\\n  list-style: none;\\n  background-color: $dropdown-bg;\\n  background-clip: padding-box;\\n  border: $dropdown-border-width solid $dropdown-border-color;\\n  @include border-radius($dropdown-border-radius);\\n  @include box-shadow($dropdown-box-shadow);\\n}\\n\\n@each $breakpoint in map-keys($grid-breakpoints) {\\n  @include media-breakpoint-up($breakpoint) {\\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\\n\\n    .dropdown-menu#{$infix}-left {\\n      right: auto;\\n      left: 0;\\n    }\\n\\n    .dropdown-menu#{$infix}-right {\\n      right: 0;\\n      left: auto;\\n    }\\n  }\\n}\\n\\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\\n// Just add .dropup after the standard .dropdown class and you\'re set.\\n.dropup {\\n  .dropdown-menu {\\n    top: auto;\\n    bottom: 100%;\\n    margin-top: 0;\\n    margin-bottom: $dropdown-spacer;\\n  }\\n\\n  .dropdown-toggle {\\n    @include caret(up);\\n  }\\n}\\n\\n.dropright {\\n  .dropdown-menu {\\n    top: 0;\\n    right: auto;\\n    left: 100%;\\n    margin-top: 0;\\n    margin-left: $dropdown-spacer;\\n  }\\n\\n  .dropdown-toggle {\\n    @include caret(right);\\n    &::after {\\n      vertical-align: 0;\\n    }\\n  }\\n}\\n\\n.dropleft {\\n  .dropdown-menu {\\n    top: 0;\\n    right: 100%;\\n    left: auto;\\n    margin-top: 0;\\n    margin-right: $dropdown-spacer;\\n  }\\n\\n  .dropdown-toggle {\\n    @include caret(left);\\n    &::before {\\n      vertical-align: 0;\\n    }\\n  }\\n}\\n\\n// When enabled Popper.js, reset basic dropdown position\\n// stylelint-disable-next-line no-duplicate-selectors\\n.dropdown-menu {\\n  &[x-placement^=\\"top\\"],\\n  &[x-placement^=\\"right\\"],\\n  &[x-placement^=\\"bottom\\"],\\n  &[x-placement^=\\"left\\"] {\\n    right: auto;\\n    bottom: auto;\\n  }\\n}\\n\\n// Dividers (basically an `<hr>`) within the dropdown\\n.dropdown-divider {\\n  @include nav-divider($dropdown-divider-bg, $dropdown-divider-margin-y, true);\\n}\\n\\n// Links, buttons, and more within the dropdown menu\\n//\\n// `<button>`-specific styles are denoted with `// For <button>s`\\n.dropdown-item {\\n  display: block;\\n  width: 100%; // For `<button>`s\\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\\n  clear: both;\\n  font-weight: $font-weight-normal;\\n  color: $dropdown-link-color;\\n  text-align: inherit; // For `<button>`s\\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\\n  background-color: transparent; // For `<button>`s\\n  border: 0; // For `<button>`s\\n\\n  // Prevent dropdown overflow if there\'s no padding\\n  // See https://github.com/twbs/bootstrap/pull/27703\\n  @if $dropdown-padding-y == 0 {\\n    &:first-child {\\n      @include border-top-radius($dropdown-inner-border-radius);\\n    }\\n\\n    &:last-child {\\n      @include border-bottom-radius($dropdown-inner-border-radius);\\n    }\\n  }\\n\\n  @include hover-focus() {\\n    color: $dropdown-link-hover-color;\\n    text-decoration: none;\\n    @include gradient-bg($dropdown-link-hover-bg);\\n  }\\n\\n  &.active,\\n  &:active {\\n    color: $dropdown-link-active-color;\\n    text-decoration: none;\\n    @include gradient-bg($dropdown-link-active-bg);\\n  }\\n\\n  &.disabled,\\n  &:disabled {\\n    color: $dropdown-link-disabled-color;\\n    pointer-events: none;\\n    background-color: transparent;\\n    // Remove CSS gradients if they\'re enabled\\n    @if $enable-gradients {\\n      background-image: none;\\n    }\\n  }\\n}\\n\\n.dropdown-menu.show {\\n  display: block;\\n}\\n\\n// Dropdown section headers\\n.dropdown-header {\\n  display: block;\\n  padding: $dropdown-padding-y $dropdown-item-padding-x;\\n  margin-bottom: 0; // for use with heading elements\\n  @include font-size($font-size-sm);\\n  color: $dropdown-header-color;\\n  white-space: nowrap; // as with > li > a\\n}\\n\\n// Dropdown text\\n.dropdown-item-text {\\n  display: block;\\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\\n  color: $dropdown-link-color;\\n}\\n"},{"filePath":"button-group.scss","scss":"// stylelint-disable selector-no-qualifying-type\\n\\n// Make the div behave like a button\\n.btn-group,\\n.btn-group-vertical {\\n  position: relative;\\n  display: inline-flex;\\n  vertical-align: middle; // match .btn alignment given font-size hack above\\n\\n  > .btn {\\n    position: relative;\\n    flex: 1 1 auto;\\n\\n    // Bring the hover, focused, and \\"active\\" buttons to the front to overlay\\n    // the borders properly\\n    @include hover() {\\n      z-index: 1;\\n    }\\n    &:focus,\\n    &:active,\\n    &.active {\\n      z-index: 1;\\n    }\\n  }\\n}\\n\\n// Optional: Group multiple button groups together for a toolbar\\n.btn-toolbar {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: flex-start;\\n\\n  .input-group {\\n    width: auto;\\n  }\\n}\\n\\n.btn-group {\\n  // Prevent double borders when buttons are next to each other\\n  > .btn:not(:first-child),\\n  > .btn-group:not(:first-child) {\\n    margin-left: -$btn-border-width;\\n  }\\n\\n  // Reset rounded corners\\n  > .btn:not(:last-child):not(.dropdown-toggle),\\n  > .btn-group:not(:last-child) > .btn {\\n    @include border-right-radius(0);\\n  }\\n\\n  > .btn:not(:first-child),\\n  > .btn-group:not(:first-child) > .btn {\\n    @include border-left-radius(0);\\n  }\\n}\\n\\n// Sizing\\n//\\n// Remix the default button sizing classes into new ones for easier manipulation.\\n\\n.btn-group-sm > .btn { @extend .btn-sm; }\\n.btn-group-lg > .btn { @extend .btn-lg; }\\n\\n\\n//\\n// Split button dropdowns\\n//\\n\\n.dropdown-toggle-split {\\n  padding-right: $btn-padding-x * .75;\\n  padding-left: $btn-padding-x * .75;\\n\\n  &::after,\\n  .dropup &::after,\\n  .dropright &::after {\\n    margin-left: 0;\\n  }\\n\\n  .dropleft &::before {\\n    margin-right: 0;\\n  }\\n}\\n\\n.btn-sm + .dropdown-toggle-split {\\n  padding-right: $btn-padding-x-sm * .75;\\n  padding-left: $btn-padding-x-sm * .75;\\n}\\n\\n.btn-lg + .dropdown-toggle-split {\\n  padding-right: $btn-padding-x-lg * .75;\\n  padding-left: $btn-padding-x-lg * .75;\\n}\\n\\n\\n// The clickable button for toggling the menu\\n// Set the same inset shadow as the :active state\\n.btn-group.show .dropdown-toggle {\\n  @include box-shadow($btn-active-box-shadow);\\n\\n  // Show no shadow for `.btn-link` since it has no other button styles.\\n  &.btn-link {\\n    @include box-shadow(none);\\n  }\\n}\\n\\n\\n//\\n// Vertical button groups\\n//\\n\\n.btn-group-vertical {\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: center;\\n\\n  > .btn,\\n  > .btn-group {\\n    width: 100%;\\n  }\\n\\n  > .btn:not(:first-child),\\n  > .btn-group:not(:first-child) {\\n    margin-top: -$btn-border-width;\\n  }\\n\\n  // Reset rounded corners\\n  > .btn:not(:last-child):not(.dropdown-toggle),\\n  > .btn-group:not(:last-child) > .btn {\\n    @include border-bottom-radius(0);\\n  }\\n\\n  > .btn:not(:first-child),\\n  > .btn-group:not(:first-child) > .btn {\\n    @include border-top-radius(0);\\n  }\\n}\\n\\n\\n// Checkbox and radio options\\n//\\n// In order to support the browser\'s form validation feedback, powered by the\\n// `required` attribute, we have to \\"hide\\" the inputs via `clip`. We cannot use\\n// `display: none;` or `visibility: hidden;` as that also hides the popover.\\n// Simply visually hiding the inputs via `opacity` would leave them clickable in\\n// certain cases which is prevented by using `clip` and `pointer-events`.\\n// This way, we ensure a DOM element is visible to position the popover from.\\n//\\n// See https://github.com/twbs/bootstrap/pull/12794 and\\n// https://github.com/twbs/bootstrap/pull/14559 for more information.\\n\\n.btn-group-toggle {\\n  > .btn,\\n  > .btn-group > .btn {\\n    margin-bottom: 0; // Override default `<label>` value\\n\\n    input[type=\\"radio\\"],\\n    input[type=\\"checkbox\\"] {\\n      position: absolute;\\n      clip: rect(0, 0, 0, 0);\\n      pointer-events: none;\\n    }\\n  }\\n}\\n"},{"filePath":"input-group.scss","scss":"// stylelint-disable selector-no-qualifying-type\\n\\n//\\n// Base styles\\n//\\n\\n.input-group {\\n  position: relative;\\n  display: flex;\\n  flex-wrap: wrap; // For form validation feedback\\n  align-items: stretch;\\n  width: 100%;\\n\\n  > .form-control,\\n  > .form-control-plaintext,\\n  > .custom-select,\\n  > .custom-file {\\n    position: relative; // For focus state\'s z-index\\n    flex: 1 1 0%;\\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\\n    margin-bottom: 0;\\n\\n    + .form-control,\\n    + .custom-select,\\n    + .custom-file {\\n      margin-left: -$input-border-width;\\n    }\\n  }\\n\\n  // Bring the \\"active\\" form control to the top of surrounding elements\\n  > .form-control:focus,\\n  > .custom-select:focus,\\n  > .custom-file .custom-file-input:focus ~ .custom-file-label {\\n    z-index: 3;\\n  }\\n\\n  // Bring the custom file input above the label\\n  > .custom-file .custom-file-input:focus {\\n    z-index: 4;\\n  }\\n\\n  > .form-control,\\n  > .custom-select {\\n    &:not(:last-child) { @include border-right-radius(0); }\\n    &:not(:first-child) { @include border-left-radius(0); }\\n  }\\n\\n  // Custom file inputs have more complex markup, thus requiring different\\n  // border-radius overrides.\\n  > .custom-file {\\n    display: flex;\\n    align-items: center;\\n\\n    &:not(:last-child) .custom-file-label,\\n    &:not(:last-child) .custom-file-label::after { @include border-right-radius(0); }\\n    &:not(:first-child) .custom-file-label { @include border-left-radius(0); }\\n  }\\n}\\n\\n\\n// Prepend and append\\n//\\n// While it requires one extra layer of HTML for each, dedicated prepend and\\n// append elements allow us to 1) be less clever, 2) simplify our selectors, and\\n// 3) support HTML5 form validation.\\n\\n.input-group-prepend,\\n.input-group-append {\\n  display: flex;\\n\\n  // Ensure buttons are always above inputs for more visually pleasing borders.\\n  // This isn\'t needed for `.input-group-text` since it shares the same border-color\\n  // as our inputs.\\n  .btn {\\n    position: relative;\\n    z-index: 2;\\n\\n    &:focus {\\n      z-index: 3;\\n    }\\n  }\\n\\n  .btn + .btn,\\n  .btn + .input-group-text,\\n  .input-group-text + .input-group-text,\\n  .input-group-text + .btn {\\n    margin-left: -$input-border-width;\\n  }\\n}\\n\\n.input-group-prepend { margin-right: -$input-border-width; }\\n.input-group-append { margin-left: -$input-border-width; }\\n\\n\\n// Textual addons\\n//\\n// Serves as a catch-all element for any text or radio/checkbox input you wish\\n// to prepend or append to an input.\\n\\n.input-group-text {\\n  display: flex;\\n  align-items: center;\\n  padding: $input-padding-y $input-padding-x;\\n  margin-bottom: 0; // Allow use of <label> elements by overriding our default margin-bottom\\n  @include font-size($input-font-size); // Match inputs\\n  font-weight: $font-weight-normal;\\n  line-height: $input-line-height;\\n  color: $input-group-addon-color;\\n  text-align: center;\\n  white-space: nowrap;\\n  background-color: $input-group-addon-bg;\\n  border: $input-border-width solid $input-group-addon-border-color;\\n  @include border-radius($input-border-radius);\\n\\n  // Nuke default margins from checkboxes and radios to vertically center within.\\n  input[type=\\"radio\\"],\\n  input[type=\\"checkbox\\"] {\\n    margin-top: 0;\\n  }\\n}\\n\\n\\n// Sizing\\n//\\n// Remix the default form control sizing classes into new ones for easier\\n// manipulation.\\n\\n.input-group-lg > .form-control:not(textarea),\\n.input-group-lg > .custom-select {\\n  height: $input-height-lg;\\n}\\n\\n.input-group-lg > .form-control,\\n.input-group-lg > .custom-select,\\n.input-group-lg > .input-group-prepend > .input-group-text,\\n.input-group-lg > .input-group-append > .input-group-text,\\n.input-group-lg > .input-group-prepend > .btn,\\n.input-group-lg > .input-group-append > .btn {\\n  padding: $input-padding-y-lg $input-padding-x-lg;\\n  @include font-size($input-font-size-lg);\\n  line-height: $input-line-height-lg;\\n  @include border-radius($input-border-radius-lg);\\n}\\n\\n.input-group-sm > .form-control:not(textarea),\\n.input-group-sm > .custom-select {\\n  height: $input-height-sm;\\n}\\n\\n.input-group-sm > .form-control,\\n.input-group-sm > .custom-select,\\n.input-group-sm > .input-group-prepend > .input-group-text,\\n.input-group-sm > .input-group-append > .input-group-text,\\n.input-group-sm > .input-group-prepend > .btn,\\n.input-group-sm > .input-group-append > .btn {\\n  padding: $input-padding-y-sm $input-padding-x-sm;\\n  @include font-size($input-font-size-sm);\\n  line-height: $input-line-height-sm;\\n  @include border-radius($input-border-radius-sm);\\n}\\n\\n.input-group-lg > .custom-select,\\n.input-group-sm > .custom-select {\\n  padding-right: $custom-select-padding-x + $custom-select-indicator-padding;\\n}\\n\\n\\n// Prepend and append rounded corners\\n//\\n// These rulesets must come after the sizing ones to properly override sm and lg\\n// border-radius values when extending. They\'re more specific than we\'d like\\n// with the `.input-group >` part, but without it, we cannot override the sizing.\\n\\n\\n.input-group > .input-group-prepend > .btn,\\n.input-group > .input-group-prepend > .input-group-text,\\n.input-group > .input-group-append:not(:last-child) > .btn,\\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\\n  @include border-right-radius(0);\\n}\\n\\n.input-group > .input-group-append > .btn,\\n.input-group > .input-group-append > .input-group-text,\\n.input-group > .input-group-prepend:not(:first-child) > .btn,\\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\\n  @include border-left-radius(0);\\n}\\n"},{"filePath":"custom-forms.scss","scss":"// Embedded icons from Open Iconic.\\n// Released under MIT and copyright 2014 Waybury.\\n// https://useiconic.com/open\\n\\n\\n// Checkboxes and radios\\n//\\n// Base class takes care of all the key behavioral aspects.\\n\\n.custom-control {\\n  position: relative;\\n  display: block;\\n  min-height: $font-size-base * $line-height-base;\\n  padding-left: $custom-control-gutter + $custom-control-indicator-size;\\n}\\n\\n.custom-control-inline {\\n  display: inline-flex;\\n  margin-right: $custom-control-spacer-x;\\n}\\n\\n.custom-control-input {\\n  position: absolute;\\n  left: 0;\\n  z-index: -1; // Put the input behind the label so it doesn\'t overlay text\\n  width: $custom-control-indicator-size;\\n  height: ($font-size-base * $line-height-base + $custom-control-indicator-size) / 2;\\n  opacity: 0;\\n\\n  &:checked ~ .custom-control-label::before {\\n    color: $custom-control-indicator-checked-color;\\n    border-color: $custom-control-indicator-checked-border-color;\\n    @include gradient-bg($custom-control-indicator-checked-bg);\\n    @include box-shadow($custom-control-indicator-checked-box-shadow);\\n  }\\n\\n  &:focus ~ .custom-control-label::before {\\n    // the mixin is not used here to make sure there is feedback\\n    @if $enable-shadows {\\n      box-shadow: $input-box-shadow, $input-focus-box-shadow;\\n    } @else {\\n      box-shadow: $custom-control-indicator-focus-box-shadow;\\n    }\\n  }\\n\\n  &:focus:not(:checked) ~ .custom-control-label::before {\\n    border-color: $custom-control-indicator-focus-border-color;\\n  }\\n\\n  &:not(:disabled):active ~ .custom-control-label::before {\\n    color: $custom-control-indicator-active-color;\\n    background-color: $custom-control-indicator-active-bg;\\n    border-color: $custom-control-indicator-active-border-color;\\n    @include box-shadow($custom-control-indicator-active-box-shadow);\\n  }\\n\\n  // Use [disabled] and :disabled to work around https://github.com/twbs/bootstrap/issues/28247\\n  &[disabled],\\n  &:disabled {\\n    ~ .custom-control-label {\\n      color: $custom-control-label-disabled-color;\\n\\n      &::before {\\n        background-color: $custom-control-indicator-disabled-bg;\\n      }\\n    }\\n  }\\n}\\n\\n// Custom control indicators\\n//\\n// Build the custom controls out of pseudo-elements.\\n\\n.custom-control-label {\\n  position: relative;\\n  margin-bottom: 0;\\n  color: $custom-control-label-color;\\n  vertical-align: top;\\n  cursor: $custom-control-cursor;\\n\\n  // Background-color and (when enabled) gradient\\n  &::before {\\n    position: absolute;\\n    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;\\n    left: -($custom-control-gutter + $custom-control-indicator-size);\\n    display: block;\\n    width: $custom-control-indicator-size;\\n    height: $custom-control-indicator-size;\\n    pointer-events: none;\\n    content: \\"\\";\\n    background-color: $custom-control-indicator-bg;\\n    border: $custom-control-indicator-border-color solid $custom-control-indicator-border-width;\\n    @include box-shadow($custom-control-indicator-box-shadow);\\n  }\\n\\n  // Foreground (icon)\\n  &::after {\\n    position: absolute;\\n    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;\\n    left: -($custom-control-gutter + $custom-control-indicator-size);\\n    display: block;\\n    width: $custom-control-indicator-size;\\n    height: $custom-control-indicator-size;\\n    content: \\"\\";\\n    background: no-repeat 50% / #{$custom-control-indicator-bg-size};\\n  }\\n}\\n\\n\\n// Checkboxes\\n//\\n// Tweak just a few things for checkboxes.\\n\\n.custom-checkbox {\\n  .custom-control-label::before {\\n    @include border-radius($custom-checkbox-indicator-border-radius);\\n  }\\n\\n  .custom-control-input:checked ~ .custom-control-label {\\n    &::after {\\n      background-image: escape-svg($custom-checkbox-indicator-icon-checked);\\n    }\\n  }\\n\\n  .custom-control-input:indeterminate ~ .custom-control-label {\\n    &::before {\\n      border-color: $custom-checkbox-indicator-indeterminate-border-color;\\n      @include gradient-bg($custom-checkbox-indicator-indeterminate-bg);\\n      @include box-shadow($custom-checkbox-indicator-indeterminate-box-shadow);\\n    }\\n    &::after {\\n      background-image: escape-svg($custom-checkbox-indicator-icon-indeterminate);\\n    }\\n  }\\n\\n  .custom-control-input:disabled {\\n    &:checked ~ .custom-control-label::before {\\n      background-color: $custom-control-indicator-checked-disabled-bg;\\n    }\\n    &:indeterminate ~ .custom-control-label::before {\\n      background-color: $custom-control-indicator-checked-disabled-bg;\\n    }\\n  }\\n}\\n\\n// Radios\\n//\\n// Tweak just a few things for radios.\\n\\n.custom-radio {\\n  .custom-control-label::before {\\n    // stylelint-disable-next-line property-blacklist\\n    border-radius: $custom-radio-indicator-border-radius;\\n  }\\n\\n  .custom-control-input:checked ~ .custom-control-label {\\n    &::after {\\n      background-image: escape-svg($custom-radio-indicator-icon-checked);\\n    }\\n  }\\n\\n  .custom-control-input:disabled {\\n    &:checked ~ .custom-control-label::before {\\n      background-color: $custom-control-indicator-checked-disabled-bg;\\n    }\\n  }\\n}\\n\\n\\n// switches\\n//\\n// Tweak a few things for switches\\n\\n.custom-switch {\\n  padding-left: $custom-switch-width + $custom-control-gutter;\\n\\n  .custom-control-label {\\n    &::before {\\n      left: -($custom-switch-width + $custom-control-gutter);\\n      width: $custom-switch-width;\\n      pointer-events: all;\\n      // stylelint-disable-next-line property-blacklist\\n      border-radius: $custom-switch-indicator-border-radius;\\n    }\\n\\n    &::after {\\n      top: add(($font-size-base * $line-height-base - $custom-control-indicator-size) / 2, $custom-control-indicator-border-width * 2);\\n      left: add(-($custom-switch-width + $custom-control-gutter), $custom-control-indicator-border-width * 2);\\n      width: $custom-switch-indicator-size;\\n      height: $custom-switch-indicator-size;\\n      background-color: $custom-control-indicator-border-color;\\n      // stylelint-disable-next-line property-blacklist\\n      border-radius: $custom-switch-indicator-border-radius;\\n      @include transition(transform .15s ease-in-out, $custom-forms-transition);\\n    }\\n  }\\n\\n  .custom-control-input:checked ~ .custom-control-label {\\n    &::after {\\n      background-color: $custom-control-indicator-bg;\\n      transform: translateX($custom-switch-width - $custom-control-indicator-size);\\n    }\\n  }\\n\\n  .custom-control-input:disabled {\\n    &:checked ~ .custom-control-label::before {\\n      background-color: $custom-control-indicator-checked-disabled-bg;\\n    }\\n  }\\n}\\n\\n\\n// Select\\n//\\n// Replaces the browser default select with a custom one, mostly pulled from\\n// https://primer.github.io/.\\n//\\n\\n.custom-select {\\n  display: inline-block;\\n  width: 100%;\\n  height: $custom-select-height;\\n  padding: $custom-select-padding-y ($custom-select-padding-x + $custom-select-indicator-padding) $custom-select-padding-y $custom-select-padding-x;\\n  font-family: $custom-select-font-family;\\n  @include font-size($custom-select-font-size);\\n  font-weight: $custom-select-font-weight;\\n  line-height: $custom-select-line-height;\\n  color: $custom-select-color;\\n  vertical-align: middle;\\n  background: $custom-select-bg $custom-select-background;\\n  border: $custom-select-border-width solid $custom-select-border-color;\\n  @include border-radius($custom-select-border-radius, 0);\\n  @include box-shadow($custom-select-box-shadow);\\n  appearance: none;\\n\\n  &:focus {\\n    border-color: $custom-select-focus-border-color;\\n    outline: 0;\\n    @if $enable-shadows {\\n      box-shadow: $custom-select-box-shadow, $custom-select-focus-box-shadow;\\n    } @else {\\n      box-shadow: $custom-select-focus-box-shadow;\\n    }\\n\\n    &::-ms-value {\\n      // For visual consistency with other platforms/browsers,\\n      // suppress the default white text on blue background highlight given to\\n      // the selected option text when the (still closed) <select> receives focus\\n      // in IE and (under certain conditions) Edge.\\n      // See https://github.com/twbs/bootstrap/issues/19398.\\n      color: $input-color;\\n      background-color: $input-bg;\\n    }\\n  }\\n\\n  &[multiple],\\n  &[size]:not([size=\\"1\\"]) {\\n    height: auto;\\n    padding-right: $custom-select-padding-x;\\n    background-image: none;\\n  }\\n\\n  &:disabled {\\n    color: $custom-select-disabled-color;\\n    background-color: $custom-select-disabled-bg;\\n  }\\n\\n  // Hides the default caret in IE11\\n  &::-ms-expand {\\n    display: none;\\n  }\\n\\n  // Remove outline from select box in FF\\n  &:-moz-focusring {\\n    color: transparent;\\n    text-shadow: 0 0 0 $custom-select-color;\\n  }\\n}\\n\\n.custom-select-sm {\\n  height: $custom-select-height-sm;\\n  padding-top: $custom-select-padding-y-sm;\\n  padding-bottom: $custom-select-padding-y-sm;\\n  padding-left: $custom-select-padding-x-sm;\\n  @include font-size($custom-select-font-size-sm);\\n}\\n\\n.custom-select-lg {\\n  height: $custom-select-height-lg;\\n  padding-top: $custom-select-padding-y-lg;\\n  padding-bottom: $custom-select-padding-y-lg;\\n  padding-left: $custom-select-padding-x-lg;\\n  @include font-size($custom-select-font-size-lg);\\n}\\n\\n\\n// File\\n//\\n// Custom file input.\\n\\n.custom-file {\\n  position: relative;\\n  display: inline-block;\\n  width: 100%;\\n  height: $custom-file-height;\\n  margin-bottom: 0;\\n}\\n\\n.custom-file-input {\\n  position: relative;\\n  z-index: 2;\\n  width: 100%;\\n  height: $custom-file-height;\\n  margin: 0;\\n  opacity: 0;\\n\\n  &:focus ~ .custom-file-label {\\n    border-color: $custom-file-focus-border-color;\\n    box-shadow: $custom-file-focus-box-shadow;\\n  }\\n\\n  // Use [disabled] and :disabled to work around https://github.com/twbs/bootstrap/issues/28247\\n  &[disabled] ~ .custom-file-label,\\n  &:disabled ~ .custom-file-label {\\n    background-color: $custom-file-disabled-bg;\\n  }\\n\\n  @each $lang, $value in $custom-file-text {\\n    &:lang(#{$lang}) ~ .custom-file-label::after {\\n      content: $value;\\n    }\\n  }\\n\\n  ~ .custom-file-label[data-browse]::after {\\n    content: attr(data-browse);\\n  }\\n}\\n\\n.custom-file-label {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  z-index: 1;\\n  height: $custom-file-height;\\n  padding: $custom-file-padding-y $custom-file-padding-x;\\n  font-family: $custom-file-font-family;\\n  font-weight: $custom-file-font-weight;\\n  line-height: $custom-file-line-height;\\n  color: $custom-file-color;\\n  background-color: $custom-file-bg;\\n  border: $custom-file-border-width solid $custom-file-border-color;\\n  @include border-radius($custom-file-border-radius);\\n  @include box-shadow($custom-file-box-shadow);\\n\\n  &::after {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    z-index: 3;\\n    display: block;\\n    height: $custom-file-height-inner;\\n    padding: $custom-file-padding-y $custom-file-padding-x;\\n    line-height: $custom-file-line-height;\\n    color: $custom-file-button-color;\\n    content: \\"Browse\\";\\n    @include gradient-bg($custom-file-button-bg);\\n    border-left: inherit;\\n    @include border-radius(0 $custom-file-border-radius $custom-file-border-radius 0);\\n  }\\n}\\n\\n// Range\\n//\\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\\n// elements cannot be mixed. As such, there are no shared styles for focus or\\n// active states on prefixed selectors.\\n\\n.custom-range {\\n  width: 100%;\\n  height: add($custom-range-thumb-height, $custom-range-thumb-focus-box-shadow-width * 2);\\n  padding: 0; // Need to reset padding\\n  background-color: transparent;\\n  appearance: none;\\n\\n  &:focus {\\n    outline: none;\\n\\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\\n    // No box-shadow() mixin for focus accessibility.\\n    &::-webkit-slider-thumb { box-shadow: $custom-range-thumb-focus-box-shadow; }\\n    &::-moz-range-thumb     { box-shadow: $custom-range-thumb-focus-box-shadow; }\\n    &::-ms-thumb            { box-shadow: $custom-range-thumb-focus-box-shadow; }\\n  }\\n\\n  &::-moz-focus-outer {\\n    border: 0;\\n  }\\n\\n  &::-webkit-slider-thumb {\\n    width: $custom-range-thumb-width;\\n    height: $custom-range-thumb-height;\\n    margin-top: ($custom-range-track-height - $custom-range-thumb-height) / 2; // Webkit specific\\n    @include gradient-bg($custom-range-thumb-bg);\\n    border: $custom-range-thumb-border;\\n    @include border-radius($custom-range-thumb-border-radius);\\n    @include box-shadow($custom-range-thumb-box-shadow);\\n    @include transition($custom-forms-transition);\\n    appearance: none;\\n\\n    &:active {\\n      @include gradient-bg($custom-range-thumb-active-bg);\\n    }\\n  }\\n\\n  &::-webkit-slider-runnable-track {\\n    width: $custom-range-track-width;\\n    height: $custom-range-track-height;\\n    color: transparent; // Why?\\n    cursor: $custom-range-track-cursor;\\n    background-color: $custom-range-track-bg;\\n    border-color: transparent;\\n    @include border-radius($custom-range-track-border-radius);\\n    @include box-shadow($custom-range-track-box-shadow);\\n  }\\n\\n  &::-moz-range-thumb {\\n    width: $custom-range-thumb-width;\\n    height: $custom-range-thumb-height;\\n    @include gradient-bg($custom-range-thumb-bg);\\n    border: $custom-range-thumb-border;\\n    @include border-radius($custom-range-thumb-border-radius);\\n    @include box-shadow($custom-range-thumb-box-shadow);\\n    @include transition($custom-forms-transition);\\n    appearance: none;\\n\\n    &:active {\\n      @include gradient-bg($custom-range-thumb-active-bg);\\n    }\\n  }\\n\\n  &::-moz-range-track {\\n    width: $custom-range-track-width;\\n    height: $custom-range-track-height;\\n    color: transparent;\\n    cursor: $custom-range-track-cursor;\\n    background-color: $custom-range-track-bg;\\n    border-color: transparent; // Firefox specific?\\n    @include border-radius($custom-range-track-border-radius);\\n    @include box-shadow($custom-range-track-box-shadow);\\n  }\\n\\n  &::-ms-thumb {\\n    width: $custom-range-thumb-width;\\n    height: $custom-range-thumb-height;\\n    margin-top: 0; // Edge specific\\n    margin-right: $custom-range-thumb-focus-box-shadow-width; // Workaround that overflowed box-shadow is hidden.\\n    margin-left: $custom-range-thumb-focus-box-shadow-width;  // Workaround that overflowed box-shadow is hidden.\\n    @include gradient-bg($custom-range-thumb-bg);\\n    border: $custom-range-thumb-border;\\n    @include border-radius($custom-range-thumb-border-radius);\\n    @include box-shadow($custom-range-thumb-box-shadow);\\n    @include transition($custom-forms-transition);\\n    appearance: none;\\n\\n    &:active {\\n      @include gradient-bg($custom-range-thumb-active-bg);\\n    }\\n  }\\n\\n  &::-ms-track {\\n    width: $custom-range-track-width;\\n    height: $custom-range-track-height;\\n    color: transparent;\\n    cursor: $custom-range-track-cursor;\\n    background-color: transparent;\\n    border-color: transparent;\\n    border-width: $custom-range-thumb-height / 2;\\n    @include box-shadow($custom-range-track-box-shadow);\\n  }\\n\\n  &::-ms-fill-lower {\\n    background-color: $custom-range-track-bg;\\n    @include border-radius($custom-range-track-border-radius);\\n  }\\n\\n  &::-ms-fill-upper {\\n    margin-right: 15px; // arbitrary?\\n    background-color: $custom-range-track-bg;\\n    @include border-radius($custom-range-track-border-radius);\\n  }\\n\\n  &:disabled {\\n    &::-webkit-slider-thumb {\\n      background-color: $custom-range-thumb-disabled-bg;\\n    }\\n\\n    &::-webkit-slider-runnable-track {\\n      cursor: default;\\n    }\\n\\n    &::-moz-range-thumb {\\n      background-color: $custom-range-thumb-disabled-bg;\\n    }\\n\\n    &::-moz-range-track {\\n      cursor: default;\\n    }\\n\\n    &::-ms-thumb {\\n      background-color: $custom-range-thumb-disabled-bg;\\n    }\\n  }\\n}\\n\\n.custom-control-label::before,\\n.custom-file-label,\\n.custom-select {\\n  @include transition($custom-forms-transition);\\n}\\n"},{"filePath":"nav.scss","scss":"// Base class\\n//\\n// Kickstart any navigation component with a set of style resets. Works with\\n// `<nav>`s, `<ul>`s or `<ol>`s.\\n\\n.nav {\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding-left: 0;\\n  margin-bottom: 0;\\n  list-style: none;\\n}\\n\\n.nav-link {\\n  display: block;\\n  padding: $nav-link-padding-y $nav-link-padding-x;\\n\\n  @include hover-focus() {\\n    text-decoration: none;\\n  }\\n\\n  // Disabled state lightens text\\n  &.disabled {\\n    color: $nav-link-disabled-color;\\n    pointer-events: none;\\n    cursor: default;\\n  }\\n}\\n\\n//\\n// Tabs\\n//\\n\\n.nav-tabs {\\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\\n\\n  .nav-item {\\n    margin-bottom: -$nav-tabs-border-width;\\n  }\\n\\n  .nav-link {\\n    border: $nav-tabs-border-width solid transparent;\\n    @include border-top-radius($nav-tabs-border-radius);\\n\\n    @include hover-focus() {\\n      border-color: $nav-tabs-link-hover-border-color;\\n    }\\n\\n    &.disabled {\\n      color: $nav-link-disabled-color;\\n      background-color: transparent;\\n      border-color: transparent;\\n    }\\n  }\\n\\n  .nav-link.active,\\n  .nav-item.show .nav-link {\\n    color: $nav-tabs-link-active-color;\\n    background-color: $nav-tabs-link-active-bg;\\n    border-color: $nav-tabs-link-active-border-color;\\n  }\\n\\n  .dropdown-menu {\\n    // Make dropdown border overlap tab border\\n    margin-top: -$nav-tabs-border-width;\\n    // Remove the top rounded corners here since there is a hard edge above the menu\\n    @include border-top-radius(0);\\n  }\\n}\\n\\n\\n//\\n// Pills\\n//\\n\\n.nav-pills {\\n  .nav-link {\\n    @include border-radius($nav-pills-border-radius);\\n  }\\n\\n  .nav-link.active,\\n  .show > .nav-link {\\n    color: $nav-pills-link-active-color;\\n    background-color: $nav-pills-link-active-bg;\\n  }\\n}\\n\\n\\n//\\n// Justified variants\\n//\\n\\n.nav-fill {\\n  .nav-item {\\n    flex: 1 1 auto;\\n    text-align: center;\\n  }\\n}\\n\\n.nav-justified {\\n  .nav-item {\\n    flex-basis: 0;\\n    flex-grow: 1;\\n    text-align: center;\\n  }\\n}\\n\\n\\n// Tabbable tabs\\n//\\n// Hide tabbable panes to start, show them when `.active`\\n\\n.tab-content {\\n  > .tab-pane {\\n    display: none;\\n  }\\n  > .active {\\n    display: block;\\n  }\\n}\\n"},{"filePath":"navbar.scss","scss":"// Contents\\n//\\n// Navbar\\n// Navbar brand\\n// Navbar nav\\n// Navbar text\\n// Navbar divider\\n// Responsive navbar\\n// Navbar position\\n// Navbar themes\\n\\n\\n// Navbar\\n//\\n// Provide a static navbar from which we expand to create full-width, fixed, and\\n// other navbar variations.\\n\\n.navbar {\\n  position: relative;\\n  display: flex;\\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\\n  align-items: center;\\n  justify-content: space-between; // space out brand from logo\\n  padding: $navbar-padding-y $navbar-padding-x;\\n\\n  // Because flex properties aren\'t inherited, we need to redeclare these first\\n  // few properties so that content nested within behave properly.\\n  %container-flex-properties {\\n    display: flex;\\n    flex-wrap: wrap;\\n    align-items: center;\\n    justify-content: space-between;\\n  }\\n\\n  .container,\\n  .container-fluid {\\n    @extend %container-flex-properties;\\n  }\\n\\n  @each $breakpoint, $container-max-width in $container-max-widths {\\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\\n      @extend %container-flex-properties;\\n    }\\n  }\\n}\\n\\n\\n// Navbar brand\\n//\\n// Used for brand, project, or site names.\\n\\n.navbar-brand {\\n  display: inline-block;\\n  padding-top: $navbar-brand-padding-y;\\n  padding-bottom: $navbar-brand-padding-y;\\n  margin-right: $navbar-padding-x;\\n  @include font-size($navbar-brand-font-size);\\n  line-height: inherit;\\n  white-space: nowrap;\\n\\n  @include hover-focus() {\\n    text-decoration: none;\\n  }\\n}\\n\\n\\n// Navbar nav\\n//\\n// Custom navbar navigation (doesn\'t require `.nav`, but does make use of `.nav-link`).\\n\\n.navbar-nav {\\n  display: flex;\\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\\n  padding-left: 0;\\n  margin-bottom: 0;\\n  list-style: none;\\n\\n  .nav-link {\\n    padding-right: 0;\\n    padding-left: 0;\\n  }\\n\\n  .dropdown-menu {\\n    position: static;\\n    float: none;\\n  }\\n}\\n\\n\\n// Navbar text\\n//\\n//\\n\\n.navbar-text {\\n  display: inline-block;\\n  padding-top: $nav-link-padding-y;\\n  padding-bottom: $nav-link-padding-y;\\n}\\n\\n\\n// Responsive navbar\\n//\\n// Custom styles for responsive collapsing and toggling of navbar contents.\\n// Powered by the collapse Bootstrap JavaScript plugin.\\n\\n// When collapsed, prevent the toggleable navbar contents from appearing in\\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\\n// on the `.navbar` parent.\\n.navbar-collapse {\\n  flex-basis: 100%;\\n  flex-grow: 1;\\n  // For always expanded or extra full navbars, ensure content aligns itself\\n  // properly vertically. Can be easily overridden with flex utilities.\\n  align-items: center;\\n}\\n\\n// Button for toggling the navbar when in its collapsed state\\n.navbar-toggler {\\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\\n  @include font-size($navbar-toggler-font-size);\\n  line-height: 1;\\n  background-color: transparent; // remove default button style\\n  border: $border-width solid transparent; // remove default button style\\n  @include border-radius($navbar-toggler-border-radius);\\n\\n  @include hover-focus() {\\n    text-decoration: none;\\n  }\\n}\\n\\n// Keep as a separate element so folks can easily override it with another icon\\n// or image file as needed.\\n.navbar-toggler-icon {\\n  display: inline-block;\\n  width: 1.5em;\\n  height: 1.5em;\\n  vertical-align: middle;\\n  content: \\"\\";\\n  background: no-repeat center center;\\n  background-size: 100% 100%;\\n}\\n\\n// Generate series of `.navbar-expand-*` responsive classes for configuring\\n// where your navbar collapses.\\n.navbar-expand {\\n  @each $breakpoint in map-keys($grid-breakpoints) {\\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\\n    $infix: breakpoint-infix($next, $grid-breakpoints);\\n\\n    &#{$infix} {\\n      @include media-breakpoint-down($breakpoint) {\\n        %container-navbar-expand-#{$breakpoint} {\\n          padding-right: 0;\\n          padding-left: 0;\\n        }\\n\\n        > .container,\\n        > .container-fluid {\\n          @extend %container-navbar-expand-#{$breakpoint};\\n        }\\n\\n        @each $size, $container-max-width in $container-max-widths {\\n          > .container#{breakpoint-infix($size, $container-max-widths)} {\\n            @extend %container-navbar-expand-#{$breakpoint};\\n          }\\n        }\\n      }\\n\\n      @include media-breakpoint-up($next) {\\n        flex-flow: row nowrap;\\n        justify-content: flex-start;\\n\\n        .navbar-nav {\\n          flex-direction: row;\\n\\n          .dropdown-menu {\\n            position: absolute;\\n          }\\n\\n          .nav-link {\\n            padding-right: $navbar-nav-link-padding-x;\\n            padding-left: $navbar-nav-link-padding-x;\\n          }\\n        }\\n\\n        // For nesting containers, have to redeclare for alignment purposes\\n        %container-nesting-#{$breakpoint} {\\n          flex-wrap: nowrap;\\n        }\\n\\n        > .container,\\n        > .container-fluid {\\n          @extend %container-nesting-#{$breakpoint};\\n        }\\n\\n        @each $size, $container-max-width in $container-max-widths {\\n          > .container#{breakpoint-infix($size, $container-max-widths)} {\\n            @extend %container-nesting-#{$breakpoint};\\n          }\\n        }\\n\\n        .navbar-collapse {\\n          display: flex !important; // stylelint-disable-line declaration-no-important\\n\\n          // Changes flex-bases to auto because of an IE10 bug\\n          flex-basis: auto;\\n        }\\n\\n        .navbar-toggler {\\n          display: none;\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n\\n// Navbar themes\\n//\\n// Styles for switching between navbars with light or dark background.\\n\\n// Dark links against a light background\\n.navbar-light {\\n  .navbar-brand {\\n    color: $navbar-light-brand-color;\\n\\n    @include hover-focus() {\\n      color: $navbar-light-brand-hover-color;\\n    }\\n  }\\n\\n  .navbar-nav {\\n    .nav-link {\\n      color: $navbar-light-color;\\n\\n      @include hover-focus() {\\n        color: $navbar-light-hover-color;\\n      }\\n\\n      &.disabled {\\n        color: $navbar-light-disabled-color;\\n      }\\n    }\\n\\n    .show > .nav-link,\\n    .active > .nav-link,\\n    .nav-link.show,\\n    .nav-link.active {\\n      color: $navbar-light-active-color;\\n    }\\n  }\\n\\n  .navbar-toggler {\\n    color: $navbar-light-color;\\n    border-color: $navbar-light-toggler-border-color;\\n  }\\n\\n  .navbar-toggler-icon {\\n    background-image: escape-svg($navbar-light-toggler-icon-bg);\\n  }\\n\\n  .navbar-text {\\n    color: $navbar-light-color;\\n    a {\\n      color: $navbar-light-active-color;\\n\\n      @include hover-focus() {\\n        color: $navbar-light-active-color;\\n      }\\n    }\\n  }\\n}\\n\\n// White links against a dark background\\n.navbar-dark {\\n  .navbar-brand {\\n    color: $navbar-dark-brand-color;\\n\\n    @include hover-focus() {\\n      color: $navbar-dark-brand-hover-color;\\n    }\\n  }\\n\\n  .navbar-nav {\\n    .nav-link {\\n      color: $navbar-dark-color;\\n\\n      @include hover-focus() {\\n        color: $navbar-dark-hover-color;\\n      }\\n\\n      &.disabled {\\n        color: $navbar-dark-disabled-color;\\n      }\\n    }\\n\\n    .show > .nav-link,\\n    .active > .nav-link,\\n    .nav-link.show,\\n    .nav-link.active {\\n      color: $navbar-dark-active-color;\\n    }\\n  }\\n\\n  .navbar-toggler {\\n    color: $navbar-dark-color;\\n    border-color: $navbar-dark-toggler-border-color;\\n  }\\n\\n  .navbar-toggler-icon {\\n    background-image: escape-svg($navbar-dark-toggler-icon-bg);\\n  }\\n\\n  .navbar-text {\\n    color: $navbar-dark-color;\\n    a {\\n      color: $navbar-dark-active-color;\\n\\n      @include hover-focus() {\\n        color: $navbar-dark-active-color;\\n      }\\n    }\\n  }\\n}\\n"},{"filePath":"card.scss","scss":"//\\n// Base styles\\n//\\n\\n.card {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\\n  height: $card-height;\\n  word-wrap: break-word;\\n  background-color: $card-bg;\\n  background-clip: border-box;\\n  border: $card-border-width solid $card-border-color;\\n  @include border-radius($card-border-radius);\\n\\n  > hr {\\n    margin-right: 0;\\n    margin-left: 0;\\n  }\\n\\n  > .list-group:first-child {\\n    .list-group-item:first-child {\\n      @include border-top-radius($card-border-radius);\\n    }\\n  }\\n\\n  > .list-group:last-child {\\n    .list-group-item:last-child {\\n      @include border-bottom-radius($card-border-radius);\\n    }\\n  }\\n}\\n\\n.card-body {\\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\\n  // as much space as possible, ensuring footers are aligned to the bottom.\\n  flex: 1 1 auto;\\n  // Workaround for the image size bug in IE\\n  // See: https://github.com/twbs/bootstrap/pull/28855\\n  min-height: 1px;\\n  padding: $card-spacer-x;\\n  color: $card-color;\\n}\\n\\n.card-title {\\n  margin-bottom: $card-spacer-y;\\n}\\n\\n.card-subtitle {\\n  margin-top: -$card-spacer-y / 2;\\n  margin-bottom: 0;\\n}\\n\\n.card-text:last-child {\\n  margin-bottom: 0;\\n}\\n\\n.card-link {\\n  @include hover() {\\n    text-decoration: none;\\n  }\\n\\n  + .card-link {\\n    margin-left: $card-spacer-x;\\n  }\\n}\\n\\n//\\n// Optional textual caps\\n//\\n\\n.card-header {\\n  padding: $card-spacer-y $card-spacer-x;\\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\\n  color: $card-cap-color;\\n  background-color: $card-cap-bg;\\n  border-bottom: $card-border-width solid $card-border-color;\\n\\n  &:first-child {\\n    @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);\\n  }\\n\\n  + .list-group {\\n    .list-group-item:first-child {\\n      border-top: 0;\\n    }\\n  }\\n}\\n\\n.card-footer {\\n  padding: $card-spacer-y $card-spacer-x;\\n  background-color: $card-cap-bg;\\n  border-top: $card-border-width solid $card-border-color;\\n\\n  &:last-child {\\n    @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);\\n  }\\n}\\n\\n\\n//\\n// Header navs\\n//\\n\\n.card-header-tabs {\\n  margin-right: -$card-spacer-x / 2;\\n  margin-bottom: -$card-spacer-y;\\n  margin-left: -$card-spacer-x / 2;\\n  border-bottom: 0;\\n}\\n\\n.card-header-pills {\\n  margin-right: -$card-spacer-x / 2;\\n  margin-left: -$card-spacer-x / 2;\\n}\\n\\n// Card image\\n.card-img-overlay {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  padding: $card-img-overlay-padding;\\n}\\n\\n.card-img,\\n.card-img-top,\\n.card-img-bottom {\\n  flex-shrink: 0; // For IE: https://github.com/twbs/bootstrap/issues/29396\\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\\n}\\n\\n.card-img,\\n.card-img-top {\\n  @include border-top-radius($card-inner-border-radius);\\n}\\n\\n.card-img,\\n.card-img-bottom {\\n  @include border-bottom-radius($card-inner-border-radius);\\n}\\n\\n\\n// Card deck\\n\\n.card-deck {\\n  .card {\\n    margin-bottom: $card-deck-margin;\\n  }\\n\\n  @include media-breakpoint-up(sm) {\\n    display: flex;\\n    flex-flow: row wrap;\\n    margin-right: -$card-deck-margin;\\n    margin-left: -$card-deck-margin;\\n\\n    .card {\\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\\n      flex: 1 0 0%;\\n      margin-right: $card-deck-margin;\\n      margin-bottom: 0; // Override the default\\n      margin-left: $card-deck-margin;\\n    }\\n  }\\n}\\n\\n\\n//\\n// Card groups\\n//\\n\\n.card-group {\\n  // The child selector allows nested `.card` within `.card-group`\\n  // to display properly.\\n  > .card {\\n    margin-bottom: $card-group-margin;\\n  }\\n\\n  @include media-breakpoint-up(sm) {\\n    display: flex;\\n    flex-flow: row wrap;\\n    // The child selector allows nested `.card` within `.card-group`\\n    // to display properly.\\n    > .card {\\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\\n      flex: 1 0 0%;\\n      margin-bottom: 0;\\n\\n      + .card {\\n        margin-left: 0;\\n        border-left: 0;\\n      }\\n\\n      // Handle rounded corners\\n      @if $enable-rounded {\\n        &:not(:last-child) {\\n          @include border-right-radius(0);\\n\\n          .card-img-top,\\n          .card-header {\\n            // stylelint-disable-next-line property-blacklist\\n            border-top-right-radius: 0;\\n          }\\n          .card-img-bottom,\\n          .card-footer {\\n            // stylelint-disable-next-line property-blacklist\\n            border-bottom-right-radius: 0;\\n          }\\n        }\\n\\n        &:not(:first-child) {\\n          @include border-left-radius(0);\\n\\n          .card-img-top,\\n          .card-header {\\n            // stylelint-disable-next-line property-blacklist\\n            border-top-left-radius: 0;\\n          }\\n          .card-img-bottom,\\n          .card-footer {\\n            // stylelint-disable-next-line property-blacklist\\n            border-bottom-left-radius: 0;\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n\\n//\\n// Columns\\n//\\n\\n.card-columns {\\n  .card {\\n    margin-bottom: $card-columns-margin;\\n  }\\n\\n  @include media-breakpoint-up(sm) {\\n    column-count: $card-columns-count;\\n    column-gap: $card-columns-gap;\\n    orphans: 1;\\n    widows: 1;\\n\\n    .card {\\n      display: inline-block; // Don\'t let them vertically span multiple columns\\n      width: 100%; // Don\'t let their width change\\n    }\\n  }\\n}\\n\\n\\n//\\n// Accordion\\n//\\n\\n.accordion {\\n  > .card {\\n    overflow: hidden;\\n\\n    &:not(:last-of-type) {\\n      border-bottom: 0;\\n      @include border-bottom-radius(0);\\n    }\\n\\n    &:not(:first-of-type) {\\n      @include border-top-radius(0);\\n    }\\n\\n    > .card-header {\\n      @include border-radius(0);\\n      margin-bottom: -$card-border-width;\\n    }\\n  }\\n}\\n"},{"filePath":"breadcrumb.scss","scss":".breadcrumb {\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: $breadcrumb-padding-y $breadcrumb-padding-x;\\n  margin-bottom: $breadcrumb-margin-bottom;\\n  @include font-size($breadcrumb-font-size);\\n  list-style: none;\\n  background-color: $breadcrumb-bg;\\n  @include border-radius($breadcrumb-border-radius);\\n}\\n\\n.breadcrumb-item {\\n  // The separator between breadcrumbs (by default, a forward-slash: \\"/\\")\\n  + .breadcrumb-item {\\n    padding-left: $breadcrumb-item-padding;\\n\\n    &::before {\\n      display: inline-block; // Suppress underlining of the separator in modern browsers\\n      padding-right: $breadcrumb-item-padding;\\n      color: $breadcrumb-divider-color;\\n      content: escape-svg($breadcrumb-divider);\\n    }\\n  }\\n\\n  // IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\\n  // without `<ul>`s. The `::before` pseudo-element generates an element\\n  // *within* the .breadcrumb-item and thereby inherits the `text-decoration`.\\n  //\\n  // To trick IE into suppressing the underline, we give the pseudo-element an\\n  // underline and then immediately remove it.\\n  + .breadcrumb-item:hover::before {\\n    text-decoration: underline;\\n  }\\n  // stylelint-disable-next-line no-duplicate-selectors\\n  + .breadcrumb-item:hover::before {\\n    text-decoration: none;\\n  }\\n\\n  &.active {\\n    color: $breadcrumb-active-color;\\n  }\\n}\\n"},{"filePath":"pagination.scss","scss":".pagination {\\n  display: flex;\\n  @include list-unstyled();\\n  @include border-radius();\\n}\\n\\n.page-link {\\n  position: relative;\\n  display: block;\\n  padding: $pagination-padding-y $pagination-padding-x;\\n  margin-left: -$pagination-border-width;\\n  line-height: $pagination-line-height;\\n  color: $pagination-color;\\n  background-color: $pagination-bg;\\n  border: $pagination-border-width solid $pagination-border-color;\\n\\n  &:hover {\\n    z-index: 2;\\n    color: $pagination-hover-color;\\n    text-decoration: none;\\n    background-color: $pagination-hover-bg;\\n    border-color: $pagination-hover-border-color;\\n  }\\n\\n  &:focus {\\n    z-index: 3;\\n    outline: $pagination-focus-outline;\\n    box-shadow: $pagination-focus-box-shadow;\\n  }\\n}\\n\\n.page-item {\\n  &:first-child {\\n    .page-link {\\n      margin-left: 0;\\n      @include border-left-radius($border-radius);\\n    }\\n  }\\n  &:last-child {\\n    .page-link {\\n      @include border-right-radius($border-radius);\\n    }\\n  }\\n\\n  &.active .page-link {\\n    z-index: 3;\\n    color: $pagination-active-color;\\n    background-color: $pagination-active-bg;\\n    border-color: $pagination-active-border-color;\\n  }\\n\\n  &.disabled .page-link {\\n    color: $pagination-disabled-color;\\n    pointer-events: none;\\n    // Opinionated: remove the \\"hand\\" cursor set previously for .page-link\\n    cursor: auto;\\n    background-color: $pagination-disabled-bg;\\n    border-color: $pagination-disabled-border-color;\\n  }\\n}\\n\\n\\n//\\n// Sizing\\n//\\n\\n.pagination-lg {\\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $line-height-lg, $border-radius-lg);\\n}\\n\\n.pagination-sm {\\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $line-height-sm, $border-radius-sm);\\n}\\n"},{"filePath":"badge.scss","scss":"// Base class\\n//\\n// Requires one of the contextual, color modifier classes for `color` and\\n// `background-color`.\\n\\n.badge {\\n  display: inline-block;\\n  padding: $badge-padding-y $badge-padding-x;\\n  @include font-size($badge-font-size);\\n  font-weight: $badge-font-weight;\\n  line-height: 1;\\n  text-align: center;\\n  white-space: nowrap;\\n  vertical-align: baseline;\\n  @include border-radius($badge-border-radius);\\n  @include transition($badge-transition);\\n\\n  @at-root a#{&} {\\n    @include hover-focus() {\\n      text-decoration: none;\\n    }\\n  }\\n\\n  // Empty badges collapse automatically\\n  &:empty {\\n    display: none;\\n  }\\n}\\n\\n// Quick fix for badges in buttons\\n.btn .badge {\\n  position: relative;\\n  top: -1px;\\n}\\n\\n// Pill badges\\n//\\n// Make them extra rounded with a modifier to replace v3\'s badges.\\n\\n.badge-pill {\\n  padding-right: $badge-pill-padding-x;\\n  padding-left: $badge-pill-padding-x;\\n  @include border-radius($badge-pill-border-radius);\\n}\\n\\n// Colors\\n//\\n// Contextual variations (linked badges get darker on :hover).\\n\\n@each $color, $value in $theme-colors {\\n  .badge-#{$color} {\\n    @include badge-variant($value);\\n  }\\n}\\n"},{"filePath":"jumbotron.scss","scss":".jumbotron {\\n  padding: $jumbotron-padding ($jumbotron-padding / 2);\\n  margin-bottom: $jumbotron-padding;\\n  color: $jumbotron-color;\\n  background-color: $jumbotron-bg;\\n  @include border-radius($border-radius-lg);\\n\\n  @include media-breakpoint-up(sm) {\\n    padding: ($jumbotron-padding * 2) $jumbotron-padding;\\n  }\\n}\\n\\n.jumbotron-fluid {\\n  padding-right: 0;\\n  padding-left: 0;\\n  @include border-radius(0);\\n}\\n"},{"filePath":"alert.scss","scss":"//\\n// Base styles\\n//\\n\\n.alert {\\n  position: relative;\\n  padding: $alert-padding-y $alert-padding-x;\\n  margin-bottom: $alert-margin-bottom;\\n  border: $alert-border-width solid transparent;\\n  @include border-radius($alert-border-radius);\\n}\\n\\n// Headings for larger alerts\\n.alert-heading {\\n  // Specified to prevent conflicts of changing $headings-color\\n  color: inherit;\\n}\\n\\n// Provide class for links that match alerts\\n.alert-link {\\n  font-weight: $alert-link-font-weight;\\n}\\n\\n\\n// Dismissible alerts\\n//\\n// Expand the right padding and account for the close button\'s positioning.\\n\\n.alert-dismissible {\\n  padding-right: $close-font-size + $alert-padding-x * 2;\\n\\n  // Adjust close link position\\n  .close {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    padding: $alert-padding-y $alert-padding-x;\\n    color: inherit;\\n  }\\n}\\n\\n\\n// Alternate styles\\n//\\n// Generate contextual modifier classes for colorizing the alert.\\n\\n@each $color, $value in $theme-colors {\\n  .alert-#{$color} {\\n    @include alert-variant(theme-color-level($color, $alert-bg-level), theme-color-level($color, $alert-border-level), theme-color-level($color, $alert-color-level));\\n  }\\n}\\n"},{"filePath":"progress.scss","scss":"// Disable animation if transitions are disabled\\n@if $enable-transitions {\\n  @keyframes progress-bar-stripes {\\n    from { background-position: $progress-height 0; }\\n    to { background-position: 0 0; }\\n  }\\n}\\n\\n.progress {\\n  display: flex;\\n  height: $progress-height;\\n  overflow: hidden; // force rounded corners by cropping it\\n  @include font-size($progress-font-size);\\n  background-color: $progress-bg;\\n  @include border-radius($progress-border-radius);\\n  @include box-shadow($progress-box-shadow);\\n}\\n\\n.progress-bar {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  overflow: hidden;\\n  color: $progress-bar-color;\\n  text-align: center;\\n  white-space: nowrap;\\n  background-color: $progress-bar-bg;\\n  @include transition($progress-bar-transition);\\n}\\n\\n.progress-bar-striped {\\n  @include gradient-striped();\\n  background-size: $progress-height $progress-height;\\n}\\n\\n@if $enable-transitions {\\n  .progress-bar-animated {\\n    animation: progress-bar-stripes $progress-bar-animation-timing;\\n\\n    @if $enable-prefers-reduced-motion-media-query {\\n      @media (prefers-reduced-motion: reduce) {\\n        animation: none;\\n      }\\n    }\\n  }\\n}\\n"},{"filePath":"media.scss","scss":".media {\\n  display: flex;\\n  align-items: flex-start;\\n}\\n\\n.media-body {\\n  flex: 1;\\n}\\n"},{"filePath":"list-group.scss","scss":"// Base class\\n//\\n// Easily usable on <ul>, <ol>, or <div>.\\n\\n.list-group {\\n  display: flex;\\n  flex-direction: column;\\n\\n  // No need to set list-style: none; since .list-group-item is block level\\n  padding-left: 0; // reset padding because ul and ol\\n  margin-bottom: 0;\\n}\\n\\n\\n// Interactive list items\\n//\\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\\n// list items. Includes an extra `.active` modifier class for selected items.\\n\\n.list-group-item-action {\\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\\n  color: $list-group-action-color;\\n  text-align: inherit; // For `<button>`s (anchors inherit)\\n\\n  // Hover state\\n  @include hover-focus() {\\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\\n    color: $list-group-action-hover-color;\\n    text-decoration: none;\\n    background-color: $list-group-hover-bg;\\n  }\\n\\n  &:active {\\n    color: $list-group-action-active-color;\\n    background-color: $list-group-action-active-bg;\\n  }\\n}\\n\\n\\n// Individual list items\\n//\\n// Use on `li`s or `div`s within the `.list-group` parent.\\n\\n.list-group-item {\\n  position: relative;\\n  display: block;\\n  padding: $list-group-item-padding-y $list-group-item-padding-x;\\n  color: $list-group-color;\\n  background-color: $list-group-bg;\\n  border: $list-group-border-width solid $list-group-border-color;\\n\\n  &:first-child {\\n    @include border-top-radius($list-group-border-radius);\\n  }\\n\\n  &:last-child {\\n    @include border-bottom-radius($list-group-border-radius);\\n  }\\n\\n  &.disabled,\\n  &:disabled {\\n    color: $list-group-disabled-color;\\n    pointer-events: none;\\n    background-color: $list-group-disabled-bg;\\n  }\\n\\n  // Include both here for `<a>`s and `<button>`s\\n  &.active {\\n    z-index: 2; // Place active items above their siblings for proper border styling\\n    color: $list-group-active-color;\\n    background-color: $list-group-active-bg;\\n    border-color: $list-group-active-border-color;\\n  }\\n\\n  & + & {\\n    border-top-width: 0;\\n\\n    &.active {\\n      margin-top: -$list-group-border-width;\\n      border-top-width: $list-group-border-width;\\n    }\\n  }\\n}\\n\\n\\n// Horizontal\\n//\\n// Change the layout of list group items from vertical (default) to horizontal.\\n\\n@each $breakpoint in map-keys($grid-breakpoints) {\\n  @include media-breakpoint-up($breakpoint) {\\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\\n\\n    .list-group-horizontal#{$infix} {\\n      flex-direction: row;\\n\\n      .list-group-item {\\n        &:first-child {\\n          @include border-bottom-left-radius($list-group-border-radius);\\n          @include border-top-right-radius(0);\\n        }\\n\\n        &:last-child {\\n          @include border-top-right-radius($list-group-border-radius);\\n          @include border-bottom-left-radius(0);\\n        }\\n\\n        &.active {\\n          margin-top: 0;\\n        }\\n\\n        & + .list-group-item {\\n          border-top-width: $list-group-border-width;\\n          border-left-width: 0;\\n\\n          &.active {\\n            margin-left: -$list-group-border-width;\\n            border-left-width: $list-group-border-width;\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n\\n// Flush list items\\n//\\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\\n// useful within other components (e.g., cards).\\n\\n.list-group-flush {\\n  .list-group-item {\\n    border-right-width: 0;\\n    border-left-width: 0;\\n    @include border-radius(0);\\n\\n    &:first-child {\\n      border-top-width: 0;\\n    }\\n  }\\n\\n  &:last-child {\\n    .list-group-item:last-child {\\n      border-bottom-width: 0;\\n    }\\n  }\\n}\\n\\n\\n// Contextual variants\\n//\\n// Add modifier classes to change text and background color on individual items.\\n// Organizationally, this must come after the `:hover` states.\\n\\n@each $color, $value in $theme-colors {\\n  @include list-group-item-variant($color, theme-color-level($color, -9), theme-color-level($color, 6));\\n}\\n"},{"filePath":"close.scss","scss":".close {\\n  float: right;\\n  @include font-size($close-font-size);\\n  font-weight: $close-font-weight;\\n  line-height: 1;\\n  color: $close-color;\\n  text-shadow: $close-text-shadow;\\n  opacity: .5;\\n\\n  // Override <a>\'s hover style\\n  @include hover() {\\n    color: $close-color;\\n    text-decoration: none;\\n  }\\n\\n  &:not(:disabled):not(.disabled) {\\n    @include hover-focus() {\\n      opacity: .75;\\n    }\\n  }\\n}\\n\\n// Additional properties for button version\\n// iOS requires the button element instead of an anchor tag.\\n// If you want the anchor version, it requires `href=\\"#\\"`.\\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\\n\\n// stylelint-disable-next-line selector-no-qualifying-type\\nbutton.close {\\n  padding: 0;\\n  background-color: transparent;\\n  border: 0;\\n  appearance: none;\\n}\\n\\n// Future-proof disabling of clicks on `<a>` elements\\n\\n// stylelint-disable-next-line selector-no-qualifying-type\\na.close.disabled {\\n  pointer-events: none;\\n}\\n"},{"filePath":"toasts.scss","scss":".toast {\\n  max-width: $toast-max-width;\\n  overflow: hidden; // cheap rounded corners on nested items\\n  @include font-size($toast-font-size);\\n  color: $toast-color;\\n  background-color: $toast-background-color;\\n  background-clip: padding-box;\\n  border: $toast-border-width solid $toast-border-color;\\n  box-shadow: $toast-box-shadow;\\n  backdrop-filter: blur(10px);\\n  opacity: 0;\\n  @include border-radius($toast-border-radius);\\n\\n  &:not(:last-child) {\\n    margin-bottom: $toast-padding-x;\\n  }\\n\\n  &.showing {\\n    opacity: 1;\\n  }\\n\\n  &.show {\\n    display: block;\\n    opacity: 1;\\n  }\\n\\n  &.hide {\\n    display: none;\\n  }\\n}\\n\\n.toast-header {\\n  display: flex;\\n  align-items: center;\\n  padding: $toast-padding-y $toast-padding-x;\\n  color: $toast-header-color;\\n  background-color: $toast-header-background-color;\\n  background-clip: padding-box;\\n  border-bottom: $toast-border-width solid $toast-header-border-color;\\n}\\n\\n.toast-body {\\n  padding: $toast-padding-x; // apply to both vertical and horizontal\\n}\\n"},{"filePath":"modal.scss","scss":"// .modal-open      - body class for killing the scroll\\n// .modal           - container to scroll within\\n// .modal-dialog    - positioning shell for the actual modal\\n// .modal-content   - actual modal w/ bg and corners and stuff\\n\\n\\n.modal-open {\\n  // Kill the scroll on the body\\n  overflow: hidden;\\n\\n  .modal {\\n    overflow-x: hidden;\\n    overflow-y: auto;\\n  }\\n}\\n\\n// Container that the modal scrolls within\\n.modal {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: $zindex-modal;\\n  display: none;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\\n  // https://github.com/twbs/bootstrap/pull/10951.\\n  outline: 0;\\n  // We deliberately don\'t use `-webkit-overflow-scrolling: touch;` due to a\\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\\n  // See also https://github.com/twbs/bootstrap/issues/17695\\n}\\n\\n// Shell div to position the modal with bottom padding\\n.modal-dialog {\\n  position: relative;\\n  width: auto;\\n  margin: $modal-dialog-margin;\\n  // allow clicks to pass through for custom click handling to close modal\\n  pointer-events: none;\\n\\n  // When fading in the modal, animate it to slide down\\n  .modal.fade & {\\n    @include transition($modal-transition);\\n    transform: $modal-fade-transform;\\n  }\\n  .modal.show & {\\n    transform: $modal-show-transform;\\n  }\\n\\n  // When trying to close, animate focus to scale\\n  .modal.modal-static & {\\n    transform: $modal-scale-transform;\\n  }\\n}\\n\\n.modal-dialog-scrollable {\\n  display: flex; // IE10/11\\n  max-height: subtract(100%, $modal-dialog-margin * 2);\\n\\n  .modal-content {\\n    max-height: subtract(100vh, $modal-dialog-margin * 2); // IE10/11\\n    overflow: hidden;\\n  }\\n\\n  .modal-header,\\n  .modal-footer {\\n    flex-shrink: 0;\\n  }\\n\\n  .modal-body {\\n    overflow-y: auto;\\n  }\\n}\\n\\n.modal-dialog-centered {\\n  display: flex;\\n  align-items: center;\\n  min-height: subtract(100%, $modal-dialog-margin * 2);\\n\\n  // Ensure `modal-dialog-centered` extends the full height of the view (IE10/11)\\n  &::before {\\n    display: block; // IE10\\n    height: subtract(100vh, $modal-dialog-margin * 2);\\n    content: \\"\\";\\n  }\\n\\n  // Ensure `.modal-body` shows scrollbar (IE10/11)\\n  &.modal-dialog-scrollable {\\n    flex-direction: column;\\n    justify-content: center;\\n    height: 100%;\\n\\n    .modal-content {\\n      max-height: none;\\n    }\\n\\n    &::before {\\n      content: none;\\n    }\\n  }\\n}\\n\\n// Actual modal\\n.modal-content {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\\n  // counteract the pointer-events: none; in the .modal-dialog\\n  color: $modal-content-color;\\n  pointer-events: auto;\\n  background-color: $modal-content-bg;\\n  background-clip: padding-box;\\n  border: $modal-content-border-width solid $modal-content-border-color;\\n  @include border-radius($modal-content-border-radius);\\n  @include box-shadow($modal-content-box-shadow-xs);\\n  // Remove focus outline from opened modal\\n  outline: 0;\\n}\\n\\n// Modal background\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: $zindex-modal-backdrop;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: $modal-backdrop-bg;\\n\\n  // Fade for backdrop\\n  &.fade { opacity: 0; }\\n  &.show { opacity: $modal-backdrop-opacity; }\\n}\\n\\n// Modal header\\n// Top section of the modal w/ title and dismiss\\n.modal-header {\\n  display: flex;\\n  align-items: flex-start; // so the close btn always stays on the upper right corner\\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\\n  padding: $modal-header-padding;\\n  border-bottom: $modal-header-border-width solid $modal-header-border-color;\\n  @include border-top-radius($modal-content-inner-border-radius);\\n\\n  .close {\\n    padding: $modal-header-padding;\\n    // auto on the left force icon to the right even when there is no .modal-title\\n    margin: (-$modal-header-padding-y) (-$modal-header-padding-x) (-$modal-header-padding-y) auto;\\n  }\\n}\\n\\n// Title text within header\\n.modal-title {\\n  margin-bottom: 0;\\n  line-height: $modal-title-line-height;\\n}\\n\\n// Modal body\\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\\n.modal-body {\\n  position: relative;\\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\\n  // when there should be a fixed height on `.modal-dialog`.\\n  flex: 1 1 auto;\\n  padding: $modal-inner-padding;\\n}\\n\\n// Footer (for actions)\\n.modal-footer {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center; // vertically center\\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn\'t work on flex items\\n  padding: $modal-inner-padding - $modal-footer-margin-between / 2;\\n  border-top: $modal-footer-border-width solid $modal-footer-border-color;\\n  @include border-bottom-radius($modal-content-inner-border-radius);\\n\\n  // Place margin between footer elements\\n  // This solution is far from ideal because of the universal selector usage,\\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\\n  // stylelint-disable-next-line selector-max-universal\\n  > * {\\n    margin: $modal-footer-margin-between / 2;\\n  }\\n}\\n\\n// Measure scrollbar width for padding body during modal show/hide\\n.modal-scrollbar-measure {\\n  position: absolute;\\n  top: -9999px;\\n  width: 50px;\\n  height: 50px;\\n  overflow: scroll;\\n}\\n\\n// Scale up the modal\\n@include media-breakpoint-up(sm) {\\n  // Automatically set modal\'s width for larger viewports\\n  .modal-dialog {\\n    max-width: $modal-md;\\n    margin: $modal-dialog-margin-y-sm-up auto;\\n  }\\n\\n  .modal-dialog-scrollable {\\n    max-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\\n\\n    .modal-content {\\n      max-height: subtract(100vh, $modal-dialog-margin-y-sm-up * 2);\\n    }\\n  }\\n\\n  .modal-dialog-centered {\\n    min-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\\n\\n    &::before {\\n      height: subtract(100vh, $modal-dialog-margin-y-sm-up * 2);\\n    }\\n  }\\n\\n  .modal-content {\\n    @include box-shadow($modal-content-box-shadow-sm-up);\\n  }\\n\\n  .modal-sm { max-width: $modal-sm; }\\n}\\n\\n@include media-breakpoint-up(lg) {\\n  .modal-lg,\\n  .modal-xl {\\n    max-width: $modal-lg;\\n  }\\n}\\n\\n@include media-breakpoint-up(xl) {\\n  .modal-xl { max-width: $modal-xl; }\\n}\\n"},{"filePath":"tooltip.scss","scss":"// Base class\\n.tooltip {\\n  position: absolute;\\n  z-index: $zindex-tooltip;\\n  display: block;\\n  margin: $tooltip-margin;\\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\\n  // So reset our font and text properties to avoid inheriting weird values.\\n  @include reset-text();\\n  @include font-size($tooltip-font-size);\\n  // Allow breaking very long words so they don\'t overflow the tooltip\'s bounds\\n  word-wrap: break-word;\\n  opacity: 0;\\n\\n  &.show { opacity: $tooltip-opacity; }\\n\\n  .arrow {\\n    position: absolute;\\n    display: block;\\n    width: $tooltip-arrow-width;\\n    height: $tooltip-arrow-height;\\n\\n    &::before {\\n      position: absolute;\\n      content: \\"\\";\\n      border-color: transparent;\\n      border-style: solid;\\n    }\\n  }\\n}\\n\\n.bs-tooltip-top {\\n  padding: $tooltip-arrow-height 0;\\n\\n  .arrow {\\n    bottom: 0;\\n\\n    &::before {\\n      top: 0;\\n      border-width: $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\\n      border-top-color: $tooltip-arrow-color;\\n    }\\n  }\\n}\\n\\n.bs-tooltip-right {\\n  padding: 0 $tooltip-arrow-height;\\n\\n  .arrow {\\n    left: 0;\\n    width: $tooltip-arrow-height;\\n    height: $tooltip-arrow-width;\\n\\n    &::before {\\n      right: 0;\\n      border-width: ($tooltip-arrow-width / 2) $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\\n      border-right-color: $tooltip-arrow-color;\\n    }\\n  }\\n}\\n\\n.bs-tooltip-bottom {\\n  padding: $tooltip-arrow-height 0;\\n\\n  .arrow {\\n    top: 0;\\n\\n    &::before {\\n      bottom: 0;\\n      border-width: 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\\n      border-bottom-color: $tooltip-arrow-color;\\n    }\\n  }\\n}\\n\\n.bs-tooltip-left {\\n  padding: 0 $tooltip-arrow-height;\\n\\n  .arrow {\\n    right: 0;\\n    width: $tooltip-arrow-height;\\n    height: $tooltip-arrow-width;\\n\\n    &::before {\\n      left: 0;\\n      border-width: ($tooltip-arrow-width / 2) 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\\n      border-left-color: $tooltip-arrow-color;\\n    }\\n  }\\n}\\n\\n.bs-tooltip-auto {\\n  &[x-placement^=\\"top\\"] {\\n    @extend .bs-tooltip-top;\\n  }\\n  &[x-placement^=\\"right\\"] {\\n    @extend .bs-tooltip-right;\\n  }\\n  &[x-placement^=\\"bottom\\"] {\\n    @extend .bs-tooltip-bottom;\\n  }\\n  &[x-placement^=\\"left\\"] {\\n    @extend .bs-tooltip-left;\\n  }\\n}\\n\\n// Wrapper for the tooltip content\\n.tooltip-inner {\\n  max-width: $tooltip-max-width;\\n  padding: $tooltip-padding-y $tooltip-padding-x;\\n  color: $tooltip-color;\\n  text-align: center;\\n  background-color: $tooltip-bg;\\n  @include border-radius($tooltip-border-radius);\\n}\\n"},{"filePath":"popover.scss","scss":".popover {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: $zindex-popover;\\n  display: block;\\n  max-width: $popover-max-width;\\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\\n  // So reset our font and text properties to avoid inheriting weird values.\\n  @include reset-text();\\n  @include font-size($popover-font-size);\\n  // Allow breaking very long words so they don\'t overflow the popover\'s bounds\\n  word-wrap: break-word;\\n  background-color: $popover-bg;\\n  background-clip: padding-box;\\n  border: $popover-border-width solid $popover-border-color;\\n  @include border-radius($popover-border-radius);\\n  @include box-shadow($popover-box-shadow);\\n\\n  .arrow {\\n    position: absolute;\\n    display: block;\\n    width: $popover-arrow-width;\\n    height: $popover-arrow-height;\\n    margin: 0 $popover-border-radius;\\n\\n    &::before,\\n    &::after {\\n      position: absolute;\\n      display: block;\\n      content: \\"\\";\\n      border-color: transparent;\\n      border-style: solid;\\n    }\\n  }\\n}\\n\\n.bs-popover-top {\\n  margin-bottom: $popover-arrow-height;\\n\\n  > .arrow {\\n    bottom: subtract(-$popover-arrow-height, $popover-border-width);\\n\\n    &::before {\\n      bottom: 0;\\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\\n      border-top-color: $popover-arrow-outer-color;\\n    }\\n\\n    &::after {\\n      bottom: $popover-border-width;\\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\\n      border-top-color: $popover-arrow-color;\\n    }\\n  }\\n}\\n\\n.bs-popover-right {\\n  margin-left: $popover-arrow-height;\\n\\n  > .arrow {\\n    left: subtract(-$popover-arrow-height, $popover-border-width);\\n    width: $popover-arrow-height;\\n    height: $popover-arrow-width;\\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover\'s rounded corners\\n\\n    &::before {\\n      left: 0;\\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\\n      border-right-color: $popover-arrow-outer-color;\\n    }\\n\\n    &::after {\\n      left: $popover-border-width;\\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\\n      border-right-color: $popover-arrow-color;\\n    }\\n  }\\n}\\n\\n.bs-popover-bottom {\\n  margin-top: $popover-arrow-height;\\n\\n  > .arrow {\\n    top: subtract(-$popover-arrow-height, $popover-border-width);\\n\\n    &::before {\\n      top: 0;\\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\\n      border-bottom-color: $popover-arrow-outer-color;\\n    }\\n\\n    &::after {\\n      top: $popover-border-width;\\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\\n      border-bottom-color: $popover-arrow-color;\\n    }\\n  }\\n\\n  // This will remove the popover-header\'s border just below the arrow\\n  .popover-header::before {\\n    position: absolute;\\n    top: 0;\\n    left: 50%;\\n    display: block;\\n    width: $popover-arrow-width;\\n    margin-left: -$popover-arrow-width / 2;\\n    content: \\"\\";\\n    border-bottom: $popover-border-width solid $popover-header-bg;\\n  }\\n}\\n\\n.bs-popover-left {\\n  margin-right: $popover-arrow-height;\\n\\n  > .arrow {\\n    right: subtract(-$popover-arrow-height, $popover-border-width);\\n    width: $popover-arrow-height;\\n    height: $popover-arrow-width;\\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover\'s rounded corners\\n\\n    &::before {\\n      right: 0;\\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\\n      border-left-color: $popover-arrow-outer-color;\\n    }\\n\\n    &::after {\\n      right: $popover-border-width;\\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\\n      border-left-color: $popover-arrow-color;\\n    }\\n  }\\n}\\n\\n.bs-popover-auto {\\n  &[x-placement^=\\"top\\"] {\\n    @extend .bs-popover-top;\\n  }\\n  &[x-placement^=\\"right\\"] {\\n    @extend .bs-popover-right;\\n  }\\n  &[x-placement^=\\"bottom\\"] {\\n    @extend .bs-popover-bottom;\\n  }\\n  &[x-placement^=\\"left\\"] {\\n    @extend .bs-popover-left;\\n  }\\n}\\n\\n\\n// Offset the popover to account for the popover arrow\\n.popover-header {\\n  padding: $popover-header-padding-y $popover-header-padding-x;\\n  margin-bottom: 0; // Reset the default from Reboot\\n  @include font-size($font-size-base);\\n  color: $popover-header-color;\\n  background-color: $popover-header-bg;\\n  border-bottom: $popover-border-width solid darken($popover-header-bg, 5%);\\n  @include border-top-radius($popover-inner-border-radius);\\n\\n  &:empty {\\n    display: none;\\n  }\\n}\\n\\n.popover-body {\\n  padding: $popover-body-padding-y $popover-body-padding-x;\\n  color: $popover-body-color;\\n}\\n"},{"filePath":"carousel.scss","scss":"// Notes on the classes:\\n//\\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\\n//    we\'re preventing all actions instead\\n// 2. The .carousel-item-left and .carousel-item-right is used to indicate where\\n//    the active slide is heading.\\n// 3. .active.carousel-item is the current slide.\\n// 4. .active.carousel-item-left and .active.carousel-item-right is the current\\n//    slide in its in-transition state. Only one of these occurs at a time.\\n// 5. .carousel-item-next.carousel-item-left and .carousel-item-prev.carousel-item-right\\n//    is the upcoming slide in transition.\\n\\n.carousel {\\n  position: relative;\\n}\\n\\n.carousel.pointer-event {\\n  touch-action: pan-y;\\n}\\n\\n.carousel-inner {\\n  position: relative;\\n  width: 100%;\\n  overflow: hidden;\\n  @include clearfix();\\n}\\n\\n.carousel-item {\\n  position: relative;\\n  display: none;\\n  float: left;\\n  width: 100%;\\n  margin-right: -100%;\\n  backface-visibility: hidden;\\n  @include transition($carousel-transition);\\n}\\n\\n.carousel-item.active,\\n.carousel-item-next,\\n.carousel-item-prev {\\n  display: block;\\n}\\n\\n.carousel-item-next:not(.carousel-item-left),\\n.active.carousel-item-right {\\n  transform: translateX(100%);\\n}\\n\\n.carousel-item-prev:not(.carousel-item-right),\\n.active.carousel-item-left {\\n  transform: translateX(-100%);\\n}\\n\\n\\n//\\n// Alternate transitions\\n//\\n\\n.carousel-fade {\\n  .carousel-item {\\n    opacity: 0;\\n    transition-property: opacity;\\n    transform: none;\\n  }\\n\\n  .carousel-item.active,\\n  .carousel-item-next.carousel-item-left,\\n  .carousel-item-prev.carousel-item-right {\\n    z-index: 1;\\n    opacity: 1;\\n  }\\n\\n  .active.carousel-item-left,\\n  .active.carousel-item-right {\\n    z-index: 0;\\n    opacity: 0;\\n    @include transition(opacity 0s $carousel-transition-duration);\\n  }\\n}\\n\\n\\n//\\n// Left/right controls for nav\\n//\\n\\n.carousel-control-prev,\\n.carousel-control-next {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  z-index: 1;\\n  // Use flex for alignment (1-3)\\n  display: flex; // 1. allow flex styles\\n  align-items: center; // 2. vertically center contents\\n  justify-content: center; // 3. horizontally center contents\\n  width: $carousel-control-width;\\n  color: $carousel-control-color;\\n  text-align: center;\\n  opacity: $carousel-control-opacity;\\n  @include transition($carousel-control-transition);\\n\\n  // Hover/focus state\\n  @include hover-focus() {\\n    color: $carousel-control-color;\\n    text-decoration: none;\\n    outline: 0;\\n    opacity: $carousel-control-hover-opacity;\\n  }\\n}\\n.carousel-control-prev {\\n  left: 0;\\n  @if $enable-gradients {\\n    background-image: linear-gradient(90deg, rgba($black, .25), rgba($black, .001));\\n  }\\n}\\n.carousel-control-next {\\n  right: 0;\\n  @if $enable-gradients {\\n    background-image: linear-gradient(270deg, rgba($black, .25), rgba($black, .001));\\n  }\\n}\\n\\n// Icons for within\\n.carousel-control-prev-icon,\\n.carousel-control-next-icon {\\n  display: inline-block;\\n  width: $carousel-control-icon-width;\\n  height: $carousel-control-icon-width;\\n  background: no-repeat 50% / 100% 100%;\\n}\\n.carousel-control-prev-icon {\\n  background-image: escape-svg($carousel-control-prev-icon-bg);\\n}\\n.carousel-control-next-icon {\\n  background-image: escape-svg($carousel-control-next-icon-bg);\\n}\\n\\n\\n// Optional indicator pips\\n//\\n// Add an ordered list with the following class and add a list item for each\\n// slide your carousel holds.\\n\\n.carousel-indicators {\\n  position: absolute;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 15;\\n  display: flex;\\n  justify-content: center;\\n  padding-left: 0; // override <ol> default\\n  // Use the .carousel-control\'s width as margin so we don\'t overlay those\\n  margin-right: $carousel-control-width;\\n  margin-left: $carousel-control-width;\\n  list-style: none;\\n\\n  li {\\n    box-sizing: content-box;\\n    flex: 0 1 auto;\\n    width: $carousel-indicator-width;\\n    height: $carousel-indicator-height;\\n    margin-right: $carousel-indicator-spacer;\\n    margin-left: $carousel-indicator-spacer;\\n    text-indent: -999px;\\n    cursor: pointer;\\n    background-color: $carousel-indicator-active-bg;\\n    background-clip: padding-box;\\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\\n    border-top: $carousel-indicator-hit-area-height solid transparent;\\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\\n    opacity: .5;\\n    @include transition($carousel-indicator-transition);\\n  }\\n\\n  .active {\\n    opacity: 1;\\n  }\\n}\\n\\n\\n// Optional captions\\n//\\n//\\n\\n.carousel-caption {\\n  position: absolute;\\n  right: (100% - $carousel-caption-width) / 2;\\n  bottom: 20px;\\n  left: (100% - $carousel-caption-width) / 2;\\n  z-index: 10;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  color: $carousel-caption-color;\\n  text-align: center;\\n}\\n"},{"filePath":"spinners.scss","scss":"//\\n// Rotating border\\n//\\n\\n@keyframes spinner-border {\\n  to { transform: rotate(360deg); }\\n}\\n\\n.spinner-border {\\n  display: inline-block;\\n  width: $spinner-width;\\n  height: $spinner-height;\\n  vertical-align: text-bottom;\\n  border: $spinner-border-width solid currentColor;\\n  border-right-color: transparent;\\n  // stylelint-disable-next-line property-blacklist\\n  border-radius: 50%;\\n  animation: spinner-border .75s linear infinite;\\n}\\n\\n.spinner-border-sm {\\n  width: $spinner-width-sm;\\n  height: $spinner-height-sm;\\n  border-width: $spinner-border-width-sm;\\n}\\n\\n//\\n// Growing circle\\n//\\n\\n@keyframes spinner-grow {\\n  0% {\\n    transform: scale(0);\\n  }\\n  50% {\\n    opacity: 1;\\n  }\\n}\\n\\n.spinner-grow {\\n  display: inline-block;\\n  width: $spinner-width;\\n  height: $spinner-height;\\n  vertical-align: text-bottom;\\n  background-color: currentColor;\\n  // stylelint-disable-next-line property-blacklist\\n  border-radius: 50%;\\n  opacity: 0;\\n  animation: spinner-grow .75s linear infinite;\\n}\\n\\n.spinner-grow-sm {\\n  width: $spinner-width-sm;\\n  height: $spinner-height-sm;\\n}\\n"},{"filePath":"utilities.scss","scss":"@import \\"utilities/align\\";\\n@import \\"utilities/background\\";\\n@import \\"utilities/borders\\";\\n@import \\"utilities/clearfix\\";\\n@import \\"utilities/display\\";\\n@import \\"utilities/embed\\";\\n@import \\"utilities/flex\\";\\n@import \\"utilities/float\\";\\n@import \\"utilities/overflow\\";\\n@import \\"utilities/position\\";\\n@import \\"utilities/screenreaders\\";\\n@import \\"utilities/shadows\\";\\n@import \\"utilities/sizing\\";\\n@import \\"utilities/stretched-link\\";\\n@import \\"utilities/spacing\\";\\n@import \\"utilities/text\\";\\n@import \\"utilities/visibility\\";\\n"},{"filePath":"utilities/align.scss","scss":"// stylelint-disable declaration-no-important\\n\\n.align-baseline    { vertical-align: baseline !important; } // Browser default\\n.align-top         { vertical-align: top !important; }\\n.align-middle      { vertical-align: middle !important; }\\n.align-bottom      { vertical-align: bottom !important; }\\n.align-text-bottom { vertical-align: text-bottom !important; }\\n.align-text-top    { vertical-align: text-top !important; }\\n"},{"filePath":"utilities/background.scss","scss":"// stylelint-disable declaration-no-important\\n\\n@each $color, $value in $theme-colors {\\n  @include bg-variant(\\".bg-#{$color}\\", $value, true);\\n}\\n\\n@if $enable-gradients {\\n  @each $color, $value in $theme-colors {\\n    @include bg-gradient-variant(\\".bg-gradient-#{$color}\\", $value);\\n  }\\n}\\n\\n.bg-white {\\n  background-color: $white !important;\\n}\\n\\n.bg-transparent {\\n  background-color: transparent !important;\\n}\\n"},{"filePath":"utilities/borders.scss","scss":"// stylelint-disable property-blacklist, declaration-no-important\\n\\n//\\n// Border\\n//\\n\\n.border         { border: $border-width solid $border-color !important; }\\n.border-top     { border-top: $border-width solid $border-color !important; }\\n.border-right   { border-right: $border-width solid $border-color !important; }\\n.border-bottom  { border-bottom: $border-width solid $border-color !important; }\\n.border-left    { border-left: $border-width solid $border-color !important; }\\n\\n.border-0        { border: 0 !important; }\\n.border-top-0    { border-top: 0 !important; }\\n.border-right-0  { border-right: 0 !important; }\\n.border-bottom-0 { border-bottom: 0 !important; }\\n.border-left-0   { border-left: 0 !important; }\\n\\n@each $color, $value in $theme-colors {\\n  .border-#{$color} {\\n    border-color: $value !important;\\n  }\\n}\\n\\n.border-white {\\n  border-color: $white !important;\\n}\\n\\n//\\n// Border-radius\\n//\\n\\n.rounded-sm {\\n  border-radius: $border-radius-sm !important;\\n}\\n\\n.rounded {\\n  border-radius: $border-radius !important;\\n}\\n\\n.rounded-top {\\n  border-top-left-radius: $border-radius !important;\\n  border-top-right-radius: $border-radius !important;\\n}\\n\\n.rounded-right {\\n  border-top-right-radius: $border-radius !important;\\n  border-bottom-right-radius: $border-radius !important;\\n}\\n\\n.rounded-bottom {\\n  border-bottom-right-radius: $border-radius !important;\\n  border-bottom-left-radius: $border-radius !important;\\n}\\n\\n.rounded-left {\\n  border-top-left-radius: $border-radius !important;\\n  border-bottom-left-radius: $border-radius !important;\\n}\\n\\n.rounded-lg {\\n  border-radius: $border-radius-lg !important;\\n}\\n\\n.rounded-circle {\\n  border-radius: 50% !important;\\n}\\n\\n.rounded-pill {\\n  border-radius: $rounded-pill !important;\\n}\\n\\n.rounded-0 {\\n  border-radius: 0 !important;\\n}\\n"},{"filePath":"utilities/clearfix.scss","scss":".clearfix {\\n  @include clearfix();\\n}\\n"},{"filePath":"utilities/display.scss","scss":"// stylelint-disable declaration-no-important\\n\\n//\\n// Utilities for common `display` values\\n//\\n\\n@each $breakpoint in map-keys($grid-breakpoints) {\\n  @include media-breakpoint-up($breakpoint) {\\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\\n\\n    @each $value in $displays {\\n      .d#{$infix}-#{$value} { display: $value !important; }\\n    }\\n  }\\n}\\n\\n\\n//\\n// Utilities for toggling `display` in print\\n//\\n\\n@media print {\\n  @each $value in $displays {\\n    .d-print-#{$value} { display: $value !important; }\\n  }\\n}\\n"},{"filePath":"utilities/embed.scss","scss":"// Credit: Nicolas Gallagher and SUIT CSS.\\n\\n.embed-responsive {\\n  position: relative;\\n  display: block;\\n  width: 100%;\\n  padding: 0;\\n  overflow: hidden;\\n\\n  &::before {\\n    display: block;\\n    content: \\"\\";\\n  }\\n\\n  .embed-responsive-item,\\n  iframe,\\n  embed,\\n  object,\\n  video {\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    border: 0;\\n  }\\n}\\n\\n@each $embed-responsive-aspect-ratio in $embed-responsive-aspect-ratios {\\n  $embed-responsive-aspect-ratio-x: nth($embed-responsive-aspect-ratio, 1);\\n  $embed-responsive-aspect-ratio-y: nth($embed-responsive-aspect-ratio, 2);\\n\\n  .embed-responsive-#{$embed-responsive-aspect-ratio-x}by#{$embed-responsive-aspect-ratio-y} {\\n    &::before {\\n      padding-top: percentage($embed-responsive-aspect-ratio-y / $embed-responsive-aspect-ratio-x);\\n    }\\n  }\\n}\\n"},{"filePath":"utilities/flex.scss","scss":"// stylelint-disable declaration-no-important\\n\\n// Flex variation\\n//\\n// Custom styles for additional flex alignment options.\\n\\n@each $breakpoint in map-keys($grid-breakpoints) {\\n  @include media-breakpoint-up($breakpoint) {\\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\\n\\n    .flex#{$infix}-row            { flex-direction: row !important; }\\n    .flex#{$infix}-column         { flex-direction: column !important; }\\n    .flex#{$infix}-row-reverse    { flex-direction: row-reverse !important; }\\n    .flex#{$infix}-column-reverse { flex-direction: column-reverse !important; }\\n\\n    .flex#{$infix}-wrap         { flex-wrap: wrap !important; }\\n    .flex#{$infix}-nowrap       { flex-wrap: nowrap !important; }\\n    .flex#{$infix}-wrap-reverse { flex-wrap: wrap-reverse !important; }\\n    .flex#{$infix}-fill         { flex: 1 1 auto !important; }\\n    .flex#{$infix}-grow-0       { flex-grow: 0 !important; }\\n    .flex#{$infix}-grow-1       { flex-grow: 1 !important; }\\n    .flex#{$infix}-shrink-0     { flex-shrink: 0 !important; }\\n    .flex#{$infix}-shrink-1     { flex-shrink: 1 !important; }\\n\\n    .justify-content#{$infix}-start   { justify-content: flex-start !important; }\\n    .justify-content#{$infix}-end     { justify-content: flex-end !important; }\\n    .justify-content#{$infix}-center  { justify-content: center !important; }\\n    .justify-content#{$infix}-between { justify-content: space-between !important; }\\n    .justify-content#{$infix}-around  { justify-content: space-around !important; }\\n\\n    .align-items#{$infix}-start    { align-items: flex-start !important; }\\n    .align-items#{$infix}-end      { align-items: flex-end !important; }\\n    .align-items#{$infix}-center   { align-items: center !important; }\\n    .align-items#{$infix}-baseline { align-items: baseline !important; }\\n    .align-items#{$infix}-stretch  { align-items: stretch !important; }\\n\\n    .align-content#{$infix}-start   { align-content: flex-start !important; }\\n    .align-content#{$infix}-end     { align-content: flex-end !important; }\\n    .align-content#{$infix}-center  { align-content: center !important; }\\n    .align-content#{$infix}-between { align-content: space-between !important; }\\n    .align-content#{$infix}-around  { align-content: space-around !important; }\\n    .align-content#{$infix}-stretch { align-content: stretch !important; }\\n\\n    .align-self#{$infix}-auto     { align-self: auto !important; }\\n    .align-self#{$infix}-start    { align-self: flex-start !important; }\\n    .align-self#{$infix}-end      { align-self: flex-end !important; }\\n    .align-self#{$infix}-center   { align-self: center !important; }\\n    .align-self#{$infix}-baseline { align-self: baseline !important; }\\n    .align-self#{$infix}-stretch  { align-self: stretch !important; }\\n  }\\n}\\n"},{"filePath":"utilities/float.scss","scss":"// stylelint-disable declaration-no-important\\n\\n@each $breakpoint in map-keys($grid-breakpoints) {\\n  @include media-breakpoint-up($breakpoint) {\\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\\n\\n    .float#{$infix}-left  { float: left !important; }\\n    .float#{$infix}-right { float: right !important; }\\n    .float#{$infix}-none  { float: none !important; }\\n  }\\n}\\n"},{"filePath":"utilities/overflow.scss","scss":"// stylelint-disable declaration-no-important\\n\\n@each $value in $overflows {\\n  .overflow-#{$value} { overflow: $value !important; }\\n}\\n"},{"filePath":"utilities/position.scss","scss":"// stylelint-disable declaration-no-important\\n\\n// Common values\\n@each $position in $positions {\\n  .position-#{$position} { position: $position !important; }\\n}\\n\\n// Shorthand\\n\\n.fixed-top {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  z-index: $zindex-fixed;\\n}\\n\\n.fixed-bottom {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: $zindex-fixed;\\n}\\n\\n.sticky-top {\\n  @supports (position: sticky) {\\n    position: sticky;\\n    top: 0;\\n    z-index: $zindex-sticky;\\n  }\\n}\\n"},{"filePath":"utilities/screenreaders.scss","scss":"//\\n// Screenreaders\\n//\\n\\n.sr-only {\\n  @include sr-only();\\n}\\n\\n.sr-only-focusable {\\n  @include sr-only-focusable();\\n}\\n"},{"filePath":"utilities/shadows.scss","scss":"// stylelint-disable declaration-no-important\\n\\n.shadow-sm { box-shadow: $box-shadow-sm !important; }\\n.shadow { box-shadow: $box-shadow !important; }\\n.shadow-lg { box-shadow: $box-shadow-lg !important; }\\n.shadow-none { box-shadow: none !important; }\\n"},{"filePath":"utilities/sizing.scss","scss":"// stylelint-disable declaration-no-important\\n\\n// Width and height\\n\\n@each $prop, $abbrev in (width: w, height: h) {\\n  @each $size, $length in $sizes {\\n    .#{$abbrev}-#{$size} { #{$prop}: $length !important; }\\n  }\\n}\\n\\n.mw-100 { max-width: 100% !important; }\\n.mh-100 { max-height: 100% !important; }\\n\\n// Viewport additional helpers\\n\\n.min-vw-100 { min-width: 100vw !important; }\\n.min-vh-100 { min-height: 100vh !important; }\\n\\n.vw-100 { width: 100vw !important; }\\n.vh-100 { height: 100vh !important; }\\n"},{"filePath":"utilities/stretched-link.scss","scss":"//\\n// Stretched link\\n//\\n\\n.stretched-link {\\n  &::after {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    z-index: 1;\\n    // Just in case `pointer-events: none` is set on a parent\\n    pointer-events: auto;\\n    content: \\"\\";\\n    // IE10 bugfix, see https://stackoverflow.com/questions/16947967/ie10-hover-pseudo-class-doesnt-work-without-background-color\\n    background-color: rgba(0, 0, 0, 0);\\n  }\\n}\\n"},{"filePath":"utilities/spacing.scss","scss":"// stylelint-disable declaration-no-important\\n\\n// Margin and Padding\\n\\n@each $breakpoint in map-keys($grid-breakpoints) {\\n  @include media-breakpoint-up($breakpoint) {\\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\\n\\n    @each $prop, $abbrev in (margin: m, padding: p) {\\n      @each $size, $length in $spacers {\\n        .#{$abbrev}#{$infix}-#{$size} { #{$prop}: $length !important; }\\n        .#{$abbrev}t#{$infix}-#{$size},\\n        .#{$abbrev}y#{$infix}-#{$size} {\\n          #{$prop}-top: $length !important;\\n        }\\n        .#{$abbrev}r#{$infix}-#{$size},\\n        .#{$abbrev}x#{$infix}-#{$size} {\\n          #{$prop}-right: $length !important;\\n        }\\n        .#{$abbrev}b#{$infix}-#{$size},\\n        .#{$abbrev}y#{$infix}-#{$size} {\\n          #{$prop}-bottom: $length !important;\\n        }\\n        .#{$abbrev}l#{$infix}-#{$size},\\n        .#{$abbrev}x#{$infix}-#{$size} {\\n          #{$prop}-left: $length !important;\\n        }\\n      }\\n    }\\n\\n    // Negative margins (e.g., where `.mb-n1` is negative version of `.mb-1`)\\n    @each $size, $length in $spacers {\\n      @if $size != 0 {\\n        .m#{$infix}-n#{$size} { margin: -$length !important; }\\n        .mt#{$infix}-n#{$size},\\n        .my#{$infix}-n#{$size} {\\n          margin-top: -$length !important;\\n        }\\n        .mr#{$infix}-n#{$size},\\n        .mx#{$infix}-n#{$size} {\\n          margin-right: -$length !important;\\n        }\\n        .mb#{$infix}-n#{$size},\\n        .my#{$infix}-n#{$size} {\\n          margin-bottom: -$length !important;\\n        }\\n        .ml#{$infix}-n#{$size},\\n        .mx#{$infix}-n#{$size} {\\n          margin-left: -$length !important;\\n        }\\n      }\\n    }\\n\\n    // Some special margin utils\\n    .m#{$infix}-auto { margin: auto !important; }\\n    .mt#{$infix}-auto,\\n    .my#{$infix}-auto {\\n      margin-top: auto !important;\\n    }\\n    .mr#{$infix}-auto,\\n    .mx#{$infix}-auto {\\n      margin-right: auto !important;\\n    }\\n    .mb#{$infix}-auto,\\n    .my#{$infix}-auto {\\n      margin-bottom: auto !important;\\n    }\\n    .ml#{$infix}-auto,\\n    .mx#{$infix}-auto {\\n      margin-left: auto !important;\\n    }\\n  }\\n}\\n"},{"filePath":"utilities/text.scss","scss":"// stylelint-disable declaration-no-important\\n\\n//\\n// Text\\n//\\n\\n.text-monospace { font-family: $font-family-monospace !important; }\\n\\n// Alignment\\n\\n.text-justify  { text-align: justify !important; }\\n.text-wrap     { white-space: normal !important; }\\n.text-nowrap   { white-space: nowrap !important; }\\n.text-truncate { @include text-truncate(); }\\n\\n// Responsive alignment\\n\\n@each $breakpoint in map-keys($grid-breakpoints) {\\n  @include media-breakpoint-up($breakpoint) {\\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\\n\\n    .text#{$infix}-left   { text-align: left !important; }\\n    .text#{$infix}-right  { text-align: right !important; }\\n    .text#{$infix}-center { text-align: center !important; }\\n  }\\n}\\n\\n// Transformation\\n\\n.text-lowercase  { text-transform: lowercase !important; }\\n.text-uppercase  { text-transform: uppercase !important; }\\n.text-capitalize { text-transform: capitalize !important; }\\n\\n// Weight and italics\\n\\n.font-weight-light   { font-weight: $font-weight-light !important; }\\n.font-weight-lighter { font-weight: $font-weight-lighter !important; }\\n.font-weight-normal  { font-weight: $font-weight-normal !important; }\\n.font-weight-bold    { font-weight: $font-weight-bold !important; }\\n.font-weight-bolder  { font-weight: $font-weight-bolder !important; }\\n.font-italic         { font-style: italic !important; }\\n\\n// Contextual colors\\n\\n.text-white { color: $white !important; }\\n\\n@each $color, $value in $theme-colors {\\n  @include text-emphasis-variant(\\".text-#{$color}\\", $value, true);\\n}\\n\\n.text-body { color: $body-color !important; }\\n.text-muted { color: $text-muted !important; }\\n\\n.text-black-50 { color: rgba($black, .5) !important; }\\n.text-white-50 { color: rgba($white, .5) !important; }\\n\\n// Misc\\n\\n.text-hide {\\n  @include text-hide($ignore-warning: true);\\n}\\n\\n.text-decoration-none { text-decoration: none !important; }\\n\\n.text-break {\\n  word-break: break-word !important; // IE & < Edge 18\\n  overflow-wrap: break-word !important;\\n}\\n\\n// Reset\\n\\n.text-reset { color: inherit !important; }\\n"},{"filePath":"utilities/visibility.scss","scss":"// stylelint-disable declaration-no-important\\n\\n//\\n// Visibility utilities\\n//\\n\\n.visible {\\n  visibility: visible !important;\\n}\\n\\n.invisible {\\n  visibility: hidden !important;\\n}\\n"},{"filePath":"print.scss","scss":"// stylelint-disable declaration-no-important, selector-no-qualifying-type\\n\\n// Source: https://github.com/h5bp/main.css/blob/master/src/_print.css\\n\\n// ==========================================================================\\n// Print styles.\\n// Inlined to avoid the additional HTTP request:\\n// https://www.phpied.com/delay-loading-your-print-css/\\n// ==========================================================================\\n\\n@if $enable-print-styles {\\n  @media print {\\n    *,\\n    *::before,\\n    *::after {\\n      // Bootstrap specific; comment out `color` and `background`\\n      //color: $black !important; // Black prints faster\\n      text-shadow: none !important;\\n      //background: transparent !important;\\n      box-shadow: none !important;\\n    }\\n\\n    a {\\n      &:not(.btn) {\\n        text-decoration: underline;\\n      }\\n    }\\n\\n    // Bootstrap specific; comment the following selector out\\n    //a[href]::after {\\n    //  content: \\" (\\" attr(href) \\")\\";\\n    //}\\n\\n    abbr[title]::after {\\n      content: \\" (\\" attr(title) \\")\\";\\n    }\\n\\n    // Bootstrap specific; comment the following selector out\\n    //\\n    // Don\'t show links that are fragment identifiers,\\n    // or use the `javascript:` pseudo protocol\\n    //\\n\\n    //a[href^=\\"#\\"]::after,\\n    //a[href^=\\"javascript:\\"]::after {\\n    // content: \\"\\";\\n    //}\\n\\n    pre {\\n      white-space: pre-wrap !important;\\n    }\\n    pre,\\n    blockquote {\\n      border: $border-width solid $gray-500; // Bootstrap custom code; using `$border-width` instead of 1px\\n      page-break-inside: avoid;\\n    }\\n\\n    //\\n    // Printing Tables:\\n    // https://web.archive.org/web/20180815150934/http://css-discuss.incutio.com/wiki/Printing_Tables\\n    //\\n\\n    thead {\\n      display: table-header-group;\\n    }\\n\\n    tr,\\n    img {\\n      page-break-inside: avoid;\\n    }\\n\\n    p,\\n    h2,\\n    h3 {\\n      orphans: 3;\\n      widows: 3;\\n    }\\n\\n    h2,\\n    h3 {\\n      page-break-after: avoid;\\n    }\\n\\n    // Bootstrap specific changes start\\n\\n    // Specify a size and min-width to make printing closer across browsers.\\n    // We don\'t set margin here because it breaks `size` in Chrome. We also\\n    // don\'t use `!important` on `size` as it breaks in Chrome.\\n    @page {\\n      size: $print-page-size;\\n    }\\n    body {\\n      min-width: $print-body-min-width !important;\\n    }\\n    .container {\\n      min-width: $print-body-min-width !important;\\n    }\\n\\n    // Bootstrap components\\n    .navbar {\\n      display: none;\\n    }\\n    .badge {\\n      border: $border-width solid $black;\\n    }\\n\\n    .table {\\n      border-collapse: collapse !important;\\n\\n      td,\\n      th {\\n        background-color: $white !important;\\n      }\\n    }\\n\\n    .table-bordered {\\n      th,\\n      td {\\n        border: 1px solid $gray-300 !important;\\n      }\\n    }\\n\\n    .table-dark {\\n      color: inherit;\\n\\n      th,\\n      td,\\n      thead th,\\n      tbody + tbody {\\n        border-color: $table-border-color;\\n      }\\n    }\\n\\n    .table .thead-dark th {\\n      color: inherit;\\n      border-color: $table-border-color;\\n    }\\n\\n    // Bootstrap specific changes end\\n  }\\n}\\n"},{"filePath":"sb-ui-kit-pro/global.scss","scss":"// Global styling for this template\\n\\nhtml,\\nbody {\\n    height: 100%;\\n}\\n\\nbody {\\n    overflow-x: hidden;\\n}\\n\\n// Set spacing on containers for page symmetry\\n\\n.container,\\n.container-fluid {\\n    padding-left: $grid-gutter-width;\\n    padding-right: $grid-gutter-width;\\n}\\n\\n// Bring in fonts\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-Thin.otf\');\\n    font-weight: 100;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-ThinItalic.otf\');\\n    font-weight: 100;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-ExtraLight.otf\');\\n    font-weight: 200;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-ExtraLightItalic.otf\');\\n    font-weight: 200;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-Light.otf\');\\n    font-weight: 300;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-LightItalic.otf\');\\n    font-weight: 300;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-Regular.otf\');\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-RegularItalic.otf\');\\n    font-weight: 400;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-Medium.otf\');\\n    font-weight: 500;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-MediumItalic.otf\');\\n    font-weight: 500;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-SemiBold.otf\');\\n    font-weight: 600;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-SemiBoldItalic.otf\');\\n    font-weight: 600;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-Bold.otf\');\\n    font-weight: 700;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-BoldItalic.otf\');\\n    font-weight: 700;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-ExtraBold.otf\');\\n    font-weight: 800;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-ExtraBoldItalic.otf\');\\n    font-weight: 800;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-Black.otf\');\\n    font-weight: 800;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \'Metropolis\';\\n    src: url(\'/assets/fonts/metropolis/Metropolis-BlackItalic.otf\');\\n    font-weight: 800;\\n    font-style: italic;\\n}"},{"filePath":"sb-ui-kit-pro/layout/default.scss","scss":"#layoutDefault {\\n    display: flex;\\n    flex-direction: column;\\n    min-height: 100vh;\\n    #layoutDefault_content {\\n        min-width: 0;\\n        flex-grow: 1;\\n    }\\n    #layoutDefault_footer {\\n        min-width: 0;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/utilities/animation.scss","scss":"// Animation utilities\\n\\n// Fade in/up animation\\n\\n@keyframes fadeInUp {\\n    0% {\\n        opacity: 0;\\n        margin-top: 0.75rem;\\n    }\\n    100% {\\n        opacity: 1;\\n        margin-top: 0;\\n    }\\n}\\n\\n.animated--fade-in-up {\\n    animation-name: fadeInUp;\\n    animation-duration: 200ms;\\n    animation-timing-function: margin cubic-bezier(0.18, 1.25, 0.4, 1),\\n    opacity cubic-bezier(0, 1, 0.4, 1);\\n    &.dropdown-menu {\\n        margin-top: 0 !important;\\n        top: 0.125rem !important;\\n    }\\n}\\n\\n// Fade in animation\\n\\n@keyframes fadeIn {\\n    0% {\\n        opacity: 0;\\n    }\\n    100% {\\n        opacity: 1;\\n    }\\n}\\n\\n.animated--fade-in {\\n    animation-name: fadeIn;\\n    animation-duration: 200ms;\\n    animation-timing-function: opacity cubic-bezier(0, 1, 0.4, 1);\\n}\\n"},{"filePath":"sb-ui-kit-pro/utilities/background.scss","scss":"// Background color utilities\\n\\n// Adds a background gradient with a $primary color fallback\\n.bg-gradient-primary-to-secondary {\\n    background-color: $primary;\\n    background-image: linear-gradient(135deg, $primary 0%, fade-out($secondary, 0.2) 100%);\\n}\\n\\n// Grayscale background utilities\\n.bg-gray-100 {\\n    background-color: $gray-100 !important;\\n}\\n\\n.bg-gray-200 {\\n    background-color: $gray-200 !important;\\n}\\n\\n.bg-gray-300 {\\n    background-color: $gray-300 !important;\\n}\\n\\n.bg-gray-400 {\\n    background-color: $gray-400 !important;\\n}\\n\\n.bg-gray-500 {\\n    background-color: $gray-500 !important;\\n}\\n\\n.bg-gray-600 {\\n    background-color: $gray-600 !important;\\n}\\n\\n.bg-gray-700 {\\n    background-color: $gray-700 !important;\\n}\\n\\n.bg-gray-800 {\\n    background-color: $gray-800 !important;\\n}\\n\\n.bg-gray-900 {\\n    background-color: $gray-900 !important;\\n}\\n\\n// Page header style when using a background image\\n.bg-img-cover {\\n    background-position: center;\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n}\\n\\n// Page header style when using a background texture\\n.bg-img-repeat {\\n    background-position: top left;\\n    background-repeat: repeat;\\n}\\n\\n.overlay {\\n    position: relative;\\n    &:before {\\n        content: \'\';\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        right: 0;\\n        bottom: 0;\\n        // Fallbacks\\n        background-color: $black;\\n        opacity: 0.5;\\n    }\\n}\\n\\n@each $color, $value in $theme-colors {\\n    .overlay-#{$color}:before {\\n        background-color: $value !important;\\n    }\\n}\\n\\n.overlay-10 {\\n    &:before {\\n        opacity: 0.1;\\n    }\\n}\\n\\n.overlay-20 {\\n    &:before {\\n        opacity: 0.2;\\n    }\\n}\\n\\n.overlay-30 {\\n    &:before {\\n        opacity: 0.3;\\n    }\\n}\\n\\n.overlay-40 {\\n    &:before {\\n        opacity: 0.4;\\n    }\\n}\\n\\n.overlay-50 {\\n    &:before {\\n        opacity: 0.5;\\n    }\\n}\\n\\n.overlay-60 {\\n    &:before {\\n        opacity: 0.6;\\n    }\\n}\\n\\n.overlay-70 {\\n    &:before {\\n        opacity: 0.7;\\n    }\\n}\\n\\n.overlay-80 {\\n    &:before {\\n        opacity: 0.8;\\n    }\\n}\\n\\n.overlay-90 {\\n    &:before {\\n        opacity: 0.9;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/utilities/border.scss","scss":"// Border Large - Custom utility\\n\\n.border-lg {\\n    border-width: $border-width-lg !important;\\n}\\n.border-top-lg {\\n    border-top-width: $border-width-lg !important;\\n}\\n.border-right-lg {\\n    border-right-width: $border-width-lg !important;\\n}\\n.border-bottom-lg {\\n    border-bottom-width: $border-width-lg !important;\\n}\\n.border-left-lg {\\n    border-left-width: $border-width-lg !important;\\n}\\n\\n// Rebuild border after adding large borders\\n@each $color, $value in $theme-colors {\\n    .border-#{$color} {\\n        border-color: $value !important;\\n    }\\n}\\n\\n// Border Radius\\n.rounded-xl {\\n    border-radius: $border-radius-xl !important;\\n}\\n\\n// Grayscale Border Colors\\n\\n.border-gray-100 {\\n    border-color: $gray-100 !important;\\n}\\n\\n.border-gray-200 {\\n    border-color: $gray-200 !important;\\n}\\n\\n.border-gray-300 {\\n    border-color: $gray-300 !important;\\n}\\n\\n.border-gray-400 {\\n    border-color: $gray-400 !important;\\n}\\n\\n.border-gray-500 {\\n    border-color: $gray-500 !important;\\n}\\n\\n.border-gray-600 {\\n    border-color: $gray-600 !important;\\n}\\n\\n.border-gray-700 {\\n    border-color: $gray-700 !important;\\n}\\n\\n.border-gray-800 {\\n    border-color: $gray-800 !important;\\n}\\n\\n.border-gray-900 {\\n    border-color: $gray-900 !important;\\n}"},{"filePath":"sb-ui-kit-pro/utilities/dropdown.scss","scss":"// Utility class which removes the arrow when using a Bootstrap dropdown\\n// Append the .no-caret utility class to any .dropdown to remove the caret\\n.no-caret {\\n    .dropdown-toggle::after {\\n        display: none;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/utilities/general.scss","scss":"// Removes highlighting when an element with this class is clicked\\n.no-highlight {\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    -khtml-user-select: none;\\n    -ms-user-select: none;\\n}\\n"},{"filePath":"sb-ui-kit-pro/utilities/text.scss","scss":"// Text utilities\\n\\n//-- Grayscale text color utilities\\n.text-gray-100 {\\n    color: $gray-100 !important;\\n}\\n.text-gray-200 {\\n    color: $gray-200 !important;\\n}\\n.text-gray-300 {\\n    color: $gray-300 !important;\\n}\\n.text-gray-400 {\\n    color: $gray-400 !important;\\n}\\n.text-gray-500 {\\n    color: $gray-500 !important;\\n}\\n.text-gray-600 {\\n    color: $gray-600 !important;\\n}\\n.text-gray-700 {\\n    color: $gray-700 !important;\\n}\\n.text-gray-800 {\\n    color: $gray-800 !important;\\n}\\n.text-gray-900 {\\n    color: $gray-900 !important;\\n}\\n\\n//-- Font weight utilities\\n.font-weight-100 {\\n    font-weight: 100 !important;\\n}\\n\\n.font-weight-200 {\\n    font-weight: 200 !important;\\n}\\n\\n.font-weight-300 {\\n    font-weight: 300 !important;\\n}\\n\\n.font-weight-400 {\\n    font-weight: 400 !important;\\n}\\n\\n.font-weight-500 {\\n    font-weight: 500 !important;\\n}\\n\\n.font-weight-600 {\\n    font-weight: 600 !important;\\n}\\n\\n.font-weight-700 {\\n    font-weight: 700 !important;\\n}\\n\\n.font-weight-800 {\\n    font-weight: 800 !important;\\n}\\n\\n.font-weight-900 {\\n    font-weight: 900 !important;\\n}\\n\\n// Text Color Utilities\\n\\n.text-white-75 {\\n    color: fade-out($white, 0.25);\\n}\\n\\n.text-xs {\\n    font-size: 0.75rem !important;\\n}\\n\\n.text-uppercase-expanded {\\n    font-weight: 700;\\n    letter-spacing: 0.15em;\\n    text-transform: uppercase;\\n}\\n\\n.text-arrow-icon {\\n    line-height: 1;\\n    display: inline-flex;\\n    align-items: center;\\n    svg {\\n        margin-left: 0.25rem;\\n    }\\n    &.small {\\n        svg {\\n            height: $font-size-sm;\\n            width: $font-size-sm;\\n        }\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/utilities/shadow.scss","scss":".shadow-right-sm {\\n    box-shadow: $box-shadow-right-sm;\\n}\\n\\n.shadow-right {\\n    box-shadow: $box-shadow-right;\\n}\\n\\n.shadow-right-lg {\\n    box-shadow: $box-shadow-right-lg;\\n}\\n\\n.shadow-left-sm {\\n    box-shadow: $box-shadow-left-sm;\\n}\\n\\n.shadow-left {\\n    box-shadow: $box-shadow-left;\\n}\\n\\n.shadow-left-lg {\\n    box-shadow: $box-shadow-left-lg;\\n}\\n"},{"filePath":"sb-ui-kit-pro/utilities/transform.scss","scss":".translate-y-n10 {\\n    transform: translateY(-$spacer * 6);\\n    margin-bottom: -$spacer * 6;\\n}\\n\\n.translate-y-n5 {\\n    transform: translateY(-$spacer * 3);\\n    margin-bottom: -$spacer * 3;\\n}"},{"filePath":"sb-ui-kit-pro/utilities/zindex.scss","scss":".z-1 {\\n    z-index: 1 !important;\\n    position: relative !important;\\n}\\n\\n.z-2 {\\n    z-index: 2 !important;\\n    position: relative !important;\\n}\\n\\n.o-visible {\\n    overflow: visible  !important;\\n}\\n\\n.o-hidden {\\n    overflow: hidden  !important;\\n}"},{"filePath":"sb-ui-kit-pro/utilities/images.scss","scss":".content-skewed {\\n    perspective: 1500px;\\n    transform-style: preserve-3d;\\n}\\n\\n.content-skewed-right {\\n    perspective-origin: right center;\\n    .content-skewed-item {\\n        transform: rotateY(30deg) rotateX(15deg);\\n        backface-visibility: hidden;\\n    }\\n}\\n\\n.content-skewed-left {\\n    perspective-origin: left center;\\n    .content-skewed-item {\\n        transform: rotateY(-30deg) rotateX(15deg);\\n        backface-visibility: hidden;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/utilities/lift.scss","scss":".lift {\\n    box-shadow: $box-shadow;\\n    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n    &:hover {\\n        transform: translateY(-$spacer / 3);\\n        box-shadow: $box-shadow-lift;\\n    }\\n    &:active {\\n        transform: none;\\n        box-shadow: $box-shadow;\\n    }\\n}\\n\\n.lift-sm {\\n    box-shadow: $box-shadow-sm;\\n    &:hover {\\n        transform: translateY(-$spacer / 6);\\n        box-shadow: $box-shadow-lift-sm;\\n    }\\n    &:active {\\n        transform: none;\\n        box-shadow: $box-shadow-sm;\\n    }\\n}\\n\\n.card.lift {\\n    text-decoration: none;\\n    color: inherit;\\n}"},{"filePath":"sb-ui-kit-pro/components/alerts/icon.scss","scss":".alert-icon {\\n    position: relative;\\n    display: flex;\\n    padding: 0;\\n    // Reposition the dismiss button\\n    button.close {\\n        position: absolute;\\n        top: $alert-padding-y;\\n        right: $alert-padding-x;\\n    }\\n    .alert-icon-aside {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        padding-top: $alert-padding-y;\\n        padding-bottom: $alert-padding-y;\\n        padding-left: $alert-padding-x;\\n        font-size: 1.5rem;\\n        svg.feather,\\n        svg,\\n        i {\\n            height: 1.5rem;\\n            width: 1.5rem;\\n        }\\n    }\\n    .alert-icon-content {\\n        padding-top: $alert-padding-y;\\n        padding-bottom: $alert-padding-y;\\n        padding-left: $alert-padding-x;\\n        padding-right: $alert-padding-x;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/alerts/solid.scss","scss":"@each $color, $value in $theme-colors {\\n    .alert-#{$color}.alert-solid {\\n        @include alert-variant($value, $value, color-yiq($value));\\n        .close {\\n            color: color-yiq($value);\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/avatars.scss","scss":".avatar {\\n    display: inline-flex;\\n    height: 2rem;\\n    width: 2rem;\\n    border-radius: 50%;\\n    position: relative;\\n    align-items: center;\\n    justify-content: center;\\n    .avatar-img {\\n        border-radius: 100%;\\n        object-fit: cover;\\n        height: 2rem;\\n        width: auto;\\n    }\\n}\\n\\n.avatar-xs {\\n    height: 1.25rem;\\n    width: 1.25rem;\\n    .avatar-img {\\n        height: 1rem;\\n    }\\n}\\n\\n.avatar-sm {\\n    height: 1.75rem;\\n    width: 1.75rem;\\n    .avatar-img {\\n        height: 1.5rem;\\n    }\\n}\\n\\n.avatar-lg {\\n    height: 2.5rem;\\n    width: 2.5rem;\\n    .avatar-img {\\n        height: 2.5rem;\\n    }\\n}\\n\\n.avatar-xl {\\n    height: 3rem;\\n    width: 3rem;\\n    .avatar-img {\\n        height: 3rem;\\n    }\\n}\\n\\n.avatar-xxl {\\n    height: 3.75rem;\\n    width: 3.75rem;\\n    .avatar-img {\\n        height: 3.75rem;\\n    }\\n}\\n\\n.avatar-busy,\\n.avatar-idle,\\n.avatar-offline,\\n.avatar-online {\\n    &::before {\\n        content: \'\';\\n        position: absolute;\\n        bottom: 5%;\\n        right: 5%;\\n        width: 20%;\\n        height: 20%;\\n        border-radius: 50%;\\n        background-color: $gray-300;\\n        border: 0.0625rem solid $white;\\n    }\\n}\\n\\n.avatar-busy {\\n    &::before {\\n        background-color: $red;\\n    }\\n}\\n.avatar-idle {\\n    &::before {\\n        background-color: $yellow;\\n    }\\n}\\n.avatar-offline {\\n    &::before {\\n        background-color: $gray-300;\\n    }\\n}\\n.avatar-online {\\n    &::before {\\n        background-color: $green;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/buttons/global.scss","scss":""},{"filePath":"sb-ui-kit-pro/components/buttons/social.scss","scss":"// Use Bootstrap button variant mixin to create branded button styles\\n//\\n// Utilizes the brand colors declared in variables/colors.scss\\n\\n.btn-facebook {\\n    @include button-variant($facebook, $facebook);\\n}\\n.btn-github {\\n    @include button-variant($github, $github);\\n}\\n.btn-google {\\n    @include button-variant($google, $google);\\n}\\n.btn-twitter {\\n    @include button-variant($twitter, $twitter);\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/buttons/transparent.scss","scss":"// Use Bootstrap button variant mixin to create .btn-transparent-dark button style\\n\\n.btn-transparent-dark {\\n    @include button-variant(\\n        transparent,\\n        transparent,\\n        fade-out($gray-900, 0.9),\\n        transparent,\\n        fade-out($gray-900, 0.875),\\n        transparent\\n    );\\n    color: fade-out($gray-900, 0.5) !important;\\n    &:focus {\\n        box-shadow: 0 0 0 $btn-focus-width fade-out($gray-900, 0.75) !important;\\n    }\\n}\\n\\n// Use Bootstrap button variant mixin to create .btn-transparent-light button style\\n\\n.btn-transparent-light {\\n    @include button-variant(\\n        transparent,\\n        transparent,\\n        fade-out($white, 0.9),\\n        transparent,\\n        fade-out($white, 0.875),\\n        transparent\\n    );\\n    color: fade-out($white, 0.5) !important;\\n    &:focus {\\n        box-shadow: 0 0 0 $btn-focus-width fade-out($white, 0.75) !important;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/buttons/icon.scss","scss":"// Custom icon buttons\\n//\\n// Creates the .btn-icon variant - you can append the\\n// .btn-icon class to any .btn component and add an icon\\n// the inner content of the element you are using - works\\n// with both feather icons and font awesome icons\\n\\n.btn-icon {\\n    padding: 0;\\n\\n    display: inline-flex;\\n    align-items: center;\\n\\n    justify-content: center;\\n    overflow: hidden;\\n\\n    border-radius: 100%;\\n\\n    flex-shrink: 0;\\n\\n    height: calc(\\n        (#{$btn-font-size} * #{$btn-line-height}) + (#{$btn-padding-y} * 2) +\\n            (#{$btn-border-width * 2})\\n    ) !important;\\n    width: calc(\\n        (#{$btn-font-size} * #{$btn-line-height}) + (#{$btn-padding-y} * 2) +\\n            (#{$btn-border-width * 2})\\n    ) !important;\\n\\n    &.btn-xl {\\n        height: calc(\\n            (#{$btn-font-size-xl} * #{$btn-line-height}) + (#{$btn-padding-y-xl} * 2) +\\n                (#{$btn-border-width * 2})\\n        ) !important;\\n        width: calc(\\n            (#{$btn-font-size-xl} * #{$btn-line-height}) + (#{$btn-padding-y-xl} * 2) +\\n                (#{$btn-border-width * 2})\\n        ) !important;\\n        border-radius: 100%;\\n    }\\n\\n    &.btn-lg {\\n        height: calc(\\n            (#{$btn-font-size-lg} * #{$btn-line-height}) + (#{$btn-padding-y-lg} * 2) +\\n                (#{$btn-border-width * 2})\\n        ) !important;\\n        width: calc(\\n            (#{$btn-font-size-lg} * #{$btn-line-height}) + (#{$btn-padding-y-lg} * 2) +\\n                (#{$btn-border-width * 2})\\n        ) !important;\\n    }\\n\\n    &.btn-sm {\\n        height: calc(\\n            (#{$btn-font-size-sm} * #{$btn-line-height}) + (#{$btn-padding-y-sm} * 2) +\\n                (#{$btn-border-width * 2})\\n        ) !important;\\n        width: calc(\\n            (#{$btn-font-size-sm} * #{$btn-line-height}) + (#{$btn-padding-y-sm} * 2) +\\n                (#{$btn-border-width * 2})\\n        ) !important;\\n    }\\n\\n    &.btn-xs {\\n        height: calc(\\n            (#{$btn-font-size-xs} * #{$btn-line-height}) + (#{$btn-padding-y-xs} * 2) +\\n                (#{$btn-border-width * 2})\\n        ) !important;\\n        width: calc(\\n            (#{$btn-font-size-xs} * #{$btn-line-height}) + (#{$btn-padding-y-xs} * 2) +\\n                (#{$btn-border-width * 2})\\n        ) !important;\\n        border-radius: 100%;\\n    }\\n\\n    &.btn-link {\\n        text-decoration: none;\\n    }\\n\\n    // Centers Font Awesome Icons\\n    .ng-fa-icon {\\n        display: inline-flex;\\n    }\\n}\\n\\n// Adjust feather icons for usage within .btn component\\n.btn {\\n    i-feather,\\n    .feather {\\n        height: $btn-font-size;\\n        width: $btn-font-size;\\n    }\\n}\\n.btn-lg {\\n    i-feather,\\n    .feather {\\n        height: $btn-font-size-lg;\\n        width: $btn-font-size-lg;\\n    }\\n}\\n.btn-sm {\\n    i-feather,\\n    .feather {\\n        height: $btn-font-size-sm;\\n        width: $btn-font-size-sm;\\n    }\\n}\\n.btn-xs {\\n    i-feather,\\n    .feather {\\n        height: $btn-font-size-xs;\\n        width: $btn-font-size-xs;\\n    }\\n}\\n.btn-xl {\\n    i-feather,\\n    .feather {\\n        height: $btn-font-size-xl;\\n        width: $btn-font-size-xl;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/buttons/sizing.scss","scss":".btn-xs {\\n    padding: $btn-padding-y-xs $btn-padding-x-xs;\\n    font-size: $btn-font-size-xs;\\n    border-radius: $btn-border-radius-xs;\\n}\\n\\n.btn-xl {\\n    padding: $btn-padding-y-xl $btn-padding-x-xl;\\n    font-size: $btn-font-size-xl;\\n    border-radius: $btn-border-radius-xl;\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/buttons/marketing.scss","scss":".btn-marketing {\\n    font-size: $btn-font-size-marketing;\\n    padding: $btn-padding-y-marketing $btn-padding-x-marketing;\\n    @extend .text-uppercase-expanded;\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/cards/global.scss","scss":"// Override and add to Bootstrap card style defaults\\n\\n.card {\\n    box-shadow: $box-shadow;\\n    overflow: hidden;\\n    position: relative;\\n    .card-header {\\n        display: flex;\\n        align-items: center;\\n        font-weight: 600;\\n        border-bottom: none;\\n    }\\n    // Sets the color of the card header to primary unless a background utility class is being used\\n    &:not([class*=\'bg-\']) {\\n        .card-header {\\n            color: $primary;\\n        }\\n    }\\n}\\n\\n// Custom tabbed card option\\n\\n.card-tabbed {\\n    .card-header {\\n        padding-top: 0;\\n        padding-bottom: 0;\\n        justify-content: space-between;\\n    }\\n    .nav-item {\\n        margin-right: 1rem;\\n        &:last-child {\\n            margin-right: 0;\\n        }\\n        .nav-link {\\n            padding: calc(1rem - 0.0625rem) 0;\\n            color: $gray-500;\\n            &.active {\\n                color: $primary;\\n                border-bottom: 0.125rem solid $primary;\\n            }\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/cards/advanced.scss","scss":"// Card header with icons\\n\\n.card-header-actions {\\n    .card-header {\\n        height: 3.5rem;\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n        padding-top: 0.5625rem;\\n        padding-bottom: 0.5625rem;\\n        .dropdown-menu {\\n            margin-top: 0;\\n            top: 0.5625rem !important;\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/cards/collapsable.scss","scss":"// Collapsable Card Styling\\n.card-collapsable {\\n    .card-header[data-toggle=\'collapse\'] {\\n        display: flex;\\n        text-decoration: none;\\n        position: relative;\\n        align-items: center;\\n        justify-content: space-between;\\n        .card-collapsable-arrow {\\n            height: 0.9rem;\\n            width: 0.9rem;\\n            display: inline-flex;\\n            font-size: 0.9rem;\\n            transition: transform 0.1s ease-in-out;\\n            svg,\\n            i,\\n            .feather {\\n                height: 0.9rem;\\n                width: 0.9rem;\\n            }\\n        }\\n        &.collapsed {\\n            border-radius: $card-border-radius;\\n            .card-collapsable-arrow {\\n                transform: rotate(-90deg);\\n            }\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/cards/icon.scss","scss":".card-icon {\\n    .card-icon-aside {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        font-size: 3rem;\\n        padding: 2rem;\\n        i,\\n        svg,\\n        .feather {\\n            height: 3rem;\\n            width: 3rem;\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/cards/scrollable.scss","scss":".card-scrollable {\\n    .card-body {\\n        max-height: $card-scrollable-max-height;\\n        overflow-y: auto;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/cards/progress.scss","scss":".card-progress {\\n    .progress {\\n        height: 0.5rem;\\n        background-color: $card-cap-bg;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/cards/link.scss","scss":".card-link {\\n    text-decoration: none !important;\\n    color: inherit !important;\\n    &:hover {\\n        color: inherit !important;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/cards/portfolio.scss","scss":".card-portfolio {\\n    position: relative;\\n    .card-body {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        position: absolute;\\n        bottom: 0;\\n        height: 3.5rem;\\n        width: 100%;\\n        background-color: $white;\\n        text-align: center;\\n        .card-title {\\n            font-size: 0.75rem;\\n            margin: 0;\\n            text-transform: uppercase;\\n            font-weight: 800;\\n            letter-spacing: 0.1em;\\n            color: $gray-800;\\n        }\\n    }\\n    @include media-breakpoint-up(lg) {\\n        .card-body {\\n            height: 100%;\\n            bottom: -100%;\\n            transition: bottom 0.15s ease-in-out;\\n        }\\n        .card-img-top {\\n            transition: transform 0.45s ease-in-out;\\n        }\\n        &:hover {\\n            .card-body {\\n                bottom: 0;\\n                background-color: fade-out($white, 0.1);\\n            }\\n            .card-img-top {\\n                transform: scale(1.2);\\n            }\\n        }\\n    }\\n}\\n\\n.card-columns-portfolio {\\n    .card {\\n        box-shadow: none;\\n    }\\n    @include media-breakpoint-only(sm) {\\n        column-count: 1;\\n    }\\n    @include media-breakpoint-only(md) {\\n        column-count: 2;\\n    }\\n    @include media-breakpoint-only(lg) {\\n        column-count: 2;\\n    }\\n    @include media-breakpoint-only(xl) {\\n        column-count: 3;\\n    }\\n}\\n\\n.card-columns-case-study {\\n    .card {\\n        box-shadow: none;\\n    }\\n    @include media-breakpoint-only(sm) {\\n        column-count: 1;\\n    }\\n    @include media-breakpoint-only(md) {\\n        column-count: 2;\\n    }\\n    @include media-breakpoint-only(lg) {\\n        column-count: 2;\\n    }\\n    @include media-breakpoint-only(xl) {\\n        column-count: 2;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/cards/flags.scss","scss":".card-flag  {\\n    position: absolute;\\n    font-size: 0.7rem;\\n    padding: 0.3rem 0.5rem;\\n    line-height: 1;\\n}\\n\\n.card-flag-dark {\\n    background-color: fade-out($gray-900, 0.3);\\n    color: $white;\\n}\\n\\n.card-flag-light {\\n    background-color: fade-out($white, 0.3);\\n    color: $gray-600;\\n}\\n\\n.card-flag-lg {\\n    font-size: 0.9rem;\\n    padding: 0.5rem 0.65rem;\\n}\\n\\n.card-flag-top-right {\\n    border-top-left-radius: $border-radius-sm;\\n    border-bottom-left-radius: $border-radius-sm;\\n    top: 0.5rem;\\n    right: 0;\\n}\\n\\n.card-flag-top-left {\\n    border-top-right-radius: $border-radius-sm;\\n    border-bottom-right-radius: $border-radius-sm;\\n    top: 0.5rem;\\n    left: 0;\\n}\\n\\n.card-flag-bottom-right {\\n    border-top-left-radius: $border-radius-sm;\\n    border-bottom-left-radius: $border-radius-sm;\\n    bottom: 0.5rem;\\n    right: 0;\\n}\\n\\n.card-flag-bottom-left {\\n    border-top-right-radius: $border-radius-sm;\\n    border-bottom-right-radius: $border-radius-sm;\\n    bottom: 0.5rem;\\n    left: 0;\\n}"},{"filePath":"sb-ui-kit-pro/components/forms/checkboxes.scss","scss":"// Override Bootstrap custom control styles\\n\\n.custom-control {\\n    label {\\n        cursor: pointer;\\n        margin: 0.25rem 0;\\n        &:hover {\\n            &:before {\\n                background-color: $gray-200;\\n            }\\n        }\\n    }\\n    .custom-control-input:disabled:checked ~ .custom-control-label::before {\\n        background-color: $gray-200;\\n        border-color: $gray-300;\\n    }\\n    .custom-control-input:disabled ~ .custom-control-label {\\n        color: $gray-500;\\n        cursor: not-allowed;\\n    }\\n}\\n\\n// Custom control style - solid\\n//\\n// Append the .custon-control-solid class to any .custom-control element\\n// to get a custom control style - works for radios and checkboxes\\n\\n.custom-control-solid {\\n    label:before {\\n        background-color: $input-solid-bg;\\n        border-color: $input-solid-border-color;\\n    }\\n    label:hover {\\n        &:before {\\n            background-color: darken($input-solid-bg, 10%);\\n            border-color: darken($input-solid-border-color, 10%);\\n        }\\n    }\\n    .custom-control-input:disabled ~ .custom-control-label::before {\\n        background-color: lighten($input-solid-bg, 3%);\\n        border-color: lighten($input-solid-border-color, 3%);\\n    }\\n    .custom-control-input:disabled:checked ~ .custom-control-label::before {\\n        background-color: lighten($input-solid-bg, 3%);\\n        border-color: lighten($input-solid-border-color, 3%);\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/forms/form-control.scss","scss":"// Custom form control solid component\\n//\\n// Append the .form-control-solid class to a .form-control input\\n// to get a solid styling for the input\\n\\n.form-control-solid {\\n    background-color: $input-solid-bg;\\n    border-color: $input-solid-border-color;\\n    &:focus {\\n        background-color: $input-solid-bg;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/navigation/navbar.scss","scss":"// Base styling for the global navbar\\n\\n.navbar {\\n    .dropdown-menu {\\n        top: calc(100% + #{$navbar-padding-y} + 0.5rem) !important;\\n        font-size: 0.9rem;\\n        .dropdown-header {\\n            font-size: 0.7rem;\\n            color: $gray-500;\\n            @extend .text-uppercase-expanded\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/navigation/navbar-marketing.scss","scss":"// Styling for the marketing style of the navbar\\n\\n.navbar-marketing {\\n    transition: background-color 0.15s ease-in-out;\\n    padding-top: $navbar-marketing-padding-y;\\n    padding-bottom: $navbar-marketing-padding-y;\\n    .navbar-toggler {\\n        padding: 0.5rem;\\n        border: 0;\\n        svg {\\n            vertical-align: middle;\\n            height: 1.5rem;\\n            width: 1.5rem;\\n        }\\n    }\\n    .navbar-brand {\\n        font-size: 1.2rem;\\n        font-weight: bold;\\n        img {\\n            height: 1rem;\\n        }\\n        svg {\\n            height: 1rem;\\n            fill: currentColor;\\n        }\\n    }\\n    .navbar-nav {\\n        padding-top: $navbar-marketing-padding-y;\\n        padding-bottom: $navbar-marketing-padding-y;\\n        .nav-item {\\n            .nav-link {\\n                font-weight: 500;\\n            }\\n        }\\n    }\\n    .btn {\\n        font-size: 0.7rem;\\n        padding: 0.75rem 2rem;\\n        @extend .text-uppercase-expanded;\\n    }\\n    &.fixed-top {\\n        max-height: 100vh;\\n        overflow-y: auto;\\n    }\\n}\\n\\n@include media-breakpoint-up(lg) {\\n    .navbar-marketing {\\n        padding-top: 0;\\n        padding-bottom: 0;\\n        .navbar-nav {\\n            padding-top: $navbar-marketing-padding-y;\\n            padding-bottom: $navbar-marketing-padding-y;\\n            .nav-item {\\n                margin-right: 1rem;\\n                &:last-child {\\n                    margin-right: 0;\\n                }\\n            }\\n        }\\n        &.fixed-top {\\n            max-height: none;\\n            overflow-y: visible;\\n        }\\n    }\\n}\\n\\n// Fallbacks for scrolling on fixed position marketing navbar\\n\\n.navbar-marketing.navbar-dark.navbar-scrolled {\\n    background-color: $gray-900 !important;\\n}\\n\\n.navbar-marketing.navbar-light.navbar-scrolled {\\n    background-color: $gray-100 !important;\\n}\\n\\n// Fallbacks for transparent backgrounds on md and below and removes animations on collapsed menu\\n\\n@include media-breakpoint-down(md) {\\n    .navbar-marketing.bg-transparent.navbar-dark {\\n        background-color: $gray-900 !important;\\n    }\\n    .navbar-marketing.bg-transparent.navbar-light {\\n        background-color: $gray-100 !important;\\n    }\\n    .animated--fade-in,\\n    .animated--fade-in-up {\\n        animation: none;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/navigation/topnav.scss","scss":".topnav {\\n    .navbar-brand {\\n        font-size: 1rem;\\n        font-weight: 800;\\n        text-transform: uppercase;\\n        letter-spacing: 0.05em;\\n        img {\\n            height: 1rem;\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/navigation/nav-sticky.scss","scss":".nav-sticky {\\n    @extend .sticky-top;\\n    top: $topnav-base-height + $grid-gutter-width;\\n    font-size: 0.9rem;\\n    .nav-link {\\n        padding-top: 0.25rem;\\n        padding-bottom: 0.25rem;\\n    }\\n    .nav-link.active {\\n        font-weight: 700;\\n    }\\n    ul.nav > li.nav-item > .nav {\\n        display: none;\\n    }\\n    ul.nav > li.nav-item > a.nav-link.active ~ .nav {\\n        display: flex;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/navigation/sidenav/sidenav.scss","scss":"// Override base SB Sidenav styles\\n\\n.sidenav {\\n    font-size: 0.9rem;\\n    .sidenav-menu {\\n        .nav {\\n            .sidenav-menu-heading {\\n                font-size: 0.7rem;\\n                font-weight: 800;\\n                text-transform: uppercase;\\n                letter-spacing: 0.05em;\\n            }\\n            .nav-link {\\n                display: flex;\\n                align-items: center;\\n                line-height: normal;\\n                .nav-link-icon {\\n                    padding-right: 0.5rem;\\n                    display: inline-flex;\\n                    .feather,\\n                    i-feather {\\n                        width: 1rem;\\n                        height: 1rem;\\n                    }\\n                }\\n                &.active {\\n                    font-weight: 700;\\n                    .nav-icon {\\n                        color: $primary;\\n                    }\\n                }\\n            }\\n            .sidenav-menu-nested {\\n                margin-left: 2rem - $sidenav-nested-border-offest;\\n                border-left-style: solid;\\n                border-left-width: thin;\\n                padding-left: $sidenav-nested-border-offest;\\n            }\\n        }\\n    }\\n    .sidenav-footer {\\n        height: $footer-base-height;\\n        display: flex;\\n        align-items: center;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/navigation/sidenav/sidenav-dark.scss","scss":"// Extend Sidenav Dark Styling\\n\\n.sidenav.sidenav-dark {\\n    .sidenav-menu-nested {\\n        border-left-color: fade-out($white, 0.85);\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/navigation/sidenav/sidenav-light.scss","scss":"// Extend Sidenav Light Styling\\n\\n.sidenav.sidenav-light {\\n    .sidenav-menu-nested {\\n        border-left-color: $gray-300;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/dropdowns/global.scss","scss":"// Global overrides and restyling of the default Bootstrap dropdown menu\\n\\n.dropdown-menu {\\n    border: none;\\n    box-shadow: $box-shadow;\\n    .dropdown-header {\\n        display: flex;\\n        align-items: center;\\n    }\\n    .dropdown-item {\\n        display: flex;\\n        align-items: center;\\n        .dropdown-item-icon {\\n            height: 1em;\\n            width: 1em;\\n            margin-right: 0.5rem;\\n            color: $gray-500;\\n        }\\n        &.active,\\n        &:active {\\n            .dropdown-item-icon {\\n                color: $white;\\n            }\\n        }\\n    }\\n}\\n\\n.dropdown {\\n    .dropdown-toggle {\\n        display: flex;\\n        align-items: center;\\n        .dropdown-arrow {\\n            margin-left: auto;\\n            margin-right: 1rem;\\n            transition: transform 0.1s ease-in-out;\\n            font-size: 0.6rem;\\n        }\\n    }\\n    &.show {\\n        .dropdown-toggle .dropdown-arrow {\\n            transform: rotate(90deg);\\n        }\\n    }\\n    @include media-breakpoint-up(lg) {\\n        .dropdown-toggle {\\n            display: inline-flex;\\n            .dropdown-arrow {\\n                margin-left: 0.4rem;\\n                margin-right: 0;\\n            }\\n        }\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/dropdowns/user.scss","scss":".dropdown-user {\\n    .dropdown-user-img {\\n        height: 100%;\\n        width: 100%;\\n        border-radius: 100%;\\n    }\\n    .dropdown-menu {\\n        min-width: 13rem;\\n        .dropdown-header {\\n            .dropdown-user-img {\\n                height: 2.5rem;\\n                width: 2.5rem;\\n                margin-right: 1rem;\\n            }\\n            .dropdown-user-details {\\n                font-weight: 400;\\n                .dropdown-user-details-name {\\n                    color: $gray-900;\\n                    font-weight: 500;\\n                    font-size: 0.9rem;\\n                    max-width: 10rem;\\n                    white-space: nowrap;\\n                    overflow: hidden;\\n                    text-overflow: ellipsis;\\n                }\\n                .dropdown-user-details-email {\\n                    color: $gray-600;\\n                    font-size: 0.75rem;\\n                    max-width: 10rem;\\n                    white-space: nowrap;\\n                    overflow: hidden;\\n                    text-overflow: ellipsis;\\n                }\\n            }\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/dropdowns/notifications.scss","scss":".dropdown-notifications {\\n    position: static;\\n    .dropdown-menu {\\n        padding-top: 0;\\n        padding-bottom: 0;\\n        width: calc(100% - #{$grid-gutter-width});\\n        right: $grid-gutter-width / 2;\\n        max-height: 19rem;\\n        overflow-y: auto;\\n        overflow-x: hidden;\\n        &::-webkit-scrollbar {\\n            width: 0.5rem;\\n        }\\n        &::-webkit-scrollbar-thumb {\\n            border-radius: 10rem;\\n            height: 3em;\\n            border-width: 0.1rem;\\n            border-style: solid;\\n            background-clip: padding-box;\\n            background-color: $gray-400;\\n            border-color: rgba(0, 0, 0, 0);\\n        }\\n        &::-webkit-scrollbar-track {\\n            background-color: fade-out($gray-900, 0.95);\\n        }\\n        &::-webkit-scrollbar-button {\\n            width: 0;\\n            height: 0;\\n            display: none;\\n        }\\n        &::-webkit-scrollbar-corner {\\n            background-color: transparent;\\n        }\\n        .dropdown-notifications-header {\\n            background-color: $primary;\\n            color: $white;\\n            font-size: 0.65rem;\\n            letter-spacing: 0.1em;\\n            text-transform: uppercase;\\n            font-weight: 800;\\n            padding-top: 1rem;\\n            padding-bottom: 1rem;\\n            .feather,\\n            svg {\\n                height: 0.85rem;\\n                width: 0.85rem;\\n                opacity: 0.7;\\n            }\\n        }\\n        .dropdown-notifications-item {\\n            padding-top: 1rem;\\n            padding-bottom: 1rem;\\n            border-bottom: 1px solid $gray-200;\\n            &:active {\\n                color: inherit;\\n            }\\n            .dropdown-notifications-item-icon,\\n            .dropdown-notifications-item-img {\\n                height: 2.5rem;\\n                width: 2.5rem;\\n                border-radius: 100%;\\n                margin-right: 1rem;\\n                flex-shrink: 0;\\n            }\\n            .dropdown-notifications-item-icon {\\n                background-color: $primary;\\n                display: flex;\\n                align-items: center;\\n                justify-content: center;\\n                .feather,\\n                svg {\\n                    text-align: center;\\n                    font-size: 0.85rem;\\n                    color: $white;\\n                    height: 0.85rem;\\n                }\\n            }\\n            .dropdown-notifications-item-content {\\n                .dropdown-notifications-item-content-details {\\n                    color: $gray-500;\\n                    font-size: 0.7rem;\\n                }\\n                .dropdown-notifications-item-content-text {\\n                    font-size: 0.9rem;\\n                    max-width: calc(100vw - 8.5rem);\\n                    white-space: nowrap;\\n                    overflow: hidden;\\n                    text-overflow: ellipsis;\\n                    margin-bottom: 0.5rem;\\n                }\\n                .dropdown-notifications-item-content-actions {\\n                    .btn-sm {\\n                        font-size: 0.7rem;\\n                        padding: 0.15rem 0.35rem;\\n                        cursor: pointer;\\n                    }\\n                }\\n            }\\n        }\\n        .dropdown-notifications-footer {\\n            justify-content: center;\\n            font-size: 0.8rem;\\n            padding-top: 0.75rem;\\n            padding-bottom: 0.75rem;\\n            color: $gray-500;\\n            cursor: pointer;\\n            .dropdown-notifications-footer-icon {\\n                height: 1em;\\n                width: 1em;\\n                margin-left: 0.25rem;\\n            }\\n        }\\n    }\\n    @include media-breakpoint-up(sm) {\\n        position: relative;\\n        .dropdown-menu {\\n            width: auto;\\n            min-width: 18.75rem;\\n            right: 0;\\n            .dropdown-notifications-item\\n                .dropdown-notifications-item-content\\n                .dropdown-notifications-item-content-text {\\n                max-width: 13rem;\\n            }\\n        }\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/components/dropdowns/mega.scss","scss":"@include media-breakpoint-up(lg) {\\n    .dropdown-lg,\\n    .dropdown-xl {\\n        position: relative;\\n        .dropdown-menu {\\n            position: absolute;\\n            padding: 0;\\n            overflow: hidden;\\n            .dropdown-item,\\n            .dropdown-header {\\n                padding-left: 0;\\n                padding-right: 0;\\n            }\\n            .dropdown-item {\\n                &:hover,\\n                &:active,\\n                &:focus {\\n                    background-color: inherit;\\n                    color: $gray-600 !important;\\n                }\\n            }\\n        }\\n    }\\n    .dropdown-lg {\\n        .dropdown-menu {\\n            min-width: 30rem;\\n            overflow: hidden;\\n        }\\n    }\\n    .dropdown-xl {\\n        .dropdown-menu {\\n            min-width: 45rem;\\n        }\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/icons.scss","scss":"// Set styling for feather icons\\n\\n// For usage with Angular Feather\\ni-feather {\\n    display: inline-flex !important;\\n    svg {\\n        height: 100%;\\n        width: 100%;\\n        vertical-align: top;\\n    }\\n}\\n\\n// Default Styling for HTML/CSS Feather\\n.feather {\\n    height: 1rem;\\n    width: 1rem;\\n    vertical-align: top;\\n}\\n\\n\\n.icon-stack {\\n    display: inline-flex;\\n    justify-content: center;\\n    align-items: center;\\n    border-radius: 100%;\\n    height: 2rem;\\n    width: 2rem;\\n    font-size: 1rem;\\n    background-color: $gray-100;\\n    svg {\\n        height: 1rem;\\n        width: 1rem;\\n    }\\n}\\n\\n.icon-stack-lg {\\n    height: 4rem;\\n    width: 4rem;\\n    font-size: 1.5rem;\\n    svg {\\n        height: 1.5rem;\\n        width: 1.5rem;\\n    }\\n}\\n\\n.icon-stack-xl {\\n    height: 5rem;\\n    width: 5rem;\\n    font-size: 1.75rem;\\n    svg {\\n        height: 1.75rem;\\n        width: 1.75rem;\\n    }\\n}\\n\\n.icon-list-social {\\n    display: flex;\\n    .icon-list-social-link {\\n        font-size: 1.25rem;\\n        margin-right: 0.5rem;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/video.scss","scss":".video {\\n    overflow: hidden;\\n    .video-link {\\n        position: relative;\\n        display: flex;\\n        width: 100%;\\n        padding: 10rem 1rem;\\n        align-items: center;\\n        justify-content: center;\\n        color: fade-out($white, 0.5);\\n        transition: color 0.2s ease-in-out;\\n        svg {\\n            height: 3rem;\\n            width: 3rem;\\n        }\\n        &:hover {\\n            color: $white;\\n        }\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/media.scss","scss":".media-img {\\n    height: 5rem;\\n    width: 5rem;\\n}"},{"filePath":"sb-ui-kit-pro/components/accordion.scss","scss":".accordion-faq {\\n    box-shadow: $box-shadow;\\n    overflow: hidden;\\n    .card {\\n        box-shadow: none;\\n        .card-header {\\n            cursor: pointer;\\n            background-color: $white;\\n            border-bottom: 1px solid $border-color;\\n        }\\n    }\\n    .accordion-faq-title {\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n        padding-top: 1rem;\\n        padding-bottom: 1rem;\\n    }\\n    .accordion-faq-item {\\n        .card-header {\\n            text-decoration: none;\\n            .accordion-faq-item-heading {\\n                width: 100%;\\n                margin-bottom: 0;\\n                display: flex;\\n                align-items: center;\\n                justify-content: space-between;\\n                color: $gray-700;\\n                padding-top: 0.5rem;\\n                padding-bottom: 0.5rem;\\n                .accordion-faq-item-heading-arrow {\\n                    color: $gray-400;\\n                    transition: transform 0.1s ease-in-out;\\n                }\\n            }\\n            &.collapsed {\\n                .accordion-faq-item-heading {\\n                    .accordion-faq-item-heading-arrow {\\n                        transform: rotate(-90deg);\\n                    }\\n                }\\n            }\\n        }\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/badges.scss","scss":".badge-transparent-light {\\n    color: fade-out($white, 0.5);\\n    background-color: fade-out($black, 0.9);\\n}\\n\\n.badge-transparent-dark {\\n    color: fade-out($gray-900, 0.5);\\n    background-color: fade-out($gray-900, 0.2);\\n}\\n\\n.badge-marketing {\\n    padding: 0.5em 1em;\\n}\\n\\n.badge-sm {\\n    font-size: 0.75rem;\\n}\\n.badge-md {\\n    font-size: 1rem;\\n}\\n.badge-lg {\\n    font-size: 1.25rem; \\n}"},{"filePath":"sb-ui-kit-pro/components/pagination.scss","scss":".pagination-blog {\\n    .page-item {\\n        margin-left: 0.25rem;\\n        margin-right: 0.25rem;\\n        &:first-child {\\n            margin-left: 0;\\n        }\\n        &:last-child {\\n            margin-right: 0;\\n        }\\n        .page-link {\\n            border-radius: $border-radius;\\n            border: none;\\n            padding: 0.75rem 1rem;\\n            font-weight: 700;\\n            font-size: 0.9rem;\\n        }\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/components/list-group.scss","scss":".list-group-careers {\\n    margin-bottom: 3rem;\\n    .list-group-item {\\n        padding-left: 0;\\n        padding-right: 0;\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/sections/borders.scss","scss":"// Set section positioning to relative for bottom borders\\nsection {\\n    position: relative;\\n}\\n\\n// Set the base styling for SVG borders used throughout sections and components\\n.svg-border-angled {\\n    padding-top: 5rem;\\n    svg {\\n        position: absolute;\\n        bottom: 0;\\n        left: 0;\\n        height: 5rem;\\n        width: 100%;\\n    }\\n}\\n\\n.svg-border-rounded {\\n    svg {\\n        position: absolute;\\n        bottom: 0;\\n        left: 0;\\n        height: 3rem;\\n        width: 100%;\\n    }\\n}\\n\\n.svg-border-waves {\\n    padding-top: 2rem;\\n    svg {\\n        position: absolute;\\n        bottom: 0;\\n        left: 0;\\n        height: 3rem;\\n        width: 100%;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/sections/header.scss","scss":"// Default styling for the page header\\n.page-header {\\n    position: relative;\\n    padding-top: $page-header-padding-y;\\n    padding-bottom: $page-header-padding-y;\\n    .page-header-content {\\n        .page-header-title {\\n            font-size: 2.5rem;\\n        }\\n        .page-header-text {\\n            font-size: 1.15rem;\\n            &.small {\\n                font-size: 0.9rem;\\n            }\\n        }\\n        .page-header-signup {\\n            justify-content: center;\\n            .form-control {\\n                font-size: $small-font-size;;\\n                padding: 0 $btn-padding-x-marketing;\\n                height: $btn-padding-y-marketing * 2 + $font-size-sm + 0.25rem;\\n                line-height: 1.5;\\n            }\\n        }\\n    }\\n}\\n\\n// Page header style when using a dark background color\\n.page-header-dark {\\n    color: $white;\\n    // Fallback background color\\n    background-color: $gray-900;\\n    .page-header-title {\\n        color: $white;\\n    }\\n    .page-header-text {\\n        @extend .text-white-50;\\n        a {\\n            @extend .text-white-75;\\n        }\\n    }\\n    .btn-link {\\n        @extend .text-light;\\n    }\\n}\\n\\n// Page header style when using a light background\\n.page-header-light {\\n    // Fallback background color\\n    background-color: $gray-100;\\n    .page-header-text {\\n        color: $gray-600;\\n        a {\\n            color: $gray-700;\\n        }\\n    }\\n    .btn-link {\\n        @extend .text-dark;\\n    }\\n}\\n\\n// Behavior for fixed navbar\\n.page-header.navbar-fixed {\\n    .page-header-content {\\n        padding-top: $page-header-padding-y + $navbar-marketing-padding-y * 2 + 1rem;\\n    }\\n    .navbar {\\n        @extend .fixed-top;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/sections/footer.scss","scss":".footer {\\n    .footer-brand {\\n        font-size: 1.2rem;\\n        font-weight: bold;\\n        margin-bottom: 0.25rem;\\n        svg {\\n            height: 1rem;\\n        }\\n    }\\n    a {\\n        @extend .text-reset;\\n    }\\n    &.footer-dark {\\n        color: fade-out($white, 0.4);\\n        hr {\\n            border-color: fade-out($white, 0.9)\\n        }\\n    }\\n    &.footer-light {\\n        color: $gray-500;\\n    }\\n}\\n"},{"filePath":"sb-ui-kit-pro/sections/device.scss","scss":".device-laptop {\\n    position: relative;\\n    .device-container {\\n        display: block;\\n        height: auto;\\n        width: 100%;\\n        position: relative;\\n        z-index: 1;\\n    }\\n    .device-screenshot {\\n        display: block;\\n        position: absolute;\\n        top: 6%;\\n        left: 11.8%;\\n        height: auto;\\n        width: 76.57%;\\n        z-index: 0;\\n    }\\n}\\n\\n/*!\\n * html5-device-mockups (https://github.com/pixelsign/html5-device-mockups)\\n * Copyright 2013 - 2018 pixelsign\\n * Licensed under MIT (https://github.com/pixelsign/html5-device-mockups/blob/master/LICENSE.txt)\\n * Last Build: Thu Dec 20 2018 14:05:50\\n */\\n\\n .device-wrapper {\\n    max-width: 300px;\\n    width: 100%; }\\n  \\n  .device {\\n    position: relative;\\n    background-size: cover; }\\n    .device::after {\\n      position: absolute;\\n      background-size: cover;\\n      width: 100%;\\n      height: 100%;\\n      pointer-events: none; }\\n    .device .screen {\\n      position: absolute;\\n      background-size: cover;\\n      pointer-events: auto; }\\n    .device .button {\\n      position: absolute;\\n      cursor: pointer; }\\n  \\n  .device[data-device=\\"iPhoneX\\"][data-orientation=\\"portrait\\"][data-color=\\"black\\"] {\\n    padding-bottom: 198.89807163%;\\n    background-image: url(../assets/img/device-mockups/iPhoneX/portrait.png);\\n    z-index: initial;\\n  }\\n    .device[data-device=\\"iPhoneX\\"][data-orientation=\\"portrait\\"][data-color=\\"black\\"] .screen {\\n      top: 3.254847645%;\\n      left: 7.162534435%;\\n      width: 85.67493113%;\\n      height: 93.49030471%;\\n      border: 0px;\\n      z-index: 0;\\n    }\\n  \\n  .device[data-device=\\"iPhoneX\\"][data-orientation=\\"landscape\\"][data-color=\\"black\\"] {\\n    padding-bottom: 50.27700831%;\\n    background-image: url(../assets/img/device-mockups/iPhoneX/landscape.png);\\n    z-index: initial;\\n  }\\n    .device[data-device=\\"iPhoneX\\"][data-orientation=\\"landscape\\"][data-color=\\"black\\"] .screen {\\n      top: 7.162534435%;\\n      left: 3.254847645%;\\n      width: 93.49030471%;\\n      height: 85.67493113%;\\n      border: 0px;\\n      z-index: 0;\\n    }\\n  \\n  .device[data-device=\\"iPhoneX\\"][data-orientation=\\"portrait\\"][data-color=\\"black\\"] {\\n    padding-bottom: 198.898071625%; }\\n    .device[data-device=\\"iPhoneX\\"][data-orientation=\\"portrait\\"][data-color=\\"black\\"] .screen {\\n      top: 3.1855955679%;\\n      left: 6.8870523416%;\\n      width: 86.2258953168%;\\n      height: 93.6288088643%; }\\n    .device[data-device=\\"iPhoneX\\"][data-orientation=\\"portrait\\"][data-color=\\"black\\"]::after {\\n      content: \'\';\\n      background-image: url(../assets/img/device-mockups/iPhoneX/portrait_black.png); }\\n    .device[data-device=\\"iPhoneX\\"][data-orientation=\\"portrait\\"][data-color=\\"black\\"] .button {\\n      display: none;\\n      top: 0%;\\n      left: 0%;\\n      width: 100%;\\n      height: 100%; }\\n  \\n  .device[data-device=\\"iPhoneX\\"][data-orientation=\\"landscape\\"][data-color=\\"black\\"] {\\n    padding-bottom: 50.2770083102%; }\\n    .device[data-device=\\"iPhoneX\\"][data-orientation=\\"landscape\\"][data-color=\\"black\\"] .screen {\\n      top: 6.3360881543%;\\n      left: 3.4626038781%;\\n      width: 93.0747922438%;\\n      height: 87.3278236915%; }\\n    .device[data-device=\\"iPhoneX\\"][data-orientation=\\"landscape\\"][data-color=\\"black\\"]::after {\\n      content: \'\';\\n      background-image: url(../assets/img/device-mockups/iPhoneX/landscape_black.png); }\\n    .device[data-device=\\"iPhoneX\\"][data-orientation=\\"landscape\\"][data-color=\\"black\\"] .button {\\n      display: none;\\n      top: 0%;\\n      left: 0%;\\n      width: 100%;\\n      height: 100%; }"},{"filePath":"sb-ui-kit-pro/sections/brands.scss","scss":".brands {\\n    svg {\\n        width: 100%;\\n        fill: currentColor;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/sections/testimonials.scss","scss":".testimonial {\\n    .testimonial-brand {\\n        fill: currentColor;\\n        margin-bottom: 1.35rem;\\n        svg {\\n            height: 3rem;\\n        }\\n    }\\n    .testimonial-quote {\\n        font-size: 1.4rem;\\n        font-weight: 300;\\n    }\\n    .testimonial-name {\\n        font-weight: bold;\\n    }\\n    .testimonial-position {\\n        font-weight: lighter;\\n    }\\n}\\n\\n@include media-breakpoint-up(lg) {\\n    .divider-right {\\n        border-right: 0.0625rem solid $border-color;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/sections/pricing.scss","scss":".pricing {\\n    font-size: 0.9rem;\\n    .pricing-price {\\n        font-size: 3rem;\\n        color: $gray-800;\\n        margin-bottom: 1rem;\\n        sup {\\n            font-size: 1.5rem;\\n        }\\n        .pricing-price-period {\\n            font-size: 1.25rem;\\n        }\\n    }\\n    .pricing-list {\\n        margin-bottom: 0;\\n        margin-left: 1.6em;\\n        .pricing-list-item {\\n            margin-bottom: 0.5rem;\\n        }\\n    }\\n}\\n\\n@include media-breakpoint-up(lg) {\\n    .pricing-left {\\n        border-top-right-radius: 0;\\n        border-bottom-right-radius: 0;\\n    }\\n    .pricing-right {\\n        border-top-left-radius: 0;\\n        border-bottom-left-radius: 0;\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/sections/blog.scss","scss":".post-preview {\\n    h5.card-title {\\n        font-size: 1.1rem;\\n        margin-bottom: 0.5rem;\\n    }\\n    .post-preview-meta {\\n        display: flex;\\n        align-items: center;\\n        margin-right: 0.5rem;\\n        .post-preview-meta-img {\\n            height: 2.25rem;\\n            width: 2.25rem;\\n            border-radius: 100%;\\n            margin-right: 0.5rem;\\n            flex-shrink: 0;\\n        }\\n        .post-preview-meta-details {\\n            .post-preview-meta-details-name {\\n                font-size: 0.9rem;\\n                line-height: 1;\\n                margin-bottom: 0.25rem;\\n            }\\n            .post-preview-meta-details-date {\\n                font-size: 0.75rem;\\n                line-height: 1;\\n            }\\n        }\\n    }\\n}\\n\\n.post-preview-featured {\\n    .post-preview-featured-img {\\n        height: 20rem;\\n        width: 100%;\\n        background-position: center;\\n        background-repeat: no-repeat;\\n        background-size: cover;\\n    }\\n    h5.card-title {\\n        font-size: 1.75rem;\\n    }\\n    p.card-text {\\n        font-size: 1.2rem;\\n        font-weight: 300;\\n    }\\n    @include media-breakpoint-up(lg) {\\n        .post-preview-featured-img {\\n            height: 100%;\\n            width: 100%;\\n        }\\n    }\\n}\\n\\n.post-archive-tag {\\n    font-size: 0.8rem;\\n    font-weight: bold;\\n    text-transform: uppercase;\\n    border-bottom: 1px solid $border-color;\\n    margin-bottom: 3rem;\\n    padding-bottom: 0.5rem;\\n}\\n\\n.post-archive-item {\\n    color: inherit !important;\\n    text-decoration: none !important;\\n}\\n\\n.post-archive-meta {\\n    display: flex;\\n    align-items: center;\\n    margin-right: 0.5rem;\\n    .post-archive-meta-img {\\n        height: 2.25rem;\\n        width: 2.25rem;\\n        border-radius: 100%;\\n        margin-right: 0.5rem;\\n        flex-shrink: 0;\\n    }\\n    .post-archive-meta-details {\\n        .post-archive-meta-details-name {\\n            font-size: 0.9rem;\\n            line-height: 1;\\n            margin-bottom: 0.25rem;\\n        }\\n        .post-archive-meta-details-date {\\n            font-size: 0.75rem;\\n            line-height: 1;\\n        }\\n    }\\n}\\n\\n.single-post {\\n    .single-post-meta {\\n        display: flex;\\n        align-items: center;\\n        margin-right: 0.5rem;\\n        .single-post-meta-img {\\n            height: 2.25rem;\\n            width: 2.25rem;\\n            border-radius: 100%;\\n            margin-right: 0.5rem;\\n            flex-shrink: 0;\\n        }\\n        .single-post-meta-details {\\n            .single-post-meta-details-name {\\n                font-size: 0.9rem;\\n                line-height: 1;\\n                margin-bottom: 0.25rem;\\n            }\\n            .single-post-meta-details-date {\\n                font-size: 0.75rem;\\n                line-height: 1;\\n            }\\n        }\\n    }\\n    .single-post-meta-links {\\n        font-size: 1.25rem;\\n        a {\\n            color: $gray-400;\\n            margin-left: 0.5rem;\\n            &:hover {\\n                color: $gray-600;\\n            }\\n        }\\n    }\\n    .single-post-text {\\n        font-size: 1.1rem;\\n        p {\\n            margin-bottom: 1.5rem;\\n        }\\n        h2,\\n        h3,\\n        h4,\\n        h5,\\n        h6 {\\n            margin-top: 2.5rem;\\n            margin-bottom: 1.5rem;\\n        }\\n    }\\n}"},{"filePath":"sb-ui-kit-pro/pages/error.scss","scss":".error-page {\\n    background-color: $bg-error-page;\\n}\\n\\n.error {\\n    color: $gray-800;\\n    font-size: 7rem;\\n    position: relative;\\n    line-height: 1;\\n    width: 12.5rem;\\n}\\n@keyframes noise-anim {\\n    $steps: 20;\\n    @for $i from 0 through $steps {\\n        #{percentage($i*(1/$steps))} {\\n            clip: rect(random(100) + px, 9999px, random(100) + px, 0);\\n        }\\n    }\\n}\\n.error:after {\\n    content: attr(data-text);\\n    position: absolute;\\n    left: 2px;\\n    text-shadow: -1px 0 $red;\\n    top: 0;\\n    color: $gray-800;\\n    background: $bg-error-page;\\n    overflow: hidden;\\n    clip: rect(0, 900px, 0, 0);\\n    animation: noise-anim 2s infinite linear alternate-reverse;\\n}\\n\\n@keyframes noise-anim-2 {\\n    $steps: 20;\\n    @for $i from 0 through $steps {\\n        #{percentage($i*(1/$steps))} {\\n            clip: rect(random(100) + px, 9999px, random(100) + px, 0);\\n        }\\n    }\\n}\\n.error:before {\\n    content: attr(data-text);\\n    position: absolute;\\n    left: -2px;\\n    text-shadow: 1px 0 $blue;\\n    top: 0;\\n    color: $gray-800;\\n    background: $bg-error-page;\\n    overflow: hidden;\\n    clip: rect(0, 900px, 0, 0);\\n    animation: noise-anim-2 3s infinite linear alternate-reverse;\\n}\\n"},{"filePath":"sb-ui-kit-pro/project-global.scss","scss":""},{"filePath":"./sb-ui-kit-pro-angular.scss","scss":""},{"filePath":"./project-variables.scss","scss":""},{"filePath":"./project-global.scss","scss":".pointer {\\n    cursor: pointer;\\n}"}]}')
    },
    zUnb: function(n, e, t) {
      "use strict";

      function o(n) {
        return "function" == typeof n
      }
      t.r(e);
      let r = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(n) {
          if (n) {
            const n = new Error;
            console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + n.stack)
          } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
          r = n
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r
        }
      };

      function s(n) {
        setTimeout(() => {
          throw n
        }, 0)
      }
      const a = {
          closed: !0,
          next(n) {},
          error(n) {
            if (i.useDeprecatedSynchronousErrorHandling) throw n;
            s(n)
          },
          complete() {}
        },
        l = (() => Array.isArray || (n => n && "number" == typeof n.length))();

      function c(n) {
        return null !== n && "object" == typeof n
      }
      const d = (() => {
        function n(n) {
          return Error.call(this), this.message = n ? `${n.length} errors occurred during unsubscription:\n${n.map((n,e)=>`${e+1}) ${n.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = n, this
        }
        return n.prototype = Object.create(Error.prototype), n
      })();
      let u = (() => {
        class n {
          constructor(n) {
            this.closed = !1, this._parentOrParents = null, this._subscriptions = null, n && (this._unsubscribe = n)
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: t,
              _unsubscribe: r,
              _subscriptions: i
            } = this;
            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, t instanceof n) t.remove(this);
            else if (null !== t)
              for (let n = 0; n < t.length; ++n) t[n].remove(this);
            if (o(r)) try {
              r.call(this)
            } catch (s) {
              e = s instanceof d ? p(s.errors) : [s]
            }
            if (l(i)) {
              let n = -1,
                t = i.length;
              for (; ++n < t;) {
                const t = i[n];
                if (c(t)) try {
                  t.unsubscribe()
                } catch (s) {
                  e = e || [], s instanceof d ? e = e.concat(p(s.errors)) : e.push(s)
                }
              }
            }
            if (e) throw new d(e)
          }
          add(e) {
            let t = e;
            if (!e) return n.EMPTY;
            switch (typeof e) {
              case "function":
                t = new n(e);
              case "object":
                if (t === this || t.closed || "function" != typeof t.unsubscribe) return t;
                if (this.closed) return t.unsubscribe(), t;
                if (!(t instanceof n)) {
                  const e = t;
                  t = new n, t._subscriptions = [e]
                }
                break;
              default:
                throw new Error("unrecognized teardown " + e + " added to Subscription.")
            }
            let {
              _parentOrParents: o
            } = t;
            if (null === o) t._parentOrParents = this;
            else if (o instanceof n) {
              if (o === this) return t;
              t._parentOrParents = [o, this]
            } else {
              if (-1 !== o.indexOf(this)) return t;
              o.push(this)
            }
            const r = this._subscriptions;
            return null === r ? this._subscriptions = [t] : r.push(t), t
          }
          remove(n) {
            const e = this._subscriptions;
            if (e) {
              const t = e.indexOf(n); - 1 !== t && e.splice(t, 1)
            }
          }
        }
        return n.EMPTY = function(n) {
          return n.closed = !0, n
        }(new n), n
      })();

      function p(n) {
        return n.reduce((n, e) => n.concat(e instanceof d ? e.errors : e), [])
      }
      const h = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();
      class f extends u {
        constructor(n, e, t) {
          switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!n) {
                this.destination = a;
                break
              }
              if ("object" == typeof n) {
                n instanceof f ? (this.syncErrorThrowable = n.syncErrorThrowable, this.destination = n, n.add(this)) : (this.syncErrorThrowable = !0, this.destination = new g(this, n));
                break
              }
              default:
                this.syncErrorThrowable = !0, this.destination = new g(this, n, e, t)
          }
        } [h]() {
          return this
        }
        static create(n, e, t) {
          const o = new f(n, e, t);
          return o.syncErrorThrowable = !1, o
        }
        next(n) {
          this.isStopped || this._next(n)
        }
        error(n) {
          this.isStopped || (this.isStopped = !0, this._error(n))
        }
        complete() {
          this.isStopped || (this.isStopped = !0, this._complete())
        }
        unsubscribe() {
          this.closed || (this.isStopped = !0, super.unsubscribe())
        }
        _next(n) {
          this.destination.next(n)
        }
        _error(n) {
          this.destination.error(n), this.unsubscribe()
        }
        _complete() {
          this.destination.complete(), this.unsubscribe()
        }
        _unsubscribeAndRecycle() {
          const {
            _parentOrParents: n
          } = this;
          return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = n, this
        }
      }
      class g extends f {
        constructor(n, e, t, r) {
          let i;
          super(), this._parentSubscriber = n;
          let s = this;
          o(e) ? i = e : e && (i = e.next, t = e.error, r = e.complete, e !== a && (s = Object.create(e), o(s.unsubscribe) && this.add(s.unsubscribe.bind(s)), s.unsubscribe = this.unsubscribe.bind(this))), this._context = s, this._next = i, this._error = t, this._complete = r
        }
        next(n) {
          if (!this.isStopped && this._next) {
            const {
              _parentSubscriber: e
            } = this;
            i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, n) && this.unsubscribe() : this.__tryOrUnsub(this._next, n)
          }
        }
        error(n) {
          if (!this.isStopped) {
            const {
              _parentSubscriber: e
            } = this, {
              useDeprecatedSynchronousErrorHandling: t
            } = i;
            if (this._error) t && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, n), this.unsubscribe()) : (this.__tryOrUnsub(this._error, n), this.unsubscribe());
            else if (e.syncErrorThrowable) t ? (e.syncErrorValue = n, e.syncErrorThrown = !0) : s(n), this.unsubscribe();
            else {
              if (this.unsubscribe(), t) throw n;
              s(n)
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const {
              _parentSubscriber: n
            } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? (this.__tryOrSetError(n, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
            } else this.unsubscribe()
          }
        }
        __tryOrUnsub(n, e) {
          try {
            n.call(this._context, e)
          } catch (t) {
            if (this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling) throw t;
            s(t)
          }
        }
        __tryOrSetError(n, e, t) {
          if (!i.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
          try {
            e.call(this._context, t)
          } catch (o) {
            return i.useDeprecatedSynchronousErrorHandling ? (n.syncErrorValue = o, n.syncErrorThrown = !0, !0) : (s(o), !0)
          }
          return !1
        }
        _unsubscribe() {
          const {
            _parentSubscriber: n
          } = this;
          this._context = null, this._parentSubscriber = null, n.unsubscribe()
        }
      }
      const m = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")();

      function b() {}
      let v = (() => {
        class n {
          constructor(n) {
            this._isScalar = !1, n && (this._subscribe = n)
          }
          lift(e) {
            const t = new n;
            return t.source = this, t.operator = e, t
          }
          subscribe(n, e, t) {
            const {
              operator: o
            } = this, r = function(n, e, t) {
              if (n) {
                if (n instanceof f) return n;
                if (n[h]) return n[h]()
              }
              return n || e || t ? new f(n, e, t) : new f(a)
            }(n, e, t);
            if (r.add(o ? o.call(r, this.source) : this.source || i.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable ? this._subscribe(r) : this._trySubscribe(r)), i.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable && (r.syncErrorThrowable = !1, r.syncErrorThrown)) throw r.syncErrorValue;
            return r
          }
          _trySubscribe(n) {
            try {
              return this._subscribe(n)
            } catch (e) {
              i.useDeprecatedSynchronousErrorHandling && (n.syncErrorThrown = !0, n.syncErrorValue = e),
                function(n) {
                  for (; n;) {
                    const {
                      closed: e,
                      destination: t,
                      isStopped: o
                    } = n;
                    if (e || o) return !1;
                    n = t && t instanceof f ? t : null
                  }
                  return !0
                }(n) ? n.error(e) : console.warn(e)
            }
          }
          forEach(n, e) {
            return new(e = $(e))((e, t) => {
              let o;
              o = this.subscribe(e => {
                try {
                  n(e)
                } catch (r) {
                  t(r), o && o.unsubscribe()
                }
              }, t, e)
            })
          }
          _subscribe(n) {
            const {
              source: e
            } = this;
            return e && e.subscribe(n)
          } [m]() {
            return this
          }
          pipe(...n) {
            return 0 === n.length ? this : ((e = n) ? 1 === e.length ? e[0] : function(n) {
              return e.reduce((n, e) => e(n), n)
            } : b)(this);
            var e
          }
          toPromise(n) {
            return new(n = $(n))((n, e) => {
              let t;
              this.subscribe(n => t = n, n => e(n), () => n(t))
            })
          }
        }
        return n.create = e => new n(e), n
      })();

      function $(n) {
        if (n || (n = i.Promise || Promise), !n) throw new Error("no Promise impl found");
        return n
      }
      const w = (() => {
        function n() {
          return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
        }
        return n.prototype = Object.create(Error.prototype), n
      })();
      class y extends u {
        constructor(n, e) {
          super(), this.subject = n, this.subscriber = e, this.closed = !1
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const n = this.subject,
            e = n.observers;
          if (this.subject = null, !e || 0 === e.length || n.isStopped || n.closed) return;
          const t = e.indexOf(this.subscriber); - 1 !== t && e.splice(t, 1)
        }
      }
      class x extends f {
        constructor(n) {
          super(n), this.destination = n
        }
      }
      let k = (() => {
        class n extends v {
          constructor() {
            super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
          } [h]() {
            return new x(this)
          }
          lift(n) {
            const e = new C(this, this);
            return e.operator = n, e
          }
          next(n) {
            if (this.closed) throw new w;
            if (!this.isStopped) {
              const {
                observers: e
              } = this, t = e.length, o = e.slice();
              for (let r = 0; r < t; r++) o[r].next(n)
            }
          }
          error(n) {
            if (this.closed) throw new w;
            this.hasError = !0, this.thrownError = n, this.isStopped = !0;
            const {
              observers: e
            } = this, t = e.length, o = e.slice();
            for (let r = 0; r < t; r++) o[r].error(n);
            this.observers.length = 0
          }
          complete() {
            if (this.closed) throw new w;
            this.isStopped = !0;
            const {
              observers: n
            } = this, e = n.length, t = n.slice();
            for (let o = 0; o < e; o++) t[o].complete();
            this.observers.length = 0
          }
          unsubscribe() {
            this.isStopped = !0, this.closed = !0, this.observers = null
          }
          _trySubscribe(n) {
            if (this.closed) throw new w;
            return super._trySubscribe(n)
          }
          _subscribe(n) {
            if (this.closed) throw new w;
            return this.hasError ? (n.error(this.thrownError), u.EMPTY) : this.isStopped ? (n.complete(), u.EMPTY) : (this.observers.push(n), new y(this, n))
          }
          asObservable() {
            const n = new v;
            return n.source = this, n
          }
        }
        return n.create = (n, e) => new C(n, e), n
      })();
      class C extends k {
        constructor(n, e) {
          super(), this.destination = n, this.source = e
        }
        next(n) {
          const {
            destination: e
          } = this;
          e && e.next && e.next(n)
        }
        error(n) {
          const {
            destination: e
          } = this;
          e && e.error && this.destination.error(n)
        }
        complete() {
          const {
            destination: n
          } = this;
          n && n.complete && this.destination.complete()
        }
        _subscribe(n) {
          const {
            source: e
          } = this;
          return e ? this.source.subscribe(n) : u.EMPTY
        }
      }

      function _(n) {
        return n && "function" == typeof n.schedule
      }
      class z extends f {
        constructor(n, e, t) {
          super(), this.parent = n, this.outerValue = e, this.outerIndex = t, this.index = 0
        }
        _next(n) {
          this.parent.notifyNext(this.outerValue, n, this.outerIndex, this.index++, this)
        }
        _error(n) {
          this.parent.notifyError(n, this), this.unsubscribe()
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe()
        }
      }
      const A = n => e => {
        for (let t = 0, o = n.length; t < o && !e.closed; t++) e.next(n[t]);
        e.complete()
      };

      function S() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
      }
      const I = S();
      const E = n => {
        if (n && "function" == typeof n[m]) return i = n, n => {
          const e = i[m]();
          if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
          return e.subscribe(n)
        };
        if ((e = n) && "number" == typeof e.length && "function" != typeof e) return A(n);
        var e, t, o, r, i;
        if ((t = n) && "function" != typeof t.subscribe && "function" == typeof t.then) return r = n, n => (r.then(e => {
          n.closed || (n.next(e), n.complete())
        }, e => n.error(e)).then(null, s), n);
        if (n && "function" == typeof n[I]) return o = n, n => {
          const e = o[I]();
          for (;;) {
            const t = e.next();
            if (t.done) {
              n.complete();
              break
            }
            if (n.next(t.value), n.closed) break
          }
          return "function" == typeof e.return && n.add(() => {
            e.return && e.return()
          }), n
        }; {
          const e = c(n) ? "an invalid object" : `'${n}'`;
          throw new TypeError(`You provided ${e} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.")
        }
      };
      class P extends f {
        notifyNext(n, e, t, o, r) {
          this.destination.next(e)
        }
        notifyError(n, e) {
          this.destination.error(n)
        }
        notifyComplete(n) {
          this.destination.complete()
        }
      }

      function T(n, e) {
        return function(t) {
          if ("function" != typeof n) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
          return t.lift(new M(n, e))
        }
      }
      class M {
        constructor(n, e) {
          this.project = n, this.thisArg = e
        }
        call(n, e) {
          return e.subscribe(new O(n, this.project, this.thisArg))
        }
      }
      class O extends f {
        constructor(n, e, t) {
          super(n), this.project = e, this.count = 0, this.thisArg = t || this
        }
        _next(n) {
          let e;
          try {
            e = this.project.call(this.thisArg, n, this.count++)
          } catch (t) {
            return void this.destination.error(t)
          }
          this.destination.next(e)
        }
      }

      function R(n, e) {
        return new v(t => {
          const o = new u;
          let r = 0;
          return o.add(e.schedule((function() {
            r !== n.length ? (t.next(n[r++]), t.closed || o.add(this.schedule())) : t.complete()
          }))), o
        })
      }
      class N {
        constructor(n, e = Number.POSITIVE_INFINITY) {
          this.project = n, this.concurrent = e
        }
        call(n, e) {
          return e.subscribe(new D(n, this.project, this.concurrent))
        }
      }
      class D extends P {
        constructor(n, e, t = Number.POSITIVE_INFINITY) {
          super(n), this.project = e, this.concurrent = t, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
        }
        _next(n) {
          this.active < this.concurrent ? this._tryNext(n) : this.buffer.push(n)
        }
        _tryNext(n) {
          let e;
          const t = this.index++;
          try {
            e = this.project(n, t)
          } catch (o) {
            return void this.destination.error(o)
          }
          this.active++, this._innerSub(e, n, t)
        }
        _innerSub(n, e, t) {
          const o = new z(this, e, t),
            r = this.destination;
          r.add(o);
          const i = function(n, e, t, o, r = new z(n, t, o)) {
            if (!r.closed) return e instanceof v ? e.subscribe(r) : E(e)(r)
          }(this, n, void 0, void 0, o);
          i !== o && r.add(i)
        }
        _complete() {
          this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
        }
        notifyNext(n, e, t, o, r) {
          this.destination.next(e)
        }
        notifyComplete(n) {
          const e = this.buffer;
          this.remove(n), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
        }
      }

      function F(n) {
        return n
      }

      function j(n, e) {
        return e ? R(n, e) : new v(A(n))
      }

      function V(...n) {
        let e = Number.POSITIVE_INFINITY,
          t = null,
          o = n[n.length - 1];
        return _(o) ? (t = n.pop(), n.length > 1 && "number" == typeof n[n.length - 1] && (e = n.pop())) : "number" == typeof o && (e = n.pop()), null === t && 1 === n.length && n[0] instanceof v ? n[0] : function(n = Number.POSITIVE_INFINITY) {
          return function n(e, t, o = Number.POSITIVE_INFINITY) {
            return "function" == typeof t ? r => r.pipe(n((n, o) => {
              return (r = e(n, o), r instanceof v ? r : new v(E(r))).pipe(T((e, r) => t(n, e, o, r)));
              var r
            }, o)) : ("number" == typeof t && (o = t), n => n.lift(new N(e, o)))
          }(F, n)
        }(e)(j(n, t))
      }

      function B() {
        return function(n) {
          return n.lift(new q(n))
        }
      }
      class q {
        constructor(n) {
          this.connectable = n
        }
        call(n, e) {
          const {
            connectable: t
          } = this;
          t._refCount++;
          const o = new H(n, t),
            r = e.subscribe(o);
          return o.closed || (o.connection = t.connect()), r
        }
      }
      class H extends f {
        constructor(n, e) {
          super(n), this.connectable = e
        }
        _unsubscribe() {
          const {
            connectable: n
          } = this;
          if (!n) return void(this.connection = null);
          this.connectable = null;
          const e = n._refCount;
          if (e <= 0) return void(this.connection = null);
          if (n._refCount = e - 1, e > 1) return void(this.connection = null);
          const {
            connection: t
          } = this, o = n._connection;
          this.connection = null, !o || t && o !== t || o.unsubscribe()
        }
      }
      class L extends v {
        constructor(n, e) {
          super(), this.source = n, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1
        }
        _subscribe(n) {
          return this.getSubject().subscribe(n)
        }
        getSubject() {
          const n = this._subject;
          return n && !n.isStopped || (this._subject = this.subjectFactory()), this._subject
        }
        connect() {
          let n = this._connection;
          return n || (this._isComplete = !1, n = this._connection = new u, n.add(this.source.subscribe(new U(this.getSubject(), this))), n.closed && (this._connection = null, n = u.EMPTY)), n
        }
        refCount() {
          return B()(this)
        }
      }
      const W = (() => {
        const n = L.prototype;
        return {
          operator: {
            value: null
          },
          _refCount: {
            value: 0,
            writable: !0
          },
          _subject: {
            value: null,
            writable: !0
          },
          _connection: {
            value: null,
            writable: !0
          },
          _subscribe: {
            value: n._subscribe
          },
          _isComplete: {
            value: n._isComplete,
            writable: !0
          },
          getSubject: {
            value: n.getSubject
          },
          connect: {
            value: n.connect
          },
          refCount: {
            value: n.refCount
          }
        }
      })();
      class U extends x {
        constructor(n, e) {
          super(n), this.connectable = e
        }
        _error(n) {
          this._unsubscribe(), super._error(n)
        }
        _complete() {
          this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
        }
        _unsubscribe() {
          const n = this.connectable;
          if (n) {
            this.connectable = null;
            const e = n._connection;
            n._refCount = 0, n._subject = null, n._connection = null, e && e.unsubscribe()
          }
        }
      }

      function K() {
        return new k
      }
      const Y = "__parameters__";

      function G(n, e, t) {
        const o = function(n) {
          return function(...e) {
            if (n) {
              const t = n(...e);
              for (const n in t) this[n] = t[n]
            }
          }
        }(e);

        function r(...n) {
          if (this instanceof r) return o.apply(this, n), this;
          const e = new r(...n);
          return t.annotation = e, t;

          function t(n, t, o) {
            const r = n.hasOwnProperty(Y) ? n[Y] : Object.defineProperty(n, Y, {
              value: []
            })[Y];
            for (; r.length <= o;) r.push(null);
            return (r[o] = r[o] || []).push(e), n
          }
        }
        return t && (r.prototype = Object.create(t.prototype)), r.prototype.ngMetadataName = n, r.annotationCls = r, r
      }
      const Z = G("Inject", n => ({
          token: n
        })),
        X = G("Optional"),
        Q = G("Self"),
        J = G("SkipSelf");
      var nn = function(n) {
        return n[n.Default = 0] = "Default", n[n.Host = 1] = "Host", n[n.Self = 2] = "Self", n[n.SkipSelf = 4] = "SkipSelf", n[n.Optional = 8] = "Optional", n
      }({});

      function en(n) {
        for (let e in n)
          if (n[e] === en) return e;
        throw Error("Could not find renamed property on target object.")
      }

      function tn(n, e) {
        for (const t in e) e.hasOwnProperty(t) && !n.hasOwnProperty(t) && (n[t] = e[t])
      }

      function on(n) {
        return {
          token: n.token,
          providedIn: n.providedIn || null,
          factory: n.factory,
          value: void 0
        }
      }

      function rn(n) {
        return {
          factory: n.factory,
          providers: n.providers || [],
          imports: n.imports || []
        }
      }

      function sn(n) {
        return an(n, n[cn]) || an(n, n[pn])
      }

      function an(n, e) {
        return e && e.token === n ? e : null
      }

      function ln(n) {
        return n && (n.hasOwnProperty(dn) || n.hasOwnProperty(hn)) ? n[dn] : null
      }
      const cn = en({
          "\u0275prov": en
        }),
        dn = en({
          "\u0275inj": en
        }),
        un = en({
          "\u0275provFallback": en
        }),
        pn = en({
          ngInjectableDef: en
        }),
        hn = en({
          ngInjectorDef: en
        });

      function fn(n) {
        if ("string" == typeof n) return n;
        if (Array.isArray(n)) return "[" + n.map(fn).join(", ") + "]";
        if (null == n) return "" + n;
        if (n.overriddenName) return `${n.overriddenName}`;
        if (n.name) return `${n.name}`;
        const e = n.toString();
        if (null == e) return "" + e;
        const t = e.indexOf("\n");
        return -1 === t ? e : e.substring(0, t)
      }
      const gn = en({
        __forward_ref__: en
      });

      function mn(n) {
        return n.__forward_ref__ = mn, n.toString = function() {
          return fn(this())
        }, n
      }

      function bn(n) {
        return "function" == typeof(e = n) && e.hasOwnProperty(gn) && e.__forward_ref__ === mn ? n() : n;
        var e
      }
      const vn = "undefined" != typeof globalThis && globalThis,
        $n = "undefined" != typeof window && window,
        wn = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        yn = "undefined" != typeof global && global,
        xn = vn || yn || $n || wn,
        kn = en({
          "\u0275cmp": en
        }),
        Cn = en({
          "\u0275dir": en
        }),
        _n = en({
          "\u0275pipe": en
        }),
        zn = en({
          "\u0275mod": en
        }),
        An = en({
          "\u0275loc": en
        }),
        Sn = en({
          "\u0275fac": en
        }),
        In = en({
          __NG_ELEMENT_ID__: en
        });
      class En {
        constructor(n, e) {
          this._desc = n, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = on({
            token: this,
            providedIn: e.providedIn || "root",
            factory: e.factory
          }))
        }
        toString() {
          return `InjectionToken ${this._desc}`
        }
      }
      const Pn = new En("INJECTOR", -1),
        Tn = {},
        Mn = /\n/gm,
        On = en({
          provide: String,
          useValue: en
        });
      let Rn, Nn = void 0;

      function Dn(n) {
        const e = Nn;
        return Nn = n, e
      }

      function Fn(n) {
        const e = Rn;
        return Rn = n, e
      }

      function jn(n, e = nn.Default) {
        if (void 0 === Nn) throw new Error("inject() must be called from an injection context");
        return null === Nn ? Bn(n, void 0, e) : Nn.get(n, e & nn.Optional ? null : void 0, e)
      }

      function Vn(n, e = nn.Default) {
        return (Rn || jn)(bn(n), e)
      }

      function Bn(n, e, t) {
        const o = sn(n);
        if (o && "root" == o.providedIn) return void 0 === o.value ? o.value = o.factory() : o.value;
        if (t & nn.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${fn(n)}]`)
      }

      function qn(n) {
        const e = [];
        for (let t = 0; t < n.length; t++) {
          const o = bn(n[t]);
          if (Array.isArray(o)) {
            if (0 === o.length) throw new Error("Arguments array must have arguments.");
            let n = void 0,
              t = nn.Default;
            for (let e = 0; e < o.length; e++) {
              const r = o[e];
              r instanceof X || "Optional" === r.ngMetadataName || r === X ? t |= nn.Optional : r instanceof J || "SkipSelf" === r.ngMetadataName || r === J ? t |= nn.SkipSelf : r instanceof Q || "Self" === r.ngMetadataName || r === Q ? t |= nn.Self : n = r instanceof Z || r === Z ? r.token : r
            }
            e.push(Vn(n, t))
          } else e.push(Vn(o))
        }
        return e
      }
      class Hn {
        get(n, e = Tn) {
          if (e === Tn) {
            const e = new Error(`NullInjectorError: No provider for ${fn(n)}!`);
            throw e.name = "NullInjectorError", e
          }
          return e
        }
      }
      class Ln {}

      function Wn(n, e) {
        n.forEach(n => Array.isArray(n) ? Wn(n, e) : e(n))
      }

      function Un(n, e, t) {
        e >= n.length ? n.push(t) : n.splice(e, 0, t)
      }

      function Kn(n, e) {
        return e >= n.length - 1 ? n.pop() : n.splice(e, 1)[0]
      }

      function Yn(n, e) {
        const t = [];
        for (let o = 0; o < n; o++) t.push(e);
        return t
      }
      const Gn = function() {
          var n = {
            OnPush: 0,
            Default: 1
          };
          return n[n.OnPush] = "OnPush", n[n.Default] = "Default", n
        }(),
        Zn = function() {
          var n = {
            Emulated: 0,
            Native: 1,
            None: 2,
            ShadowDom: 3
          };
          return n[n.Emulated] = "Emulated", n[n.Native] = "Native", n[n.None] = "None", n[n.ShadowDom] = "ShadowDom", n
        }();

      function Xn(n) {
        return "" + {
          toString: n
        }
      }
      const Qn = {},
        Jn = [];
      let ne = 0;

      function ee(n) {
        const e = n.type,
          t = e.prototype,
          o = {},
          r = {
            type: e,
            providersResolver: null,
            decls: n.decls,
            vars: n.vars,
            factory: null,
            template: n.template || null,
            consts: n.consts || null,
            ngContentSelectors: n.ngContentSelectors,
            hostBindings: n.hostBindings || null,
            contentQueries: n.contentQueries || null,
            declaredInputs: o,
            inputs: null,
            outputs: null,
            exportAs: n.exportAs || null,
            onChanges: null,
            onInit: t.ngOnInit || null,
            doCheck: t.ngDoCheck || null,
            afterContentInit: t.ngAfterContentInit || null,
            afterContentChecked: t.ngAfterContentChecked || null,
            afterViewInit: t.ngAfterViewInit || null,
            afterViewChecked: t.ngAfterViewChecked || null,
            onDestroy: t.ngOnDestroy || null,
            onPush: n.changeDetection === Gn.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            selectors: n.selectors || Jn,
            viewQuery: n.viewQuery || null,
            features: n.features || null,
            data: n.data || {},
            encapsulation: n.encapsulation || Zn.Emulated,
            id: "c",
            styles: n.styles || Jn,
            _: null,
            setInput: null,
            schemas: n.schemas || null,
            tView: null
          };
        return r._ = Xn(() => {
          const e = n.directives,
            t = n.features,
            i = n.pipes;
          r.id += ne++, r.inputs = se(n.inputs, o), r.outputs = se(n.outputs), t && t.forEach(n => n(r)), r.directiveDefs = e ? () => ("function" == typeof e ? e() : e).map(te) : null, r.pipeDefs = i ? () => ("function" == typeof i ? i() : i).map(oe) : null
        }), r
      }

      function te(n) {
        return le(n) || function(n) {
          return n[Cn] || null
        }(n)
      }

      function oe(n) {
        return function(n) {
          return n[_n] || null
        }(n)
      }
      const re = {};

      function ie(n) {
        const e = {
          type: n.type,
          bootstrap: n.bootstrap || Jn,
          declarations: n.declarations || Jn,
          imports: n.imports || Jn,
          exports: n.exports || Jn,
          transitiveCompileScopes: null,
          schemas: n.schemas || null,
          id: n.id || null
        };
        return null != n.id && Xn(() => {
          re[n.id] = n.type
        }), e
      }

      function se(n, e) {
        if (null == n) return Qn;
        const t = {};
        for (const o in n)
          if (n.hasOwnProperty(o)) {
            let r = n[o],
              i = r;
            Array.isArray(r) && (i = r[1], r = r[0]), t[r] = o, e && (e[r] = i)
          } return t
      }
      const ae = ee;

      function le(n) {
        return n[kn] || null
      }

      function ce(n, e) {
        return n.hasOwnProperty(Sn) ? n[Sn] : null
      }

      function de(n, e) {
        const t = n[zn] || null;
        if (!t && !0 === e) throw new Error(`Type ${fn(n)} does not have '\u0275mod' property.`);
        return t
      }

      function ue(n) {
        return Array.isArray(n) && "object" == typeof n[1]
      }

      function pe(n) {
        return Array.isArray(n) && !0 === n[1]
      }

      function he(n) {
        return 0 != (8 & n.flags)
      }

      function fe(n) {
        return 2 == (2 & n.flags)
      }

      function ge(n) {
        return 1 == (1 & n.flags)
      }

      function me(n) {
        return null !== n.template
      }

      function be(n) {
        return 0 != (512 & n[2])
      }
      const ve = {
        lFrame: Le(null),
        bindingsEnabled: !0,
        elementExitFn: null,
        checkNoChangesMode: !1
      };

      function $e(n) {
        ve.lFrame.currentDirectiveDef = n
      }

      function we() {
        return ve.bindingsEnabled
      }

      function ye() {
        const n = ve.lFrame;
        return null === n ? null : n.lView
      }

      function xe(n) {
        return (ve.lFrame.selectedIndex & n) === n
      }

      function ke(n) {
        xe(1) && Ce(), Ke(null === n ? -1 : n), ve.lFrame.activeDirectiveId = 0
      }

      function Ce() {
        ve.elementExitFn(), ve.lFrame.selectedIndex &= -2
      }

      function _e(n) {
        ve.lFrame.selectedIndex |= 1, null === ve.elementExitFn && (ve.elementExitFn = n)
      }

      function ze() {
        return ve.lFrame.activeDirectiveId
      }

      function Ae() {
        ve.lFrame.activeDirectiveId += 1
      }

      function Se(n) {
        ve.lFrame.contextLView = n
      }

      function Ie() {
        return ve.lFrame.previousOrParentTNode
      }

      function Ee(n, e) {
        ve.lFrame.previousOrParentTNode = n, ve.lFrame.isParent = e
      }

      function Pe() {
        return ve.lFrame.isParent
      }

      function Te() {
        return ve.checkNoChangesMode
      }

      function Me(n) {
        ve.checkNoChangesMode = n
      }

      function Oe() {
        const n = ve.lFrame;
        let e = n.bindingRootIndex;
        return -1 === e && (e = n.bindingRootIndex = n.lView[1].bindingStartIndex), e
      }

      function Re(n) {
        return ve.lFrame.bindingIndex = n
      }

      function Ne() {
        return ve.lFrame.bindingIndex++
      }

      function De(n) {
        ve.lFrame.bindingRootIndex = n
      }

      function Fe() {
        return ve.lFrame.currentQueryIndex
      }

      function je(n) {
        ve.lFrame.currentQueryIndex = n
      }

      function Ve(n, e) {
        const t = He();
        ve.lFrame = t, t.previousOrParentTNode = e, t.lView = n
      }
      const Be = We;

      function qe(n, e) {
        const t = He();
        ve.lFrame = t, t.previousOrParentTNode = e, t.isParent = !0, t.lView = n, t.selectedIndex = 0, t.contextLView = n, t.elementDepthCount = 0, t.currentNamespace = null, t.currentSanitizer = null, t.currentDirectiveDef = null, t.activeDirectiveId = 0, t.bindingRootIndex = -1, t.bindingIndex = null === n ? -1 : n[1].bindingStartIndex, t.currentQueryIndex = 0
      }

      function He() {
        const n = ve.lFrame,
          e = null === n ? null : n.child;
        return null === e ? Le(n) : e
      }

      function Le(n) {
        const e = {
          previousOrParentTNode: null,
          isParent: !0,
          lView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentSanitizer: null,
          currentDirectiveDef: null,
          activeDirectiveId: 0,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: n,
          child: null
        };
        return null !== n && (n.child = e), e
      }

      function We() {
        ve.lFrame = ve.lFrame.parent
      }

      function Ue() {
        return ve.lFrame.selectedIndex >> 1
      }

      function Ke(n) {
        ve.lFrame.selectedIndex = n << 1
      }

      function Ye() {
        const n = ve.lFrame;
        return null === n ? null : n.currentSanitizer
      }

      function Ge(n, e) {
        for (let t = e.directiveStart, o = e.directiveEnd; t < o; t++) {
          const e = n.data[t];
          e.afterContentInit && (n.contentHooks || (n.contentHooks = [])).push(-t, e.afterContentInit), e.afterContentChecked && ((n.contentHooks || (n.contentHooks = [])).push(t, e.afterContentChecked), (n.contentCheckHooks || (n.contentCheckHooks = [])).push(t, e.afterContentChecked)), e.afterViewInit && (n.viewHooks || (n.viewHooks = [])).push(-t, e.afterViewInit), e.afterViewChecked && ((n.viewHooks || (n.viewHooks = [])).push(t, e.afterViewChecked), (n.viewCheckHooks || (n.viewCheckHooks = [])).push(t, e.afterViewChecked)), null != e.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(t, e.onDestroy)
        }
      }

      function Ze(n, e, t) {
        Je(n, e, 3, t)
      }

      function Xe(n, e, t, o) {
        (3 & n[2]) === t && Je(n, e, t, o)
      }

      function Qe(n, e) {
        let t = n[2];
        (3 & t) === e && (t &= 1023, t += 1, n[2] = t)
      }

      function Je(n, e, t, o) {
        const r = null != o ? o : -1;
        let i = 0;
        for (let s = void 0 !== o ? 65535 & n[18] : 0; s < e.length; s++)
          if ("number" == typeof e[s + 1]) {
            if (i = e[s], null != o && i >= o) break
          } else e[s] < 0 && (n[18] += 65536), (i < r || -1 == r) && (nt(n, t, e, s), n[18] = (4294901760 & n[18]) + s + 2), s++
      }

      function nt(n, e, t, o) {
        const r = t[o] < 0,
          i = t[o + 1],
          s = n[r ? -t[o] : t[o]];
        r ? n[2] >> 10 < n[18] >> 16 && (3 & n[2]) === e && (n[2] += 1024, i.call(s)) : i.call(s)
      }
      class et {
        constructor(n, e, t) {
          this.factory = n, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = t
        }
      }
      let tt = void 0;

      function ot() {
        return void 0 !== tt ? tt : "undefined" != typeof document ? document : void 0
      }
      const rt = function() {
        var n = {
          Important: 1,
          DashCase: 2
        };
        return n[n.Important] = "Important", n[n.DashCase] = "DashCase", n
      }();

      function it(n) {
        return !!n.listen
      }
      const st = {
        createRenderer: (n, e) => ot()
      };

      function at(n, e, t) {
        const o = it(n);
        let r = 0;
        for (; r < t.length;) {
          const i = t[r];
          if ("number" == typeof i) {
            if (0 !== i) break;
            r++;
            const s = t[r++],
              a = t[r++],
              l = t[r++];
            o ? n.setAttribute(e, a, l, s) : e.setAttributeNS(s, a, l)
          } else {
            const s = i,
              a = t[++r];
            lt(s) ? o && n.setProperty(e, s, a) : o ? n.setAttribute(e, s, a) : e.setAttribute(s, a), r++
          }
        }
        return r
      }

      function lt(n) {
        return 64 === n.charCodeAt(0)
      }

      function ct(n) {
        return -1 !== n
      }

      function dt(n) {
        return 32767 & n
      }

      function ut(n) {
        return n >> 16
      }

      function pt(n, e) {
        let t = ut(n),
          o = e;
        for (; t > 0;) o = o[15], t--;
        return o
      }

      function ht(n) {
        return "string" == typeof n ? n : null == n ? "" : "" + n
      }

      function ft(n) {
        return "function" == typeof n ? n.name || n.toString() : "object" == typeof n && null != n && "function" == typeof n.type ? n.type.name || n.type.toString() : ht(n)
      }
      const gt = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(xn))();

      function mt(n) {
        return {
          name: "document",
          target: n.ownerDocument
        }
      }

      function bt(n) {
        return n instanceof Function ? n() : n
      }
      class vt {
        constructor(n) {
          this.changingThisBreaksApplicationSecurity = n
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)"
        }
      }
      class $t extends vt {
        getTypeName() {
          return "HTML"
        }
      }
      class wt extends vt {
        getTypeName() {
          return "Style"
        }
      }
      class yt extends vt {
        getTypeName() {
          return "Script"
        }
      }
      class xt extends vt {
        getTypeName() {
          return "URL"
        }
      }
      class kt extends vt {
        getTypeName() {
          return "ResourceURL"
        }
      }

      function Ct(n) {
        return n instanceof vt ? n.changingThisBreaksApplicationSecurity : n
      }

      function _t(n, e) {
        const t = zt(n);
        if (null != t && t !== e) {
          if ("ResourceURL" === t && "URL" === e) return !0;
          throw new Error(`Required a safe ${e}, got a ${t} (see http://g.co/ng/security#xss)`)
        }
        return t === e
      }

      function zt(n) {
        return n instanceof vt && n.getTypeName() || null
      }
      const At = {};

      function St(n) {
        return [n]
      }

      function It(n, e) {
        return 0 != (n.flags & e)
      }

      function Et(n, e, t) {
        let o = !1;
        if (It(n, 128)) {
          if (!t) {
            const t = It(n, e ? 8192 : 262144),
              r = e ? 1536 : 49152,
              i = (n.flags & r) !== r;
            o = !t && i
          }
        } else o = !0;
        return o
      }

      function Pt(n, e) {
        n.flags |= e
      }

      function Tt(n, e) {
        return n[e + 3]
      }

      function Mt(n, e) {
        return 0 != (1 & function(n, e) {
          return 1 & n[e + 0]
        }(n, e))
      }

      function Ot(n, e, t) {
        return n[e + (t ? 2 : 1)]
      }

      function Rt(n) {
        return Nt(n) + 1
      }

      function Nt(n) {
        return n[0]
      }

      function Dt(n, e, t) {
        return n[e + 4 + t]
      }

      function Ft(n, e) {
        return n[e + 4 + Nt(n)]
      }

      function jt(n, e, t) {
        n[e] = t
      }

      function Vt(n, e) {
        return 0 !== e ? n[e] : null
      }

      function Bt(n, e) {
        if (e === At) return !1;
        const t = Array.isArray(n) ? n[0] : n,
          o = Array.isArray(e) ? e[0] : e;
        return !Object.is(t, o)
      }

      function qt(n) {
        return null != n && "" !== n
      }

      function Ht(n, e, t = " ") {
        return n + (e.length && n.length ? t : "") + e
      }

      function Lt(n) {
        return n.replace(/[a-z][A-Z]/g, n => n.charAt(0) + "-" + n.charAt(1)).toLowerCase()
      }

      function Wt(n) {
        return Ut(n) ? n[1] : n
      }

      function Ut(n) {
        return Array.isArray(n) && n.length >= 2 && "string" != typeof n[1]
      }

      function Kt(n) {
        const e = Wt(n);
        return e && e[0] || ""
      }

      function Yt(n) {
        return 0 != (16 & n.flags)
      }

      function Gt(n, e) {
        return n[e + 0]
      }
      const Zt = {
        MAP_DIRTY_VALUE: !0
      };

      function Xt(n) {
        n[0] = Zt
      }

      function Qt(n, e, t) {
        n[e + 1] = t
      }

      function Jt(n, e) {
        return n[e + 1]
      }

      function no(n, e) {
        if ("string" == typeof n) return n;
        let t = "";
        if (n) {
          const o = Object.keys(n);
          for (let r = 0; r < o.length; r++) {
            const i = o[r],
              s = e ? Lt(i) : i,
              a = n[i];
            null !== a && (t = Ht(t, `${s}:${a}`, ";"))
          }
        }
        return t
      }

      function eo(n) {
        return 0 !== n
      }

      function to(n, e) {
        let t = "";
        for (let o = 1; o < n.length; o += 2) {
          const r = Gt(n, o),
            i = Jt(n, o),
            s = Ht(r, e ? "" : i, ":");
          t = Ht(t, s, e ? " " : "; ")
        }
        return t
      }

      function oo(n, e, t, o) {
        for (let r = 1; r < n.length; r += 2) {
          const i = Gt(n, r);
          if (e <= i) {
            let s = !1;
            if (i === e) {
              const e = n[r];
              !o && qt(e) || (s = !0, Qt(n, r, t))
            } else s = !0, n.splice(r, 0, e, t);
            return s
          }
        }
        return n.push(e, t), !0
      }

      function ro(n, e, t) {
        const o = Array.isArray(n) ? n : St(null);
        o[0] = e;
        for (let a = 1; a < o.length; a += 2) Qt(o, a, null);
        let r, i = null,
          s = !1;
        if ("string" == typeof e ? (i = function(n) {
            let e = null,
              t = n.length,
              o = 0,
              r = !1;
            for (let i = 0; i < t; i++) n.charCodeAt(i) <= 32 ? (r && (null === e && (e = []), e.push(n.substring(o, i)), r = !1), o = i + 1) : r = !0;
            return r && (null === e && (e = []), e.push(n.substring(o, t)), r = !1), e
          }(e), s = null !== i) : (i = e ? Object.keys(e) : null, r = e), i)
          for (let a = 0; a < i.length; a++) {
            const n = i[a];
            oo(o, t ? Lt(n) : n, !!s || r[n], !0)
          }
        return o
      }

      function io(n) {
        return n.hasOwnProperty("class") ? "class" : "className"
      }
      let so = !0;

      function ao(n) {
        const e = so;
        return so = n, e
      }
      let lo = 0;

      function co(n, e) {
        const t = po(n, e);
        if (-1 !== t) return t;
        const o = e[1];
        o.firstCreatePass && (n.injectorIndex = e.length, uo(o.data, n), uo(e, null), uo(o.blueprint, null));
        const r = ho(n, e),
          i = n.injectorIndex;
        if (ct(r)) {
          const n = dt(r),
            t = pt(r, e),
            o = t[1].data;
          for (let r = 0; r < 8; r++) e[i + r] = t[n + r] | o[n + r]
        }
        return e[i + 8] = r, i
      }

      function uo(n, e) {
        n.push(0, 0, 0, 0, 0, 0, 0, 0, e)
      }

      function po(n, e) {
        return -1 === n.injectorIndex || n.parent && n.parent.injectorIndex === n.injectorIndex || null == e[n.injectorIndex + 8] ? -1 : n.injectorIndex
      }

      function ho(n, e) {
        if (n.parent && -1 !== n.parent.injectorIndex) return n.parent.injectorIndex;
        let t = e[6],
          o = 1;
        for (; t && -1 === t.injectorIndex;) t = (e = e[15]) ? e[6] : null, o++;
        return t ? t.injectorIndex | o << 16 : -1
      }

      function fo(n, e, t) {
        ! function(n, e, t) {
          let o = "string" != typeof t ? t[In] : t.charCodeAt(0) || 0;
          null == o && (o = t[In] = lo++);
          const r = 255 & o,
            i = 1 << r,
            s = 64 & r,
            a = 32 & r,
            l = e.data;
          128 & r ? s ? a ? l[n + 7] |= i : l[n + 6] |= i : a ? l[n + 5] |= i : l[n + 4] |= i : s ? a ? l[n + 3] |= i : l[n + 2] |= i : a ? l[n + 1] |= i : l[n] |= i
        }(n, e, t)
      }

      function go(n, e, t, o = nn.Default, r) {
        if (null !== n) {
          const r = function(n) {
            if ("string" == typeof n) return n.charCodeAt(0) || 0;
            const e = n[In];
            return "number" == typeof e && e > 0 ? 255 & e : e
          }(t);
          if ("function" == typeof r) {
            Ve(e, n);
            try {
              const n = r();
              if (null != n || o & nn.Optional) return n;
              throw new Error(`No provider for ${ft(t)}!`)
            } finally {
              Be()
            }
          } else if ("number" == typeof r) {
            if (-1 === r) return new xo(n, e);
            let i = null,
              s = po(n, e),
              a = -1,
              l = o & nn.Host ? e[16][6] : null;
            for ((-1 === s || o & nn.SkipSelf) && (a = -1 === s ? ho(n, e) : e[s + 8], yo(o, !1) ? (i = e[1], s = dt(a), e = pt(a, e)) : s = -1); - 1 !== s;) {
              a = e[s + 8];
              const n = e[1];
              if (wo(r, s, n.data)) {
                const n = bo(s, e, t, i, o, l);
                if (n !== mo) return n
              }
              yo(o, e[1].data[s + 8] === l) && wo(r, s, e) ? (i = n, s = dt(a), e = pt(a, e)) : s = -1
            }
          }
        }
        if (o & nn.Optional && void 0 === r && (r = null), 0 == (o & (nn.Self | nn.Host))) {
          const n = e[9],
            i = Fn(void 0);
          try {
            return n ? n.get(t, r, o & nn.Optional) : Bn(t, r, o & nn.Optional)
          } finally {
            Fn(i)
          }
        }
        if (o & nn.Optional) return r;
        throw new Error(`NodeInjector: NOT_FOUND [${ft(t)}]`)
      }
      const mo = {};

      function bo(n, e, t, o, r, i) {
        const s = e[1],
          a = s.data[n + 8],
          l = vo(a, s, t, null == o ? fe(a) && so : o != s && 3 === a.type, r & nn.Host && i === a);
        return null !== l ? $o(e, s, l, a) : mo
      }

      function vo(n, e, t, o, r) {
        const i = n.providerIndexes,
          s = e.data,
          a = 65535 & i,
          l = n.directiveStart,
          c = i >> 16,
          d = r ? a + c : n.directiveEnd;
        for (let u = o ? a : a + c; u < d; u++) {
          const n = s[u];
          if (u < l && t === n || u >= l && n.type === t) return u
        }
        if (r) {
          const n = s[l];
          if (n && me(n) && n.type === t) return l
        }
        return null
      }

      function $o(n, e, t, o) {
        let r = n[t];
        const i = e.data;
        if (r instanceof et) {
          const s = r;
          if (s.resolving) throw new Error(`Circular dep for ${ft(i[t])}`);
          const a = ao(s.canSeeViewProviders);
          let l;
          s.resolving = !0, s.injectImpl && (l = Fn(s.injectImpl)), Ve(n, o);
          try {
            r = n[t] = s.factory(void 0, i, n, o), e.firstCreatePass && t >= o.directiveStart && function(n, e, t) {
              const {
                onChanges: o,
                onInit: r,
                doCheck: i
              } = e;
              o && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n, o), (t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n, o)), r && (t.preOrderHooks || (t.preOrderHooks = [])).push(-n, r), i && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n, i), (t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n, i))
            }(t, i[t], e)
          } finally {
            s.injectImpl && Fn(l), ao(a), s.resolving = !1, Be()
          }
        }
        return r
      }

      function wo(n, e, t) {
        const o = 64 & n,
          r = 32 & n;
        let i;
        return i = 128 & n ? o ? r ? t[e + 7] : t[e + 6] : r ? t[e + 5] : t[e + 4] : o ? r ? t[e + 3] : t[e + 2] : r ? t[e + 1] : t[e], !!(i & 1 << n)
      }

      function yo(n, e) {
        return !(n & nn.Self || n & nn.Host && e)
      }
      class xo {
        constructor(n, e) {
          this._tNode = n, this._lView = e
        }
        get(n, e) {
          return go(this._tNode, this._lView, n, void 0, e)
        }
      }

      function ko(n) {
        return n.ngDebugContext
      }

      function Co(n) {
        return n.ngOriginalError
      }

      function _o(n, ...e) {
        n.error(...e)
      }
      class zo {
        constructor() {
          this._console = console
        }
        handleError(n) {
          const e = this._findOriginalError(n),
            t = this._findContext(n),
            o = function(n) {
              return n.ngErrorLogger || _o
            }(n);
          o(this._console, "ERROR", n), e && o(this._console, "ORIGINAL ERROR", e), t && o(this._console, "ERROR CONTEXT", t)
        }
        _findContext(n) {
          return n ? ko(n) ? ko(n) : this._findContext(Co(n)) : null
        }
        _findOriginalError(n) {
          let e = Co(n);
          for (; e && Co(e);) e = Co(e);
          return e
        }
      }
      let Ao = !0,
        So = !1;

      function Io() {
        return So = !0, Ao
      }
      class Eo {
        constructor(n) {
          this.defaultDoc = n, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
          let e = this.inertDocument.body;
          if (null == e) {
            const n = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(n), e = this.inertDocument.createElement("body"), n.appendChild(e)
          }
          e.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !e.querySelector || e.querySelector("svg") ? (e.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = e.querySelector && e.querySelector("svg img") && function() {
            try {
              return !!window.DOMParser
            } catch (n) {
              return !1
            }
          }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
        }
        getInertBodyElement_XHR(n) {
          n = "<body><remove></remove>" + n + "</body>";
          try {
            n = encodeURI(n)
          } catch (o) {
            return null
          }
          const e = new XMLHttpRequest;
          e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + n, !1), e.send(void 0);
          const t = e.response.body;
          return t.removeChild(t.firstChild), t
        }
        getInertBodyElement_DOMParser(n) {
          n = "<body><remove></remove>" + n + "</body>";
          try {
            const e = (new window.DOMParser).parseFromString(n, "text/html").body;
            return e.removeChild(e.firstChild), e
          } catch (e) {
            return null
          }
        }
        getInertBodyElement_InertDocument(n) {
          const e = this.inertDocument.createElement("template");
          if ("content" in e) return e.innerHTML = n, e;
          const t = this.inertDocument.createElement("body");
          return t.innerHTML = n, this.defaultDoc.documentMode && this.stripCustomNsAttrs(t), t
        }
        stripCustomNsAttrs(n) {
          const e = n.attributes;
          for (let o = e.length - 1; 0 < o; o--) {
            const t = e.item(o).name;
            "xmlns:ns1" !== t && 0 !== t.indexOf("ns1:") || n.removeAttribute(t)
          }
          let t = n.firstChild;
          for (; t;) t.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(t), t = t.nextSibling
        }
      }
      const Po = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        To = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

      function Mo(n) {
        return (n = String(n)).match(Po) || n.match(To) ? n : (Io() && console.warn(`WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`), "unsafe:" + n)
      }

      function Oo(n) {
        const e = {};
        for (const t of n.split(",")) e[t] = !0;
        return e
      }

      function Ro(...n) {
        const e = {};
        for (const t of n)
          for (const n in t) t.hasOwnProperty(n) && (e[n] = !0);
        return e
      }
      const No = Oo("area,br,col,hr,img,wbr"),
        Do = Oo("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        Fo = Oo("rp,rt"),
        jo = Ro(Fo, Do),
        Vo = Ro(No, Ro(Do, Oo("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Ro(Fo, Oo("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), jo),
        Bo = Oo("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        qo = Oo("srcset"),
        Ho = Ro(Bo, qo, Oo("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Oo("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
        Lo = Oo("script,style,template");
      class Wo {
        constructor() {
          this.sanitizedSomething = !1, this.buf = []
        }
        sanitizeChildren(n) {
          let e = n.firstChild,
            t = !0;
          for (; e;)
            if (e.nodeType === Node.ELEMENT_NODE ? t = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, t && e.firstChild) e = e.firstChild;
            else
              for (; e;) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let n = this.checkClobberedElement(e, e.nextSibling);
                if (n) {
                  e = n;
                  break
                }
                e = this.checkClobberedElement(e, e.parentNode)
              }
          return this.buf.join("")
        }
        startElement(n) {
          const e = n.nodeName.toLowerCase();
          if (!Vo.hasOwnProperty(e)) return this.sanitizedSomething = !0, !Lo.hasOwnProperty(e);
          this.buf.push("<"), this.buf.push(e);
          const t = n.attributes;
          for (let r = 0; r < t.length; r++) {
            const n = t.item(r),
              e = n.name,
              i = e.toLowerCase();
            if (!Ho.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue
            }
            let s = n.value;
            Bo[i] && (s = Mo(s)), qo[i] && (o = s, s = (o = String(o)).split(",").map(n => Mo(n.trim())).join(", ")), this.buf.push(" ", e, '="', Yo(s), '"')
          }
          var o;
          return this.buf.push(">"), !0
        }
        endElement(n) {
          const e = n.nodeName.toLowerCase();
          Vo.hasOwnProperty(e) && !No.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
        }
        chars(n) {
          this.buf.push(Yo(n))
        }
        checkClobberedElement(n, e) {
          if (e && (n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`);
          return e
        }
      }
      const Uo = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Ko = /([^\#-~ |!])/g;

      function Yo(n) {
        return n.replace(/&/g, "&amp;").replace(Uo, (function(n) {
          return "&#" + (1024 * (n.charCodeAt(0) - 55296) + (n.charCodeAt(1) - 56320) + 65536) + ";"
        })).replace(Ko, (function(n) {
          return "&#" + n.charCodeAt(0) + ";"
        })).replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      let Go;

      function Zo(n, e) {
        let t = null;
        try {
          Go = Go || new Eo(n);
          let o = e ? String(e) : "";
          t = Go.getInertBodyElement(o);
          let r = 5,
            i = o;
          do {
            if (0 === r) throw new Error("Failed to sanitize html because the input is unstable");
            r--, o = i, i = t.innerHTML, t = Go.getInertBodyElement(o)
          } while (o !== i);
          const s = new Wo,
            a = s.sanitizeChildren(Xo(t) || t);
          return Io() && s.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), a
        } finally {
          if (t) {
            const n = Xo(t) || t;
            for (; n.firstChild;) n.removeChild(n.firstChild)
          }
        }
      }

      function Xo(n) {
        return "content" in n && function(n) {
          return n.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === n.nodeName
        }(n) ? n.content : null
      }
      const Qo = function() {
          var n = {
            NONE: 0,
            HTML: 1,
            STYLE: 2,
            SCRIPT: 3,
            URL: 4,
            RESOURCE_URL: 5
          };
          return n[n.NONE] = "NONE", n[n.HTML] = "HTML", n[n.STYLE] = "STYLE", n[n.SCRIPT] = "SCRIPT", n[n.URL] = "URL", n[n.RESOURCE_URL] = "RESOURCE_URL", n
        }(),
        Jo = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
        nr = /^url\(([^)]+)\)$/;

      function er(n) {
        const e = function() {
          const n = ye();
          return n && n[12]
        }();
        return e ? e.sanitize(Qo.HTML, n) || "" : _t(n, "HTML") ? Ct(n) : Zo(ot(), ht(n))
      }

      function tr(n) {
        for (; Array.isArray(n);) n = n[0];
        return n
      }

      function or(n, e) {
        return tr(e[n + 19])
      }

      function rr(n, e) {
        return tr(e[n.index])
      }

      function ir(n, e) {
        return e[1].data[n + 19]
      }

      function sr(n, e) {
        const t = e[n];
        return ue(t) ? t : t[0]
      }

      function ar(n) {
        const e = function(n) {
          return n.__ngContext__ || null
        }(n);
        return e ? Array.isArray(e) ? e : e.lView : null
      }

      function lr(n) {
        return 4 == (4 & n[2])
      }

      function cr(n, e) {
        return null === n || null == e ? null : n[e]
      }

      function dr(n) {
        n[18] = 0
      }

      function ur(n, e) {
        n.__ngContext__ = e
      }

      function pr(n) {
        throw new Error(`Multiple components match node with tagname ${n.tagName}`)
      }

      function hr() {
        throw new Error("Cannot mix multi providers and regular providers")
      }

      function fr(n, e) {
        const t = n.length,
          o = n.toLowerCase().indexOf(e),
          r = o + e.length;
        return !(-1 === o || o > 0 && " " !== n[o - 1] || r < t && " " !== n[r])
      }

      function gr(n, e, t) {
        return e === (0 !== n.type || t ? n.tagName : "ng-template")
      }

      function mr(n, e, t) {
        let o = 4;
        const r = n.attrs || [],
          i = function(n) {
            for (let t = 0; t < n.length; t++)
              if (3 === (e = n[t]) || 4 === e || 6 === e) return t;
            var e;
            return n.length
          }(r);
        let s = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ("number" != typeof l) {
            if (!s)
              if (4 & o) {
                if (o = 2 | 1 & o, "" !== l && !gr(n, l, t) || "" === l && 1 === e.length) {
                  if (br(o)) return !1;
                  s = !0
                }
              } else {
                const c = 8 & o ? l : e[++a];
                if (8 & o && n.classes) {
                  if (!fr(Kt(n.classes), c)) {
                    if (br(o)) return !1;
                    s = !0
                  }
                  continue
                }
                const d = vr(8 & o ? "class" : l, r, 0 == n.type && "ng-template" !== n.tagName, t);
                if (-1 === d) {
                  if (br(o)) return !1;
                  s = !0;
                  continue
                }
                if ("" !== c) {
                  let n;
                  n = d > i ? "" : r[d + 1].toLowerCase();
                  const e = 8 & o ? n : null;
                  if (e && !fr(e, c) || 2 & o && c !== n) {
                    if (br(o)) return !1;
                    s = !0
                  }
                }
              }
          } else {
            if (!s && !br(o) && !br(l)) return !1;
            if (s && br(l)) continue;
            s = !1, o = l | 1 & o
          }
        }
        return br(o) || s
      }

      function br(n) {
        return 0 == (1 & n)
      }

      function vr(n, e, t, o) {
        if (null === e) return -1;
        let r = 0;
        if (o || !t) {
          let t = !1;
          for (; r < e.length;) {
            const o = e[r];
            if (o === n) return r;
            if (3 === o || 6 === o) t = !0;
            else {
              if (1 === o || 2 === o) {
                let n = e[++r];
                for (;
                  "string" == typeof n;) n = e[++r];
                continue
              }
              if (4 === o) break;
              if (0 === o) {
                r += 4;
                continue
              }
            }
            r += t ? 1 : 2
          }
          return -1
        }
        return function(n, e) {
          let t = n.indexOf(4);
          if (t > -1)
            for (t++; t < n.length;) {
              if (n[t] === e) return t;
              t++
            }
          return -1
        }(e, n)
      }

      function $r(n, e, t = !1) {
        for (let o = 0; o < e.length; o++)
          if (mr(n, e[o], t)) return !0;
        return !1
      }

      function wr(n, e) {
        return n ? ":not(" + e.trim() + ")" : e
      }

      function yr(n) {
        let e = n[0],
          t = 1,
          o = 2,
          r = "",
          i = !1;
        for (; t < n.length;) {
          let s = n[t];
          if ("string" == typeof s)
            if (2 & o) {
              const e = n[++t];
              r += "[" + s + (e.length > 0 ? '="' + e + '"' : "") + "]"
            } else 8 & o ? r += "." + s : 4 & o && (r += " " + s);
          else "" === r || br(s) || (e += wr(i, r), r = ""), o = s, i = i || !br(o);
          t++
        }
        return "" !== r && (e += wr(i, r)), e
      }
      const xr = {
        element: null,
        directiveIndex: -1,
        sourceIndex: -1,
        classesBitMask: -1,
        classesIndex: -1,
        stylesBitMask: -1,
        stylesIndex: -1,
        lastDirectClassMap: null,
        lastDirectStyleMap: null
      };

      function kr(n, e) {
        return xr.element !== n ? (xr.element = n, xr.directiveIndex = e, xr.sourceIndex = 0 === e ? 0 : 1, xr.classesBitMask = 0, xr.classesIndex = 1, xr.stylesBitMask = 0, xr.stylesIndex = 1, xr.lastDirectClassMap = null, xr.lastDirectStyleMap = null) : xr.directiveIndex !== e && (xr.directiveIndex = e, xr.sourceIndex++), xr
      }
      const Cr = {};

      function _r(n, e, t, o, r, i, s, a, l, c) {
        const d = !i,
          u = kr(o, r),
          p = d ? 0 : u.classesIndex++;
        return !(!c && a === At || !Ar(n, e, t, p, u.sourceIndex, i, s, a, l, !1, c, !0) && !l || (u.classesBitMask |= 1 << p, 0))
      }

      function zr(n, e, t, o, r, i, s, a, l, c, d) {
        const u = !i,
          p = kr(o, r),
          h = u ? 0 : p.stylesIndex++;
        if (d || a !== At) {
          const o = !!u || !!l && l(i, null, 1);
          if (Ar(n, e, t, h, p.sourceIndex, i, s, a, c, o, d, !1) || c) return p.stylesBitMask |= 1 << h, !0
        }
        return !1
      }

      function Ar(n, e, t, o, r, i, s, a, l, c, d, u) {
        const p = eo(r),
          h = u ? 4096 : 131072;
        d && Sr(n, e, o, r, i, s, c, u);
        const f = l || Bt(t[s], a);
        return f && (jt(t, s, a), It(e, h) && !p && (!i || !a) && function(n, e, t, o, r) {
          const i = Rt(n);
          if (null !== o && It(e, r ? 4096 : 131072)) {
            const e = 4 + i;
            let r = 2,
              s = !1;
            for (; r < n.length;) {
              if (Tt(n, r) === o) {
                s = !0;
                break
              }
              r += e
            }
            if (s) {
              const e = r + 4,
                o = e + i - 1;
              for (let r = e + 1; r < o; r++) {
                const e = n[r];
                0 !== e && jt(t, e, null)
              }
            }
          }
          if (It(e, r ? 512 : 16384)) {
            const e = 6,
              o = e + i - 1;
            for (let r = e + 1; r < o; r++) {
              const e = Vt(t, n[r]);
              e && Xt(e)
            }
          }
        }(n, e, t, i, u)), f
      }

      function Sr(n, e, t, o, r, i, s, a) {
        let l = !1;
        r = r || "[MAP]";
        let c = Nt(n);
        for (; c <= o;) Pr(n), c++;
        const d = a ? 8192 : 262144,
          u = "number" == typeof i,
          p = 4 + Rt(n);
        let h = 2;
        for (; h < n.length;) {
          const a = Tt(n, h);
          if (r <= a) {
            r < a ? Ir(n, h, r, s) : u && Pt(e, d), Er(n, h, i, t, o), l = !0;
            break
          }
          h += p
        }
        l || (Ir(n, n.length, r, s), Er(n, h, i, t, o))
      }

      function Ir(n, e, t, o) {
        n.splice(e, 0, o ? 1 : 0, 1, 1, t), e += 4;
        const r = Nt(n);
        for (let i = 0; i < r; i++) n.splice(e, 0, 0), e++;
        n.splice(e, 0, null)
      }

      function Er(n, e, t, o, r) {
        if ("number" == typeof t) {
          const i = eo(r);
          n[e + 4 + r] = t,
            function(n, e, t, o) {
              n[e + (o ? 2 : 1)] = t
            }(n, e, Ot(n, e, i) | 1 << o, i)
        } else null !== t && null === Ft(n, e) && function(n, e, t) {
          n[e + 4 + Nt(n)] = t
        }(n, e, t)
      }

      function Pr(n) {
        const e = 4 + Rt(n) - 1;
        let t = 2;
        for (; t < n.length;) t += e, n.splice(t++, 0, 0), t++;
        n[0]++
      }

      function Tr(n, e, t) {
        ! function(n, e, t, o) {
          let r = !1;
          for (let i = 1; i < t.length; i += 2) {
            const s = Jt(t, i);
            s && (Sr(n, e, -1, 0, Gt(t, i), s, !1, o), r = !0)
          }
          r && Pt(e, 256)
        }(n, e, Wt(n), t)
      }

      function Mr(n, e, t, o, r, i, s, a, l, c) {
        const d = !0 === (u = i) ? -1 : !1 === u ? 0 : u;
        var u;
        let p = null,
          h = !1;
        It(e, c ? 512 : 16384) && (p = Dr, h = 0 != (d & Ot(n, 2, l)));
        const f = Rt(n);
        let g = 1,
          m = h ? 1 : 0;
        l && (m |= 8, g = f - 1);
        let b = function(n, e, t) {
          let o = 2;
          return It(e, t ? 512 : 16384) && (o += 4 + Rt(n)), o
        }(n, e, c);
        for (; b < n.length;) {
          if (d & Ot(n, b, l)) {
            let e = !1;
            const i = Tt(n, b),
              c = Ft(n, b);
            for (let d = 0; d < g; d++) {
              const u = Dt(n, b, d);
              if (!e && 0 !== u) {
                const c = Vt(r, u);
                qt(c) && (l && 0 === d || s(t, o, i, a && Mt(n, b) ? a(i, c, 2) : Ct(c), u), e = !0)
              }
              if (p) {
                let u = m | (e ? 4 : 2);
                l && 0 === d && (u |= 16);
                const h = p(n, t, o, r, d, s, a, u, i, c);
                e = e || h
              }
            }
            e || s(t, o, i, c)
          }
          b += 4 + f
        }
        p && (l && (m |= 16), p(n, t, o, r, 0, s, a, m))
      }

      function Or(n, e, t, o, r) {
        let i;
        return o ? (i = "string" == typeof t ? t : function(n) {
          let e = "";
          if (n)
            for (let t in n) n[t] && (e += (e.length ? " " : "") + t);
          return e
        }(t), null !== r && (i = Ht(r, i, " ")), Vr(n, e, i)) : (i = no(t, !0), null !== r && (i = r + ";" + i), Br(n, e, i)), i
      }

      function Rr(n, e, t, o, r, i, s) {
        let a = Ct(o);
        return !!qt(a) && (a = s ? s(t, o, 3) : a, r(n, e, t, a, i), !0)
      }

      function Nr(n, e, t, o, r, i, s) {
        for (let a = 1; a < o.length; a += 2) {
          const l = Gt(o, a);
          if (l === r) {
            let l = Jt(o, a);
            return l = s ? s(r, l, 3) : l, t(n, e, r, l, i), !0
          }
          if (l > r) break
        }
        return !1
      }
      let Dr = null;
      const Fr = (n, e, t, o) => {
          if (null !== n)
            if (qt(o))
              if (o = o.toString(), it(n)) n.setStyle(e, t, o, rt.DashCase);
              else {
                const n = e.style;
                null != n && n.setProperty(t, o)
              }
          else if (it(n)) n.removeStyle(e, t, rt.DashCase);
          else {
            const n = e.style;
            null != n && n.removeProperty(t)
          }
        },
        jr = (n, e, t, o) => {
          if (null !== n && "" !== t)
            if (o)
              if (it(n)) n.addClass(e, t);
              else {
                const n = e.classList;
                null != n && n.add(t)
              }
          else if (it(n)) n.removeClass(e, t);
          else {
            const n = e.classList;
            null != n && n.remove(t)
          }
        },
        Vr = (n, e, t) => {
          null !== n && (it(n) ? n.setAttribute(e, "class", t) : e.className = t)
        },
        Br = (n, e, t) => {
          null !== n && (it(n) ? n.setAttribute(e, "style", t) : e.setAttribute("style", t))
        };

      function qr(n, e, t, o) {
        const r = Wt(t);
        if (r)
          for (let i = 1; i < r.length; i += 2) {
            const t = Gt(r, i),
              s = Jt(r, i);
            o ? jr(n, e, t, s, null) : Fr(n, e, t, s, null)
          }
      }

      function Hr(n) {
        const e = n[3];
        return pe(e) ? e[3] : e
      }

      function Lr(n) {
        Wr(ye(), Ue() + n, Te())
      }

      function Wr(n, e, t) {
        if (xe(1) && Ce(), !t)
          if (3 == (3 & n[2])) {
            const t = n[1].preOrderCheckHooks;
            null !== t && Ze(n, t, e)
          } else {
            const t = n[1].preOrderHooks;
            null !== t && Xe(n, t, 0, e)
          } Ke(e)
      }
      const Ur = (n, e, t, o, r, i, s, a, l, c) => {
        let d = !1;
        if (Rt(n)) {
          let u = !0;
          const p = !l;
          p && 0 == (1 & a) && (u = !1, d = !0), u && (d = function n(e, t, o, r, i, s, a, l, c, d) {
            const u = Rt(e) - 1 - 1,
              p = c < u && 0 != (8 & a),
              h = 0 != (16 & a);
            h && (a &= -17);
            let f = !1;
            if (c <= u) {
              let u = function(n) {
                return n >= Gr.length && Gr.push(1), Gr[n]
              }(c);
              const g = Dt(e, 2, c),
                m = Vt(r, g);
              if (m) {
                for (; u < m.length;) {
                  const b = Gt(m, u),
                    v = l && b > l,
                    $ = !v && b === l,
                    w = Jt(m, u),
                    y = qt(w),
                    x = v ? a : Kr(a, y, $),
                    k = v ? l : b;
                  let C = !!p && n(e, t, o, r, i, s, x, k, c + 1, d);
                  if (v) {
                    f || (f = C);
                    break
                  }
                  if (!C && Yr(a, $) && (C = !0, !h)) {
                    const n = $ ? g : null;
                    let e;
                    e = $ && !y ? d : s ? s(b, w, 3) : w ? Ct(w) : null, i(t, o, b, e, n)
                  }
                  f = C && $, u += 2
                }
                Gr[c] = u, !p || 1 !== m.length && l || (f = n(e, t, o, r, i, s, a, l, c + 1, d))
              } else p && (f = n(e, t, o, r, i, s, a, l, c + 1, d))
            }
            return f
          }(n, e, t, o, i, s, a, l || null, r, c || null)), p && function() {
            for (let n = 0; n < Gr.length; n++) Gr[n] = 1
          }()
        }
        return d
      };

      function Kr(n, e, t) {
        let o = n;
        return !e && (t ? 2 & n : 1 & n) ? (o |= 2, o &= -5) : (o |= 4, o &= -3), o
      }

      function Yr(n, e) {
        let t = 0 != (1 & n);
        return t ? 4 & n && e && (t = !1) : 2 & n && (t = e), t
      }
      const Gr = [];

      function Zr(n, e) {
        const t = n.contentQueries;
        if (null !== t)
          for (let o = 0; o < t.length; o += 2) {
            const r = t[o],
              i = t[o + 1];
            if (-1 !== i) {
              const t = n.data[i];
              je(r), t.contentQueries(2, e[i], i)
            }
          }
      }

      function Xr(n, e, t) {
        return it(e) ? e.createElement(n, t) : null === t ? e.createElement(n) : e.createElementNS(t, n)
      }

      function Qr(n, e, t, o, r, i, s, a, l, c) {
        const d = e.blueprint.slice();
        return d[0] = r, d[2] = 140 | o, dr(d), d[3] = d[15] = n, d[8] = t, d[10] = s || n && n[10], d[11] = a || n && n[11], d[12] = l || n && n[12] || null, d[9] = c || n && n[9] || null, d[6] = i, d[16] = 2 == e.type ? n[16] : d, d
      }

      function Jr(n, e, t, o, r, i) {
        const s = t + 19,
          a = n.data[s] || function(n, e, t, o, r, i) {
            const s = Ie(),
              a = Pe(),
              l = a ? s : s && s.parent,
              c = n.data[t] = li(0, l && l !== e ? l : null, o, t, r, i);
            return null === n.firstChild && (n.firstChild = c), s && (!a || null != s.child || null === c.parent && 2 !== s.type ? a || (s.next = c) : s.child = c), c
          }(n, e, s, o, r, i);
        return Ee(a, !0), a
      }

      function ni(n, e, t) {
        qe(n, n[6]);
        try {
          const o = e.viewQuery;
          null !== o && Ii(1, o, t);
          const r = e.template;
          null !== r && oi(n, r, 1, t), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && Zr(e, n), e.staticViewQueries && Ii(2, e.viewQuery, t);
          const i = e.components;
          null !== i && function(n, e) {
            for (let t = 0; t < e.length; t++) Ci(n, e[t])
          }(n, i)
        } finally {
          n[2] &= -5, We()
        }
      }

      function ei(n, e, t, o) {
        const r = n[2];
        if (256 == (256 & r)) return;
        qe(n, n[6]);
        const i = Te();
        try {
          dr(n), Re(e.bindingStartIndex), null !== t && oi(n, t, 2, o);
          const s = 3 == (3 & r);
          if (!i)
            if (s) {
              const t = e.preOrderCheckHooks;
              null !== t && Ze(n, t, null)
            } else {
              const t = e.preOrderHooks;
              null !== t && Xe(n, t, 0, null), Qe(n, 0)
            } if (function(n) {
              let e = n[13];
              for (; null !== e;) {
                let t;
                if (pe(e) && (t = e[2]) >> 1 == -1) {
                  for (let n = 9; n < e.length; n++) {
                    const t = e[n],
                      o = t[1];
                    ei(t, o, o.template, t[8])
                  }
                  0 != (1 & t) && xi(e, n[16])
                }
                e = e[4]
              }
            }(n), null !== e.contentQueries && Zr(e, n), !i)
            if (s) {
              const t = e.contentCheckHooks;
              null !== t && Ze(n, t)
            } else {
              const t = e.contentHooks;
              null !== t && Xe(n, t, 1), Qe(n, 1)
            }!
          function(n, e) {
            const t = Ue();
            try {
              const o = n.expandoInstructions;
              if (null !== o) {
                let t = Re(n.expandoStartIndex);
                De(t);
                let r = -1,
                  i = -1;
                for (let n = 0; n < o.length; n++) {
                  const s = o[n];
                  "number" == typeof s ? (s <= 0 ? (i = -s, ke(i), t += 9 + o[++n], r = t) : t += s, De(t)) : (null !== s && (Ae(), Re(t), s(2, tr(e[r]), i)), r++)
                }
              }
            } finally {
              ke(t)
            }
          }(e, n);
          const a = e.components;
          null !== a && function(n, e) {
            for (let t = 0; t < e.length; t++) ki(n, e[t])
          }(n, a);
          const l = e.viewQuery;
          if (null !== l && Ii(2, l, o), !i)
            if (s) {
              const t = e.viewCheckHooks;
              null !== t && Ze(n, t)
            } else {
              const t = e.viewHooks;
              null !== t && Xe(n, t, 2), Qe(n, 2)
            }
        } finally {
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1), i || (n[2] &= -73), xe(1) && Ce(), We()
        }
      }

      function ti(n, e, t) {
        const o = n[10],
          r = !Te(),
          i = lr(n);
        try {
          r && !i && o.begin && o.begin();
          const s = n[1];
          i && ni(n, s, t), ei(n, s, e, t)
        } finally {
          r && !i && o.end && o.end()
        }
      }

      function oi(n, e, t, o) {
        const r = Ue();
        try {
          ke(null), 2 & t && n.length > 19 && Wr(n, 0, Te()), e(t, o)
        } finally {
          xe(1) && Ce(), Ke(r)
        }
      }

      function ri(n, e, t) {
        we() && (function(n, e, t, o) {
          const r = t.directiveStart,
            i = t.directiveEnd;
          n.firstCreatePass || co(t, e), ur(o, e);
          const s = t.initialInputs;
          for (let a = r; a < i; a++) {
            const o = n.data[a],
              i = me(o);
            i && vi(e, t, o);
            const l = $o(e, n, a, t);
            ur(l, e), null !== s && $i(0, a - r, l, o, 0, s), i && (sr(t.index, e)[8] = l)
          }
        }(n, e, t, rr(t, e)), 128 == (128 & t.flags) && function(n, e, t) {
          const o = t.directiveStart,
            r = t.directiveEnd,
            i = n.expandoInstructions,
            s = n.firstCreatePass,
            a = t.index - 19;
          try {
            ke(a);
            for (let a = o; a < r; a++) {
              const o = n.data[a],
                r = e[a];
              o.hostBindings ? (Ae(), pi(o, i, r, t, s)) : s && i.push(null)
            }
          } finally {
            ke(null)
          }
        }(n, e, t))
      }

      function ii(n, e, t = rr) {
        const o = e.localNames;
        if (null !== o) {
          let r = e.index + 1;
          for (let i = 0; i < o.length; i += 2) {
            const s = o[i + 1],
              a = -1 === s ? t(e, n) : n[s];
            n[r++] = a
          }
        }
      }

      function si(n) {
        return n.tView || (n.tView = ai(1, -1, n.template, n.decls, n.vars, n.directiveDefs, n.pipeDefs, n.viewQuery, n.schemas, n.consts))
      }

      function ai(n, e, t, o, r, i, s, a, l, c) {
        const d = 19 + o,
          u = d + r,
          p = function(n, e) {
            const t = [];
            for (let o = 0; o < e; o++) t.push(o < n ? null : At);
            return t
          }(d, u);
        return p[1] = {
          type: n,
          id: e,
          blueprint: p,
          template: t,
          queries: null,
          viewQuery: a,
          node: null,
          data: p.slice().fill(null, d),
          bindingStartIndex: d,
          expandoStartIndex: u,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof s ? s() : s,
          firstChild: null,
          schemas: l,
          consts: c
        }
      }

      function li(n, e, t, o, r, i) {
        return {
          type: t,
          index: o,
          injectorIndex: e ? e.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: r,
          attrs: i,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: e,
          projection: null,
          styles: null,
          classes: null
        }
      }

      function ci(n, e, t) {
        for (let o in n)
          if (n.hasOwnProperty(o)) {
            const r = n[o];
            (t = null === t ? {} : t).hasOwnProperty(o) ? t[o].push(e, r) : t[o] = [e, r]
          } return t
      }

      function di(n, e, t, o, r, i, s) {
        const a = or(e, n),
          l = ir(e, n);
        let c, d = l.inputs;
        if (!i && null != d && (c = d[t])) Oi(n, c, t, o), fe(l) && function(n, e) {
          const t = sr(e, n);
          16 & t[2] || (t[2] |= 64)
        }(n, e + 19);
        else if (3 === l.type) {
          t = "class" === (u = t) ? "className" : "for" === u ? "htmlFor" : "formaction" === u ? "formAction" : "innerHtml" === u ? "innerHTML" : "readonly" === u ? "readOnly" : "tabindex" === u ? "tabIndex" : u;
          const e = s ? s(l, n) : n[11];
          o = null != r ? r(o, l.tagName || "", t) : o, it(e) ? e.setProperty(a, t, o) : lt(t) || (a.setProperty ? a.setProperty(t, o) : a[t] = o)
        }
        var u
      }

      function ui(n, e, t, o) {
        if (!we()) return !1;
        const r = function(n, e, t) {
            const o = n.directiveRegistry;
            let r = null;
            if (o)
              for (let i = 0; i < o.length; i++) {
                const s = o[i];
                $r(t, s.selectors, !1) && (r || (r = []), fo(co(t, e), n, s.type), me(s) ? (2 & t.flags && pr(t), fi(n, t), r.unshift(s)) : r.push(s))
              }
            return r
          }(n, e, t),
          i = null === o ? null : {
            "": -1
          };
        let s = !1;
        if (null !== r) {
          s = !0, mi(t, n.data.length, r.length);
          for (let n = 0; n < r.length; n++) {
            const e = r[n];
            e.providersResolver && e.providersResolver(e)
          }
          hi(n, t, r.length);
          let o = !1,
            a = !1;
          for (let s = 0; s < r.length; s++) {
            const l = r[s];
            bi(n, e, l), gi(n.data.length - 1, l, i), null !== l.contentQueries && (t.flags |= 8), null !== l.hostBindings && (t.flags |= 128), !o && (l.onChanges || l.onInit || l.doCheck) && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t.index - 19), o = !0), a || !l.onChanges && !l.doCheck || ((n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t.index - 19), a = !0)
          }! function(n, e) {
            const t = e.directiveEnd,
              o = n.data,
              r = e.attrs,
              i = [];
            let s = null,
              a = null;
            for (let l = e.directiveStart; l < t; l++) {
              const n = o[l],
                e = n.inputs;
              i.push(null !== r ? wi(e, r) : null), s = ci(e, l, s), a = ci(n.outputs, l, a)
            }
            null !== s && ((s.hasOwnProperty("class") || s.hasOwnProperty("className")) && (e.flags |= 16), s.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = i, e.inputs = s, e.outputs = a
          }(n, t)
        }
        return i && function(n, e, t) {
          if (e) {
            const o = n.localNames = [];
            for (let n = 0; n < e.length; n += 2) {
              const r = t[e[n + 1]];
              if (null == r) throw new Error(`Export of name '${e[n+1]}' not found!`);
              o.push(e[n], r)
            }
          }
        }(t, o, i), s
      }

      function pi(n, e, t, o, r) {
        const i = e.length;
        $e(n), n.hostBindings(1, t, o.index - 19), $e(null), i === e.length && r && e.push(n.hostBindings)
      }

      function hi(n, e, t) {
        const o = 19 - e.index,
          r = n.data.length - (65535 & e.providerIndexes);
        (n.expandoInstructions || (n.expandoInstructions = [])).push(o, r, t)
      }

      function fi(n, e) {
        e.flags |= 2, (n.components || (n.components = [])).push(e.index)
      }

      function gi(n, e, t) {
        if (t) {
          if (e.exportAs)
            for (let o = 0; o < e.exportAs.length; o++) t[e.exportAs[o]] = n;
          me(e) && (t[""] = n)
        }
      }

      function mi(n, e, t) {
        n.flags |= 1, n.directiveStart = e, n.directiveEnd = e + t, n.providerIndexes = e
      }

      function bi(n, e, t) {
        n.data.push(t);
        const o = t.factory || (t.factory = ce(t.type)),
          r = new et(o, me(t), null);
        n.blueprint.push(r), e.push(r)
      }

      function vi(n, e, t) {
        const o = rr(e, n),
          r = si(t),
          i = n[10],
          s = _i(n, Qr(n, r, null, t.onPush ? 64 : 16, o, e, i, i.createRenderer(o, t)));
        n[e.index] = s
      }

      function $i(n, e, t, o, r, i) {
        const s = i[e];
        if (null !== s) {
          const n = o.setInput;
          for (let e = 0; e < s.length;) {
            const r = s[e++],
              i = s[e++],
              a = s[e++];
            null !== n ? o.setInput(t, a, r, i) : t[i] = a
          }
        }
      }

      function wi(n, e) {
        let t = null,
          o = 0;
        for (; o < e.length;) {
          const r = e[o];
          if (0 !== r)
            if (5 !== r) {
              if ("number" == typeof r) break;
              n.hasOwnProperty(r) && (null === t && (t = []), t.push(r, n[r], e[o + 1])), o += 2
            } else o += 2;
          else o += 4
        }
        return t
      }

      function yi(n, e, t, o) {
        return new Array(n, !0, -2, e, null, null, o, t, null)
      }

      function xi(n, e) {
        const t = n[5];
        for (let o = 0; o < t.length; o++) {
          const n = t[o],
            r = n[3][3][16];
          if (r !== e && 0 == (16 & r[2])) {
            const e = n[1];
            ei(n, e, e.template, n[8])
          }
        }
      }

      function ki(n, e) {
        const t = sr(e, n);
        if (128 == (128 & t[2]) && 80 & t[2]) {
          const n = t[1];
          ei(t, n, n.template, t[8])
        }
      }

      function Ci(n, e) {
        const t = sr(e, n);
        ! function(n) {
          const e = n[1];
          for (let t = n.length; t < e.blueprint.length; t++) n.push(e.blueprint[t])
        }(t), ni(t, t[1], t[8])
      }

      function _i(n, e) {
        return n[13] ? n[14][4] = e : n[13] = e, n[14] = e, e
      }

      function zi(n) {
        for (; n;) {
          n[2] |= 64;
          const e = Hr(n);
          if (be(n) && !e) return n;
          n = e
        }
        return null
      }

      function Ai(n, e) {
        const t = n[10];
        t.begin && t.begin();
        try {
          const o = n[1];
          ei(n, o, o.template, e)
        } catch (o) {
          throw Mi(n, o), o
        } finally {
          t.end && t.end()
        }
      }

      function Si(n) {
        ! function(n) {
          for (let e = 0; e < n.components.length; e++) {
            const t = n.components[e],
              o = ar(t);
            ti(o, o[1].template, t)
          }
        }(n[8])
      }

      function Ii(n, e, t) {
        je(0), e(n, t)
      }
      const Ei = (() => Promise.resolve(null))();

      function Pi(n) {
        return n[7] || (n[7] = [])
      }

      function Ti(n) {
        return n[1].cleanup || (n[1].cleanup = [])
      }

      function Mi(n, e) {
        const t = n[9],
          o = t ? t.get(zo, null) : null;
        o && o.handleError(e)
      }

      function Oi(n, e, t, o) {
        const r = n[1];
        for (let i = 0; i < e.length;) {
          const s = e[i++],
            a = e[i++],
            l = n[s],
            c = r.data[s];
          null !== c.setInput ? c.setInput(l, o, t, a) : l[a] = o
        }
      }

      function Ri(n, e, t, o) {
        null !== t.classes && (o ? qr(n, e, t.classes, !0) : Or(n, e, Kt(t.classes), !0, null)), null !== t.styles && (o ? qr(n, e, t.styles, !1) : Or(n, e, Kt(t.styles), !1, null))
      }

      function Ni(n, e) {
        const t = e[3];
        return -1 === n.index ? pe(t) ? t : null : t
      }

      function Di(n, e) {
        const t = Ni(n, e);
        return t ? Yi(e[11], t[7]) : null
      }

      function Fi(n, e, t, o, r) {
        if (null != o) {
          let i, s = !1;
          pe(o) ? i = o : ue(o) && (s = !0, o = o[0]);
          const a = tr(o);
          0 === n && null !== t ? null == r ? Ui(e, t, a) : Wi(e, t, a, r || null) : 1 === n && null !== t ? Wi(e, t, a, r || null) : 2 === n ? function(n, e, t) {
            const o = Yi(n, e);
            o && function(n, e, t, o) {
              it(n) ? n.removeChild(e, t, o) : e.removeChild(t)
            }(n, o, e, t)
          }(e, a, s) : 3 === n && e.destroyNode(a), null != i && function(n, e, t, o, r) {
            const i = t[7];
            i !== tr(t) && Fi(e, n, o, i, r);
            for (let s = 9; s < t.length; s++) Qi(n, e, t[s], o, i)
          }(e, n, i, t, r)
        }
      }

      function ji(n, e, t) {
        const o = Di(n[1].node, n);
        o && Qi(n[11], e ? 1 : 2, n, o, t)
      }

      function Vi(n, e) {
        const t = n[5],
          o = t.indexOf(e);
        t.splice(o, 1)
      }

      function Bi(n, e) {
        if (n.length <= 9) return;
        const t = 9 + e,
          o = n[t];
        if (o) {
          const r = o[17];
          null !== r && r !== n && Vi(r, o), e > 0 && (n[t - 1][4] = o[4]);
          const i = Kn(n, 9 + e);
          ji(o, !1, null);
          const s = i[5];
          null !== s && s.detachView(i[1]), o[3] = null, o[4] = null, o[2] &= -129
        }
        return o
      }

      function qi(n) {
        if (!(256 & n[2])) {
          const e = n[11];
          it(e) && e.destroyNode && Qi(e, 3, n, null, null),
            function(n) {
              let e = n[13];
              if (!e) return Li(n);
              for (; e;) {
                let t = null;
                if (ue(e)) t = e[13];
                else {
                  const n = e[9];
                  n && (t = n)
                }
                if (!t) {
                  for (; e && !e[4] && e !== n;) Li(e), e = Hi(e, n);
                  Li(e || n), t = e && e[4]
                }
                e = t
              }
            }(n)
        }
      }

      function Hi(n, e) {
        let t;
        return ue(n) && (t = n[6]) && 2 === t.type ? Ni(t, n) : n[3] === e ? null : n[3]
      }

      function Li(n) {
        if (ue(n) && !(256 & n[2])) {
          n[2] &= -129, n[2] |= 256,
            function(n) {
              const e = n[1];
              let t;
              if (null != e && null != (t = e.destroyHooks))
                for (let o = 0; o < t.length; o += 2) {
                  const e = n[t[o]];
                  e instanceof et || t[o + 1].call(e)
                }
            }(n),
            function(n) {
              const e = n[1].cleanup;
              if (null !== e) {
                const t = n[7];
                for (let o = 0; o < e.length - 1; o += 2)
                  if ("string" == typeof e[o]) {
                    const r = e[o + 1],
                      i = "function" == typeof r ? r(n) : tr(n[r]),
                      s = t[e[o + 2]],
                      a = e[o + 3];
                    "boolean" == typeof a ? i.removeEventListener(e[o], s, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), o += 2
                  } else e[o].call(t[e[o + 1]]);
                n[7] = null
              }
            }(n);
          const e = n[6];
          e && 3 === e.type && it(n[11]) && n[11].destroy();
          const t = n[17];
          if (null !== t && pe(n[3])) {
            t !== n[3] && Vi(t, n);
            const e = n[5];
            null !== e && e.detachView(n[1])
          }
        }
      }

      function Wi(n, e, t, o) {
        it(n) ? n.insertBefore(e, t, o) : e.insertBefore(t, o, !0)
      }

      function Ui(n, e, t) {
        it(n) ? n.appendChild(e, t) : e.appendChild(t)
      }

      function Ki(n, e, t, o) {
        null !== o ? Wi(n, e, t, o) : Ui(n, e, t)
      }

      function Yi(n, e) {
        return it(n) ? n.parentNode(e) : e.parentNode
      }

      function Gi(n, e, t) {
        const o = function(n, e) {
          let t = n.parent;
          for (; null != t && (4 === t.type || 5 === t.type);) t = (n = t).parent;
          if (null == t) {
            const n = e[6];
            return 2 === n.type ? Di(n, e) : e[0]
          }
          if (n && 5 === n.type && 4 & n.flags) return rr(n, e).parentNode;
          if (2 & t.flags) {
            const n = e[1].data,
              o = n[n[t.index].directiveStart].encapsulation;
            if (o !== Zn.ShadowDom && o !== Zn.Native) return null
          }
          return rr(t, e)
        }(e, t);
        if (null != o) {
          const r = t[11],
            i = function(n, e) {
              if (2 === n.type) {
                const t = Ni(n, e);
                return null === t ? null : Zi(t.indexOf(e, 9) - 9, t)
              }
              return 4 === n.type || 5 === n.type ? rr(n, e) : null
            }(e.parent || t[6], t);
          if (Array.isArray(n))
            for (let e = 0; e < n.length; e++) Ki(r, o, n[e], i);
          else Ki(r, o, n, i)
        }
      }

      function Zi(n, e) {
        const t = 9 + n + 1;
        if (t < e.length) {
          const n = e[t],
            o = n[1].firstChild;
          if (null !== o) return function n(e, t) {
            if (null !== t) {
              const o = t.type;
              if (3 === o) return rr(t, e);
              if (0 === o) return Zi(-1, e[t.index]);
              if (4 === o || 5 === o) {
                const o = t.child;
                if (null !== o) return n(e, o); {
                  const n = e[t.index];
                  return pe(n) ? Zi(-1, n) : tr(n)
                }
              } {
                const o = e[16],
                  r = o[6],
                  i = Hr(o),
                  s = r.projection[t.projection];
                return null != s ? n(i, s) : n(e, t.next)
              }
            }
            return null
          }(n, o)
        }
        return e[7]
      }

      function Xi(n, e, t, o, r, i, s) {
        for (; null != t;) {
          const a = o[t.index],
            l = t.type;
          s && 0 === e && (a && ur(tr(a), o), t.flags |= 4), 64 != (64 & t.flags) && (4 === l || 5 === l ? (Xi(n, e, t.child, o, r, i, !1), Fi(e, n, r, a, i)) : 1 === l ? Ji(n, e, o, t, r, i) : Fi(e, n, r, a, i)), t = s ? t.projectionNext : t.next
        }
      }

      function Qi(n, e, t, o, r) {
        Xi(n, e, t[1].node.child, t, o, r, !1)
      }

      function Ji(n, e, t, o, r, i) {
        const s = t[16],
          a = s[6].projection[o.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) Fi(e, n, r, a[l], i);
        else Xi(n, e, a, s[3], r, i, !0)
      }
      class ns {
        constructor(n, e) {
          this._lView = n, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
        }
        get rootNodes() {
          return null == this._lView[0] ? function n(e, t, o, r = !1) {
            for (; null !== t;) {
              const i = e[t.index];
              if (null !== i && o.push(tr(i)), pe(i))
                for (let e = 9; e < i.length; e++) {
                  const t = i[e],
                    r = t[1].firstChild;
                  null !== r && n(t, r, o)
                }
              const s = t.type;
              if (4 === s || 5 === s) n(e, t.child, o);
              else if (1 === s) {
                const r = e[16],
                  i = r[6],
                  s = Hr(r);
                let a = i.projection[t.projection];
                null !== a && null !== s && n(s, a, o, !0)
              }
              t = r ? t.projectionNext : t.next
            }
            return o
          }(this._lView, this._lView[6].child, []) : []
        }
        get context() {
          return this._lView[8]
        }
        get destroyed() {
          return 256 == (256 & this._lView[2])
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const n = this._viewContainerRef.indexOf(this);
            n > -1 && this._viewContainerRef.detach(n), this._viewContainerRef = null
          }
          qi(this._lView)
        }
        onDestroy(n) {
          var e, t;
          t = n, Pi(e = this._lView).push(t), e[1].firstCreatePass && Ti(e).push(e[7].length - 1, null)
        }
        markForCheck() {
          zi(this._cdRefInjectingView || this._lView)
        }
        detach() {
          this._lView[2] &= -129
        }
        reattach() {
          this._lView[2] |= 128
        }
        detectChanges() {
          Ai(this._lView, this.context)
        }
        checkNoChanges() {
          ! function(n, e) {
            Me(!0);
            try {
              Ai(n, e)
            } finally {
              Me(!1)
            }
          }(this._lView, this.context)
        }
        attachToViewContainerRef(n) {
          if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
          this._viewContainerRef = n
        }
        detachFromAppRef() {
          var n;
          this._appRef = null, Qi((n = this._lView)[11], 2, n, null, null)
        }
        attachToAppRef(n) {
          if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
          this._appRef = n
        }
      }
      class es extends ns {
        constructor(n) {
          super(n), this._view = n
        }
        detectChanges() {
          Si(this._view)
        }
        checkNoChanges() {
          ! function(n) {
            Me(!0);
            try {
              Si(n)
            } finally {
              Me(!1)
            }
          }(this._view)
        }
        get context() {
          return null
        }
      }
      let ts, os, rs;

      function is(n, e, t) {
        return ts || (ts = class extends n {}), new ts(rr(e, t))
      }

      function ss(n, e, t, o) {
        return os || (os = class extends n {
          constructor(n, e, t) {
            super(), this._declarationView = n, this._declarationTContainer = e, this.elementRef = t
          }
          createEmbeddedView(n) {
            const e = this._declarationTContainer.tViews,
              t = Qr(this._declarationView, e, n, 16, null, e.node);
            t[17] = this._declarationView[this._declarationTContainer.index];
            const o = this._declarationView[5];
            null !== o && (t[5] = o.createEmbeddedView(e)), ni(t, e, n);
            const r = new ns(t);
            return r._tViewNode = t[6], r
          }
        }), 0 === t.type ? new os(o, t, is(e, t, o)) : null
      }

      function as(n, e, t, o) {
        let r;
        rs || (rs = class extends n {
          constructor(n, e, t) {
            super(), this._lContainer = n, this._hostTNode = e, this._hostView = t
          }
          get element() {
            return is(e, this._hostTNode, this._hostView)
          }
          get injector() {
            return new xo(this._hostTNode, this._hostView)
          }
          get parentInjector() {
            const n = ho(this._hostTNode, this._hostView),
              e = pt(n, this._hostView),
              t = function(n, e, t) {
                if (t.parent && -1 !== t.parent.injectorIndex) {
                  const n = t.parent.injectorIndex;
                  let e = t.parent;
                  for (; null != e.parent && n == e.injectorIndex;) e = e.parent;
                  return e
                }
                let o = ut(n),
                  r = e,
                  i = e[6];
                for (; o > 1;) r = r[15], i = r[6], o--;
                return i
              }(n, this._hostView, this._hostTNode);
            return ct(n) && null != t ? new xo(t, e) : new xo(null, this._hostView)
          }
          clear() {
            for (; this.length > 0;) this.remove(this.length - 1)
          }
          get(n) {
            return null !== this._lContainer[8] && this._lContainer[8][n] || null
          }
          get length() {
            return this._lContainer.length - 9
          }
          createEmbeddedView(n, e, t) {
            const o = n.createEmbeddedView(e || {});
            return this.insert(o, t), o
          }
          createComponent(n, e, t, o, r) {
            const i = t || this.parentInjector;
            if (!r && null == n.ngModule && i) {
              const n = i.get(Ln, null);
              n && (r = n)
            }
            const s = n.create(i, o, void 0, r);
            return this.insert(s.hostView, e), s
          }
          insert(n, e) {
            const t = n._lView;
            if (n.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
            if (this.allocateContainerIfNeeded(), pe(t[3])) {
              const e = this.indexOf(n);
              if (-1 !== e) this.detach(e);
              else {
                const e = t[3],
                  o = new rs(e, e[6], e[3]);
                o.detach(o.indexOf(n))
              }
            }
            const o = this._adjustIndex(e);
            return function(n, e, t) {
              const o = 9 + t,
                r = e.length;
              t > 0 && (e[o - 1][4] = n), t < r - 9 ? (n[4] = e[o], Un(e, 9 + t, n)) : (e.push(n), n[4] = null), n[3] = e;
              const i = n[17];
              null !== i && e !== i && function(n, e) {
                const t = n[5],
                  o = e[3][3][16];
                16 != (16 & o[2]) && e[16] !== o && (n[2] |= 1), null === t ? n[5] = [e] : t.push(e)
              }(i, n);
              const s = n[5];
              null !== s && s.insertView(n[1]), n[2] |= 128
            }(t, this._lContainer, o), ji(t, !0, Zi(o, this._lContainer)), n.attachToViewContainerRef(this), Un(this._lContainer[8], o, n), n
          }
          move(n, e) {
            if (n.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
            return this.insert(n, e)
          }
          indexOf(n) {
            const e = this._lContainer[8];
            return null !== e ? e.indexOf(n) : -1
          }
          remove(n) {
            this.allocateContainerIfNeeded();
            const e = this._adjustIndex(n, -1);
            (function(n, e) {
              const t = Bi(n, e);
              t && qi(t)
            })(this._lContainer, e), Kn(this._lContainer[8], e)
          }
          detach(n) {
            this.allocateContainerIfNeeded();
            const e = this._adjustIndex(n, -1),
              t = Bi(this._lContainer, e);
            return t && null != Kn(this._lContainer[8], e) ? new ns(t) : null
          }
          _adjustIndex(n, e = 0) {
            return null == n ? this.length + e : n
          }
          allocateContainerIfNeeded() {
            null === this._lContainer[8] && (this._lContainer[8] = [])
          }
        });
        const i = o[t.index];
        if (pe(i)) r = i,
          function(n, e) {
            n[2] = -2
          }(r);
        else {
          let n;
          if (4 === t.type) n = tr(i);
          else if (n = o[11].createComment(""), be(o)) {
            const e = o[11],
              r = rr(t, o);
            Wi(e, Yi(e, r), n, function(n, e) {
              return it(n) ? n.nextSibling(e) : e.nextSibling
            }(e, r))
          } else Gi(n, t, o);
          o[t.index] = r = yi(i, o, n, t), _i(o, r)
        }
        return new rs(r, t, o)
      }
      let ls = (() => {
        class n {}
        return n.__NG_ELEMENT_ID__ = () => cs(), n
      })();
      const cs = function(n = !1) {
          return function(n, e, t) {
            if (!t && fe(n)) {
              const t = sr(n.index, e);
              return new ns(t, t)
            }
            return 3 === n.type || 0 === n.type || 4 === n.type || 5 === n.type ? new ns(e[16], e) : null
          }(Ie(), ye(), n)
        },
        ds = Function;

      function us(n) {
        return "function" == typeof n
      }
      const ps = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/,
        hs = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,
        fs = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,
        gs = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s+super\(\.\.\.arguments\)/;
      class ms {
        constructor(n) {
          this._reflect = n || xn.Reflect
        }
        isReflectionEnabled() {
          return !0
        }
        factory(n) {
          return (...e) => new n(...e)
        }
        _zipTypesAndAnnotations(n, e) {
          let t;
          t = Yn(void 0 === n ? e.length : n.length);
          for (let o = 0; o < t.length; o++) t[o] = void 0 === n ? [] : n[o] && n[o] != Object ? [n[o]] : [], e && null != e[o] && (t[o] = t[o].concat(e[o]));
          return t
        }
        _ownParameters(n, e) {
          if (t = n.toString(), ps.test(t) || gs.test(t) || hs.test(t) && !fs.test(t)) return null;
          var t;
          if (n.parameters && n.parameters !== e.parameters) return n.parameters;
          const o = n.ctorParameters;
          if (o && o !== e.ctorParameters) {
            const n = "function" == typeof o ? o() : o,
              e = n.map(n => n && n.type),
              t = n.map(n => n && bs(n.decorators));
            return this._zipTypesAndAnnotations(e, t)
          }
          const r = n.hasOwnProperty(Y) && n[Y],
            i = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", n);
          return i || r ? this._zipTypesAndAnnotations(i, r) : Yn(n.length)
        }
        parameters(n) {
          if (!us(n)) return [];
          const e = vs(n);
          let t = this._ownParameters(n, e);
          return t || e === Object || (t = this.parameters(e)), t || []
        }
        _ownAnnotations(n, e) {
          if (n.annotations && n.annotations !== e.annotations) {
            let e = n.annotations;
            return "function" == typeof e && e.annotations && (e = e.annotations), e
          }
          return n.decorators && n.decorators !== e.decorators ? bs(n.decorators) : n.hasOwnProperty("__annotations__") ? n.__annotations__ : null
        }
        annotations(n) {
          if (!us(n)) return [];
          const e = vs(n),
            t = this._ownAnnotations(n, e) || [];
          return (e !== Object ? this.annotations(e) : []).concat(t)
        }
        _ownPropMetadata(n, e) {
          if (n.propMetadata && n.propMetadata !== e.propMetadata) {
            let e = n.propMetadata;
            return "function" == typeof e && e.propMetadata && (e = e.propMetadata), e
          }
          if (n.propDecorators && n.propDecorators !== e.propDecorators) {
            const e = n.propDecorators,
              t = {};
            return Object.keys(e).forEach(n => {
              t[n] = bs(e[n])
            }), t
          }
          return n.hasOwnProperty("__prop__metadata__") ? n.__prop__metadata__ : null
        }
        propMetadata(n) {
          if (!us(n)) return {};
          const e = vs(n),
            t = {};
          if (e !== Object) {
            const n = this.propMetadata(e);
            Object.keys(n).forEach(e => {
              t[e] = n[e]
            })
          }
          const o = this._ownPropMetadata(n, e);
          return o && Object.keys(o).forEach(n => {
            const e = [];
            t.hasOwnProperty(n) && e.push(...t[n]), e.push(...o[n]), t[n] = e
          }), t
        }
        ownPropMetadata(n) {
          return us(n) && this._ownPropMetadata(n, vs(n)) || {}
        }
        hasLifecycleHook(n, e) {
          return n instanceof ds && e in n.prototype
        }
        guards(n) {
          return {}
        }
        getter(n) {
          return new Function("o", "return o." + n + ";")
        }
        setter(n) {
          return new Function("o", "v", "return o." + n + " = v;")
        }
        method(n) {
          return new Function("o", "args", `if (!o.${n}) throw new Error('"${n}" is undefined');\n        return o.${n}.apply(o, args);`)
        }
        importUri(n) {
          return "object" == typeof n && n.filePath ? n.filePath : `./${fn(n)}`
        }
        resourceUri(n) {
          return `./${fn(n)}`
        }
        resolveIdentifier(n, e, t, o) {
          return o
        }
        resolveEnum(n, e) {
          return n[e]
        }
      }

      function bs(n) {
        return n ? n.map(n => new(0, n.type.annotationCls)(...n.args ? n.args : [])) : []
      }

      function vs(n) {
        const e = n.prototype ? Object.getPrototypeOf(n.prototype) : null;
        return (e ? e.constructor : null) || Object
      }
      const $s = new En("Set Injector scope."),
        ws = {},
        ys = {},
        xs = [];
      let ks = void 0;

      function Cs() {
        return void 0 === ks && (ks = new Hn), ks
      }

      function _s(n, e = null, t = null, o) {
        return e = e || Cs(), new zs(n, t, e, o)
      }
      class zs {
        constructor(n, e, t, o = null) {
          this.parent = t, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
          const r = [];
          e && Wn(e, t => this.processProvider(t, n, e)), Wn([n], n => this.processInjectorType(n, [], r)), this.records.set(Pn, Is(void 0, this));
          const i = this.records.get($s);
          this.scope = null != i ? i.value : null, this.injectorDefTypes.forEach(n => this.get(n)), this.source = o || ("object" == typeof n ? null : fn(n))
        }
        get destroyed() {
          return this._destroyed
        }
        destroy() {
          this.assertNotDestroyed(), this._destroyed = !0;
          try {
            this.onDestroy.forEach(n => n.ngOnDestroy())
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
          }
        }
        get(n, e = Tn, t = nn.Default) {
          this.assertNotDestroyed();
          const o = Dn(this);
          try {
            if (!(t & nn.SkipSelf)) {
              let e = this.records.get(n);
              if (void 0 === e) {
                const t = ("function" == typeof(r = n) || "object" == typeof r && r instanceof En) && sn(n);
                e = t && this.injectableDefInScope(t) ? Is(As(n), ws) : null, this.records.set(n, e)
              }
              if (null != e) return this.hydrate(n, e)
            }
            return (t & nn.Self ? Cs() : this.parent).get(n, e = t & nn.Optional && e === Tn ? null : e)
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(fn(n)), o) throw i;
              return function(n, e, t, o) {
                const r = n.ngTempTokenPath;
                throw e.__source && r.unshift(e.__source), n.message = function(n, e, t, o = null) {
                  n = n && "\n" === n.charAt(0) && "\u0275" == n.charAt(1) ? n.substr(2) : n;
                  let r = fn(e);
                  if (Array.isArray(e)) r = e.map(fn).join(" -> ");
                  else if ("object" == typeof e) {
                    let n = [];
                    for (let t in e)
                      if (e.hasOwnProperty(t)) {
                        let o = e[t];
                        n.push(t + ":" + ("string" == typeof o ? JSON.stringify(o) : fn(o)))
                      } r = `{${n.join(", ")}}`
                  }
                  return `${t}${o?"("+o+")":""}[${r}]: ${n.replace(Mn,"\n  ")}`
                }("\n" + n.message, r, t, o), n.ngTokenPath = r, n.ngTempTokenPath = null, n
              }(i, n, "R3InjectorError", this.source)
            }
            throw i
          } finally {
            Dn(o)
          }
          var r
        }
        toString() {
          const n = [];
          return this.records.forEach((e, t) => n.push(fn(t))), `R3Injector[${n.join(", ")}]`
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Error("Injector has already been destroyed.")
        }
        processInjectorType(n, e, t) {
          if (!(n = bn(n))) return !1;
          let o = ln(n);
          const r = null == o && n.ngModule || void 0,
            i = void 0 === r ? n : r,
            s = -1 !== t.indexOf(i);
          if (void 0 !== r && (o = ln(r)), null == o) return !1;
          if (this.injectorDefTypes.add(i), this.records.set(i, Is(o.factory, ws)), null != o.imports && !s) {
            let n;
            t.push(i);
            try {
              Wn(o.imports, o => {
                this.processInjectorType(o, e, t) && (void 0 === n && (n = []), n.push(o))
              })
            } finally {}
            if (void 0 !== n)
              for (let e = 0; e < n.length; e++) {
                const {
                  ngModule: t,
                  providers: o
                } = n[e];
                Wn(o, n => this.processProvider(n, t, o || xs))
              }
          }
          const a = o.providers;
          if (null != a && !s) {
            const e = n;
            Wn(a, n => this.processProvider(n, e, a))
          }
          return void 0 !== r && void 0 !== n.providers
        }
        processProvider(n, e, t) {
          let o = Ps(n = bn(n)) ? n : bn(n && n.provide);
          const r = function(n, e, t) {
            return Es(n) ? Is(void 0, n.useValue) : Is(Ss(n, e, t), ws)
          }(n, e, t);
          if (Ps(n) || !0 !== n.multi) {
            const n = this.records.get(o);
            n && void 0 !== n.multi && hr()
          } else {
            let e = this.records.get(o);
            e ? void 0 === e.multi && hr() : (e = Is(void 0, ws, !0), e.factory = () => qn(e.multi), this.records.set(o, e)), o = n, e.multi.push(n)
          }
          this.records.set(o, r)
        }
        hydrate(n, e) {
          var t;
          return e.value === ys ? function(n) {
            throw new Error(`Cannot instantiate cyclic dependency! ${n}`)
          }(fn(n)) : e.value === ws && (e.value = ys, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (t = e.value) && "object" == typeof t && "function" == typeof t.ngOnDestroy && this.onDestroy.add(e.value), e.value
        }
        injectableDefInScope(n) {
          return !!n.providedIn && ("string" == typeof n.providedIn ? "any" === n.providedIn || n.providedIn === this.scope : this.injectorDefTypes.has(n.providedIn))
        }
      }

      function As(n) {
        const e = sn(n),
          t = null !== e ? e.factory : ce(n);
        if (null !== t) return t;
        const o = ln(n);
        if (null !== o) return o.factory;
        if (n instanceof En) throw new Error(`Token ${fn(n)} is missing a \u0275prov definition.`);
        if (n instanceof Function) return function(n) {
          const e = n.length;
          if (e > 0) {
            const t = Yn(e, "?");
            throw new Error(`Can't resolve all parameters for ${fn(n)}: (${t.join(", ")}).`)
          }
          const t = function(n) {
            const e = n && (n[cn] || n[pn] || n[un] && n[un]());
            if (e) {
              const t = function(n) {
                if (n.hasOwnProperty("name")) return n.name;
                const e = ("" + n).match(/^function\s*([^\s(]+)/);
                return null === e ? "" : e[1]
              }(n);
              return console.warn(`DEPRECATED: DI is instantiating a token "${t}" that inherits its @Injectable decorator but does not provide one itself.\n` + `This will become an error in v10. Please add @Injectable() to the "${t}" class.`), e
            }
            return null
          }(n);
          return null !== t ? () => t.factory(n) : () => new n
        }(n);
        throw new Error("unreachable")
      }

      function Ss(n, e, t) {
        let o = void 0;
        if (Ps(n)) return As(bn(n));
        if (Es(n)) o = () => bn(n.useValue);
        else if ((r = n) && r.useFactory) o = () => n.useFactory(...qn(n.deps || []));
        else if (function(n) {
            return !(!n || !n.useExisting)
          }(n)) o = () => Vn(bn(n.useExisting));
        else {
          const r = bn(n && (n.useClass || n.provide));
          if (r || function(n, e, t) {
              let o = "";
              throw n && e && (o = ` - only instances of Provider and Type are allowed, got: [${e.map(n=>n==t?"?"+t+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${fn(n)}'` + o)
            }(e, t, n), ! function(n) {
              return !!n.deps
            }(n)) return As(r);
          o = () => new r(...qn(n.deps))
        }
        var r;
        return o
      }

      function Is(n, e, t = !1) {
        return {
          factory: n,
          value: e,
          multi: t ? [] : void 0
        }
      }

      function Es(n) {
        return null !== n && "object" == typeof n && On in n
      }

      function Ps(n) {
        return "function" == typeof n
      }
      const Ts = function(n, e, t) {
        return _s({
          name: t
        }, e, n, t)
      };
      let Ms = (() => {
        class n {
          static create(n, e) {
            return Array.isArray(n) ? Ts(n, e, "") : Ts(n.providers, n.parent, n.name || "")
          }
        }
        return n.THROW_IF_NOT_FOUND = Tn, n.NULL = new Hn, n.\u0275prov = on({
          token: n,
          providedIn: "any",
          factory: () => Vn(Pn)
        }), n.__NG_ELEMENT_ID__ = -1, n
      })();

      function Os(n) {
        return n.length > 1 ? " (" + function(n) {
          const e = [];
          for (let t = 0; t < n.length; ++t) {
            if (e.indexOf(n[t]) > -1) return e.push(n[t]), e;
            e.push(n[t])
          }
          return e
        }(n.slice().reverse()).map(n => fn(n.token)).join(" -> ") + ")" : ""
      }

      function Rs(n, e, t, o) {
        const r = [e],
          i = t(r),
          s = o ? function(n, e) {
            const t = `${n} caused by: ${e instanceof Error?e.message:e}`,
              o = Error(t);
            return o.ngOriginalError = e, o
          }(i, o) : Error(i);
        return s.addKey = Ns, s.keys = r, s.injectors = [n], s.constructResolvingMessage = t, s.ngOriginalError = o, s
      }

      function Ns(n, e) {
        this.injectors.push(n), this.keys.push(e), this.message = this.constructResolvingMessage(this.keys)
      }

      function Ds(n, e) {
        const t = [];
        for (let o = 0, r = e.length; o < r; o++) {
          const n = e[o];
          t.push(n && 0 != n.length ? n.map(fn).join(" ") : "?")
        }
        return Error("Cannot resolve all parameters for '" + fn(n) + "'(" + t.join(", ") + "). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" + fn(n) + "' is decorated with Injectable.")
      }
      class Fs {
        constructor(n, e) {
          if (this.token = n, this.id = e, !n) throw new Error("Token must be defined!");
          this.displayName = fn(this.token)
        }
        static get(n) {
          return Vs.get(bn(n))
        }
        static get numberOfKeys() {
          return Vs.numberOfKeys
        }
      }
      class js {
        constructor() {
          this._allKeys = new Map
        }
        get(n) {
          if (n instanceof Fs) return n;
          if (this._allKeys.has(n)) return this._allKeys.get(n);
          const e = new Fs(n, Fs.numberOfKeys);
          return this._allKeys.set(n, e), e
        }
        get numberOfKeys() {
          return this._allKeys.size
        }
      }
      const Vs = new js;
      class Bs {
        constructor(n) {
          this.reflectionCapabilities = n
        }
        updateCapabilities(n) {
          this.reflectionCapabilities = n
        }
        factory(n) {
          return this.reflectionCapabilities.factory(n)
        }
        parameters(n) {
          return this.reflectionCapabilities.parameters(n)
        }
        annotations(n) {
          return this.reflectionCapabilities.annotations(n)
        }
        propMetadata(n) {
          return this.reflectionCapabilities.propMetadata(n)
        }
        hasLifecycleHook(n, e) {
          return this.reflectionCapabilities.hasLifecycleHook(n, e)
        }
        getter(n) {
          return this.reflectionCapabilities.getter(n)
        }
        setter(n) {
          return this.reflectionCapabilities.setter(n)
        }
        method(n) {
          return this.reflectionCapabilities.method(n)
        }
        importUri(n) {
          return this.reflectionCapabilities.importUri(n)
        }
        resourceUri(n) {
          return this.reflectionCapabilities.resourceUri(n)
        }
        resolveIdentifier(n, e, t, o) {
          return this.reflectionCapabilities.resolveIdentifier(n, e, t, o)
        }
        resolveEnum(n, e) {
          return this.reflectionCapabilities.resolveEnum(n, e)
        }
      }
      const qs = new Bs(new ms);
      class Hs {
        constructor(n, e, t) {
          this.key = n, this.optional = e, this.visibility = t
        }
        static fromKey(n) {
          return new Hs(n, !1, null)
        }
      }
      const Ls = [];
      class Ws {
        constructor(n, e, t) {
          this.key = n, this.resolvedFactories = e, this.multiProvider = t, this.resolvedFactory = this.resolvedFactories[0]
        }
      }
      class Us {
        constructor(n, e) {
          this.factory = n, this.dependencies = e
        }
      }

      function Ks(n) {
        let e, t;
        if (n.useClass) {
          const o = bn(n.useClass);
          e = qs.factory(o), t = Gs(o)
        } else n.useExisting ? (e = n => n, t = [Hs.fromKey(Fs.get(n.useExisting))]) : n.useFactory ? (e = n.useFactory, t = function(n, e) {
          if (e) {
            const t = e.map(n => [n]);
            return e.map(e => Zs(n, e, t))
          }
          return Gs(n)
        }(n.useFactory, n.deps)) : (e = () => n.useValue, t = Ls);
        return new Us(e, t)
      }

      function Ys(n) {
        return new Ws(Fs.get(n.provide), [Ks(n)], n.multi || !1)
      }

      function Gs(n) {
        const e = qs.parameters(n);
        if (!e) return [];
        if (e.some(n => null == n)) throw Ds(n, e);
        return e.map(t => Zs(n, t, e))
      }

      function Zs(n, e, t) {
        let o = null,
          r = !1;
        if (!Array.isArray(e)) return Xs(e instanceof Z ? e.token : e, r, null);
        let i = null;
        for (let s = 0; s < e.length; ++s) {
          const n = e[s];
          n instanceof ds ? o = n : n instanceof Z ? o = n.token : n instanceof X ? r = !0 : n instanceof Q || n instanceof J ? i = n : n instanceof En && (o = n)
        }
        if (o = bn(o), null != o) return Xs(o, r, i);
        throw Ds(n, t)
      }

      function Xs(n, e, t) {
        return new Hs(Fs.get(n), e, t)
      }
      const Qs = {};
      class Js {
        static resolve(n) {
          return function(n) {
            const e = function(n, e) {
              for (let t = 0; t < n.length; t++) {
                const o = n[t],
                  r = e.get(o.key.id);
                if (r) {
                  if (o.multiProvider !== r.multiProvider) throw Error(`Cannot mix multi providers and regular providers, got: ${r} ${o}`);
                  if (o.multiProvider)
                    for (let n = 0; n < o.resolvedFactories.length; n++) r.resolvedFactories.push(o.resolvedFactories[n]);
                  else e.set(o.key.id, o)
                } else {
                  let n;
                  n = o.multiProvider ? new Ws(o.key, o.resolvedFactories.slice(), o.multiProvider) : o, e.set(o.key.id, n)
                }
              }
              return e
            }(function n(e, t) {
              return e.forEach(e => {
                if (e instanceof ds) t.push({
                  provide: e,
                  useClass: e
                });
                else if (e && "object" == typeof e && void 0 !== e.provide) t.push(e);
                else {
                  if (!Array.isArray(e)) throw Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${e}`);
                  n(e, t)
                }
              }), t
            }(n, []).map(Ys), new Map);
            return Array.from(e.values())
          }(n)
        }
        static resolveAndCreate(n, e) {
          const t = Js.resolve(n);
          return Js.fromResolvedProviders(t, e)
        }
        static fromResolvedProviders(n, e) {
          return new na(n, e)
        }
      }
      let na = (() => {
          class n {
            constructor(n, e) {
              this._constructionCounter = 0, this._providers = n, this.parent = e || null;
              const t = n.length;
              this.keyIds = [], this.objs = [];
              for (let o = 0; o < t; o++) this.keyIds[o] = n[o].key.id, this.objs[o] = Qs
            }
            get(n, e = Tn) {
              return this._getByKey(Fs.get(n), null, e)
            }
            resolveAndCreateChild(n) {
              const e = Js.resolve(n);
              return this.createChildFromResolved(e)
            }
            createChildFromResolved(e) {
              const t = new n(e);
              return t.parent = this, t
            }
            resolveAndInstantiate(n) {
              return this.instantiateResolved(Js.resolve([n])[0])
            }
            instantiateResolved(n) {
              return this._instantiateProvider(n)
            }
            getProviderAtIndex(n) {
              if (n < 0 || n >= this._providers.length) throw function(n) {
                return Error(`Index ${n} is out-of-bounds.`)
              }(n);
              return this._providers[n]
            }
            _new(n) {
              if (this._constructionCounter++ > this._getMaxNumberOfObjects()) throw Rs(this, n.key, (function(n) {
                return `Cannot instantiate cyclic dependency!${Os(n)}`
              }));
              return this._instantiateProvider(n)
            }
            _getMaxNumberOfObjects() {
              return this.objs.length
            }
            _instantiateProvider(n) {
              if (n.multiProvider) {
                const e = [];
                for (let t = 0; t < n.resolvedFactories.length; ++t) e[t] = this._instantiate(n, n.resolvedFactories[t]);
                return e
              }
              return this._instantiate(n, n.resolvedFactories[0])
            }
            _instantiate(n, e) {
              const t = e.factory;
              let o, r;
              try {
                o = e.dependencies.map(n => this._getByReflectiveDependency(n))
              } catch (s) {
                throw s.addKey && s.addKey(this, n.key), s
              }
              try {
                r = t(...o)
              } catch (s) {
                throw Rs(this, n.key, (function(n) {
                  const e = fn(n[0].token);
                  return `${i.message}: Error during instantiation of ${e}!${Os(n)}.`
                }), i = s)
              }
              var i;
              return r
            }
            _getByReflectiveDependency(n) {
              return this._getByKey(n.key, n.visibility, n.optional ? null : Tn)
            }
            _getByKey(e, t, o) {
              return e === n.INJECTOR_KEY ? this : t instanceof Q ? this._getByKeySelf(e, o) : this._getByKeyDefault(e, o, t)
            }
            _getObjByKeyId(n) {
              for (let e = 0; e < this.keyIds.length; e++)
                if (this.keyIds[e] === n) return this.objs[e] === Qs && (this.objs[e] = this._new(this._providers[e])), this.objs[e];
              return Qs
            }
            _throwOrNull(n, e) {
              if (e !== Tn) return e;
              throw function(n, e) {
                return Rs(n, e, (function(n) {
                  return `No provider for ${fn(n[0].token)}!${Os(n)}`
                }))
              }(this, n)
            }
            _getByKeySelf(n, e) {
              const t = this._getObjByKeyId(n.id);
              return t !== Qs ? t : this._throwOrNull(n, e)
            }
            _getByKeyDefault(e, t, o) {
              let r;
              for (r = o instanceof J ? this.parent : this; r instanceof n;) {
                const n = r,
                  t = n._getObjByKeyId(e.id);
                if (t !== Qs) return t;
                r = n.parent
              }
              return null !== r ? r.get(e.token, t) : this._throwOrNull(e, t)
            }
            get displayName() {
              return `ReflectiveInjector(providers: [${function(n,e){const t=[];for(let o=0;o<n._providers.length;++o)t[o]=' "'+n.getProviderAtIndex(o).key.displayName+'" ';return t}(this).join(", ")}])`
            }
            toString() {
              return this.displayName
            }
          }
          return n.INJECTOR_KEY = Fs.get(Ms), n
        })(),
        ea = new Map;
      const ta = new Set;

      function oa(n) {
        return "string" == typeof n ? n : n.text()
      }

      function ra(n) {
        const e = ye(),
          t = e[1];
        t.firstCreatePass && (function(n, e, t) {
          const o = n.expandoInstructions,
            r = o.length;
          r >= 2 && o[r - 2] === e.hostBindings ? o[r - 1] = o[r - 1] + t : o.push(e.hostBindings, t)
        }(t, ve.lFrame.currentDirectiveDef, n), function(n, e, t) {
          for (let o = 0; o < t; o++) e.push(At), n.blueprint.push(At), n.data.push(null)
        }(t, e, n))
      }
      let ia = null;

      function sa() {
        if (!ia) {
          const n = xn.Symbol;
          if (n && n.iterator) ia = n.iterator;
          else {
            const n = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < n.length; ++e) {
              const t = n[e];
              "entries" !== t && "size" !== t && Map.prototype[t] === Map.prototype.entries && (ia = t)
            }
          }
        }
        return ia
      }

      function aa(n, e) {
        return n === e || "number" == typeof n && "number" == typeof e && isNaN(n) && isNaN(e)
      }
      class la {
        constructor(n) {
          this.wrapped = n
        }
        static wrap(n) {
          return new la(n)
        }
        static unwrap(n) {
          return la.isWrapped(n) ? n.wrapped : n
        }
        static isWrapped(n) {
          return n instanceof la
        }
      }

      function ca(n) {
        return !!da(n) && (Array.isArray(n) || !(n instanceof Map) && sa() in n)
      }

      function da(n) {
        return null !== n && ("function" == typeof n || "object" == typeof n)
      }

      function ua(n, e, t) {
        return n[e] = t
      }

      function pa(n, e) {
        return n[e]
      }

      function ha(n, e, t) {
        return !Object.is(n[e], t) && (n[e] = t, !0)
      }

      function fa(n, e, t, o) {
        const r = ye();
        return ha(r, Ne(), e) && function(n, e, t, o, r, i) {
          const s = or(n, o),
            a = o[11];
          if (null == t) it(a) ? a.removeAttribute(s, e, i) : s.removeAttribute(e);
          else {
            const l = ir(n, o),
              c = null == r ? ht(t) : r(t, l.tagName || "", e);
            it(a) ? a.setAttribute(s, e, c, i) : i ? s.setAttributeNS(i, e, c) : s.setAttribute(e, c)
          }
        }(Ue(), n, e, r, t, o), fa
      }

      function ga(n, e, t, o) {
        return ha(n, Ne(), t) ? e + ht(t) + o : At
      }

      function ma(n, e, t, o, r, i, s, a) {
        const l = ye(),
          c = l[1],
          d = n + 19,
          u = c.firstCreatePass ? function(n, e, t, o, r, i, s, a, l) {
            const c = e.consts,
              d = Jr(e, t[6], n, 0, s || null, cr(c, a));
            ui(e, t, d, cr(c, l)), Ge(e, d);
            const u = d.tViews = ai(2, -1, o, r, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c),
              p = li(0, null, 2, -1, null, null);
            return p.injectorIndex = d.injectorIndex, u.node = p, null !== e.queries && (e.queries.template(e, d), u.queries = e.queries.embeddedTView(d)), d
          }(n, c, l, e, t, o, r, i, s) : c.data[d];
        Ee(u, !1);
        const p = l[11].createComment("");
        Gi(p, u, l), ur(p, l), _i(l, l[d] = yi(p, l, p, u)), ge(u) && ri(c, l, u), null != s && ii(l, u, a)
      }

      function ba(n, e = nn.Default) {
        const t = ye();
        return null == t ? Vn(n, e) : go(Ie(), t, bn(n), e)
      }

      function va(n, e, t) {
        return function(n, e, t, o) {
          const r = Ne(),
            i = ye(),
            s = ir(n, i),
            a = i[1].firstUpdatePass;
          a && (Pt(s, 32768), Ea(s, Ia(), !1)), wa(s, a, i, r, e, function(n, e) {
            if (n === At) return n;
            let t = null;
            return qt(n) && (t = e ? ht(n) + e : n), t
          }(t, o), !1)
        }(Ue(), n, e, t), va
      }

      function $a(n, e) {
        const t = Ne(),
          o = ye(),
          r = ir(Ue(), o),
          i = o[1].firstUpdatePass;
        return i && (Pt(r, 1024), Ea(r, Ia(), !0)), wa(r, i, o, t, n, e, !0), $a
      }

      function wa(n, e, t, o, r, i, s) {
        let a = !1;
        const l = rr(n, t),
          c = s ? Aa(n) : function(n) {
            return Sa(n, !1)
          }(n),
          d = s ? null : Ye();
        if (Et(n, s, e)) {
          const e = s ? null : d;
          a = function(n, e, t, o, r, i, s, a, l, c) {
            let d = !1;
            if (Bt(r[i], a)) {
              jt(r, i, a);
              const u = l ? jr : Fr;
              d = Rr(n, o, s, a, u, i, c);
              const p = l ? 512 : 16384;
              if (!d && It(t, p)) {
                const e = kr(o, 0),
                  t = l ? e.lastDirectClassMap : e.lastDirectStyleMap;
                d = !!t && Nr(n, o, u, t, s, i, c)
              }
              if (!d && It(t, 256)) {
                const t = Wt(e);
                d = !!t && Nr(n, o, u, t, s, i)
              }
              d || u(n, o, s, null, i)
            }
            return d
          }(Ca(n, t), c, n, l, t, o, r, i, s, e), e && _e(ka)
        } else {
          const u = ze();
          a = s ? _r(c, n, t, l, u, r, o, i, !1, e) : zr(c, n, t, l, u, r, o, i, d, !1, e), _e(ka)
        }
        return a
      }

      function ya(n) {
        xa(Ue(), n)
      }

      function xa(n, e) {
        const t = ye(),
          o = ir(n, t),
          r = t[1].firstUpdatePass,
          i = Aa(o),
          s = Yt(o),
          a = function(n) {
            const e = ve.lFrame,
              t = e.bindingIndex;
            return e.bindingIndex = e.bindingIndex + 2, t
          }();
        !Ia() && s && e !== At && (function(n, e, t, o, r, i, s) {
            if (Bt(Vt(e, o), r)) {
              if (qt(r) || !s) {
                const o = io(t.inputs);
                Oi(e, t.inputs[o], o, function(n, e, t) {
                  let o = e;
                  var r;
                  return n.length && (o = Ht(n, ((r = e) && "string" != typeof r && (r = Object.keys(r).join(" ")), r || ""))), o
                }(Kt(n), r)), _e(ka)
              }
              jt(e, o, r)
            }
          }(i, t, o, a, e, 0, r), e = At), r && (Pt(o, 512), Ea(o, Ia(), !0)),
          function(n, e, t, o, r, i, s, a) {
            const l = ze(),
              c = rr(e, o),
              d = Vt(o, r),
              u = (Ye(), Bt(d, i));
            if (Et(e, !0, t)) {
              const t = null;
              (function(n, e, t, o, r, i, s, a, l, c, d) {
                const u = Vt(r, i);
                if (c || Bt(u, s)) {
                  const c = It(t, 256),
                    p = c && !d ? Kt(e) : null;
                  jt(r, i, s);
                  const h = i + 1;
                  let f = Vt(r, h);
                  f === At && (f = p), f = "string" != typeof f ? "" : f;
                  let g = !It(t, a ? 1024 : 32768);
                  if (g && function(n, e, t) {
                      return "undefined" === xn.Node || e === Cr || ((t ? n.className : n.style && n.style.cssText) || "") !== (e || "")
                    }(o, f, a) && (g = !1, u !== Cr && (function(n, e, t, o) {
                      let r;
                      r = function(n) {
                        return Array.isArray(n) && "string" == typeof n[1]
                      }(t) ? t : ro(null, t, !o);
                      const i = o ? jr : Fr;
                      for (let s = 1; s < r.length; s += 2) Jt(r, s) && i(n, e, Gt(r, s), null)
                    }(n, o, u, a), jt(r, h, Cr))), g) jt(r, h, Or(n, o, s, a, c && !d ? Kt(e) : null) || null);
                  else {
                    const t = a ? jr : Fr,
                      r = ro(u, s, !a),
                      d = c ? Wt(e) : null;
                    for (let e = 1; e < r.length; e += 2) {
                      const s = Gt(r, e);
                      let a = Rr(n, o, s, Jt(r, e), t, i, l);
                      !a && d && (a = Nr(n, o, t, d, s, i, l)), a || t(n, o, s, null, i)
                    }
                    const p = kr(o, 0);
                    a ? p.lastDirectClassMap = r : p.lastDirectStyleMap = r
                  }
                }
              })(Ca(e, o), n, e, c, o, r, i, !0, t, u, a), t && _e(ka)
            } else {
              const s = i === At ? At : ro(d, i, !1);
              Dr = Ur, _r(n, e, o, c, l, null, r, s, u, t), _e(ka)
            }
          }(i, o, r, t, a, e, 0, s)
      }

      function ka() {
        const n = ye(),
          e = n[1],
          t = ir(Ue(), n),
          o = rr(t, n),
          r = ze(),
          i = Ca(t, n),
          s = Ye();
        (function(n, e, t, o, r, i, s, a, l) {
          const c = kr(i, s),
            d = eo(c.sourceIndex);
          r && (l && Tr(r, t, !1), 0 !== c.stylesBitMask && Mr(r, t, n, i, e, c.stylesBitMask, Fr, a, d, !1)), o && (l && Tr(o, t, !0), 0 !== c.classesBitMask && Mr(o, t, n, i, e, c.classesBitMask, jr, null, d, !0)), xr.element = null
        })(i, n, t, Ut(t.classes) ? t.classes : null, Ut(t.styles) ? t.styles : null, o, r, s, e.firstUpdatePass), ve.lFrame.currentSanitizer = null
      }

      function Ca(n, e) {
        return 3 === n.type ? e[11] : null
      }

      function _a(n, e, t) {
        let o = !1,
          r = Wt(n.styles),
          i = Wt(n.classes),
          s = -1;
        for (let a = t; a < e.length; a++) {
          const n = e[a];
          if ("number" == typeof n) s = n;
          else if (1 == s) i = i || St(null), oo(i, n, !0), o = !0;
          else if (2 == s) {
            const t = e[++a];
            r = r || St(null), oo(r, n, t), o = !0
          }
        }
        return i && i.length > 1 && (n.classes || (n.classes = i), za(n.classes, to(i, !0))), r && r.length > 1 && (n.styles || (n.styles = r), za(n.styles, to(r, !1))), o && (n.flags |= 256), o
      }

      function za(n, e) {
        Wt(n)[0] = e
      }

      function Aa(n) {
        return Sa(n, !0)
      }

      function Sa(n, e) {
        let t = e ? n.classes : n.styles;
        return Ut(t) || (ge(n), t = [1, t || St(null)], e ? n.classes = t : n.styles = t), t
      }

      function Ia() {
        return eo(ze())
      }

      function Ea(n, e, t) {
        Pt(n, e ? t ? 4096 : 131072 : t ? 2048 : 65536)
      }

      function Pa(n, e, t, o) {
        const r = ye(),
          i = r[1],
          s = 19 + n,
          a = r[11],
          l = r[s] = Xr(e, a, ve.lFrame.currentNamespace),
          c = i.firstCreatePass ? function(n, e, t, o, r, i, s) {
            const a = e.consts,
              l = cr(a, i),
              c = Jr(e, t[6], n, 3, r, l);
            return null !== l && _a(c, l, 0), ui(e, t, c, cr(a, s)), null !== e.queries && e.queries.elementStart(e, c), c
          }(n, i, r, 0, e, t, o) : i.data[s];
        Ee(c, !0);
        const d = c.attrs;
        null != d && at(a, l, d), 256 == (256 & c.flags) && Ri(a, l, c, !1), Gi(l, c, r), 0 === ve.lFrame.elementDepthCount && ur(l, r), ve.lFrame.elementDepthCount++, ge(c) && (ri(i, r, c), function(n, e, t) {
          if (he(e)) {
            const o = e.directiveEnd;
            for (let r = e.directiveStart; r < o; r++) {
              const e = n.data[r];
              e.contentQueries && e.contentQueries(1, t[r], r)
            }
          }
        }(i, c, r)), null != o && ii(r, c)
      }

      function Ta() {
        let n = Ie();
        Pe() ? ve.lFrame.isParent = !1 : (n = n.parent, Ee(n, !1));
        const e = n,
          t = ye(),
          o = t[1];
        if (ve.lFrame.elementDepthCount--, o.firstCreatePass && (Ge(o, n), he(n) && o.queries.elementEnd(n)), Yt(e)) {
          const n = io(e.inputs);
          Oa(e.classes, t, e.inputs[n], n)
        }(function(n) {
          return 0 != (32 & n.flags)
        })(e) && Oa(e.styles, t, e.inputs.style, "style")
      }

      function Ma(n, e, t, o) {
        Pa(n, e, t, o), Ta()
      }

      function Oa(n, e, t, o) {
        Oi(e, t, o, n && Kt(n) || null)
      }

      function Ra() {
        return ye()
      }

      function Na(n) {
        return !!n && "function" == typeof n.then
      }

      function Da(n, e, t = !1, o) {
        const r = ye(),
          i = Ie();
        return function(n, e, t, o, r, i = !1, s) {
          const a = n[1],
            l = ge(t),
            c = a.firstCreatePass && (a.cleanup || (a.cleanup = [])),
            d = Pi(n);
          let u = !0;
          if (3 === t.type) {
            const a = rr(t, n),
              p = s ? s(a) : Qn,
              h = p.target || a,
              f = d.length,
              g = s ? n => s(tr(n[t.index])).target : t.index;
            if (it(e)) {
              let i = null;
              if (!s && l && (i = function(n, e, t) {
                  const o = n[1].cleanup;
                  if (null != o)
                    for (let r = 0; r < o.length - 1; r += 2) {
                      const i = o[r];
                      if (i === e && o[r + 1] === t) {
                        const e = n[7],
                          t = o[r + 2];
                        return e.length > t ? e[t] : null
                      }
                      "string" == typeof i && (r += 2)
                    }
                  return null
                }(n, o, t.index)), null !== i)(i.__ngLastListenerFn__ || i).__ngNextListenerFn__ = r, i.__ngLastListenerFn__ = r, u = !1;
              else {
                r = ja(t, n, r, !1);
                const i = e.listen(p.name || h, o, r);
                d.push(r, i), c && c.push(o, g, f, f + 1)
              }
            } else r = ja(t, n, r, !0), h.addEventListener(o, r, i), d.push(r), c && c.push(o, g, f, i)
          }
          const p = t.outputs;
          let h;
          if (u && null !== p && (h = p[o])) {
            const e = h.length;
            if (e)
              for (let i = 0; i < e; i += 2) {
                const e = n[h[i]][h[i + 1]].subscribe(r),
                  s = d.length;
                d.push(r, e), c && c.push(o, t.index, s, -(s + 1))
              }
          }
        }(r, r[11], i, n, e, t, o), Da
      }

      function Fa(n, e, t) {
        try {
          return !1 !== e(t)
        } catch (o) {
          return Mi(n, o), !1
        }
      }

      function ja(n, e, t, o) {
        return function r(i) {
          if (i === Function) return t;
          const s = 2 & n.flags ? sr(n.index, e) : e;
          0 == (32 & e[2]) && zi(s);
          let a = Fa(e, t, i),
            l = r.__ngNextListenerFn__;
          for (; l;) a = Fa(e, l, i) && a, l = l.__ngNextListenerFn__;
          return o && !1 === a && (i.preventDefault(), i.returnValue = !1), a
        }
      }

      function Va(n = 1) {
        return function(n) {
          return (ve.lFrame.contextLView = function(n, e) {
            for (; n > 0;) e = e[15], n--;
            return e
          }(n, ve.lFrame.contextLView))[8]
        }(n)
      }

      function Ba(n, e, t) {
        const o = ye();
        return ha(o, Ne(), e) && di(o, Ue(), n, e, t), Ba
      }

      function qa(n, e = "") {
        const t = ye(),
          o = t[1],
          r = n + 19,
          i = o.firstCreatePass ? Jr(o, t[6], n, 3, null, null) : o.data[r];
        Gi(t[r] = function(n, e) {
          return it(e) ? e.createText(n) : e.createTextNode(n)
        }(e, t[11]), i, t), Ee(i, !1)
      }

      function Ha(n) {
        return La("", n, ""), Ha
      }

      function La(n, e, t) {
        const o = ye(),
          r = ga(o, n, e, t);
        return r !== At && function(n, e, t) {
          const o = or(e, n),
            r = n[11];
          it(r) ? r.setValue(o, t) : o.textContent = t
        }(o, Ue(), r), La
      }

      function Wa(n, e, t) {
        const o = ye();
        return ha(o, Ne(), e) && di(o, Ue(), n, e, t, !0), Wa
      }

      function Ua(n, e) {
        const t = ar(n)[1],
          o = t.data.length - 1;
        Ge(t, {
          directiveStart: o,
          directiveEnd: o + 1
        })
      }

      function Ka(n) {
        let e = Object.getPrototypeOf(n.type.prototype).constructor,
          t = !0;
        for (; e;) {
          let o = void 0;
          if (me(n)) o = e.\u0275cmp || e.\u0275dir;
          else {
            if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
            o = e.\u0275dir
          }
          if (o) {
            if (t) {
              const e = n;
              e.inputs = Ya(n.inputs), e.declaredInputs = Ya(n.declaredInputs), e.outputs = Ya(n.outputs);
              const t = o.hostBindings;
              t && Xa(n, t);
              const r = o.viewQuery,
                i = o.contentQueries;
              r && Ga(n, r), i && Za(n, i), tn(n.inputs, o.inputs), tn(n.declaredInputs, o.declaredInputs), tn(n.outputs, o.outputs), n.afterContentChecked = n.afterContentChecked || o.afterContentChecked, n.afterContentInit = n.afterContentInit || o.afterContentInit, n.afterViewChecked = n.afterViewChecked || o.afterViewChecked, n.afterViewInit = n.afterViewInit || o.afterViewInit, n.doCheck = n.doCheck || o.doCheck, n.onDestroy = n.onDestroy || o.onDestroy, n.onInit = n.onInit || o.onInit
            }
            const e = o.features;
            if (e)
              for (let o = 0; o < e.length; o++) {
                const r = e[o];
                r && r.ngInherit && r(n), r === Ka && (t = !1)
              }
          }
          e = Object.getPrototypeOf(e)
        }
      }

      function Ya(n) {
        return n === Qn ? {} : n === Jn ? [] : n
      }

      function Ga(n, e) {
        const t = n.viewQuery;
        n.viewQuery = t ? (n, o) => {
          e(n, o), t(n, o)
        } : e
      }

      function Za(n, e) {
        const t = n.contentQueries;
        n.contentQueries = t ? (n, o, r) => {
          e(n, o, r), t(n, o, r)
        } : e
      }

      function Xa(n, e) {
        const t = n.hostBindings;
        n.hostBindings = t ? (n, o, r) => {
          e(n, o, r), t(n, o, r)
        } : e
      }
      class Qa {
        constructor(n, e, t) {
          this.previousValue = n, this.currentValue = e, this.firstChange = t
        }
        isFirstChange() {
          return this.firstChange
        }
      }

      function Ja() {
        return nl.ngInherit = !0, nl
      }

      function nl(n) {
        n.type.prototype.ngOnChanges && (n.setInput = el, n.onChanges = function() {
          const n = tl(this),
            e = n && n.current;
          if (e) {
            const t = n.previous;
            if (t === Qn) n.previous = e;
            else
              for (let n in e) t[n] = e[n];
            n.current = null, this.ngOnChanges(e)
          }
        })
      }

      function el(n, e, t, o) {
        const r = tl(n) || function(n, e) {
            return n.__ngSimpleChanges__ = e
          }(n, {
            previous: Qn,
            current: null
          }),
          i = r.current || (r.current = {}),
          s = r.previous,
          a = this.declaredInputs[t],
          l = s[a];
        i[a] = new Qa(l && l.currentValue, e, s === Qn), n[o] = e
      }

      function tl(n) {
        return n.__ngSimpleChanges__ || null
      }

      function ol(n, e, t, o, r) {
        if (n = bn(n), Array.isArray(n))
          for (let i = 0; i < n.length; i++) ol(n[i], e, t, o, r);
        else {
          const i = ye(),
            s = i[1];
          let a = Ps(n) ? n : bn(n.provide),
            l = Ss(n);
          const c = Ie(),
            d = 65535 & c.providerIndexes,
            u = c.directiveStart,
            p = c.providerIndexes >> 16;
          if (n.useClass || Ps(n)) {
            const t = (n.useClass || n).prototype.ngOnDestroy;
            t && (s.destroyHooks || (s.destroyHooks = [])).push(e.length, t)
          }
          if (Ps(n) || !n.multi) {
            const n = new et(l, r, ba),
              o = il(a, e, r ? d : d + p, u); - 1 == o ? (fo(co(c, i), s, a), e.push(a), c.directiveStart++, c.directiveEnd++, r && (c.providerIndexes += 65536), t.push(n), i.push(n)) : (t[o] = n, i[o] = n)
          } else {
            const n = il(a, e, d + p, u),
              h = il(a, e, d, d + p),
              f = n >= 0 && t[n],
              g = h >= 0 && t[h];
            if (r && !g || !r && !f) {
              fo(co(c, i), s, a);
              const n = function(n, e, t, o, r) {
                const i = new et(n, t, ba);
                return i.multi = [], i.index = e, i.componentProviders = 0, rl(i, r, o && !t), i
              }(r ? al : sl, t.length, r, o, l);
              !r && g && (t[h].providerFactory = n), e.push(a), c.directiveStart++, c.directiveEnd++, r && (c.providerIndexes += 65536), t.push(n), i.push(n)
            } else rl(t[r ? h : n], l, !r && o);
            !r && o && g && t[h].componentProviders++
          }
        }
      }

      function rl(n, e, t) {
        n.multi.push(e), t && n.componentProviders++
      }

      function il(n, e, t, o) {
        for (let r = t; r < o; r++)
          if (e[r] === n) return r;
        return -1
      }

      function sl(n, e, t, o) {
        return ll(this.multi, [])
      }

      function al(n, e, t, o) {
        const r = this.multi;
        let i;
        if (this.providerFactory) {
          const n = this.providerFactory.componentProviders,
            e = $o(t, t[1], this.providerFactory.index, o);
          i = e.slice(0, n), ll(r, i);
          for (let t = n; t < e.length; t++) i.push(e[t])
        } else i = [], ll(r, i);
        return i
      }

      function ll(n, e) {
        for (let t = 0; t < n.length; t++) e.push((0, n[t])());
        return e
      }

      function cl(n, e = []) {
        return t => {
          t.providersResolver = (t, o) => function(n, e, t) {
            const o = ye()[1];
            if (o.firstCreatePass) {
              const r = me(n);
              ol(t, o.data, o.blueprint, r, !0), ol(e, o.data, o.blueprint, r, !1)
            }
          }(t, o ? o(n) : n, e)
        }
      }
      class dl {}
      class ul {
        resolveComponentFactory(n) {
          throw function(n) {
            const e = Error(`No component factory found for ${fn(n)}. Did you add it to @NgModule.entryComponents?`);
            return e.ngComponent = n, e
          }(n)
        }
      }
      let pl = (() => {
          class n {}
          return n.NULL = new ul, n
        })(),
        hl = (() => {
          class n {
            constructor(n) {
              this.nativeElement = n
            }
          }
          return n.__NG_ELEMENT_ID__ = () => fl(n), n
        })();
      const fl = function(n) {
        return is(n, Ie(), ye())
      };
      class gl {}
      const ml = function() {
        var n = {
          Important: 1,
          DashCase: 2
        };
        return n[n.Important] = "Important", n[n.DashCase] = "DashCase", n
      }();
      let bl = (() => {
        class n {}
        return n.\u0275prov = on({
          token: n,
          providedIn: "root",
          factory: () => null
        }), n
      })();
      class vl {
        constructor(n) {
          this.full = n, this.major = n.split(".")[0], this.minor = n.split(".")[1], this.patch = n.split(".").slice(2).join(".")
        }
      }
      const $l = new vl("9.0.0-rc.9");
      class wl {
        constructor() {}
        supports(n) {
          return ca(n)
        }
        create(n) {
          return new xl(n)
        }
      }
      const yl = (n, e) => e;
      class xl {
        constructor(n) {
          this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = n || yl
        }
        forEachItem(n) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) n(e)
        }
        forEachOperation(n) {
          let e = this._itHead,
            t = this._removalsHead,
            o = 0,
            r = null;
          for (; e || t;) {
            const i = !t || e && e.currentIndex < zl(t, o, r) ? e : t,
              s = zl(i, o, r),
              a = i.currentIndex;
            if (i === t) o--, t = t._nextRemoved;
            else if (e = e._next, null == i.previousIndex) o++;
            else {
              r || (r = []);
              const n = s - o,
                e = a - o;
              if (n != e) {
                for (let t = 0; t < n; t++) {
                  const o = t < r.length ? r[t] : r[t] = 0,
                    i = o + t;
                  e <= i && i < n && (r[t] = o + 1)
                }
                r[i.previousIndex] = e - n
              }
            }
            s !== a && n(i, s, a)
          }
        }
        forEachPreviousItem(n) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) n(e)
        }
        forEachAddedItem(n) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) n(e)
        }
        forEachMovedItem(n) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) n(e)
        }
        forEachRemovedItem(n) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) n(e)
        }
        forEachIdentityChange(n) {
          let e;
          for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) n(e)
        }
        diff(n) {
          if (null == n && (n = []), !ca(n)) throw new Error(`Error trying to diff '${fn(n)}'. Only arrays and iterables are allowed`);
          return this.check(n) ? this : null
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let e, t, o, r = this._itHead,
            i = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let e = 0; e < this.length; e++) t = n[e], o = this._trackByFn(e, t), null !== r && aa(r.trackById, o) ? (i && (r = this._verifyReinsertion(r, t, o, e)), aa(r.item, t) || this._addIdentityChange(r, t)) : (r = this._mismatch(r, t, o, e), i = !0), r = r._next
          } else e = 0,
            function(n, e) {
              if (Array.isArray(n))
                for (let t = 0; t < n.length; t++) e(n[t]);
              else {
                const t = n[sa()]();
                let o;
                for (; !(o = t.next()).done;) e(o.value)
              }
            }(n, n => {
              o = this._trackByFn(e, n), null !== r && aa(r.trackById, o) ? (i && (r = this._verifyReinsertion(r, n, o, e)), aa(r.item, n) || this._addIdentityChange(r, n)) : (r = this._mismatch(r, n, o, e), i = !0), r = r._next, e++
            }), this.length = e;
          return this._truncate(r), this.collection = n, this.isDirty
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
        }
        _reset() {
          if (this.isDirty) {
            let n, e;
            for (n = this._previousItHead = this._itHead; null !== n; n = n._next) n._nextPrevious = n._next;
            for (n = this._additionsHead; null !== n; n = n._nextAdded) n.previousIndex = n.currentIndex;
            for (this._additionsHead = this._additionsTail = null, n = this._movesHead; null !== n; n = e) n.previousIndex = n.currentIndex, e = n._nextMoved;
            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
          }
        }
        _mismatch(n, e, t, o) {
          let r;
          return null === n ? r = this._itTail : (r = n._prev, this._remove(n)), null !== (n = null === this._linkedRecords ? null : this._linkedRecords.get(t, o)) ? (aa(n.item, e) || this._addIdentityChange(n, e), this._moveAfter(n, r, o)) : null !== (n = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(t, null)) ? (aa(n.item, e) || this._addIdentityChange(n, e), this._reinsertAfter(n, r, o)) : n = this._addAfter(new kl(e, t), r, o), n
        }
        _verifyReinsertion(n, e, t, o) {
          let r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(t, null);
          return null !== r ? n = this._reinsertAfter(r, n._prev, o) : n.currentIndex != o && (n.currentIndex = o, this._addToMoves(n, o)), n
        }
        _truncate(n) {
          for (; null !== n;) {
            const e = n._next;
            this._addToRemovals(this._unlink(n)), n = e
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
        }
        _reinsertAfter(n, e, t) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
          const o = n._prevRemoved,
            r = n._nextRemoved;
          return null === o ? this._removalsHead = r : o._nextRemoved = r, null === r ? this._removalsTail = o : r._prevRemoved = o, this._insertAfter(n, e, t), this._addToMoves(n, t), n
        }
        _moveAfter(n, e, t) {
          return this._unlink(n), this._insertAfter(n, e, t), this._addToMoves(n, t), n
        }
        _addAfter(n, e, t) {
          return this._insertAfter(n, e, t), this._additionsTail = null === this._additionsTail ? this._additionsHead = n : this._additionsTail._nextAdded = n, n
        }
        _insertAfter(n, e, t) {
          const o = null === e ? this._itHead : e._next;
          return n._next = o, n._prev = e, null === o ? this._itTail = n : o._prev = n, null === e ? this._itHead = n : e._next = n, null === this._linkedRecords && (this._linkedRecords = new _l), this._linkedRecords.put(n), n.currentIndex = t, n
        }
        _remove(n) {
          return this._addToRemovals(this._unlink(n))
        }
        _unlink(n) {
          null !== this._linkedRecords && this._linkedRecords.remove(n);
          const e = n._prev,
            t = n._next;
          return null === e ? this._itHead = t : e._next = t, null === t ? this._itTail = e : t._prev = e, n
        }
        _addToMoves(n, e) {
          return n.previousIndex === e ? n : (this._movesTail = null === this._movesTail ? this._movesHead = n : this._movesTail._nextMoved = n, n)
        }
        _addToRemovals(n) {
          return null === this._unlinkedRecords && (this._unlinkedRecords = new _l), this._unlinkedRecords.put(n), n.currentIndex = null, n._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = n, n._prevRemoved = null) : (n._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = n), n
        }
        _addIdentityChange(n, e) {
          return n.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = n : this._identityChangesTail._nextIdentityChange = n, n
        }
      }
      class kl {
        constructor(n, e) {
          this.item = n, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
        }
      }
      class Cl {
        constructor() {
          this._head = null, this._tail = null
        }
        add(n) {
          null === this._head ? (this._head = this._tail = n, n._nextDup = null, n._prevDup = null) : (this._tail._nextDup = n, n._prevDup = this._tail, n._nextDup = null, this._tail = n)
        }
        get(n, e) {
          let t;
          for (t = this._head; null !== t; t = t._nextDup)
            if ((null === e || e <= t.currentIndex) && aa(t.trackById, n)) return t;
          return null
        }
        remove(n) {
          const e = n._prevDup,
            t = n._nextDup;
          return null === e ? this._head = t : e._nextDup = t, null === t ? this._tail = e : t._prevDup = e, null === this._head
        }
      }
      class _l {
        constructor() {
          this.map = new Map
        }
        put(n) {
          const e = n.trackById;
          let t = this.map.get(e);
          t || (t = new Cl, this.map.set(e, t)), t.add(n)
        }
        get(n, e) {
          const t = this.map.get(n);
          return t ? t.get(n, e) : null
        }
        remove(n) {
          const e = n.trackById;
          return this.map.get(e).remove(n) && this.map.delete(e), n
        }
        get isEmpty() {
          return 0 === this.map.size
        }
        clear() {
          this.map.clear()
        }
      }

      function zl(n, e, t) {
        const o = n.previousIndex;
        if (null === o) return o;
        let r = 0;
        return t && o < t.length && (r = t[o]), o + e + r
      }
      class Al {
        constructor() {}
        supports(n) {
          return n instanceof Map || da(n)
        }
        create() {
          return new Sl
        }
      }
      class Sl {
        constructor() {
          this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
        }
        forEachItem(n) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) n(e)
        }
        forEachPreviousItem(n) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) n(e)
        }
        forEachChangedItem(n) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) n(e)
        }
        forEachAddedItem(n) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) n(e)
        }
        forEachRemovedItem(n) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) n(e)
        }
        diff(n) {
          if (n) {
            if (!(n instanceof Map || da(n))) throw new Error(`Error trying to diff '${fn(n)}'. Only maps and objects are allowed`)
          } else n = new Map;
          return this.check(n) ? this : null
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let e = this._mapHead;
          if (this._appendAfter = null, this._forEach(n, (n, t) => {
              if (e && e.key === t) this._maybeAddToChanges(e, n), this._appendAfter = e, e = e._next;
              else {
                const o = this._getOrCreateRecordForKey(t, n);
                e = this._insertBeforeOrAppend(e, o)
              }
            }), e) {
            e._prev && (e._prev._next = null), this._removalsHead = e;
            for (let n = e; null !== n; n = n._nextRemoved) n === this._mapHead && (this._mapHead = null), this._records.delete(n.key), n._nextRemoved = n._next, n.previousValue = n.currentValue, n.currentValue = null, n._prev = null, n._next = null
          }
          return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
        }
        _insertBeforeOrAppend(n, e) {
          if (n) {
            const t = n._prev;
            return e._next = n, e._prev = t, n._prev = e, t && (t._next = e), n === this._mapHead && (this._mapHead = e), this._appendAfter = n, n
          }
          return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
        }
        _getOrCreateRecordForKey(n, e) {
          if (this._records.has(n)) {
            const t = this._records.get(n);
            this._maybeAddToChanges(t, e);
            const o = t._prev,
              r = t._next;
            return o && (o._next = r), r && (r._prev = o), t._next = null, t._prev = null, t
          }
          const t = new Il(n);
          return this._records.set(n, t), t.currentValue = e, this._addToAdditions(t), t
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (this._previousMapHead = this._mapHead, n = this._previousMapHead; null !== n; n = n._next) n._nextPrevious = n._next;
            for (n = this._changesHead; null !== n; n = n._nextChanged) n.previousValue = n.currentValue;
            for (n = this._additionsHead; null != n; n = n._nextAdded) n.previousValue = n.currentValue;
            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
          }
        }
        _maybeAddToChanges(n, e) {
          aa(e, n.currentValue) || (n.previousValue = n.currentValue, n.currentValue = e, this._addToChanges(n))
        }
        _addToAdditions(n) {
          null === this._additionsHead ? this._additionsHead = this._additionsTail = n : (this._additionsTail._nextAdded = n, this._additionsTail = n)
        }
        _addToChanges(n) {
          null === this._changesHead ? this._changesHead = this._changesTail = n : (this._changesTail._nextChanged = n, this._changesTail = n)
        }
        _forEach(n, e) {
          n instanceof Map ? n.forEach(e) : Object.keys(n).forEach(t => e(n[t], t))
        }
      }
      class Il {
        constructor(n) {
          this.key = n, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
        }
      }
      let El = (() => {
          class n {
            constructor(n) {
              this.factories = n
            }
            static create(e, t) {
              if (null != t) {
                const n = t.factories.slice();
                e = e.concat(n)
              }
              return new n(e)
            }
            static extend(e) {
              return {
                provide: n,
                useFactory: t => {
                  if (!t) throw new Error("Cannot extend IterableDiffers without a parent injector");
                  return n.create(e, t)
                },
                deps: [
                  [n, new J, new X]
                ]
              }
            }
            find(n) {
              const e = this.factories.find(e => e.supports(n));
              if (null != e) return e;
              throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'`);
              var t
            }
          }
          return n.\u0275prov = on({
            token: n,
            providedIn: "root",
            factory: () => new n([new wl])
          }), n
        })(),
        Pl = (() => {
          class n {
            constructor(n) {
              this.factories = n
            }
            static create(e, t) {
              if (t) {
                const n = t.factories.slice();
                e = e.concat(n)
              }
              return new n(e)
            }
            static extend(e) {
              return {
                provide: n,
                useFactory: t => {
                  if (!t) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                  return n.create(e, t)
                },
                deps: [
                  [n, new J, new X]
                ]
              }
            }
            find(n) {
              const e = this.factories.find(e => e.supports(n));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${n}'`)
            }
          }
          return n.\u0275prov = on({
            token: n,
            providedIn: "root",
            factory: () => new n([new Al])
          }), n
        })();
      const Tl = [new Al],
        Ml = new El([new wl]),
        Ol = new Pl(Tl);
      let Rl = (() => {
        class n {}
        return n.__NG_ELEMENT_ID__ = () => Nl(n, hl), n
      })();
      const Nl = function(n, e) {
        return ss(n, e, Ie(), ye())
      };
      let Dl = (() => {
        class n {}
        return n.__NG_ELEMENT_ID__ = () => Fl(n, hl), n
      })();
      const Fl = function(n, e) {
          return as(n, e, Ie(), ye())
        },
        jl = {};

      function Vl(n) {
        const e = [];
        for (let t in n) n.hasOwnProperty(t) && e.push({
          propName: n[t],
          templateName: t
        });
        return e
      }
      const Bl = new En("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => gt
      });
      class ql extends dl {
        constructor(n, e) {
          super(), this.componentDef = n, this.ngModule = e, this.componentType = n.type, this.selector = n.selectors.map(yr).join(","), this.ngContentSelectors = n.ngContentSelectors ? n.ngContentSelectors : [], this.isBoundToModule = !!e
        }
        get inputs() {
          return Vl(this.componentDef.inputs)
        }
        get outputs() {
          return Vl(this.componentDef.outputs)
        }
        create(n, e, t, o) {
          const r = (o = o || this.ngModule) ? function(n, e) {
              return {
                get: (t, o, r) => {
                  const i = n.get(t, jl, r);
                  return i !== jl || o === jl ? i : e.get(t, o, r)
                }
              }
            }(n, o.injector) : n,
            i = r.get(gl, st),
            s = r.get(bl, null),
            a = t ? function(n, e, t) {
              const o = n.createRenderer(null, null);
              if (it(o)) return o.selectRootElement(e, t === Zn.ShadowDom);
              let r = "string" == typeof e ? o.querySelector(e) : e;
              return r.textContent = "", r
            }(i, t, this.componentDef.encapsulation) : Xr(this.componentDef.selectors[0][0] || "div", i.createRenderer(null, this.componentDef), null),
            l = this.componentDef.onPush ? 576 : 528,
            c = "string" == typeof t && /^#root-ng-internal-isolated-\d+/.test(t),
            d = {
              components: [],
              scheduler: gt,
              clean: Ei,
              playerHandler: null,
              flags: 0
            },
            u = i.createRenderer(a, this.componentDef);
          t && a && (it(u) ? u.setAttribute(a, "ng-version", $l.full) : a.setAttribute("ng-version", $l.full));
          const p = ai(0, -1, null, 1, 0, null, null, null, null, null),
            h = Qr(null, p, d, l, null, null, i, u, s, r);
          let f, g;
          qe(h, null);
          try {
            const n = function(n, e, t, o, r, i) {
              const s = t[1];
              t[19] = n;
              const a = Jr(s, null, 0, 3, null, null),
                l = Qr(t, si(e), null, e.onPush ? 64 : 16, t[19], a, o, r, void 0);
              return s.firstCreatePass && (fo(co(a, t), s, e.type), fi(s, a), mi(a, t.length, 1)), _i(t, l), t[19] = l
            }(a, this.componentDef, h, i, u);
            g = ir(0, h), e && (g.projection = e.map(n => Array.from(n))), f = function(n, e, t, o, r) {
              const i = t[1],
                s = function(n, e, t) {
                  const o = Ie();
                  n.firstCreatePass && (t.providersResolver && t.providersResolver(t), hi(n, o, 1), bi(n, e, t));
                  const r = $o(e, n, e.length - 1, o);
                  ur(r, e);
                  const i = rr(o, e);
                  return i && ur(i, e), r
                }(i, t, e);
              o.components.push(s), n[8] = s, r && r.forEach(n => n(s, e)), e.contentQueries && e.contentQueries(1, s, t.length - 1);
              const a = Ie();
              return i.firstCreatePass && e.hostBindings && (ke(a.index - 19), Ae(), pi(e, i.expandoInstructions, s, a, i.firstCreatePass), ke(null)), s
            }(n, this.componentDef, h, d, [Ua]), ni(h, p, null)
          } finally {
            We()
          }
          const m = new Hl(this.componentType, f, is(hl, g, h), h, g);
          return t && !c || (m.hostView._tViewNode.child = g), m
        }
      }
      class Hl extends class {} {
        constructor(n, e, t, o, r) {
          super(), this.location = t, this._rootLView = o, this._tNode = r, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new es(o), this.hostView._tViewNode = function(n, e, t, o) {
            let r = n.node;
            return null == r && (n.node = r = li(0, null, 2, -1, null, null)), o[6] = r
          }(o[1], 0, 0, o), this.componentType = n
        }
        get injector() {
          return new xo(this._tNode, this._rootLView)
        }
        destroy() {
          this.destroyCbs && (this.destroyCbs.forEach(n => n()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
        }
        onDestroy(n) {
          this.destroyCbs && this.destroyCbs.push(n)
        }
      }
      const Ll = void 0;
      var Wl = ["en", [
          ["a", "p"],
          ["AM", "PM"], Ll
        ],
        [
          ["AM", "PM"], Ll, Ll
        ],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        ], Ll, [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        ], Ll, [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"]
        ], 0, [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Ll, "{1} 'at' {0}", Ll],
        [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {},
        function(n) {
          let e = Math.floor(Math.abs(n)),
            t = n.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === e && 0 === t ? 1 : 5
        }
      ];
      let Ul = {};

      function Kl(n) {
        return n in Ul || (Ul[n] = xn.ng && xn.ng.common && xn.ng.common.locales && xn.ng.common.locales[n]), Ul[n]
      }
      const Yl = function() {
        var n = {
          LocaleId: 0,
          DayPeriodsFormat: 1,
          DayPeriodsStandalone: 2,
          DaysFormat: 3,
          DaysStandalone: 4,
          MonthsFormat: 5,
          MonthsStandalone: 6,
          Eras: 7,
          FirstDayOfWeek: 8,
          WeekendRange: 9,
          DateFormat: 10,
          TimeFormat: 11,
          DateTimeFormat: 12,
          NumberSymbols: 13,
          NumberFormats: 14,
          CurrencyCode: 15,
          CurrencySymbol: 16,
          CurrencyName: 17,
          Currencies: 18,
          PluralCase: 19,
          ExtraData: 20
        };
        return n[n.LocaleId] = "LocaleId", n[n.DayPeriodsFormat] = "DayPeriodsFormat", n[n.DayPeriodsStandalone] = "DayPeriodsStandalone", n[n.DaysFormat] = "DaysFormat", n[n.DaysStandalone] = "DaysStandalone", n[n.MonthsFormat] = "MonthsFormat", n[n.MonthsStandalone] = "MonthsStandalone", n[n.Eras] = "Eras", n[n.FirstDayOfWeek] = "FirstDayOfWeek", n[n.WeekendRange] = "WeekendRange", n[n.DateFormat] = "DateFormat", n[n.TimeFormat] = "TimeFormat", n[n.DateTimeFormat] = "DateTimeFormat", n[n.NumberSymbols] = "NumberSymbols", n[n.NumberFormats] = "NumberFormats", n[n.CurrencyCode] = "CurrencyCode", n[n.CurrencySymbol] = "CurrencySymbol", n[n.CurrencyName] = "CurrencyName", n[n.Currencies] = "Currencies", n[n.PluralCase] = "PluralCase", n[n.ExtraData] = "ExtraData", n
      }();
      let Gl = "en-US";

      function Zl(n) {
        var e;
        e = "Expected localeId to be defined", null == n && function(n) {
          throw new Error(`ASSERTION ERROR: ${n}`)
        }(e), "string" == typeof n && (Gl = n.toLowerCase().replace(/_/g, "-"))
      }
      const Xl = new Map,
        Ql = {
          provide: pl,
          useClass: class extends pl {
            constructor(n) {
              super(), this.ngModule = n
            }
            resolveComponentFactory(n) {
              const e = le(n);
              return new ql(e, this.ngModule)
            }
          },
          deps: [Ln]
        };
      class Jl extends Ln {
        constructor(n, e) {
          super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [];
          const t = de(n),
            o = n[An] || null;
          o && Zl(o), this._bootstrapComponents = bt(t.bootstrap), this._r3Injector = _s(n, e, [{
            provide: Ln,
            useValue: this
          }, Ql], fn(n)), this.instance = this.get(n)
        }
        get(n, e = Ms.THROW_IF_NOT_FOUND, t = nn.Default) {
          return n === Ms || n === Ln || n === Pn ? this : this._r3Injector.get(n, e, t)
        }
        get componentFactoryResolver() {
          return this.get(pl)
        }
        destroy() {
          const n = this._r3Injector;
          !n.destroyed && n.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
        }
        onDestroy(n) {
          this.destroyCbs.push(n)
        }
      }
      class nc extends class {} {
        constructor(n) {
          super(), this.moduleType = n, null !== de(n) && function n(e) {
            if (null !== e.\u0275mod.id) {
              const n = e.\u0275mod.id;
              (function(n, e, t) {
                if (e && e !== t) throw new Error(`Duplicate module registered for ${n} - ${fn(e)} vs ${fn(e.name)}`)
              })(n, Xl.get(n), e), Xl.set(n, e)
            }
            let t = e.\u0275mod.imports;
            t instanceof Function && (t = t()), t && t.forEach(e => n(e))
          }(n)
        }
        create(n) {
          return new Jl(this.moduleType, n)
        }
      }

      function ec(n, e) {
        const t = ye()[1];
        let o;
        const r = n + 19;
        t.firstCreatePass ? (o = function(n, e) {
          if (e)
            for (let t = e.length - 1; t >= 0; t--) {
              const o = e[t];
              if (n === o.name) return o
            }
          throw new Error(`The pipe '${n}' could not be found!`)
        }(e, t.pipeRegistry), t.data[r] = o, o.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(r, o.onDestroy)) : o = t.data[r];
        const i = (o.factory || (o.factory = ce(o.type)))();
        return function(n, e) {
          const t = ye(),
            o = t[1],
            r = n + 19;
          r >= o.data.length && (o.data[r] = null, o.blueprint[r] = null), t[r] = e
        }(n, i), i
      }

      function tc(n, e, t) {
        const o = ye(),
          r = function(n, e) {
            return n[e + 19]
          }(o, n);
        return function(n, e) {
          return la.isWrapped(e) && (e = la.unwrap(e), n[ve.lFrame.bindingIndex] = At), e
        }(o, function(n, e) {
          return n[1].data[e + 19].pure
        }(o, n) ? function(n, e, t, o, r, i) {
          const s = e + t;
          return ha(n, s, r) ? ua(n, s + 1, i ? o.call(i, r) : o(r)) : pa(n, s + 1)
        }(o, Oe(), e, r.transform, t, r) : r.transform(t))
      }
      class oc extends k {
        constructor(n = !1) {
          super(), this.__isAsync = n
        }
        emit(n) {
          super.next(n)
        }
        subscribe(n, e, t) {
          let o, r = n => null,
            i = () => null;
          n && "object" == typeof n ? (o = this.__isAsync ? e => {
            setTimeout(() => n.next(e))
          } : e => {
            n.next(e)
          }, n.error && (r = this.__isAsync ? e => {
            setTimeout(() => n.error(e))
          } : e => {
            n.error(e)
          }), n.complete && (i = this.__isAsync ? () => {
            setTimeout(() => n.complete())
          } : () => {
            n.complete()
          })) : (o = this.__isAsync ? e => {
            setTimeout(() => n(e))
          } : e => {
            n(e)
          }, e && (r = this.__isAsync ? n => {
            setTimeout(() => e(n))
          } : n => {
            e(n)
          }), t && (i = this.__isAsync ? () => {
            setTimeout(() => t())
          } : () => {
            t()
          }));
          const s = super.subscribe(o, r, i);
          return n instanceof u && n.add(s), s
        }
      }

      function rc() {
        return this._results[sa()]()
      }
      class ic {
        constructor() {
          this.dirty = !0, this._results = [], this.changes = new oc, this.length = 0;
          const n = sa(),
            e = ic.prototype;
          e[n] || (e[n] = rc)
        }
        map(n) {
          return this._results.map(n)
        }
        filter(n) {
          return this._results.filter(n)
        }
        find(n) {
          return this._results.find(n)
        }
        reduce(n, e) {
          return this._results.reduce(n, e)
        }
        forEach(n) {
          this._results.forEach(n)
        }
        some(n) {
          return this._results.some(n)
        }
        toArray() {
          return this._results.slice()
        }
        toString() {
          return this._results.toString()
        }
        reset(n) {
          this._results = function n(e, t) {
            void 0 === t && (t = e);
            for (let o = 0; o < e.length; o++) {
              let r = e[o];
              Array.isArray(r) ? (t === e && (t = e.slice(0, o)), n(r, t)) : t !== e && t.push(r)
            }
            return t
          }(n), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
        }
        notifyOnChanges() {
          this.changes.emit(this)
        }
        setDirty() {
          this.dirty = !0
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe()
        }
      }
      class sc {
        constructor(n) {
          this.queryList = n, this.matches = null
        }
        clone() {
          return new sc(this.queryList)
        }
        setDirty() {
          this.queryList.setDirty()
        }
      }
      class ac {
        constructor(n = []) {
          this.queries = n
        }
        createEmbeddedView(n) {
          const e = n.queries;
          if (null !== e) {
            const t = null !== n.contentQueries ? n.contentQueries[0] : e.length,
              o = [];
            for (let n = 0; n < t; n++) {
              const t = e.getByIndex(n);
              o.push(this.queries[t.indexInDeclarationView].clone())
            }
            return new ac(o)
          }
          return null
        }
        insertView(n) {
          this.dirtyQueriesWithMatches(n)
        }
        detachView(n) {
          this.dirtyQueriesWithMatches(n)
        }
        dirtyQueriesWithMatches(n) {
          for (let e = 0; e < this.queries.length; e++) null !== vc(n, e).matches && this.queries[e].setDirty()
        }
      }
      class lc {
        constructor(n, e, t, o = null) {
          this.predicate = n, this.descendants = e, this.isStatic = t, this.read = o
        }
      }
      class cc {
        constructor(n = []) {
          this.queries = n
        }
        elementStart(n, e) {
          for (let t = 0; t < this.queries.length; t++) this.queries[t].elementStart(n, e)
        }
        elementEnd(n) {
          for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(n)
        }
        embeddedTView(n) {
          let e = null;
          for (let t = 0; t < this.length; t++) {
            const o = null !== e ? e.length : 0,
              r = this.getByIndex(t).embeddedTView(n, o);
            r && (r.indexInDeclarationView = t, null !== e ? e.push(r) : e = [r])
          }
          return null !== e ? new cc(e) : null
        }
        template(n, e) {
          for (let t = 0; t < this.queries.length; t++) this.queries[t].template(n, e)
        }
        getByIndex(n) {
          return this.queries[n]
        }
        get length() {
          return this.queries.length
        }
        track(n) {
          this.queries.push(n)
        }
      }
      class dc {
        constructor(n, e = -1) {
          this.metadata = n, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e
        }
        elementStart(n, e) {
          this.isApplyingToNode(e) && this.matchTNode(n, e)
        }
        elementEnd(n) {
          this._declarationNodeIndex === n.index && (this._appliesToNextNode = !1)
        }
        template(n, e) {
          this.elementStart(n, e)
        }
        embeddedTView(n, e) {
          return this.isApplyingToNode(n) ? (this.crossesNgTemplate = !0, this.addMatch(-n.index, e), new dc(this.metadata)) : null
        }
        isApplyingToNode(n) {
          return this._appliesToNextNode && !1 === this.metadata.descendants ? this._declarationNodeIndex === (n.parent ? n.parent.index : -1) : this._appliesToNextNode
        }
        matchTNode(n, e) {
          if (Array.isArray(this.metadata.predicate)) {
            const t = this.metadata.predicate;
            for (let o = 0; o < t.length; o++) this.matchTNodeWithReadOption(n, e, uc(e, t[o]))
          } else {
            const t = this.metadata.predicate;
            t === Rl ? 0 === e.type && this.matchTNodeWithReadOption(n, e, -1) : this.matchTNodeWithReadOption(n, e, vo(e, n, t, !1, !1))
          }
        }
        matchTNodeWithReadOption(n, e, t) {
          if (null !== t) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === hl || o === Dl || o === Rl && 0 === e.type) this.addMatch(e.index, -2);
              else {
                const t = vo(e, n, o, !1, !1);
                null !== t && this.addMatch(e.index, t)
              }
            else this.addMatch(e.index, t)
          }
        }
        addMatch(n, e) {
          null === this.matches ? this.matches = [n, e] : this.matches.push(n, e)
        }
      }

      function uc(n, e) {
        const t = n.localNames;
        if (null !== t)
          for (let o = 0; o < t.length; o += 2)
            if (t[o] === e) return t[o + 1];
        return null
      }

      function pc(n, e, t, o) {
        return -1 === t ? function(n, e) {
          return 3 === n.type || 4 === n.type ? is(hl, n, e) : 0 === n.type ? ss(Rl, hl, n, e) : null
        }(e, n) : -2 === t ? function(n, e, t) {
          return t === hl ? is(hl, e, n) : t === Rl ? ss(Rl, hl, e, n) : t === Dl ? as(Dl, hl, e, n) : void 0
        }(n, e, o) : $o(n, n[1], t, e)
      }

      function hc(n, e, t) {
        const o = n[5].queries[t];
        if (null === o.matches) {
          const t = n[1].data,
            r = e.matches,
            i = [];
          for (let o = 0; o < r.length; o += 2) {
            const s = r[o];
            i.push(s < 0 ? null : pc(n, t[s], r[o + 1], e.metadata.read))
          }
          o.matches = i
        }
        return o.matches
      }

      function fc(n) {
        const e = ye(),
          t = Fe();
        je(t + 1);
        const o = vc(e[1], t);
        if (n.dirty && lr(e) === o.metadata.isStatic) {
          if (null === o.matches) n.reset([]);
          else {
            const r = o.crossesNgTemplate ? function n(e, t, o) {
              const r = e[1].queries.getByIndex(t),
                i = r.matches;
              if (null !== i) {
                const s = hc(e, r, t);
                for (let t = 0; t < i.length; t += 2) {
                  const r = i[t];
                  if (r > 0) o.push(s[t / 2]);
                  else {
                    const s = i[t + 1],
                      a = e[-r];
                    for (let e = 9; e < a.length; e++) {
                      const t = a[e];
                      t[17] === t[3] && n(t, s, o)
                    }
                    if (null !== a[5]) {
                      const e = a[5];
                      for (let t = 0; t < e.length; t++) n(e[t], s, o)
                    }
                  }
                }
              }
              return o
            }(e, t, []) : hc(e, o, t);
            n.reset(r), n.notifyOnChanges()
          }
          return !0
        }
        return !1
      }

      function gc(n, e, t) {
        mc(ye(), n, e, t, !0)
      }

      function mc(n, e, t, o, r) {
        const i = n[1];
        i.firstCreatePass && (function(n, e, t) {
            null === n.queries && (n.queries = new cc), n.queries.track(new dc(e, -1))
          }(i, new lc(e, t, r, o)), r && (i.staticViewQueries = !0)),
          function(n) {
            const e = new ic;
            ! function(n, e, t) {
              const o = Pi(n);
              o.push(e), n[1].firstCreatePass && Ti(n).push(t, o.length - 1)
            }(n, e, e.destroy), null === n[5] && (n[5] = new ac), n[5].queries.push(new sc(e))
          }(n)
      }

      function bc() {
        return n = ye(), e = Fe(), n[5].queries[e].queryList;
        var n, e
      }

      function vc(n, e) {
        return n.queries.getByIndex(e)
      }
      const $c = new En("Application Initializer");
      let wc = (() => {
        class n {
          constructor(n) {
            this.appInits = n, this.initialized = !1, this.done = !1, this.donePromise = new Promise((n, e) => {
              this.resolve = n, this.reject = e
            })
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              e = () => {
                this.done = !0, this.resolve()
              };
            if (this.appInits)
              for (let t = 0; t < this.appInits.length; t++) {
                const e = this.appInits[t]();
                Na(e) && n.push(e)
              }
            Promise.all(n).then(() => {
              e()
            }).catch(n => {
              this.reject(n)
            }), 0 === n.length && e(), this.initialized = !0
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(Vn($c, 8))
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();
      const yc = new En("AppId"),
        xc = {
          provide: yc,
          useFactory: function() {
            return `${kc()}${kc()}${kc()}`
          },
          deps: []
        };

      function kc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()))
      }
      const Cc = new En("Platform Initializer"),
        _c = new En("Platform ID"),
        zc = new En("appBootstrapListener");
      let Ac = (() => {
        class n {
          log(n) {
            console.log(n)
          }
          warn(n) {
            console.warn(n)
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();
      const Sc = new En("LocaleId"),
        Ic = new En("DefaultCurrencyCode");
      class Ec {
        constructor(n, e) {
          this.ngModuleFactory = n, this.componentFactories = e
        }
      }
      const Pc = function(n) {
          return new nc(n)
        },
        Tc = Pc,
        Mc = function(n) {
          return Promise.resolve(Pc(n))
        },
        Oc = function(n) {
          const e = Pc(n),
            t = bt(de(n).declarations).reduce((n, e) => {
              const t = le(e);
              return t && n.push(new ql(t)), n
            }, []);
          return new Ec(e, t)
        },
        Rc = Oc,
        Nc = function(n) {
          return Promise.resolve(Oc(n))
        };
      let Dc = (() => {
        class n {
          constructor() {
            this.compileModuleSync = Tc, this.compileModuleAsync = Mc, this.compileModuleAndAllComponentsSync = Rc, this.compileModuleAndAllComponentsAsync = Nc
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return n.\u0275fac = function(e) {
          return new(e || n)
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();
      const Fc = new En("compilerOptions"),
        jc = (() => Promise.resolve(0))();

      function Vc(n) {
        "undefined" == typeof Zone ? jc.then(() => {
          n && n.apply(null, null)
        }) : Zone.current.scheduleMicroTask("scheduleMicrotask", n)
      }
      class Bc {
        constructor({
          enableLongStackTrace: n = !1,
          shouldCoalesceEventChangeDetection: e = !1
        }) {
          if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new oc(!1), this.onMicrotaskEmpty = new oc(!1), this.onStable = new oc(!1), this.onError = new oc(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = e, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function() {
              let n = xn.requestAnimationFrame,
                e = xn.cancelAnimationFrame;
              if ("undefined" != typeof Zone && n && e) {
                const t = n[Zone.__symbol__("OriginalDelegate")];
                t && (n = t);
                const o = e[Zone.__symbol__("OriginalDelegate")];
                o && (e = o)
              }
              return {
                nativeRequestAnimationFrame: n,
                nativeCancelAnimationFrame: e
              }
            }().nativeRequestAnimationFrame,
            function(n) {
              const e = !!n.shouldCoalesceEventChangeDetection && n.nativeRequestAnimationFrame && (() => {
                ! function(n) {
                  -1 === n.lastRequestAnimationFrameId && (n.lastRequestAnimationFrameId = n.nativeRequestAnimationFrame.call(xn, () => {
                    n.lastRequestAnimationFrameId = -1, Wc(n), Lc(n)
                  }), Wc(n))
                }(n)
              });
              n._inner = n._inner.fork({
                name: "angular",
                properties: {
                  isAngularZone: !0,
                  maybeDelayChangeDetection: e
                },
                onInvokeTask: (t, o, r, i, s, a) => {
                  try {
                    return Uc(n), t.invokeTask(r, i, s, a)
                  } finally {
                    e && "eventTask" === i.type && e(), Kc(n)
                  }
                },
                onInvoke: (e, t, o, r, i, s, a) => {
                  try {
                    return Uc(n), e.invoke(o, r, i, s, a)
                  } finally {
                    Kc(n)
                  }
                },
                onHasTask: (e, t, o, r) => {
                  e.hasTask(o, r), t === o && ("microTask" == r.change ? (n._hasPendingMicrotasks = r.microTask, Wc(n), Lc(n)) : "macroTask" == r.change && (n.hasPendingMacrotasks = r.macroTask))
                },
                onHandleError: (e, t, o, r) => (e.handleError(o, r), n.runOutsideAngular(() => n.onError.emit(r)), !1)
              })
            }(this)
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone")
        }
        static assertInAngularZone() {
          if (!Bc.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
        }
        static assertNotInAngularZone() {
          if (Bc.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
        }
        run(n, e, t) {
          return this._inner.run(n, e, t)
        }
        runTask(n, e, t, o) {
          const r = this._inner,
            i = r.scheduleEventTask("NgZoneEvent: " + o, n, Hc, qc, qc);
          try {
            return r.runTask(i, e, t)
          } finally {
            r.cancelTask(i)
          }
        }
        runGuarded(n, e, t) {
          return this._inner.runGuarded(n, e, t)
        }
        runOutsideAngular(n) {
          return this._outer.run(n)
        }
      }

      function qc() {}
      const Hc = {};

      function Lc(n) {
        if (0 == n._nesting && !n.hasPendingMicrotasks && !n.isStable) try {
          n._nesting++, n.onMicrotaskEmpty.emit(null)
        } finally {
          if (n._nesting--, !n.hasPendingMicrotasks) try {
            n.runOutsideAngular(() => n.onStable.emit(null))
          } finally {
            n.isStable = !0
          }
        }
      }

      function Wc(n) {
        n.hasPendingMicrotasks = !!(n._hasPendingMicrotasks || n.shouldCoalesceEventChangeDetection && -1 !== n.lastRequestAnimationFrameId)
      }

      function Uc(n) {
        n._nesting++, n.isStable && (n.isStable = !1, n.onUnstable.emit(null))
      }

      function Kc(n) {
        n._nesting--, Lc(n)
      }
      class Yc {
        constructor() {
          this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new oc, this.onMicrotaskEmpty = new oc, this.onStable = new oc, this.onError = new oc
        }
        run(n, e, t) {
          return n.apply(e, t)
        }
        runGuarded(n, e, t) {
          return n.apply(e, t)
        }
        runOutsideAngular(n) {
          return n()
        }
        runTask(n, e, t, o) {
          return n.apply(e, t)
        }
      }
      let Gc = (() => {
          class n {
            constructor(n) {
              this._ngZone = n, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), n.run(() => {
                this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
              })
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  this._didWork = !0, this._isZoneStable = !1
                }
              }), this._ngZone.runOutsideAngular(() => {
                this._ngZone.onStable.subscribe({
                  next: () => {
                    Bc.assertNotInAngularZone(), Vc(() => {
                      this._isZoneStable = !0, this._runCallbacksIfReady()
                    })
                  }
                })
              })
            }
            increasePendingRequestCount() {
              return this._pendingCount += 1, this._didWork = !0, this._pendingCount
            }
            decreasePendingRequestCount() {
              if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
            }
            _runCallbacksIfReady() {
              if (this.isStable()) Vc(() => {
                for (; 0 !== this._callbacks.length;) {
                  let n = this._callbacks.pop();
                  clearTimeout(n.timeoutId), n.doneCb(this._didWork)
                }
                this._didWork = !1
              });
              else {
                let n = this.getPendingTasks();
                this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(n) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
                source: n.source,
                creationLocation: n.creationLocation,
                data: n.data
              })) : []
            }
            addCallback(n, e, t) {
              let o = -1;
              e && e > 0 && (o = setTimeout(() => {
                this._callbacks = this._callbacks.filter(n => n.timeoutId !== o), n(this._didWork, this.getPendingTasks())
              }, e)), this._callbacks.push({
                doneCb: n,
                timeoutId: o,
                updateCb: t
              })
            }
            whenStable(n, e, t) {
              if (t && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
              this.addCallback(n, e, t), this._runCallbacksIfReady()
            }
            getPendingRequestCount() {
              return this._pendingCount
            }
            findProviders(n, e, t) {
              return []
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)(Vn(Bc))
          }, n.\u0275prov = on({
            token: n,
            factory: n.\u0275fac
          }), n
        })(),
        Zc = (() => {
          class n {
            constructor() {
              this._applications = new Map, Jc.addToWindow(this)
            }
            registerApplication(n, e) {
              this._applications.set(n, e)
            }
            unregisterApplication(n) {
              this._applications.delete(n)
            }
            unregisterAllApplications() {
              this._applications.clear()
            }
            getTestability(n) {
              return this._applications.get(n) || null
            }
            getAllTestabilities() {
              return Array.from(this._applications.values())
            }
            getAllRootElements() {
              return Array.from(this._applications.keys())
            }
            findTestabilityInTree(n, e = !0) {
              return Jc.findTestabilityInTree(this, n, e)
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275prov = on({
            token: n,
            factory: n.\u0275fac
          }), n
        })();
      class Xc {
        addToWindow(n) {}
        findTestabilityInTree(n, e, t) {
          return null
        }
      }
      let Qc, Jc = new Xc,
        nd = function(n, e, t) {
          const o = new nc(t);
          if (0 === ea.size) return Promise.resolve(o);
          const r = function(n) {
            const e = [];
            return n.forEach(n => n && e.push(...n)), e
          }(n.get(Fc, []).concat(e).map(n => n.providers));
          if (0 === r.length) return Promise.resolve(o);
          const i = function() {
              const n = xn.ng;
              if (!n || !n.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
              return n.\u0275compilerFacade
            }(),
            s = Ms.create({
              providers: r
            }).get(i.ResourceLoader);
          return function(n) {
            const e = [],
              t = new Map;

            function o(n) {
              let e = t.get(n);
              if (!e) {
                const o = (n => Promise.resolve(s.get(n)))(n);
                t.set(n, e = o.then(oa))
              }
              return e
            }
            return ea.forEach((n, t) => {
              const r = [];
              n.templateUrl && r.push(o(n.templateUrl).then(e => {
                n.template = e
              }));
              const i = n.styleUrls,
                s = n.styles || (n.styles = []),
                a = n.styles.length;
              i && i.forEach((e, t) => {
                s.push(""), r.push(o(e).then(o => {
                  s[a + t] = o, i.splice(i.indexOf(e), 1), 0 == i.length && (n.styleUrls = void 0)
                }))
              });
              const l = Promise.all(r).then(() => function(n) {
                ta.delete(n)
              }(t));
              e.push(l)
            }), ea = new Map, Promise.all(e).then(() => {})
          }().then(() => o)
        };
      const ed = new En("AllowMultipleToken");

      function td(n, e, t = []) {
        const o = `Platform: ${e}`,
          r = new En(o);
        return (e = []) => {
          let i = od();
          if (!i || i.injector.get(ed, !1))
            if (n) n(t.concat(e).concat({
              provide: r,
              useValue: !0
            }));
            else {
              const n = t.concat(e).concat({
                provide: r,
                useValue: !0
              }, {
                provide: $s,
                useValue: "platform"
              });
              ! function(n) {
                if (Qc && !Qc.destroyed && !Qc.injector.get(ed, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                Qc = n.get(rd);
                const e = n.get(Cc, null);
                e && e.forEach(n => n())
              }(Ms.create({
                providers: n,
                name: o
              }))
            } return function(n) {
            const e = od();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(n, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
            return e
          }(r)
        }
      }

      function od() {
        return Qc && !Qc.destroyed ? Qc : null
      }
      let rd = (() => {
        class n {
          constructor(n) {
            this._injector = n, this._modules = [], this._destroyListeners = [], this._destroyed = !1
          }
          bootstrapModuleFactory(n, e) {
            const t = function(n, e) {
                let t;
                return t = "noop" === n ? new Yc : ("zone.js" === n ? void 0 : n) || new Bc({
                  enableLongStackTrace: Io(),
                  shouldCoalesceEventChangeDetection: e
                }), t
              }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1),
              o = [{
                provide: Bc,
                useValue: t
              }];
            return t.run(() => {
              const e = Ms.create({
                  providers: o,
                  parent: this.injector,
                  name: n.moduleType.name
                }),
                r = n.create(e),
                i = r.injector.get(zo, null);
              if (!i) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
              return Zl(r.injector.get(Sc, "en-US") || "en-US"), r.onDestroy(() => ad(this._modules, r)), t.runOutsideAngular(() => t.onError.subscribe({
                  next: n => {
                    i.handleError(n)
                  }
                })),
                function(n, e, t) {
                  try {
                    const o = t();
                    return Na(o) ? o.catch(t => {
                      throw e.runOutsideAngular(() => n.handleError(t)), t
                    }) : o
                  } catch (o) {
                    throw e.runOutsideAngular(() => n.handleError(o)), o
                  }
                }(i, t, () => {
                  const n = r.injector.get(wc);
                  return n.runInitializers(), n.donePromise.then(() => (this._moduleDoBootstrap(r), r))
                })
            })
          }
          bootstrapModule(n, e = []) {
            const t = id({}, e);
            return nd(this.injector, t, n).then(n => this.bootstrapModuleFactory(n, t))
          }
          _moduleDoBootstrap(n) {
            const e = n.injector.get(sd);
            if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(n => e.bootstrap(n));
            else {
              if (!n.instance.ngDoBootstrap) throw new Error(`The module ${fn(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
              n.instance.ngDoBootstrap(e)
            }
            this._modules.push(n)
          }
          onDestroy(n) {
            this._destroyListeners.push(n)
          }
          get injector() {
            return this._injector
          }
          destroy() {
            if (this._destroyed) throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach(n => n.destroy()), this._destroyListeners.forEach(n => n()), this._destroyed = !0
          }
          get destroyed() {
            return this._destroyed
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(Vn(Ms))
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();

      function id(n, e) {
        return Array.isArray(e) ? e.reduce(id, n) : Object.assign(Object.assign({}, n), e)
      }
      let sd = (() => {
        class n {
          constructor(n, e, t, o, r, i) {
            this._zone = n, this._console = e, this._injector = t, this._exceptionHandler = o, this._componentFactoryResolver = r, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Io(), this._zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this._zone.run(() => {
                  this.tick()
                })
              }
            });
            const s = new v(n => {
                this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                  n.next(this._stable), n.complete()
                })
              }),
              a = new v(n => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    Bc.assertNotInAngularZone(), Vc(() => {
                      this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, n.next(!0))
                    })
                  })
                });
                const t = this._zone.onUnstable.subscribe(() => {
                  Bc.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                    n.next(!1)
                  }))
                });
                return () => {
                  e.unsubscribe(), t.unsubscribe()
                }
              });
            this.isStable = V(s, a.pipe(n => {
              return B()((e = K, function(n) {
                let t;
                t = "function" == typeof e ? e : function() {
                  return e
                };
                const o = Object.create(n, W);
                return o.source = n, o.subjectFactory = t, o
              })(n));
              var e
            }))
          }
          bootstrap(n, e) {
            if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
            let t;
            t = n instanceof dl ? n : this._componentFactoryResolver.resolveComponentFactory(n), this.componentTypes.push(t.componentType);
            const o = t.isBoundToModule ? void 0 : this._injector.get(Ln),
              r = t.create(Ms.NULL, [], e || t.selector, o);
            r.onDestroy(() => {
              this._unloadComponent(r)
            });
            const i = r.injector.get(Gc, null);
            return i && r.injector.get(Zc).registerApplication(r.location.nativeElement, i), this._loadComponent(r), Io() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), r
          }
          tick() {
            if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
              if (this._enforceNoNewChanges)
                for (let n of this._views) n.checkNoChanges()
            } catch (n) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n))
            } finally {
              this._runningTick = !1
            }
          }
          attachView(n) {
            const e = n;
            this._views.push(e), e.attachToAppRef(this)
          }
          detachView(n) {
            const e = n;
            ad(this._views, e), e.detachFromAppRef()
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n), this._injector.get(zc, []).concat(this._bootstrapListeners).forEach(e => e(n))
          }
          _unloadComponent(n) {
            this.detachView(n.hostView), ad(this.components, n)
          }
          ngOnDestroy() {
            this._views.slice().forEach(n => n.destroy())
          }
          get viewCount() {
            return this._views.length
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(Vn(Bc), Vn(Ac), Vn(Ms), Vn(zo), Vn(pl), Vn(wc))
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();

      function ad(n, e) {
        const t = n.indexOf(e);
        t > -1 && n.splice(t, 1)
      }
      const ld = td(null, "core", [{
          provide: _c,
          useValue: "unknown"
        }, {
          provide: rd,
          deps: [Ms]
        }, {
          provide: Zc,
          deps: []
        }, {
          provide: Ac,
          deps: []
        }]),
        cd = [{
          provide: sd,
          useClass: sd,
          deps: [Bc, Ac, Ms, zo, pl, wc]
        }, {
          provide: Bl,
          deps: [Bc],
          useFactory: function(n) {
            let e = [];
            return n.onStable.subscribe(() => {
                for (; e.length;) e.pop()()
              }),
              function(n) {
                e.push(n)
              }
          }
        }, {
          provide: wc,
          useClass: wc,
          deps: [
            [new X, $c]
          ]
        }, {
          provide: Dc,
          useClass: Dc,
          deps: []
        }, xc, {
          provide: El,
          useFactory: function() {
            return Ml
          },
          deps: []
        }, {
          provide: Pl,
          useFactory: function() {
            return Ol
          },
          deps: []
        }, {
          provide: Sc,
          useFactory: function(n) {
            return Zl(n = n || "undefined" != typeof $localize && $localize.locale || "en-US"), n
          },
          deps: [
            [new Z(Sc), new X, new J]
          ]
        }, {
          provide: Ic,
          useValue: "USD"
        }];
      let dd = (() => {
        class n {
          constructor(n) {}
        }
        return n.\u0275mod = ie({
          type: n
        }), n.\u0275inj = rn({
          factory: function(e) {
            return new(e || n)(Vn(sd))
          },
          providers: cd
        }), n
      })();
      const ud = (() => {
          const n = Element.prototype;
          return n.matches || n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        })(),
        pd = {
          schedule(n, e) {
            const t = setTimeout(n, e);
            return () => clearTimeout(t)
          },
          scheduleBeforeRender(n) {
            if ("undefined" == typeof window) return pd.schedule(n, 0);
            if (void 0 === window.requestAnimationFrame) return pd.schedule(n, 16);
            const e = window.requestAnimationFrame(n);
            return () => window.cancelAnimationFrame(e)
          }
        };

      function hd(n, e, t) {
        let o = t;
        return function(n) {
          return !!n && n.nodeType === Node.ELEMENT_NODE
        }(n) && e.some((e, t) => !("*" === e || ! function(n, e) {
          return ud.call(n, e)
        }(n, e) || (o = t, 0))), o
      }
      class fd {
        constructor(n, e) {
          this.component = n, this.injector = e, this.componentFactory = e.get(pl).resolveComponentFactory(n)
        }
        create(n) {
          return new gd(this.componentFactory, n)
        }
      }
      class gd {
        constructor(n, e) {
          this.componentFactory = n, this.injector = e, this.inputChanges = null, this.implementsOnChanges = !1, this.scheduledChangeDetectionFn = null, this.scheduledDestroyFn = null, this.initialInputValues = new Map, this.uninitializedInputs = new Set
        }
        connect(n) {
          if (null !== this.scheduledDestroyFn) return this.scheduledDestroyFn(), void(this.scheduledDestroyFn = null);
          this.componentRef || this.initializeComponent(n)
        }
        disconnect() {
          this.componentRef && null === this.scheduledDestroyFn && (this.scheduledDestroyFn = pd.schedule(() => {
            this.componentRef && (this.componentRef.destroy(), this.componentRef = null)
          }, 10))
        }
        getInputValue(n) {
          return this.componentRef ? this.componentRef.instance[n] : this.initialInputValues.get(n)
        }
        setInputValue(n, e) {
          var t, o;
          this.componentRef ? (t = e) === (o = this.getInputValue(n)) || t != t && o != o || (this.recordInputChange(n, e), this.componentRef.instance[n] = e, this.scheduleDetectChanges()) : this.initialInputValues.set(n, e)
        }
        initializeComponent(n) {
          const e = Ms.create({
              providers: [],
              parent: this.injector
            }),
            t = function(n, e) {
              const t = n.childNodes,
                o = e.map(() => []);
              let r = -1;
              e.some((n, e) => "*" === n && (r = e, !0));
              for (let i = 0, s = t.length; i < s; ++i) {
                const n = t[i],
                  s = hd(n, e, r); - 1 !== s && o[s].push(n)
              }
              return o
            }(n, this.componentFactory.ngContentSelectors);
          this.componentRef = this.componentFactory.create(e, t, n), this.implementsOnChanges = "function" == typeof this.componentRef.instance.ngOnChanges, this.initializeInputs(), this.initializeOutputs(), this.detectChanges(), this.injector.get(sd).attachView(this.componentRef.hostView)
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({
            propName: n
          }) => {
            this.initialInputValues.has(n) ? this.setInputValue(n, this.initialInputValues.get(n)) : this.uninitializedInputs.add(n)
          }), this.initialInputValues.clear()
        }
        initializeOutputs() {
          const n = this.componentFactory.outputs.map(({
            propName: n,
            templateName: e
          }) => this.componentRef.instance[n].pipe(T(n => ({
            name: e,
            value: n
          }))));
          this.events = V(...n)
        }
        callNgOnChanges() {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const n = this.inputChanges;
          this.inputChanges = null, this.componentRef.instance.ngOnChanges(n)
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn || (this.scheduledChangeDetectionFn = pd.scheduleBeforeRender(() => {
            this.scheduledChangeDetectionFn = null, this.detectChanges()
          }))
        }
        recordInputChange(n, e) {
          if (this.componentRef && !this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const t = this.inputChanges[n];
          if (t) return void(t.currentValue = e);
          const o = this.uninitializedInputs.has(n);
          this.uninitializedInputs.delete(n);
          const r = o ? void 0 : this.getInputValue(n);
          this.inputChanges[n] = new Qa(r, e, o)
        }
        detectChanges() {
          this.componentRef && (this.callNgOnChanges(), this.componentRef.changeDetectorRef.detectChanges())
        }
      }
      class md extends HTMLElement {
        constructor() {
          super(...arguments), this.ngElementEventsSubscription = null
        }
      }
      class bd {
        constructor(n, e) {
          this._name = n, this._options = e, this.value = null, this._lastSetValue = null, this._lastSetValueType = 0, this._lastSetValueIdentityChange = !1
        }
        setValue(n) {
          if (Array.isArray(n)) this._lastSetValueType = 4;
          else if (n instanceof Set) this._lastSetValueType = 8;
          else if (n && "string" == typeof n) {
            if (!(4 & this._options)) throw new Error(this._name + " string values are not allowed");
            this._lastSetValueType = 1
          } else this._lastSetValueType = n ? 2 : 0;
          this._lastSetValueIdentityChange = !0, this._lastSetValue = n || null
        }
        hasValueChanged() {
          let n = this._lastSetValueIdentityChange;
          if (!(n || 14 & this._lastSetValueType)) return !1;
          let e = null;
          const t = !!(1 & this._options),
            o = !!(8 & this._options),
            r = !!(2 & this._options);
          switch (this._lastSetValueType) {
            case 1:
              const i = this._lastSetValue.split(/\s+/g);
              16 & this._options ? (e = {}, i.forEach((n, t) => e[n] = !0)) : e = i.reduce((n, e, t) => n + (t ? " " : "") + e);
              break;
            case 2:
              const s = this._lastSetValue,
                a = Object.keys(s);
              n || (n = !this.value || function(n, e, t) {
                const o = n;
                if (!xd(Object.keys(e), o)) return !0;
                for (let r = 0; r < o.length; r++) {
                  const n = o[r];
                  if (e[n] !== t[n]) return !0
                }
                return !1
              }(a, this.value, s)), n && (e = vd(this._name, t, o, r, s, a));
              break;
            case 4:
            case 8:
              const l = Array.from(this._lastSetValue);
              n || (n = !xd(Object.keys(this.value), l)), n && (e = vd(this._name, t, o, r, l));
              break;
            default:
              e = null
          }
          return n && (this.value = e), n
        }
      }

      function vd(n, e, t, o, r, i) {
        const s = {};
        if (i)
          for (let a = 0; a < i.length; a++) {
            let n = i[a];
            const l = r[n];
            void 0 !== l && wd(s, e ? n.trim() : n, l, t, o)
          } else
            for (let a = 0; a < r.length; a++) {
              let t = r[a];
              $d(n, t), t = e ? t.trim() : t, wd(s, t, !0, !1, o)
            }
        return s
      }

      function $d(n, e) {
        if ("string" != typeof e) throw new Error(`${n} can only toggle CSS classes expressed as strings, got ${e}`)
      }

      function wd(n, e, t, o, r) {
        if (r && e.indexOf(" ") > 0) {
          const r = e.split(/\s+/g);
          for (let e = 0; e < r.length; e++) yd(n, r[e], t, o)
        } else yd(n, e, t, o)
      }

      function yd(n, e, t, o) {
        if (o) {
          const n = function(n, e) {
            const t = n.indexOf(".");
            if (t > 0) {
              const o = n.substr(t + 1);
              n = n.substring(0, t), null != e && (e += o)
            }
            return {
              key: n,
              value: e
            }
          }(e, t);
          t = n.value, e = n.key
        }
        n[e] = t
      }

      function xd(n, e) {
        if (n && e) {
          if (n.length !== e.length) return !1;
          for (let t = 0; t < n.length; t++)
            if (-1 === e.indexOf(n[t])) return !1;
          return !0
        }
        return !1
      }
      class kd {}
      const Cd = {
          provide: kd,
          useClass: (() => {
            class n {
              constructor() {
                this._value = null, this._ngClassDiffer = new bd("NgClass", 23), this._classStringDiffer = null
              }
              getValue() {
                return this._value
              }
              setClass(n) {
                (n || this._classStringDiffer) && (this._classStringDiffer = this._classStringDiffer || new bd("class", 20), this._classStringDiffer.setValue(n))
              }
              setNgClass(n) {
                this._ngClassDiffer.setValue(n)
              }
              applyChanges() {
                const n = !!this._classStringDiffer && this._classStringDiffer.hasValueChanged(),
                  e = this._ngClassDiffer.hasValueChanged();
                if (n || e) {
                  let n = this._ngClassDiffer.value;
                  if (this._classStringDiffer) {
                    let e = this._classStringDiffer.value;
                    e && (n = n ? Object.assign(Object.assign({}, e), n) : e)
                  }
                  this._value = n
                }
              }
            }
            return n.\u0275fac = function(e) {
              return new(e || n)
            }, n.\u0275prov = on({
              token: n,
              factory: n.\u0275fac
            }), n
          })()
        },
        _d = ae({
          type: function() {},
          selectors: null,
          hostBindings: function(n, e, t) {
            1 & n && ra(2), 2 & n && ya(e.getValue())
          }
        }),
        zd = function() {};
      let Ad = (() => {
          class n {
            constructor(n) {
              this._delegate = n
            }
            getValue() {
              return this._delegate.getValue()
            }
          }
          return n.\u0275dir = _d, n.\u0275fac = zd, n
        })(),
        Sd = (() => {
          class n extends Ad {
            constructor(n) {
              super(n)
            }
            set klass(n) {
              this._delegate.setClass(n)
            }
            set ngClass(n) {
              this._delegate.setNgClass(n)
            }
            ngDoCheck() {
              this._delegate.applyChanges()
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)(ba(kd))
          }, n.\u0275dir = ae({
            type: n,
            selectors: [
              ["", "ngClass", ""]
            ],
            inputs: {
              klass: ["class", "klass"],
              ngClass: "ngClass"
            },
            features: [cl([Cd]), Ka]
          }), n
        })(),
        Id = null;

      function Ed() {
        return Id
      }
      const Pd = new En("DocumentToken"),
        Td = function() {
          var n = {
            Zero: 0,
            One: 1,
            Two: 2,
            Few: 3,
            Many: 4,
            Other: 5
          };
          return n[n.Zero] = "Zero", n[n.One] = "One", n[n.Two] = "Two", n[n.Few] = "Few", n[n.Many] = "Many", n[n.Other] = "Other", n
        }();
      class Md {}
      let Od = (() => {
        class n extends Md {
          constructor(n) {
            super(), this.locale = n
          }
          getPluralCategory(n, e) {
            switch (function(n) {
              return function(n) {
                const e = function(n) {
                  return n.toLowerCase().replace(/_/g, "-")
                }(n);
                let t = Kl(e);
                if (t) return t;
                const o = e.split("-")[0];
                if (t = Kl(o), t) return t;
                if ("en" === o) return Wl;
                throw new Error(`Missing locale data for the locale "${n}".`)
              }(n)[Yl.PluralCase]
            }(e || this.locale)(n)) {
              case Td.Zero:
                return "zero";
              case Td.One:
                return "one";
              case Td.Two:
                return "two";
              case Td.Few:
                return "few";
              case Td.Many:
                return "many";
              default:
                return "other"
            }
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(Vn(Sc))
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();
      class Rd {
        constructor(n, e, t, o) {
          this.$implicit = n, this.ngForOf = e, this.index = t, this.count = o
        }
        get first() {
          return 0 === this.index
        }
        get last() {
          return this.index === this.count - 1
        }
        get even() {
          return this.index % 2 == 0
        }
        get odd() {
          return !this.even
        }
      }
      let Nd = (() => {
        class n {
          constructor(n, e, t) {
            this._viewContainer = n, this._template = e, this._differs = t, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
          }
          set ngForOf(n) {
            this._ngForOf = n, this._ngForOfDirty = !0
          }
          set ngForTrackBy(n) {
            Io() && null != n && "function" != typeof n && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(n)}. ` + "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = n
          }
          get ngForTrackBy() {
            return this._trackByFn
          }
          set ngForTemplate(n) {
            n && (this._template = n)
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const t = this._ngForOf;
              if (!this._differ && t) try {
                this._differ = this._differs.find(t).create(this.ngForTrackBy)
              } catch (e) {
                throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'. NgFor only supports binding to Iterables such as Arrays.`)
              }
            }
            var n;
            if (this._differ) {
              const n = this._differ.diff(this._ngForOf);
              n && this._applyChanges(n)
            }
          }
          _applyChanges(n) {
            const e = [];
            n.forEachOperation((n, t, o) => {
              if (null == n.previousIndex) {
                const t = this._viewContainer.createEmbeddedView(this._template, new Rd(null, this._ngForOf, -1, -1), null === o ? void 0 : o),
                  r = new Dd(n, t);
                e.push(r)
              } else if (null == o) this._viewContainer.remove(null === t ? void 0 : t);
              else if (null !== t) {
                const r = this._viewContainer.get(t);
                this._viewContainer.move(r, o);
                const i = new Dd(n, r);
                e.push(i)
              }
            });
            for (let t = 0; t < e.length; t++) this._perViewChange(e[t].view, e[t].record);
            for (let t = 0, o = this._viewContainer.length; t < o; t++) {
              const n = this._viewContainer.get(t);
              n.context.index = t, n.context.count = o, n.context.ngForOf = this._ngForOf
            }
            n.forEachIdentityChange(n => {
              this._viewContainer.get(n.currentIndex).context.$implicit = n.item
            })
          }
          _perViewChange(n, e) {
            n.context.$implicit = e.item
          }
          static ngTemplateContextGuard(n, e) {
            return !0
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(ba(Dl), ba(Rl), ba(El))
        }, n.\u0275dir = ae({
          type: n,
          selectors: [
            ["", "ngFor", "", "ngForOf", ""]
          ],
          inputs: {
            ngForOf: "ngForOf",
            ngForTrackBy: "ngForTrackBy",
            ngForTemplate: "ngForTemplate"
          }
        }), n
      })();
      class Dd {
        constructor(n, e) {
          this.record = n, this.view = e
        }
      }
      let Fd = (() => {
        class n {
          constructor(n, e) {
            this._viewContainer = n, this._context = new jd, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
          }
          set ngIf(n) {
            this._context.$implicit = this._context.ngIf = n, this._updateView()
          }
          set ngIfThen(n) {
            Vd("ngIfThen", n), this._thenTemplateRef = n, this._thenViewRef = null, this._updateView()
          }
          set ngIfElse(n) {
            Vd("ngIfElse", n), this._elseTemplateRef = n, this._elseViewRef = null, this._updateView()
          }
          _updateView() {
            this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
          }
          static ngTemplateContextGuard(n, e) {
            return !0
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(ba(Dl), ba(Rl))
        }, n.\u0275dir = ae({
          type: n,
          selectors: [
            ["", "ngIf", ""]
          ],
          inputs: {
            ngIf: "ngIf",
            ngIfThen: "ngIfThen",
            ngIfElse: "ngIfElse"
          }
        }), n
      })();
      class jd {
        constructor() {
          this.$implicit = null, this.ngIf = null
        }
      }

      function Vd(n, e) {
        if (e && !e.createEmbeddedView) throw new Error(`${n} must be a TemplateRef, but received '${fn(e)}'.`)
      }
      let Bd = (() => {
        class n {}
        return n.\u0275mod = ie({
          type: n
        }), n.\u0275inj = rn({
          factory: function(e) {
            return new(e || n)
          },
          providers: [{
            provide: Md,
            useClass: Od
          }]
        }), n
      })();
      class qd extends class extends class {} {
        constructor() {
          super()
        }
        supportsDOMEvents() {
          return !0
        }
      } {
        static makeCurrent() {
          var n;
          n = new qd, Id || (Id = n)
        }
        getProperty(n, e) {
          return n[e]
        }
        log(n) {
          window.console && window.console.log && window.console.log(n)
        }
        logGroup(n) {
          window.console && window.console.group && window.console.group(n)
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd()
        }
        onAndCancel(n, e, t) {
          return n.addEventListener(e, t, !1), () => {
            n.removeEventListener(e, t, !1)
          }
        }
        dispatchEvent(n, e) {
          n.dispatchEvent(e)
        }
        remove(n) {
          return n.parentNode && n.parentNode.removeChild(n), n
        }
        getValue(n) {
          return n.value
        }
        createElement(n, e) {
          return (e = e || this.getDefaultDocument()).createElement(n)
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle")
        }
        getDefaultDocument() {
          return document
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment
        }
        getGlobalEventTarget(n, e) {
          return "window" === e ? window : "document" === e ? n : "body" === e ? n.body : null
        }
        getHistory() {
          return window.history
        }
        getLocation() {
          return window.location
        }
        getBaseHref(n) {
          const e = Ld || (Ld = document.querySelector("base"), Ld) ? Ld.getAttribute("href") : null;
          return null == e ? null : (t = e, Hd || (Hd = document.createElement("a")), Hd.setAttribute("href", t), "/" === Hd.pathname.charAt(0) ? Hd.pathname : "/" + Hd.pathname);
          var t
        }
        resetBaseElement() {
          Ld = null
        }
        getUserAgent() {
          return window.navigator.userAgent
        }
        performanceNow() {
          return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
        }
        supportsCookies() {
          return !0
        }
        getCookie(n) {
          return function(n, e) {
            e = encodeURIComponent(e);
            for (const t of n.split(";")) {
              const n = t.indexOf("="),
                [o, r] = -1 == n ? [t, ""] : [t.slice(0, n), t.slice(n + 1)];
              if (o.trim() === e) return decodeURIComponent(r)
            }
            return null
          }(document.cookie, n)
        }
      }
      let Hd, Ld = null;
      const Wd = new En("TRANSITION_ID"),
        Ud = [{
          provide: $c,
          useFactory: function(n, e, t) {
            return () => {
              t.get(wc).donePromise.then(() => {
                const t = Ed();
                Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e => e.getAttribute("ng-transition") === n).forEach(n => t.remove(n))
              })
            }
          },
          deps: [Wd, Pd, Ms],
          multi: !0
        }];
      class Kd {
        static init() {
          var n;
          n = new Kd, Jc = n
        }
        addToWindow(n) {
          xn.getAngularTestability = (e, t = !0) => {
            const o = n.findTestabilityInTree(e, t);
            if (null == o) throw new Error("Could not find testability for element.");
            return o
          }, xn.getAllAngularTestabilities = () => n.getAllTestabilities(), xn.getAllAngularRootElements = () => n.getAllRootElements(), xn.frameworkStabilizers || (xn.frameworkStabilizers = []), xn.frameworkStabilizers.push(n => {
            const e = xn.getAllAngularTestabilities();
            let t = e.length,
              o = !1;
            const r = function(e) {
              o = o || e, t--, 0 == t && n(o)
            };
            e.forEach((function(n) {
              n.whenStable(r)
            }))
          })
        }
        findTestabilityInTree(n, e, t) {
          if (null == e) return null;
          const o = n.getTestability(e);
          return null != o ? o : t ? Ed().isShadowRoot(e) ? this.findTestabilityInTree(n, e.host, !0) : this.findTestabilityInTree(n, e.parentElement, !0) : null
        }
      }
      const Yd = new En("EventManagerPlugins");
      let Gd = (() => {
        class n {
          constructor(n, e) {
            this._zone = e, this._eventNameToPlugin = new Map, n.forEach(n => n.manager = this), this._plugins = n.slice().reverse()
          }
          addEventListener(n, e, t) {
            return this._findPluginFor(e).addEventListener(n, e, t)
          }
          addGlobalEventListener(n, e, t) {
            return this._findPluginFor(e).addGlobalEventListener(n, e, t)
          }
          getZone() {
            return this._zone
          }
          _findPluginFor(n) {
            const e = this._eventNameToPlugin.get(n);
            if (e) return e;
            const t = this._plugins;
            for (let o = 0; o < t.length; o++) {
              const e = t[o];
              if (e.supports(n)) return this._eventNameToPlugin.set(n, e), e
            }
            throw new Error(`No event manager plugin found for event ${n}`)
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(Vn(Yd), Vn(Bc))
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();
      class Zd {
        constructor(n) {
          this._doc = n
        }
        addGlobalEventListener(n, e, t) {
          const o = Ed().getGlobalEventTarget(this._doc, n);
          if (!o) throw new Error(`Unsupported event target ${o} for event ${e}`);
          return this.addEventListener(o, e, t)
        }
      }
      let Xd = (() => {
          class n {
            constructor() {
              this._stylesSet = new Set
            }
            addStyles(n) {
              const e = new Set;
              n.forEach(n => {
                this._stylesSet.has(n) || (this._stylesSet.add(n), e.add(n))
              }), this.onStylesAdded(e)
            }
            onStylesAdded(n) {}
            getAllStyles() {
              return Array.from(this._stylesSet)
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275prov = on({
            token: n,
            factory: n.\u0275fac
          }), n
        })(),
        Qd = (() => {
          class n extends Xd {
            constructor(n) {
              super(), this._doc = n, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(n.head)
            }
            _addStylesToHost(n, e) {
              n.forEach(n => {
                const t = this._doc.createElement("style");
                t.textContent = n, this._styleNodes.add(e.appendChild(t))
              })
            }
            addHost(n) {
              this._addStylesToHost(this._stylesSet, n), this._hostNodes.add(n)
            }
            removeHost(n) {
              this._hostNodes.delete(n)
            }
            onStylesAdded(n) {
              this._hostNodes.forEach(e => this._addStylesToHost(n, e))
            }
            ngOnDestroy() {
              this._styleNodes.forEach(n => Ed().remove(n))
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)(Vn(Pd))
          }, n.\u0275prov = on({
            token: n,
            factory: n.\u0275fac
          }), n
        })();
      const Jd = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        },
        nu = /%COMP%/g;

      function eu(n, e, t) {
        for (let o = 0; o < e.length; o++) {
          let r = e[o];
          Array.isArray(r) ? eu(n, r, t) : (r = r.replace(nu, n), t.push(r))
        }
        return t
      }

      function tu(n) {
        return e => {
          if (e === Function) return n;
          !1 === n(e) && (e.preventDefault(), e.returnValue = !1)
        }
      }
      let ou = (() => {
        class n {
          constructor(n, e, t) {
            this.eventManager = n, this.sharedStylesHost = e, this.appId = t, this.rendererByCompId = new Map, this.defaultRenderer = new ru(n)
          }
          createRenderer(n, e) {
            if (!n || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case Zn.Emulated: {
                let t = this.rendererByCompId.get(e.id);
                return t || (t = new iu(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, t)), t.applyToHost(n), t
              }
              case Zn.Native:
              case Zn.ShadowDom:
                return new su(this.eventManager, this.sharedStylesHost, n, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const n = eu(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(n), this.rendererByCompId.set(e.id, this.defaultRenderer)
                }
                return this.defaultRenderer
            }
          }
          begin() {}
          end() {}
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(Vn(Gd), Vn(Qd), Vn(yc))
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();
      class ru {
        constructor(n) {
          this.eventManager = n, this.data = Object.create(null)
        }
        destroy() {}
        createElement(n, e) {
          return e ? document.createElementNS(Jd[e] || e, n) : document.createElement(n)
        }
        createComment(n) {
          return document.createComment(n)
        }
        createText(n) {
          return document.createTextNode(n)
        }
        appendChild(n, e) {
          n.appendChild(e)
        }
        insertBefore(n, e, t) {
          n && n.insertBefore(e, t)
        }
        removeChild(n, e) {
          n && n.removeChild(e)
        }
        selectRootElement(n, e) {
          let t = "string" == typeof n ? document.querySelector(n) : n;
          if (!t) throw new Error(`The selector "${n}" did not match any elements`);
          return e || (t.textContent = ""), t
        }
        parentNode(n) {
          return n.parentNode
        }
        nextSibling(n) {
          return n.nextSibling
        }
        setAttribute(n, e, t, o) {
          if (o) {
            e = o + ":" + e;
            const r = Jd[o];
            r ? n.setAttributeNS(r, e, t) : n.setAttribute(e, t)
          } else n.setAttribute(e, t)
        }
        removeAttribute(n, e, t) {
          if (t) {
            const o = Jd[t];
            o ? n.removeAttributeNS(o, e) : n.removeAttribute(`${t}:${e}`)
          } else n.removeAttribute(e)
        }
        addClass(n, e) {
          n.classList.add(e)
        }
        removeClass(n, e) {
          n.classList.remove(e)
        }
        setStyle(n, e, t, o) {
          o & ml.DashCase ? n.style.setProperty(e, t, o & ml.Important ? "important" : "") : n.style[e] = t
        }
        removeStyle(n, e, t) {
          t & ml.DashCase ? n.style.removeProperty(e) : n.style[e] = ""
        }
        setProperty(n, e, t) {
          n[e] = t
        }
        setValue(n, e) {
          n.nodeValue = e
        }
        listen(n, e, t) {
          return "string" == typeof n ? this.eventManager.addGlobalEventListener(n, e, tu(t)) : this.eventManager.addEventListener(n, e, tu(t))
        }
      }
      class iu extends ru {
        constructor(n, e, t, o) {
          super(n), this.component = t;
          const r = eu(o + "-" + t.id, t.styles, []);
          e.addStyles(r), this.contentAttr = "_ngcontent-%COMP%".replace(nu, o + "-" + t.id), this.hostAttr = function(n) {
            return "_nghost-%COMP%".replace(nu, n)
          }(o + "-" + t.id)
        }
        applyToHost(n) {
          super.setAttribute(n, this.hostAttr, "")
        }
        createElement(n, e) {
          const t = super.createElement(n, e);
          return super.setAttribute(t, this.contentAttr, ""), t
        }
      }
      class su extends ru {
        constructor(n, e, t, o) {
          super(n), this.sharedStylesHost = e, this.hostEl = t, this.component = o, this.shadowRoot = o.encapsulation === Zn.ShadowDom ? t.attachShadow({
            mode: "open"
          }) : t.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
          const r = eu(o.id, o.styles, []);
          for (let i = 0; i < r.length; i++) {
            const n = document.createElement("style");
            n.textContent = r[i], this.shadowRoot.appendChild(n)
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot)
        }
        appendChild(n, e) {
          return super.appendChild(this.nodeOrShadowRoot(n), e)
        }
        insertBefore(n, e, t) {
          return super.insertBefore(this.nodeOrShadowRoot(n), e, t)
        }
        removeChild(n, e) {
          return super.removeChild(this.nodeOrShadowRoot(n), e)
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))
        }
      }
      let au = (() => {
        class n extends Zd {
          constructor(n) {
            super(n)
          }
          supports(n) {
            return !0
          }
          addEventListener(n, e, t) {
            return n.addEventListener(e, t, !1), () => this.removeEventListener(n, e, t)
          }
          removeEventListener(n, e, t) {
            return n.removeEventListener(e, t)
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)(Vn(Pd))
        }, n.\u0275prov = on({
          token: n,
          factory: n.\u0275fac
        }), n
      })();
      const lu = ["alt", "control", "meta", "shift"],
        cu = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS"
        },
        du = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock"
        },
        uu = {
          alt: n => n.altKey,
          control: n => n.ctrlKey,
          meta: n => n.metaKey,
          shift: n => n.shiftKey
        };
      let pu = (() => {
          class n extends Zd {
            constructor(n) {
              super(n)
            }
            supports(e) {
              return null != n.parseEventName(e)
            }
            addEventListener(e, t, o) {
              const r = n.parseEventName(t),
                i = n.eventCallback(r.fullKey, o, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(() => Ed().onAndCancel(e, r.domEventName, i))
            }
            static parseEventName(e) {
              const t = e.toLowerCase().split("."),
                o = t.shift();
              if (0 === t.length || "keydown" !== o && "keyup" !== o) return null;
              const r = n._normalizeKey(t.pop());
              let i = "";
              if (lu.forEach(n => {
                  const e = t.indexOf(n);
                  e > -1 && (t.splice(e, 1), i += n + ".")
                }), i += r, 0 != t.length || 0 === r.length) return null;
              const s = {};
              return s.domEventName = o, s.fullKey = i, s
            }
            static getEventFullKey(n) {
              let e = "",
                t = function(n) {
                  let e = n.key;
                  if (null == e) {
                    if (e = n.keyIdentifier, null == e) return "Unidentified";
                    e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === n.location && du.hasOwnProperty(e) && (e = du[e]))
                  }
                  return cu[e] || e
                }(n);
              return t = t.toLowerCase(), " " === t ? t = "space" : "." === t && (t = "dot"), lu.forEach(o => {
                o != t && (0, uu[o])(n) && (e += o + ".")
              }), e += t, e
            }
            static eventCallback(e, t, o) {
              return r => {
                n.getEventFullKey(r) === e && o.runGuarded(() => t(r))
              }
            }
            static _normalizeKey(n) {
              switch (n) {
                case "esc":
                  return "escape";
                default:
                  return n
              }
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)(Vn(Pd))
          }, n.\u0275prov = on({
            token: n,
            factory: n.\u0275fac
          }), n
        })(),
        hu = (() => {
          class n {}
          return n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275prov = on({
            factory: function() {
              return Vn(fu)
            },
            token: n,
            providedIn: "root"
          }), n
        })(),
        fu = (() => {
          class n extends hu {
            constructor(n) {
              super(), this._doc = n
            }
            sanitize(n, e) {
              if (null == e) return null;
              switch (n) {
                case Qo.NONE:
                  return e;
                case Qo.HTML:
                  return _t(e, "HTML") ? Ct(e) : Zo(this._doc, String(e));
                case Qo.STYLE:
                  return _t(e, "Style") ? Ct(e) : function(n) {
                    if (!(n = String(n).trim())) return "";
                    const e = n.match(nr);
                    return e && Mo(e[1]) === e[1] || n.match(Jo) && function(n) {
                      let e = !0,
                        t = !0;
                      for (let o = 0; o < n.length; o++) {
                        const r = n.charAt(o);
                        "'" === r && t ? e = !e : '"' === r && e && (t = !t)
                      }
                      return e && t
                    }(n) ? n : (Io() && console.warn(`WARNING: sanitizing unsafe style value ${n} (see http://g.co/ng/security#xss).`), "unsafe")
                  }(e);
                case Qo.SCRIPT:
                  if (_t(e, "Script")) return Ct(e);
                  throw new Error("unsafe value used in a script context");
                case Qo.URL:
                  return zt(e), _t(e, "URL") ? Ct(e) : Mo(String(e));
                case Qo.RESOURCE_URL:
                  if (_t(e, "ResourceURL")) return Ct(e);
                  throw new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                default:
                  throw new Error(`Unexpected SecurityContext ${n} (see http://g.co/ng/security#xss)`)
              }
            }
            bypassSecurityTrustHtml(n) {
              return new $t(n)
            }
            bypassSecurityTrustStyle(n) {
              return new wt(n)
            }
            bypassSecurityTrustScript(n) {
              return new yt(n)
            }
            bypassSecurityTrustUrl(n) {
              return new xt(n)
            }
            bypassSecurityTrustResourceUrl(n) {
              return new kt(n)
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)(Vn(Pd))
          }, n.\u0275prov = on({
            factory: function() {
              return n = Vn(Pn), new fu(n.get(Pd));
              var n
            },
            token: n,
            providedIn: "root"
          }), n
        })();
      const gu = td(ld, "browser", [{
          provide: _c,
          useValue: "browser"
        }, {
          provide: Cc,
          useValue: function() {
            qd.makeCurrent(), Kd.init()
          },
          multi: !0
        }, {
          provide: Pd,
          useFactory: function() {
            return function(n) {
              tt = n
            }(document), document
          },
          deps: []
        }]),
        mu = [
          [], {
            provide: $s,
            useValue: "root"
          }, {
            provide: zo,
            useFactory: function() {
              return new zo
            },
            deps: []
          }, {
            provide: Yd,
            useClass: au,
            multi: !0,
            deps: [Pd, Bc, _c]
          }, {
            provide: Yd,
            useClass: pu,
            multi: !0,
            deps: [Pd]
          },
          [], {
            provide: ou,
            useClass: ou,
            deps: [Gd, Qd, yc]
          }, {
            provide: gl,
            useExisting: ou
          }, {
            provide: Xd,
            useExisting: Qd
          }, {
            provide: Qd,
            useClass: Qd,
            deps: [Pd]
          }, {
            provide: Gc,
            useClass: Gc,
            deps: [Bc]
          }, {
            provide: Gd,
            useClass: Gd,
            deps: [Yd, Bc]
          },
          []
        ];
      let bu = (() => {
        class n {
          constructor(n) {
            if (n) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
          }
          static withServerTransition(e) {
            return {
              ngModule: n,
              providers: [{
                provide: yc,
                useValue: e.appId
              }, {
                provide: Wd,
                useExisting: yc
              }, Ud]
            }
          }
        }
        return n.\u0275mod = ie({
          type: n
        }), n.\u0275inj = rn({
          factory: function(e) {
            return new(e || n)(Vn(n, 12))
          },
          providers: mu,
          imports: [Bd, dd]
        }), n
      })();
      "undefined" != typeof window && window;
      var vu = {
          prefix: "fas",
          iconName: "check",
          icon: [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]
        },
        $u = {
          prefix: "fas",
          iconName: "cog",
          icon: [512, 512, [], "f013", "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"]
        },
        wu = {
          prefix: "fas",
          iconName: "file-download",
          icon: [384, 512, [], "f56d", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"]
        },
        yu = {
          prefix: "fas",
          iconName: "random",
          icon: [512, 512, [], "f074", "M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"]
        },
        xu = t("IRzx"),
        ku = t.n(xu),
        Cu = t("nxW2"),
        _u = t.n(Cu),
        zu = t("RNvQ"),
        Au = t.n(zu);
      const Su = (() => {
          function n() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
          }
          return n.prototype = Object.create(Error.prototype), n
        })(),
        Iu = new v(n => n.complete());
      class Eu {
        constructor(n) {
          if (this.total = n, this.total < 0) throw new Su
        }
        call(n, e) {
          return e.subscribe(new Pu(n, this.total))
        }
      }
      class Pu extends f {
        constructor(n, e) {
          super(n), this.total = e, this.count = 0
        }
        _next(n) {
          const e = this.total,
            t = ++this.count;
          t <= e && (this.destination.next(n), t === e && (this.destination.complete(), this.unsubscribe()))
        }
      }
      const Tu = [{
          id: "swatch1",
          name: "Default",
          colors: {
            primary: "#0061f2",
            secondary: "#6900c7",
            success: "#00ac69",
            danger: "#e81500",
            warning: "#f4a100",
            info: "#00cfd5"
          }
        }, {
          id: "swatch2",
          name: "Flat",
          colors: {
            primary: "#1da1f5",
            secondary: "#8039da",
            success: "#12ac70",
            danger: "#e83d2c",
            warning: "#ffc147",
            info: "#2ccfd4"
          }
        }, {
          id: "swatch3",
          name: "Sunset",
          colors: {
            primary: "#f53b57",
            secondary: "#ff793f",
            success: "#05c46b",
            danger: "#dd433a",
            warning: "#ffa801",
            info: "#575fcf"
          }
        }, {
          id: "swatch4",
          name: "Subtle",
          colors: {
            primary: "#6eabc2",
            secondary: "#506c6a",
            success: "#799f78",
            danger: "#bb8282",
            warning: "#d5c357",
            info: "#957fa9"
          }
        }, {
          id: "swatch5",
          name: "Seafoam",
          colors: {
            primary: "#06794f",
            secondary: "#0fa28b",
            success: "#3ac97c",
            danger: "#d73f30",
            warning: "#ebb20c",
            info: "#9d46cd"
          }
        }],
        Mu = [{
          id: "primary",
          name: "Primary",
          class: "btn-primary"
        }, {
          id: "secondary",
          name: "Secondary",
          class: "btn-secondary"
        }, {
          id: "success",
          name: "Success",
          class: "btn-success"
        }, {
          id: "danger",
          name: "Danger",
          class: "btn-danger"
        }, {
          id: "warning",
          name: "Warning",
          class: "btn-warning"
        }, {
          id: "info",
          name: "Info",
          class: "btn-info"
        }];
      class Ou extends u {
        constructor(n, e) {
          super()
        }
        schedule(n, e = 0) {
          return this
        }
      }
      class Ru extends Ou {
        constructor(n, e) {
          super(n, e), this.scheduler = n, this.work = e, this.pending = !1
        }
        schedule(n, e = 0) {
          if (this.closed) return this;
          this.state = n;
          const t = this.id,
            o = this.scheduler;
          return null != t && (this.id = this.recycleAsyncId(o, t, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(o, this.id, e), this
        }
        requestAsyncId(n, e, t = 0) {
          return setInterval(n.flush.bind(n, this), t)
        }
        recycleAsyncId(n, e, t = 0) {
          if (null !== t && this.delay === t && !1 === this.pending) return e;
          clearInterval(e)
        }
        execute(n, e) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const t = this._execute(n, e);
          if (t) return t;
          !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }
        _execute(n, e) {
          let t = !1,
            o = void 0;
          try {
            this.work(n)
          } catch (r) {
            t = !0, o = !!r && r || new Error(r)
          }
          if (t) return this.unsubscribe(), o
        }
        _unsubscribe() {
          const n = this.id,
            e = this.scheduler,
            t = e.actions,
            o = t.indexOf(this);
          this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== o && t.splice(o, 1), null != n && (this.id = this.recycleAsyncId(e, n, null)), this.delay = null
        }
      }
      class Nu extends Ru {
        constructor(n, e) {
          super(n, e), this.scheduler = n, this.work = e
        }
        schedule(n, e = 0) {
          return e > 0 ? super.schedule(n, e) : (this.delay = e, this.state = n, this.scheduler.flush(this), this)
        }
        execute(n, e) {
          return e > 0 || this.closed ? super.execute(n, e) : this._execute(n, e)
        }
        requestAsyncId(n, e, t = 0) {
          return null !== t && t > 0 || null === t && this.delay > 0 ? super.requestAsyncId(n, e, t) : n.flush(this)
        }
      }
      let Du = (() => {
        class n {
          constructor(e, t = n.now) {
            this.SchedulerAction = e, this.now = t
          }
          schedule(n, e = 0, t) {
            return new this.SchedulerAction(this, n).schedule(t, e)
          }
        }
        return n.now = () => Date.now(), n
      })();
      class Fu extends Du {
        constructor(n, e = Du.now) {
          super(n, () => Fu.delegate && Fu.delegate !== this ? Fu.delegate.now() : e()), this.actions = [], this.active = !1, this.scheduled = void 0
        }
        schedule(n, e = 0, t) {
          return Fu.delegate && Fu.delegate !== this ? Fu.delegate.schedule(n, e, t) : super.schedule(n, e, t)
        }
        flush(n) {
          const {
            actions: e
          } = this;
          if (this.active) return void e.push(n);
          let t;
          this.active = !0;
          do {
            if (t = n.execute(n.state, n.delay)) break
          } while (n = e.shift());
          if (this.active = !1, t) {
            for (; n = e.shift();) n.unsubscribe();
            throw t
          }
        }
      }
      class ju extends Fu {}
      const Vu = new ju(Nu);
      let Bu = (() => {
        class n {
          constructor(n, e, t) {
            this.kind = n, this.value = e, this.error = t, this.hasValue = "N" === n
          }
          observe(n) {
            switch (this.kind) {
              case "N":
                return n.next && n.next(this.value);
              case "E":
                return n.error && n.error(this.error);
              case "C":
                return n.complete && n.complete()
            }
          }
          do(n, e, t) {
            switch (this.kind) {
              case "N":
                return n && n(this.value);
              case "E":
                return e && e(this.error);
              case "C":
                return t && t()
            }
          }
          accept(n, e, t) {
            return n && "function" == typeof n.next ? this.observe(n) : this.do(n, e, t)
          }
          toObservable() {
            switch (this.kind) {
              case "N":
                return function(...n) {
                  let e = n[n.length - 1];
                  return _(e) ? (n.pop(), R(n, e)) : j(n)
                }(this.value);
              case "E":
                return n = this.error, new v(e => e.error(n));
              case "C":
                return function(n) {
                  return n ? function(n) {
                    return new v(e => n.schedule(() => e.complete()))
                  }(n) : Iu
                }()
            }
            var n;
            throw new Error("unexpected notification kind value")
          }
          static
          createNext(e) {
            return void 0 !== e ? new n("N", e) : n.undefinedValueNotification
          }
          static createError(e) {
            return new n("E", void 0, e)
          }
          static createComplete() {
            return n.completeNotification
          }
        }
        return n.completeNotification = new n("C"), n.undefinedValueNotification = new n("N", void 0), n
      })();
      class qu extends f {
        constructor(n, e, t = 0) {
          super(n), this.scheduler = e, this.delay = t
        }
        static dispatch(n) {
          const {
            notification: e,
            destination: t
          } = n;
          e.observe(t), this.unsubscribe()
        }
        scheduleMessage(n) {
          this.destination.add(this.scheduler.schedule(qu.dispatch, this.delay, new Hu(n, this.destination)))
        }
        _next(n) {
          this.scheduleMessage(Bu.createNext(n))
        }
        _error(n) {
          this.scheduleMessage(Bu.createError(n)), this.unsubscribe()
        }
        _complete() {
          this.scheduleMessage(Bu.createComplete()), this.unsubscribe()
        }
      }
      class Hu {
        constructor(n, e) {
          this.notification = n, this.destination = e
        }
      }
      class Lu {
        constructor(n, e) {
          this.time = n, this.value = e
        }
      }
      var Wu = t("wdnw");
      const Uu = new class extends k {
          constructor(n = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, t) {
            super(), this.scheduler = t, this._events = [], this._infiniteTimeWindow = !1, this._bufferSize = n < 1 ? 1 : n, this._windowTime = e < 1 ? 1 : e, e === Number.POSITIVE_INFINITY ? (this._infiniteTimeWindow = !0, this.next = this.nextInfiniteTimeWindow) : this.next = this.nextTimeWindow
          }
          nextInfiniteTimeWindow(n) {
            const e = this._events;
            e.push(n), e.length > this._bufferSize && e.shift(), super.next(n)
          }
          nextTimeWindow(n) {
            this._events.push(new Lu(this._getNow(), n)), this._trimBufferThenGetEvents(), super.next(n)
          }
          _subscribe(n) {
            const e = this._infiniteTimeWindow,
              t = e ? this._events : this._trimBufferThenGetEvents(),
              o = this.scheduler,
              r = t.length;
            let i;
            if (this.closed) throw new w;
            if (this.isStopped || this.hasError ? i = u.EMPTY : (this.observers.push(n), i = new y(this, n)), o && n.add(n = new qu(n, o)), e)
              for (let s = 0; s < r && !n.closed; s++) n.next(t[s]);
            else
              for (let s = 0; s < r && !n.closed; s++) n.next(t[s].value);
            return this.hasError ? n.error(this.thrownError) : this.isStopped && n.complete(), i
          }
          _getNow() {
            return (this.scheduler || Vu).now()
          }
          _trimBufferThenGetEvents() {
            const n = this._getNow(),
              e = this._bufferSize,
              t = this._windowTime,
              o = this._events,
              r = o.length;
            let i = 0;
            for (; i < r && !(n - o[i].time < t);) i++;
            return r > e && (i = Math.max(i, r - e)), i > 0 && o.splice(0, i), o
          }
        }(1),
        Ku = new k;
      let Yu = !1,
        Gu = (() => {
          class n {
            constructor() {}
            get sass$() {
              return Yu || (Yu = !0, this._init()), Uu.asObservable()
            }
            get appended$() {
              return Ku.asObservable()
            }
            _init() {
              const n = document.createElement("script");
              n.setAttribute("src", "/sass.js"), document.head.appendChild(n), this._getSassFromGlobal()
            }
            _getSassFromGlobal() {
              if (window.Sass) return this.sass = new window.Sass, Uu.next(this.sass), this._loadFiles(), void this.sass.compile(Wu.index, () => console.log("### INFO: Sass Compiler is Ready"));
              setTimeout(() => {
                this._getSassFromGlobal()
              }, 50)
            }
            _loadFiles() {
              Wu.files.forEach(n => {
                this.sass.writeFile(n.filePath, n.scss)
              })
            }
            updateColorsOverrides(n) {
              this.sass.removeFile(this._colorsOverridesPath(n.project), e => {
                this.sass.writeFile(this._colorsOverridesPath(n.project), this._generateVariablesCustomizerSCSS(n)), this.sass.compile(Wu.index, n => {
                  this._addStyle(n.text), Ku.next(!0)
                })
              })
            }
            getVariableOverridesFile(n) {
              return new Promise(e => {
                this.sass.readFile(this._colorsOverridesPath(n), n => {
                  e(n)
                })
              })
            }
            _colorsOverridesPath(n) {
              switch (n) {
                case "sb-admin-pro":
                case "sb-admin-pro-angular":
                  return "sb-admin-pro/variables-colors-overrides.scss";
                case "sb-ui-kit-pro":
                case "sb-ui-kit-pro-angular":
                  return "sb-ui-kit-pro/variables-colors-overrides.scss"
              }
              return console.log(`### ERROR: Unable to find scss overrides file for ${n}`), ""
            }
            _addStyle(n) {
              const e = document.getElementById("StyleGenerator");
              e && e.parentNode && e.parentNode.removeChild(e);
              const t = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("style");
              o.setAttribute("id", "StyleGenerator"), t.appendChild(o), o.appendChild(document.createTextNode(n))
            }
            _generateVariablesCustomizerSCSS(n) {
              let e = `${function(n){switch(n){case"sb-admin-pro":return"// This file was generated for Start Bootstrap Admin Pro\n// https://shop.startbootstrap.com/product/sb-admin-pro/\n// Place this file in src/scss/_variables-colors-overrides.scss\n\n";case"sb-admin-pro-angular":return"// This file was generated for Start Bootstrap Admin Pro Angular\n// https://themes.startbootstrap.com/sb-admin-pro-angular/\n// Place this file in src/styles/sb-admin-pro/_variables-colors-overrides.scss\n\n";case"sb-ui-kit-pro":return"// This file was generated for Start Bootstrap UI Kit Pro\n// https://shop.startbootstrap.com/product/sb-ui-kit-pro/\n// Place this file in src/scss/_variables-colors-overrides.scss\n\n";case"sb-ui-kit-pro-angular":return"// This file was generated for Start Bootstrap UI Kit Pro Angular\n// https://themes.startbootstrap.com/sb-ui-kit-pro-angular/\n// Place this file in src/styles/sb-ui-kit-pro/_variables-colors-overrides.scss\n\n"}return""}(n.project)}`;
              for (const t in n.colors) n.colors[t] && (e += `$${t}: ${n.colors[t]};\n`);
              return e
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275prov = on({
            token: n,
            factory: n.\u0275fac
          }), n
        })();

      function Zu(n) {
        return (Zu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
          return typeof n
        } : function(n) {
          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        })(n)
      }

      function Xu(n, e, t) {
        return e in n ? Object.defineProperty(n, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[e] = t, n
      }

      function Qu(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            o = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable
          })))), o.forEach((function(e) {
            Xu(n, e, t[e])
          }))
        }
        return n
      }

      function Ju(n, e) {
        return function(n) {
          if (Array.isArray(n)) return n
        }(n) || function(n, e) {
          var t = [],
            o = !0,
            r = !1,
            i = void 0;
          try {
            for (var s, a = n[Symbol.iterator](); !(o = (s = a.next()).done) && (t.push(s.value), !e || t.length !== e); o = !0);
          } catch (l) {
            r = !0, i = l
          } finally {
            try {
              o || null == a.return || a.return()
            } finally {
              if (r) throw i
            }
          }
          return t
        }(n, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
      }
      var np = {},
        ep = {};
      try {
        "undefined" != typeof window && (np = window), "undefined" != typeof document && (ep = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && performance
      } catch (gf) {}
      var tp = (np.navigator || {}).userAgent,
        op = void 0 === tp ? "" : tp,
        rp = np,
        ip = ep,
        sp = !!ip.documentElement && !!ip.head && "function" == typeof ip.addEventListener && "function" == typeof ip.createElement,
        ap = (~op.indexOf("MSIE") || op.indexOf("Trident/"), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        lp = ap.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        cp = {
          GROUP: "group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary"
        },
        dp = (["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", cp.GROUP, cp.SWAP_OPACITY, cp.PRIMARY, cp.SECONDARY].concat(ap.map((function(n) {
          return "".concat(n, "x")
        }))).concat(lp.map((function(n) {
          return "w-".concat(n)
        }))), rp.FontAwesomeConfig || {});
      ip && "function" == typeof ip.querySelector && [
        ["data-family-prefix", "familyPrefix"],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-auto-a11y", "autoA11y"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-observe-mutations", "observeMutations"],
        ["data-mutate-approach", "mutateApproach"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
      ].forEach((function(n) {
        var e = Ju(n, 2),
          t = e[1],
          o = function(n) {
            return "" === n || "false" !== n && ("true" === n || n)
          }(function(n) {
            var e = ip.querySelector("script[" + n + "]");
            if (e) return e.getAttribute(n)
          }(e[0]));
        null != o && (dp[t] = o)
      }));
      var up = Qu({}, {
        familyPrefix: "fa",
        replacementClass: "svg-inline--fa",
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
      }, dp);
      up.autoReplaceSvg || (up.observeMutations = !1);
      var pp = Qu({}, up);
      rp.FontAwesomeConfig = pp;
      var hp = rp || {};
      hp.___FONT_AWESOME___ || (hp.___FONT_AWESOME___ = {}), hp.___FONT_AWESOME___.styles || (hp.___FONT_AWESOME___.styles = {}), hp.___FONT_AWESOME___.hooks || (hp.___FONT_AWESOME___.hooks = {}), hp.___FONT_AWESOME___.shims || (hp.___FONT_AWESOME___.shims = []);
      var fp = hp.___FONT_AWESOME___,
        gp = [];
      sp && ((ip.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ip.readyState) || ip.addEventListener("DOMContentLoaded", (function n() {
        ip.removeEventListener("DOMContentLoaded", n), gp.map((function(n) {
          return n()
        }))
      })));
      var mp, bp = function() {},
        vp = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
        $p = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        wp = [];

      function yp() {
        for (var n = 0; n < wp.length; n++) wp[n][0](wp[n][1]);
        wp = [], mp = !1
      }

      function xp(n, e) {
        wp.push([n, e]), mp || (mp = !0, $p(yp, 0))
      }

      function kp(n) {
        var e = n.owner,
          t = e._state,
          o = e._data,
          r = n[t],
          i = n.then;
        if ("function" == typeof r) {
          t = "fulfilled";
          try {
            o = r(o)
          } catch (gf) {
            Ap(i, gf)
          }
        }
        Cp(i, o) || ("fulfilled" === t && _p(i, o), "rejected" === t && Ap(i, o))
      }

      function Cp(n, e) {
        var t;
        try {
          if (n === e) throw new TypeError("A promises callback cannot return that same promise.");
          if (e && ("function" == typeof e || "object" === Zu(e))) {
            var o = e.then;
            if ("function" == typeof o) return o.call(e, (function(o) {
              t || (t = !0, e === o ? zp(n, o) : _p(n, o))
            }), (function(e) {
              t || (t = !0, Ap(n, e))
            })), !0
          }
        } catch (gf) {
          return t || Ap(n, gf), !0
        }
        return !1
      }

      function _p(n, e) {
        n !== e && Cp(n, e) || zp(n, e)
      }

      function zp(n, e) {
        "pending" === n._state && (n._state = "settled", n._data = e, xp(Ip, n))
      }

      function Ap(n, e) {
        "pending" === n._state && (n._state = "settled", n._data = e, xp(Ep, n))
      }

      function Sp(n) {
        n._then = n._then.forEach(kp)
      }

      function Ip(n) {
        n._state = "fulfilled", Sp(n)
      }

      function Ep(n) {
        n._state = "rejected", Sp(n), !n._handled && vp && global.process.emit("unhandledRejection", n._data, n)
      }

      function Pp(n) {
        global.process.emit("rejectionHandled", n)
      }

      function Tp(n) {
        if ("function" != typeof n) throw new TypeError("Promise resolver " + n + " is not a function");
        if (this instanceof Tp == 0) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [],
          function(n, e) {
            function t(n) {
              Ap(e, n)
            }
            try {
              n((function(n) {
                _p(e, n)
              }), t)
            } catch (gf) {
              t(gf)
            }
          }(n, this)
      }
      Tp.prototype = {
        constructor: Tp,
        _state: "pending",
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function(n, e) {
          var t = {
            owner: this,
            then: new this.constructor(bp),
            fulfilled: n,
            rejected: e
          };
          return !e && !n || this._handled || (this._handled = !0, "rejected" === this._state && vp && xp(Pp, this)), "fulfilled" === this._state || "rejected" === this._state ? xp(kp, t) : this._then.push(t), t.then
        },
        catch: function(n) {
          return this.then(null, n)
        }
      }, Tp.all = function(n) {
        if (!Array.isArray(n)) throw new TypeError("You must pass an array to Promise.all().");
        return new Tp((function(e, t) {
          var o = [],
            r = 0;

          function i(n) {
            return r++,
              function(t) {
                o[n] = t, --r || e(o)
              }
          }
          for (var s, a = 0; a < n.length; a++)(s = n[a]) && "function" == typeof s.then ? s.then(i(a), t) : o[a] = s;
          r || e(o)
        }))
      }, Tp.race = function(n) {
        if (!Array.isArray(n)) throw new TypeError("You must pass an array to Promise.race().");
        return new Tp((function(e, t) {
          for (var o, r = 0; r < n.length; r++)(o = n[r]) && "function" == typeof o.then ? o.then(e, t) : e(o)
        }))
      }, Tp.resolve = function(n) {
        return n && "object" === Zu(n) && n.constructor === Tp ? n : new Tp((function(e) {
          e(n)
        }))
      }, Tp.reject = function(n) {
        return new Tp((function(e, t) {
          t(n)
        }))
      };
      var Mp = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

      function Op() {
        for (var n = 12, e = ""; n-- > 0;) e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
        return e
      }

      function Rp(n) {
        return "".concat(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }

      function Np(n) {
        return Object.keys(n || {}).reduce((function(e, t) {
          return e + "".concat(t, ": ").concat(n[t], ";")
        }), "")
      }

      function Dp(n) {
        return n.size !== Mp.size || n.x !== Mp.x || n.y !== Mp.y || n.rotate !== Mp.rotate || n.flipX || n.flipY
      }

      function Fp(n) {
        var e = n.transform,
          t = n.iconWidth,
          o = {
            transform: "translate(".concat(n.containerWidth / 2, " 256)")
          },
          r = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
          i = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
          s = "rotate(".concat(e.rotate, " 0 0)");
        return {
          outer: o,
          inner: {
            transform: "".concat(r, " ").concat(i, " ").concat(s)
          },
          path: {
            transform: "translate(".concat(t / 2 * -1, " -256)")
          }
        }
      }
      var jp = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

      function Vp(n) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return n.attributes && (n.attributes.fill || e) && (n.attributes.fill = "black"), n
      }

      function Bp(n) {
        var e = n.icons,
          t = e.main,
          o = e.mask,
          r = n.prefix,
          i = n.iconName,
          s = n.transform,
          a = n.symbol,
          l = n.title,
          c = n.extra,
          d = n.watchable,
          u = void 0 !== d && d,
          p = o.found ? o : t,
          h = p.width,
          f = p.height,
          g = "fa-w-".concat(Math.ceil(h / f * 16)),
          m = [pp.replacementClass, i ? "".concat(pp.familyPrefix, "-").concat(i) : "", g].filter((function(n) {
            return -1 === c.classes.indexOf(n)
          })).concat(c.classes).join(" "),
          b = {
            children: [],
            attributes: Qu({}, c.attributes, {
              "data-prefix": r,
              "data-icon": i,
              class: m,
              role: c.attributes.role || "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 ".concat(h, " ").concat(f)
            })
          };
        u && (b.attributes["data-fa-i2svg"] = ""), l && b.children.push({
          tag: "title",
          attributes: {
            id: b.attributes["aria-labelledby"] || "title-".concat(Op())
          },
          children: [l]
        });
        var v = Qu({}, b, {
            prefix: r,
            iconName: i,
            main: t,
            mask: o,
            transform: s,
            symbol: a,
            styles: c.styles
          }),
          $ = o.found && t.found ? function(n) {
            var e, t = n.children,
              o = n.attributes,
              r = n.main,
              i = n.mask,
              s = r.icon,
              a = i.icon,
              l = Fp({
                transform: n.transform,
                containerWidth: i.width,
                iconWidth: r.width
              }),
              c = {
                tag: "rect",
                attributes: Qu({}, jp, {
                  fill: "white"
                })
              },
              d = s.children ? {
                children: s.children.map(Vp)
              } : {},
              u = {
                tag: "g",
                attributes: Qu({}, l.inner),
                children: [Vp(Qu({
                  tag: s.tag,
                  attributes: Qu({}, s.attributes, l.path)
                }, d))]
              },
              p = {
                tag: "g",
                attributes: Qu({}, l.outer),
                children: [u]
              },
              h = "mask-".concat(Op()),
              f = "clip-".concat(Op()),
              g = {
                tag: "mask",
                attributes: Qu({}, jp, {
                  id: h,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [c, p]
              },
              m = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: f
                  },
                  children: (e = a, "g" === e.tag ? e.children : [e])
                }, g]
              };
            return t.push(m, {
              tag: "rect",
              attributes: Qu({
                fill: "currentColor",
                "clip-path": "url(#".concat(f, ")"),
                mask: "url(#".concat(h, ")")
              }, jp)
            }), {
              children: t,
              attributes: o
            }
          }(v) : function(n) {
            var e = n.children,
              t = n.attributes,
              o = n.main,
              r = n.transform,
              i = Np(n.styles);
            if (i.length > 0 && (t.style = i), Dp(r)) {
              var s = Fp({
                transform: r,
                containerWidth: o.width,
                iconWidth: o.width
              });
              e.push({
                tag: "g",
                attributes: Qu({}, s.outer),
                children: [{
                  tag: "g",
                  attributes: Qu({}, s.inner),
                  children: [{
                    tag: o.icon.tag,
                    children: o.icon.children,
                    attributes: Qu({}, o.icon.attributes, s.path)
                  }]
                }]
              })
            } else e.push(o.icon);
            return {
              children: e,
              attributes: t
            }
          }(v),
          w = $.attributes;
        return v.children = $.children, v.attributes = w, a ? function(n) {
          var e = n.iconName,
            t = n.children,
            o = n.symbol;
          return [{
            tag: "svg",
            attributes: {
              style: "display: none;"
            },
            children: [{
              tag: "symbol",
              attributes: Qu({}, n.attributes, {
                id: !0 === o ? "".concat(n.prefix, "-").concat(pp.familyPrefix, "-").concat(e) : o
              }),
              children: t
            }]
          }]
        }(v) : function(n) {
          var e = n.children,
            t = n.main,
            o = n.mask,
            r = n.attributes,
            i = n.styles,
            s = n.transform;
          if (Dp(s) && t.found && !o.found) {
            var a = {
              x: t.width / t.height / 2,
              y: .5
            };
            r.style = Np(Qu({}, i, {
              "transform-origin": "".concat(a.x + s.x / 16, "em ").concat(a.y + s.y / 16, "em")
            }))
          }
          return [{
            tag: "svg",
            attributes: r,
            children: e
          }]
        }(v)
      }
      var qp = function(n, e, t, o) {
        var r, i, s, a = Object.keys(n),
          l = a.length,
          c = void 0 !== o ? function(n, e) {
            return function(t, o, r, i) {
              return n.call(e, t, o, r, i)
            }
          }(e, o) : e;
        for (void 0 === t ? (r = 1, s = n[a[0]]) : (r = 0, s = t); r < l; r++) s = c(s, n[i = a[r]], i, n);
        return s
      };

      function Hp(n, e) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = t.skipHooks,
          r = void 0 !== o && o,
          i = Object.keys(e).reduce((function(n, t) {
            var o = e[t];
            return o.icon ? n[o.iconName] = o.icon : n[t] = o, n
          }), {});
        "function" != typeof fp.hooks.addPack || r ? fp.styles[n] = Qu({}, fp.styles[n] || {}, i) : fp.hooks.addPack(n, i), "fas" === n && Hp("fa", e)
      }
      var Lp = fp.styles,
        Wp = fp.shims,
        Up = function() {
          var n = function(n) {
            return qp(Lp, (function(e, t, o) {
              return e[o] = qp(t, n, {}), e
            }), {})
          };
          n((function(n, e, t) {
            return e[3] && (n[e[3]] = t), n
          })), n((function(n, e, t) {
            var o = e[2];
            return n[t] = t, o.forEach((function(e) {
              n[e] = t
            })), n
          }));
          var e = "far" in Lp;
          qp(Wp, (function(n, t) {
            var o = t[1];
            return "far" !== o || e || (o = "fas"), n[t[0]] = {
              prefix: o,
              iconName: t[2]
            }, n
          }), {})
        };

      function Kp(n, e, t) {
        if (n && n[e] && n[e][t]) return {
          prefix: e,
          iconName: t,
          icon: n[e][t]
        }
      }

      function Yp(n) {
        var e = n.tag,
          t = n.attributes,
          o = void 0 === t ? {} : t,
          r = n.children,
          i = void 0 === r ? [] : r;
        return "string" == typeof n ? Rp(n) : "<".concat(e, " ").concat(function(n) {
          return Object.keys(n || {}).reduce((function(e, t) {
            return e + "".concat(t, '="').concat(Rp(n[t]), '" ')
          }), "").trim()
        }(o), ">").concat(i.map(Yp).join(""), "</").concat(e, ">")
      }

      function Gp(n) {
        this.name = "MissingIcon", this.message = n || "Icon unavailable", this.stack = (new Error).stack
      }
      Up(), (Gp.prototype = Object.create(Error.prototype)).constructor = Gp;
      var Zp = {
          fill: "currentColor"
        },
        Xp = {
          attributeType: "XML",
          repeatCount: "indefinite",
          dur: "2s"
        },
        Qp = (Qu({}, Zp, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }), Qu({}, Xp, {
          attributeName: "opacity"
        }));

      function Jp(n) {
        var e = n[0],
          t = n[1],
          o = Ju(n.slice(4), 1)[0];
        return {
          found: !0,
          width: e,
          height: t,
          icon: Array.isArray(o) ? {
            tag: "g",
            attributes: {
              class: "".concat(pp.familyPrefix, "-").concat(cp.GROUP)
            },
            children: [{
              tag: "path",
              attributes: {
                class: "".concat(pp.familyPrefix, "-").concat(cp.SECONDARY),
                fill: "currentColor",
                d: o[0]
              }
            }, {
              tag: "path",
              attributes: {
                class: "".concat(pp.familyPrefix, "-").concat(cp.PRIMARY),
                fill: "currentColor",
                d: o[1]
              }
            }]
          } : {
            tag: "path",
            attributes: {
              fill: "currentColor",
              d: o
            }
          }
        }
      }

      function nh() {
        pp.autoAddCss && !ih && (function(n) {
          if (n && sp) {
            var e = ip.createElement("style");
            e.setAttribute("type", "text/css"), e.innerHTML = n;
            for (var t = ip.head.childNodes, o = null, r = t.length - 1; r > -1; r--) {
              var i = t[r],
                s = (i.tagName || "").toUpperCase();
              ["STYLE", "LINK"].indexOf(s) > -1 && (o = i)
            }
            ip.head.insertBefore(e, o)
          }
        }(function() {
          var n = "svg-inline--fa",
            e = pp.familyPrefix,
            t = pp.replacementClass,
            o = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
          if ("fa" !== e || t !== n) {
            var r = new RegExp("\\.".concat("fa", "\\-"), "g"),
              i = new RegExp("\\--".concat("fa", "\\-"), "g"),
              s = new RegExp("\\.".concat(n), "g");
            o = o.replace(r, ".".concat(e, "-")).replace(i, "--".concat(e, "-")).replace(s, ".".concat(t))
          }
          return o
        }()), ih = !0)
      }

      function eh(n, e) {
        return Object.defineProperty(n, "abstract", {
          get: e
        }), Object.defineProperty(n, "html", {
          get: function() {
            return n.abstract.map((function(n) {
              return Yp(n)
            }))
          }
        }), Object.defineProperty(n, "node", {
          get: function() {
            if (sp) {
              var e = ip.createElement("div");
              return e.innerHTML = n.html, e.children
            }
          }
        }), n
      }

      function th(n) {
        var e = n.prefix,
          t = void 0 === e ? "fa" : e,
          o = n.iconName;
        if (o) return Kp(rh.definitions, t, o) || Kp(fp.styles, t, o)
      }
      Qu({}, Zp, {
        cx: "256",
        cy: "364",
        r: "28"
      }), Qu({}, Xp, {
        attributeName: "r",
        values: "28;14;28;28;14;28;"
      }), Qu({}, Qp, {
        values: "1;0;1;1;0;1;"
      }), Qu({}, Zp, {
        opacity: "1",
        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
      }), Qu({}, Qp, {
        values: "1;0;0;0;0;1;"
      }), Qu({}, Zp, {
        opacity: "0",
        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
      }), Qu({}, Qp, {
        values: "0;0;1;1;0;0;"
      });
      var oh, rh = new(function() {
          function n() {
            ! function(n, e) {
              if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, n), this.definitions = {}
          }
          var e;
          return (e = [{
            key: "add",
            value: function() {
              for (var n = this, e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
              var r = t.reduce(this._pullDefinitions, {});
              Object.keys(r).forEach((function(e) {
                n.definitions[e] = Qu({}, n.definitions[e] || {}, r[e]), Hp(e, r[e]), Up()
              }))
            }
          }, {
            key: "reset",
            value: function() {
              this.definitions = {}
            }
          }, {
            key: "_pullDefinitions",
            value: function(n, e) {
              var t = e.prefix && e.iconName && e.icon ? {
                0: e
              } : e;
              return Object.keys(t).map((function(e) {
                var o = t[e],
                  r = o.prefix,
                  i = o.iconName,
                  s = o.icon;
                n[r] || (n[r] = {}), n[r][i] = s
              })), n
            }
          }]) && function(n, e) {
            for (var t = 0; t < e.length; t++) {
              var o = e[t];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
            }
          }(n.prototype, e), n
        }()),
        ih = !1,
        sh = (oh = function(n) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = e.transform,
            o = void 0 === t ? Mp : t,
            r = e.symbol,
            i = void 0 !== r && r,
            s = e.mask,
            a = void 0 === s ? null : s,
            l = e.title,
            c = void 0 === l ? null : l,
            d = e.classes,
            u = void 0 === d ? [] : d,
            p = e.attributes,
            h = void 0 === p ? {} : p,
            f = e.styles,
            g = void 0 === f ? {} : f;
          if (n) {
            var m = n.prefix,
              b = n.iconName,
              v = n.icon;
            return eh(Qu({
              type: "icon"
            }, n), (function() {
              return nh(), pp.autoA11y && (c ? h["aria-labelledby"] = "".concat(pp.replacementClass, "-title-").concat(Op()) : (h["aria-hidden"] = "true", h.focusable = "false")), Bp({
                icons: {
                  main: Jp(v),
                  mask: a ? Jp(a.icon) : {
                    found: !1,
                    width: null,
                    height: null,
                    icon: {}
                  }
                },
                prefix: m,
                iconName: b,
                transform: Qu({}, Mp, o),
                symbol: i,
                title: c,
                extra: {
                  attributes: h,
                  styles: g,
                  classes: u
                }
              })
            }))
          }
        }, function(n) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = (n || {}).icon ? n : th(n || {}),
            o = e.mask;
          return o && (o = (o || {}).icon ? o : th(o || {})), oh(t, Qu({}, e, {
            mask: o
          }))
        });
      const ah = [1, "ng-fa-icon"];
      let lh = (() => {
          class n {
            constructor() {
              this.defaultPrefix = "fas", this.globalLibrary = "unset"
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275prov = on({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
          }), n.ngInjectableDef = on({
            factory: function() {
              return new n
            },
            token: n,
            providedIn: "root"
          }), n
        })(),
        ch = (() => {
          class n {
            constructor() {
              this.definitions = {}
            }
            addIcons(...n) {
              for (let e = 0; e < n.length; e++) {
                const t = n[e];
                t.prefix in this.definitions || (this.definitions[t.prefix] = {}), this.definitions[t.prefix][t.iconName] = t
              }
            }
            addIconPacks(...n) {
              for (let e = 0; e < n.length; e++) {
                const t = n[e],
                  o = Object.keys(t).map(n => t[n]);
                this.addIcons(...o)
              }
            }
            getIconDefinition(n, e) {
              return n in this.definitions && e in this.definitions[n] ? this.definitions[n][e] : null
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275prov = on({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
          }), n.ngInjectableDef = on({
            factory: function() {
              return new n
            },
            token: n,
            providedIn: "root"
          }), n
        })();
      const dh = n => {
        const e = {
          "fa-spin": n.spin,
          "fa-pulse": n.pulse,
          "fa-fw": n.fixedWidth,
          "fa-border": n.border,
          "fa-li": n.listItem,
          "fa-inverse": n.inverse,
          "fa-layers-counter": n.counter,
          "fa-flip-horizontal": "horizontal" === n.flip || "both" === n.flip,
          "fa-flip-vertical": "vertical" === n.flip || "both" === n.flip,
          [`fa-${n.size}`]: null !== n.size,
          [`fa-rotate-${n.rotate}`]: null !== n.rotate,
          [`fa-pull-${n.pull}`]: null !== n.pull,
          [`fa-stack-${n.stackItemSize}`]: null != n.stackItemSize
        };
        return Object.keys(e).map(n => e[n] ? n : null).filter(n => n)
      };
      let uh = (() => {
          class n {
            constructor() {
              this.stackItemSize = "1x"
            }
            ngOnChanges(n) {
              if ("size" in n) throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275dir = ae({
            type: n,
            selectors: [
              ["fa-icon", "stackItemSize", ""],
              ["fa-duotone-icon", "stackItemSize", ""]
            ],
            inputs: {
              stackItemSize: "stackItemSize",
              size: "size"
            },
            features: [Ja()]
          }), n
        })(),
        ph = (() => {
          class n {
            constructor(n, e, t, o) {
              this.sanitizer = n, this.config = e, this.iconLibrary = t, this.stackItem = o, this.classes = []
            }
            get iconProp() {
              return this.icon
            }
            set iconProp(n) {
              this.icon = n
            }
            ngOnChanges(n) {
              if (null != this.icon) {
                if (n) {
                  const n = this.findIconDefinition(this.icon);
                  if (null != n) {
                    const e = this.buildParams();
                    this.renderIcon(n, e)
                  }
                }
              } else console.error("FontAwesome: Property `icon` is required for `fa-icon`/`fa-duotone-icon` components. This warning will become a hard error in 0.6.0.")
            }
            render() {
              this.ngOnChanges({})
            }
            findIconDefinition(n) {
              const e = ((n, e) => {
                return void 0 !== (t = n).prefix && void 0 !== t.iconName ? n : Array.isArray(n) && 2 === n.length ? {
                  prefix: n[0],
                  iconName: n[1]
                } : "string" == typeof n ? {
                  prefix: e,
                  iconName: n
                } : void 0;
                var t
              })(n, this.config.defaultPrefix);
              if ("icon" in e) return e;
              const t = this.iconLibrary.getIconDefinition(e.prefix, e.iconName);
              if (null != t) return t;
              const o = th(e);
              if (null != o) {
                const n = "Global icon library is deprecated. Consult https://github.com/FortAwesome/angular-fontawesome/blob/master/UPGRADING.md for the migration instructions.";
                if ("unset" === this.config.globalLibrary) console.error("FontAwesome: " + n);
                else if (!this.config.globalLibrary) throw new Error(n);
                return o
              }
              var r;
              return r = e, console.error(`FontAwesome: Could not find icon with iconName=${r.iconName} and prefix=${r.prefix}. ` + "This warning will become a hard error in 0.6.0."), null
            }
            buildParams() {
              const n = {
                  flip: this.flip,
                  spin: this.spin,
                  pulse: this.pulse,
                  border: this.border,
                  inverse: this.inverse,
                  listItem: this.listItem,
                  size: this.size || null,
                  pull: this.pull || null,
                  rotate: this.rotate || null,
                  fixedWidth: this.fixedWidth,
                  stackItemSize: null != this.stackItem ? this.stackItem.stackItemSize : null
                },
                e = "string" == typeof this.transform ? function(n) {
                  var e = {
                    size: 16,
                    x: 0,
                    y: 0,
                    flipX: !1,
                    flipY: !1,
                    rotate: 0
                  };
                  return n ? n.toLowerCase().split(" ").reduce((function(n, e) {
                    var t = e.toLowerCase().split("-"),
                      o = t[0],
                      r = t.slice(1).join("-");
                    if (o && "h" === r) return n.flipX = !0, n;
                    if (o && "v" === r) return n.flipY = !0, n;
                    if (r = parseFloat(r), isNaN(r)) return n;
                    switch (o) {
                      case "grow":
                        n.size = n.size + r;
                        break;
                      case "shrink":
                        n.size = n.size - r;
                        break;
                      case "left":
                        n.x = n.x - r;
                        break;
                      case "right":
                        n.x = n.x + r;
                        break;
                      case "up":
                        n.y = n.y - r;
                        break;
                      case "down":
                        n.y = n.y + r;
                        break;
                      case "rotate":
                        n.rotate = n.rotate + r
                    }
                    return n
                  }), e) : e
                }(this.transform) : this.transform;
              return {
                title: this.title,
                transform: e,
                classes: [...dh(n), ...this.classes],
                mask: null != this.mask ? this.findIconDefinition(this.mask) : null,
                styles: null != this.styles ? this.styles : {},
                symbol: this.symbol,
                attributes: {
                  role: this.a11yRole
                }
              }
            }
            renderIcon(n, e) {
              const t = sh(n, e);
              this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(t.html.join("\n"))
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)(ba(hu), ba(lh), ba(ch), ba(uh, 8))
          }, n.\u0275cmp = ee({
            type: n,
            selectors: [
              ["fa-icon"]
            ],
            hostBindings: function(n, e, t) {
              1 & n && (ra(2), function(n) {
                const e = Ue(),
                  t = ye(),
                  o = t[1],
                  r = ir(e, t);
                if (3 === r.type) {
                  const e = rr(r, t),
                    i = at(t[11], e, n);
                  o.firstCreatePass && _a(r, n, i) && Ri(t[11], e, r, !0)
                }
              }(ah)), 2 & n && (Wa("innerHTML", e.renderedIconHTML, er), fa("title", e.title))
            },
            inputs: {
              classes: "classes",
              icon: "icon",
              title: "title",
              spin: "spin",
              pulse: "pulse",
              mask: "mask",
              styles: "styles",
              flip: "flip",
              size: "size",
              pull: "pull",
              border: "border",
              inverse: "inverse",
              symbol: "symbol",
              listItem: "listItem",
              rotate: "rotate",
              fixedWidth: "fixedWidth",
              transform: "transform",
              a11yRole: "a11yRole"
            },
            features: [Ja()],
            decls: 0,
            vars: 0,
            template: function(n, e) {},
            encapsulation: 2
          }), n
        })(),
        hh = (() => {
          class n {}
          return n.\u0275mod = ie({
            type: n
          }), n.\u0275inj = rn({
            factory: function(e) {
              return new(e || n)
            }
          }), n
        })();
      var fh = ["dialogPopup"],
        gh = ["hueSlider"],
        mh = ["alphaSlider"];

      function bh(n, e) {
        if (1 & n && Ma(0, "div"), 2 & n) {
          var t = Va();
          (function(n, e, t) {
            const o = ga(ye(), "arrow arrow-", e, "");
            xa(Ue(), o)
          })(0, t.cpUsePosition), va("top", t.arrowTop, "px")
        }
      }

      function vh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "div", 26), Da("newValue", (function(n) {
            return Se(t), Va().onColorChange(n)
          }))("dragStart", (function(n) {
            return Se(t), Va().onDragStart("saturation-lightness")
          }))("dragEnd", (function(n) {
            return Se(t), Va().onDragEnd("saturation-lightness")
          })), Ma(1, "div", 13), Ta()
        }
        if (2 & n) {
          var o = Va();
          va("background-color", o.hueSliderColor), Ba("rgX", 1)("rgY", 1), Lr(1), va("top", null == o.slider ? null : o.slider.v, "px")("left", null == o.slider ? null : o.slider.s, "px")
        }
      }

      function $h(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "button", 27), Da("click", (function(n) {
            Se(t);
            var e = Va();
            return e.onAddPresetColor(n, e.selectedColor)
          })), qa(1), Ta()
        }
        if (2 & n) {
          var o = Va();
          ya(o.cpAddColorButtonClass), Ba("disabled", o.cpPresetColors && o.cpPresetColors.length >= o.cpMaxPresetColorsLength), Lr(1), La(" ", o.cpAddColorButtonText, " ")
        }
      }

      function wh(n, e) {
        1 & n && Ma(0, "div", 28)
      }

      function yh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "input", 34), Da("keyup.enter", (function(n) {
            return Se(t), Va(2).onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va(2).onAlphaInput(n)
          })), Ta()
        }
        if (2 & n) {
          var o = Va(2);
          Ba("rg", 1)("value", null == o.cmykText ? null : o.cmykText.a)
        }
      }

      function xh(n, e) {
        1 & n && (Pa(0, "div"), qa(1, "A"), Ta())
      }

      function kh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "div", 29), Pa(1, "div", 30), Pa(2, "input", 31), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onCyanInput(n)
          })), Ta(), Pa(3, "input", 31), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onMagentaInput(n)
          })), Ta(), Pa(4, "input", 31), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onYellowInput(n)
          })), Ta(), Pa(5, "input", 31), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onBlackInput(n)
          })), Ta(), ma(6, yh, 1, 2, "input", 32), Ta(), Pa(7, "div", 30), Pa(8, "div"), qa(9, "C"), Ta(), Pa(10, "div"), qa(11, "M"), Ta(), Pa(12, "div"), qa(13, "Y"), Ta(), Pa(14, "div"), qa(15, "K"), Ta(), ma(16, xh, 2, 0, "div", 33), Ta(), Ta()
        }
        if (2 & n) {
          var o = Va();
          va("display", 3 !== o.format ? "none" : "block"), Lr(2), Ba("rg", 100)("value", null == o.cmykText ? null : o.cmykText.c), Lr(1), Ba("rg", 100)("value", null == o.cmykText ? null : o.cmykText.m), Lr(1), Ba("rg", 100)("value", null == o.cmykText ? null : o.cmykText.y), Lr(1), Ba("rg", 100)("value", null == o.cmykText ? null : o.cmykText.k), Lr(1), Ba("ngIf", "disabled" !== o.cpAlphaChannel), Lr(10), Ba("ngIf", "disabled" !== o.cpAlphaChannel)
        }
      }

      function Ch(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "input", 34), Da("keyup.enter", (function(n) {
            return Se(t), Va(2).onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va(2).onAlphaInput(n)
          })), Ta()
        }
        if (2 & n) {
          var o = Va(2);
          Ba("rg", 1)("value", null == o.hslaText ? null : o.hslaText.a)
        }
      }

      function _h(n, e) {
        1 & n && (Pa(0, "div"), qa(1, "A"), Ta())
      }

      function zh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "div", 35), Pa(1, "div", 30), Pa(2, "input", 36), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onHueInput(n)
          })), Ta(), Pa(3, "input", 31), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onSaturationInput(n)
          })), Ta(), Pa(4, "input", 31), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onLightnessInput(n)
          })), Ta(), ma(5, Ch, 1, 2, "input", 32), Ta(), Pa(6, "div", 30), Pa(7, "div"), qa(8, "H"), Ta(), Pa(9, "div"), qa(10, "S"), Ta(), Pa(11, "div"), qa(12, "L"), Ta(), ma(13, _h, 2, 0, "div", 33), Ta(), Ta()
        }
        if (2 & n) {
          var o = Va();
          va("display", 2 !== o.format ? "none" : "block"), Lr(2), Ba("rg", 360)("value", null == o.hslaText ? null : o.hslaText.h), Lr(1), Ba("rg", 100)("value", null == o.hslaText ? null : o.hslaText.s), Lr(1), Ba("rg", 100)("value", null == o.hslaText ? null : o.hslaText.l), Lr(1), Ba("ngIf", "disabled" !== o.cpAlphaChannel), Lr(8), Ba("ngIf", "disabled" !== o.cpAlphaChannel)
        }
      }

      function Ah(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "input", 34), Da("keyup.enter", (function(n) {
            return Se(t), Va(2).onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va(2).onAlphaInput(n)
          })), Ta()
        }
        if (2 & n) {
          var o = Va(2);
          Ba("rg", 1)("value", null == o.rgbaText ? null : o.rgbaText.a)
        }
      }

      function Sh(n, e) {
        1 & n && (Pa(0, "div"), qa(1, "A"), Ta())
      }

      function Ih(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "div", 37), Pa(1, "div", 30), Pa(2, "input", 38), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onRedInput(n)
          })), Ta(), Pa(3, "input", 38), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onGreenInput(n)
          })), Ta(), Pa(4, "input", 38), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onBlueInput(n)
          })), Ta(), ma(5, Ah, 1, 2, "input", 32), Ta(), Pa(6, "div", 30), Pa(7, "div"), qa(8, "R"), Ta(), Pa(9, "div"), qa(10, "G"), Ta(), Pa(11, "div"), qa(12, "B"), Ta(), ma(13, Sh, 2, 0, "div", 33), Ta(), Ta()
        }
        if (2 & n) {
          var o = Va();
          va("display", 1 !== o.format ? "none" : "block"), Lr(2), Ba("rg", 255)("value", null == o.rgbaText ? null : o.rgbaText.r), Lr(1), Ba("rg", 255)("value", null == o.rgbaText ? null : o.rgbaText.g), Lr(1), Ba("rg", 255)("value", null == o.rgbaText ? null : o.rgbaText.b), Lr(1), Ba("ngIf", "disabled" !== o.cpAlphaChannel), Lr(8), Ba("ngIf", "disabled" !== o.cpAlphaChannel)
        }
      }

      function Eh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "input", 34), Da("keyup.enter", (function(n) {
            return Se(t), Va(2).onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va(2).onAlphaInput(n)
          })), Ta()
        }
        if (2 & n) {
          var o = Va(2);
          Ba("rg", 1)("value", o.hexAlpha)
        }
      }

      function Ph(n, e) {
        1 & n && (Pa(0, "div"), qa(1, "A"), Ta())
      }

      function Th(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "div", 39), Pa(1, "div", 30), Pa(2, "input", 40), Da("blur", (function(n) {
            return Se(t), Va().onHexInput(null)
          }))("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onHexInput(n)
          })), Ta(), ma(3, Eh, 1, 2, "input", 32), Ta(), Pa(4, "div", 30), Pa(5, "div"), qa(6, "Hex"), Ta(), ma(7, Ph, 2, 0, "div", 33), Ta(), Ta()
        }
        if (2 & n) {
          var o = Va();
          va("display", 0 !== o.format ? "none" : "block"), $a("hex-alpha", "forced" === o.cpAlphaChannel), Lr(2), Ba("value", o.hexText), Lr(1), Ba("ngIf", "forced" === o.cpAlphaChannel), Lr(4), Ba("ngIf", "forced" === o.cpAlphaChannel)
        }
      }

      function Mh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "input", 34), Da("keyup.enter", (function(n) {
            return Se(t), Va(2).onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va(2).onAlphaInput(n)
          })), Ta()
        }
        if (2 & n) {
          var o = Va(2);
          Ba("rg", 1)("value", null == o.hslaText ? null : o.hslaText.a)
        }
      }

      function Oh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "div", 41), Pa(1, "div", 30), Pa(2, "input", 31), Da("keyup.enter", (function(n) {
            return Se(t), Va().onAcceptColor(n)
          }))("newValue", (function(n) {
            return Se(t), Va().onValueInput(n)
          })), Ta(), ma(3, Mh, 1, 2, "input", 32), Ta(), Pa(4, "div", 30), Pa(5, "div"), qa(6, "V"), Ta(), Pa(7, "div"), qa(8, "A"), Ta(), Ta(), Ta()
        }
        if (2 & n) {
          var o = Va();
          Lr(2), Ba("rg", 100)("value", null == o.hslaText ? null : o.hslaText.l), Lr(1), Ba("ngIf", "disabled" !== o.cpAlphaChannel)
        }
      }

      function Rh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "div", 42), Pa(1, "span", 43), Da("click", (function(n) {
            return Se(t), Va().onFormatToggle(-1)
          })), Ta(), Pa(2, "span", 43), Da("click", (function(n) {
            return Se(t), Va().onFormatToggle(1)
          })), Ta(), Ta()
        }
      }

      function Nh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "span", 50), Da("click", (function(n) {
            Se(t);
            var e = Va().$implicit;
            return Va(3).onRemovePresetColor(n, e)
          })), Ta()
        }
        2 & n && ya(Va(4).cpRemoveColorButtonClass)
      }

      function Dh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "div", 48), Da("click", (function(n) {
            Se(t);
            var o = e.$implicit;
            return Va(3).setColorFromString(o)
          })), ma(1, Nh, 1, 3, "span", 49), Ta()
        }
        if (2 & n) {
          var o = e.$implicit,
            r = Va(3);
          va("background-color", o), Lr(1), Ba("ngIf", r.cpAddColorButton)
        }
      }

      function Fh(n, e) {
        if (1 & n && (Pa(0, "div"), ma(1, Dh, 2, 2, "div", 47), Ta()), 2 & n) {
          var t = Va(2);
          ya(t.cpPresetColorsClass), Lr(1), Ba("ngForOf", t.cpPresetColors)
        }
      }

      function jh(n, e) {
        if (1 & n && (Pa(0, "div"), qa(1), Ta()), 2 & n) {
          var t = Va(2);
          ya(t.cpPresetEmptyMessageClass), Lr(1), Ha(t.cpPresetEmptyMessage)
        }
      }

      function Vh(n, e) {
        if (1 & n && (Pa(0, "div", 44), Ma(1, "hr"), Pa(2, "div", 45), qa(3), Ta(), ma(4, Fh, 2, 4, "div", 46), ma(5, jh, 2, 4, "div", 46), Ta()), 2 & n) {
          var t = Va();
          Lr(3), Ha(t.cpPresetLabel), Lr(1), Ba("ngIf", null == t.cpPresetColors ? null : t.cpPresetColors.length), Lr(1), Ba("ngIf", !(null != t.cpPresetColors && t.cpPresetColors.length) && t.cpAddColorButton)
        }
      }

      function Bh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "button", 53), Da("click", (function(n) {
            return Se(t), Va(2).onCancelColor(n)
          })), qa(1), Ta()
        }
        if (2 & n) {
          var o = Va(2);
          ya(o.cpCancelButtonClass), Lr(1), Ha(o.cpCancelButtonText)
        }
      }

      function qh(n, e) {
        if (1 & n) {
          var t = Ra();
          Pa(0, "button", 53), Da("click", (function(n) {
            return Se(t), Va(2).onAcceptColor(n)
          })), qa(1), Ta()
        }
        if (2 & n) {
          var o = Va(2);
          ya(o.cpOKButtonClass), Lr(1), Ha(o.cpOKButtonText)
        }
      }

      function Hh(n, e) {
        if (1 & n && (Pa(0, "div", 51), ma(1, Bh, 2, 4, "button", 52), ma(2, qh, 2, 4, "button", 52), Ta()), 2 & n) {
          var t = Va();
          Lr(1), Ba("ngIf", t.cpCancelButton), Lr(1), Ba("ngIf", t.cpOKButton)
        }
      }
      var Lh = function() {
          var n = {
            HEX: 0,
            RGBA: 1,
            HSLA: 2,
            CMYK: 3
          };
          return n[n.HEX] = "HEX", n[n.RGBA] = "RGBA", n[n.HSLA] = "HSLA", n[n.CMYK] = "CMYK", n
        }(),
        Wh = function() {
          return function(n, e, t, o) {
            this.r = n, this.g = e, this.b = t, this.a = o
          }
        }(),
        Uh = function() {
          return function(n, e, t, o) {
            this.h = n, this.s = e, this.v = t, this.a = o
          }
        }(),
        Kh = function() {
          return function(n, e, t, o) {
            this.h = n, this.s = e, this.l = t, this.a = o
          }
        }(),
        Yh = function() {
          return function(n, e, t, o, r) {
            void 0 === r && (r = 1), this.c = n, this.m = e, this.y = t, this.k = o, this.a = r
          }
        }(),
        Gh = function() {
          function n() {
            this.newValue = new oc
          }
          return n.prototype.inputChange = function(n) {
            var e = n.target.value;
            if (void 0 === this.rg) this.newValue.emit(e);
            else {
              var t = parseFloat(e);
              this.newValue.emit({
                v: t,
                rg: this.rg
              })
            }
          }, n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275dir = ae({
            type: n,
            selectors: [
              ["", "text", ""]
            ],
            hostBindings: function(n, e, t) {
              1 & n && Da("input", (function(n) {
                return e.inputChange(n)
              }))
            },
            inputs: {
              rg: "rg",
              text: "text"
            },
            outputs: {
              newValue: "newValue"
            }
          }), n
        }(),
        Zh = function() {
          function n(n) {
            var e = this;
            this.elRef = n, this.dragEnd = new oc, this.dragStart = new oc, this.newValue = new oc, this.listenerMove = function(n) {
              return e.move(n)
            }, this.listenerStop = function() {
              return e.stop()
            }
          }
          return n.prototype.mouseDown = function(n) {
            this.start(n)
          }, n.prototype.touchStart = function(n) {
            this.start(n)
          }, n.prototype.move = function(n) {
            n.preventDefault(), this.setCursor(n)
          }, n.prototype.start = function(n) {
            this.setCursor(n), n.stopPropagation(), document.addEventListener("mouseup", this.listenerStop), document.addEventListener("touchend", this.listenerStop), document.addEventListener("mousemove", this.listenerMove), document.addEventListener("touchmove", this.listenerMove), this.dragStart.emit()
          }, n.prototype.stop = function() {
            document.removeEventListener("mouseup", this.listenerStop), document.removeEventListener("touchend", this.listenerStop), document.removeEventListener("mousemove", this.listenerMove), document.removeEventListener("touchmove", this.listenerMove), this.dragEnd.emit()
          }, n.prototype.getX = function(n) {
            var e = this.elRef.nativeElement.getBoundingClientRect();
            return (void 0 !== n.pageX ? n.pageX : n.touches[0].pageX) - e.left - window.pageXOffset
          }, n.prototype.getY = function(n) {
            var e = this.elRef.nativeElement.getBoundingClientRect();
            return (void 0 !== n.pageY ? n.pageY : n.touches[0].pageY) - e.top - window.pageYOffset
          }, n.prototype.setCursor = function(n) {
            var e = this.elRef.nativeElement.offsetWidth,
              t = this.elRef.nativeElement.offsetHeight,
              o = Math.max(0, Math.min(this.getX(n), e)),
              r = Math.max(0, Math.min(this.getY(n), t));
            void 0 !== this.rgX && void 0 !== this.rgY ? this.newValue.emit({
              s: o / e,
              v: 1 - r / t,
              rgX: this.rgX,
              rgY: this.rgY
            }) : void 0 === this.rgX && void 0 !== this.rgY ? this.newValue.emit({
              v: r / t,
              rgY: this.rgY
            }) : void 0 !== this.rgX && void 0 === this.rgY && this.newValue.emit({
              v: o / e,
              rgX: this.rgX
            })
          }, n.\u0275fac = function(e) {
            return new(e || n)(ba(hl))
          }, n.\u0275dir = ae({
            type: n,
            selectors: [
              ["", "slider", ""]
            ],
            hostBindings: function(n, e, t) {
              1 & n && Da("mousedown", (function(n) {
                return e.mouseDown(n)
              }))("touchstart", (function(n) {
                return e.touchStart(n)
              }))
            },
            inputs: {
              rgX: "rgX",
              rgY: "rgY",
              slider: "slider"
            },
            outputs: {
              dragEnd: "dragEnd",
              dragStart: "dragStart",
              newValue: "newValue"
            }
          }), n
        }(),
        Xh = function() {
          return function(n, e, t, o) {
            this.h = n, this.s = e, this.v = t, this.a = o
          }
        }(),
        Qh = function() {
          return function(n, e, t, o) {
            this.h = n, this.s = e, this.v = t, this.a = o
          }
        }(),
        Jh = function() {
          function n() {
            this.active = null
          }
          return n.prototype.setActive = function(n) {
            this.active && this.active !== n && "inline" !== this.active.cpDialogDisplay && this.active.closeDialog(), this.active = n
          }, n.prototype.hsva2hsla = function(n) {
            var e = n.h,
              t = n.s,
              o = n.v,
              r = n.a;
            if (0 === o) return new Kh(e, 0, 0, r);
            if (0 === t && 1 === o) return new Kh(e, 1, 1, r);
            var i = o * (2 - t) / 2;
            return new Kh(e, o * t / (1 - Math.abs(2 * i - 1)), i, r)
          }, n.prototype.hsla2hsva = function(n) {
            var e = Math.min(n.h, 1),
              t = Math.min(n.s, 1),
              o = Math.min(n.l, 1),
              r = Math.min(n.a, 1);
            if (0 === o) return new Uh(e, 0, 0, r);
            var i = o + t * (1 - Math.abs(2 * o - 1)) / 2;
            return new Uh(e, 2 * (i - o) / i, i, r)
          }, n.prototype.hsvaToRgba = function(n) {
            var e, t, o, r = n.h,
              i = n.s,
              s = n.v,
              a = n.a,
              l = Math.floor(6 * r),
              c = 6 * r - l,
              d = s * (1 - i),
              u = s * (1 - c * i),
              p = s * (1 - (1 - c) * i);
            switch (l % 6) {
              case 0:
                e = s, t = p, o = d;
                break;
              case 1:
                e = u, t = s, o = d;
                break;
              case 2:
                e = d, t = s, o = p;
                break;
              case 3:
                e = d, t = u, o = s;
                break;
              case 4:
                e = p, t = d, o = s;
                break;
              case 5:
                e = s, t = d, o = u;
                break;
              default:
                e = 0, t = 0, o = 0
            }
            return new Wh(e, t, o, a)
          }, n.prototype.cmykToRgb = function(n) {
            return new Wh((1 - n.c) * (1 - n.k), (1 - n.m) * (1 - n.k), (1 - n.y) * (1 - n.k), n.a)
          }, n.prototype.rgbaToCmyk = function(n) {
            var e = 1 - Math.max(n.r, n.g, n.b);
            return 1 === e ? new Yh(0, 0, 0, 1, n.a) : new Yh((1 - n.r - e) / (1 - e), (1 - n.g - e) / (1 - e), (1 - n.b - e) / (1 - e), e, n.a)
          }, n.prototype.rgbaToHsva = function(n) {
            var e, t, o = Math.min(n.r, 1),
              r = Math.min(n.g, 1),
              i = Math.min(n.b, 1),
              s = Math.min(n.a, 1),
              a = Math.max(o, r, i),
              l = Math.min(o, r, i),
              c = a,
              d = a - l;
            if (t = 0 === a ? 0 : d / a, a === l) e = 0;
            else {
              switch (a) {
                case o:
                  e = (r - i) / d + (r < i ? 6 : 0);
                  break;
                case r:
                  e = (i - o) / d + 2;
                  break;
                case i:
                  e = (o - r) / d + 4;
                  break;
                default:
                  e = 0
              }
              e /= 6
            }
            return new Uh(e, t, c, s)
          }, n.prototype.rgbaToHex = function(n, e) {
            var t = "#" + (1 << 24 | n.r << 16 | n.g << 8 | n.b).toString(16).substr(1);
            return e && (t += (256 | Math.round(255 * n.a)).toString(16).substr(1)), t
          }, n.prototype.normalizeCMYK = function(n) {
            return new Yh(n.c / 100, n.m / 100, n.y / 100, n.k / 100, n.a)
          }, n.prototype.denormalizeCMYK = function(n) {
            return new Yh(Math.floor(100 * n.c), Math.floor(100 * n.m), Math.floor(100 * n.y), Math.floor(100 * n.k), n.a)
          }, n.prototype.denormalizeRGBA = function(n) {
            return new Wh(Math.round(255 * n.r), Math.round(255 * n.g), Math.round(255 * n.b), n.a)
          }, n.prototype.stringToHsva = function(n, e) {
            void 0 === n && (n = ""), void 0 === e && (e = !1);
            var t = null;
            n = (n || "").toLowerCase();
            var o = [{
              re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
              parse: function(n) {
                return new Wh(parseInt(n[2], 10) / 255, parseInt(n[3], 10) / 255, parseInt(n[4], 10) / 255, isNaN(parseFloat(n[5])) ? 1 : parseFloat(n[5]))
              }
            }, {
              re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
              parse: function(n) {
                return new Kh(parseInt(n[2], 10) / 360, parseInt(n[3], 10) / 100, parseInt(n[4], 10) / 100, isNaN(parseFloat(n[5])) ? 1 : parseFloat(n[5]))
              }
            }];
            for (var r in o.push(e ? {
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: function(n) {
                  return new Wh(parseInt(n[1], 16) / 255, parseInt(n[2], 16) / 255, parseInt(n[3], 16) / 255, parseInt(n[4] || "FF", 16) / 255)
                }
              } : {
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function(n) {
                  return new Wh(parseInt(n[1], 16) / 255, parseInt(n[2], 16) / 255, parseInt(n[3], 16) / 255, 1)
                }
              }), o.push({
                re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                parse: function(n) {
                  return new Wh(parseInt(n[1] + n[1], 16) / 255, parseInt(n[2] + n[2], 16) / 255, parseInt(n[3] + n[3], 16) / 255, 1)
                }
              }), o)
              if (o.hasOwnProperty(r)) {
                var i = o[r],
                  s = i.re.exec(n),
                  a = s && i.parse(s);
                if (a) return a instanceof Wh ? t = this.rgbaToHsva(a) : a instanceof Kh && (t = this.hsla2hsva(a)), t
              } return t
          }, n.prototype.outputFormat = function(n, e, t) {
            switch ("auto" === e && (e = n.a < 1 ? "rgba" : "hex"), e) {
              case "hsla":
                var o = this.hsva2hsla(n),
                  r = new Kh(Math.round(360 * o.h), Math.round(100 * o.s), Math.round(100 * o.l), Math.round(100 * o.a) / 100);
                return n.a < 1 || "always" === t ? "hsla(" + r.h + "," + r.s + "%," + r.l + "%," + r.a + ")" : "hsl(" + r.h + "," + r.s + "%," + r.l + "%)";
              case "rgba":
                var i = this.denormalizeRGBA(this.hsvaToRgba(n));
                return n.a < 1 || "always" === t ? "rgba(" + i.r + "," + i.g + "," + i.b + "," + Math.round(100 * i.a) / 100 + ")" : "rgb(" + i.r + "," + i.g + "," + i.b + ")";
              default:
                var s = "always" === t || "forced" === t;
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(n)), s)
            }
          }, n.\u0275fac = function(e) {
            return new(e || n)
          }, n.\u0275prov = on({
            token: n,
            factory: function(e) {
              return n.\u0275fac(e)
            }
          }), n
        }(),
        nf = function() {
          function n(n, e, t) {
            this.elRef = n, this.cdRef = e, this.service = t, this.isIE10 = !1, this.dialogArrowSize = 10, this.dialogArrowOffset = 15, this.dialogInputFields = [Lh.HEX, Lh.RGBA, Lh.HSLA, Lh.CMYK], this.useRootViewContainer = !1
          }
          return n.prototype.handleEsc = function(n) {
            this.show && "popup" === this.cpDialogDisplay && this.onCancelColor(n)
          }, n.prototype.handleEnter = function(n) {
            this.show && "popup" === this.cpDialogDisplay && this.onAcceptColor(n)
          }, n.prototype.ngOnInit = function() {
            var n = this;
            this.slider = new Xh(0, 0, 0, 0), this.sliderDimMax = new Qh(this.hueSlider.nativeElement.offsetWidth || 140, this.cpWidth, 130, this.alphaSlider.nativeElement.offsetWidth || 140), this.format = this.cpCmykEnabled ? Lh.CMYK : "rgba" === this.cpOutputFormat ? Lh.RGBA : "hsla" === this.cpOutputFormat ? Lh.HSLA : Lh.HEX, this.listenerMouseDown = function(e) {
              n.onMouseDown(e)
            }, this.listenerResize = function() {
              n.onResize()
            }, this.openDialog(this.initialColor, !1)
          }, n.prototype.ngOnDestroy = function() {
            this.closeDialog()
          }, n.prototype.ngAfterViewInit = function() {
            230 === this.cpWidth && "inline" !== this.cpDialogDisplay || (this.sliderDimMax = new Qh(this.hueSlider.nativeElement.offsetWidth || 140, this.cpWidth, 130, this.alphaSlider.nativeElement.offsetWidth || 140), this.updateColorPicker(!1), this.cdRef.detectChanges())
          }, n.prototype.openDialog = function(n, e) {
            void 0 === e && (e = !0), this.service.setActive(this), this.width || (this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth), this.height || (this.height = 320), this.setInitialColor(n), this.setColorFromString(n, e), this.openColorPicker()
          }, n.prototype.closeDialog = function() {
            this.closeColorPicker()
          }, n.prototype.setupDialog = function(n, e, t, o, r, i, s, a, l, c, d, u, p, h, f, g, m, b, v, $, w, y, x, k, C, _, z, A, S, I, E, P, T, M, O) {
            this.setInitialColor(t), this.setColorMode(a), this.isIE10 = 10 === function() {
              var n = "";
              "undefined" != typeof navigator && (n = navigator.userAgent.toLowerCase());
              var e = n.indexOf("msie ");
              return e > 0 && parseInt(n.substring(e + 5, n.indexOf(".", e)), 10)
            }(), this.directiveInstance = n, this.directiveElementRef = e, this.cpDisableInput = u, this.cpCmykEnabled = l, this.cpAlphaChannel = c, this.cpOutputFormat = d, this.cpDialogDisplay = i, this.cpIgnoredElements = p, this.cpSaveClickOutside = h, this.cpCloseClickOutside = f, this.useRootViewContainer = g, this.width = this.cpWidth = parseInt(o, 10), this.height = this.cpHeight = parseInt(r, 10), this.cpPosition = m, this.cpPositionOffset = parseInt(b, 10), this.cpOKButton = _, this.cpOKButtonText = A, this.cpOKButtonClass = z, this.cpCancelButton = S, this.cpCancelButtonText = E, this.cpCancelButtonClass = I, this.fallbackColor = s || "#fff", this.setPresetConfig($, w), this.cpPresetColorsClass = y, this.cpMaxPresetColorsLength = x, this.cpPresetEmptyMessage = k, this.cpPresetEmptyMessageClass = C, this.cpAddColorButton = P, this.cpAddColorButtonText = M, this.cpAddColorButtonClass = T, this.cpRemoveColorButtonClass = O, v || (this.dialogArrowOffset = 0), "inline" === i && (this.dialogArrowSize = 0, this.dialogArrowOffset = 0), "hex" === d && "always" !== c && "forced" !== c && (this.cpAlphaChannel = "disabled")
          }, n.prototype.setColorMode = function(n) {
            switch (n.toString().toUpperCase()) {
              case "1":
              case "C":
              case "COLOR":
                this.cpColorMode = 1;
                break;
              case "2":
              case "G":
              case "GRAYSCALE":
                this.cpColorMode = 2;
                break;
              case "3":
              case "P":
              case "PRESETS":
                this.cpColorMode = 3;
                break;
              default:
                this.cpColorMode = 1
            }
          }, n.prototype.setInitialColor = function(n) {
            this.initialColor = n
          }, n.prototype.setPresetConfig = function(n, e) {
            this.cpPresetLabel = n, this.cpPresetColors = e
          }, n.prototype.setColorFromString = function(n, e, t) {
            var o;
            void 0 === e && (e = !0), void 0 === t && (t = !0), ("always" === this.cpAlphaChannel || "forced" === this.cpAlphaChannel) && ((o = this.service.stringToHsva(n, !0)) || this.hsva) || (o = this.service.stringToHsva(n, !1)), o || this.hsva || (o = this.service.stringToHsva(this.fallbackColor, !1)), o && (this.hsva = o, this.sliderH = this.hsva.h, "hex" === this.cpOutputFormat && "disabled" === this.cpAlphaChannel && (this.hsva.a = 1), this.updateColorPicker(e, t))
          }, n.prototype.onResize = function() {
            "fixed" === this.position ? this.setDialogPosition() : "inline" !== this.cpDialogDisplay && this.closeColorPicker()
          }, n.prototype.onDragEnd = function(n) {
            this.directiveInstance.sliderDragEnd({
              slider: n,
              color: this.outputColor
            })
          }, n.prototype.onDragStart = function(n) {
            this.directiveInstance.sliderDragStart({
              slider: n,
              color: this.outputColor
            })
          }, n.prototype.onMouseDown = function(n) {
            !this.show || this.isIE10 || "popup" !== this.cpDialogDisplay || n.target === this.directiveElementRef.nativeElement || this.isDescendant(this.elRef.nativeElement, n.target) || this.isDescendant(this.directiveElementRef.nativeElement, n.target) || 0 !== this.cpIgnoredElements.filter((function(e) {
              return e === n.target
            })).length || (this.cpSaveClickOutside ? this.directiveInstance.colorSelected(this.outputColor) : (this.setColorFromString(this.initialColor, !1), this.cpCmykEnabled && this.directiveInstance.cmykChanged(this.cmykColor), this.directiveInstance.colorChanged(this.outputColor)), this.cpCloseClickOutside && this.closeColorPicker())
          }, n.prototype.onAcceptColor = function(n) {
            n.stopPropagation(), this.outputColor && this.directiveInstance.colorSelected(this.outputColor), "popup" === this.cpDialogDisplay && this.closeColorPicker()
          }, n.prototype.onCancelColor = function(n) {
            n.stopPropagation(), this.setColorFromString(this.initialColor, !0), "popup" === this.cpDialogDisplay && (this.cpCmykEnabled && this.directiveInstance.cmykChanged(this.cmykColor), this.directiveInstance.colorChanged(this.outputColor, !0), this.closeColorPicker()), this.directiveInstance.colorCanceled()
          }, n.prototype.onFormatToggle = function(n) {
            var e = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1),
              t = ((this.dialogInputFields.indexOf(this.format) + n) % e + e) % e;
            this.format = this.dialogInputFields[t]
          }, n.prototype.onColorChange = function(n) {
            this.hsva.s = n.s / n.rgX, this.hsva.v = n.v / n.rgY, this.updateColorPicker(), this.directiveInstance.sliderChanged({
              slider: "lightness",
              value: this.hsva.v,
              color: this.outputColor
            }), this.directiveInstance.sliderChanged({
              slider: "saturation",
              value: this.hsva.s,
              color: this.outputColor
            })
          }, n.prototype.onHueChange = function(n) {
            this.hsva.h = n.v / n.rgX, this.sliderH = this.hsva.h, this.updateColorPicker(), this.directiveInstance.sliderChanged({
              slider: "hue",
              value: this.hsva.h,
              color: this.outputColor
            })
          }, n.prototype.onValueChange = function(n) {
            this.hsva.v = n.v / n.rgX, this.updateColorPicker(), this.directiveInstance.sliderChanged({
              slider: "value",
              value: this.hsva.v,
              color: this.outputColor
            })
          }, n.prototype.onAlphaChange = function(n) {
            this.hsva.a = n.v / n.rgX, this.updateColorPicker(), this.directiveInstance.sliderChanged({
              slider: "alpha",
              value: this.hsva.a,
              color: this.outputColor
            })
          }, n.prototype.onHexInput = function(n) {
            if (null === n) this.updateColorPicker();
            else {
              n && "#" !== n[0] && (n = "#" + n);
              var e = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
              "always" === this.cpAlphaChannel && (e = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi);
              var t = e.test(n);
              t && (n.length < 5 && (n = "#" + n.substring(1).split("").map((function(n) {
                return n + n
              })).join("")), "forced" === this.cpAlphaChannel && (n += Math.round(255 * this.hsva.a).toString(16)), this.setColorFromString(n, !0, !1)), this.directiveInstance.inputChanged({
                input: "hex",
                valid: t,
                value: n,
                color: this.outputColor
              })
            }
          }, n.prototype.onRedInput = function(n) {
            var e = this.service.hsvaToRgba(this.hsva),
              t = !isNaN(n.v) && n.v >= 0 && n.v <= n.rg;
            t && (e.r = n.v / n.rg, this.hsva = this.service.rgbaToHsva(e), this.sliderH = this.hsva.h, this.updateColorPicker()), this.directiveInstance.inputChanged({
              input: "red",
              valid: t,
              value: e.r,
              color: this.outputColor
            })
          }, n.prototype.onBlueInput = function(n) {
            var e = this.service.hsvaToRgba(this.hsva),
              t = !isNaN(n.v) && n.v >= 0 && n.v <= n.rg;
            t && (e.b = n.v / n.rg, this.hsva = this.service.rgbaToHsva(e), this.sliderH = this.hsva.h, this.updateColorPicker()), this.directiveInstance.inputChanged({
              input: "blue",
              valid: t,
              value: e.b,
              color: this.outputColor
            })
          }, n.prototype.onGreenInput = function(n) {
            var e = this.service.hsvaToRgba(this.hsva),
              t = !isNaN(n.v) && n.v >= 0 && n.v <= n.rg;
            t && (e.g = n.v / n.rg, this.hsva = this.service.rgbaToHsva(e), this.sliderH = this.hsva.h, this.updateColorPicker()), this.directiveInstance.inputChanged({
              input: "green",
              valid: t,
              value: e.g,
              color: this.outputColor
            })
          }, n.prototype.onHueInput = function(n) {
            var e = !isNaN(n.v) && n.v >= 0 && n.v <= n.rg;
            e && (this.hsva.h = n.v / n.rg, this.sliderH = this.hsva.h, this.updateColorPicker()), this.directiveInstance.inputChanged({
              input: "hue",
              valid: e,
              value: this.hsva.h,
              color: this.outputColor
            })
          }, n.prototype.onValueInput = function(n) {
            var e = !isNaN(n.v) && n.v >= 0 && n.v <= n.rg;
            e && (this.hsva.v = n.v / n.rg, this.updateColorPicker()), this.directiveInstance.inputChanged({
              input: "value",
              valid: e,
              value: this.hsva.v,
              color: this.outputColor
            })
          }, n.prototype.onAlphaInput = function(n) {
            var e = !isNaN(n.v) && n.v >= 0 && n.v <= n.rg;
            e && (this.hsva.a = n.v / n.rg, this.updateColorPicker()), this.directiveInstance.inputChanged({
              input: "alpha",
              valid: e,
              value: this.hsva.a,
              color: this.outputColor
            })
          }, n.prototype.onLightnessInput = function(n) {
            var e = this.service.hsva2hsla(this.hsva),
              t = !isNaN(n.v) && n.v >= 0 && n.v <= n.rg;
            t && (e.l = n.v / n.rg, this.hsva = this.service.hsla2hsva(e), this.sliderH = this.hsva.h, this.updateColorPicker()), this.directiveInstance.inputChanged({
              input: "lightness",
              valid: t,
              value: e.l,
              color: this.outputColor
            })
          }, n.prototype.onSaturationInput = function(n) {
            var e = this.service.hsva2hsla(this.hsva),
              t = !isNaN(n.v) && n.v >= 0 && n.v <= n.rg;
            t && (e.s = n.v / n.rg, this.hsva = this.service.hsla2hsva(e), this.sliderH = this.hsva.h, this.updateColorPicker()), this.directiveInstance.inputChanged({
              input: "saturation",
              valid: t,
              value: e.s,
              color: this.outputColor
            })
          }, n.prototype.onCyanInput = function(n) {
            !isNaN(n.v) && n.v >= 0 && n.v <= n.rg && (this.cmyk.c = n.v, this.updateColorPicker(!1, !0, !0)), this.directiveInstance.inputChanged({
              input: "cyan",
              valid: !0,
              value: this.cmyk.c,
              color: this.outputColor
            })
          }, n.prototype.onMagentaInput = function(n) {
            !isNaN(n.v) && n.v >= 0 && n.v <= n.rg && (this.cmyk.m = n.v, this.updateColorPicker(!1, !0, !0)), this.directiveInstance.inputChanged({
              input: "magenta",
              valid: !0,
              value: this.cmyk.m,
              color: this.outputColor
            })
          }, n.prototype.onYellowInput = function(n) {
            !isNaN(n.v) && n.v >= 0 && n.v <= n.rg && (this.cmyk.y = n.v, this.updateColorPicker(!1, !0, !0)), this.directiveInstance.inputChanged({
              input: "yellow",
              valid: !0,
              value: this.cmyk.y,
              color: this.outputColor
            })
          }, n.prototype.onBlackInput = function(n) {
            !isNaN(n.v) && n.v >= 0 && n.v <= n.rg && (this.cmyk.k = n.v, this.updateColorPicker(!1, !0, !0)), this.directiveInstance.inputChanged({
              input: "black",
              valid: !0,
              value: this.cmyk.k,
              color: this.outputColor
            })
          }, n.prototype.onAddPresetColor = function(n, e) {
            n.stopPropagation(), this.cpPresetColors.filter((function(n) {
              return n === e
            })).length || (this.cpPresetColors = this.cpPresetColors.concat(e), this.directiveInstance.presetColorsChanged(this.cpPresetColors))
          }, n.prototype.onRemovePresetColor = function(n, e) {
            n.stopPropagation(), this.cpPresetColors = this.cpPresetColors.filter((function(n) {
              return n !== e
            })), this.directiveInstance.presetColorsChanged(this.cpPresetColors)
          }, n.prototype.openColorPicker = function() {
            var n = this;
            this.show || (this.show = !0, this.hidden = !0, setTimeout((function() {
              n.hidden = !1, n.setDialogPosition(), n.cdRef.detectChanges()
            }), 0), this.directiveInstance.stateChanged(!0), this.isIE10 || (document.addEventListener("mousedown", this.listenerMouseDown), document.addEventListener("touchstart", this.listenerMouseDown)), window.addEventListener("resize", this.listenerResize))
          }, n.prototype.closeColorPicker = function() {
            this.show && (this.show = !1, this.directiveInstance.stateChanged(!1), this.isIE10 || (document.removeEventListener("mousedown", this.listenerMouseDown), document.removeEventListener("touchstart", this.listenerMouseDown)), window.removeEventListener("resize", this.listenerResize), this.cdRef.destroyed || this.cdRef.detectChanges())
          }, n.prototype.updateColorPicker = function(n, e, t) {
            if (void 0 === n && (n = !0), void 0 === e && (e = !0), void 0 === t && (t = !1), this.sliderDimMax) {
              2 === this.cpColorMode && (this.hsva.s = 0);
              var o, r, i = void 0,
                s = this.outputColor;
              if (r = this.service.hsva2hsla(this.hsva), this.cpCmykEnabled ? (t ? (i = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk)), this.hsva = this.service.rgbaToHsva(i)) : (i = this.service.hsvaToRgba(this.hsva), this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(i))), i = this.service.denormalizeRGBA(i), this.sliderH = this.hsva.h) : i = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva)), o = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Uh(this.sliderH || this.hsva.h, 1, 1, 1))), e && (this.hslaText = new Kh(Math.round(360 * r.h), Math.round(100 * r.s), Math.round(100 * r.l), Math.round(100 * r.a) / 100), this.rgbaText = new Wh(i.r, i.g, i.b, Math.round(100 * i.a) / 100), this.cpCmykEnabled && (this.cmykText = new Yh(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(100 * this.cmyk.a) / 100)), this.hexText = this.service.rgbaToHex(i, "always" === this.cpAlphaChannel), this.hexAlpha = this.rgbaText.a), "auto" === this.cpOutputFormat && this.format !== Lh.RGBA && this.format !== Lh.CMYK && this.hsva.a < 1 && (this.format = this.hsva.a < 1 ? Lh.RGBA : Lh.HEX), this.hueSliderColor = "rgb(" + o.r + "," + o.g + "," + o.b + ")", this.alphaSliderColor = "rgb(" + i.r + "," + i.g + "," + i.b + ")", this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel), this.selectedColor = this.service.outputFormat(this.hsva, "rgba", null), this.format !== Lh.CMYK) this.cmykColor = "";
              else if ("always" === this.cpAlphaChannel || "enabled" === this.cpAlphaChannel || "forced" === this.cpAlphaChannel) {
                var a = Math.round(100 * this.cmyk.a) / 100;
                this.cmykColor = "cmyka(" + this.cmyk.c + "," + this.cmyk.m + "," + this.cmyk.y + "," + this.cmyk.k + "," + a + ")"
              } else this.cmykColor = "cmyk(" + this.cmyk.c + "," + this.cmyk.m + "," + this.cmyk.y + "," + this.cmyk.k + ")";
              this.slider = new Xh((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8), n && s !== this.outputColor && (this.cpCmykEnabled && this.directiveInstance.cmykChanged(this.cmykColor), this.directiveInstance.colorChanged(this.outputColor))
            }
          }, n.prototype.setDialogPosition = function() {
            if ("inline" === this.cpDialogDisplay) this.position = "relative";
            else {
              for (var n = "static", e = "", t = void 0, o = null, r = null, i = this.directiveElementRef.nativeElement.parentNode, s = this.dialogElement.nativeElement.offsetHeight; null !== i && "HTML" !== i.tagName;) {
                if ("static" !== (n = (t = window.getComputedStyle(i)).getPropertyValue("position")) && null === o && (o = i), (e = t.getPropertyValue("transform")) && "none" !== e && null === r && (r = i), "fixed" === n) {
                  o = r;
                  break
                }
                i = i.parentNode
              }
              var a = this.createDialogBox(this.directiveElementRef.nativeElement, "fixed" !== n);
              if (this.useRootViewContainer || "fixed" === n && (!o || o instanceof HTMLUnknownElement)) this.top = a.top, this.left = a.left;
              else {
                null === o && (o = i);
                var l = this.createDialogBox(o, "fixed" !== n);
                this.top = a.top - l.top, this.left = a.left - l.left
              }
              "fixed" === n && (this.position = "fixed");
              var c = this.cpPosition;
              if ("auto" === this.cpPosition) {
                var d = "right",
                  u = "bottom",
                  p = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                  h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                this.left + this.cpWidth > p && (d = "left"), this.top + s > h && (u = "top"), c = d + "-" + u
              }
              this.cpUsePosition = c, "top" === c ? (this.arrowTop = s - 1, this.top -= s + this.dialogArrowSize, this.left += this.cpPositionOffset / 100 * a.width - this.dialogArrowOffset) : "bottom" === c ? (this.top += a.height + this.dialogArrowSize, this.left += this.cpPositionOffset / 100 * a.width - this.dialogArrowOffset) : "top-left" === c || "left-top" === c ? (this.top -= s - a.height + a.height * this.cpPositionOffset / 100, this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset) : "top-right" === c || "right-top" === c ? (this.top -= s - a.height + a.height * this.cpPositionOffset / 100, this.left += a.width + this.dialogArrowSize - 2 - this.dialogArrowOffset) : "left" === c || "bottom-left" === c || "left-bottom" === c ? (this.top += a.height * this.cpPositionOffset / 100 - this.dialogArrowOffset, this.left -= this.cpWidth + this.dialogArrowSize - 2) : (this.top += a.height * this.cpPositionOffset / 100 - this.dialogArrowOffset, this.left += a.width + this.dialogArrowSize - 2)
            }
          }, n.prototype.isDescendant = function(n, e) {
            for (var t = e.parentNode; null !== t;) {
              if (t === n) return !0;
              t = t.parentNode
            }
            return !1
          }, n.prototype.createDialogBox = function(n, e) {
            return {
              top: n.getBoundingClientRect().top + (e ? window.pageYOffset : 0),
              left: n.getBoundingClientRect().left + (e ? window.pageXOffset : 0),
              width: n.offsetWidth,
              height: n.offsetHeight
            }
          }, n.\u0275fac = function(e) {
            return new(e || n)(ba(hl), ba(ls), ba(Jh))
          }, n.\u0275cmp = ee({
            type: n,
            selectors: [
              ["color-picker"]
            ],
            viewQuery: function(n, e) {
              var t;
              1 & n && (gc(fh, !0), gc(gh, !0), gc(mh, !0)), 2 & n && (fc(t = bc()) && (e.dialogElement = t.first), fc(t = bc()) && (e.hueSlider = t.first), fc(t = bc()) && (e.alphaSlider = t.first))
            },
            hostBindings: function(n, e, t) {
              1 & n && Da("keyup.esc", (function(n) {
                return e.handleEsc(n)
              }), !1, mt)("keyup.enter", (function(n) {
                return e.handleEnter(n)
              }), !1, mt)
            },
            decls: 28,
            vars: 31,
            consts: [
              [1, "color-picker", 3, "click"],
              ["dialogPopup", ""],
              [3, "class", "top", 4, "ngIf"],
              ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"],
              [1, "hue-alpha", "box"],
              [1, "left"],
              [1, "selected-color-background"],
              [1, "selected-color"],
              ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"],
              [1, "right"],
              ["style", "height: 16px;", 4, "ngIf"],
              [1, "hue", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"],
              ["hueSlider", ""],
              [1, "cursor"],
              [1, "value", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"],
              ["valueSlider", ""],
              [1, "alpha", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"],
              ["alphaSlider", ""],
              ["class", "cmyk-text", 3, "display", 4, "ngIf"],
              ["class", "hsla-text", 3, "display", 4, "ngIf"],
              ["class", "rgba-text", 3, "display", 4, "ngIf"],
              ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"],
              ["class", "value-text", 4, "ngIf"],
              ["class", "type-policy", 4, "ngIf"],
              ["class", "preset-area", 4, "ngIf"],
              ["class", "button-area", 4, "ngIf"],
              [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue", "dragStart", "dragEnd"],
              ["type", "button", 3, "disabled", "click"],
              [2, "height", "16px"],
              [1, "cmyk-text"],
              [1, "box"],
              ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "text", "rg", "value", "keyup.enter", "newValue"],
              ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"],
              [4, "ngIf"],
              ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue"],
              [1, "hsla-text"],
              ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "text", "rg", "value", "keyup.enter", "newValue"],
              [1, "rgba-text"],
              ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "text", "rg", "value", "keyup.enter", "newValue"],
              [1, "hex-text"],
              [3, "text", "value", "blur", "keyup.enter", "newValue"],
              [1, "value-text"],
              [1, "type-policy"],
              [1, "type-policy-arrow", 3, "click"],
              [1, "preset-area"],
              [1, "preset-label"],
              [3, "class", 4, "ngIf"],
              ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"],
              [1, "preset-color", 3, "click"],
              [3, "class", "click", 4, "ngIf"],
              [3, "click"],
              [1, "button-area"],
              ["type", "button", 3, "class", "click", 4, "ngIf"],
              ["type", "button", 3, "click"]
            ],
            template: function(n, e) {
              1 & n && (Pa(0, "div", 0, 1), Da("click", (function(n) {
                return n.stopPropagation()
              })), ma(2, bh, 1, 4, "div", 2), ma(3, vh, 2, 5, "div", 3), Pa(4, "div", 4), Pa(5, "div", 5), Ma(6, "div", 6), Ma(7, "div", 7), ma(8, $h, 2, 5, "button", 8), Ta(), Pa(9, "div", 9), ma(10, wh, 1, 0, "div", 10), Pa(11, "div", 11, 12), Da("newValue", (function(n) {
                return e.onHueChange(n)
              }))("dragStart", (function(n) {
                return e.onDragStart("hue")
              }))("dragEnd", (function(n) {
                return e.onDragEnd("hue")
              })), Ma(13, "div", 13), Ta(), Pa(14, "div", 14, 15), Da("newValue", (function(n) {
                return e.onValueChange(n)
              }))("dragStart", (function(n) {
                return e.onDragStart("value")
              }))("dragEnd", (function(n) {
                return e.onDragEnd("value")
              })), Ma(16, "div", 13), Ta(), Pa(17, "div", 16, 17), Da("newValue", (function(n) {
                return e.onAlphaChange(n)
              }))("dragStart", (function(n) {
                return e.onDragStart("alpha")
              }))("dragEnd", (function(n) {
                return e.onDragEnd("alpha")
              })), Ma(19, "div", 13), Ta(), Ta(), Ta(), ma(20, kh, 17, 11, "div", 18), ma(21, zh, 14, 9, "div", 19), ma(22, Ih, 14, 9, "div", 20), ma(23, Th, 8, 5, "div", 21), ma(24, Oh, 9, 3, "div", 22), ma(25, Rh, 3, 0, "div", 23), ma(26, Vh, 6, 3, "div", 24), ma(27, Hh, 3, 2, "div", 25), Ta()), 2 & n && (va("display", e.show ? "block" : "none")("visibility", e.hidden ? "hidden" : "visible")("top", e.top, "px")("left", e.left, "px")("position", e.position)("height", e.cpHeight, "px")("width", e.cpWidth, "px"), $a("open", e.show), Lr(2), Ba("ngIf", "popup" == e.cpDialogDisplay), Lr(1), Ba("ngIf", 1 === (e.cpColorMode || 1)), Lr(4), va("background-color", e.selectedColor), Lr(1), Ba("ngIf", e.cpAddColorButton), Lr(2), Ba("ngIf", "disabled" === e.cpAlphaChannel), Lr(1), va("display", 1 === (e.cpColorMode || 1) ? "block" : "none"), Ba("rgX", 1), Lr(2), va("left", null == e.slider ? null : e.slider.h, "px"), Lr(1), va("display", 2 === (e.cpColorMode || 1) ? "block" : "none"), Ba("rgX", 1), Lr(2), va("right", null == e.slider ? null : e.slider.v, "px"), Lr(1), va("display", "disabled" === e.cpAlphaChannel ? "none" : "block")("background-color", e.alphaSliderColor), Ba("rgX", 1), Lr(2), va("left", null == e.slider ? null : e.slider.a, "px"), Lr(1), Ba("ngIf", !e.cpDisableInput && 1 === (e.cpColorMode || 1)), Lr(1), Ba("ngIf", !e.cpDisableInput && 1 === (e.cpColorMode || 1)), Lr(1), Ba("ngIf", !e.cpDisableInput && 1 === (e.cpColorMode || 1)), Lr(1), Ba("ngIf", !e.cpDisableInput && 1 === (e.cpColorMode || 1)), Lr(1), Ba("ngIf", !e.cpDisableInput && 2 === (e.cpColorMode || 1)), Lr(1), Ba("ngIf", !e.cpDisableInput && 1 === (e.cpColorMode || 1)), Lr(1), Ba("ngIf", (null == e.cpPresetColors ? null : e.cpPresetColors.length) || e.cpAddColorButton), Lr(1), Ba("ngIf", e.cpOKButton || e.cpCancelButton))
            },
            directives: [Fd, Zh, Gh, Nd],
            styles: [".color-picker {\n  position: absolute;\n  z-index: 100000;\n\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n\n  cursor: default;\n\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  user-select: none;\n  background-color: #fff;\n}\n\n.color-picker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n\n  box-sizing: border-box;\n  margin: 0;\n\n  font-size: 11px;\n}\n\n.color-picker input {\n  width: 0;\n  height: 26px;\n  min-width: 0;\n\n  font-size: 13px;\n  text-align: center;\n  color: #000;\n}\n\n.color-picker input:invalid,\n.color-picker input:-moz-ui-invalid,\n.color-picker input:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n.color-picker input::-webkit-inner-spin-button,\n.color-picker input::-webkit-outer-spin-button {\n  margin: 0;\n\n  -webkit-appearance: none;\n}\n\n.color-picker .arrow {\n  position: absolute;\n  z-index: 999999;\n\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.color-picker .arrow.arrow-top {\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-bottom {\n  top: -20px;\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-top-left,\n.color-picker .arrow.arrow-left-top {\n  right: -21px;\n  bottom: 8px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-top-right,\n.color-picker .arrow.arrow-right-top {\n  bottom: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-left,\n.color-picker .arrow.arrow-left-bottom,\n.color-picker .arrow.arrow-bottom-left {\n  top: 8px;\n  right: -21px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-right,\n.color-picker .arrow.arrow-right-bottom,\n.color-picker .arrow.arrow-bottom-right {\n  top: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .cursor {\n  position: relative;\n\n  width: 16px;\n  height: 16px;\n  border: #222 solid 2px;\n  border-radius: 50%;\n\n  cursor: default;\n}\n\n.color-picker .box {\n  display: flex;\n  padding: 4px 8px;\n}\n\n.color-picker .left {\n  position: relative;\n\n  padding: 16px 8px;\n}\n\n.color-picker .right {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  padding: 12px 8px;\n}\n\n.color-picker .button-area {\n  padding: 0 16px 16px;\n\n  text-align: right;\n}\n\n.color-picker .preset-area {\n  padding: 4px 15px;\n}\n\n.color-picker .preset-area .preset-label {\n  overflow: hidden;\n  width: 100%;\n  padding: 4px;\n\n  font-size: 11px;\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.color-picker .preset-area .preset-color {\n  position: relative;\n\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 4px 6px 8px;\n  border: #a9a9a9 solid 1px;\n  border-radius: 25%;\n\n  cursor: pointer;\n}\n\n.color-picker .preset-area .preset-empty-message {\n  min-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n\n  font-style: italic;\n  text-align: center;\n}\n\n.color-picker .hex-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hex-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .hex-text .box div {\n  float: left;\n\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  text-align: center;\n  color: #555;\n  clear: left;\n}\n\n.color-picker .hex-text .box input {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  padding: 1px;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hex-alpha .box div:first-child,\n.color-picker .hex-alpha .box input:first-child {\n  flex-grow: 3;\n  margin-right: 8px;\n}\n\n.color-picker .cmyk-text,\n.color-picker .hsla-text,\n.color-picker .rgba-text,\n.color-picker .value-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .cmyk-text .box,\n.color-picker .hsla-text .box,\n.color-picker .rgba-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .value-text .box {\n  padding: 0 8px 8px;\n}\n\n.color-picker .cmyk-text .box div,\n.color-picker .hsla-text .box div,\n.color-picker .rgba-text .box div,\n.color-picker .value-text .box div {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  margin-right: 8px;\n\n  text-align: center;\n  color: #555;\n}\n\n.color-picker .cmyk-text .box div:last-child,\n.color-picker .hsla-text .box div:last-child,\n.color-picker .rgba-text .box div:last-child,\n.color-picker .value-text .box div:last-child {\n  margin-right: 0;\n}\n\n.color-picker .cmyk-text .box input,\n.color-picker .hsla-text .box input,\n.color-picker .rgba-text .box input,\n.color-picker .value-text .box input {\n  float: left;\n\n  -webkit-flex: 1;\n  -ms-flex: 1;\n\n  flex: 1;\n  padding: 1px;\n  margin: 0 8px 0 0;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .cmyk-text .box input:last-child,\n.color-picker .hsla-text .box input:last-child,\n.color-picker .rgba-text .box input:last-child,\n.color-picker .value-text .box input:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hue-alpha {\n  align-items: center;\n  margin-bottom: 3px;\n}\n\n.color-picker .hue {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC');\n}\n\n.color-picker .value {\n  direction: rtl;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=');\n}\n\n.color-picker .alpha {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==');\n}\n\n.color-picker .type-policy {\n  position: absolute;\n  top: 218px;\n  right: 12px;\n\n  width: 16px;\n  height: 24px;\n\n  background-size: 8px 16px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.color-picker .type-policy .type-policy-arrow {\n  display: block;\n\n  width: 100%;\n  height: 50%;\n}\n\n.color-picker .selected-color {\n  position: absolute;\n  top: 16px;\n  left: 8px;\n\n  width: 40px;\n  height: 40px;\n  border: 1px solid #a9a9a9;\n  border-radius: 50%;\n}\n\n.color-picker .selected-color-background {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC');\n}\n\n.color-picker .saturation-lightness {\n  direction: ltr;\n\n  width: 100%;\n  height: 130px;\n  border: none;\n\n  cursor: pointer;\n  touch-action: manipulation;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==');\n}\n\n.color-picker .cp-add-color-button-class {\n  position: absolute;\n\n  display: inline;\n  padding: 0;\n  margin: 3px -3px;\n  border: 0;\n\n  cursor: pointer;\n  background: transparent;\n}\n\n.color-picker .cp-add-color-button-class:hover {\n  text-decoration: underline;\n}\n\n.color-picker .cp-add-color-button-class:disabled {\n  cursor: not-allowed;\n  color: #999;\n}\n\n.color-picker .cp-add-color-button-class:disabled:hover {\n  text-decoration: none;\n}\n\n.color-picker .cp-remove-color-button-class {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n\n  box-shadow: 1px 1px 5px #333;\n}\n\n.color-picker .cp-remove-color-button-class::before {\n  content: 'x';\n\n  position: relative;\n  bottom: 3.5px;\n\n  display: inline-block;\n\n  font-size: 10px;\n}\n"],
            encapsulation: 2
          }), n
        }(),
        ef = function() {
          function n(n, e, t, o, r, i) {
            this.injector = n, this.cfr = e, this.appRef = t, this.vcRef = o, this.elRef = r, this._service = i, this.dialogCreated = !1, this.ignoreChanges = !1, this.cpWidth = "230px", this.cpHeight = "auto", this.cpToggle = !1, this.cpDisabled = !1, this.cpIgnoredElements = [], this.cpFallbackColor = "", this.cpColorMode = "color", this.cpCmykEnabled = !1, this.cpOutputFormat = "auto", this.cpAlphaChannel = "enabled", this.cpDisableInput = !1, this.cpDialogDisplay = "popup", this.cpSaveClickOutside = !0, this.cpCloseClickOutside = !0, this.cpUseRootViewContainer = !1, this.cpPosition = "auto", this.cpPositionOffset = "0%", this.cpPositionRelativeToArrow = !1, this.cpOKButton = !1, this.cpOKButtonText = "OK", this.cpOKButtonClass = "cp-ok-button-class", this.cpCancelButton = !1, this.cpCancelButtonText = "Cancel", this.cpCancelButtonClass = "cp-cancel-button-class", this.cpPresetLabel = "Preset colors", this.cpPresetColorsClass = "cp-preset-colors-class", this.cpMaxPresetColorsLength = 6, this.cpPresetEmptyMessage = "No colors added", this.cpPresetEmptyMessageClass = "preset-empty-message", this.cpAddColorButton = !1, this.cpAddColorButtonText = "Add color", this.cpAddColorButtonClass = "cp-add-color-button-class", this.cpRemoveColorButtonClass = "cp-remove-color-button-class", this.cpInputChange = new oc(!0), this.cpToggleChange = new oc(!0), this.cpSliderChange = new oc(!0), this.cpSliderDragEnd = new oc(!0), this.cpSliderDragStart = new oc(!0), this.colorPickerOpen = new oc(!0), this.colorPickerClose = new oc(!0), this.colorPickerCancel = new oc(!0), this.colorPickerSelect = new oc(!0), this.colorPickerChange = new oc(!1), this.cpCmykColorChange = new oc(!0), this.cpPresetColorsChange = new oc(!0)
          }
          return n.prototype.handleClick = function() {
            this.inputFocus()
          }, n.prototype.handleFocus = function() {
            this.inputFocus()
          }, n.prototype.handleInput = function(n) {
            this.inputChange(n)
          }, n.prototype.ngOnDestroy = function() {
            void 0 !== this.cmpRef && this.cmpRef.destroy()
          }, n.prototype.ngOnChanges = function(n) {
            n.cpToggle && !this.cpDisabled && (n.cpToggle.currentValue ? this.openDialog() : n.cpToggle.currentValue || this.closeDialog()), n.colorPicker && (this.dialog && !this.ignoreChanges && ("inline" === this.cpDialogDisplay && this.dialog.setInitialColor(n.colorPicker.currentValue), this.dialog.setColorFromString(n.colorPicker.currentValue, !1), this.cpUseRootViewContainer && "inline" !== this.cpDialogDisplay && this.cmpRef.changeDetectorRef.detectChanges()), this.ignoreChanges = !1), (n.cpPresetLabel || n.cpPresetColors) && this.dialog && this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors)
          }, n.prototype.openDialog = function() {
            if (this.dialogCreated) this.dialog && this.dialog.openDialog(this.colorPicker);
            else {
              var n = this.vcRef;
              if (this.dialogCreated = !0, this.cpUseRootViewContainer && "inline" !== this.cpDialogDisplay) {
                var e = this.injector.get(this.appRef.componentTypes[0]);
                (n = e.vcRef || e.viewContainerRef || this.vcRef) === this.vcRef && console.warn("You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef!Please expose it by adding 'public vcRef: ViewContainerRef' to the constructor.")
              }
              var t = this.cfr.resolveComponentFactory(nf),
                o = Js.fromResolvedProviders([], n.parentInjector);
              this.cmpRef = n.createComponent(t, 0, o, []), this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass), this.dialog = this.cmpRef.instance, this.vcRef !== n && this.cmpRef.changeDetectorRef.detectChanges()
            }
          }, n.prototype.closeDialog = function() {
            this.dialog && "popup" === this.cpDialogDisplay && this.dialog.closeDialog()
          }, n.prototype.cmykChanged = function(n) {
            this.cpCmykColorChange.emit(n)
          }, n.prototype.stateChanged = function(n) {
            this.cpToggleChange.emit(n), n ? this.colorPickerOpen.emit(this.colorPicker) : this.colorPickerClose.emit(this.colorPicker)
          }, n.prototype.colorChanged = function(n, e) {
            void 0 === e && (e = !0), this.ignoreChanges = e, this.colorPickerChange.emit(n)
          }, n.prototype.colorSelected = function(n) {
            this.colorPickerSelect.emit(n)
          }, n.prototype.colorCanceled = function() {
            this.colorPickerCancel.emit()
          }, n.prototype.inputFocus = function() {
            var n = this.elRef.nativeElement,
              e = this.cpIgnoredElements.filter((function(e) {
                return e === n
              }));
            this.cpDisabled || e.length || ("undefined" != typeof document && n === document.activeElement ? this.openDialog() : this.dialog && this.dialog.show ? this.closeDialog() : this.openDialog())
          }, n.prototype.inputChange = function(n) {
            this.dialog ? this.dialog.setColorFromString(n.target.value, !0) : (this.colorPicker = n.target.value, this.colorPickerChange.emit(this.colorPicker))
          }, n.prototype.inputChanged = function(n) {
            this.cpInputChange.emit(n)
          }, n.prototype.sliderChanged = function(n) {
            this.cpSliderChange.emit(n)
          }, n.prototype.sliderDragEnd = function(n) {
            this.cpSliderDragEnd.emit(n)
          }, n.prototype.sliderDragStart = function(n) {
            this.cpSliderDragStart.emit(n)
          }, n.prototype.presetColorsChanged = function(n) {
            this.cpPresetColorsChange.emit(n)
          }, n.\u0275fac = function(e) {
            return new(e || n)(ba(Ms), ba(pl), ba(sd), ba(Dl), ba(hl), ba(Jh))
          }, n.\u0275dir = ae({
            type: n,
            selectors: [
              ["", "colorPicker", ""]
            ],
            hostBindings: function(n, e, t) {
              1 & n && Da("click", (function(n) {
                return e.handleClick()
              }))("focus", (function(n) {
                return e.handleFocus()
              }))("input", (function(n) {
                return e.handleInput(n)
              }))
            },
            inputs: {
              cpWidth: "cpWidth",
              cpHeight: "cpHeight",
              cpToggle: "cpToggle",
              cpDisabled: "cpDisabled",
              cpIgnoredElements: "cpIgnoredElements",
              cpFallbackColor: "cpFallbackColor",
              cpColorMode: "cpColorMode",
              cpCmykEnabled: "cpCmykEnabled",
              cpOutputFormat: "cpOutputFormat",
              cpAlphaChannel: "cpAlphaChannel",
              cpDisableInput: "cpDisableInput",
              cpDialogDisplay: "cpDialogDisplay",
              cpSaveClickOutside: "cpSaveClickOutside",
              cpCloseClickOutside: "cpCloseClickOutside",
              cpUseRootViewContainer: "cpUseRootViewContainer",
              cpPosition: "cpPosition",
              cpPositionOffset: "cpPositionOffset",
              cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
              cpOKButton: "cpOKButton",
              cpOKButtonText: "cpOKButtonText",
              cpOKButtonClass: "cpOKButtonClass",
              cpCancelButton: "cpCancelButton",
              cpCancelButtonText: "cpCancelButtonText",
              cpCancelButtonClass: "cpCancelButtonClass",
              cpPresetLabel: "cpPresetLabel",
              cpPresetColorsClass: "cpPresetColorsClass",
              cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
              cpPresetEmptyMessage: "cpPresetEmptyMessage",
              cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
              cpAddColorButton: "cpAddColorButton",
              cpAddColorButtonText: "cpAddColorButtonText",
              cpAddColorButtonClass: "cpAddColorButtonClass",
              cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
              colorPicker: "colorPicker",
              cpPresetColors: "cpPresetColors"
            },
            outputs: {
              cpInputChange: "cpInputChange",
              cpToggleChange: "cpToggleChange",
              cpSliderChange: "cpSliderChange",
              cpSliderDragEnd: "cpSliderDragEnd",
              cpSliderDragStart: "cpSliderDragStart",
              colorPickerOpen: "colorPickerOpen",
              colorPickerClose: "colorPickerClose",
              colorPickerCancel: "colorPickerCancel",
              colorPickerSelect: "colorPickerSelect",
              colorPickerChange: "colorPickerChange",
              cpCmykColorChange: "cpCmykColorChange",
              cpPresetColorsChange: "cpPresetColorsChange"
            },
            exportAs: ["ngxColorPicker"],
            features: [Ja()]
          }), n
        }(),
        tf = function() {
          function n() {}
          return n.\u0275mod = ie({
            type: n
          }), n.\u0275inj = rn({
            factory: function(e) {
              return new(e || n)
            },
            providers: [Jh],
            imports: [
              [Bd]
            ]
          }), n
        }();
      let of = (() => {
        class n {
          constructor() {}
          transform(n) {
            return n
          }
        }
        return n.\u0275fac = function(e) {
          return new(e || n)
        }, n.\u0275pipe = {
          type: (e = {
            name: "cast",
            type: n,
            pure: !0
          }).type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null
        }, n;
        var e
      })();
      const rf = ["colorPicker"];

      function sf(n, e) {
        1 & n && Ma(0, "fa-icon", 11), 2 & n && Ba("icon", Va(2).faCheck)
      }

      function af(n, e) {
        1 & n && Ma(0, "span", 16)
      }

      function lf(n, e) {
        if (1 & n) {
          const n = Ra();
          Pa(0, "div"), Pa(1, "button", 13), Da("click", (function(t) {
            Se(n);
            const o = e.$implicit,
              r = e.index;
            return Va().setToSwatch(o, r)
          })), qa(2), ma(3, sf, 1, 1, "fa-icon", 14), ma(4, af, 1, 0, "span", 15), Ta(), Ta()
        }
        if (2 & n) {
          const n = e.$implicit,
            t = e.index,
            o = Va();
          fa("id", n.id), Lr(1), fa("id", n.id), Lr(1), Ha(n.name), Lr(1), Ba("ngIf", "swatch" === o.status.method && o.status.index === t && o.status.active), Lr(1), Ba("ngIf", "swatch" === o.status.method && o.status.index === t && o.status.loading)
        }
      }

      function cf(n, e) {
        1 & n && Ma(0, "fa-icon", 11), 2 & n && Ba("icon", Va(2).faCheck)
      }

      function df(n, e) {
        1 & n && Ma(0, "span", 16)
      }

      function uf(n, e) {
        if (1 & n) {
          const n = Ra();
          Pa(0, "button", 17, 18), Da("colorPickerChange", (function(t) {
            Se(n);
            const o = e.$implicit,
              r = e.index;
            return Va().onChange(t, o, r)
          })), ec(2, "cast"), Pa(3, "span"), qa(4), Pa(5, "span", 19), qa(6), ec(7, "cast"), Ta(), Ta(), ma(8, cf, 1, 1, "fa-icon", 14), ma(9, df, 1, 0, "span", 15), Ta()
        }
        if (2 & n) {
          const n = e.$implicit,
            t = e.index,
            o = Va();
          Ba("ngClass", n.class)("colorPicker", o.colors[tc(2, 7, n.id)]), fa("data-palette-id", n.id), Lr(4), La(" ", n.name, " \xa0"), Lr(2), Ha(o.colors[tc(7, 9, n.id)]), Lr(2), Ba("ngIf", ("palette" === o.status.method && o.status.index === t || "random" === o.status.method && (0 === t || 1 === t || 5 === t)) && o.status.active), Lr(1), Ba("ngIf", ("palette" === o.status.method && o.status.index === t || "random" === o.status.method && (0 === t || 1 === t || 5 === t)) && o.status.loading)
        }
      }
      const pf = function(n, e) {
        return {
          "sb-customizer-closed": n,
          "sb-customizer-open": e
        }
      };
      let hf = (() => {
          class n {
            constructor(n, e) {
              this.sassService = n, this.changeDetectorRef = e, this.faCog = $u, this.faCheck = vu, this.faFileDownload = wu, this.faRandom = yu, this.swatches = Tu, this.palettes = Mu, this.closed = !0, this.colors = {
                primary: "",
                secondary: "",
                success: "",
                info: "",
                warning: "",
                danger: "",
                light: "",
                dark: ""
              }, this.status = {
                method: "swatch",
                index: 0,
                loading: !1,
                active: !1
              }, this.onChange = Au()((n, e, t) => {
                this.colors[e.id] = n, this.status.method = "palette", this.status.index = t, this.status.active = !1, this.status.loading = !0, this.changeDetectorRef.detectChanges(), this._startTime = Date.now(), this.sassService.updateColorsOverrides({
                  colors: this.colors,
                  project: this.project
                }), ku()("event", "Color Selector", {
                  event_category: "Customizer",
                  event_label: this.project
                })
              }, 200)
            }
            randomPalette() {
              this.status.method = "random", this.status.active = !1, this.status.loading = !0;
              const n = _u()(3, {
                clustering: "force-vector",
                quality: 100
              });
              this.colors.primary = n[0], this.colors.secondary = n[1], this.colors.info = n[2], this._startTime = Date.now(), this.sassService.updateColorsOverrides({
                colors: this.colors,
                project: this.project
              }), ku()("event", "Random Palette", {
                event_category: "Customizer",
                event_label: this.project
              })
            }
            ngOnInit() {
              this.sassService.sass$.pipe(n => n.lift(new Eu(1))).subscribe(n => {
                this.sass = n
              }), this.sassService.appended$.subscribe(n => {
                this.status.loading = !1, this.status.active = n, this.changeDetectorRef.detectChanges(), ku()("event", "New CSS Appended", {
                  event_category: "Customizer",
                  event_label: this.project,
                  value: Date.now() - this._startTime
                })
              }), Object(xu.install)("UA-38417733-31")
            }
            ngAfterViewInit() {
              this.colorPickers.forEach(n => {
                const e = this._rgbToHex(window.getComputedStyle(n.nativeElement).backgroundColor);
                this.colors[n.nativeElement.dataset.paletteId] = e
              })
            }
            _rgbToHex(n) {
              const e = n.match(/rgb\((\d+),\W*(\d+),\W*(\d+)\)$/);
              if (e) return "#" + ((1 << 24) + (parseInt(e[1], 10) << 16) + (parseInt(e[2], 10) << 8) + parseInt(e[3], 10)).toString(16).slice(1)
            }
            getPaletteId(n) {
              return this.palettes[n].id
            }
            toggle() {
              this.closed = !this.closed
            }
            setToSwatch(n, e) {
              this.status.loading || (this.status.method = "swatch", this.status.index = e, this.status.active = !1, this.status.loading = !0, this.colors = Object.assign({}, n.colors), this._startTime = Date.now(), this.sassService.updateColorsOverrides({
                colors: n.colors,
                project: this.project
              }), ku()("event", "Set to Swatch", {
                event_category: "Customizer",
                event_label: this.project
              }))
            }
            exportOverrides() {
              return function(n, e, t, o) {
                return new(t || (t = Promise))((function(e, r) {
                  function i(n) {
                    try {
                      a(o.next(n))
                    } catch (gf) {
                      r(gf)
                    }
                  }

                  function s(n) {
                    try {
                      a(o.throw(n))
                    } catch (gf) {
                      r(gf)
                    }
                  }

                  function a(n) {
                    n.done ? e(n.value) : new t((function(e) {
                      e(n.value)
                    })).then(i, s)
                  }
                  a((o = o.apply(n, [])).next())
                }))
              }(this, 0, void 0, (function*() {
                const n = yield this.sassService.getVariableOverridesFile(this.project), e = new Blob([n], {
                  type: "text/plain"
                }), t = document.createElement("a");
                t.download = "variables-colors-overrides.scss", t.href = window.URL.createObjectURL(e), t.click(), ku()("event", "Export Overrides", {
                  event_category: "Customizer",
                  event_label: this.project
                })
              }))
            }
          }
          return n.\u0275fac = function(e) {
            return new(e || n)(ba(Gu), ba(ls))
          }, n.\u0275cmp = ee({
            type: n,
            selectors: [
              ["ng-component"]
            ],
            viewQuery: function(n, e) {
              var t, o;
              1 & n && (o = rf, !0, mc(ye(), o, !0, void 0, !1)), 2 & n && fc(t = bc()) && (e.colorPickers = t)
            },
            inputs: {
              project: "project"
            },
            decls: 25,
            vars: 10,
            consts: [
              ["id", "style-switcher", 1, "sb-customizer", 3, "ngClass"],
              [1, "sb-customizer-toggler", 3, "click"],
              [3, "icon", "spin"],
              [1, "sb-customizer-heading", "shadow"],
              [1, "sb-customizer-content"],
              [1, "sb-customizer-subheading"],
              [1, "sb-customizer-content-swatches", "mb-4"],
              [4, "ngFor", "ngForOf"],
              ["id", "chooser", 1, "mb-4"],
              ["class", "btn-customizer", "type", "button", "cpPosition", "top-left", 3, "ngClass", "colorPicker", "colorPickerChange", 4, "ngFor", "ngForOf"],
              [1, "btn-customizer", "btn", "btn-outline-dark", 3, "click"],
              [3, "icon"],
              [1, "btn-customizer", "btn", "btn-outline-primary", "mb-0", 3, "click"],
              [1, "btn-customizer", "swatch", 3, "click"],
              [3, "icon", 4, "ngIf"],
              ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"],
              ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"],
              ["type", "button", "cpPosition", "top-left", 1, "btn-customizer", 3, "ngClass", "colorPicker", "colorPickerChange"],
              ["colorPicker", ""],
              [1, "text-white-50"]
            ],
            template: function(n, e) {
              var t, o, r, i, s;
              1 & n && (Pa(0, "div", 0), Pa(1, "button", 1), Da("click", (function(n) {
                return e.toggle()
              })), Ma(2, "fa-icon", 2), Ta(), Pa(3, "div", 3), qa(4, "Theme Customizer"), Ta(), Pa(5, "div", 4), Pa(6, "h6", 5), qa(7, "Try a pre-built swatch!"), Ta(), Pa(8, "div", 6), ma(9, lf, 5, 5, "div", 7), Ta(), Pa(10, "h6", 5), qa(11, "Or choose your own colors..."), Ta(), Pa(12, "div", 8), ma(13, uf, 10, 11, "button", 9), Ta(), Pa(14, "h6", 5), qa(15, "Need ideas? Randomize!"), Ta(), Pa(16, "button", 10), Da("click", (function(n) {
                return e.randomPalette()
              })), qa(17, "Randomize Colors"), Ma(18, "fa-icon", 11), Ta(), Ma(19, "hr"), Pa(20, "h6", 5), qa(21, "Finished? Export your color palette file with install instructions!"), Ta(), Pa(22, "button", 12), Da("click", (function(n) {
                return e.exportOverrides()
              })), qa(23, "Export"), Ma(24, "fa-icon", 11), Ta(), Ta(), Ta()), 2 & n && (Ba("ngClass", (t = 7, o = pf, r = e.closed, i = !e.closed, function(n, e, t, o, r, i, s) {
                const a = e + t;
                return function(n, e, t, o) {
                  const r = ha(n, e, t);
                  return ha(n, e + 1, o) || r
                }(n, a, r, i) ? ua(n, a + 2, s ? o.call(s, r, i) : o(r, i)) : pa(n, a + 2)
              }(ye(), Oe(), t, o, r, i, s))), Lr(2), Ba("icon", e.faCog)("spin", !0), Lr(7), Ba("ngForOf", e.swatches), Lr(4), Ba("ngForOf", e.palettes), Lr(5), Ba("icon", e.faRandom), Lr(6), Ba("icon", e.faFileDownload))
            },
            directives: [Sd, ph, Nd, Fd, ef],
            pipes: [ of ],
            styles: [".btn-customizer[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:100%;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;border-radius:.35rem;font-size:.85rem;padding:1rem;outline:0;margin-bottom:.5rem}.btn-customizer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{visibility:hidden}.btn-customizer[_ngcontent-%COMP%]:focus{font-weight:700;box-shadow:0 0 0 .125rem #d7dce3}.btn-customizer[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%]{visibility:visible}.sb-customizer-btn-export[_ngcontent-%COMP%]{font-size:.85rem;padding:1rem}.sb-customizer-btn-export[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%]{margin-right:.25rem}.sb-customizer[_ngcontent-%COMP%]{z-index:9999;position:fixed;top:0;width:20rem;height:100vh;text-align:left;background:#fff;-webkit-transition:right .5s;transition:right .5s;box-shadow:-.15rem 0 1.75rem 0 rgba(34,39,46,.15)}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-heading[_ngcontent-%COMP%]{padding:1.5rem;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#a7aeb8}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-subheading[_ngcontent-%COMP%]{font-size:.8rem;font-style:italic;color:#6c737d;margin-bottom:.75rem}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-toggler[_ngcontent-%COMP%]{position:absolute;top:4.625rem;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;left:-3rem;width:3rem;height:3rem;border:0;box-shadow:0 .15rem 1.75rem 0 rgba(34,39,46,.15);color:#001500;background-color:#fff;border-radius:.35rem 0 0 .35rem}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-toggler[_ngcontent-%COMP%]:focus{outline:0}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-content[_ngcontent-%COMP%]{position:relative;height:calc(100% - 64px);overflow-y:auto;padding:1.5rem}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:block;width:.5rem}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#c7cdd6;border-radius:10rem;height:3em;background-clip:padding-box;border:.1rem solid transparent}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:rgba(34,39,46,.05)}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-content[_ngcontent-%COMP%]::-webkit-scrollbar-button{width:0;height:0;display:none}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-content[_ngcontent-%COMP%]::-webkit-scrollbar-corner{background-color:transparent}.sb-customizer[_ngcontent-%COMP%]   .sb-customizer-content[_ngcontent-%COMP%]:hover::-webkit-scrollbar{display:block}.sb-customizer.sb-customizer-closed[_ngcontent-%COMP%]{right:-20rem}.sb-customizer.sb-customizer-open[_ngcontent-%COMP%]{right:0}.swatch[_ngcontent-%COMP%]{border:0}#swatch1[_ngcontent-%COMP%]   .swatch[_ngcontent-%COMP%]{color:#fff;background-color:#0061f2;background-image:linear-gradient(45deg,#0061f2,#6900c7)}#swatch2[_ngcontent-%COMP%]   .swatch[_ngcontent-%COMP%]{color:#fff;background-color:#1da1f5;background-image:linear-gradient(45deg,#1da1f5,#8039da)}#swatch3[_ngcontent-%COMP%]   .swatch[_ngcontent-%COMP%]{color:#fff;background-color:#f53b57;background-image:linear-gradient(45deg,#f53b57,#ff793f)}#swatch4[_ngcontent-%COMP%]   .swatch[_ngcontent-%COMP%]{color:#fff;background-color:#6eabc2;background-image:linear-gradient(45deg,#6eabc2,#506c6a)}#swatch5[_ngcontent-%COMP%]   .swatch[_ngcontent-%COMP%]{color:#fff;background-color:#06794f;background-image:linear-gradient(45deg,#06794f,#0fa28b)}"],
            changeDetection: 0
          }), n
        })(),
        ff = (() => {
          class n {
            constructor(n) {
              this.injector = n;
              const e = function(n, e) {
                const t = function(n, e) {
                    return e.get(pl).resolveComponentFactory(n).inputs
                  }(n, e.injector),
                  o = e.strategyFactory || new fd(n, e.injector),
                  r = function(n) {
                    const e = {};
                    return n.forEach(({
                      propName: n,
                      templateName: t
                    }) => {
                      var o;
                      e[(o = t, o.replace(/[A-Z]/g, n => `-${n.toLowerCase()}`))] = n
                    }), e
                  }(t);
                class i extends md {
                  constructor(n) {
                    super(), this.ngElementStrategy = o.create(n || e.injector)
                  }
                  attributeChangedCallback(n, t, i, s) {
                    this.ngElementStrategy || (this.ngElementStrategy = o.create(e.injector)), this.ngElementStrategy.setInputValue(r[n], i)
                  }
                  connectedCallback() {
                    this.ngElementStrategy || (this.ngElementStrategy = o.create(e.injector)), this.ngElementStrategy.connect(this), this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(n => {
                      const e = function(n, e, t) {
                        if ("function" != typeof CustomEvent) {
                          const o = n.createEvent("CustomEvent");
                          return o.initCustomEvent(e, !1, !1, t), o
                        }
                        return new CustomEvent(e, {
                          bubbles: !1,
                          cancelable: !1,
                          detail: t
                        })
                      }(this.ownerDocument, n.name, n.value);
                      this.dispatchEvent(e)
                    })
                  }
                  disconnectedCallback() {
                    this.ngElementStrategy && this.ngElementStrategy.disconnect(), this.ngElementEventsSubscription && (this.ngElementEventsSubscription.unsubscribe(), this.ngElementEventsSubscription = null)
                  }
                }
                return i.observedAttributes = Object.keys(r), t.map(({
                  propName: n
                }) => n).forEach(n => {
                  Object.defineProperty(i.prototype, n, {
                    get: function() {
                      return this.ngElementStrategy.getInputValue(n)
                    },
                    set: function(e) {
                      this.ngElementStrategy.setInputValue(n, e)
                    },
                    configurable: !0,
                    enumerable: !0
                  })
                }), i
              }(hf, {
                injector: this.injector
              });
              customElements.define("sb-customizer", e)
            }
            ngDoBootstrap() {}
          }
          return n.\u0275mod = ie({
            type: n
          }), n.\u0275inj = rn({
            factory: function(e) {
              return new(e || n)(Vn(Ms))
            },
            providers: [Gu],
            imports: [
              [bu, hh, tf]
            ]
          }), n
        })();
      (function() {
        if (So) throw new Error("Cannot enable prod mode after platform setup.");
        Ao = !1
      })(), gu().bootstrapModule(ff).catch(n => console.error(n))
    },
    zn8P: function(n, e) {
      function t(n) {
        return Promise.resolve().then((function() {
          var e = new Error("Cannot find module '" + n + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }))
      }
      t.keys = function() {
        return []
      }, t.resolve = t, n.exports = t, t.id = "zn8P"
    }
  },
  [
    [0, 0]
  ]
]);
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2], {
    2: function(e, t, n) {
      e.exports = n("hN/g")
    },
    "hN/g": function(e, t, n) {
      "use strict";
      n.r(t), n("nf2o")
    },
    nf2o: function(e, t, n) {
      var o, r;
      void 0 === (r = "function" == typeof(o = function() {
        "use strict";
        ! function(e) {
          const t = e.performance;

          function n(e) {
            t && t.mark && t.mark(e)
          }

          function o(e, n) {
            t && t.measure && t.measure(e, n)
          }
          n("Zone");
          const r = e.__Zone_symbol_prefix || "__zone_symbol__";

          function s(e) {
            return r + e
          }
          const a = !0 === e[s("forceDuplicateZoneCheck")];
          if (e.Zone) {
            if (a || "function" != typeof e.Zone.__symbol__) throw new Error("Zone already loaded.");
            return e.Zone
          }
          class i {
            constructor(e, t) {
              this._parent = e, this._name = t ? t.name || "unnamed" : "<root>", this._properties = t && t.properties || {}, this._zoneDelegate = new l(this, this._parent && this._parent._zoneDelegate, t)
            }
            static assertZonePatched() {
              if (e.Promise !== z.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
            }
            static get root() {
              let e = i.current;
              for (; e.parent;) e = e.parent;
              return e
            }
            static get current() {
              return O.zone
            }
            static get currentTask() {
              return j
            }
            static __load_patch(t, r) {
              if (z.hasOwnProperty(t)) {
                if (a) throw Error("Already loaded patch: " + t)
              } else if (!e["__Zone_disable_" + t]) {
                const s = "Zone:" + t;
                n(s), z[t] = r(e, i, C), o(s, s)
              }
            }
            get parent() {
              return this._parent
            }
            get name() {
              return this._name
            }
            get(e) {
              const t = this.getZoneWith(e);
              if (t) return t._properties[e]
            }
            getZoneWith(e) {
              let t = this;
              for (; t;) {
                if (t._properties.hasOwnProperty(e)) return t;
                t = t._parent
              }
              return null
            }
            fork(e) {
              if (!e) throw new Error("ZoneSpec required!");
              return this._zoneDelegate.fork(this, e)
            }
            wrap(e, t) {
              if ("function" != typeof e) throw new Error("Expecting function got: " + e);
              const n = this._zoneDelegate.intercept(this, e, t),
                o = this;
              return function() {
                return o.runGuarded(n, this, arguments, t)
              }
            }
            run(e, t, n, o) {
              O = {
                parent: O,
                zone: this
              };
              try {
                return this._zoneDelegate.invoke(this, e, t, n, o)
              } finally {
                O = O.parent
              }
            }
            runGuarded(e, t = null, n, o) {
              O = {
                parent: O,
                zone: this
              };
              try {
                try {
                  return this._zoneDelegate.invoke(this, e, t, n, o)
                } catch (r) {
                  if (this._zoneDelegate.handleError(this, r)) throw r
                }
              } finally {
                O = O.parent
              }
            }
            runTask(e, t, n) {
              if (e.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (e.zone || y).name + "; Execution: " + this.name + ")");
              if (e.state === v && (e.type === P || e.type === D)) return;
              const o = e.state != E;
              o && e._transitionTo(E, b), e.runCount++;
              const r = j;
              j = e, O = {
                parent: O,
                zone: this
              };
              try {
                e.type == D && e.data && !e.data.isPeriodic && (e.cancelFn = void 0);
                try {
                  return this._zoneDelegate.invokeTask(this, e, t, n)
                } catch (s) {
                  if (this._zoneDelegate.handleError(this, s)) throw s
                }
              } finally {
                e.state !== v && e.state !== Z && (e.type == P || e.data && e.data.isPeriodic ? o && e._transitionTo(b, E) : (e.runCount = 0, this._updateTaskCount(e, -1), o && e._transitionTo(v, E, v))), O = O.parent, j = r
              }
            }
            scheduleTask(e) {
              if (e.zone && e.zone !== this) {
                let t = this;
                for (; t;) {
                  if (t === e.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);
                  t = t.parent
                }
              }
              e._transitionTo(T, v);
              const t = [];
              e._zoneDelegates = t, e._zone = this;
              try {
                e = this._zoneDelegate.scheduleTask(this, e)
              } catch (n) {
                throw e._transitionTo(Z, T, v), this._zoneDelegate.handleError(this, n), n
              }
              return e._zoneDelegates === t && this._updateTaskCount(e, 1), e.state == T && e._transitionTo(b, T), e
            }
            scheduleMicroTask(e, t, n, o) {
              return this.scheduleTask(new u(S, e, t, n, o, void 0))
            }
            scheduleMacroTask(e, t, n, o, r) {
              return this.scheduleTask(new u(D, e, t, n, o, r))
            }
            scheduleEventTask(e, t, n, o, r) {
              return this.scheduleTask(new u(P, e, t, n, o, r))
            }
            cancelTask(e) {
              if (e.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (e.zone || y).name + "; Execution: " + this.name + ")");
              e._transitionTo(w, b, E);
              try {
                this._zoneDelegate.cancelTask(this, e)
              } catch (t) {
                throw e._transitionTo(Z, w), this._zoneDelegate.handleError(this, t), t
              }
              return this._updateTaskCount(e, -1), e._transitionTo(v, w), e.runCount = 0, e
            }
            _updateTaskCount(e, t) {
              const n = e._zoneDelegates; - 1 == t && (e._zoneDelegates = null);
              for (let o = 0; o < n.length; o++) n[o]._updateTaskCount(e.type, t)
            }
          }
          i.__symbol__ = s;
          const c = {
            name: "",
            onHasTask: (e, t, n, o) => e.hasTask(n, o),
            onScheduleTask: (e, t, n, o) => e.scheduleTask(n, o),
            onInvokeTask: (e, t, n, o, r, s) => e.invokeTask(n, o, r, s),
            onCancelTask: (e, t, n, o) => e.cancelTask(n, o)
          };
          class l {
            constructor(e, t, n) {
              this._taskCounts = {
                microTask: 0,
                macroTask: 0,
                eventTask: 0
              }, this.zone = e, this._parentDelegate = t, this._forkZS = n && (n && n.onFork ? n : t._forkZS), this._forkDlgt = n && (n.onFork ? t : t._forkDlgt), this._forkCurrZone = n && (n.onFork ? this.zone : t._forkCurrZone), this._interceptZS = n && (n.onIntercept ? n : t._interceptZS), this._interceptDlgt = n && (n.onIntercept ? t : t._interceptDlgt), this._interceptCurrZone = n && (n.onIntercept ? this.zone : t._interceptCurrZone), this._invokeZS = n && (n.onInvoke ? n : t._invokeZS), this._invokeDlgt = n && (n.onInvoke ? t : t._invokeDlgt), this._invokeCurrZone = n && (n.onInvoke ? this.zone : t._invokeCurrZone), this._handleErrorZS = n && (n.onHandleError ? n : t._handleErrorZS), this._handleErrorDlgt = n && (n.onHandleError ? t : t._handleErrorDlgt), this._handleErrorCurrZone = n && (n.onHandleError ? this.zone : t._handleErrorCurrZone), this._scheduleTaskZS = n && (n.onScheduleTask ? n : t._scheduleTaskZS), this._scheduleTaskDlgt = n && (n.onScheduleTask ? t : t._scheduleTaskDlgt), this._scheduleTaskCurrZone = n && (n.onScheduleTask ? this.zone : t._scheduleTaskCurrZone), this._invokeTaskZS = n && (n.onInvokeTask ? n : t._invokeTaskZS), this._invokeTaskDlgt = n && (n.onInvokeTask ? t : t._invokeTaskDlgt), this._invokeTaskCurrZone = n && (n.onInvokeTask ? this.zone : t._invokeTaskCurrZone), this._cancelTaskZS = n && (n.onCancelTask ? n : t._cancelTaskZS), this._cancelTaskDlgt = n && (n.onCancelTask ? t : t._cancelTaskDlgt), this._cancelTaskCurrZone = n && (n.onCancelTask ? this.zone : t._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
              const o = n && n.onHasTask;
              (o || t && t._hasTaskZS) && (this._hasTaskZS = o ? n : c, this._hasTaskDlgt = t, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = e, n.onScheduleTask || (this._scheduleTaskZS = c, this._scheduleTaskDlgt = t, this._scheduleTaskCurrZone = this.zone), n.onInvokeTask || (this._invokeTaskZS = c, this._invokeTaskDlgt = t, this._invokeTaskCurrZone = this.zone), n.onCancelTask || (this._cancelTaskZS = c, this._cancelTaskDlgt = t, this._cancelTaskCurrZone = this.zone))
            }
            fork(e, t) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t) : new i(e, t)
            }
            intercept(e, t, n) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, e, t, n) : t
            }
            invoke(e, t, n, o, r) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, e, t, n, o, r) : t.apply(n, o)
            }
            handleError(e, t) {
              return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, e, t)
            }
            scheduleTask(e, t) {
              let n = t;
              if (this._scheduleTaskZS) this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner), n = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, e, t), n || (n = t);
              else if (t.scheduleFn) t.scheduleFn(t);
              else {
                if (t.type != S) throw new Error("Task is missing scheduleFn.");
                _(t)
              }
              return n
            }
            invokeTask(e, t, n, o) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, e, t, n, o) : t.callback.apply(n, o)
            }
            cancelTask(e, t) {
              let n;
              if (this._cancelTaskZS) n = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, e, t);
              else {
                if (!t.cancelFn) throw Error("Task is not cancelable");
                n = t.cancelFn(t)
              }
              return n
            }
            hasTask(e, t) {
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, e, t)
              } catch (n) {
                this.handleError(e, n)
              }
            }
            _updateTaskCount(e, t) {
              const n = this._taskCounts,
                o = n[e],
                r = n[e] = o + t;
              if (r < 0) throw new Error("More tasks executed then were scheduled.");
              0 != o && 0 != r || this.hasTask(this.zone, {
                microTask: n.microTask > 0,
                macroTask: n.macroTask > 0,
                eventTask: n.eventTask > 0,
                change: e
              })
            }
          }
          class u {
            constructor(t, n, o, r, s, a) {
              if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = t, this.source = n, this.data = r, this.scheduleFn = s, this.cancelFn = a, !o) throw new Error("callback is not defined");
              this.callback = o;
              const i = this;
              this.invoke = t === P && r && r.useG ? u.invokeTask : function() {
                return u.invokeTask.call(e, i, this, arguments)
              }
            }
            static invokeTask(e, t, n) {
              e || (e = this), I++;
              try {
                return e.runCount++, e.zone.runTask(e, t, n)
              } finally {
                1 == I && m(), I--
              }
            }
            get zone() {
              return this._zone
            }
            get state() {
              return this._state
            }
            cancelScheduleRequest() {
              this._transitionTo(v, T)
            }
            _transitionTo(e, t, n) {
              if (this._state !== t && this._state !== n) throw new Error(`${this.type} '${this.source}': can not transition to '${e}', expecting state '${t}'${n?" or '"+n+"'":""}, was '${this._state}'.`);
              this._state = e, e == v && (this._zoneDelegates = null)
            }
            toString() {
              return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this)
            }
            toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              }
            }
          }
          const h = s("setTimeout"),
            p = s("Promise"),
            f = s("then");
          let d, g = [],
            k = !1;

          function _(t) {
            if (0 === I && 0 === g.length)
              if (d || e[p] && (d = e[p].resolve(0)), d) {
                let e = d[f];
                e || (e = d.then), e.call(d, m)
              } else e[h](m, 0);
            t && g.push(t)
          }

          function m() {
            if (!k) {
              for (k = !0; g.length;) {
                const t = g;
                g = [];
                for (let n = 0; n < t.length; n++) {
                  const o = t[n];
                  try {
                    o.zone.runTask(o, null, null)
                  } catch (e) {
                    C.onUnhandledError(e)
                  }
                }
              }
              C.microtaskDrainDone(), k = !1
            }
          }
          const y = {
              name: "NO ZONE"
            },
            v = "notScheduled",
            T = "scheduling",
            b = "scheduled",
            E = "running",
            w = "canceling",
            Z = "unknown",
            S = "microTask",
            D = "macroTask",
            P = "eventTask",
            z = {},
            C = {
              symbol: s,
              currentZoneFrame: () => O,
              onUnhandledError: R,
              microtaskDrainDone: R,
              scheduleMicroTask: _,
              showUncaughtError: () => !i[s("ignoreConsoleErrorUncaughtError")],
              patchEventTarget: () => [],
              patchOnProperties: R,
              patchMethod: () => R,
              bindArguments: () => [],
              patchThen: () => R,
              patchMacroTask: () => R,
              setNativePromise: e => {
                e && "function" == typeof e.resolve && (d = e.resolve(0))
              },
              patchEventPrototype: () => R,
              isIEOrEdge: () => !1,
              getGlobalObjects: () => {},
              ObjectDefineProperty: () => R,
              ObjectGetOwnPropertyDescriptor: () => {},
              ObjectCreate: () => {},
              ArraySlice: () => [],
              patchClass: () => R,
              wrapWithCurrentZone: () => R,
              filterProperties: () => [],
              attachOriginToPatched: () => R,
              _redefineProperty: () => R,
              patchCallbacks: () => R
            };
          let O = {
              parent: null,
              zone: new i(null, null)
            },
            j = null,
            I = 0;

          function R() {}
          o("Zone", "Zone"), e.Zone = i
        }("undefined" != typeof window && window || "undefined" != typeof self && self || global), Zone.__load_patch("ZoneAwarePromise", (e, t, n) => {
          const o = Object.getOwnPropertyDescriptor,
            r = Object.defineProperty,
            s = n.symbol,
            a = [],
            i = s("Promise"),
            c = s("then");
          n.onUnhandledError = e => {
            if (n.showUncaughtError()) {
              const t = e && e.rejection;
              t ? console.error("Unhandled Promise rejection:", t instanceof Error ? t.message : t, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", t, t instanceof Error ? t.stack : void 0) : console.error(e)
            }
          }, n.microtaskDrainDone = () => {
            for (; a.length;)
              for (; a.length;) {
                const t = a.shift();
                try {
                  t.zone.runGuarded(() => {
                    throw t
                  })
                } catch (e) {
                  u(e)
                }
              }
          };
          const l = s("unhandledPromiseRejectionHandler");

          function u(e) {
            n.onUnhandledError(e);
            try {
              const n = t[l];
              n && "function" == typeof n && n.call(this, e)
            } catch (o) {}
          }

          function h(e) {
            return e && e.then
          }

          function p(e) {
            return e
          }

          function f(e) {
            return Z.reject(e)
          }
          const d = s("state"),
            g = s("value"),
            k = s("finally"),
            _ = s("parentPromiseValue"),
            m = s("parentPromiseState");

          function y(e, t) {
            return n => {
              try {
                T(e, t, n)
              } catch (o) {
                T(e, !1, o)
              }
            }
          }
          const v = s("currentTaskTrace");

          function T(e, o, s) {
            const i = function() {
              let e = !1;
              return function(t) {
                return function() {
                  e || (e = !0, t.apply(null, arguments))
                }
              }
            }();
            if (e === s) throw new TypeError("Promise resolved with itself");
            if (null === e[d]) {
              let u = null;
              try {
                "object" != typeof s && "function" != typeof s || (u = s && s.then)
              } catch (l) {
                return i(() => {
                  T(e, !1, l)
                })(), e
              }
              if (!1 !== o && s instanceof Z && s.hasOwnProperty(d) && s.hasOwnProperty(g) && null !== s[d]) E(s), T(e, s[d], s[g]);
              else if (!1 !== o && "function" == typeof u) try {
                u.call(s, i(y(e, o)), i(y(e, !1)))
              } catch (l) {
                i(() => {
                  T(e, !1, l)
                })()
              } else {
                e[d] = o;
                const i = e[g];
                if (e[g] = s, e[k] === k && !0 === o && (e[d] = e[m], e[g] = e[_]), !1 === o && s instanceof Error) {
                  const e = t.currentTask && t.currentTask.data && t.currentTask.data.__creationTrace__;
                  e && r(s, v, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: e
                  })
                }
                for (let t = 0; t < i.length;) w(e, i[t++], i[t++], i[t++], i[t++]);
                if (0 == i.length && 0 == o) {
                  e[d] = 0;
                  try {
                    throw new Error("Uncaught (in promise): " + ((c = s) && c.toString === Object.prototype.toString ? (c.constructor && c.constructor.name || "") + ": " + JSON.stringify(c) : c ? c.toString() : Object.prototype.toString.call(c)) + (s && s.stack ? "\n" + s.stack : ""))
                  } catch (l) {
                    const o = l;
                    o.rejection = s, o.promise = e, o.zone = t.current, o.task = t.currentTask, a.push(o), n.scheduleMicroTask()
                  }
                }
              }
            }
            var c;
            return e
          }
          const b = s("rejectionHandledHandler");

          function E(e) {
            if (0 === e[d]) {
              try {
                const n = t[b];
                n && "function" == typeof n && n.call(this, {
                  rejection: e[g],
                  promise: e
                })
              } catch (n) {}
              e[d] = !1;
              for (let t = 0; t < a.length; t++) e === a[t].promise && a.splice(t, 1)
            }
          }

          function w(e, t, n, o, r) {
            E(e);
            const s = e[d],
              a = s ? "function" == typeof o ? o : p : "function" == typeof r ? r : f;
            t.scheduleMicroTask("Promise.then", () => {
              try {
                const o = e[g],
                  r = !!n && k === n[k];
                r && (n[_] = o, n[m] = s);
                const i = t.run(a, void 0, r && a !== f && a !== p ? [] : [o]);
                T(n, !0, i)
              } catch (o) {
                T(n, !1, o)
              }
            }, n)
          }
          class Z {
            constructor(e) {
              const t = this;
              if (!(t instanceof Z)) throw new Error("Must be an instanceof Promise.");
              t[d] = null, t[g] = [];
              try {
                e && e(y(t, !0), y(t, !1))
              } catch (n) {
                T(t, !1, n)
              }
            }
            static toString() {
              return "function ZoneAwarePromise() { [native code] }"
            }
            static resolve(e) {
              return T(new this(null), !0, e)
            }
            static reject(e) {
              return T(new this(null), !1, e)
            }
            static race(e) {
              let t, n, o = new this((e, o) => {
                t = e, n = o
              });

              function r(e) {
                t(e)
              }

              function s(e) {
                n(e)
              }
              for (let a of e) h(a) || (a = this.resolve(a)), a.then(r, s);
              return o
            }
            static all(e) {
              return Z.allWithCallback(e)
            }
            static allSettled(e) {
              return (this && this.prototype instanceof Z ? this : Z).allWithCallback(e, {
                thenCallback: e => ({
                  status: "fulfilled",
                  value: e
                }),
                errorCallback: e => ({
                  status: "rejected",
                  reason: e
                })
              })
            }
            static allWithCallback(e, t) {
              let n, o, r = new this((e, t) => {
                  n = e, o = t
                }),
                s = 2,
                a = 0;
              const i = [];
              for (let l of e) {
                h(l) || (l = this.resolve(l));
                const e = a;
                try {
                  l.then(o => {
                    i[e] = t ? t.thenCallback(o) : o, s--, 0 === s && n(i)
                  }, r => {
                    t ? (i[e] = t.errorCallback(r), s--, 0 === s && n(i)) : o(r)
                  })
                } catch (c) {
                  o(c)
                }
                s++, a++
              }
              return s -= 2, 0 === s && n(i), r
            }
            get[Symbol.toStringTag]() {
              return "Promise"
            }
            then(e, n) {
              const o = new this.constructor(null),
                r = t.current;
              return null == this[d] ? this[g].push(r, o, e, n) : w(this, r, o, e, n), o
            } catch (e) {
              return this.then(null, e)
            } finally(e) {
              const n = new this.constructor(null);
              n[k] = k;
              const o = t.current;
              return null == this[d] ? this[g].push(o, n, e, e) : w(this, o, n, e, e), n
            }
          }
          Z.resolve = Z.resolve, Z.reject = Z.reject, Z.race = Z.race, Z.all = Z.all;
          const S = e[i] = e.Promise,
            D = t.__symbol__("ZoneAwarePromise");
          let P = o(e, "Promise");
          P && !P.configurable || (P && delete P.writable, P && delete P.value, P || (P = {
            configurable: !0,
            enumerable: !0
          }), P.get = function() {
            return e[D] ? e[D] : e[i]
          }, P.set = function(t) {
            t === Z ? e[D] = t : (e[i] = t, t.prototype[c] || C(t), n.setNativePromise(t))
          }, r(e, "Promise", P)), e.Promise = Z;
          const z = s("thenPatched");

          function C(e) {
            const t = e.prototype,
              n = o(t, "then");
            if (n && (!1 === n.writable || !n.configurable)) return;
            const r = t.then;
            t[c] = r, e.prototype.then = function(e, t) {
              return new Z((e, t) => {
                r.call(this, e, t)
              }).then(e, t)
            }, e[z] = !0
          }
          if (n.patchThen = C, S) {
            C(S);
            const t = e.fetch;
            "function" == typeof t && (e[n.symbol("fetch")] = t, e.fetch = (O = t, function() {
              let e = O.apply(this, arguments);
              if (e instanceof Z) return e;
              let t = e.constructor;
              return t[z] || C(t), e
            }))
          }
          var O;
          return Promise[t.__symbol__("uncaughtPromiseErrors")] = a, Z
        });
        const e = Object.getOwnPropertyDescriptor,
          t = Object.defineProperty,
          n = Object.getPrototypeOf,
          o = Object.create,
          r = Array.prototype.slice,
          s = Zone.__symbol__("addEventListener"),
          a = Zone.__symbol__("removeEventListener"),
          i = Zone.__symbol__("");

        function c(e, t) {
          return Zone.current.wrap(e, t)
        }

        function l(e, t, n, o, r) {
          return Zone.current.scheduleMacroTask(e, t, n, o, r)
        }
        const u = Zone.__symbol__,
          h = "undefined" != typeof window,
          p = h ? window : void 0,
          f = h && p || "object" == typeof self && self || global,
          d = [null];

        function g(e, t) {
          for (let n = e.length - 1; n >= 0; n--) "function" == typeof e[n] && (e[n] = c(e[n], t + "_" + n));
          return e
        }

        function k(e) {
          return !e || !1 !== e.writable && !("function" == typeof e.get && void 0 === e.set)
        }
        const _ = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
          m = !("nw" in f) && void 0 !== f.process && "[object process]" === {}.toString.call(f.process),
          y = !m && !_ && !(!h || !p.HTMLElement),
          v = void 0 !== f.process && "[object process]" === {}.toString.call(f.process) && !_ && !(!h || !p.HTMLElement),
          T = {},
          b = function(e) {
            if (!(e = e || f.event)) return;
            let t = T[e.type];
            t || (t = T[e.type] = u("ON_PROPERTY" + e.type));
            const n = this || e.target || f,
              o = n[t];
            let r;
            if (y && n === p && "error" === e.type) {
              const t = e;
              r = o && o.call(this, t.message, t.filename, t.lineno, t.colno, t.error), !0 === r && e.preventDefault()
            } else r = o && o.apply(this, arguments), null == r || r || e.preventDefault();
            return r
          };

        function E(n, o, r) {
          let s = e(n, o);
          if (!s && r && e(r, o) && (s = {
              enumerable: !0,
              configurable: !0
            }), !s || !s.configurable) return;
          const a = u("on" + o + "patched");
          if (n.hasOwnProperty(a) && n[a]) return;
          delete s.writable, delete s.value;
          const i = s.get,
            c = s.set,
            l = o.substr(2);
          let h = T[l];
          h || (h = T[l] = u("ON_PROPERTY" + l)), s.set = function(e) {
            let t = this;
            t || n !== f || (t = f), t && (t[h] && t.removeEventListener(l, b), c && c.apply(t, d), "function" == typeof e ? (t[h] = e, t.addEventListener(l, b, !1)) : t[h] = null)
          }, s.get = function() {
            let e = this;
            if (e || n !== f || (e = f), !e) return null;
            const t = e[h];
            if (t) return t;
            if (i) {
              let t = i && i.call(this);
              if (t) return s.set.call(this, t), "function" == typeof e.removeAttribute && e.removeAttribute(o), t
            }
            return null
          }, t(n, o, s), n[a] = !0
        }

        function w(e, t, n) {
          if (t)
            for (let o = 0; o < t.length; o++) E(e, "on" + t[o], n);
          else {
            const t = [];
            for (const n in e) "on" == n.substr(0, 2) && t.push(n);
            for (let o = 0; o < t.length; o++) E(e, t[o], n)
          }
        }
        const Z = u("originalInstance");

        function S(e) {
          const n = f[e];
          if (!n) return;
          f[u(e)] = n, f[e] = function() {
            const t = g(arguments, e);
            switch (t.length) {
              case 0:
                this[Z] = new n;
                break;
              case 1:
                this[Z] = new n(t[0]);
                break;
              case 2:
                this[Z] = new n(t[0], t[1]);
                break;
              case 3:
                this[Z] = new n(t[0], t[1], t[2]);
                break;
              case 4:
                this[Z] = new n(t[0], t[1], t[2], t[3]);
                break;
              default:
                throw new Error("Arg list too long.")
            }
          }, z(f[e], n);
          const o = new n((function() {}));
          let r;
          for (r in o) "XMLHttpRequest" === e && "responseBlob" === r || function(n) {
            "function" == typeof o[n] ? f[e].prototype[n] = function() {
              return this[Z][n].apply(this[Z], arguments)
            } : t(f[e].prototype, n, {
              set: function(t) {
                "function" == typeof t ? (this[Z][n] = c(t, e + "." + n), z(this[Z][n], t)) : this[Z][n] = t
              },
              get: function() {
                return this[Z][n]
              }
            })
          }(r);
          for (r in n) "prototype" !== r && n.hasOwnProperty(r) && (f[e][r] = n[r])
        }

        function D(t, o, r) {
          let s = t;
          for (; s && !s.hasOwnProperty(o);) s = n(s);
          !s && t[o] && (s = t);
          const a = u(o);
          let i = null;
          if (s && !(i = s[a]) && (i = s[a] = s[o], k(s && e(s, o)))) {
            const e = r(i, a, o);
            s[o] = function() {
              return e(this, arguments)
            }, z(s[o], i)
          }
          return i
        }

        function P(e, t, n) {
          let o = null;

          function r(e) {
            const t = e.data;
            return t.args[t.cbIdx] = function() {
              e.invoke.apply(this, arguments)
            }, o.apply(t.target, t.args), e
          }
          o = D(e, t, e => function(t, o) {
            const s = n(t, o);
            return s.cbIdx >= 0 && "function" == typeof o[s.cbIdx] ? l(s.name, o[s.cbIdx], s, r) : e.apply(t, o)
          })
        }

        function z(e, t) {
          e[u("OriginalDelegate")] = t
        }
        let C = !1,
          O = !1;

        function j() {
          try {
            const e = p.navigator.userAgent;
            if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/")) return !0
          } catch (e) {}
          return !1
        }

        function I() {
          if (C) return O;
          C = !0;
          try {
            const e = p.navigator.userAgent; - 1 === e.indexOf("MSIE ") && -1 === e.indexOf("Trident/") && -1 === e.indexOf("Edge/") || (O = !0)
          } catch (e) {}
          return O
        }
        Zone.__load_patch("toString", e => {
          const t = Function.prototype.toString,
            n = u("OriginalDelegate"),
            o = u("Promise"),
            r = u("Error"),
            s = function() {
              if ("function" == typeof this) {
                const s = this[n];
                if (s) return "function" == typeof s ? t.call(s) : Object.prototype.toString.call(s);
                if (this === Promise) {
                  const n = e[o];
                  if (n) return t.call(n)
                }
                if (this === Error) {
                  const n = e[r];
                  if (n) return t.call(n)
                }
              }
              return t.call(this)
            };
          s[n] = t, Function.prototype.toString = s;
          const a = Object.prototype.toString;
          Object.prototype.toString = function() {
            return this instanceof Promise ? "[object Promise]" : a.call(this)
          }
        });
        let R = !1;
        if ("undefined" != typeof window) try {
          const e = Object.defineProperty({}, "passive", {
            get: function() {
              R = !0
            }
          });
          window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
        } catch (ae) {
          R = !1
        }
        const x = {
            useG: !0
          },
          L = {},
          N = {},
          M = new RegExp("^" + i + "(\\w+)(true|false)$"),
          A = u("propagationStopped");

        function H(e, t, o) {
          const r = o && o.add || "addEventListener",
            s = o && o.rm || "removeEventListener",
            a = o && o.listeners || "eventListeners",
            c = o && o.rmAll || "removeAllListeners",
            l = u(r),
            h = "." + r + ":",
            p = function(e, t, n) {
              if (e.isRemoved) return;
              const o = e.callback;
              "object" == typeof o && o.handleEvent && (e.callback = e => o.handleEvent(e), e.originalDelegate = o), e.invoke(e, t, [n]);
              const r = e.options;
              r && "object" == typeof r && r.once && t[s].call(t, n.type, e.originalDelegate ? e.originalDelegate : e.callback, r)
            },
            f = function(t) {
              if (!(t = t || e.event)) return;
              const n = this || t.target || e,
                o = n[L[t.type].false];
              if (o)
                if (1 === o.length) p(o[0], n, t);
                else {
                  const e = o.slice();
                  for (let o = 0; o < e.length && (!t || !0 !== t[A]); o++) p(e[o], n, t)
                }
            },
            d = function(t) {
              if (!(t = t || e.event)) return;
              const n = this || t.target || e,
                o = n[L[t.type].true];
              if (o)
                if (1 === o.length) p(o[0], n, t);
                else {
                  const e = o.slice();
                  for (let o = 0; o < e.length && (!t || !0 !== t[A]); o++) p(e[o], n, t)
                }
            };

          function g(t, o) {
            if (!t) return !1;
            let p = !0;
            o && void 0 !== o.useG && (p = o.useG);
            const g = o && o.vh;
            let k = !0;
            o && void 0 !== o.chkDup && (k = o.chkDup);
            let _ = !1;
            o && void 0 !== o.rt && (_ = o.rt);
            let y = t;
            for (; y && !y.hasOwnProperty(r);) y = n(y);
            if (!y && t[r] && (y = t), !y) return !1;
            if (y[l]) return !1;
            const v = o && o.eventNameToString,
              T = {},
              b = y[l] = y[r],
              E = y[u(s)] = y[s],
              w = y[u(a)] = y[a],
              Z = y[u(c)] = y[c];
            let S;

            function D(e) {
              R || "boolean" == typeof T.options || null == T.options || (e.options = !!T.options.capture, T.options = e.options)
            }
            o && o.prepend && (S = y[u(o.prepend)] = y[o.prepend]);
            const P = p ? function(e) {
                if (!T.isExisting) return D(e), b.call(T.target, T.eventName, T.capture ? d : f, T.options)
              } : function(e) {
                return D(e), b.call(T.target, T.eventName, e.invoke, T.options)
              },
              C = p ? function(e) {
                if (!e.isRemoved) {
                  const t = L[e.eventName];
                  let n;
                  t && (n = t[e.capture ? "true" : "false"]);
                  const o = n && e.target[n];
                  if (o)
                    for (let r = 0; r < o.length; r++)
                      if (o[r] === e) {
                        o.splice(r, 1), e.isRemoved = !0, 0 === o.length && (e.allRemoved = !0, e.target[n] = null);
                        break
                      }
                }
                if (e.allRemoved) return E.call(e.target, e.eventName, e.capture ? d : f, e.options)
              } : function(e) {
                return E.call(e.target, e.eventName, e.invoke, e.options)
              },
              O = o && o.diff ? o.diff : function(e, t) {
                const n = typeof t;
                return "function" === n && e.callback === t || "object" === n && e.originalDelegate === t
              },
              j = Zone[u("BLACK_LISTED_EVENTS")],
              I = function(t, n, r, s, a = !1, c = !1) {
                return function() {
                  const l = this || e;
                  let u = arguments[0];
                  o && o.transferEventName && (u = o.transferEventName(u));
                  let h = arguments[1];
                  if (!h) return t.apply(this, arguments);
                  if (m && "uncaughtException" === u) return t.apply(this, arguments);
                  let f = !1;
                  if ("function" != typeof h) {
                    if (!h.handleEvent) return t.apply(this, arguments);
                    f = !0
                  }
                  if (g && !g(t, h, l, arguments)) return;
                  const d = arguments[2];
                  if (j)
                    for (let e = 0; e < j.length; e++)
                      if (u === j[e]) return t.apply(this, arguments);
                  let _, y = !1;
                  void 0 === d ? _ = !1 : !0 === d ? _ = !0 : !1 === d ? _ = !1 : (_ = !!d && !!d.capture, y = !!d && !!d.once);
                  const b = Zone.current,
                    E = L[u];
                  let w;
                  if (E) w = E[_ ? "true" : "false"];
                  else {
                    const e = (v ? v(u) : u) + "false",
                      t = (v ? v(u) : u) + "true",
                      n = i + e,
                      o = i + t;
                    L[u] = {}, L[u].false = n, L[u].true = o, w = _ ? o : n
                  }
                  let Z, S = l[w],
                    D = !1;
                  if (S) {
                    if (D = !0, k)
                      for (let e = 0; e < S.length; e++)
                        if (O(S[e], h)) return
                  } else S = l[w] = [];
                  const P = l.constructor.name,
                    z = N[P];
                  z && (Z = z[u]), Z || (Z = P + n + (v ? v(u) : u)), T.options = d, y && (T.options.once = !1), T.target = l, T.capture = _, T.eventName = u, T.isExisting = D;
                  const C = p ? x : void 0;
                  C && (C.taskData = T);
                  const I = b.scheduleEventTask(Z, h, C, r, s);
                  return T.target = null, C && (C.taskData = null), y && (d.once = !0), (R || "boolean" != typeof I.options) && (I.options = d), I.target = l, I.capture = _, I.eventName = u, f && (I.originalDelegate = h), c ? S.unshift(I) : S.push(I), a ? l : void 0
                }
              };
            return y[r] = I(b, h, P, C, _), S && (y.prependListener = I(S, ".prependListener:", (function(e) {
              return S.call(T.target, T.eventName, e.invoke, T.options)
            }), C, _, !0)), y[s] = function() {
              const t = this || e;
              let n = arguments[0];
              o && o.transferEventName && (n = o.transferEventName(n));
              const r = arguments[2];
              let s;
              s = void 0 !== r && (!0 === r || !1 !== r && !!r && !!r.capture);
              const a = arguments[1];
              if (!a) return E.apply(this, arguments);
              if (g && !g(E, a, t, arguments)) return;
              const c = L[n];
              let l;
              c && (l = c[s ? "true" : "false"]);
              const u = l && t[l];
              if (u)
                for (let e = 0; e < u.length; e++) {
                  const o = u[e];
                  if (O(o, a)) return u.splice(e, 1), o.isRemoved = !0, 0 === u.length && (o.allRemoved = !0, t[l] = null, "string" == typeof n) && (t[i + "ON_PROPERTY" + n] = null), o.zone.cancelTask(o), _ ? t : void 0
                }
              return E.apply(this, arguments)
            }, y[a] = function() {
              const t = this || e;
              let n = arguments[0];
              o && o.transferEventName && (n = o.transferEventName(n));
              const r = [],
                s = F(t, v ? v(n) : n);
              for (let e = 0; e < s.length; e++) {
                const t = s[e];
                r.push(t.originalDelegate ? t.originalDelegate : t.callback)
              }
              return r
            }, y[c] = function() {
              const t = this || e;
              let n = arguments[0];
              if (n) {
                o && o.transferEventName && (n = o.transferEventName(n));
                const e = L[n];
                if (e) {
                  const o = t[e.false],
                    r = t[e.true];
                  if (o) {
                    const e = o.slice();
                    for (let t = 0; t < e.length; t++) {
                      const o = e[t];
                      this[s].call(this, n, o.originalDelegate ? o.originalDelegate : o.callback, o.options)
                    }
                  }
                  if (r) {
                    const e = r.slice();
                    for (let t = 0; t < e.length; t++) {
                      const o = e[t];
                      this[s].call(this, n, o.originalDelegate ? o.originalDelegate : o.callback, o.options)
                    }
                  }
                }
              } else {
                const e = Object.keys(t);
                for (let t = 0; t < e.length; t++) {
                  const n = M.exec(e[t]);
                  let o = n && n[1];
                  o && "removeListener" !== o && this[c].call(this, o)
                }
                this[c].call(this, "removeListener")
              }
              if (_) return this
            }, z(y[r], b), z(y[s], E), Z && z(y[c], Z), w && z(y[a], w), !0
          }
          let k = [];
          for (let n = 0; n < t.length; n++) k[n] = g(t[n], o);
          return k
        }

        function F(e, t) {
          const n = [];
          for (let o in e) {
            const r = M.exec(o);
            let s = r && r[1];
            if (s && (!t || s === t)) {
              const t = e[o];
              if (t)
                for (let e = 0; e < t.length; e++) n.push(t[e])
            }
          }
          return n
        }

        function G(e, t) {
          const n = e.Event;
          n && n.prototype && t.patchMethod(n.prototype, "stopImmediatePropagation", e => function(t, n) {
            t[A] = !0, e && e.apply(t, n)
          })
        }

        function q(e, t, n, o, r) {
          const s = Zone.__symbol__(o);
          if (t[s]) return;
          const a = t[s] = t[o];
          t[o] = function(s, i, c) {
            return i && i.prototype && r.forEach((function(t) {
              const r = `${n}.${o}::` + t,
                s = i.prototype;
              if (s.hasOwnProperty(t)) {
                const n = e.ObjectGetOwnPropertyDescriptor(s, t);
                n && n.value ? (n.value = e.wrapWithCurrentZone(n.value, r), e._redefineProperty(i.prototype, t, n)) : s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r))
              } else s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r))
            })), a.call(t, s, i, c)
          }, e.attachOriginToPatched(t[o], a)
        }
        const B = ["absolutedeviceorientation", "afterinput", "afterprint", "appinstalled", "beforeinstallprompt", "beforeprint", "beforeunload", "devicelight", "devicemotion", "deviceorientation", "deviceorientationabsolute", "deviceproximity", "hashchange", "languagechange", "message", "mozbeforepaint", "offline", "online", "paint", "pageshow", "pagehide", "popstate", "rejectionhandled", "storage", "unhandledrejection", "unload", "userproximity", "vrdisplyconnected", "vrdisplaydisconnected", "vrdisplaypresentchange"],
          W = ["encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend"],
          U = ["load"],
          $ = ["blur", "error", "focus", "load", "resize", "scroll", "messageerror"],
          V = ["bounce", "finish", "start"],
          X = ["loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange"],
          Y = ["upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close"],
          J = ["close", "error", "open", "message"],
          K = ["error", "message"],
          Q = ["abort", "animationcancel", "animationend", "animationiteration", "auxclick", "beforeinput", "blur", "cancel", "canplay", "canplaythrough", "change", "compositionstart", "compositionupdate", "compositionend", "cuechange", "click", "close", "contextmenu", "curechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "drop", "durationchange", "emptied", "ended", "error", "focus", "focusin", "focusout", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadstart", "loadeddata", "loadedmetadata", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "orientationchange", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "mozpointerlockchange", "webkitpointerlockerchange", "pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror", "pointermove", "pointout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "seeked", "seeking", "select", "selectionchange", "selectstart", "show", "sort", "stalled", "submit", "suspend", "timeupdate", "volumechange", "touchcancel", "touchmove", "touchstart", "touchend", "transitioncancel", "transitionend", "waiting", "wheel"].concat(["webglcontextrestored", "webglcontextlost", "webglcontextcreationerror"], ["autocomplete", "autocompleteerror"], ["toggle"], ["afterscriptexecute", "beforescriptexecute", "DOMContentLoaded", "freeze", "fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange", "fullscreenerror", "mozfullscreenerror", "webkitfullscreenerror", "msfullscreenerror", "readystatechange", "visibilitychange", "resume"], B, ["beforecopy", "beforecut", "beforepaste", "copy", "cut", "paste", "dragstart", "loadend", "animationstart", "search", "transitionrun", "transitionstart", "webkitanimationend", "webkitanimationiteration", "webkitanimationstart", "webkittransitionend"], ["activate", "afterupdate", "ariarequest", "beforeactivate", "beforedeactivate", "beforeeditfocus", "beforeupdate", "cellchange", "controlselect", "dataavailable", "datasetchanged", "datasetcomplete", "errorupdate", "filterchange", "layoutcomplete", "losecapture", "move", "moveend", "movestart", "propertychange", "resizeend", "resizestart", "rowenter", "rowexit", "rowsdelete", "rowsinserted", "command", "compassneedscalibration", "deactivate", "help", "mscontentzoom", "msmanipulationstatechanged", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msgotpointercapture", "msinertiastart", "mslostpointercapture", "mspointercancel", "mspointerdown", "mspointerenter", "mspointerhover", "mspointerleave", "mspointermove", "mspointerout", "mspointerover", "mspointerup", "pointerout", "mssitemodejumplistitemremoved", "msthumbnailclick", "stop", "storagecommit"]);

        function ee(e, t, n) {
          if (!n || 0 === n.length) return t;
          const o = n.filter(t => t.target === e);
          if (!o || 0 === o.length) return t;
          const r = o[0].ignoreProperties;
          return t.filter(e => -1 === r.indexOf(e))
        }

        function te(e, t, n, o) {
          e && w(e, ee(e, t, n), o)
        }

        function ne(e, t) {
          if (m && !v) return;
          if (Zone[e.symbol("patchEvents")]) return;
          const o = "undefined" != typeof WebSocket,
            r = t.__Zone_ignore_on_properties;
          if (y) {
            const e = window,
              t = j ? [{
                target: e,
                ignoreProperties: ["error"]
              }] : [];
            te(e, Q.concat(["messageerror"]), r ? r.concat(t) : r, n(e)), te(Document.prototype, Q, r), void 0 !== e.SVGElement && te(e.SVGElement.prototype, Q, r), te(Element.prototype, Q, r), te(HTMLElement.prototype, Q, r), te(HTMLMediaElement.prototype, W, r), te(HTMLFrameSetElement.prototype, B.concat($), r), te(HTMLBodyElement.prototype, B.concat($), r), te(HTMLFrameElement.prototype, U, r), te(HTMLIFrameElement.prototype, U, r);
            const o = e.HTMLMarqueeElement;
            o && te(o.prototype, V, r);
            const s = e.Worker;
            s && te(s.prototype, K, r)
          }
          const s = t.XMLHttpRequest;
          s && te(s.prototype, X, r);
          const a = t.XMLHttpRequestEventTarget;
          a && te(a && a.prototype, X, r), "undefined" != typeof IDBIndex && (te(IDBIndex.prototype, Y, r), te(IDBRequest.prototype, Y, r), te(IDBOpenDBRequest.prototype, Y, r), te(IDBDatabase.prototype, Y, r), te(IDBTransaction.prototype, Y, r), te(IDBCursor.prototype, Y, r)), o && te(WebSocket.prototype, J, r)
        }
        Zone.__load_patch("util", (n, s, a) => {
          a.patchOnProperties = w, a.patchMethod = D, a.bindArguments = g, a.patchMacroTask = P;
          const l = s.__symbol__("BLACK_LISTED_EVENTS"),
            u = s.__symbol__("UNPATCHED_EVENTS");
          n[u] && (n[l] = n[u]), n[l] && (s[l] = s[u] = n[l]), a.patchEventPrototype = G, a.patchEventTarget = H, a.isIEOrEdge = I, a.ObjectDefineProperty = t, a.ObjectGetOwnPropertyDescriptor = e, a.ObjectCreate = o, a.ArraySlice = r, a.patchClass = S, a.wrapWithCurrentZone = c, a.filterProperties = ee, a.attachOriginToPatched = z, a._redefineProperty = Object.defineProperty, a.patchCallbacks = q, a.getGlobalObjects = () => ({
            globalSources: N,
            zoneSymbolEventNames: L,
            eventNames: Q,
            isBrowser: y,
            isMix: v,
            isNode: m,
            TRUE_STR: "true",
            FALSE_STR: "false",
            ZONE_SYMBOL_PREFIX: i,
            ADD_EVENT_LISTENER_STR: "addEventListener",
            REMOVE_EVENT_LISTENER_STR: "removeEventListener"
          })
        });
        const oe = u("zoneTask");

        function re(e, t, n, o) {
          let r = null,
            s = null;
          n += o;
          const a = {};

          function i(t) {
            const n = t.data;
            return n.args[0] = function() {
              try {
                t.invoke.apply(this, arguments)
              } finally {
                t.data && t.data.isPeriodic || ("number" == typeof n.handleId ? delete a[n.handleId] : n.handleId && (n.handleId[oe] = null))
              }
            }, n.handleId = r.apply(e, n.args), t
          }

          function c(e) {
            return s(e.data.handleId)
          }
          r = D(e, t += o, n => function(r, s) {
            if ("function" == typeof s[0]) {
              const e = l(t, s[0], {
                isPeriodic: "Interval" === o,
                delay: "Timeout" === o || "Interval" === o ? s[1] || 0 : void 0,
                args: s
              }, i, c);
              if (!e) return e;
              const n = e.data.handleId;
              return "number" == typeof n ? a[n] = e : n && (n[oe] = e), n && n.ref && n.unref && "function" == typeof n.ref && "function" == typeof n.unref && (e.ref = n.ref.bind(n), e.unref = n.unref.bind(n)), "number" == typeof n || n ? n : e
            }
            return n.apply(e, s)
          }), s = D(e, n, t => function(n, o) {
            const r = o[0];
            let s;
            "number" == typeof r ? s = a[r] : (s = r && r[oe], s || (s = r)), s && "string" == typeof s.type ? "notScheduled" !== s.state && (s.cancelFn && s.data.isPeriodic || 0 === s.runCount) && ("number" == typeof r ? delete a[r] : r && (r[oe] = null), s.zone.cancelTask(s)) : t.apply(e, o)
          })
        }

        function se(e, t) {
          if (Zone[t.symbol("patchEventTarget")]) return;
          const {
            eventNames: n,
            zoneSymbolEventNames: o,
            TRUE_STR: r,
            FALSE_STR: s,
            ZONE_SYMBOL_PREFIX: a
          } = t.getGlobalObjects();
          for (let c = 0; c < n.length; c++) {
            const e = n[c],
              t = a + (e + s),
              i = a + (e + r);
            o[e] = {}, o[e][s] = t, o[e][r] = i
          }
          const i = e.EventTarget;
          return i && i.prototype ? (t.patchEventTarget(e, [i && i.prototype]), !0) : void 0
        }
        Zone.__load_patch("legacy", e => {
          const t = e[Zone.__symbol__("legacyPatch")];
          t && t()
        }), Zone.__load_patch("timers", e => {
          re(e, "set", "clear", "Timeout"), re(e, "set", "clear", "Interval"), re(e, "set", "clear", "Immediate")
        }), Zone.__load_patch("requestAnimationFrame", e => {
          re(e, "request", "cancel", "AnimationFrame"), re(e, "mozRequest", "mozCancel", "AnimationFrame"), re(e, "webkitRequest", "webkitCancel", "AnimationFrame")
        }), Zone.__load_patch("blocking", (e, t) => {
          const n = ["alert", "prompt", "confirm"];
          for (let o = 0; o < n.length; o++) D(e, n[o], (n, o, r) => function(o, s) {
            return t.current.run(n, e, s, r)
          })
        }), Zone.__load_patch("EventTarget", (e, t, n) => {
          ! function(e, t) {
            t.patchEventPrototype(e, t)
          }(e, n), se(e, n);
          const o = e.XMLHttpRequestEventTarget;
          o && o.prototype && n.patchEventTarget(e, [o.prototype]), S("MutationObserver"), S("WebKitMutationObserver"), S("IntersectionObserver"), S("FileReader")
        }), Zone.__load_patch("on_property", (e, t, n) => {
          ne(n, e)
        }), Zone.__load_patch("customElements", (e, t, n) => {
          ! function(e, t) {
            const {
              isBrowser: n,
              isMix: o
            } = t.getGlobalObjects();
            (n || o) && e.customElements && "customElements" in e && t.patchCallbacks(t, e.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"])
          }(e, n)
        }), Zone.__load_patch("XHR", (e, t) => {
          ! function(e) {
            const p = e.XMLHttpRequest;
            if (!p) return;
            const f = p.prototype;
            let d = f[s],
              g = f[a];
            if (!d) {
              const t = e.XMLHttpRequestEventTarget;
              if (t) {
                const e = t.prototype;
                d = e[s], g = e[a]
              }
            }

            function k(e) {
              const o = e.data,
                c = o.target;
              c[i] = !1, c[h] = !1;
              const l = c[r];
              d || (d = c[s], g = c[a]), l && g.call(c, "readystatechange", l);
              const u = c[r] = () => {
                if (c.readyState === c.DONE)
                  if (!o.aborted && c[i] && "scheduled" === e.state) {
                    const n = c[t.__symbol__("loadfalse")];
                    if (n && n.length > 0) {
                      const r = e.invoke;
                      e.invoke = function() {
                        const n = c[t.__symbol__("loadfalse")];
                        for (let t = 0; t < n.length; t++) n[t] === e && n.splice(t, 1);
                        o.aborted || "scheduled" !== e.state || r.call(e)
                      }, n.push(e)
                    } else e.invoke()
                  } else o.aborted || !1 !== c[i] || (c[h] = !0)
              };
              return d.call(c, "readystatechange", u), c[n] || (c[n] = e), b.apply(c, o.args), c[i] = !0, e
            }

            function _() {}

            function m(e) {
              const t = e.data;
              return t.aborted = !0, E.apply(t.target, t.args)
            }
            const y = D(f, "open", () => function(e, t) {
                return e[o] = 0 == t[2], e[c] = t[1], y.apply(e, t)
              }),
              v = u("fetchTaskAborting"),
              T = u("fetchTaskScheduling"),
              b = D(f, "send", () => function(e, n) {
                if (!0 === t.current[T]) return b.apply(e, n);
                if (e[o]) return b.apply(e, n); {
                  const t = {
                      target: e,
                      url: e[c],
                      isPeriodic: !1,
                      args: n,
                      aborted: !1
                    },
                    o = l("XMLHttpRequest.send", _, t, k, m);
                  e && !0 === e[h] && !t.aborted && "scheduled" === o.state && o.invoke()
                }
              }),
              E = D(f, "abort", () => function(e, o) {
                const r = e[n];
                if (r && "string" == typeof r.type) {
                  if (null == r.cancelFn || r.data && r.data.aborted) return;
                  r.zone.cancelTask(r)
                } else if (!0 === t.current[v]) return E.apply(e, o)
              })
          }(e);
          const n = u("xhrTask"),
            o = u("xhrSync"),
            r = u("xhrListener"),
            i = u("xhrScheduled"),
            c = u("xhrURL"),
            h = u("xhrErrorBeforeScheduled")
        }), Zone.__load_patch("geolocation", t => {
          t.navigator && t.navigator.geolocation && function(t, n) {
            const o = t.constructor.name;
            for (let r = 0; r < n.length; r++) {
              const s = n[r],
                a = t[s];
              if (a) {
                if (!k(e(t, s))) continue;
                t[s] = (e => {
                  const t = function() {
                    return e.apply(this, g(arguments, o + "." + s))
                  };
                  return z(t, e), t
                })(a)
              }
            }
          }(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
        }), Zone.__load_patch("PromiseRejectionEvent", (e, t) => {
          function n(t) {
            return function(n) {
              F(e, t).forEach(o => {
                const r = e.PromiseRejectionEvent;
                if (r) {
                  const e = new r(t, {
                    promise: n.promise,
                    reason: n.rejection
                  });
                  o.invoke(e)
                }
              })
            }
          }
          e.PromiseRejectionEvent && (t[u("unhandledPromiseRejectionHandler")] = n("unhandledrejection"), t[u("rejectionHandledHandler")] = n("rejectionhandled"))
        })
      }) ? o.call(t, n, t, e) : o) || (e.exports = r)
    }
  },
  [
    [2, 0]
  ]
]);
! function(e) {
  function r(r) {
    for (var n, l, f = r[0], i = r[1], p = r[2], c = 0, s = []; c < f.length; c++) l = f[c], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0;
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (a && a(r); s.length;) s.shift()();
    return u.push.apply(u, p || []), t()
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, f = 1; f < t.length; f++) 0 !== o[t[f]] && (n = !1);
      n && (u.splice(r--, 1), e = l(l.s = t[0]))
    }
    return e
  }
  var n = {},
    o = {
      0: 0
    },
    u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports
  }
  l.m = e, l.c = n, l.d = function(e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    })
  }, l.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, l.t = function(e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" == typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
      }), 2 & r && "string" != typeof e)
      for (var n in e) l.d(t, n, (function(r) {
        return e[r]
      }).bind(null, n));
    return t
  }, l.n = function(e) {
    var r = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return l.d(r, "a", r), r
  }, l.o = function(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r)
  }, l.p = "";
  var f = window.webpackJsonp = window.webpackJsonp || [],
    i = f.push.bind(f);
  f.push = r, f = f.slice();
  for (var p = 0; p < f.length; p++) r(f[p]);
  var a = i;
  t()
}([]);
! function(e, t) {
  "use strict";

  function n() {
    var e = C.splice(0, C.length);
    for (We = 0; e.length;) e.shift().call(null, e.shift())
  }

  function r(e, t) {
    for (var n = 0, r = e.length; n < r; n++) p(e[n], t)
  }

  function o(e) {
    return function(t) {
      Re(t) && (p(t, e), le.length && r(t.querySelectorAll(le), e))
    }
  }

  function l(e) {
    var t = Be.call(e, "is"),
      n = e.nodeName.toUpperCase(),
      r = ie.call(re, t ? ee + t.toUpperCase() : J + n);
    return t && -1 < r && !a(n, t) ? -1 : r
  }

  function a(e, t) {
    return -1 < le.indexOf(e + '[is="' + t + '"]')
  }

  function i(e) {
    var t = e.currentTarget,
      n = e.attrChange,
      r = e.attrName,
      o = e.target,
      l = e[X] || 2,
      a = e[$] || 3;
    !rt || o && o !== t || !t[B] || "style" === r || e.prevValue === e.newValue && ("" !== e.newValue || n !== l && n !== a) || t[B](r, n === l ? null : e.prevValue, n === a ? null : e.newValue)
  }

  function u(e) {
    var t = o(e);
    return function(e) {
      C.push(t, e.target), We && clearTimeout(We), We = setTimeout(n, 1)
    }
  }

  function c(e) {
    nt && (nt = !1, e.currentTarget.removeEventListener(W, c)), le.length && r((e.target || g).querySelectorAll(le), e.detail === x ? x : _), Ve && function() {
      for (var e, t = 0, n = Ue.length; t < n; t++) ae.contains(e = Ue[t]) || (n--, Ue.splice(t--, 1), p(e, x))
    }()
  }

  function s(e, t) {
    var n = this;
    Ge.call(n, e, t), w.call(n, {
      target: n
    })
  }

  function m(e, t, n) {
    var r = t.apply(e, n),
      o = l(r);
    return -1 < o && F(r, oe[o]), n.pop() && le.length && function(e) {
      for (var t, n = 0, r = e.length; n < r; n++) F(t = e[n], oe[l(t)])
    }(r.querySelectorAll(le)), r
  }

  function f(e, t) {
    De(e, t), N ? N.observe(e, $e) : (tt && (e.setAttribute = s, e[R] = O(e), e[U](Y, w)), e[U](Q, i)), e[z] && rt && (e.created = !0, e[z](), e.created = !1)
  }

  function d(e) {
    throw new Error("A " + e + " type is already registered")
  }

  function p(e, t) {
    var n, r, o = l(e); - 1 < o && !xe.call(e, "TEMPLATE") && (I(e, oe[o]), o = 0, t !== _ || e[_] ? t !== x || e[x] || (e[_] = !1, e[x] = !0, r = "disconnected", o = 1) : (e[x] = !1, e[_] = !0, r = "connected", o = 1, Ve && ie.call(Ue, e) < 0 && Ue.push(e)), o && (n = e[t + k] || e[r + k]) && n.call(e))
  }

  function h() {}

  function T(e, t, n) {
    var r = n && n[q] || "",
      o = t.prototype,
      l = Ne(o),
      a = t.observedAttributes || fe,
      i = {
        prototype: l
      };
    Pe(l, z, {
      value: function() {
        if (ye) ye = !1;
        else if (!this[Me]) {
          this[Me] = !0, new t(this), o[z] && o[z].call(this);
          var e = Ce[Ae.get(t)];
          (!ve || e.create.length > 1) && E(this)
        }
      }
    }), Pe(l, B, {
      value: function(e) {
        -1 < ie.call(a, e) && o[B] && o[B].apply(this, arguments)
      }
    }), o[j] && Pe(l, Z, {
      value: o[j]
    }), o[G] && Pe(l, K, {
      value: o[G]
    }), r && (i[q] = r), e = e.toUpperCase(), Ce[e] = {
      constructor: t,
      create: r ? [r, Oe(e)] : [e]
    }, Ae.set(t, e), g[V](e.toLowerCase(), i), v(e), we[e].r()
  }

  function L(e) {
    var t = Ce[e.toUpperCase()];
    return t && t.constructor
  }

  function M(e) {
    return "string" == typeof e ? e : e && e.is || ""
  }

  function E(e) {
    for (var t, n = e[B], r = n ? e.attributes : fe, o = r.length; o--;) n.call(e, (t = r[o]).name || t.nodeName, null, t.value || t.nodeValue)
  }

  function v(e) {
    return (e = e.toUpperCase()) in we || (we[e] = {}, we[e].p = new be((function(t) {
      we[e].r = t
    }))), we[e].p
  }

  function H() {
    Ee && delete e.customElements, me(e, "customElements", {
      configurable: !0,
      value: new h
    }), me(e, "CustomElementRegistry", {
      configurable: !0,
      value: h
    });
    for (var t = y.get(/^HTML[A-Z]*[a-z]/), n = t.length; n--;

      function(t) {
        var n = e[t];
        if (n) {
          e[t] = function(e) {
            var t, r;
            return e || (e = this), e[Me] || (ye = !0, t = Ce[Ae.get(e.constructor)], (e = (r = ve && 1 === t.create.length) ? Reflect.construct(n, fe, t.constructor) : g.createElement.apply(g, t.create))[Me] = !0, ye = !1, r || E(e)), e
          }, e[t].prototype = n.prototype;
          try {
            n.prototype.constructor = e[t]
          } catch (r) {
            me(n, Me, {
              value: e[t]
            })
          }
        }
      }(t[n]));
    g.createElement = function(e, t) {
      var n = M(t);
      return n ? Xe.call(this, e, Oe(n)) : Xe.call(this, e)
    }, Ye || (et = !0, g[V](""))
  }
  var g = e.document,
    b = e.Object,
    y = function(e) {
      var t, n, r, o, l = /^[A-Z]+[a-z]/,
        a = function(e, t) {
          (t = t.toLowerCase()) in i || (i[e] = (i[e] || []).concat(t), i[t] = i[t.toUpperCase()] = e)
        },
        i = (b.create || b)(null),
        u = {};
      for (n in e)
        for (o in e[n])
          for (i[o] = r = e[n][o], t = 0; t < r.length; t++) i[r[t].toLowerCase()] = i[r[t].toUpperCase()] = o;
      return u.get = function(e) {
        return "string" == typeof e ? i[e] || (l.test(e) ? [] : "") : function(e) {
          var t, n = [];
          for (t in i) e.test(t) && n.push(t);
          return n
        }(e)
      }, u.set = function(e, t) {
        return l.test(e) ? a(e, t) : a(t, e), u
      }, u
    }({
      collections: {
        HTMLAllCollection: ["all"],
        HTMLCollection: ["forms"],
        HTMLFormControlsCollection: ["elements"],
        HTMLOptionsCollection: ["options"]
      },
      elements: {
        Element: ["element"],
        HTMLAnchorElement: ["a"],
        HTMLAppletElement: ["applet"],
        HTMLAreaElement: ["area"],
        HTMLAttachmentElement: ["attachment"],
        HTMLAudioElement: ["audio"],
        HTMLBRElement: ["br"],
        HTMLBaseElement: ["base"],
        HTMLBodyElement: ["body"],
        HTMLButtonElement: ["button"],
        HTMLCanvasElement: ["canvas"],
        HTMLContentElement: ["content"],
        HTMLDListElement: ["dl"],
        HTMLDataElement: ["data"],
        HTMLDataListElement: ["datalist"],
        HTMLDetailsElement: ["details"],
        HTMLDialogElement: ["dialog"],
        HTMLDirectoryElement: ["dir"],
        HTMLDivElement: ["div"],
        HTMLDocument: ["document"],
        HTMLElement: ["element", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "command", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "i", "kbd", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"],
        HTMLEmbedElement: ["embed"],
        HTMLFieldSetElement: ["fieldset"],
        HTMLFontElement: ["font"],
        HTMLFormElement: ["form"],
        HTMLFrameElement: ["frame"],
        HTMLFrameSetElement: ["frameset"],
        HTMLHRElement: ["hr"],
        HTMLHeadElement: ["head"],
        HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
        HTMLHtmlElement: ["html"],
        HTMLIFrameElement: ["iframe"],
        HTMLImageElement: ["img"],
        HTMLInputElement: ["input"],
        HTMLKeygenElement: ["keygen"],
        HTMLLIElement: ["li"],
        HTMLLabelElement: ["label"],
        HTMLLegendElement: ["legend"],
        HTMLLinkElement: ["link"],
        HTMLMapElement: ["map"],
        HTMLMarqueeElement: ["marquee"],
        HTMLMediaElement: ["media"],
        HTMLMenuElement: ["menu"],
        HTMLMenuItemElement: ["menuitem"],
        HTMLMetaElement: ["meta"],
        HTMLMeterElement: ["meter"],
        HTMLModElement: ["del", "ins"],
        HTMLOListElement: ["ol"],
        HTMLObjectElement: ["object"],
        HTMLOptGroupElement: ["optgroup"],
        HTMLOptionElement: ["option"],
        HTMLOutputElement: ["output"],
        HTMLParagraphElement: ["p"],
        HTMLParamElement: ["param"],
        HTMLPictureElement: ["picture"],
        HTMLPreElement: ["pre"],
        HTMLProgressElement: ["progress"],
        HTMLQuoteElement: ["blockquote", "q", "quote"],
        HTMLScriptElement: ["script"],
        HTMLSelectElement: ["select"],
        HTMLShadowElement: ["shadow"],
        HTMLSlotElement: ["slot"],
        HTMLSourceElement: ["source"],
        HTMLSpanElement: ["span"],
        HTMLStyleElement: ["style"],
        HTMLTableCaptionElement: ["caption"],
        HTMLTableCellElement: ["td", "th"],
        HTMLTableColElement: ["col", "colgroup"],
        HTMLTableElement: ["table"],
        HTMLTableRowElement: ["tr"],
        HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
        HTMLTemplateElement: ["template"],
        HTMLTextAreaElement: ["textarea"],
        HTMLTimeElement: ["time"],
        HTMLTitleElement: ["title"],
        HTMLTrackElement: ["track"],
        HTMLUListElement: ["ul"],
        HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"],
        HTMLVideoElement: ["video"]
      },
      nodes: {
        Attr: ["node"],
        Audio: ["audio"],
        CDATASection: ["node"],
        CharacterData: ["node"],
        Comment: ["#comment"],
        Document: ["#document"],
        DocumentFragment: ["#document-fragment"],
        DocumentType: ["node"],
        HTMLDocument: ["#document"],
        Image: ["img"],
        Option: ["option"],
        ProcessingInstruction: ["node"],
        ShadowRoot: ["#shadow-root"],
        Text: ["#text"],
        XMLDocument: ["xml"]
      }
    });
  "object" != typeof t && (t = {
    type: t || "auto"
  });
  var C, w, A, O, N, D, I, F, S, V = "registerElement",
    P = 1e5 * e.Math.random() >> 0,
    R = "__" + V + P,
    U = "addEventListener",
    _ = "attached",
    k = "Callback",
    x = "detached",
    q = "extends",
    B = "attributeChanged" + k,
    Z = _ + k,
    j = "connected" + k,
    G = "disconnected" + k,
    z = "created" + k,
    K = x + k,
    X = "ADDITION",
    $ = "REMOVAL",
    Q = "DOMAttrModified",
    W = "DOMContentLoaded",
    Y = "DOMSubtreeModified",
    J = "<",
    ee = "=",
    te = /^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,
    ne = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
    re = [],
    oe = [],
    le = "",
    ae = g.documentElement,
    ie = re.indexOf || function(e) {
      for (var t = this.length; t-- && this[t] !== e;);
      return t
    },
    ue = b.prototype,
    ce = ue.hasOwnProperty,
    se = ue.isPrototypeOf,
    me = b.defineProperty,
    fe = [],
    de = b.getOwnPropertyDescriptor,
    pe = b.getOwnPropertyNames,
    he = b.getPrototypeOf,
    Te = b.setPrototypeOf,
    Le = !!b.__proto__,
    Me = "__dreCEv1",
    Ee = e.customElements,
    ve = !/^force/.test(t.type) && !!(Ee && Ee.define && Ee.get && Ee.whenDefined),
    He = b.create || b,
    ge = e.Map || function() {
      var e, t = [],
        n = [];
      return {
        get: function(e) {
          return n[ie.call(t, e)]
        },
        set: function(r, o) {
          (e = ie.call(t, r)) < 0 ? n[t.push(r) - 1] = o : n[e] = o
        }
      }
    },
    be = e.Promise || function(e) {
      function t(e) {
        for (r = !0; n.length;) n.shift()(e)
      }
      var n = [],
        r = !1,
        o = {
          catch: function() {
            return o
          },
          then: function(e) {
            return n.push(e), r && setTimeout(t, 1), o
          }
        };
      return e(t), o
    },
    ye = !1,
    Ce = He(null),
    we = He(null),
    Ae = new ge,
    Oe = function(e) {
      return e.toLowerCase()
    },
    Ne = b.create || function e(t) {
      return t ? (e.prototype = t, new e) : this
    },
    De = Te || (Le ? function(e, t) {
      return e.__proto__ = t, e
    } : pe && de ? function() {
      function e(e, t) {
        for (var n, r = pe(t), o = 0, l = r.length; o < l; o++) ce.call(e, n = r[o]) || me(e, n, de(t, n))
      }
      return function(t, n) {
        do {
          e(t, n)
        } while ((n = he(n)) && !se.call(n, t));
        return t
      }
    }() : function(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }),
    Ie = e.MutationObserver || e.WebKitMutationObserver,
    Fe = e.HTMLAnchorElement,
    Se = (e.HTMLElement || e.Element || e.Node).prototype,
    Ve = !se.call(Se, ae),
    Pe = Ve ? function(e, t, n) {
      return e[t] = n.value, e
    } : me,
    Re = Ve ? function(e) {
      return 1 === e.nodeType
    } : function(e) {
      return se.call(Se, e)
    },
    Ue = Ve && [],
    _e = Se.attachShadow,
    ke = Se.cloneNode,
    xe = Se.closest || function(e) {
      for (var t = this; t && t.nodeName !== e;) t = t.parentNode;
      return t
    },
    qe = Se.dispatchEvent,
    Be = Se.getAttribute,
    Ze = Se.hasAttribute,
    je = Se.removeAttribute,
    Ge = Se.setAttribute,
    ze = g.createElement,
    Ke = g.importNode,
    Xe = ze,
    $e = Ie && {
      attributes: !0,
      characterData: !0,
      attributeOldValue: !0
    },
    Qe = Ie || function(e) {
      tt = !1, ae.removeEventListener(Q, Qe)
    },
    We = 0,
    Ye = V in g && !/^force-all/.test(t.type),
    Je = !0,
    et = !1,
    tt = !0,
    nt = !0,
    rt = !0;
  if (Ie && ((S = g.createElement("div")).innerHTML = "<div><div></div></div>", new Ie((function(e, t) {
      if (e[0] && "childList" == e[0].type && !e[0].removedNodes[0].childNodes.length) {
        var n = (S = de(Se, "innerHTML")) && S.set;
        n && me(Se, "innerHTML", {
          set: function(e) {
            for (; this.lastChild;) this.removeChild(this.lastChild);
            n.call(this, e)
          }
        })
      }
      t.disconnect(), S = null
    })).observe(S, {
      childList: !0,
      subtree: !0
    }), S.innerHTML = ""), Ye || (Te || Le ? (I = function(e, t) {
      se.call(t, e) || f(e, t)
    }, F = f) : F = I = function(e, t) {
      e[R] || (e[R] = b(!0), f(e, t))
    }, Ve ? (tt = !1, function() {
      var e = de(Se, U),
        t = e.value,
        n = function(e) {
          var t = new CustomEvent(Q, {
            bubbles: !0
          });
          t.attrName = e, t.prevValue = Be.call(this, e), t.newValue = null, t[$] = t.attrChange = 2, je.call(this, e), qe.call(this, t)
        },
        r = function(e, t) {
          var n = Ze.call(this, e),
            r = n && Be.call(this, e),
            o = new CustomEvent(Q, {
              bubbles: !0
            });
          Ge.call(this, e, t), o.attrName = e, o.prevValue = n ? r : null, o.newValue = t, n ? o.MODIFICATION = o.attrChange = 1 : o[X] = o.attrChange = 0, qe.call(this, o)
        },
        o = function(e) {
          var t, n = e.currentTarget,
            r = n[R],
            o = e.propertyName;
          r.hasOwnProperty(o) && (r = r[o], (t = new CustomEvent(Q, {
            bubbles: !0
          })).attrName = r.name, t.prevValue = r.value || null, t.newValue = r.value = n[o] || null, null == t.prevValue ? t[X] = t.attrChange = 0 : t.MODIFICATION = t.attrChange = 1, qe.call(n, t))
        };
      e.value = function(e, l, a) {
        e === Q && this[B] && this.setAttribute !== r && (this[R] = {
          className: {
            name: "class",
            value: this.className
          }
        }, this.setAttribute = r, this.removeAttribute = n, t.call(this, "propertychange", o)), t.call(this, e, l, a)
      }, me(Se, U, e)
    }()) : Ie || (ae[U](Q, Qe), ae.setAttribute(R, 1), ae.removeAttribute(R), tt && (w = function(e) {
      var t, n, r, o = this;
      if (o === e.target) {
        for (r in t = o[R], o[R] = n = O(o), n) {
          if (!(r in t)) return A(0, o, r, t[r], n[r], X);
          if (n[r] !== t[r]) return A(1, o, r, t[r], n[r], "MODIFICATION")
        }
        for (r in t)
          if (!(r in n)) return A(2, o, r, t[r], n[r], $)
      }
    }, A = function(e, t, n, r, o, l) {
      var a = {
        attrChange: e,
        currentTarget: t,
        attrName: n,
        prevValue: r,
        newValue: o
      };
      a[l] = e, i(a)
    }, O = function(e) {
      for (var t, n, r = {}, o = e.attributes, l = 0, a = o.length; l < a; l++) "setAttribute" !== (n = (t = o[l]).name) && (r[n] = t.value);
      return r
    })), g[V] = function(e, t) {
      if (n = e.toUpperCase(), Je && (Je = !1, Ie ? (N = function(e, t) {
          function n(e, t) {
            for (var n = 0, r = e.length; n < r; t(e[n++]));
          }
          return new Ie((function(r) {
            for (var o, l, a, i = 0, u = r.length; i < u; i++) "childList" === (o = r[i]).type ? (n(o.addedNodes, e), n(o.removedNodes, t)) : (l = o.target, rt && l[B] && "style" !== o.attributeName && (a = Be.call(l, o.attributeName)) !== o.oldValue && l[B](o.attributeName, o.oldValue, a))
          }))
        }(o(_), o(x)), (D = function(e) {
          return N.observe(e, {
            childList: !0,
            subtree: !0
          }), e
        })(g), _e && (Se.attachShadow = function() {
          return D(_e.apply(this, arguments))
        })) : (C = [], g[U]("DOMNodeInserted", u(_)), g[U]("DOMNodeRemoved", u(x))), g[U](W, c), g[U]("readystatechange", c), g.importNode = function(e, t) {
          switch (e.nodeType) {
            case 1:
              return m(g, Ke, [e, !!t]);
            case 11:
              for (var n = g.createDocumentFragment(), r = e.childNodes, o = r.length, l = 0; l < o; l++) n.appendChild(g.importNode(r[l], !!t));
              return n;
            default:
              return ke.call(e, !!t)
          }
        }, Se.cloneNode = function(e) {
          return m(this, ke, [!!e])
        }), et) return et = !1;
      if (-2 < ie.call(re, ee + n) + ie.call(re, J + n) && d(e), !te.test(n) || -1 < ie.call(ne, n)) throw new Error("The type " + e + " is invalid");
      var n, l, a = function() {
          return s ? g.createElement(f, n) : g.createElement(f)
        },
        i = t || ue,
        s = ce.call(i, q),
        f = s ? t[q].toUpperCase() : n;
      return s && -1 < ie.call(re, J + f) && d(f), l = re.push((s ? ee : J) + n) - 1, le = le.concat(le.length ? "," : "", s ? f + '[is="' + e.toLowerCase() + '"]' : f), a.prototype = oe[l] = ce.call(i, "prototype") ? i.prototype : Ne(Se), le.length && r(g.querySelectorAll(le), _), a
    }, g.createElement = Xe = function(e, t) {
      var n = M(t),
        r = n ? ze.call(g, e, Oe(n)) : ze.call(g, e),
        o = "" + e,
        l = ie.call(re, (n ? ee : J) + (n || o).toUpperCase()),
        i = -1 < l;
      return n && (r.setAttribute("is", n = n.toLowerCase()), i && (i = a(o.toUpperCase(), n))), rt = !g.createElement.innerHTMLHelper, i && F(r, oe[l]), r
    }), addEventListener("beforeunload", (function() {
      delete g.createElement, delete g.importNode, delete g[V]
    }), !1), h.prototype = {
      constructor: h,
      define: ve ? function(e, t, n) {
        if (n) T(e, t, n);
        else {
          var r = e.toUpperCase();
          Ce[r] = {
            constructor: t,
            create: [r]
          }, Ae.set(t, r), Ee.define(e, t)
        }
      } : T,
      get: ve ? function(e) {
        return Ee.get(e) || L(e)
      } : L,
      whenDefined: ve ? function(e) {
        return be.race([Ee.whenDefined(e), v(e)])
      } : v
    }, !Ee || /^force/.test(t.type)) H();

}