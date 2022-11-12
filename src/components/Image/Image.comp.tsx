import React, { FC, useCallback, useState, useEffect } from 'react';
export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderImg?: string;
  errorImg?: string;
}

export const ImageDefaultProps = {
  placeholderImg: '',
  errorImg: '',
};

export const ImageNamespace = 'ImageLazy';

const Image: FC<IImageProps> = ({
  src,
  placeholderImg,
  errorImg,
  ...props
}) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);

  // Loader Handling
  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);

  // Error Handling
  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);

  // Serve Resource
  useEffect(() => {
    const img = document.createElement('img');
    img.src = src as string;
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);
    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [src, onLoad, onError]);

  return (
    <img
      {...props}
      key={imgSrc}
      alt={imgSrc}
      src={imgSrc}
      className={`image-lazy ${props.className || ''}`}
    />
  );
};

Image.displayName = ImageNamespace;
Image.defaultProps = ImageDefaultProps;
export default Image;
