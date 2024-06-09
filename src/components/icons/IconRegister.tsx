type IconRegisterProps = {
  size: number;
};

export default function IconRegister({ size }: IconRegisterProps) {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0.5C8.12108 0.5 6.28435 1.05717 4.72209 2.10104C3.15982 3.14491 1.94218 4.62861 1.22315 6.36451C0.504116 8.10041 0.315985 10.0105 0.682544 11.8534C1.0491 13.6962 1.95389 15.3889 3.28249 16.7175C4.61109 18.0461 6.30383 18.9509 8.14665 19.3175C9.98947 19.684 11.8996 19.4959 13.6355 18.7769C15.3714 18.0578 16.8551 16.8402 17.899 15.2779C18.9428 13.7157 19.5 11.8789 19.5 10C19.4971 7.48134 18.4953 5.06667 16.7143 3.2857C14.9333 1.50474 12.5187 0.502911 10 0.5ZM14.242 11H11V14.242C11 14.5072 10.8946 14.7616 10.7071 14.9491C10.5196 15.1366 10.2652 15.242 10 15.242C9.73479 15.242 9.48043 15.1366 9.2929 14.9491C9.10536 14.7616 9 14.5072 9 14.242V11H5.758C5.49279 11 5.23843 10.8946 5.0509 10.7071C4.86336 10.5196 4.758 10.2652 4.758 10C4.758 9.73478 4.86336 9.48043 5.0509 9.29289C5.23843 9.10536 5.49279 9 5.758 9H9V5.758C9 5.49278 9.10536 5.23843 9.2929 5.05089C9.48043 4.86336 9.73479 4.758 10 4.758C10.2652 4.758 10.5196 4.86336 10.7071 5.05089C10.8946 5.23843 11 5.49278 11 5.758V9H14.242C14.5072 9 14.7616 9.10536 14.9491 9.29289C15.1366 9.48043 15.242 9.73478 15.242 10C15.242 10.2652 15.1366 10.5196 14.9491 10.7071C14.7616 10.8946 14.5072 11 14.242 11Z"
        fill="#203D59"
      />
    </svg>
  );
}
