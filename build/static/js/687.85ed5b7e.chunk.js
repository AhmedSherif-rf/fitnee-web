"use strict";
(self.webpackChunkfitnee_web = self.webpackChunkfitnee_web || []).push([
  [687],
  {
    687: function (e, s, n) {
      n.r(s);
      n(2791);
      var a = n(9630),
        t = n(9024),
        c = n(7823),
        l = n(3009),
        r = n(9773),
        d = n(3464),
        m = n(9037),
        i = n(263),
        o = n(2156),
        x = n(9711),
        u = n(184);
      s.default = function () {
        var e = [
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            duration: "2 Months",
            fee: "SAR 1000",
            CancelButton: (0, u.jsx)(a.Z, {
              className: "w-50 py-2",
              text: "Cancel Plan",
            }),
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            duration: "2 Months",
            fee: "SAR 1000",
            CancelButton: (0, u.jsx)(t.Z, {
              className: "w-50 disabled py-2 ",
              text: "Cancelled",
            }),
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            duration: "2 Months",
            fee: "SAR 1000",
            CancelButton: (0, u.jsx)(a.Z, {
              className: "w-50 py-2",
              text: "Cancel Plan",
            }),
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            duration: "2 Months",
            fee: "SAR 1000",
            CancelButton: (0, u.jsx)(t.Z, {
              className: "w-50 disabled py-2",
              text: "Cancelled",
            }),
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            duration: "Expiry Date:12/11/2023",
            fee: "SAR 1000",
            CancelButton: (0, u.jsx)(a.Z, {
              className: "w-50 py-2",
              text: "Cancel Plan",
            }),
          },
        ];
        return (0, u.jsx)(c.Z, {
          fluid: !0,
          className: "",
          children: (0, u.jsx)(l.Z, {
            className: "",
            children: (0, u.jsx)(r.Z, {
              md: 12,
              children: (0, u.jsx)(d.Z, {
                className: "BorderRadius contentCard px-3",
                children: (0, u.jsxs)(m.Z, {
                  className: "px-md-4",
                  children: [
                    (0, u.jsx)(l.Z, {
                      children: (0, u.jsx)(r.Z, {
                        md: 12,
                        children: (0, u.jsx)(x.Z, {
                          headingText: "Subscription Details",
                          categoryText: "",
                        }),
                      }),
                    }),
                    (0, u.jsxs)(l.Z, {
                      className:
                        "align-items-center justify-content-center d-md-flex d-none text-black-custom border-bottom py-2 mb-2",
                      children: [
                        (0, u.jsx)(r.Z, { md: 2, className: "mb-md-0 mb-2" }),
                        (0, u.jsx)(r.Z, {
                          md: 2,
                          className: "mb-md-0 mb-2 text-end",
                          children: (0, u.jsx)("h6", {
                            className: "mb-0 w-100 fs-5 fw-bold ",
                            children: "Duration",
                          }),
                        }),
                        (0, u.jsx)(r.Z, {
                          md: 2,
                          className: "d-md-block d-none pe-lg-5 pe-md-4",
                          children: (0, u.jsx)("div", {
                            className: "mb-md-0 py-2",
                            children: (0, u.jsx)("h6", {
                              className: "mb-0 w-100 fs-5 fw-bold text-end",
                              children: "Fee",
                            }),
                          }),
                        }),
                        (0, u.jsx)(r.Z, { md: 1 }),
                        (0, u.jsx)(r.Z, {
                          md: 3,
                          children: (0, u.jsx)("div", {
                            className: " text-end pe-lg-4 pe-md-2",
                            children: (0, u.jsx)("h6", {
                              className: "mb-0 w-100 fs-5 fw-bold  ",
                              children: "Action",
                            }),
                          }),
                        }),
                      ],
                    }),
                    e.map(function (e) {
                      return (0,
                      u.jsx)(o.Z, { useImages: e.useImages, userName: e.userName, duration: e.duration, fee: e.fee, CancelButton: e.CancelButton });
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    9711: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return c;
        },
      });
      var a = n(2791),
        t = n(184),
        c = function (e) {
          var s = e.headingText,
            n = e.categoryText,
            c = e.className,
            l = e.style;
          return (0, t.jsx)(a.Fragment, {
            children: (0, t.jsxs)("h2", {
              className: "fw-bold text-black-custom px-md-3 pt-3 ".concat(
                c,
                " heading"
              ),
              style: { style: l, textTransform: "camelCase" },
              children: [
                s,
                n &&
                  (0, t.jsx)("span", {
                    className: "text-muted h6 fw-bold",
                    style: { style: l, textTransform: "camelCase" },
                    children: "".concat(n),
                  }),
              ],
            }),
          });
        };
    },
    2156: function (e, s, n) {
      var a = n(9439),
        t = n(3009),
        c = n(9773),
        l = n(2791),
        r = n(9630),
        d = n(9230),
        m = n(9024),
        i = n(1267),
        o = n(184);
      s.Z = function (e) {
        var s = e.useImages,
          n = e.userName,
          x = e.serviceProvider,
          u = e.duration,
          h = e.fee,
          b = e.startDate,
          f = e.endDate,
          j = e.CancelButton,
          N = (0, d.$G)("").t,
          p = (0, l.useState)(!1),
          y = (0, a.Z)(p, 2),
          g = y[0],
          Z = y[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(t.Z, {
              className:
                "align-items-center justify-content-center text-black-custom border-bottom text-black-custom py-2 mb-2",
              children: [
                (0, o.jsx)(c.Z, {
                  md: 3,
                  className: "mb-md-0 mb-2",
                  children: (0, o.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [
                      (0, o.jsx)("div", {
                        className: "me-2 bgProperties rounded-circle",
                        style: {
                          width: "60px",
                          height: "60px",
                          backgroundImage: "url(".concat(s, ")"),
                          border: "1px solid",
                        },
                      }),
                      (0, o.jsxs)("div", {
                        children: [
                          (0, o.jsx)("h6", {
                            className: "mb-0 fw-bold ",
                            children: n,
                          }),
                          (0, o.jsx)("span", {
                            className: "d-md-none d-block textDark",
                            children: x,
                          }),
                          (0, o.jsx)("div", {
                            className: "mb-md-0 d-md-none d-block py-2",
                            children: (0, o.jsx)("h6", {
                              className: "mb-0 w-100 small fw-bold ",
                              children: h,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                j
                  ? (0, o.jsx)(c.Z, {
                      md: 2,
                      sm: 8,
                      xs: 8,
                      children: (0, o.jsx)("div", {
                        className:
                          "mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3",
                        children: u,
                      }),
                    })
                  : (0, o.jsx)(c.Z, {
                      md: 2,
                      className: "d-md-block d-none",
                      children: (0, o.jsx)("div", {
                        className:
                          "mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3",
                        children: u,
                      }),
                    }),
                (0, o.jsx)(c.Z, {
                  md: 2,
                  className: "d-md-block d-none",
                  children: (0, o.jsx)("div", {
                    className: "mb-md-0 text-center py-2 rounded-3",
                    children: (0, o.jsx)("h6", {
                      className: "mb-0 w-100 fs-5 fw-bold ",
                      children: h,
                    }),
                  }),
                }),
                (0, o.jsx)(c.Z, {
                  md: 4,
                  children: j
                    ? (0, o.jsx)("div", {
                        className: "text-md-end text-center",
                        onClick: function () {
                          Z(!0);
                        },
                        children: j,
                      })
                    : (0, o.jsxs)("div", {
                        className:
                          "BorderYellow p-2 rounded-3 d-md-flex d-block align-items-center justify-content-center",
                        children: [
                          (0, o.jsxs)("div", {
                            className:
                              "d-flex align-items-center justify-content-center",
                            children: [
                              (0, o.jsxs)("p", {
                                className: "mb-0 small",
                                children: [b, " "],
                              }),
                              (0, o.jsx)("span", {
                                className: "mb-0 mx-1",
                                children: "To",
                              }),
                              (0, o.jsx)("p", {
                                className: "mb-0 small",
                                children: f,
                              }),
                            ],
                          }),
                          (0, o.jsxs)("span", {
                            className: "d-md-none d-block textDark text-center",
                            children: ["(", u, ")"],
                          }),
                        ],
                      }),
                }),
              ],
            }),
            (0, o.jsx)(i.Z, {
              size: "md",
              TOneClassName: "fw-bold mb-4 fs-5 text-center",
              className: "p-4",
              isOpen: g,
              onClose: function () {
                Z(!1);
              },
              ModalTextOne: "Are you sure about canceling your subscription?",
              ButtonOne: (0, o.jsx)(r.Z, {
                text: N("signup.yesText"),
                className: "py-2 px-5",
                handleOnClick: function () {
                  Z(!1);
                },
              }),
              ButtonTwo: (0, o.jsx)(m.Z, {
                text: "No",
                className: "py-2 px-5",
                handleOnClick: function () {
                  Z(!1);
                },
              }),
            }),
          ],
        });
      };
    },
    9037: function (e, s, n) {
      var a = n(2791),
        t = n(2007),
        c = n.n(t),
        l = n(1694),
        r = n.n(l),
        d = n(9622),
        m = ["className", "cssModule", "innerRef", "tag"];
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var n = arguments[s];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      function o(e, s) {
        if (null == e) return {};
        var n,
          a,
          t = (function (e, s) {
            if (null == e) return {};
            var n,
              a,
              t = {},
              c = Object.keys(e);
            for (a = 0; a < c.length; a++)
              (n = c[a]), s.indexOf(n) >= 0 || (t[n] = e[n]);
            return t;
          })(e, s);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (a = 0; a < c.length; a++)
            (n = c[a]),
              s.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (t[n] = e[n]));
        }
        return t;
      }
      var x = {
        className: c().string,
        cssModule: c().object,
        innerRef: c().oneOfType([c().object, c().string, c().func]),
        tag: d.iC,
      };
      function u(e) {
        var s = e.className,
          n = e.cssModule,
          t = e.innerRef,
          c = e.tag,
          l = void 0 === c ? "div" : c,
          x = o(e, m),
          u = (0, d.mx)(r()(s, "card-body"), n);
        return a.createElement(l, i({}, x, { className: u, ref: t }));
      }
      (u.propTypes = x), (s.Z = u);
    },
  },
]);
//# sourceMappingURL=687.85ed5b7e.chunk.js.map
