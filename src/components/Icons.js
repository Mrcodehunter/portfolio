/**
 * Shared inline SVG icons.
 *
 * All icons are fill-based and inherit `currentColor`, so the surrounding
 * element controls the colour. Size defaults to 18px but is overridable by
 * props or by CSS (a CSS width/height rule wins over these attributes).
 */

const base = (props) => ({
  viewBox: "0 0 24 24",
  width: 18,
  height: 18,
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false",
  ...props,
});

export function MailIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z" />
    </svg>
  );
}

export function ScholarIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Zm-1 13.5-7-3.18V18c0 .83.67 1.5 1.5 1.5H17v-2H6.91c-.51 0-.91-.4-.91-.9v-2.28l5 2.27c.62.28 1.38.28 2 0Z" />
    </svg>
  );
}

export function GitHubIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 .5A12 12 0 0 0 0 12.8c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2c-3.3.8-4-1.4-4-1.4-.6-1.4-1.5-1.8-1.5-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3.1 1.4 3.8 1 .1-.9.5-1.4.9-1.7-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.8.1-3.7 0 0 1-.3 3.6 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.6-1.6 3.6-1.3 3.6-1.3.7 1.9.3 3.4.1 3.7.8.9 1.3 2.1 1.3 3.5 0 4.9-2.8 5.9-5.5 6.2.5.4 1 1.2 1 2.4v3.5c0 .3.2.7.8.6A12.3 12.3 0 0 0 24 12.8 12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.44v6.3zM5.34 7.44c-1.14 0-2.07-.93-2.07-2.08 0-1.15.93-2.08 2.07-2.08 1.15 0 2.08.93 2.08 2.08 0 1.15-.93 2.08-2.08 2.08zM7.11 20.45H3.58V9h3.53v11.45z" />
    </svg>
  );
}

export function DocIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 2 4 4h-4zM8 12h8v2H8zm0 4h8v2H8z" />
    </svg>
  );
}

export function CodeIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M8.7 16.3 4.4 12l4.3-4.3-1.4-1.4L1.6 12l5.7 5.7 1.4-1.4Zm6.6 0 4.3-4.3-4.3-4.3 1.4-1.4L22.4 12l-5.7 5.7-1.4-1.4Z" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

export function SunIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 4a1 1 0 0 1-1-1V1h2v2a1 1 0 0 1-1 1zm0 16a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1zM4 11H1v2h3a1 1 0 1 0 0-2zm19 0h-3a1 1 0 1 0 0 2h3v-2zM6.343 5.757 4.93 4.343 3.515 5.757l1.414 1.414L6.343 5.757zM19.07 18.485l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414zM18.485 4.93 17.07 6.343l1.414 1.414 1.415-1.414L18.485 4.93zM5.515 17.657l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM12 6.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5z" />
    </svg>
  );
}

export function MoonIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="m12 10.6 5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3 1.4-1.4 5.3 5.3Z" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M7 17.6 16.6 8H9V6h11v11h-2V9.4L8.4 19 7 17.6Z" />
    </svg>
  );
}

export function LocationIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}
