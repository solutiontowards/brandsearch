export default function TrafficTrend() {
  return (
    <div className="flex justify-center">
      <svg
        width="150"
        height="55"
        viewBox="0 0 150 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="trendGradient" x1="0" y1="0" x2="150" y2="0">
            <stop offset="0%" stopColor="#66C8FF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        <path
          d="M2 42
             C15 38 18 26 30 24
             C45 21 52 35 68 28
             C84 20 96 10 110 16
             C123 22 132 14 148 8"
          stroke="url(#trendGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {[2,30,58,86,114,142].map((x,index)=>(
          <circle
            key={index}
            cx={x}
            cy={45}
            r="2"
            fill="#D9D9D9"
          />
        ))}
      </svg>
    </div>
  );
}