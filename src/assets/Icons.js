export const GithubIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...props}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    className={`w-full h-auto overflow-hidden ${className} fill-dark dark:fill-light max-w-[200px]`}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M275.258 94.08c-4.317 17.999-5.122 27.231-2.699 30.93 2.24 3.418 9.066 6.403 14.641 6.403 5.784 0 8.968-1.929 11.556-7.002 1.585-3.106 5.468-19.951 6.518-28.27.378-2.999.254-3.248-1.493-2.986-1.595.239-2.166 1.319-3.514 6.642-.885 3.496-2.022 8.872-2.525 11.946-1.371 8.371-2.344 10.864-5.171 13.242-4.128 3.473-12.469 2.409-15.851-2.023-1.988-2.605-1.213-10.864 2.428-25.873 2.067-8.521 2.037-9.196-.404-9.196-1.78 0-2.167.686-3.486 6.187m44.047 10.107c-1.026 1.922-1.865 3.891-1.865 4.376 0 .484-1.123 3.232-2.496 6.106-5.509 11.533-9.48 21.41-9.055 22.519.248.644 1.262 1.049 2.255.899 1.344-.204 2.319-1.644 3.816-5.636 1.106-2.949 2.599-6.202 3.318-7.23.72-1.027 1.309-2.36 1.309-2.962 0-.602.986-3.108 2.191-5.57 1.205-2.462 3.097-6.846 4.203-9.742 1.727-4.52 1.83-5.336.726-5.76-2.159-.828-2.472-.615-4.402 3m-81.537-.872c-1.707 1.343-2.245 2.524-2.235 4.907.015 3.579.436 4.375 3.377 6.387 3.08 2.108 5.327 1.782 8.395-1.217 3.301-3.227 3.44-5.74.512-9.22-2.676-3.18-6.662-3.52-10.049-.857m-26.564-.286c-2.576.651-5.827 3.491-6.923 6.049l-.978 2.282-.912-2.279c-.698-1.746-1.332-2.169-2.712-1.808-1.204.315-1.632.915-1.29 1.806.282.734 1.116 3.275 1.854 5.648.738 2.372 2.2 6.617 3.248 9.433s2.448 6.625 3.111 8.465c1.281 3.559 2.219 4.307 3.992 3.183.863-.547.449-2.708-1.919-10.013-1.661-5.123-3.021-10.401-3.021-11.727-.001-2.878 4.131-7.401 6.76-7.401 1.322 0 1.773-.543 1.773-2.134 0-1.173-.288-2.088-.64-2.034-.352.054-1.407.293-2.343.53m133.338 11.974a7795.904 7795.904 0 0 1-18.889 16.812c-13.893 12.337-15.115 13.646-13.706 14.676 1.318.964 1.808.897 3.307-.451.968-.871 8.671-7.642 17.119-15.047 8.448-7.404 16.272-14.332 17.387-15.394l2.027-1.931-1.805-.966c-1.562-.836-2.295-.526-5.44 2.301m-165.868 1.83c-1.932.877-4.62 3.046-5.973 4.821-3.619 4.745-3.425 9.623.647 16.234 5.465 8.872 12.023 10.958 20.023 6.37 4.445-2.55 7.577-7.075 6.993-10.105-.474-2.463-3.47-1.752-4.205.999-1.379 5.154-7.698 9.109-11.929 7.466-1.124-.436-3.126-1.936-4.448-3.333l-2.405-2.54 3.258-2.02c3.357-2.081 5.238-3.168 11.37-6.569 3.166-1.756 3.501-2.233 2.997-4.267-1.048-4.222-6.665-8.71-10.853-8.67-1.079.01-3.543.736-5.475 1.614m9.23 4.244c3.304 2.952 2.986 3.554-4.232 8.003-6.75 4.161-7.993 4.274-8.912.81-.958-3.608.5-6.731 4.353-9.325 3.802-2.559 5.462-2.462 8.791.512m163.905 10.976c-12.849 13.732-13.244 14.282-13.703 19.063-.347 3.604-.058 4.71 2.005 7.688 2.482 3.581 7.808 7.739 11.323 8.84 1.097.344 3.401.374 5.12.067 2.593-.463 5.045-2.536 14.39-12.164 9.511-9.798 11.133-11.849 10.423-13.176-.462-.864-1.152-1.571-1.534-1.571-.381 0-3.152 2.589-6.157 5.752-16.061 16.912-17.867 18.197-22.913 16.297-3.355-1.264-7.651-5.863-8.197-8.777-.791-4.212.754-6.729 9.972-16.249 10.79-11.146 11.462-12.057 10.098-13.7-.567-.683-1.304-1.243-1.638-1.243-.333 0-4.468 4.128-9.189 9.173m-200.342 4.37c-4.227 2.625-6.511 5.7-7.013 9.44-.456 3.398-.531 3.472-2.09 2.061-1.495-1.353-1.722-1.358-3.01-.071-1.581 1.582-1.123 2.183 12.2 15.987 3.851 3.989 8.882 9.269 11.18 11.733 2.299 2.464 4.599 4.48 5.112 4.48.726 0 1.967-1.81 1.967-2.868 0-.093-2.297-2.654-5.105-5.69-2.808-3.037-5.112-5.76-5.12-6.051-.008-.291 1.796-.733 4.009-.982 3.212-.362 4.585-1.065 6.8-3.483 5.061-5.522 4.809-10.862-.839-17.786-3.73-4.572-9.725-8.303-13.398-8.339-1.173-.012-3.285.695-4.693 1.569m11.963 6.478c7.441 6.097 8.207 13.016 1.945 17.552-1.924 1.393-4.166 2.534-4.983 2.534-2.86 0-9.719-5.522-11.717-9.433-2.23-4.363-1.932-7.738.964-10.927 3.966-4.369 8.228-4.284 13.791.274m225.475 15.521c-1.055 2.299-3.406 6.955-5.224 10.346l-3.306 6.165H368.87c-10.141 0-11.444.16-10.988 1.35.285.743.518 1.511.518 1.707 0 .196 4.8.357 10.667.357 8.568 0 10.666.234 10.666 1.193 0 .656-1.943 4.965-4.318 9.574-3.671 7.124-4.182 8.679-3.41 10.374.5 1.097 1.196 1.817 1.548 1.6.351-.217 2.93-4.847 5.731-10.288l5.092-9.893h11.332c6.233 0 11.332-.174 11.332-.387 0-.212-.446-1.364-.99-2.56-.977-2.143-1.126-2.173-10.667-2.173-5.322 0-9.674-.288-9.671-.64.003-.352 1.731-4.044 3.84-8.203 4.134-8.154 4.537-9.992 2.553-11.639-1.086-.901-1.574-.426-3.2 3.117m-259.772 5.47c-4.288 1.292-9.666 9.229-9.666 14.264 0 6.75 12.21 16.312 19.57 15.325 5.054-.678 9.063-4.208 11.168-9.833 1.714-4.581 1.73-4.945.376-8.492-1.46-3.823-5.184-7.989-8.939-10.002-2.987-1.6-9.28-2.235-12.509-1.262m8.531 4.723c4.885 1.664 9.963 7.146 9.963 10.757 0 1.333-1.005 3.943-2.234 5.8-3.93 5.939-10.585 5.502-17.746-1.167-3.089-2.877-3.914-4.225-3.914-6.4 0-3.949 2.241-7.734 5.389-9.103 3.484-1.515 3.776-1.511 8.542.113m-38.962 21.394c-1.16 1.16-.511 2.903 1.351 3.633 2.743 1.074 16.296 6.679 22.827 9.44 9.653 4.082 11.01 4.484 13.235 3.926 2.882-.724 5.692-6.169 3.8-7.365-1.759-1.113-2.528-1.004-2.528.359 0 .647-.565 1.645-1.256 2.218-1.008.836-2.478.585-7.466-1.279-3.417-1.277-7.375-2.98-8.797-3.785-1.422-.805-3.661-1.733-4.975-2.063-1.315-.33-4.796-1.737-7.738-3.126-5.376-2.541-7.401-3.01-8.453-1.958m7.761 20.741c-2.91 2.29-4.916 6.808-4.916 11.075 0 6.958 3.856 11.259 11.968 13.349 9.782 2.52 16.8-.904 18.782-9.165 1.204-5.021.499-9.586-1.842-11.927-1.339-1.34-1.977-1.499-2.907-.728-1.015.843-1.017 1.262-.013 2.831 3.783 5.911.225 14.612-6.362 15.556-4.691.672-5.091-.059-3.77-6.888.635-3.285 1.599-7.841 2.14-10.125 1.209-5.093.624-5.63-6.148-5.648-3.492-.01-5.372.443-6.932 1.67m298.017.534c-5.397 1.158-13.215 2.646-17.373 3.308-4.158.662-7.72 1.364-7.916 1.56-.721.72 2.193 15.934 3.576 18.673 3.574 7.08 8.737 10.387 16.166 10.356 6.68-.028 11.274-1.37 15.721-4.591 6.082-4.406 7.161-9.326 5.182-23.63-1.29-9.33-.202-8.928-15.356-5.676M116.056 214.4c.006 2.081-3.826 16-4.404 16-1.514 0-5.763-4.562-6.181-6.636-.767-3.812.6-8.161 2.936-9.343 2.757-1.395 7.645-1.408 7.649-.021m300.712 5.973c1.593 7.213.96 10.793-2.582 14.602-2.907 3.125-6.741 4.706-12.997 5.36-9.911 1.036-14.423-2.737-16.788-14.041-1.347-6.441-1.276-6.554 4.647-7.384 2.152-.302 5.134-.933 6.628-1.403 3.373-1.062 14.422-3.104 17.465-3.228 2.129-.087 2.341.27 3.627 6.094M98.295 242.142c.23 1.949 1.109 2.553 6.665 4.582 15.371 5.612 18.773 6.979 18.773 7.54 0 .328-1.248 1.015-2.773 1.527-6.787 2.279-20.791 7.526-21.76 8.153-1.161.751-1.484 4.003-.397 4.003 1.398 0 25.477-8.706 28.389-10.264 1.075-.576 1.661-1.786 1.661-3.43 0-2.269-.525-2.777-4.906-4.744-2.699-1.211-6.827-2.784-9.174-3.496-2.346-.712-5.61-1.977-7.253-2.812-1.643-.834-4.45-1.919-6.238-2.411-3.2-.88-3.247-.858-2.987 1.352m293.563 10.431c-5.653 1.34-8.711 6.002-8.711 13.28 0 5.07 1.522 8.715 4.385 10.503 1.336.834 1.724.763 2.17-.399.299-.779.097-2.035-.448-2.793-2.086-2.898-2.737-5.625-2.2-9.208.648-4.32 3.561-6.931 8.146-7.298 3.284-.264 3.194-.778 2.414 13.849l-.387 7.253 3.413.281c8.981.739 13.218-3.294 13.223-12.587.004-5.355-.081-5.561-3.713-9.041-2.932-2.809-4.577-3.678-7.799-4.12-4.832-.662-6.727-.612-10.493.28m14.352 5.685c3.441 2.291 4.243 3.821 4.243 8.087 0 3.491-.339 4.287-2.478 5.81-1.363.971-3.687 1.765-5.165 1.765h-2.686l.539-7.467c.296-4.106.688-7.946.871-8.533.455-1.461 2.16-1.337 4.676.338m-284.183 14.297c0 .657 1.344 2.538 2.986 4.181 2.537 2.537 2.987 3.57 2.987 6.864 0 4.627-2.474 7.98-6.45 8.742l-2.611.499-1.908-9.669c-1.049-5.318-2.224-9.987-2.611-10.374-1.465-1.464-7.088.516-10.393 3.66-2.951 2.807-3.334 3.63-3.334 7.171 0 5.152 1.638 8.99 5.07 11.878 2.344 1.972 3.52 2.306 8.116 2.306 7.741 0 10.213-.693 13.985-3.921 5.565-4.764 5.834-14.014.571-19.595-2.796-2.965-6.408-3.947-6.408-1.742m-8.402 11.819c.776 3.872 1.544 7.615 1.707 8.319.229.997-.46 1.237-3.119 1.083-7.241-.419-10.679-9.603-5.525-14.758.927-.926 2.549-1.684 3.605-1.684 1.722.001 2.066.729 3.332 7.04m268.606-1.854c-2.715 2.906-4.192 7.185-4.2 12.159-.006 4.484 3.691 8.254 8.093 8.254 4.409 0 6.118-1.188 8.516-5.919 1.904-3.76 5.657-7.734 7.301-7.734.354 0 1.509.701 2.567 1.558 1.638 1.326 1.833 2.044 1.312 4.822-.354 1.889-1.689 4.34-3.168 5.819-2.312 2.312-2.429 2.683-1.229 3.883 3.153 3.153 9.063-7.254 7.835-13.797-.731-3.898-3.141-5.897-7.24-6.004-4.074-.107-5.934 1.398-9.469 7.662-2.758 4.888-5.344 6.306-8.459 4.638-4.021-2.151-2.831-9.797 2.04-13.107 2.263-1.538 2.673-2.226 2.019-3.395-1.215-2.171-3.162-1.789-5.918 1.161m-265.047 23.654c-10.683 5.58-14.479 13.234-11.356 22.899.847 2.621 6.304 14.193 7.334 15.553.127.168 6.494-2.887 14.148-6.789 7.654-3.902 15.741-7.99 17.97-9.085 2.229-1.096 4.053-2.101 4.053-2.235 0-1.075-7.424-14.219-9.354-16.561-4.084-4.954-6.615-6.162-12.832-6.123-4.325.027-6.52.543-9.963 2.341m255.673 1.119c-.518.968-.815 1.875-.659 2.016.155.141 4.314 2.047 9.242 4.236 4.928 2.188 10.988 4.922 13.466 6.074l4.506 2.095.714-1.924c.771-2.079-.778-3.102-11.859-7.832a583.38 583.38 0 0 1-9.581-4.214c-4.882-2.21-4.888-2.21-5.829-.451m-239.076 2.322c2.83 1.51 9.578 11.255 9.579 13.833 0 .755-2.091 2.336-4.907 3.709a331.594 331.594 0 0 0-9.6 4.92c-9.931 5.345-13.761 6.816-15.024 5.768-.654-.543-1.189-1.313-1.189-1.711 0-.398-1.002-2.913-2.226-5.59-4.043-8.839-1.548-14.506 8.602-19.54 6.646-3.296 10.508-3.659 14.765-1.389m225.697 1.118c-3.499.984-9.467 8.668-10.58 13.623-1.526 6.791 1.94 11.857 8.113 11.857 2.469 0 3.465-.645 6.255-4.053 1.825-2.229 3.982-5.109 4.792-6.4.963-1.532 2.209-2.347 3.588-2.347 2.848 0 2.84 3.121-.019 7.335-3.122 4.6-2.896 8.926.67 12.816 2.004 2.187 3.636 3.124 5.725 3.289 2.364.186 3.04.67 3.538 2.53.338 1.265 1.081 2.861 1.65 3.546.902 1.087 1.24 1.062 2.632-.198 1.557-1.409 1.548-1.499-.335-3.508l-1.934-2.061 1.853-1.504c2.993-2.428 5.394-7.075 5.397-10.446.007-5.927-7.036-11.267-12.247-9.285-2.109.801-2.256.7-2.256-1.549 0-2.945-2.351-5.231-5.379-5.231-2.016 0-2.207-.256-1.783-2.379.918-4.589-3.974-7.64-9.68-6.035m5.895 4.706c2.234 2.021 1.942 4.156-1.188 8.688-3.982 5.767-5.914 7.82-7.36 7.82-1.967 0-4.398-2.61-4.398-4.722 0-5.219 5.845-13.121 9.746-13.175.902-.013 2.342.612 3.2 1.389m41.141 6.644c-.828 2.159.061 4.309 1.889 4.572 2.286.328 4.054-1.816 3.343-4.054-.651-2.051-4.497-2.431-5.232-.518m-20.596 9.629c3.857 3.49.032 11.328-5.527 11.328-4.512 0-6.631-2.013-6.631-6.3 0-3.655 1.947-6.526 5.12-7.549 1.592-.513 5.058.728 7.038 2.521m-34.337 8.332c-.868 1.046-.561 1.839 1.734 4.48 1.533 1.765 3.316 3.523 3.961 3.905.645.383 2.698 2.626 4.562 4.984 2.47 3.125 3.389 5.087 3.389 7.239 0 6.574-4.739 10.606-9.91 8.432-1.395-.586-5.669-4.445-9.498-8.575-5.969-6.439-7.149-7.352-8.283-6.411-.728.604-1.323 1.417-1.323 1.807 0 .39 3.506 4.362 7.79 8.826 10.675 11.123 14.025 12.063 20.584 5.776 2.759-2.644 3.2-3.59 3.2-6.866 0-3.721.034-3.768 1.675-2.283 1.773 1.605 4.298 1.257 4.298-.592 0-1.163-19.408-21.993-20.492-21.993-.348 0-1.107.572-1.687 1.271m-195.991 6.001c-2.912 1.451-5.609 3.757-7.96 6.804-3.181 4.124-3.561 5.115-3.599 9.409-.04 4.439.203 5.051 3.229 8.151 2.909 2.979 3.728 3.351 7.367 3.351 2.251 0 4.093.345 4.093.767 0 .422-2.304 3.31-5.12 6.417-5.436 5.998-5.939 7.062-3.738 7.906 1.318.506 2.226-.351 16.428-15.517 1.319-1.408 4.831-5.358 7.806-8.777 5.021-5.774 5.307-6.319 4.002-7.623-1.304-1.305-1.529-1.293-3.138.163-1.702 1.54-1.733 1.526-1.733-.739 0-3.249-2.085-6.9-5.333-9.339-4.361-3.277-7.226-3.503-12.304-.973m11.784 5.234c4.602 4.376 3.718 10.912-2.217 16.383-4.793 4.417-7.48 5.137-11.365 3.045-4.293-2.312-5.615-4.758-5.09-9.416.342-3.038 1.169-4.663 3.735-7.335 5.898-6.142 10.438-6.955 14.937-2.677m153.479 13.201c-4.129 2.453-6.985 6.267-7.131 9.525-.098 2.195.211 2.742 1.55 2.742 1.182 0 1.829-.771 2.21-2.635.739-3.615 1.204-4.206 4.553-5.795 5.055-2.399 10.317-1.363 12.87 2.533 1.422 2.17 1.942 1.752-11.705 9.419-3.168 1.78-5.76 3.506-5.76 3.834 0 .328 1.502 2.497 3.337 4.818 5.08 6.428 11.395 6.831 17.991 1.15 3.201-2.757 3.682-3.645 4.051-7.487.231-2.397-.039-5.746-.599-7.442-1.138-3.45-6.087-9.794-8.876-11.378-2.888-1.641-9.124-1.284-12.491.716m-137.386-.351c-5.012 1.855-3.477 4.413 2.347 3.912 5.441-.469 9.278 1.856 10.075 6.105.546 2.91-.109 9.001-.968 9.001-.464 0-10.474-5.428-14.441-7.83-3.863-2.339-5.197-1.968-6.734 1.874-2.94 7.348-.64 14.071 5.685 16.61 6.978 2.803 12.942 1.205 17.21-4.61 5.894-8.028 5.787-16.525-.269-21.321-4.944-3.916-9.145-5.134-12.905-3.741m118.642 11.124c.017.822 1.187 4.374 2.602 7.894 1.414 3.52 2.791 8.343 3.06 10.717.46 4.072.332 4.449-2.24 6.614-1.501 1.262-3.659 2.295-4.796 2.295-1.499 0-2.068.47-2.068 1.707 0 1.36.569 1.707 2.796 1.707 3.338 0 6.405-1.961 7.476-4.78.852-2.239 2.528-2.781 2.528-.817 0 1.853 1.718 2.538 3.043 1.213.994-.995.792-2.209-1.332-7.995a2644.07 2644.07 0 0 1-4.881-13.425c-2.004-5.568-2.678-6.606-4.297-6.614-1.274-.006-1.91.493-1.891 1.484m36.748 4.331c1.072 5.241-3.24 10.346-8.765 10.377-2.836.015-8.026-4.102-6.762-5.366 1.623-1.623 13.304-8.195 14.141-7.957.458.13 1.081 1.455 1.386 2.946m-127.463 3.776a2123.024 2123.024 0 0 0-7.819 16.427c-2.652 5.632-5.19 10.906-5.639 11.721-1.29 2.342-.969 3.212 1.184 3.212 2.057 0 2.697-1.167 13.691-24.943 1.461-3.159 2.944-5.751 3.296-5.76.352-.009.636 2.191.631 4.89-.013 7.814 1.944 30.08 2.645 30.08.351 0 1.219.223 1.929.495.964.37 2.469-1.846 5.938-8.746 8.045-16.004 11.119-21.616 11.839-21.616.384 0 .698 7.872.698 17.493v17.494h4.266v-40.912l-2.773-.752c-1.525-.414-3.073-.587-3.439-.385-.367.203-1.725 2.546-3.019 5.208-2.483 5.109-11.242 21.658-11.784 22.263-.973 1.087-1.398-2.113-2.1-15.812-.808-15.745-1.025-16.504-4.73-16.531-1.417-.01-2.478 1.351-4.814 6.174m-27.686-2.237c2.449 1.233 5.536 3.007 6.86 3.942l2.409 1.699-2.409 2.535c-2.12 2.231-2.85 2.486-6.1 2.129-6.443-.709-10.338-6.151-7.798-10.897 1.144-2.138 1.716-2.09 7.038.592m82.92 15.212c-6.393 6.393 2.21 16.228 9.31 10.643 4.861-3.824 1.657-12.738-4.578-12.738-1.663 0-3.412.774-4.732 2.095"
    />
  </svg>
);

export const LinkArrow = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

// Skill Icons
export const WebDevIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 512 512"
    className={`w-8 h-auto mr-2 -ml-1 ${className}`}
    {...props}
  >
    <image
      xlinkHref="data:image/png;base64,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"
      width={512}
      height={555}
      style={{
        overflow: "visible",
      }}
      transform="translate(19.834) scale(.9225)"
    />
  </svg>
);
export const FirebaseIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={64}
    height={64}
    viewBox="0 0 32 32"
    preserveAspectRatio="xMidYMid meet"
    className={`w-5 h-auto mr-2 -ml-2 ${className}`}
    {...props}
  >
    <path
      fill="#ffa000"
      d="m19.62 11.558-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
    />
    <path fill="#f57f17" d="m13.445 8.543 2.972 5.995-11.97 11.135z" />
    <path
      fill="#ffca28"
      d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
    />
    <path
      fill="#ffa000"
      d="m13.445 8.543-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"
    />
  </svg>
);
export const HtmlIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
    className={`w-5 h-auto mr-2 -ml-2 ${className}`}
    {...props}
  >
    <title>HTML5 Logo Badge</title>
    <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
    <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37" />
    <path
      fill="#EBEBEB"
      d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
    />
    <path
      fill="#FFF"
      d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"
    />
  </svg>
);
export const CssIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    preserveAspectRatio="xMidYMid meet"
    className={`w-6 h-auto mr-2 -ml-2 ${className}`}
    {...props}
  >
    <title>{"file_type_css"}</title>
    <path
      d="M5.902 27.201 3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z"
      style={{
        fill: "#1572b6",
      }}
    />
    <path
      d="m16 27.858 8.17-2.265 1.922-21.532H16v23.797z"
      style={{
        fill: "#33a9dc",
      }}
    />
    <path
      d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16v-3.091z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="m16.019 21.218-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004v-3.216z"
      style={{
        fill: "#ebebeb",
      }}
    />
    <path
      d="m19.827 16.151-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007h-3.101z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829h7.743zM16 13.191v3.091H12.601l-.062-.695-.14-1.567-.074-.829H16z"
      style={{
        fill: "#ebebeb",
      }}
    />
  </svg>
);
export const JsIcon = ({ className, ...props }) => (
  <svg
    width="2500"
    height="2500"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={`w-5 h-auto mr-2 -ml-1 ${className}`}
    {...props}
  >
    <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
    <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
  </svg>
);
export const NextJsIcon = ({ className, ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
    className={`w-6 h-auto mr-2 -ml-2 stroke-light ${className}`}
    {...props}
  >
    <image
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAACE4AAAhOAFFljFgAAAA AXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABEcSURBVHgB7Z2NWSrJ08WLTUAzcDYCyUDeCHQj wI0AM9CNQN8I8EagNwIxAjUCMALZCOrfh5lxAae/5rO7p37Pcy5eEYWhqvtUdc8wIaEVmPlU3WSF zorb0z1lxY+W/69iWwhs9m43xfc/y/9PJpMtCY2ZkODFXqBfFLfTQqfUL0iA90IbpQ+VFCsSvJAE sFAE/JXSudKM8mAPGSTESukVX6uk2JCgRRLgiCLgEeSXlAd+RnFTzhK/VTI8k3CAJAB9B/2c8oAf ws70yXOhV5kdRpwAe9YGgT+jcbJSeqR8dhhlUT26BFCBP6Pc3lxTiyP9ZrOh9/d32m63u68hfP35 +UlfX1+7WxOnp6d0cnJy8L0sy77vm06n37fl1y2C4Mes8GtshfQoEuDI4syoAQhqBHqpj4+P72Dv EyTA+fn5LhmQKLidzWbUAhulO5UIv0iIGwS+0p3SF9dEjd788vLCi8WCLy4uGL82ZOE54rniOeO5 N2CttFTKSIgLvGlK93UDf71e8/39fRQBbxNeA14LXlMDlpIIEVAE/pJrgBHz9vaWz87OogpwHymr tJsdGiTDUhIhQLim1YFFQNCnMNL7StUMvFwu6ybDUhIhEOoEPkb7MQa9TtfX17tj4sla6YaEYVAH f1a8CU5gtIcXVp2TqIKzT8EiYVaokQiXJPQD53bnyfXdKW2OahtGFYxDComAY+Zpj5Ystqhb1AG+ YUe7I4E/SCLgB+cktAvn3Z0Xl3dAAr+7RPBgyTIbtIM6kFfsOOrDv+LNosgCLBZ51ghrltmgPpx7 /QeXI/329iZdnZ4TwcMWYUEy5d217cO55bEeYdgdLOxQZAGUim5ublwTAT+UkWBHHahrdrA86FuL 3RleHrYI7+mcBD2cL2qZj6KM+kEKi2mOs8EdCYewY29fRv2whffGcUUZ77XUBYAd/T5WcSmygBir HFumax57XeAS/LA80uGJT7PZzMUSjTcJ1AufsqXYRXtTLE+8wnuH99AhCUK/1Ey7uAQ/OguympuG YF8tfI0mCdihzQkPSZG9ySKzHOuCOaVMEfzmIzCfR/OmivyEhbPRJgHntkeLFLvjEM5Es5ysn54d YovnxwHBgaHI3kxR/SSwdIjSSQK2tDpxIKTTMz45bKhDEmQUMxL8ImqWBOtok4Dz7Q0S/CKjHJMg vm0TbNjbI55ftC+HwviJYoItuzol+EXHwtYJC3cUA2zp9UufX6QTtlRbmFPIcF70aucyWeEV2WRZ MQ63M8SWole2M4tcZdk7tOYQi2I2nMCOHYEU2ZsgGk7YBGnZRXpPIcEG3y/tTlEdObRH8WEnw8OW xS7Z3yOqK0tnKIx6gA3X45eiV9RUlqL4hYaEDdYHJ0dTZAdbFKYsJ9oPc4l2Nlgf8f2iNoVYMqwU 447+u0JssD6y2CVqW5aTafrdKsH5BWsrwbm8RCQStS6LFZpRX7BYH9EAslihNfUB5x9SUYlYH1HX slihW+oSthS+RCQSdS6DFeq2IGZD4SvWR9SXLAtkt9QFxehfiRS+or5luCR7NyvEMvqLQhI2zBkK 4iW1iWn0l+0OoqFk2SaRUVvoRn9pe4qGlGUWcNoy/YftB4pMuq667/HxkTabDQnCEGy3W3p4eNDd jX1qzTtCptGfIhotRGnKMgvckgXrDKCYVX0To78gDI1lFrhpNAuwZrszMk68vygUWWaBBRmwzQC3 Vd98fn4W7y8EA2YBgyMxnjo50d3B+e66l6r7/vzzT0mACLi5uaHLy0tSs/XB9xEw0N9//53M+4jX qOpS3d3/N5lMVuSDrvh9enoKfkoUEd/dGS/O921lU7pKn2GPkLYlWjkDFIXDWulHAXF1dUW/f/+m VFABsFMVGB1XqxXFhmU0PAB29q+//qIUmM1mpJKg6q6t0p9qFtiSC7riN7XWp+oesI0YF/scrrP5 TWrnbhuK4TlVoCuCK38Yo0UqKItAi8XC+nMYTZXto1RRHRRKCdPCGLnAhn0/KbU+LafX/SCmPU8+ M0BqszpqGgM/sr1qBphVfI/e399H3fnBjAGPKYQN4tRQt82Pv1GVAJcV3zNNLaNhuVwmZxlSxJAA P9YE/nD5IfD6+kpjB/WAskIkhM2vX790d02PbdBBArDmgqNjtz/7YHFJrFDYIFYRsxUg+A963scz QKX9ibEX3iWhW6Hjld8xYuhYHsT4cQJMPX/ZKEGAubRQheEwWPYDl/OdAJyf+PIjAbBnRPz/T9AV 0q0gC8MD14LYrSDbrwP2Z4Cp7hcJ1cAKCeFiiN1vG7SfABeev2T0YAaQrlC4GGL3e7DfT4BZ1U+K /TEjVihcDLE7K78wWiB4KE07SdhDrFCYIHY1dcD3esAuAVhzaWkJfjfECoWLIYYz/FPOAOeeDxaO ECsUJoYY3tW8ZQJkVT8hBbAfYoXC4+PjQ3dXhn/KBKgcuj4/P0lwR6xQeBhmgF3MGxNALJA/YoXC wrCHLU+Aohr+sbFFgr8+YoXCAV0gTRKcIvYxA2S6Bwo52AHqsxsWMwAeI4SBqROkTQCZAf6jvIaO D6gFZFdmGBgGrzMkwJnng0YJOmI+Z8Vhu7RYoTAwxPJuBjj1fNBo+eeff7yOC06cESs0PP/++6/u rkxqAA/ECsWJYdDSF8EyA1QjVig+bAkgeAIr5NMkECsULPoZwOCbRo9Yobgw2PnsjxoPEihvE2PV 1xWxQsNhimVtF0iwI1Yoek4lARqCS4v7zJZihYJCiuCmoMOAmcAVsUJhIQnggG2ER1vU59wJsULh IAnggIvFQVdIrFB8SAK0hFihOJEEaBGxQvGBBJCGf4uIFYqKrSRAy4gVioqt1gLJJ6HUR6xQPCAB NlV3nJyckFCfOlZIBp1uMFjMjVigjoAV8tkwJ1ZoGLQJIIVZc/DBIj4fLnJ1dbWT0C61ZgBJgHbw tULySZTtYzieG20NIG9CO/ieOyBWqH3Ozs50d+26QJXXP5QZoD1gg3xOoxQr1C42C7TxfJBQA98r SogVag/DpSo/tQkg17dslzpWqO6FduWCBoeYaoDdv8z8xRWoBzLuTlEvLy/sysXFRWt/9/7+nn1Q i2Sd/p31ej3I8e9TGr7Ufd+b4SrP6xMb1D59WSHfv5MqBiezi3ljApyfn5PQLr5WCINQHStU58oV KWIYxA8SYFP1E1IHdIPvxbWwTwj7her8HZ+FuBRR9lV31wb/lAlQ+XmSkgDd0ZcV8l2ISw1XC7Tx fLDQELFC/aCL4clkcjjoq6r4rapUVr8g+Cq/jobqAh2rr66Q7vWm3AVC7Gp4o4L98wFWVIHBQwkt IFaoOwyxuyq/2E+Ays+TrFN8Ce70ZYV8z1RLAUPsrn58R00Lp1VzxdfXV/BTXR2FYoFKDWWFUrZA iF0NGVWB49HmwQ5ZoSUAVt3f3t6cnxMCt85KvZpBDgIj1QRAzGr49v/g+Jzgyqax1AHdI1aoXS4v L3V3vWsfhMG+KmUwWlJkI4BNoc0ApVRQsw9NrVCqM4BhNtVmRlkHVBqns7OzqA6AawC40GcCWN68 HzS1QikmAF6bDjriwAKpxQH0ySqnCDlBoz/ECjXD0P2x7wtRSbKoypzUbFDIMwB0c3PDPtS1Qk9P T72/tq5lmEHnZIM17VCQkg0KPQF8n2MTKzTEa+tKJvvDFe3PH1eGK2zQiiq4vr4moT98Vm9hhRaL BfmS2jkDhmOwUrG9IRdUplxXpU9Ki2IxzACQrxVKde+WqzATapiTK2zoBqWyKBZLAvg+V/jfIZ/r kFKNGt1hQSxXbqCqvDhuYYMeq+6re6K2UB8fK4Ttv2N9j+bzue6u5yKm3WHNohhIoXDyGVVDKP7F CpllKX4vqA7qgS9Vvw2rlX29sK4UWwL4PuexWaHlcqk7FGuqC2vWBFAMx37JlBgT4Hgjm40UBirX 49JK8XsMG4rh2A9ujAkA+VghJEtqfX7PY7KmpiDWdQc35lkAK6CuhPbcfZI3xY2MxzKM/ktqCic6 C6BIdLETIb5Gy5T/A4yQob2GtqQWZ00vPaM2UL+o8nSl2GcBBBKKRQTTsfB9taoY7HM3nPBR+T6l aIUsA8GS2gKZpPsrYym0QpTPaZQpWqG7uzvTS86oTZBRVX8lhY5QzPKpB1KyQpaO2JLahvNZoPIv YiRq40WJWg+EH4NVKlbI0PcHGXUBazpCIMUT52ORYQ/MD1KwQpZV3yV1BRs6QmNot4Usn3ogditk KHxxR0ZdwoZZIOV2WwxyPZc4ZitkaXv6nxBRB9ZcP0gK4mHlUw/EOGNb2p5r6gs27BRN8RzTmGQZ IQ+Ibca2FL76y510AWJd90xQlBGRaCC51gMxWSFLYi+pb9hQEI9lE1aogg113SoRgxWyWR/uuvDV of7wTcwHNmX51AOhWyHLYt+choQ1J83EcGBTl+vW6ZBnbMt2hyUNDRtWiIEskA2rx8dHdiHEGdvw CS9gzUNZn2PUE9EuRcK7ST0wnHzqgZBmbIct33MKCdZsmQZSDwwr13MfQrJClkW9ewoNzrtCa+0z lg1zg8q1HghhsHp4eDA9xTVrrvEzOGypB1DQ0MAHd8xyPQ10yHUcS9GL2MooZFhzWcWS+Xw+2MEd u1zrgaG2tDisYs8pBtiwYQ4Hd+zXrxxSrqdS9r2lxdLxAbcUE2zYKiErxcPKtR7oywo5LNo9UWyw pSiW9uiwcjmVsg8r5NDuxJ1hFr02OC+K15IE4cm1HujSCjkGf0Yxw5bOkCTBcHKtB7qwQqMI/hL1 QqaSBGHK5WNZ6378kk4oeC3Bj1iZUkrYkkC6Q8PJpR5oayHTcVU6reAvYcsaAQ6MrBP0L9dLLTbd 2Ig+v0PwzyllbEkAZMW4f7nUA02skGWFF3wlH/wlbLFDQPYO9S+XUynrvC+WvT1l8Kdpe3QUSbA2 HRXsCJTiuF+51AOuVgjvncPvG1/wl7BlnQBg2pXiuD+5nErpYoUcOj27X8WptDrr4pIEQOqC/uRS D5iskONWi/Xog7+E820T1r26WJUUS9SPXOqBYyuEWcHxatV4r+Pc3tAlbNhFWoJpVVql/ch2qcV9 K4RkcDz18pYEPZy3Sa3NYlwlTGaDbuVSD2CmcOjyMI+pzdkUdqwLZDboXj6XXje9VSx+3w/O6wKn a/xJu7Rb+Vx6vQI8WPx+XTi3RGuXIy22qDu5Xnp9D1ieKxKaw7klWrocddgitEwlEdoTCl3LlZmP eWGxPO3DHrOB1AftBD4GE9drjHI+6vfzIRVjhT1mgzIRsDAjM0KngQ+kt98n6mBfsuNsUCaC1Aid BP5a6YKEYeD8Eu1rn3cMK8ryIR7/CYtYPp83XIAsuSVheNjTFpVgVkCLb4yzAl5zjdH+O/BZ7E54 1E0EgDYfiuaUkwEWZ7FY1BntS5Ys3Z3waZIIZTJgZkjhsw3wGjDSNwh6jPj3qQb+hBKmeNNulWZK GdVgu93SarXa6ePjY3cbMtPplC4uLkgF/k5q1KeabJUelP5/MplsKVGSToB9VDJcU54MGTUESfD+ /k6vr6+02Wx2X/cNAlvZtV3An5+f726hBgFfslJ6VvqVcuCXjCYBSjhv2V0rYZm+tUIOSYDZArdI is/Pz93/8TXA15ALCOIykHGLwD45OdkFfBn0uG0RPLFHpWcV9K80IkaXACWcdzGQBHPKLdIYWVEe +L/HMNpXMdoE2KeoFWZK+LTxlDdwIcjh10ZjcWxIAlSgEqJMhGmhmNlQHvDQhwT9IZIAForZ4Zzy GQIKPSEwwq+K29FaG1ckAWpQFNJIhIz+myX6Xhkt7Qy0UULxupGA90MSoCWKojpTOituy/9nxY+U t6ekT5ZtIbDZ+/+2+D/0SRLorfE/WTtcXN0KgsoAAAAASUVORK5CYII="
      width={192}
      height={192}
      style={{
        overflow: "visible",
      }}
      transform="scale(2.6667)"
    />
  </svg>
);
export const UiIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
    className={`w-8 h-auto mr-2 -ml-1 ${className}`}
    {...props}
  >
    <image
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlz AAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURB VHic7d15nB1lmfbx635OJ31OZyEBNxYZERGXcRxX8FUHQYRRlBEccQVHfTWjkO40qMgoQwtuDJKk O7iAMjg4o4gLLqiMIrjO6IgIigryKoiyjLKGpM/ppOu53z+SaBKy9HKqnlNVv+9HPx9Muuu+Ikme q546VSUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALrPUgfouhHv0+KJfSR/aJ/bPFdcmDoSAKB8TGH1 pPlaZXaHVvffrBGbTJ2pm8pfAJaP79kI9lw3HSLp6ZL2lTQ3cSoAQLWsk/RruX5opiuyEL+ppfNu Sx1qNspZAM70BY3+zjEyHefSs1XWXwcAoKzcpO/K9G9Zu/kZnWz3pw40XeVaOM9ZvVvI5iyVbFDy xanjAAAg6X65fSj2rTtLJyy8K3WYqSpHARjxvrC4PSjZiKQFqeMAALANq2V+Wry7dU4ZPi/Q+wVg xdonh2AXSPZXqaMAALBzfm2M8R80PP+a1El2JKQOsCONle3jQgjfY/EHAJSHPTGExg/CaGcodZId 6c0dgBHvC4s6H5XpH1JHAQBgFs6P9zT/sRcvCfReAVjuLWu0LzbZC1NHAQBgttz8Sz7ZerlOtHbq LJvrrUsA5/ocC53PsfgDAKrC3I60RuczGvG+1Fk21zsFwN1Cu3OemZ6fOgoAAN1k0hFhcefjcu+Z nfeeKQBhrPN2rvkDACrsVWGsfVLqEJv0RhMZGz8wuH1H0pzUUQAAyNFkDP4cLR34fuog6QvAuT4Q Op2fS3pE6igAABTgNzFr/mXqDwUmvwQQOp1TxeIPAKiPR4ZG55TUIdLuAIx29gvy68Tb+wAA9TIR gx6rpa2bUgVIugMQ5KeIxR8AUD/9IdPJKQOk2wE4e/zhoc/+nygAAIB6Wh+lR2modUuK4cl2AEKf LRGLPwCgvuYE6XWphqcpABsehPDKJLMBAOgdr0n1cKA0BWC082xJ+ySZDQBA73iExtrPSDE4SQEI QYenmAsAQK8JssPSzE3AXIekmAsAQK8xpVkTi7/uMOb9wTv3i8f+AgAgSetiszlfS2x9kUMT7ACs 21cs/gAAbDJX6ycK/1xc4QWg4dn+Rc8EAKCXNaIKXxsLLwCusFfRMwEA6GXu2rvomQkuAfjC4mcC ANDLfEHRE1PcBTAvwUwAAHqXqQYFwIzH/wIAsAXrL3pi0rcBAgCANCgAAADUEAUAAIAaogAAAFBD FAAAAGqIAgAAQA1RAAAAqCEKAAAANdSXOgCAwt0u2R0uv03yGNx29aC95Xp46mAAikMBAKrPXfqm yb4Q5V/WUOuWzX8y2/QPY+N7NaIdEqXXmOlgSVZ4UgCFoQAAFebS5R7iKVo67yrf2RcPDvw+ky6U dKGPTTzOPJ5l0gsKiAkgAQoAUE1rzPy1cXDgszP67sH+X7h0RBgbP9rdLpDEWzyBiuFDgED1/DZa 41nZTBf/zWSDA5+PDXuapF93IReAHkIBAKrljjjpz9bg3Gu7dsQTmr+KUYfK9LuuHRNAchQAoDom ovwlOmmg+wv1cOvmqMaLJE10/dgAkqAAAFXhfoqGBv4rt+MPzr1W8n/K7fgACkUBAKrh5hhaH8p7 SNy9NSrp+rznAMgfBQCoAHOdqkHLf3v+GMvM/PTc5wDIHQUAKL/7snubFxc1LLu79RlJdxY1D0A+ KABA+X1NI7ausGkjNinpy4XNA5ALCgBQcub6SoKZVxQ9E0B3UQCAksssXFP4zBB/XvRMAN1FAQDK rjm3+Af0ZOtuKnwmgK6iAABld7vahc/0RTwQCCg5CgBQdg+5b17hM+fxqmCg7CgAQNl1mrsVPnP9 xF6FzwTQVRQAoOQaQY8rfKZr36JnAuguCgBQcm7+jMJnZjq46JkAuosCAJSd6UXFz/S/LXwmgK6i AABl53q8xsYPLGze6Pj/kfSEwuYByAUFAKgAUzi5wFnDRc0CkB8KAFAB5v7ivrHOobkPGmsfZPKX 5D4HQO4oAEBFRPePaMU9i3IbcKYvCK6PSjwDAKgCCgBQHfta6P+ERryv60e+2BvW7Fwkab+uHxtA EhQAoEJM9kJbPHGRRnxu1w464nPD7Z2Pm/SCrh0TQHIUAKBiTP4S27Xzn1o+vuesD/bh+x/SWNz5 uqRXzz4ZgF5CAQAqyFzPCQ37aWOs/boZXRIY8dAYbb82rOv7pUsH5RARQGIUAKC6dnXX+WFx5xdh rPMmrVzz0J1+x/L7dg0rO28Oizu/cOlfJe2af0wAKXT/w0IAes1+cv9QsMYqG2v/j0f9VMF+Ya6O 3DOXL5LpL0z2dJeeKnkjdWAA+aMAAPXRcNczZHqG3OXSxhv6NtzV5wmDASgelwAAAKghCgAAADVE AQAAoIYoAAAA1BAFAACAGqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1BAF AACAGqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1BAFAACAGqIAAABQQxQA AABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1BAFAACAGqIAAABQQxQAAABqiAIAAEANUQAA AKghCgAAADVEAQAAoIYoAAAA1BAFAACAGqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAA oIYoAAAA1BAFAACAGqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1BAFAACA GqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1FBf6gDoCb+U/Osy3WxufzC3 u9z8IS7fXWaPkusFkvZMHbJE1rj8m2b2c0W73UzrXOqXfA+XP95kh0ialzpkjjKTrnLpRsnukMU7 5bZArj1d2ttMz5TUnzpkxXXcdaWZrpXst2a+zuUL5WF3yfeS61CZHpI6JNKiANTXfZJWRNknNdS8 cYdf6W46Z/wpIYbXS3q9pDlFBCyZKOkik/1HtrD/Cr3WOr6dL/Tl3mr0TRzq7q+W9FJJVlzM/Jj0 PUn/mtnkpRpc8MftfZ1/0Oc31rcPjwqvNPOjVJFffy9w6bLg/rFsfesyvdXWbu/3oEY8aJf2ASHo FZK9QVKzwJjoEYX/wQtjnQ/I/aSi5+JPJiUbi41179UJC++a9nePdvYz6b0m//scspWSS5e5Nd6u wbnXTvubR9c+xRTONOm5OUQrys/M7JRssPmVaX/nqrVPtRjeZ9KhOeSqDXNdZaa3TQ61rpz2N4+2 9w7SiKTXiMvC6ZidHQebbyl0ZJHDJApAWnZPMB0zOdi8fLZHaox23ujyc1Tv3YBM5u+IgwNnzvZA YbQzJPnZkhpdyFWk82KzeYKW2PrZHITfT7NyXrynebxGbHI2B2mMdl7g8k9K2qVLuTAdCQoAba8+ fh2lA7qx+EtSNtQ8L0iHa8OlhDpaHdye343FX5LiUHPUzP5O0ppuHK8Ak5K9KQ61lsx28Zc2/n5y O0Lye7sRriYmzfXGONRaMtvFX5KyoeZXo8KzJP22C9lQAhSAelgdY3jRTq/1T9PkUOvKGPViSeu6 edwSyCzYyyeXNb/R1YMONr9iMR6rDZ8n6G1mJ8Wh5ke6ecjJZc1vRPmhkt3TzeNW1KSZvyJb1vpo V4861H9dVHihpPu7elz0JApA9UVze5WG+3+Zy9GHW9+S+9tzOXbP8rdlS5tfy+PI2fC8L8h0Wh7H 7hrXx+NgcyyXYw/N+3GMk4dImv7nU+ojM/PjssGBz+Zy9KH+6yzYyyRluRwfPYMCUH3/li1rXprn gDjUWinZT/Kc0SvM9f04NLA8zxlxafM9JvtxnjNm4eYYmv+Y64Th+ddExcPZCdimSTN/eTY48Kk8 h2wsuB/PcwbSowBU27oYdEbuU8zcpHfmPqcHZA0/OfchZp5FL/TDQFNlrtM0aBO5D2InYFvyPfPf Ssz8NEnjRcxCGhSAajtfS1s3FTEoG2p+1aQfFDErFXd9TUsHvl/IsOHWt1ya/i1d+fpltkfzPwqb xk7A5go589/CiQO3St7dzxigp1AAKiyaPl3kPHe/uMh5RQvSRUXOM7NC//1Nwad0jBV7XZidAKng M//NRVdxhQOFowBUlt2ju5vFnK1uFEP4UpHzCpZlk+u/WuTAGCe/oB66IyBaI82/3+H518SYHap6 loDMzI8t9Mx/c/e2fiTpjiSzkTsKQEW54ne6cW/wtAw2fy3T7wqdWRCTrtJbFt5Z6NBl8/9X8p8V OnP7/ndGTzrslnpeDih+239rIxYlXZFsPnJFAagok35fp7l5c1c+t1HulCWauyXrhYfDDM37cVT2 vJqUgA33+SfY9t+GW1IHQD4oAJVl/5tiakw0N3+Jfl3uf0gydyvR7LbUGSTV5TMBya75b5PZ7akj IB8UgMqyu5NMda/mX8zm7SRzg/XEo4HNvXce+VztywHpt/23YpHHM1cVBaCqXNt9E2iurHc+tFYJ qf49bsWlB6fOsIVq7gT01pn/Rm7+sNQZkA8KAICdMtnuqTM8QLXuDkj7af8dce2ZOgLyQQEAMAVx H13svfeq4mpcDui5bf/NuWy/1BmQDwoAgCmwRbqt88zUKbap3JcDenLb/0/O8nlmOjh1DOSDAgBg SoLZi1Jn2K5yXg7o3W3/jRr97cMlNVPnQD4oAACmyF+p5d5KnWK7ynU5YNLcX9HLi78kRbfXp86A /FAAAEzVHqHRXpo6xA6V43LAhm3/ZQOfSR1kh1a2/8akF6SOgfxQAABMg52sc1bvljrFDvX2TkAp zvx1sTcapg+kjoF8UQAATMeuls25SCPelzrIDvXmTkBm0mt6/sxfUrh94l9celrqHMgXBQDAtJh0 aFjc7v2zw976YGBm0nHZUOuTqYPsTGNl+zjJT0ydA/mjAACYARsKo+1TU6fYqd4oAeVZ/Ec7L3DT ealzoBgUAAAzdTolYKfKtfjLPy+pP3UWFIMCAGA2KAHbx+KPnkYBADBblIAHYvFHz6MAAOgGSsCf sfijFCgAALqFEsDijxKhAADopjqXABZ/lAoFAEC31bEEsPijdCgAAPJQpxLA4o9SogAAyEsdSgCL P0qLAgAgT1UuASz+KDUKAIC8VbEEsPij9CgAAIpQpRLA4o9KoAAAKEoVSgCLPyqDAgCgSGUuASz+ qBQKAICilbEEsPijcigAAFI4PYy2T0kdYqeG518TYzzM3F9WisV/ZedIl18iFn9MQV/qAABq671h tN0Xh1pnpA6yQ8Pzrs6kq1PH2JmNZ/4XS5qbOgvKgR0AACmdHsba70wdouzY9sdMUAAApOU6gxIw cyz+mCkKAID0KAEzwuKP2aAAAOgNlIBpYfHHbFEAAPQOSsCUsPijGygAAHoLJWCHWPzRLRQAAL2H ErBNLP7oJgoAgN5ECdgCiz+6jQIAoHdRAiSx+CMfFAAAva3mJYDFH3mhAADofTUtASz+yBMFAEA5 1KwEsPgjbxQAAOVRkxLA4o8iUAAAlEvFSwCLP4pCAQBQPhUtASz+KBIFAEA5VawEsPijaBQAAOVV kRLA4o8UKAAAyq3kJYDFH6lQAACUX0lLAIs/UqIAAKgG1xlhbPzk1DGmqjHWeZHLLxGLPxKhAACo iszcfpc6xFRl2eTvJN2fOgfqiwIAoAoyk47LhlqfTB1kyobnXxNjdqiku1JHQT1RAACUXfkW/00o AUiIAgCgzMq7+G9CCUAiFAAAZVX+xX8TSgASoAAAKKPMzI+txOK/CSUABaMAVJXJksyNiknm5s2U JZrMn9EHmjTzl2eDA59KHaTrhudfE2M8TNLdqaOg+vjLpaoszkkz19YmmZs7X5NmrnGP+JYyMz8u Gxz4bOoguRmed3WM2XPFTgByRgGorkQLh1fyvmaTrU4zOVIA/mzDtn8Vz/y3xuUAFIACUFVurTSD 7Y9p5uYt1a/LBtLM7TnV3fbfHi4HIGcUgKoy3y3F2OD6VYq5ecuCbkgx1+UPSjG3x1R/2397uByA HFEAqsotycIxmcXrU8zN2XrN6b8pxeAgS1Lkesj62p35b42dAOSEAlBRJu2eZPBJA7+TdGuS2Tkx 01VaYutTzPZU/x57w3ozf2Utz/y3Njzv6hjj80QJQBdRACrKpUcnHH9lwtld564rkgy+wJuS9k4y O73MzF/D4r8ZLgegyygA1bW7zvVdUgw21zdSzM1LtES/njXr9pPUSDI7Lbb9t2d4/jXR2AlAd1AA qmyivX+KsVlofkHSeIrZObhVD2t+L8XgRpY9JsXcxDjz35nBeT9hJwDdQAGosIZbkgKgQVst6QtJ ZnffJ3SMJXkKoJulvIyTAmf+U8VOALqAAlBhbkp2BhnNV6Wa3UXro/ThhPPrtAOw3txfwZn/NAzO +0m0eKgoAZghCkCFuevpyYYPDvwg2YfnuudCDbVuSTj/gISzi7Rh23/ZwOdSBykdLgdgFigAFWbS MzXmyR4l6w3/Z0meav4sdWK09yabfvb4wyXtl2x+cdab+8vY9p8FLgdghigA1daSOgcmm7504PuS Lkw2f3ber+Hmb1INb/TZIalmF4gz/25hJwAzQAGouBCVdCGJcyffJqls7we4IS5snpkygEsHp5xf gNKc+TfGxo8Oo+13pM6xU+wEYJooABVnlnghedOCPwTZcZJi0hxT14kWX6HXWidxjucknp+n0pz5 N8bGj3a3iyS9O4y2T0udZ6fYCcA0UAAqzqUD9KF7F6fMMDnUvEzS+1JmmCqTlmpw3k+Shlg+8XhJ f5E0Q35Kdea/cfGfs/GHRsJo+9SUmabkzzsBlADsEAWg+uY21jdfmjpEHGyeKumC1Dl2yPXubKj1 sdQxQiO+KnWGnGQmP65kZ/5ztvqp00uzE2CN50q6M3UU9C4KQB24H5c6gsw8NptLXP7F1FG248Nx qPnPqUNoxINMr04dIwcbzvyHBi5KHWRndrD4b1KOnYDBuddGi4eJnQBsBwWgBtz0TJ3TSf9UuSW2 3ndvvUSmj6aOsgW3M+Ng83iZJb9lsW+3znPkenjqHF1WhTP/rbETgNKjANREmPTe2FY+xrK4tLlE 0jslJXnE7mba5vq/cVnz7b2w+EtSzHRs6gxdVqUz/62xE4BSowDUhelYXey98WY5M49DrfdE03Ml 3ZooxfXRw4HZstb5ieY/0Jm+QKaXpI7RRRue7V+tM/+tnV6OEjDvJzFmh4oSgM1QAOpjn8Zt7b9P HWILg61vx3XN/eV2pqTJgqa2Jb0rLmw+Scv6f1rQzCkJrfabJS1InaNLNmz7Dw58PnWQnZnF4r9J OS4HDM+/hssB2BwFoEbc7B1yt9Q5tvBWWxuXNd8eFZ4k06eV3/MC1sn00Rj1uDjUGumB+/y3tNxb chtOHaNL1pv5MRXd9t+e8lwOiBm3CEISBaBuntAYW3dk6hDbNNR/XRxsvTy6PU6yFZL+t0tHvlmu d0fzfeNg640abt3cpeN2VeibeIOkh6bO0QWbXulbhzP/rZXjcsDw/Gu4HACJAlBDsbcfabqseUMc ap4Y72nuFdwOk9uZJv1I0vopHqFj0nclvSsGf1YcbD4yLmudqsGB3+eYenbGvF/ub00dowvqvPhv QglAafSlDoBiufS0xqrO87Olza+lzrJDIzY5KX1DG/4rjXifFk/s03DtL/PdXDZfFudLYbW5rzHZ HyeD36C7mr/ViP35MsLSRPmnIWjidZL2Sp1jllj8/+z0MNpWHGqdkdPxu2N4/jVxxZpDQ2hcLmm3 1HFQvMKvB4exzgfkflLRc7GFG6M1n6BBm0gdpPaW37draMy9XtKDU0eZhczkr67ZNf+dM50WB1un 5z5ntsbWPTF4drmkB6WOUmtmZ8fB5luKHMklgHraL8QOJawHhL6571e5F//1Jn8pi/82uN4Vxtrp ny65M4Nzr43WOFTcHVA7FIC6Mr1Tq9r7pI5RayvXPk2u16eOMQvrTf6ybGjgktRBdqbwxX8TSgB6 GAWgvlrmvjJ1iNq62BvBGueqvH8GJ8385Sz+U+B6Vyk+GMgtgrVT1r980AXmdmRjdPyY1DnqKNze PknyJ6XOMXO2lA/8TUuJ7g7wF2nDA7NQcRSAmnPZx7Sys3/qHLUyNv50yXr7E+I74rYyDjU/kjrG zvTQ4r/J6aW4HDA88N8mDaaOgfxRALCgYfoPjXl/6iC1sPy+XYPbZyTNTR1lRkw/j/f29/wzC3pw 8d+gJJcDsqHWx1z6ZuocyBcFAHL5U4K3z0qdo/Lczfr6z5e0d+ooM2WykzViRb23YUZ6dvH/s1Ls BLjHUyT1xFsykQ8KADaypY2V4y9NnaLKwqr2W8z9xalzzJRJ380Gm19JnWNHSrD4b7Dh7oB3po6x Q8vm/cjll6aOgfxQAPAnbnahVrb/JnWOKmqsWPtiub0vdY5ZujB1gB0pzeK/ieuMXt8JCKZPpc6A /FAAsLlmMH1ZK9b8deogVdI32j7YQ7hIUiN1llmIWV/Ws2eDpVv8N+nx5wRkfesuU3Gv6kbBKADY 2sIQGl/RivYjUgephBVrnxylL0gq9YcsTfqRjp9/R+oc21LaxX+TXr4c8OZF95h0deoYyAcFANuy Rwj6T61cU4XX06Yz2tkvhPBVSQtTR5ktl65LnWFbSr/4b7LhckBPlgA3+23qDMgHBQDb8+hgjf/W aGe/1EFKadXEE4L8W5KqUaJct6aOsLXKLP6b9OpnAmK8PXUE5IMCgB3ZJ8i/w2cCpqdvtP3cEOP3 Je2ROksX9dSbIxuj40dVavHfpCcvB9jq1AmQDwoAduZhITS+27ey87zUQcqgMTp+VJQulbQgdZau MuuZV8U2xsaPdtmnVbXFf5Ne2wkIFdnFwgNQADAV86P5lxqj7WNTB+lZ7hZGx9/mss9KaqaO033e E4tAZc/8t9ZDOwHuvnvqDMgHBQBT1XTpwjDaPl/n+kDqMD3lnNW72Vj7S5KdqYr+mTJT8ldHN0bH j6r0mf/WeuSDgSZ7bOoMyEcl/7JCrl4XOp0fa9XEE1IH6Qkr1z4tZHN+ZLIXpo6SJ3c9Xees3i3V /Mpv+29P6ssBqyYeI2nfZPORKwoAZuIxIcb/boy1Xyd3Sx0miRHvC6PttwcL/yWlPzsuQKMR5/xt ksF12fbfnoSXA0KWHZFiLopBAcBMzXPX+Y2xzpVaPvH41GEKNTr+f8Li9lWS3iepL3WcokTXcUXP rN22//akuBww4n0ye0OhM1EoCgBmxaWDQiNeE1aOj+pMr9Yn37e2/L5dw8rx0SD7rmRPTB2naCYd 1jfaPrioeY2xzhEu+5TqvvhvUvDlgMaizmsl7V/UPBSPAoBu6JPZYGh1ft4Ya79KF3uZn3n/QBd4 M6zsnBAac2+U2aBq/OfGTe8p4rLPhm1/v0Qlf4Ry1xV1OeCDPt+DTs19DpKq7V9kyIHr4e7693BH 5/rGyvbrNeJzU0ealbN8XhgdPzGs7vxG5qsk7Zo6UmruekYY6+R6Fsq2/04UcDkgTHY+LNfD85yB 9CgA6D7Xo9z0sbC4c2NY2TlBy72VOtK0nOu7hNH2O8Lczs2SnS2J+6C3dFpjbPzoPA7M4j9FOZaA MNp+h6RX53Fs9BYKAPK0t8xXhUb7tjDWPk+j7Wf17F0DF3ujb2Xn8DDa/vfQ6dwm6d2Seubpdz3G 3O3CbpeAMNr5R5ddLBb/qXGdEUY7Z3bzz1QYbY9ow+991EDhfxmHsc4H5H5S0XPRM34j6ROxYZ/U Cc1fpQ6jFWv+OjT6Xi33V4oz/elySe+Kg83TZeYzPsqI94XF7eWSLe1etPpw6Ss+d/J1etOCP8z4 IOes3s2yuR81+VFdjIbpMDs7DjbfUujIIodJFABs4bdyXWmmK7LMr9CJA/m/cW6ss2/D/WB3HSLT IarK2/oSMukHWdQpGm59a7rf21jZOdLN3y+Jp83NzmpJy6M1V2hwGi/vOcvnhbmdQcnfJtmi/OJh pygAqLkb5Lpapl+a+68yjzdoYN6vtMTGp32kMV8oG390w8P+HvUYBdtf7k+X9Bfdjw1JcunrwfWJ rG/913TCwru2+4UfXPOwxmTfkXI/zk3PLDBiHdwp+cVm4atZf/+V2/yzc4E3++6bOChafJFkfy9K cG+gAAAP4JJuNen26LrTpHtlun/DT9lqyRdu+Eft4tIic3uI5A8T2/kpZSZd5dKv5fYHyf8o2YMV tKe5HunyJ4nPHxVhnaTfm3RHNL8zuO3qG15Rvae4vbL3JCgAtXmKGUrLJO3l0l72gLrqW/yjbf1j SKXh0gGSDtCfPhrgm/6D4syV9EiXHmlu/H+PB6CFAwBQQxQAAABqiAIAAEANUQAAAKghCgAAADVE AQAAoIYoAAAA1BAFAACAGqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1BAF AACAGqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1BAFAACAGqIAAABQQxQA AABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1BAFAACAGqIAAABQQxQAAABqiAIAAEANUQAA AKghCgAAADVEAQAAoIYoAAAA1BAFAACAGqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAA oIYoAAAA1BAFAACAGqIAAABQQxQAAABqiAIAAEANUQAAAKghCgAAADVEAQAAoIYoAAAA1BAFAACA GrLUAVBz7qZVax4km7tbI4tPddNBkl4o6WGpowFdkrnpcnO/Ikrfk+kWkW+/qwAADDVJREFUTbbu 0onWTh0M9UYBQO8Z8bmNxe2jXeFkyf86dRxghsYljUXpwxpq3ZI6DLA1CgB614j3hV3bJ8jtDEnz U8cBpsqlr3rU8Rpu3Zw6C7A9FAD0vlUTTwgxXipp79RRgJ1wuf1LHOo/RWaeOgywIxQAlMOqtXuE GL4jad/UUYDtcHO9IVvWOj91EGAquAsA5bB03m3R7QjJ7kkdBdiOd7P4o0zYAUCpNEbHj3LZ51Pn ADbnrit8qHko2/4oE3YAUCrZ0MAlLr80dQ5gM+vcwwks/igbCgBKx61xsiT+skWP8I9puP+XqVMA 00UBQPkM9v/CpW+ljgFIUgyNj6TOAMwEBQClFOTnpc4AmPRDLe3/WeocwExQAFBKWV/rUkmd1DlQ by7/bOoMwExRAFBOx9sal1+eOgbqLVq4JHUGYKYoACitYMZfvkjIr9Vg89epUwAzRQFAaWVh/Rcl TabOgbqigKLcKAAorxMW3uXSd1PHQD1FZ/sf5UYBQKkZZ2FI4yYt6/9p6hDAbFAAUGoxi58XDwVC 0dz49D9KjwKAcjtx4FaTrkodA/USPbLzhNKjAKD0XOIvYxTpDt3X+mHqEMBsUQBQelFsx6JQl2jE YuoQwGxRAFB+Q80bJf0idQzUQ3A+eIpqoACgGlyfTx0BdeD3Tt7b/+3UKYBuoACgEvhQFophX9aI rUudAugGCgCqYXje1ZJuSh0D1WZyiiYqgwKA6nD7YuoIqLTxbF3r66lDAN1CAUBlRM7OkCN3u0xv tbWpcwDdQgFAddzb/J6kO1LHQDUFCiYqhgKA6hixKNOXU8dAJa3P5k58JXUIoJv69KF7F6cOgYqZ 3GVcgzaRYrSZXeLub0gxG9Xl0rf05kX3JAuw4p5F6jdLNh+V1BfW99+dOgQqxttjURpKMTqb2395 6LTvlWxRivmoJpN9Ptkbp1a0HxGCbtL6VAFQVVwCQPeZHS33NGcrS2y93L6WZDaqKsaYJbvDJJi/ JNVsVBsFAHnYS6PjT001nHu10U0m/UDD825PN9+OSjUb1UYBQC6ChWR/aWWt1lckjaeaj2rxlIVy 5ZqHuunAZPNRaRQA5CXdtuUSG3fzy5PNR6VEC8kKQAh9L5bUSDUf1UYBQF4erRUTj001PIg3tqEb /FoNNn+dbLqc7X/khgKA3IQQj041O5tc9yVJk6nmoyoSFslzfRdzHZxsPiqPAoDcJP3w0om73O0S r23FrERPt/3fmOi8UNLcVPNRfRQA5MblT9Gq9j6p5huXATA7N2lZ/09TDY/Op/+Rr77UAVBtIdqR URpNMTvG7PMhhL9KMXvKzNcpBl4wkxtfreDZTL7TFK7rdpopW+4tU+fwZPNRCxQA5MrkRytRAdDw vNujtCTJbGAWGo11h7k0P3UOVBuXAJArl56lD655WOocQJm4Itv/yB0FAHkLjcnGC1OHAEpjxPsk HZE6BqqPAoDcRYmzGWCK+hZ3DpL0oNQ5UH0UAOTOpOdpxT28nQ+YgsjDf1AQCgCKMKfR6H9+6hBA z3M3yf4udQzUAwUAhXClezkQUBqr2gdI2it1DNQDBQDFcH++lnsrdQyglwWnKKM4FAAUZX4jTDwv dQigtznb/ygMBQCF4c1mwA6MTvylpP1Tx0B9UABQHNORG+9xBrCVwMN/ULAgyVOHQG3suvEeZwBb M3tx6gioFQ+SxlOnQH1wjzOwDSvaj5D7k1LHQK2sDZLuT50CdWIv3nCvM4BNgvlRkvhzgSKtDjKt SZ0CtbKnRttPTx0C6CVmxs4YinZ/kGx16hSolyC9MnUGoGesau/j0jNTx0C9mOv+YO7sAKBYpuN0 rg+kjgH0ghD1RnFHFgoWpdXBXbemDoK6sUWNic4xqVMAyY34XEmvTR0D9WOmW4NMN6QOgvpx10k8 EwB1FxZNvFHSQ1PnQA2ZfhVMTgFACn8ZFrcHU4cAklm55qGyeEbqGKgnk18fshivTx0EdWUjWj6+ Z+oUQArBGmdJtih1DtRTZo0bggbm/UpSTB0GtbSg0bBPacz7UwcBitQYbb9W0rGpc6C2oubPvTFo iY1LujF1GtSTS88O6pyXOgdQlL5V7UNcOjd1DtTa9XqtdTbdenJl0iioN9dxYaz9Hp4QiMpbOX5A jPZZSXNSR0Gd+ZXSxntPbeP/AJJx/VNY1fmULvBm6ihAHhpj40cHsyskX5w6C+rNTFdIGwtAZtmV 4q2ASM31ssbqzmV8MBCVMuJzw2j7NHf7jCQegIXUYhYmvy1t9vKJMDp+rWR/lS4T8CfjMj893t06 WyM2mToMMGNj7WcH6cNyPT51FECSZHZ1HGw+Rdri8ZP21VR5gK0MyO39YXH7x42V7eO4LIBScbe+ lZ3n2dj4F4Pr2yz+6C1+2aZ/+vOHrpZPPD404nVJ8gA7dqdkHw/yyybXNX+gt9ra1IGALVzgTd3f OSBIB8n1Skn7p44EbEsM4bFa2n+9tNX7p8NY58dyf3KaWMCUrDfpxy79Wu53yexOma9LHQpT5LZI buW/2yOoT+4PculBwfVQNz1BEs+zQE8z6UfZUOtPr2Pf6lns8ROSUQDQy+a4dKCkA7VpHeHuwXKx CnzeeOMvwcRvP5SHu124+f/e4hWUcU72SUnrC00EAADytj6G9Z/e/Ae2fAf1mxb8QdLnikwEAABy 9xkNLvjj5j8Qtv6KmIV3i3cDAABQFR5DeP/WP/iAAqAT+3/u5pcWEgkAAOTK3S7R0v6fbf3jDywA klx6T/6RAABA3ryRvW9bP77NAqDBgf9x6eu5JgIAALly6ataOu+qbf3ctguAJLcwLO4IAACgrNZ5 DG/Z3k9utwBosP8XcluZSyQAAJAv0wc03P/L7f309guApNjqH5F0c5cjAQCAfN0SJ5rv3dEX7LAA aImNm/t2tw8AAEDvMbelO3tvyo4LgKRs2cDnJF3UtVQAACBP/54ta35pZ1+00wIgSbGv+QZJ1886 EgAAyNON0ZrHT+ULp1QAdLytiSEcI6k9m1QAACA3nRizYzRoq6fyxVMrAJK0tP9ncuPzAAAA9CBz DWp4/jVT/vrpDghj7fPkesN0vw8AAOTmw3Go9ebpfMPUdwA2ig9rvslln53u9wEAgO5z+Rfj7s2l 0/2+aRcAHWOZ39P/Kpcun/b3AgCArnHTt3xh6+U6xrLpfu+0LwH8ybm+S+i0vy3ZE2d8DAAAMEP2 k2j9z5nqh/62Nv0dgE2W2H1xzrqDzfX9GR8DAABMm0k/jOvXHTbTxX/jMWbpXB+wTudik46Y9bEA AMAOufxSb7ZepiU2PpvjzHwHYJMlNu67N/9O0vmzPhYAANg+04XebB0928V/w6G6xd3Cqs6pcv2z pEbXjgsAADJJp8XB5ntl5t04YPcKwCZj7YOC65OS9uj6sQEAqBvXH4Ls1ZPLmt/o5mG7XwAkaez+ B5v3XWjS3+ZyfAAAasBdV/ic7FU6fv4d3T727D8DsC2DC/7o9zSPkPwkSWtymQEAQHXdL/Nhv7f5 vDwWfymvHYDNrVq7R4jh/ZKOzX0WAAAl5/JLXXa8hlq35Dkn/wKwUd/KzuEx+DlyPaqomQAAlMiv gtsJ3b7Wvz2FFQBJ0rk+p9HuvMJN/yRp/0JnAwDQm34j2Vi0/o9o0CaKGlpsAdhkxENj14kjXBqR +5OTZAAAIK3rzHVWdm/zkxqxyaKHpykAm7hb39jE4VF+rKSjJLWS5gEAIF/jkr4Q3C6cHOr/erfu 6Z+JtAVgc2O+sOGdl0TTceb6G+V1hwIAAMWKLn07mC7M2s3P6WS7P3UgqZcKwObO9AV9rYkDYtSh ZjrU5U9Wr2YFAOCBfiPpcnO/POubvEInLLwrdaCtlWNRXbF290awA122v1z7m+mxLnu05ItTRwMA 1JndY/Ib3HW9TDeY/IYs+g80PO/21Ml2phwFYHvGfKGyiQfJbL4sm9/nYYErLkwdCwBQPaawetLi /fLGGrmvUaP/ztm8jhcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEX/H5Un2YbFYL4kAAAAAElFTkSu QmCC"
      width={512}
      height={512}
      style={{
        overflow: "visible",
      }}
    />
  </svg>
);
export const FigmaIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={64}
    height={64}
    viewBox="0 0 7.678 7.68"
    preserveAspectRatio="xMidYMid meet"
    className={`w-5 h-auto mr-2 -ml-1 ${className}`}
    {...props}
  >
    <path
      fill="#0acf83"
      d="M2.56 7.68A1.28 1.28 0 0 0 3.84 6.4V5.12H2.56a1.28 1.28 0 0 0 0 2.56z"
    />
    <path
      fill="#a259ff"
      d="M1.28 3.84a1.28 1.28 0 0 1 1.28-1.28h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z"
    />
    <path
      fill="#f24e1e"
      d="M1.28 1.28A1.28 1.28 0 0 1 2.559 0h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z"
    />
    <path fill="#ff7262" d="M3.84 0h1.28a1.28 1.28 0 0 1 0 2.56H3.84z" />
    <path
      fill="#1abcfe"
      d="M6.4 3.84a1.28 1.28 0 0 1-2.56 0 1.28 1.28 0 0 1 2.56 0z"
    />
  </svg>
);
export const TailwindIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    preserveAspectRatio="xMidYMid meet"
    className={`w-7 h-auto mr-2 -ml-2 ${className}`}
    {...props}
  >
    <path
      d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
      style={{
        fill: "#44a8b3",
      }}
    />
  </svg>
);
export const FlutterIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={2014}
    height={2500}
    viewBox="0.29 0.22 77.26 95.75"
    preserveAspectRatio="xMidYMid meet"
    className={`w-4 h-auto mr-2 -ml-2 ${className}`}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#02539a"
        d="M48.75 95.97 22.84 70.23l14.32-14.57 40.39 40.31z"
      />
      <g fill="#45d1fd">
        <path
          fillOpacity={0.85}
          d="M22.52 70.25 48.2 44.57h28.87L37.12 84.52z"
        />
        <path d="m.29 47.85 14.58 14.57L77.07.22H48.05z" />
      </g>
    </g>
  </svg>
);
export const TsIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
    className={`w-5 h-full mr-2 -ml-2 ${className}`}
    {...props}
  >
    <rect fill="#3178c6" height="512" rx="50" width="512" />
    <rect fill="#3178c6" height="512" rx="50" width="512" />
    <path
      clipRule="evenodd"
      d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);
export const ExpressIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-6 h-auto mr-2 -ml-1 border-[1px] border-dark/25 rounded-md ${className}`}
    {...props}
  >
    <rect width={256} height={256} rx={60} fill="#f5f5f5" />
    <path
      className="stroke-dark dark:stroke-dark fill-dark"
      strokeWidth="1"
      d="M228 182.937a12.732 12.732 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659-39.978-52.1a13.289 13.289 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257 10.287-13.623 20.462-26.634 29.97-40.09a11.952 11.952 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.558 5.558 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433ZM28 124.5c1.168-5.56 1.89-11.621 3.503-17.292 9.619-34.195 48.818-48.43 75.785-27.245 15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.864 33.864 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.145 45.145 0 0 1-21.573 32.972 52.263 52.263 0 0 1-60.884-7.784 54.767 54.767 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A860.69 860.69 0 0 1 28 124.5Zm9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98-24.02-.334-41.201 17.458-42.258 43.869l.056.111Z"
    />

    <style />
  </svg>
);
export const ReactIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1200}
    height={800}
    viewBox="-73.59 -109.225 637.78 655.35"
    preserveAspectRatio="xMidYMid meet"
    className={`w-10 h-full -ml-4 ${className}`}
    {...props}
  >
    <g fill="#61DAFB" transform="translate(-175.7 -78)">
      <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
      <circle cx={420.9} cy={296.5} r={45.7} />
    </g>
  </svg>
);
export const SqlIcon = ({ className, ...props }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="-8.78 0 70 70"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={`w-6 h-full -ml-2 mr-1 ${className}`}
    {...props}
  >
    <path
      d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z"
      fill="#00bcf2"
      transform="translate(-830.906 -943.981)"
    />
  </svg>
);
export const FramerMotionIcon = ({ className, ...props }) => (
  <svg
    height="2500"
    viewBox="3.7 3.7 43.6 43.6"
    width="2500"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={`w-4 h-full -ml-1 mr-2 ${className}`}
    {...props}
  >
    <path
      d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
      fill="#59529d"
    />
    <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
    <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96" />
  </svg>
);
export const ReduxIcon = ({ className, ...props }) => (
  <svg
    width="2500"
    height="2383"
    viewBox="0 0 256 244"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={`w-4 h-full -ml-3 mr-2 ${className}`}
    {...props}
  >
    <path
      d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
      fill="#764ABC"
    />
  </svg>
);
export const MongoIcon = ({ className, ...props }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={`w-7 h-full -ml-3 mr-1 my-0.5 ${className}`}
    {...props}
  >
    <circle cx="512" cy="512" r="512" fill="#13aa52" />
    <path
      d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
      fill="#fff"
    />
  </svg>
);
export const StrapiIcon = ({ className, ...props }) => (
  <svg
    width="600"
    height="600"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={`w-7 h-full -ml-3 mr-2 ${className}`}
    {...props}
  >
    <path
      d="M0 208C0 109.948 0 60.9218 30.4609 30.4609C60.9218 0 109.948 0 208 0H392C490.052 0 539.078 0 569.539 30.4609C600 60.9218 600 109.948 600 208V392C600 490.052 600 539.078 569.539 569.539C539.078 600 490.052 600 392 600H208C109.948 600 60.9218 600 30.4609 569.539C0 539.078 0 490.052 0 392V208Z"
      fill="#4945FF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M414 182H212V285H315V388H418V186C418 183.791 416.209 182 414 182Z"
      fill="white"
    />
    <rect x="311" y="285" width="4" height="4" fill="white" />
    <path
      d="M212 285H311C313.209 285 315 286.791 315 289V388H216C213.791 388 212 386.209 212 384V285Z"
      fill="#9593FF"
    />
    <path
      d="M315 388H418L318.414 487.586C317.154 488.846 315 487.953 315 486.172V388Z"
      fill="#9593FF"
    />
    <path
      d="M212 285H113.828C112.046 285 111.154 282.846 112.414 281.586L212 182V285Z"
      fill="#9593FF"
    />
  </svg>
);
export const StripeIcon = ({ className, ...props }) => (
  <svg
    width="600"
    height="600"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={`w-8 h-full -ml-2 -mr-1 -mb-2 ${className}`}
    {...props}
  >
    <path fill="#635bff" d="M0 0h400v400H0z" />
    <path
      d="M184.4 155.5c0-9.4 7.7-13.1 20.5-13.1 18.4 0 41.6 5.6 60 15.5v-56.8C244.8 93.1 225 90 205 90c-49.1 0-81.7 25.6-81.7 68.4 0 66.7 91.9 56.1 91.9 84.9 0 11.1-9.7 14.7-23.2 14.7-20.1 0-45.7-8.2-66-19.3v57.5c22.5 9.7 45.2 13.8 66 13.8 50.3 0 84.9-24.9 84.9-68.2-.4-72-92.5-59.2-92.5-86.3z"
      fill="#ffffff"
    />
  </svg>
);
