import { useEffect, useState } from "react";

export type Route =
  | { name: "landing" }
  | { name: "quiz" }
  | { name: "result" }
  | { name: "type"; id: string }
  | { name: "gallery" };

export function parseHash(): Route {
  const h = window.location.hash.replace(/^#/, "");
  if (h.startsWith("/type/")) {
    return { name: "type", id: decodeURIComponent(h.slice("/type/".length)) };
  }
  if (h === "/quiz") return { name: "quiz" };
  if (h === "/result") return { name: "result" };
  if (h === "/gallery") return { name: "gallery" };
  return { name: "landing" };
}

export function navigate(route: Route) {
  let hash = "";
  switch (route.name) {
    case "landing":
      hash = "";
      break;
    case "quiz":
      hash = "#/quiz";
      break;
    case "result":
      hash = "#/result";
      break;
    case "gallery":
      hash = "#/gallery";
      break;
    case "type":
      hash = `#/type/${encodeURIComponent(route.id)}`;
      break;
  }
  if (window.location.hash !== hash) {
    if (hash === "") {
      history.pushState(null, "", window.location.pathname + window.location.search);
      // 手动派发 hashchange 让监听者收到
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      window.location.hash = hash;
    }
  }
  window.scrollTo(0, 0);
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash);
  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);
  return route;
}
