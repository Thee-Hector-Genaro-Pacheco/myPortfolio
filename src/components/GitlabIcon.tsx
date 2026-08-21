import React from 'react';

interface GitlabIconProps {
  size?: number;
  className?: string;
}

export const GitlabIcon: React.FC<GitlabIconProps> = ({ size = 18, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m22 13.29-1.92-5.91a.42.42 0 0 0-.16-.21.4.4 0 0 0-.53.07l-2.73 2.76h-9.32L4.61 7.24a.4.4 0 0 0-.53-.07.42.42 0 0 0-.16.21L2 13.29a.74.74 0 0 0 .27.83L12 21l9.73-6.88a.74.74 0 0 0 .27-.83Z" />
    </svg>
  );
};
