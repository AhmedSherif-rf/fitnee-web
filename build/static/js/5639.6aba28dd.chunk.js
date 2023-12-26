"use strict";
(self.webpackChunkfitnee_web = self.webpackChunkfitnee_web || []).push([
  [5639],
  {
    4800: function (e, s, l) {
      var a = l(2791),
        n = l(8118),
        r = l(2976),
        o = l(184),
        i = function (e) {
          var s = e.label,
            l = e.onChangeHandle,
            a = e.onBlurHandle,
            i = e.name,
            c = e.checked;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(n.Z, {
                type: "checkbox",
                name: i,
                onChange: l,
                onBlur: a,
                checked: c,
                className: "p-2 checkBox me-2",
              }),
              (0, o.jsx)(r.Z, { check: !0, children: s }),
            ],
          });
        };
      s.Z = (0, a.memo)(i);
    },
    1339: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return d;
        },
      });
      var a = l(8118),
        n = l(2791),
        r = "style_inputWrapper__1fbZb",
        o = "style_iconWrapper__6LRYC",
        i = "style_inputDesign__pSaVq",
        c = l(184),
        t = function (e) {
          var s = e.placeholder,
            l = e.type,
            n = e.onChangeHandle,
            t = e.onBlurHandle,
            d = e.value,
            m = e.name,
            p = e.className,
            h = e.icon,
            u = e.disabled,
            x = e.style,
            j = e.rows;
          return (0, c.jsxs)("div", {
            className: "".concat(r),
            children: [
              h && (0, c.jsx)("div", { className: o, children: h }),
              (0, c.jsx)(a.Z, {
                type: l,
                placeholder: s,
                name: m,
                style: x,
                className: "form-control-lg  w-100 ".concat(i, " ").concat(p),
                disabled: u,
                onChange: n,
                onBlur: t,
                value: d,
                rows: j,
              }),
            ],
          });
        },
        d = (0, n.memo)(t);
    },
    7472: function (e, s, l) {
      l(2791);
      var a = l(8118),
        n = l(184);
      s.Z = function (e) {
        var s = e.Options,
          l = e.className,
          r = e.name,
          o = e.onChangeHandle,
          i = e.onBlurHandle;
        return (0, n.jsx)("div", {
          className: "mb-0",
          children: (0, n.jsxs)(a.Z, {
            className:
              "customDropDown customDropdownRadius form-control-lg w-100 ".concat(
                l
              ),
            type: "select",
            name: r,
            onChange: o,
            onBlur: i,
            children: [
              (0, n.jsx)("option", {
                value: "",
                className: "customDropDownOption",
                children: "Select",
              }),
              s &&
                (null === s || void 0 === s
                  ? void 0
                  : s.map(function (e, s) {
                      return (0,
                      n.jsx)("option", { value: e, className: "customDropDownOption", children: e }, s);
                    })),
            ],
          }),
        });
      };
    },
    7406: function (e, s, l) {
      var a = l(1413),
        n = l(2791),
        r = l(5737),
        o = l.n(r),
        i = l(184),
        c = function (e) {
          var s = e.value,
            l = e.setFieldValue,
            n = e.defaultCountry,
            r = e.inputProps,
            c = e.className;
          return (0, i.jsx)(o(), {
            inputProps: (0, a.Z)({}, r),
            country: n,
            value: s,
            className: "".concat(c),
            onChange: function (e) {
              return l("phone", e);
            },
          });
        };
      s.Z = (0, n.memo)(c);
    },
    5639: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return E;
        },
      });
      var a = l(3433),
        n = l(1413),
        r = l(4800),
        o = l(2791),
        i = l(7472),
        c = l(1339),
        t = l(1087),
        d = l(9630),
        m = l(5987),
        p = l(6113),
        h = l(184),
        u = ["field", "form", "options"],
        x = function (e) {
          var s = e.field,
            l = e.form,
            a = e.options,
            r = (0, m.Z)(e, u);
          return (0, h.jsx)(
            p.ZP,
            (0, n.Z)(
              (0, n.Z)(
                {
                  options: a,
                  value: s.value,
                  onChange: function (e) {
                    l.setFieldValue(s.name, e);
                  },
                  isMulti: !0,
                },
                r
              ),
              {},
              { labelledBy: r.placeholder }
            )
          );
        },
        j = l(9230),
        g = l(203),
        N = l(7406),
        b = {
          bio: "",
          dob: "",
          smm: "",
          bfm: "",
          tbw: "",
          role: "",
          email: "",
          gender: "",
          injury: "",
          weight: "",
          myGoal: "",
          height: "",
          protein: "",
          lastName: "",
          password: "",
          firstName: "",
          saudiReps: "",
          experience: "",
          speciality: [],
          phoneNumber: "",
          certificates: [],
          trainingGoal: "",
          activityLevel: "",
          stcPhoneNumber: "",
          profileImage: null,
          confirmPassword: "",
          currentlyWorking: "",
          termAndConditionCheck: !1,
          daySchedules: [{ day: "", fromTime: "", toTime: "" }],
        },
        f = l(7689),
        y = l(1326),
        v = l(263),
        Z = l(6355),
        w = l(5705),
        T = l(3585),
        C = l(7823),
        B = l(3009),
        R = l(9773),
        H = l(8453),
        P = l(1971),
        I = l(8118),
        F = l(2976),
        k = function () {
          var e = (0, f.s0)(),
            s = (0, f.UO)().roleType,
            l = (0, j.$G)("").t;
          return (0, h.jsx)(C.Z, {
            children: (0, h.jsx)(w.Formik, {
              initialValues: (0, n.Z)({}, b),
              onSubmit: function (l, a) {
                var n = a.setSubmitting;
                console.log(l),
                  setTimeout(function () {
                    n(!1),
                      s === T.TRAINEE_TYPE
                        ? (localStorage.setItem("role", T.TRAINEE_TYPE),
                          e("/trainee/dashboard"))
                        : s === T.TRAINER_TYPE
                        ? (localStorage.setItem("role", T.TRAINER_TYPE),
                          e("/serviceProvider/appDownloadLink"))
                        : s === T.NUTRITIONIST_TYPE &&
                          (localStorage.setItem("role", T.NUTRITIONIST_TYPE),
                          e("/serviceProvider/appDownloadLink"));
                  }, 400);
              },
              children: function (e) {
                var n = e.values,
                  o = e.errors,
                  m = e.touched,
                  p = e.handleChange,
                  u = e.setFieldValue,
                  j = e.handleBlur,
                  b = e.handleSubmit;
                e.isSubmitting;
                return (0, h.jsxs)("form", {
                  onSubmit: b,
                  children: [
                    (0, h.jsx)(y.ConnectedFocusError, {}),
                    (0, h.jsx)(B.Z, {
                      className: "justify-content-center",
                      children: (0, h.jsxs)(R.Z, {
                        md: 2,
                        className: "my-4",
                        children: [
                          console.log(
                            null === n || void 0 === n ? void 0 : n.profileImage
                          ),
                          (0, h.jsx)("div", {
                            className:
                              "d-flex justify-content-center align-items-center",
                            children: (0, h.jsxs)("div", {
                              className:
                                "rounded-circle bgProperties position-relative",
                              children: [
                                n.profileImage
                                  ? (0, h.jsx)("img", {
                                      src: URL.createObjectURL(
                                        null === n || void 0 === n
                                          ? void 0
                                          : n.profileImage
                                      ),
                                      className:
                                        "rounded-circle bgProperties position-relative",
                                      alt: "Profile Preview",
                                      style: {
                                        height: "160px",
                                        width: "160px",
                                        objectFit: "cover",
                                      },
                                    })
                                  : (0, h.jsx)("div", {
                                      className:
                                        "rounded-circle bgProperties position-relative",
                                      style: {
                                        backgroundImage: "url(".concat(
                                          v.Z.PROFILE4_IMG,
                                          ")"
                                        ),
                                        height: "160px",
                                        width: "160px",
                                      },
                                    }),
                                (0, h.jsx)("input", {
                                  type: "file",
                                  id: "profileImage",
                                  style: { display: "none" },
                                  name: "profileImage",
                                  accept: ".png, .jpg, .jpeg",
                                  onChange: function (e) {
                                    var s = e.currentTarget.files[0];
                                    u("profileImage", s);
                                  },
                                }),
                                (0, h.jsx)("label", {
                                  htmlFor: "profileImage",
                                  className:
                                    "CameraImg d-flex justify-content-center align-items-center bgProperties cursorPointer",
                                  children: (0, h.jsx)("img", {
                                    src: v.Z.CAMERA_IMG,
                                    className: "img-fluid",
                                    alt: "",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, h.jsxs)(B.Z, {
                      children: [
                        (0, h.jsx)(R.Z, {
                          md: 12,
                          children: (0, h.jsx)("h6", {
                            className: "fw-bold",
                            children: "Your information",
                          }),
                        }),
                        (0, h.jsxs)(R.Z, {
                          lg: 6,
                          md: 6,
                          className: "mb-2",
                          children: [
                            (0, h.jsx)("div", {
                              className: "text-end",
                              style: { marginBottom: "-15px" },
                              children: "*",
                            }),
                            " ",
                            (0, h.jsx)(c.Z, {
                              className: "form-control-lg  py-3 px-4",
                              type: "text",
                              placeholder: l("signup.firstNameText"),
                              name: "firstName",
                              onChangeHandle: p,
                              onBlurHandle: j,
                              value: n.firstName,
                            }),
                            (0, h.jsx)("p", {
                              className: "errorField",
                              children:
                                o.firstName && m.firstName && o.firstName,
                            }),
                          ],
                        }),
                        (0, h.jsxs)(R.Z, {
                          lg: 6,
                          md: 6,
                          className: "mb-2",
                          children: [
                            (0, h.jsx)("div", {
                              className: "text-end",
                              style: { marginBottom: "-15px" },
                              children: "*",
                            }),
                            " ",
                            (0, h.jsx)(c.Z, {
                              className: "form-control-lg  py-3 px-4",
                              type: "text",
                              placeholder: l("signup.lastNameText"),
                              name: "lastName",
                              onChangeHandle: p,
                              onBlurHandle: j,
                              value: n.lastName,
                            }),
                            (0, h.jsx)("p", {
                              className: "errorField",
                              children: o.lastName && m.lastName && o.lastName,
                            }),
                          ],
                        }),
                        (0, h.jsxs)(R.Z, {
                          lg: 6,
                          md: 6,
                          className: "mb-2",
                          children: [
                            (0, h.jsx)("div", {
                              className: "text-end",
                              style: { marginBottom: "-15px" },
                              children: "*",
                            }),
                            (0, h.jsx)(c.Z, {
                              className: "form-control-lg  py-3 px-4",
                              type: "text",
                              name: "email",
                              placeholder: l("signup.emailText"),
                              onChangeHandle: p,
                              onBlurHandle: j,
                              value: n.email,
                            }),
                            (0, h.jsx)("p", {
                              className: "errorField",
                              children: o.email && m.email && o.email,
                            }),
                          ],
                        }),
                        (0, h.jsxs)(R.Z, {
                          lg: 6,
                          md: 6,
                          className: "mb-2",
                          children: [
                            (0, h.jsx)("div", {
                              className: "text-end",
                              style: { marginBottom: "-15px" },
                              children: "*",
                            }),
                            (0, h.jsx)(c.Z, {
                              className: "form-control-lg  py-3 px-4",
                              type: "password",
                              name: "password",
                              placeholder: l("signup.passwordText"),
                              onChangeHandle: p,
                              onBlurHandle: j,
                              value: n.password,
                            }),
                            (0, h.jsx)("p", {
                              className: "errorField",
                              children: o.password && m.password && o.password,
                            }),
                          ],
                        }),
                        (0, h.jsxs)(R.Z, {
                          lg: 6,
                          md: 6,
                          className: "mb-2",
                          children: [
                            (0, h.jsx)("div", {
                              className: "text-end",
                              style: { marginBottom: "-15px" },
                              children: "*",
                            }),
                            " ",
                            (0, h.jsx)(c.Z, {
                              className: "form-control-lg  py-3 px-4",
                              type: "password",
                              placeholder: l("signup.confirmPasswordText"),
                              name: "confirmPassword",
                              onChangeHandle: p,
                              onBlurHandle: j,
                              value: n.confirmPassword,
                            }),
                            (0, h.jsx)("p", {
                              className: "errorField",
                              children:
                                o.confirmPassword &&
                                m.confirmPassword &&
                                o.confirmPassword,
                            }),
                          ],
                        }),
                        (0, h.jsxs)(R.Z, {
                          lg: 6,
                          md: 6,
                          className: "mb-2",
                          children: [
                            (0, h.jsx)("div", {
                              className: "text-end",
                              style: { marginBottom: "-15px" },
                              children: "*",
                            }),
                            " ",
                            (0, h.jsx)(N.Z, {
                              inputProps: {
                                name: "phoneNumber",
                                required: !0,
                                className:
                                  "form-control-lg w-100 py-3 px-4 customPhoneInput border",
                              },
                              defaultCountry: "sa",
                              value: n.phoneNumber,
                              setFieldValue: u,
                            }),
                            (0, h.jsx)("p", {
                              className: "errorField",
                              children:
                                o.phoneNumber && m.phoneNumber && o.phoneNumber,
                            }),
                          ],
                        }),
                        (0, h.jsx)(R.Z, {
                          lg: 6,
                          md: 6,
                          className: "mb-2",
                          children: (0, h.jsxs)(B.Z, {
                            className: "p-0",
                            children: [
                              (0, h.jsxs)(R.Z, {
                                md: 12,
                                className: "mb-2",
                                children: [
                                  (0, h.jsx)("div", {
                                    className: "text-end",
                                    style: { marginBottom: "-15px" },
                                    children: "*",
                                  }),
                                  (0, h.jsxs)("div", {
                                    className:
                                      "d-flex genderBtn align-items-center justify-content-between gap-2",
                                    children: [
                                      (0, h.jsxs)("div", {
                                        className:
                                          "d-flex align-items-center justify-content-between form-control-lg w-100 py-3 customDropdownRadius border  bg-white ".concat(
                                            "male" === n.gender
                                              ? "selected"
                                              : ""
                                          ),
                                        onClick: function () {
                                          return u("gender", "male");
                                        },
                                        children: [
                                          (0, h.jsxs)("h6", {
                                            className: "mb-0 font14",
                                            children: [
                                              " ",
                                              l("signup.maleText"),
                                            ],
                                          }),
                                          (0, h.jsx)(Z.ZRS, {}),
                                        ],
                                      }),
                                      (0, h.jsxs)("div", {
                                        className:
                                          "d-flex align-items-center justify-content-between form-control-lg py-3 customDropdownRadius border w-100  bg-white ".concat(
                                            "female" === n.gender
                                              ? "selected"
                                              : ""
                                          ),
                                        onClick: function () {
                                          return u("gender", "female");
                                        },
                                        children: [
                                          (0, h.jsx)("h6", {
                                            className: "mb-0 font14",
                                            children: l("signup.femaleText"),
                                          }),
                                          (0, h.jsx)(Z.v7F, {}),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, h.jsx)("p", {
                                    className: "errorField",
                                    children: o.gender && m.gender && o.gender,
                                  }),
                                ],
                              }),
                              (0, h.jsxs)(R.Z, {
                                md: 12,
                                className: "mb-2",
                                children: [
                                  (0, h.jsx)("div", {
                                    className: "text-end",
                                    style: { marginBottom: "-15px" },
                                    children: "*",
                                  }),
                                  (0, h.jsxs)(H.Z, {
                                    children: [
                                      (0, h.jsx)(P.Z, {
                                        className: "",
                                        style: {
                                          borderTopLeftRadius: "14px",
                                          borderBottomLeftRadius: "14px",
                                        },
                                        children: (0, h.jsx)(Z.RUr, {}),
                                      }),
                                      (0, h.jsx)(I.Z, {
                                        type: "date",
                                        style: {
                                          fontSize: "14px",
                                          paddingTop: "16px",
                                          paddingBottom: "16px",
                                          backgroundColor: "white",
                                          color: "black",
                                          borderTopRightRadius: "14px",
                                          borderBottomRightRadius: "14px",
                                        },
                                        name: "dob",
                                        placeholder: "Date of Birthday",
                                        className: "form-control-lg px-4",
                                        onChange: p,
                                        onBlur: j,
                                        value: n.dob,
                                      }),
                                    ],
                                  }),
                                  (0, h.jsx)("p", {
                                    className: "errorField",
                                    children: o.dob && m.dob && o.dob,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        s !== T.TRAINEE_TYPE &&
                          (0, h.jsxs)(h.Fragment, {
                            children: [
                              (0, h.jsx)(R.Z, {
                                lg: 6,
                                md: 6,
                                className: "mb-2",
                                children: (0, h.jsx)(B.Z, {
                                  className: "p-0",
                                  children: (0, h.jsxs)(R.Z, {
                                    md: 12,
                                    className: "mb-2",
                                    children: [
                                      (0, h.jsx)("div", {
                                        className: "text-end",
                                        style: { marginBottom: "-15px" },
                                        children: "*",
                                      }),
                                      " ",
                                      (0, h.jsx)(c.Z, {
                                        className: "form-control-lg  py-3 px-4",
                                        type: "textarea",
                                        style: { minHeight: "115px" },
                                        placeholder: l("signup.addBioText"),
                                        name: "bio",
                                        onChangeHandle: p,
                                        onBlurHandle: j,
                                        value: n.bio,
                                      }),
                                      (0, h.jsx)("p", {
                                        className: "errorField",
                                        children: o.bio && m.bio && o.bio,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, h.jsxs)(R.Z, {
                                lg: 6,
                                md: 6,
                                className: "mb-2",
                                children: [
                                  (0, h.jsx)("div", {
                                    className: "text-end",
                                    style: { marginBottom: "-15px" },
                                    children: "*",
                                  }),
                                  (0, h.jsx)(c.Z, {
                                    className: "form-control-lg  py-3 px-4",
                                    type: "number",
                                    placeholder: "Year of Experience",
                                    name: "experience",
                                    onChangeHandle: p,
                                    onBlurHandle: j,
                                    value: n.experience,
                                  }),
                                  (0, h.jsx)("p", {
                                    className: "errorField",
                                    children:
                                      o.experience &&
                                      m.experience &&
                                      o.experience,
                                  }),
                                ],
                              }),
                              (0, h.jsxs)(R.Z, {
                                lg: 6,
                                md: 6,
                                className: "mb-2",
                                children: [
                                  (0, h.jsx)("div", {
                                    className: "text-end",
                                    style: { marginBottom: "-15px" },
                                    children: "*",
                                  }),
                                  (0, h.jsx)(i.Z, {
                                    className: "border py-3 px-4 mb-0",
                                    Options: T.roleOptions,
                                    name: "role",
                                    onChangeHandle: p,
                                    onBlurHandle: j,
                                    value: n.role,
                                  }),
                                  (0, h.jsx)("p", {
                                    className: "errorField",
                                    children: o.role && m.role && o.role,
                                  }),
                                ],
                              }),
                              s === T.NUTRITIONIST_TYPE &&
                                (0, h.jsx)(R.Z, {
                                  lg: 6,
                                  md: 6,
                                  className: "mb-2",
                                  children: (0, h.jsx)(i.Z, {
                                    className: "border py-3 px-4 mb-0",
                                    Options: [
                                      "What you will provide to end user",
                                    ],
                                    name: "role",
                                    onChangeHandle: p,
                                    onBlurHandle: j,
                                  }),
                                }),
                            ],
                          }),
                      ],
                    }),
                    (0, h.jsxs)(B.Z, {
                      className: "mb-3",
                      children: [
                        (0, h.jsx)(R.Z, {
                          md: 12,
                          children: (0, h.jsx)("h6", {
                            className: "fw-bold",
                            children:
                              s !== T.TRAINEE_TYPE
                                ? "Attach Your Certificates"
                                : "In Body",
                          }),
                        }),
                        console.log(
                          null === n || void 0 === n ? void 0 : n.certificates
                        ),
                        (0, h.jsx)(R.Z, {
                          children: (0, h.jsxs)("div", {
                            className:
                              "form-group multi-preview d-flex flex-wrap align-items-center",
                            children: [
                              null === n || void 0 === n
                                ? void 0
                                : n.certificates.map(function (e, s) {
                                    return (0, h.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "col-sm-12 col-md-2 col-lg-2 col-xl-2 mx-2 position-relative BorderRadius border",
                                        children: [
                                          (0, h.jsx)("img", {
                                            src: URL.createObjectURL(e.file),
                                            alt: "".concat(s + 1),
                                            className:
                                              "uploaded-image BorderRadius",
                                            style: {
                                              width: "100%",
                                              height: "170px",
                                              backgroundSize: "cover",
                                              backgroundPosition: "center",
                                            },
                                          }),
                                          (0, h.jsx)("button", {
                                            type: "button",
                                            className: "deleteButton",
                                            onClick: function () {
                                              var e = (0, a.Z)(n.certificates);
                                              e.splice(s, 1),
                                                u("certificates", e);
                                            },
                                            children: "\u2716",
                                          }),
                                        ],
                                      },
                                      s
                                    );
                                  }),
                              (0, h.jsxs)(F.Z, {
                                id: "UploadImgLabel",
                                className: "BorderRadius text-center mb-0",
                                style: {
                                  minWidth: "220px",
                                  maxHeight: "170px",
                                },
                                children: [
                                  (0, h.jsx)("img", {
                                    src: v.Z.UPLOAD_ICON,
                                    alt: "",
                                  }),
                                  (0, h.jsx)("input", {
                                    id: "file-upload",
                                    type: "file",
                                    accept: ".png, .jpg, .jpeg",
                                    onChange: function (e) {
                                      var s = e.currentTarget.files;
                                      if (s.length > 0) {
                                        var l = Array.from(s).map(function (e) {
                                          return { file: e };
                                        });
                                        u(
                                          "certificates",
                                          [].concat(
                                            (0, a.Z)(n.certificates),
                                            (0, a.Z)(l)
                                          )
                                        );
                                      }
                                    },
                                    multiple: !0,
                                    style: { display: "none" },
                                  }),
                                  (0, h.jsx)("h6", {
                                    children: "Upload Image",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    s === T.TRAINEE_TYPE &&
                      (0, h.jsx)(h.Fragment, {
                        children: (0, h.jsxs)(B.Z, {
                          className: "mb-3",
                          children: [
                            (0, h.jsx)(R.Z, {
                              md: 12,
                              className: "mb-3",
                              children: (0, h.jsx)("h6", {
                                className: "fw-bold mt-2",
                                children: "Body Information",
                              }),
                            }),
                            (0, h.jsxs)(R.Z, {
                              md: 6,
                              className: "mb-3",
                              children: [
                                (0, h.jsx)(c.Z, {
                                  className: "form-control-lg  py-3 px-4",
                                  type: "number",
                                  placeholder: "Weight (lbs / kg)",
                                  name: "weight",
                                  onChangeHandle: p,
                                  onBlurHandle: j,
                                  value: n.weight,
                                }),
                                (0, h.jsx)("p", {
                                  className: "errorField",
                                  children: o.weight && m.weight && o.weight,
                                }),
                              ],
                            }),
                            (0, h.jsxs)(R.Z, {
                              md: 6,
                              className: "mb-3",
                              children: [
                                (0, h.jsx)(c.Z, {
                                  className: "form-control-lg  py-3 px-4",
                                  type: "number",
                                  placeholder: "Hight (cm / feet)",
                                  name: "height",
                                  onChangeHandle: p,
                                  onBlurHandle: j,
                                  value: n.height,
                                }),
                                (0, h.jsx)("p", {
                                  className: "errorField",
                                  children: o.height && m.height && o.height,
                                }),
                              ],
                            }),
                            (0, h.jsxs)(R.Z, {
                              md: 6,
                              className: "mb-3",
                              children: [
                                (0, h.jsx)(c.Z, {
                                  className: "form-control-lg  py-3 px-4",
                                  type: "number",
                                  placeholder: "Skeletal Muscle Mass",
                                  name: "smm",
                                  onChangeHandle: p,
                                  onBlurHandle: j,
                                  value: n.smm,
                                }),
                                (0, h.jsx)("p", {
                                  className: "errorField",
                                  children: o.smm && m.smm && o.smm,
                                }),
                              ],
                            }),
                            (0, h.jsxs)(R.Z, {
                              md: 6,
                              className: "mb-3",
                              children: [
                                (0, h.jsx)(c.Z, {
                                  className: "form-control-lg  py-3 px-4",
                                  type: "number",
                                  placeholder: "Body Fat Mass",
                                  name: "bfm",
                                  onChangeHandle: p,
                                  onBlurHandle: j,
                                  value: n.bfm,
                                }),
                                (0, h.jsx)("p", {
                                  className: "errorField",
                                  children: o.bfm && m.bfm && o.bfm,
                                }),
                              ],
                            }),
                            (0, h.jsxs)(R.Z, {
                              md: 6,
                              className: "mb-3",
                              children: [
                                (0, h.jsx)(c.Z, {
                                  className: "form-control-lg  py-3 px-4",
                                  type: "number",
                                  placeholder: "Total Body Water",
                                  name: "tbw",
                                  onChangeHandle: p,
                                  onBlurHandle: j,
                                  value: n.tbw,
                                }),
                                (0, h.jsx)("p", {
                                  className: "errorField",
                                  children: o.tbw && m.tbw && o.tbw,
                                }),
                              ],
                            }),
                            (0, h.jsxs)(R.Z, {
                              md: 6,
                              className: "mb-3",
                              children: [
                                (0, h.jsx)(c.Z, {
                                  className: "form-control-lg py-3 px-4",
                                  type: "number",
                                  placeholder: "Protein",
                                  name: "protein",
                                  onChangeHandle: p,
                                  onBlurHandle: j,
                                  value: n.protein,
                                }),
                                (0, h.jsx)("p", {
                                  className: "errorField",
                                  children: o.protein && m.protein && o.protein,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    s === T.TRAINER_TYPE &&
                      (0, h.jsx)(B.Z, {
                        className: "mb-2",
                        children: (0, h.jsx)(R.Z, {
                          children: (0, h.jsxs)("div", {
                            className: "form-group",
                            children: [
                              (0, h.jsx)("h6", {
                                className: "mb-2 fw-bold",
                                children: "Select your area of specialty *",
                              }),
                              (0, h.jsx)(w.Field, {
                                name: "speciality",
                                component: x,
                                options: T.specialityOptions,
                                placeholder: "Select options",
                                className: "border-0 customMultiSelector",
                              }),
                            ],
                          }),
                        }),
                      }),
                    s === T.TRAINEE_TYPE &&
                      (0, h.jsxs)(B.Z, {
                        className: "mb-3",
                        children: [
                          (0, h.jsxs)(R.Z, {
                            md: 6,
                            children: [
                              (0, h.jsx)("h6", {
                                className: "mb-2 fw-bold",
                                children: "My goal",
                              }),
                              (0, h.jsx)(c.Z, {
                                className: "form-control-lg  py-3 px-4",
                                type: "text",
                                placeholder:
                                  "I want to lose my 5kg weight in 4 weeks",
                                name: "myGoal",
                                onChangeHandle: p,
                                onBlurHandle: j,
                                value: n.myGoal,
                              }),
                              (0, h.jsx)("p", {
                                className: "errorField",
                                children: o.myGoal && m.myGoal && o.myGoal,
                              }),
                            ],
                          }),
                          (0, h.jsxs)(R.Z, {
                            md: 6,
                            children: [
                              (0, h.jsx)("h6", {
                                className: "mb-2 fw-bold",
                                children: "Training goal",
                              }),
                              (0, h.jsx)(B.Z, {
                                className: "training",
                                children: (0, h.jsx)(R.Z, {
                                  md: 12,
                                  className: "mb-2",
                                  children: (0, h.jsx)(i.Z, {
                                    className: " shadow-0 py-3 px-4 border",
                                    Options: T.trainingGoalOptions,
                                    name: "trainingGoal",
                                    onChangeHandle: p,
                                    onBlurHandle: j,
                                    value: n.trainingGoal,
                                  }),
                                }),
                              }),
                              (0, h.jsx)("p", {
                                className: "errorField",
                                children:
                                  o.trainingGoal &&
                                  m.trainingGoal &&
                                  o.trainingGoal,
                              }),
                            ],
                          }),
                          (0, h.jsxs)(R.Z, {
                            md: 6,
                            children: [
                              (0, h.jsx)("h6", {
                                className: "mb-2 fw-bold",
                                children: "Any Food Sensitive",
                              }),
                              (0, h.jsx)(c.Z, {
                                className: "form-control-lg  py-3 px-4",
                                type: "text",
                                placeholder: "See food",
                                name: "food_sensitive",
                                onChangeHandle: p,
                                onBlurHandle: j,
                                value: n.food_sensitive,
                              }),
                            ],
                          }),
                          (0, h.jsxs)(R.Z, {
                            md: 6,
                            children: [
                              (0, h.jsx)("h6", {
                                className: "mb-2 fw-bold",
                                children: "Activity Level",
                              }),
                              (0, h.jsx)(B.Z, {
                                className: "activity",
                                children: (0, h.jsx)(R.Z, {
                                  md: 12,
                                  className: "mb-2",
                                  children: (0, h.jsx)(i.Z, {
                                    className: " shadow-0 py-3 px-4 border",
                                    Options: T.activityLevelOptions,
                                    name: "activityLevel",
                                    onChangeHandle: p,
                                    onBlurHandle: j,
                                    value: n.activityLevel,
                                  }),
                                }),
                              }),
                              (0, h.jsx)("p", {
                                className: "errorField",
                                children:
                                  o.activityLevel &&
                                  m.activityLevel &&
                                  o.activityLevel,
                              }),
                            ],
                          }),
                          (0, h.jsxs)(R.Z, {
                            lg: 6,
                            md: 6,
                            className: "mb-2",
                            children: [
                              (0, h.jsx)("h6", {
                                className: "mb-2 fw-bold",
                                children: "Any Injury",
                              }),
                              (0, h.jsx)(B.Z, {
                                className: "p-0",
                                children: (0, h.jsxs)(R.Z, {
                                  md: 12,
                                  className: "mb-2",
                                  children: [
                                    (0, h.jsx)(c.Z, {
                                      className: "form-control-lg  py-3 px-4",
                                      type: "textarea",
                                      style: { minHeight: "20px" },
                                      placeholder: "Describe your injury...",
                                      name: "injury",
                                      onChangeHandle: p,
                                      onBlurHandle: j,
                                      value: n.injury,
                                    }),
                                    (0, h.jsx)("p", {
                                      className: "errorField",
                                      children:
                                        o.injury && m.injury && o.injury,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    s !== T.TRAINEE_TYPE &&
                      (0, h.jsxs)(h.Fragment, {
                        children: [
                          (0, h.jsxs)(B.Z, {
                            className: "mb-3",
                            children: [
                              s === T.TRAINER_TYPE &&
                                (0, h.jsxs)(R.Z, {
                                  md: 6,
                                  children: [
                                    (0, h.jsx)("h6", {
                                      className: "mb-2 fw-bold",
                                      children: "Your SAUDIREPS number",
                                    }),
                                    (0, h.jsx)(c.Z, {
                                      className: "form-control-lg  py-3 px-4",
                                      type: "number",
                                      placeholder: "Your SAUDIREPS number",
                                      name: "saudiReps",
                                      onChangeHandle: p,
                                      onBlurHandle: j,
                                      value: n.saudiReps,
                                    }),
                                    (0, h.jsx)("p", {
                                      className: "errorField",
                                      children:
                                        o.saudiReps &&
                                        m.saudiReps &&
                                        o.saudiReps,
                                    }),
                                  ],
                                }),
                              s === T.NUTRITIONIST_TYPE &&
                                (0, h.jsxs)(R.Z, {
                                  md: 6,
                                  children: [
                                    (0, h.jsx)("h6", {
                                      className: "mb-2 fw-bold",
                                      children:
                                        "Enter your professional license number",
                                    }),
                                    (0, h.jsx)(c.Z, {
                                      className: "form-control-lg  py-3 px-4",
                                      type: "number",
                                      placeholder: "001122",
                                      name: "saudiReps",
                                      onChangeHandle: p,
                                      onBlurHandle: j,
                                      value: n.saudiReps,
                                    }),
                                  ],
                                }),
                              (0, h.jsxs)(R.Z, {
                                lg: 6,
                                md: 6,
                                className: "mb-2",
                                children: [
                                  (0, h.jsx)("h6", {
                                    className: "mb-2 fw-bold",
                                    children:
                                      "Enter the phone number that has an STC Pay Account *",
                                  }),
                                  (0, h.jsx)(N.Z, {
                                    inputProps: {
                                      name: "stcPhoneNumber",
                                      required: !0,
                                      className:
                                        "form-control-lg w-100  py-3 px-4 customPhoneInput border",
                                    },
                                    defaultCountry: "sa",
                                    value: n.stcPhoneNumber,
                                    setFieldValue: u,
                                  }),
                                  (0, h.jsx)("p", {
                                    className: "errorField",
                                    children:
                                      o.stcPhoneNumber &&
                                      m.stcPhoneNumber &&
                                      o.stcPhoneNumber,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, h.jsx)(B.Z, {
                            children: (0, h.jsxs)(R.Z, {
                              lg: 12,
                              md: 12,
                              children: [
                                (0, h.jsx)("h6", {
                                  className: "mb-2 fw-bold",
                                  children:
                                    "You are available to respond on your ".concat(
                                      s === T.NUTRITIONIST_TYPE
                                        ? "subscriber"
                                        : "trainee",
                                      " *"
                                    ),
                                }),
                                (0, h.jsx)(w.FieldArray, {
                                  name: "daySchedules",
                                  className: "d-flex",
                                  render: function (e) {
                                    return (0, h.jsxs)(h.Fragment, {
                                      children: [
                                        n.daySchedules.map(function (s, l) {
                                          return (0, h.jsxs)(
                                            B.Z,
                                            {
                                              className: "mb-1",
                                              children: [
                                                (0, h.jsxs)(R.Z, {
                                                  lg: 5,
                                                  md: 5,
                                                  className: "mb-2",
                                                  children: [
                                                    (0, h.jsxs)(w.Field, {
                                                      as: "select",
                                                      name: "daySchedules.".concat(
                                                        l,
                                                        ".day"
                                                      ),
                                                      className:
                                                        "customDropDown customDropdownRadius form-control-lg w-100 selectField border px-4",
                                                      style: {
                                                        paddingTop: "12px",
                                                        paddingBottom: "12px",
                                                      },
                                                      children: [
                                                        (0, h.jsx)("option", {
                                                          className:
                                                            "customDropDownOption text-black-custom",
                                                          value: "",
                                                          label: "Select",
                                                        }),
                                                        null ===
                                                          T.weekDaysOptions ||
                                                        void 0 ===
                                                          T.weekDaysOptions
                                                          ? void 0
                                                          : T.weekDaysOptions.map(
                                                              function (e, s) {
                                                                return (0,
                                                                h.jsx)(
                                                                  "option",
                                                                  {
                                                                    className:
                                                                      "customDropDownOption text-black-custom border",
                                                                    value:
                                                                      e.value,
                                                                    label:
                                                                      e.label,
                                                                  },
                                                                  s
                                                                );
                                                              }
                                                            ),
                                                      ],
                                                    }),
                                                    (0, h.jsx)(w.ErrorMessage, {
                                                      name: "daySchedules.".concat(
                                                        l,
                                                        ".day"
                                                      ),
                                                      component: "p",
                                                      className: "errorField",
                                                    }),
                                                  ],
                                                }),
                                                (0, h.jsxs)(R.Z, {
                                                  md: 3,
                                                  className: "mb-2",
                                                  children: [
                                                    (0, h.jsx)(w.Field, {
                                                      name: "daySchedules.".concat(
                                                        l,
                                                        ".fromTime"
                                                      ),
                                                      type: "time",
                                                      className:
                                                        "customDropdownRadius form-control select-field py-3 px-4 border",
                                                    }),
                                                    (0, h.jsx)(w.ErrorMessage, {
                                                      name: "daySchedules.".concat(
                                                        l,
                                                        ".fromTime"
                                                      ),
                                                      component: "p",
                                                      className: "errorField",
                                                    }),
                                                  ],
                                                }),
                                                (0, h.jsxs)(R.Z, {
                                                  md: 3,
                                                  className: "mb-2",
                                                  children: [
                                                    (0, h.jsx)(w.Field, {
                                                      name: "daySchedules.".concat(
                                                        l,
                                                        ".toTime"
                                                      ),
                                                      type: "time",
                                                      className:
                                                        "customDropdownRadius form-control select-field py-3 px-4 border",
                                                    }),
                                                    (0, h.jsx)(w.ErrorMessage, {
                                                      name: "daySchedules.".concat(
                                                        l,
                                                        ".toTime"
                                                      ),
                                                      component: "p",
                                                      className: "errorField",
                                                    }),
                                                  ],
                                                }),
                                                (0, h.jsx)(R.Z, {
                                                  md: 1,
                                                  className: "mb-2",
                                                  children: (0, h.jsx)("div", {
                                                    className:
                                                      "d-flex align-items-center justify-content-end h-100",
                                                    children: (0, h.jsx)(
                                                      g.fVU,
                                                      {
                                                        className:
                                                          "cursorPointer",
                                                        size: 22,
                                                        onClick: function () {
                                                          return e.remove(l);
                                                        },
                                                      }
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            },
                                            l
                                          );
                                        }),
                                        (0, h.jsx)("span", {
                                          className:
                                            "textYellow fs-6 cursorPointer",
                                          onClick: function () {
                                            return e.push({
                                              day: "",
                                              fromTime: "",
                                              toTime: "",
                                            });
                                          },
                                          children: "Add More +",
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              ],
                            }),
                          }),
                          (0, h.jsxs)(B.Z, {
                            className: "mb-3",
                            children: [
                              (0, h.jsx)("h6", {
                                className: "mb-2 fw-bold",
                                children: "Are you currently working?",
                              }),
                              (0, h.jsxs)(R.Z, {
                                md: 6,
                                className: "mb-2",
                                children: [
                                  (0, h.jsxs)("div", {
                                    className:
                                      "d-flex currentlyWorkingBtn align-items-center justify-content-between gap-2",
                                    children: [
                                      (0, h.jsx)("div", {
                                        className:
                                          "d-flex align-items-center py-3 justify-content-between form-control-lg border customDropdownRadius w-100  bg-white ".concat(
                                            "yes" === n.currentlyWorking
                                              ? "selected"
                                              : ""
                                          ),
                                        onClick: function () {
                                          return u("currentlyWorking", "yes");
                                        },
                                        children: (0, h.jsx)("h6", {
                                          className: "mb-0 font14",
                                          children: "Yes",
                                        }),
                                      }),
                                      (0, h.jsx)("div", {
                                        className:
                                          "d-flex align-items-center py-3 justify-content-between form-control-lg border customDropdownRadius w-100  bg-white ".concat(
                                            "no" === n.currentlyWorking
                                              ? "selected"
                                              : ""
                                          ),
                                        onClick: function () {
                                          return u("currentlyWorking", "no");
                                        },
                                        children: (0, h.jsx)("h6", {
                                          className: "mb-0 font14",
                                          children: "No",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, h.jsx)("p", {
                                    className: "errorField",
                                    children:
                                      o.currentlyWorking &&
                                      m.currentlyWorking &&
                                      o.currentlyWorking,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    s !== T.TRAINEE_TYPE &&
                      (0, h.jsxs)(B.Z, {
                        children: [
                          (0, h.jsx)("div", {
                            className: "d-flex mb-2",
                            children: (0, h.jsx)(r.Z, {
                              label: (0, h.jsxs)("p", {
                                className: "mb-0 fs-6",
                                children: [
                                  "The money will be transferred to your STC Pay account, please read the",
                                  " ",
                                  (0, h.jsx)(t.rU, {
                                    to: "/termAndCondition",
                                    children: (0, h.jsx)("span", {
                                      className: "textYellow",
                                      children: "terms and conditions",
                                    }),
                                  }),
                                ],
                              }),
                              name: "termAndConditionCheck",
                              onChangeHandle: p,
                              onBlurHandle: j,
                              checked: n.termAndConditionCheck,
                            }),
                          }),
                          (0, h.jsx)("p", {
                            className: "errorField",
                            children:
                              o.termAndConditionCheck &&
                              m.termAndConditionCheck &&
                              o.termAndConditionCheck,
                          }),
                        ],
                      }),
                    (0, h.jsx)(B.Z, {
                      className: "pb-5",
                      children: (0, h.jsx)(R.Z, {
                        md: 12,
                        children: (0, h.jsx)(d.Z, {
                          type: "submit",
                          text: "Next",
                          className: "w-100 py-2",
                        }),
                      }),
                    }),
                  ],
                });
              },
            }),
          });
        },
        E = (0, o.memo)(k);
    },
  },
]);
//# sourceMappingURL=5639.6aba28dd.chunk.js.map
