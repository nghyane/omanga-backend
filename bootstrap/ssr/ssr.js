import * as jsxRuntime from "react/jsx-runtime";
import { Head, createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
function Welcome({ auth, laravelVersion, phpVersion }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center py-6", children: /* @__PURE__ */ jsx("img", { className: "h-8 md:h-12", src: "/images/logo.svg", alt: "Laravel" }) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center", children: [
      "Laravel v",
      laravelVersion,
      " (PHP v",
      phpVersion,
      ")"
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    title: (title) => `${title} - ${appName}`,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Welcome.jsx": __vite_glob_0_0 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
