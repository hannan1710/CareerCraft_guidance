export const Logo = ({ className = "h-10 w-10" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B9FE8" />
          <stop offset="100%" stopColor="#0B5A8F" />
        </linearGradient>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDB913" />
          <stop offset="100%" stopColor="#F15A24" />
        </linearGradient>
      </defs>
      
      {/* Person head (circle) */}
      <circle cx="260" cy="150" r="28" fill="#3B9FE8" />
      
      {/* Person body forming upward curve */}
      <path 
        d="M 260 178 
           Q 240 220, 220 280
           Q 210 320, 200 380
           L 240 380
           Q 245 340, 250 300
           Q 255 260, 260 220
           Q 265 260, 270 300
           Q 275 340, 280 380
           L 320 380
           Q 310 320, 300 280
           Q 280 220, 260 178 Z" 
        fill="url(#blueGradient)"
      />
      
      {/* Upward arrow */}
      <path 
        d="M 320 100 L 360 140 L 340 140 L 340 220 L 300 220 L 300 140 L 280 140 Z" 
        fill="#3B9FE8"
      />
      
      {/* Orange growth curve 1 */}
      <path 
        d="M 330 380 Q 380 280, 400 180 Q 410 140, 420 100" 
        stroke="url(#orangeGradient)" 
        strokeWidth="20" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Orange growth curve 2 */}
      <path 
        d="M 350 390 Q 410 300, 430 200 Q 440 160, 450 120" 
        stroke="#F15A24" 
        strokeWidth="16" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Black accent line */}
      <path 
        d="M 340 385 Q 395 290, 415 190 Q 425 150, 435 110" 
        stroke="#000000" 
        strokeWidth="6" 
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
};
