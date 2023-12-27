"use strict";
(self.webpackChunkfitnee_web = self.webpackChunkfitnee_web || []).push([
  [2531],
  {
    2531: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return I;
          },
        });
      var l = t(2791),
        s = t(7823),
        a = t(1087),
        r = t(9230),
        i = t(3009),
        o = t(9773),
        c = t(1413),
        d = t(5705),
        m = t(8554),
        u = t(4800),
        x = t(1339),
        h = t(9630),
        f = t(9024),
        p = t(8007),
        g = t(533),
        v = p.Ry().shape({
          email: p
            .Z_()
            .matches(
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              (0, g.Z)("validation.invalidEmailText")
            )
            .required((0, g.Z)("validation.requiredEmailText")),
          password: p
            .Z_()
            .min(8, (0, g.Z)("validation.invalidPasswordText"))
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
              (0, g.Z)("validation.invalidPasswordTwoText")
            )
            .required((0, g.Z)("validation.requiredPasswordText")),
          termAndConditionCheck: p
            .Xg()
            .oneOf([!0], (0, g.Z)("validation.requiredTermAndConditionCheck")),
        }),
        j = t(3585),
        b = { email: "", password: "", termAndConditionCheck: !1 },
        w = t(7689),
        y = t(9399),
        Z = t(9434),
        N = t(7842),
        C = t(1793),
        k = t(263),
        O = t(184),
        _ = function () {
          var e = (0, w.s0)(),
            n = (0, Z.I0)(),
            t = (0, r.$G)("").t,
            p = (0, Z.v9)(function (e) {
              return null === e || void 0 === e ? void 0 : e.user;
            }).loading,
            g = (0, l.useCallback)(
              function () {
                e("/");
              },
              [e]
            );
          return (0, O.jsx)(s.Z, {
            children: (0, O.jsxs)(i.Z, {
              className:
                "justify-content-center text-black-custom align-items-center vh-100",
              children: [
                "pending" === p && (0, O.jsx)(C.Z, {}),
                (0, O.jsxs)(o.Z, {
                  lg: 7,
                  md: 12,
                  sm: 10,
                  children: [
                    (0, O.jsxs)("h1", {
                      className: "text-center mb-5 fs-1 fw-bold",
                      children: [" ", t("login.loginText")],
                    }),
                    (0, O.jsx)(d.Formik, {
                      initialValues: (0, c.Z)({}, b),
                      validationSchema: v,
                      validate: function (e) {},
                      onSubmit: function (t, l) {
                        (0, l.setSubmitting)(!0),
                          (function (t) {
                            var l = {
                              apiEndpoint: j.LOGIN_URL,
                              requestData: JSON.stringify(t),
                              navigate: e,
                            };
                            n((0, N.x)(l)).then(function (e) {
                              "login/fulfilled" === e.type &&
                                m.Z.success("Logged in successfully");
                            });
                          })(t);
                      },
                      children: function (e) {
                        var n = e.values,
                          l = e.errors,
                          s = e.touched,
                          r = e.handleChange,
                          i = (e.setFieldValue, e.handleBlur),
                          o = e.handleSubmit;
                        e.isSubmitting;
                        return (0, O.jsxs)(y.Z, {
                          onSubmit: o,
                          children: [
                            (0, O.jsx)(x.Z, {
                              type: "email",
                              name: "email",
                              placeholder: t("login.emailText"),
                              onChangeHandle: r,
                              onBlurHandle: i,
                              value: n.email,
                              icon: (0, O.jsx)("img", {
                                src: k.Z.EMAIL_ICON,
                                alt: "email-icon",
                              }),
                              className:
                                "form-control-lg BorderRadiusInput py-3 px-5",
                            }),
                            (0, O.jsx)("p", {
                              className: "errorField",
                              children: l.email && s.email && l.email,
                            }),
                            (0, O.jsx)(x.Z, {
                              type: "password",
                              name: "password",
                              placeholder: t("login.passwordText"),
                              onChangeHandle: r,
                              onBlurHandle: i,
                              value: n.password,
                              icon: (0, O.jsx)("img", {
                                src: k.Z.PASSWORD_ICON_IMG,
                                alt: "password-icon",
                              }),
                              className:
                                "form-control-lg BorderRadiusInput py-3 px-5 mb-1 mt-3",
                            }),
                            (0, O.jsx)("p", {
                              className: "errorField",
                              children: l.password && s.password && l.password,
                            }),
                            (0, O.jsx)(a.rU, {
                              to: "/forgotPassword",
                              children: (0, O.jsx)("p", {
                                className: "text-end textYellow",
                                children: t("login.forgotPasswordText"),
                              }),
                            }),
                            (0, O.jsx)("div", {
                              className: "d-flex mb-1",
                              children: (0, O.jsx)(u.Z, {
                                label: (0, O.jsxs)("p", {
                                  className: "mb-0 fs-6",
                                  children: [
                                    t("login.agreeOnFitneeText"),
                                    (0, O.jsx)(a.rU, {
                                      to: "/termAndCondition",
                                      children: (0, O.jsxs)("span", {
                                        className: "textYellow",
                                        children: [
                                          " ",
                                          t("login.termsAndConditionsText"),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                name: "termAndConditionCheck",
                                onChangeHandle: r,
                                onBlurHandle: i,
                                checked: n.termAndConditionCheck,
                              }),
                            }),
                            (0, O.jsx)("p", {
                              className: "errorField mb-2",
                              children:
                                l.termAndConditionCheck &&
                                s.termAndConditionCheck &&
                                l.termAndConditionCheck,
                            }),
                            (0, O.jsx)(h.Z, {
                              className: "w-100 py-3 mb-3",
                              text: t("login.signInText"),
                              disabled: "pending" === p,
                              type: "submit",
                            }),
                            (0, O.jsx)(f.Z, {
                              className: "w-100 py-3",
                              text: t("login.cancelText"),
                              handleOnClick: g,
                            }),
                            (0, O.jsxs)("p", {
                              className: "pt-3 text-center",
                              children: [
                                t("login.newHereText"),
                                " ",
                                (0, O.jsx)(a.rU, {
                                  to: "/registerAs",
                                  className: "textYellow",
                                  children: t("login.createAccountText"),
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        T = (0, l.memo)(_),
        A = function (e) {
          var n = e.CompStyle,
            t = e.text1,
            l = e.text2,
            s = e.text3;
          return (0, O.jsxs)(i.Z, {
            className: "h-100",
            children: [
              (0, O.jsx)(o.Z, {
                md: 6,
                xs: 12,
                className: "p-0 d-md-block d-none",
                children: (0, O.jsxs)("div", {
                  className:
                    "d-flex flex-column justify-content-between bgProperties h-100 py-4",
                  style: n,
                  children: [
                    (0, O.jsx)("div", { children: t }),
                    (0, O.jsx)("div", { children: l }),
                    (0, O.jsx)("div", { children: s }),
                  ],
                }),
              }),
              (0, O.jsx)(o.Z, {
                md: 6,
                xs: 12,
                className: "p-0",
                children: (0, O.jsx)(T, {}),
              }),
            ],
          });
        },
        S = (0, l.memo)(A),
        I = function () {
          var e = (0, r.$G)("").t,
            n = [
              {
                CompStyle: {
                  backgroundImage: "url(".concat(k.Z.LOGIN_BG_IMG, ")"),
                },
                text1: (0, O.jsx)("div", {
                  className: "text-center",
                  children: (0, O.jsx)(a.rU, {
                    to: "/",
                    children: (0, O.jsx)("img", {
                      className: "img-fluid w-25 m-3",
                      src: k.Z.LOGO_IMG,
                      alt: "",
                    }),
                  }),
                }),
                text2: (0, O.jsxs)("div", {
                  className: "text-center lh-1",
                  children: [
                    (0, O.jsx)("h1", {
                      className: "fw-bold fs-1 text-white",
                      children: e("login.unlockYourPotentialText"),
                    }),
                    (0, O.jsx)("span", {
                      className: "fs-2 text-white fst-italic",
                      children: e("login.transformYourBodyText"),
                    }),
                  ],
                }),
                text3: (0, O.jsx)("h6", {
                  className: "small text-center text-white",
                  children: "www.fitnee.com",
                }),
              },
            ];
          return (0, O.jsx)(s.Z, {
            fluid: !0,
            className: "vh-100",
            children:
              null === n || void 0 === n
                ? void 0
                : n.map(function (e) {
                    return (0,
                    O.jsx)(S, { CompStyle: e.CompStyle, text1: e.text1, text2: e.text2, text3: e.text3 });
                  }),
          });
        };
    },
    4800: function (e, n, t) {
      var l = t(2791),
        s = t(8118),
        a = t(2976),
        r = t(184),
        i = function (e) {
          var n = e.label,
            t = e.onChangeHandle,
            l = e.onBlurHandle,
            i = e.name,
            o = e.checked;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(s.Z, {
                type: "checkbox",
                name: i,
                onChange: t,
                onBlur: l,
                checked: o,
                className: "p-2 checkBox me-2",
              }),
              (0, r.jsx)(a.Z, { check: !0, children: n }),
            ],
          });
        };
      n.Z = (0, l.memo)(i);
    },
    1339: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var l = t(8118),
        s = t(2791),
        a = "style_inputWrapper__1fbZb",
        r = "style_iconWrapper__6LRYC",
        i = "style_inputDesign__pSaVq",
        o = t(184),
        c = function (e) {
          var n = e.placeholder,
            t = e.type,
            s = e.onChangeHandle,
            c = e.onBlurHandle,
            d = e.value,
            m = e.name,
            u = e.className,
            x = e.icon,
            h = e.disabled,
            f = e.style,
            p = e.rows;
          return (0, o.jsxs)("div", {
            className: "".concat(a),
            children: [
              x && (0, o.jsx)("div", { className: r, children: x }),
              (0, o.jsx)(l.Z, {
                type: t,
                placeholder: n,
                name: m,
                style: f,
                className: "form-control-lg  w-100 ".concat(i, " ").concat(u),
                disabled: h,
                onChange: s,
                onBlur: c,
                value: d,
                rows: p,
              }),
            ],
          });
        },
        d = (0, s.memo)(c);
    },
    533: function (e, n, t) {
      var l = t(8825);
      n.Z = function (e) {
        return l.ZP.t(e);
      };
    },
    2976: function (e, n, t) {
      var l = t(2791),
        s = t(2007),
        a = t.n(s),
        r = t(1694),
        i = t.n(r),
        o = t(9622),
        c = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ];
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var l in t)
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                }
                return e;
              }),
          d.apply(this, arguments)
        );
      }
      function m(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function u(e, n) {
        if (null == e) return {};
        var t,
          l,
          s = (function (e, n) {
            if (null == e) return {};
            var t,
              l,
              s = {},
              a = Object.keys(e);
            for (l = 0; l < a.length; l++)
              (t = a[l]), n.indexOf(t) >= 0 || (s[t] = e[t]);
            return s;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (l = 0; l < a.length; l++)
            (t = a[l]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (s[t] = e[t]));
        }
        return s;
      }
      var x = ["xs", "sm", "md", "lg", "xl", "xxl"],
        h = a().oneOfType([a().number, a().string]),
        f = a().oneOfType([
          a().bool,
          a().string,
          a().number,
          a().shape({ size: h, order: h, offset: h }),
        ]),
        p = {
          children: a().node,
          hidden: a().bool,
          check: a().bool,
          size: a().string,
          for: a().string,
          tag: o.iC,
          className: a().string,
          cssModule: a().object,
          xs: f,
          sm: f,
          md: f,
          lg: f,
          xl: f,
          xxl: f,
          widths: a().array,
        },
        g = function (e, n, t) {
          return !0 === t || "" === t
            ? e
              ? "col"
              : "col-".concat(n)
            : "auto" === t
            ? e
              ? "col-auto"
              : "col-".concat(n, "-auto")
            : e
            ? "col-".concat(t)
            : "col-".concat(n, "-").concat(t);
        };
      function v(e) {
        var n = e.className,
          t = e.cssModule,
          s = e.hidden,
          a = e.widths,
          r = void 0 === a ? x : a,
          h = e.tag,
          f = void 0 === h ? "label" : h,
          p = e.check,
          v = e.size,
          j = e.for,
          b = u(e, c),
          w = [];
        r.forEach(function (n, l) {
          var s = e[n];
          if ((delete b[n], s || "" === s)) {
            var a,
              r = !l;
            if ((0, o.Kn)(s)) {
              var c,
                d = r ? "-" : "-".concat(n, "-");
              (a = g(r, n, s.size)),
                w.push(
                  (0, o.mx)(
                    i()(
                      (m((c = {}), a, s.size || "" === s.size),
                      m(
                        c,
                        "order".concat(d).concat(s.order),
                        s.order || 0 === s.order
                      ),
                      m(
                        c,
                        "offset".concat(d).concat(s.offset),
                        s.offset || 0 === s.offset
                      ),
                      c)
                    )
                  ),
                  t
                );
            } else (a = g(r, n, s)), w.push(a);
          }
        });
        var y = v || w.length,
          Z = !(p || y),
          N = (0, o.mx)(
            i()(
              n,
              !!s && "visually-hidden",
              !!p && "form-check-label",
              !!v && "col-form-label-".concat(v),
              w,
              !!y && "col-form-label",
              !!Z && "form-label"
            ),
            t
          );
        return l.createElement(f, d({ htmlFor: j }, b, { className: N }));
      }
      (v.propTypes = p), (n.Z = v);
    },
  },
]);
//# sourceMappingURL=2531.c34dc612.chunk.js.map
