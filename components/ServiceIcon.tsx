type IconKey = "vinyl" | "sticker" | "plaswood" | "acrylic" | "lightbox" | "standy";

const paths: Record<IconKey, React.ReactNode> = {
  vinyl: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="1" />
      <line x1="7" y1="7" x2="7" y2="4" />
      <line x1="17" y1="7" x2="17" y2="4" />
    </>
  ),
  sticker: (
    <>
      <rect x="4" y="4" width="11" height="11" rx="2" />
      <rect x="9" y="9" width="11" height="11" rx="2" />
    </>
  ),
  plaswood: <path d="M12 4l6 16M12 4L6 20M8.5 14h7" />,
  acrylic: <path d="M12 3l9 9-9 9-9-9 9-9z" />,
  lightbox: (
    <>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.9" y1="4.9" x2="6.3" y2="6.3" />
      <line x1="17.7" y1="17.7" x2="19.1" y2="19.1" />
      <line x1="4.9" y1="19.1" x2="6.3" y2="17.7" />
      <line x1="17.7" y1="6.3" x2="19.1" y2="4.9" />
    </>
  ),
  standy: (
    <>
      <path d="M4 20L12 7l8 13" />
      <line x1="7" y1="15" x2="17" y2="15" />
    </>
  ),
};

export function ServiceIcon({
  icon,
  className,
  stroke = "currentColor",
}: {
  icon: IconKey;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[icon]}
    </svg>
  );
}
