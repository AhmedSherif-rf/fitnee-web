"use strict";
(self.webpackChunkfitnee_web = self.webpackChunkfitnee_web || []).push([
  [8662],
  {
    8662: function (e, s, n) {
      n.r(s);
      n(2791);
      var t = n(9711),
        a = n(7823),
        r = n(3009),
        c = n(9773),
        d = n(3464),
        l = n(9037),
        i = n(263),
        m = n(2156),
        o = n(184);
      s.default = function () {
        var e = [
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Trainee",
            duration: "2 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Trainee",
            duration: "2 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Trainee",
            duration: "2 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Trainee",
            duration: "2 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Trainee",
            duration: "2 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
        ];
        return (0, o.jsx)(a.Z, {
          fluid: !0,
          children: (0, o.jsx)(r.Z, {
            children: (0, o.jsx)(c.Z, {
              md: 12,
              children: (0, o.jsx)(d.Z, {
                className: "BorderRadius contentCard",
                children: (0, o.jsxs)(l.Z, {
                  className: "px-4",
                  children: [
                    (0, o.jsx)(r.Z, {
                      children: (0, o.jsx)(c.Z, {
                        md: 12,
                        children: (0, o.jsx)(t.Z, {
                          headingText: "My Current Subscribers",
                          categoryText: "",
                        }),
                      }),
                    }),
                    (0, o.jsxs)(r.Z, {
                      className:
                        "align-items-center text-black-custom justify-content-center   d-md-flex d-none border-bottom text-black-custom py-2 mb-2",
                      children: [
                        (0, o.jsx)(c.Z, {
                          md: 3,
                          className: "mb-md-0 mb-2",
                          children: (0, o.jsx)("div", {
                            className: "px-5",
                            children: (0, o.jsx)("h6", {
                              className: "mb-0 fw-bold ",
                              children: "Name",
                            }),
                          }),
                        }),
                        (0, o.jsx)(c.Z, {
                          md: 2,
                          children: (0, o.jsx)("div", {
                            className: "fw-bold text-center p-2 rounded-3",
                            children: (0, o.jsx)("h6", {
                              className: "mb-0 fw-bold ",
                              children: "Duration",
                            }),
                          }),
                        }),
                        (0, o.jsx)(c.Z, {
                          md: 2,
                          children: (0, o.jsx)("div", {
                            className: "fw-bold text-center p-2 rounded-3",
                            children: (0, o.jsx)("h6", {
                              className: "mb-0 fw-bold ",
                              children: "Price",
                            }),
                          }),
                        }),
                        (0, o.jsx)(c.Z, {
                          md: 4,
                          children: (0, o.jsx)(r.Z, {
                            className: "align-items-center h-100 ",
                            children: (0, o.jsx)(c.Z, {
                              md: 12,
                              xs: 12,
                              className: "text-center",
                              children: (0, o.jsx)("div", {
                                className:
                                  "p-2 rounded-3 d-md-flex d-block align-items-center justify-content-center",
                                children: (0, o.jsxs)("div", {
                                  className:
                                    "d-flex align-items-center justify-content-center",
                                  children: [
                                    (0, o.jsx)("h6", {
                                      className: "mb-0 fw-bold",
                                      children: "Start Date",
                                    }),
                                    (0, o.jsx)("span", {
                                      className: "mb-0 mx-1",
                                      children: " / ",
                                    }),
                                    (0, o.jsx)("h6", {
                                      className: "mb-0 fw-bold",
                                      children: "End Date",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    e.map(function (e) {
                      return (0,
                      o.jsx)(m.Z, { useImages: e.useImages, userName: e.userName, serviceProvider: e.serviceProvider, duration: e.duration, fee: e.fee, startDate: e.startDate, endDate: e.endDate });
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
          return r;
        },
      });
      var t = n(2791),
        a = n(184),
        r = function (e) {
          var s = e.headingText,
            n = e.categoryText,
            r = e.className,
            c = e.style;
          return (0, a.jsx)(t.Fragment, {
            children: (0, a.jsxs)("h2", {
              className: "fw-bold text-black-custom px-md-3 pt-3 ".concat(
                r,
                " heading"
              ),
              style: { style: c, textTransform: "camelCase" },
              children: [
                s,
                n &&
                  (0, a.jsx)("span", {
                    className: "text-muted h6 fw-bold",
                    style: { style: c, textTransform: "camelCase" },
                    children: "".concat(n),
                  }),
              ],
            }),
          });
        };
    },
    2156: function (e, s, n) {
      var t = n(9439),
        a = n(3009),
        r = n(9773),
        c = n(2791),
        d = n(9630),
        l = n(9230),
        i = n(9024),
        m = n(1267),
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
          N = (0, l.$G)("").t,
          p = (0, c.useState)(!1),
          v = (0, t.Z)(p, 2),
          y = v[0],
          g = v[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(a.Z, {
              className:
                "align-items-center justify-content-center text-black-custom border-bottom text-black-custom py-2 mb-2",
              children: [
                (0, o.jsx)(r.Z, {
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
                  ? (0, o.jsx)(r.Z, {
                      md: 2,
                      sm: 8,
                      xs: 8,
                      children: (0, o.jsx)("div", {
                        className:
                          "mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3",
                        children: u,
                      }),
                    })
                  : (0, o.jsx)(r.Z, {
                      md: 2,
                      className: "d-md-block d-none",
                      children: (0, o.jsx)("div", {
                        className:
                          "mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3",
                        children: u,
                      }),
                    }),
                (0, o.jsx)(r.Z, {
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
                (0, o.jsx)(r.Z, {
                  md: 4,
                  children: j
                    ? (0, o.jsx)("div", {
                        className: "text-md-end text-center",
                        onClick: function () {
                          g(!0);
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
            (0, o.jsx)(m.Z, {
              size: "md",
              TOneClassName: "fw-bold mb-4 fs-5 text-center",
              className: "p-4",
              isOpen: y,
              onClose: function () {
                g(!1);
              },
              ModalTextOne: "Are you sure about canceling your subscription?",
              ButtonOne: (0, o.jsx)(d.Z, {
                text: N("signup.yesText"),
                className: "py-2 px-5",
                handleOnClick: function () {
                  g(!1);
                },
              }),
              ButtonTwo: (0, o.jsx)(i.Z, {
                text: "No",
                className: "py-2 px-5",
                handleOnClick: function () {
                  g(!1);
                },
              }),
            }),
          ],
        });
      };
    },
    9037: function (e, s, n) {
      var t = n(2791),
        a = n(2007),
        r = n.n(a),
        c = n(1694),
        d = n.n(c),
        l = n(9622),
        i = ["className", "cssModule", "innerRef", "tag"];
      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var n = arguments[s];
                  for (var t in n)
                    Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                }
                return e;
              }),
          m.apply(this, arguments)
        );
      }
      function o(e, s) {
        if (null == e) return {};
        var n,
          t,
          a = (function (e, s) {
            if (null == e) return {};
            var n,
              t,
              a = {},
              r = Object.keys(e);
            for (t = 0; t < r.length; t++)
              (n = r[t]), s.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, s);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (t = 0; t < r.length; t++)
            (n = r[t]),
              s.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var x = {
        className: r().string,
        cssModule: r().object,
        innerRef: r().oneOfType([r().object, r().string, r().func]),
        tag: l.iC,
      };
      function u(e) {
        var s = e.className,
          n = e.cssModule,
          a = e.innerRef,
          r = e.tag,
          c = void 0 === r ? "div" : r,
          x = o(e, i),
          u = (0, l.mx)(d()(s, "card-body"), n);
        return t.createElement(c, m({}, x, { className: u, ref: a }));
      }
      (u.propTypes = x), (s.Z = u);
    },
  },
]);
//# sourceMappingURL=8662.e579b07b.chunk.js.map
