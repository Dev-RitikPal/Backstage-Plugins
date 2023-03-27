import React from 'react';

interface IVideoProps {
  src: string;
  width?: string;
  height?: string;
  title?: string;
}
export default function VideoComponent({
  width,
  height,
  src,
  title,
}: IVideoProps) {
  if (!src) {
    return <></>;
  }
  return (
    <iframe
      title={title ? title : 'video'}
      src={src}
      width={width ? width : '500'}
      height={height ? height : '360'}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
    />
  );
}
