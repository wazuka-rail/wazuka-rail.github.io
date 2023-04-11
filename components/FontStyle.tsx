import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  preload: false,
});

const FontStyle = () => {
  return (
    <style jsx global>
      {`
          :root {
            --font-noto-sans: "Noto Sans JP", "Noto Sans CJK JP", "Source Han Sans JP", "Source Han Sans", ${noto.style.fontFamily};
          }
      `}
    </style>
  );
};

export default FontStyle;
