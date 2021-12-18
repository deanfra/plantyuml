import React from "react";

type Props = {
  svg: string;
};

const getUrl = (svg: string) => {
  if (svg) {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    return URL.createObjectURL(blob);
  } else {
    return "";
  }
};

export const SVG = ({ svg }: Props) => (
  <>
    <div dangerouslySetInnerHTML={{ __html: svg || "" }} />
    <div className="flex justify-center pt-6">
      <a
        className={buttonStyle}
        download="plantyuml-diagram"
        href={getUrl(svg)}
      >
        Download
      </a>
    </div>
  </>
);

const buttonStyle =
  "text-xs px-2 py-1 border-gray-500 hover:border-teal-600 text-gray-500 hover:text-white hover:bg-teal-400 border-2 rounded-md";
