import { useRouter } from "next/router";
import { useEffect } from "react";
import languageDetector from "./languageDetector";

export const useRedirect = (toUrl?: string) => {
  const router = useRouter();
  const to = toUrl || router.asPath || "";

  useEffect(() => {
    const detectedLng = languageDetector.detect()!;
    if (router.route === "/404" && to.startsWith("/" + detectedLng)) {
      router.replace("/" + detectedLng + "/404");
      return;
    }

    languageDetector.cache?.(detectedLng);
    router.replace("/" + detectedLng + to);
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

export const getRedirect = (to: string) => () => {
  useRedirect(to);
  return <></>;
};
