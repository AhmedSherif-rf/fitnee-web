"use strict";
(self.webpackChunkfitnee_web = self.webpackChunkfitnee_web || []).push([
  [7652],
  {
    7652: function (e, s, t) {
      t.r(s);
      t(2791);
      var n = t(7823),
        r = t(3009),
        a = t(9773),
        c = t(3464),
        d = t(9037),
        i = t(263),
        l = t(2156),
        o = t(9711),
        m = t(184);
      s.default = function () {
        var e = [
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Nutritionist",
            duration: "2 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Nutritionist",
            duration: "1 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Nutritionist",
            duration: "1 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Nutritionist",
            duration: "2 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
          {
            useImages: "".concat(i.Z.PROFILE4_IMG),
            userName: "Nayyar Mehdi",
            serviceProvider: "Nutritionist",
            duration: "2 Months",
            fee: "SAR 1000",
            startDate: "12/10/2023",
            endDate: "11/12/2023",
          },
        ];
        return (0, m.jsx)(n.Z, {
          fluid: !0,
          children: (0, m.jsx)(r.Z, {
            children: (0, m.jsx)(a.Z, {
              md: 12,
              children: (0, m.jsx)(c.Z, {
                className: "BorderRadius contentCard border-0",
                children: (0, m.jsxs)(d.Z, {
                  className: "px-4",
                  children: [
                    (0, m.jsx)(r.Z, {
                      children: (0, m.jsx)(a.Z, {
                        md: 12,
                        children: (0, m.jsx)(o.Z, {
                          headingText: "My Current Nutritionists",
                          categoryText: "",
                        }),
                      }),
                    }),
                    (0, m.jsxs)(r.Z, {
                      className:
                        "align-items-center text-black-custom justify-content-center   d-md-flex d-none border-bottom text-black-custom py-2 mb-2",
                      children: [
                        (0, m.jsx)(a.Z, {
                          md: 3,
                          className: "mb-md-0 mb-2",
                          children: (0, m.jsx)("div", {
                            className: "px-5",
                            children: (0, m.jsx)("h6", {
                              className: "mb-0 fw-bold ",
                              children: "Name",
                            }),
                          }),
                        }),
                        (0, m.jsx)(a.Z, {
                          md: 2,
                          children: (0, m.jsx)("div", {
                            className: "fw-bold text-center p-2 rounded-3",
                            children: (0, m.jsx)("h6", {
                              className: "mb-0 fw-bold ",
                              children: "Duration",
                            }),
                          }),
                        }),
                        (0, m.jsx)(a.Z, {
                          md: 2,
                          children: (0, m.jsx)("div", {
                            className: "fw-bold text-center p-2 rounded-3",
                            children: (0, m.jsx)("h6", {
                              className: "mb-0 fw-bold ",
                              children: "Price",
                            }),
                          }),
                        }),
                        (0, m.jsx)(a.Z, {
                          md: 4,
                          children: (0, m.jsx)(r.Z, {
                            className: "align-items-center h-100 ",
                            children: (0, m.jsx)(a.Z, {
                              md: 12,
                              xs: 12,
                              className: "text-center",
                              children: (0, m.jsx)("div", {
                                className:
                                  "p-2 rounded-3 d-md-flex d-block align-items-center justify-content-center",
                                children: (0, m.jsxs)("div", {
                                  className:
                                    "d-flex align-items-center justify-content-center",
                                  children: [
                                    (0, m.jsx)("h6", {
                                      className: "mb-0 fw-bold",
                                      children: "Start Date",
                                    }),
                                    (0, m.jsx)("span", {
                                      className: "mb-0 mx-1",
                                      children: " / ",
                                    }),
                                    (0, m.jsx)("h6", {
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
                      m.jsx)(l.Z, { useImages: e.useImages, userName: e.userName, serviceProvider: e.serviceProvider, duration: e.duration, fee: e.fee, startDate: e.startDate, endDate: e.endDate });
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    9711: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      var n = t(2791),
        r = t(184),
        a = function (e) {
          var s = e.headingText,
            t = e.categoryText,
            a = e.className,
            c = e.style;
          return (0, r.jsx)(n.Fragment, {
            children: (0, r.jsxs)("h2", {
              className: "fw-bold text-black-custom px-md-3 pt-3 ".concat(
                a,
                " heading"
              ),
              style: { style: c, textTransform: "camelCase" },
              children: [
                s,
                t &&
                  (0, r.jsx)("span", {
                    className: "text-muted h6 fw-bold",
                    style: { style: c, textTransform: "camelCase" },
                    children: "".concat(t),
                  }),
              ],
            }),
          });
        };
    },
    2156: function (e, s, t) {
      var n = t(9439),
        r = t(3009),
        a = t(9773),
        c = t(2791),
        d = t(9630),
        i = t(9230),
        l = t(9024),
        o = t(1267),
        m = t(184);
      s.Z = function (e) {
        var s = e.useImages,
          t = e.userName,
          u = e.serviceProvider,
          x = e.duration,
          h = e.fee,
          b = e.startDate,
          f = e.endDate,
          j = e.CancelButton,
          N = (0, i.$G)("").t,
          p = (0, c.useState)(!1),
          v = (0, n.Z)(p, 2),
          y = v[0],
          g = v[1];
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsxs)(r.Z, {
              className:
                "align-items-center justify-content-center text-black-custom border-bottom text-black-custom py-2 mb-2",
              children: [
                (0, m.jsx)(a.Z, {
                  md: 3,
                  className: "mb-md-0 mb-2",
                  children: (0, m.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [
                      (0, m.jsx)("div", {
                        className: "me-2 bgProperties rounded-circle",
                        style: {
                          width: "60px",
                          height: "60px",
                          backgroundImage: "url(".concat(s, ")"),
                          border: "1px solid",
                        },
                      }),
                      (0, m.jsxs)("div", {
                        children: [
                          (0, m.jsx)("h6", {
                            className: "mb-0 fw-bold ",
                            children: t,
                          }),
                          (0, m.jsx)("span", {
                            className: "d-md-none d-block textDark",
                            children: u,
                          }),
                          (0, m.jsx)("div", {
                            className: "mb-md-0 d-md-none d-block py-2",
                            children: (0, m.jsx)("h6", {
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
                  ? (0, m.jsx)(a.Z, {
                      md: 2,
                      sm: 8,
                      xs: 8,
                      children: (0, m.jsx)("div", {
                        className:
                          "mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3",
                        children: x,
                      }),
                    })
                  : (0, m.jsx)(a.Z, {
                      md: 2,
                      className: "d-md-block d-none",
                      children: (0, m.jsx)("div", {
                        className:
                          "mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3",
                        children: x,
                      }),
                    }),
                (0, m.jsx)(a.Z, {
                  md: 2,
                  className: "d-md-block d-none",
                  children: (0, m.jsx)("div", {
                    className: "mb-md-0 text-center py-2 rounded-3",
                    children: (0, m.jsx)("h6", {
                      className: "mb-0 w-100 fs-5 fw-bold ",
                      children: h,
                    }),
                  }),
                }),
                (0, m.jsx)(a.Z, {
                  md: 4,
                  children: j
                    ? (0, m.jsx)("div", {
                        className: "text-md-end text-center",
                        onClick: function () {
                          g(!0);
                        },
                        children: j,
                      })
                    : (0, m.jsxs)("div", {
                        className:
                          "BorderYellow p-2 rounded-3 d-md-flex d-block align-items-center justify-content-center",
                        children: [
                          (0, m.jsxs)("div", {
                            className:
                              "d-flex align-items-center justify-content-center",
                            children: [
                              (0, m.jsxs)("p", {
                                className: "mb-0 small",
                                children: [b, " "],
                              }),
                              (0, m.jsx)("span", {
                                className: "mb-0 mx-1",
                                children: "To",
                              }),
                              (0, m.jsx)("p", {
                                className: "mb-0 small",
                                children: f,
                              }),
                            ],
                          }),
                          (0, m.jsxs)("span", {
                            className: "d-md-none d-block textDark text-center",
                            children: ["(", x, ")"],
                          }),
                        ],
                      }),
                }),
              ],
            }),
            (0, m.jsx)(o.Z, {
              size: "md",
              TOneClassName: "fw-bold mb-4 fs-5 text-center",
              className: "p-4",
              isOpen: y,
              onClose: function () {
                g(!1);
              },
              ModalTextOne: "Are you sure about canceling your subscription?",
              ButtonOne: (0, m.jsx)(d.Z, {
                text: N("signup.yesText"),
                className: "py-2 px-5",
                handleOnClick: function () {
                  g(!1);
                },
              }),
              ButtonTwo: (0, m.jsx)(l.Z, {
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
    9037: function (e, s, t) {
      var n = t(2791),
        r = t(2007),
        a = t.n(r),
        c = t(1694),
        d = t.n(c),
        i = t(9622),
        l = ["className", "cssModule", "innerRef", "tag"];
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var t = arguments[s];
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      function m(e, s) {
        if (null == e) return {};
        var t,
          n,
          r = (function (e, s) {
            if (null == e) return {};
            var t,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (t = a[n]), s.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, s);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (t = a[n]),
              s.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]));
        }
        return r;
      }
      var u = {
        className: a().string,
        cssModule: a().object,
        innerRef: a().oneOfType([a().object, a().string, a().func]),
        tag: i.iC,
      };
      function x(e) {
        var s = e.className,
          t = e.cssModule,
          r = e.innerRef,
          a = e.tag,
          c = void 0 === a ? "div" : a,
          u = m(e, l),
          x = (0, i.mx)(d()(s, "card-body"), t);
        return n.createElement(c, o({}, u, { className: x, ref: r }));
      }
      (x.propTypes = u), (s.Z = x);
    },
  },
]);
//# sourceMappingURL=7652.326fc5f6.chunk.js.map
