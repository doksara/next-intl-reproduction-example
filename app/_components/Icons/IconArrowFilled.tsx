import { IconProps } from './interface';

export const IconArrowFilled = ({
  width = 12,
  height = 12,
  fill = '#F0EEDF',
  transform,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      transform={transform}
      style={{ transition: 'all .2s linear' }}
    >
      <g clipPath="url(#clip0_1832_2289)">
        <path
          d="M6.60383 10.0443L10.1875 4.06749L9.58324 3.00256L2.41591 3.00256L1.81165 4.06749L5.39532 10.0443L6.60383 10.0443Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1832_2289">
          <rect
            width="10.0886"
            height="12"
            fill="white"
            transform="translate(12 0.955688) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
