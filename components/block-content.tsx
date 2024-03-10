"use client"

import MuxPlayer from "@mux/mux-player-react"; 
import {
  PortableText,
  type PortableTextReactComponents,
  type PortableTextProps,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import { Slider } from "./slider";
import { CustomImage } from "./custom-image";

interface BlockContentProps extends PortableTextProps {}

export const BlockContent = (props: BlockContentProps) => {
  return (
    <div className="prose prose-neutral w-full max-w-none">
      <PortableText {...props} components={components} />
    </div>
  );
};

// @ts-ignore
const components: PortableTextReactComponents = {
  types: {
    a11yImage: ({ value, ...props }) => {
      return (
        <CustomImage
          placeholder="blur"
          src={value.image}
          alt={value.alt || ""}
          width={value.image.metadata.dimensions.width}
          height={value.image.metadata.dimensions.height}
        />
      );
    },
    slideshow: ({ value, ...props }) => {
      return (
        <Slider slides={value.images} />
      )
    },
    "mux.video": ({ value, ...props }) => {
      return (
        <MuxPlayer playbackId={value.asset.playbackId} />
      );
    }
  },
  marks: {
    link: ({children, value}) => {
      const rel = 'noreferrer noopener'
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  block: {
    unknownBlockStyle: ({ children }) => <p className="text-red-600">{children}</p>,
  }
};




