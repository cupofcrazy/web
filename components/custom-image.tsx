import { urlFor } from "@/utils/sanity-image.builder";
import Image, { ImageProps } from "next/image";
import cn from "classnames";

type ImageCompProps = {
  src: string;
  alt: string;
  aspectRatio?: number | string
};


export const CustomImage = ({ src, alt, aspectRatio = 4/3, className, ...props }: ImageCompProps & ImageProps) => {
  const url = urlFor(src).url();
  return (
    <div className={className}>
      <Image
        className={`rounded-lg border object-cover w-full`}
        src={url}
        alt={alt || ""}
        width={props.width}
        height={props.height}
        blurDataURL={urlFor(src).width(24).blur(10).url()}
        placeholder="blur"
        sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          40vw"
        style={{ aspectRatio }}
        {...props}
      />
    </div>
  );
};