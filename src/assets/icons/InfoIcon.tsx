export const InfoIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
            <path d="M12 19.5V11M12 5.5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}