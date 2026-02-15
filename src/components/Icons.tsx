interface IconProps {
  className?: string;
}

export function ShoreStackLogo({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 16 C7 10, 11 20, 15 12 C17 8, 20 11, 25 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M3 21 C7 15, 11 25, 15 17 C17 13, 20 16, 25 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

export function EnvelopeIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

export function XIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

export function ClockIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export function UserIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}

export function SunIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );
}

export function MoonIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
    </svg>
  );
}

export function ChatBubbleIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

export function USFlagIcon({ className = "w-4 h-3" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" fill="#B22234"/>
      <path d="M0 0h28v2.31H0zm0 4.62h28v2.31H0zm0 4.62h28v2.31H0zm0 4.62h28v2.31H0zm0 4.62h28V20H0z" fill="#FFF"/>
      <rect width="11.2" height="10" fill="#3C3B6E"/>
      <g fill="#FFF">
        <path d="M1.4 1l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM4.2 1l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM7 1l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM9.8 1l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81z"/>
        <path d="M2.8 2.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM5.6 2.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM8.4 2.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81z"/>
        <path d="M1.4 4l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM4.2 4l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM7 4l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM9.8 4l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81z"/>
        <path d="M2.8 5.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM5.6 5.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM8.4 5.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81z"/>
        <path d="M1.4 7l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM4.2 7l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM7 7l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM9.8 7l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81z"/>
        <path d="M2.8 8.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM5.6 8.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81zM8.4 8.5l.25.77h.81l-.66.48.25.77-.66-.48-.65.48.25-.77-.66-.48h.81z"/>
      </g>
    </svg>
  );
}
