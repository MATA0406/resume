/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
// Styles
import { Card } from '../index';

interface ImageInfo {
  name: string;
  image: string;
}

interface Props {
  imageInfo: ImageInfo;
  [key: string]: any;
}

const ImageCard = ({ imageInfo, ...props }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        marginTop: 30,
        transition: '.30s all',
        '&:hover': {
          opacity: 0.8,
          marginTop: 20,
        },
      }}
    >
      <Card
        css={{ width: 100, height: 100 }}
        onMouseLeave={() => setIsHover(false)}
        onMouseOver={() => setIsHover(true)}
        {...props}
      >
        <img
          src={imageInfo?.image}
          css={{ width: 100, height: 100, opacity: isHover ? 0.3 : undefined }}
          alt=""
        />
        {isHover && (
          <span
            css={{
              textAlign: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
              fontSize: 18,
              cursor: 'default',
            }}
          >
            {imageInfo?.name}
          </span>
        )}
      </Card>
    </div>
  );
};
export default ImageCard;
