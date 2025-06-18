// app/components/ImageComponent.tsx
import { FC } from "react";

type ImageComponentProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const BoxImage: FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  );
};

export default BoxImage;
