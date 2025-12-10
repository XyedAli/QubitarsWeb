import Threads from "./Threads";

type ThreadsCircleProps = {
  size?: number | string;
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  rotate?: number;
  className?: string;
};

const ThreadsCircle = ({
  size = 420,
  color = [0.82, 0.88, 0.96],
  amplitude = 1.05,
  distance = 0.18,
  rotate = 18,
  className = "",
}: ThreadsCircleProps) => {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={`threads-circle pointer-events-none ${className}`}
      style={{
        width: dimension,
        height: dimension,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div className="threads-circle-mask">
        <Threads
          className="threads-container w-full h-full opacity-90"
          color={color}
          amplitude={amplitude}
          distance={distance}
          circularMode
          enableMouseInteraction={false}
        />
      </div>
    </div>
  );
};

export default ThreadsCircle;

