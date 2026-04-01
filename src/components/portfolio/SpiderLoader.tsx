interface SpiderLoaderProps {
  visible: boolean;
}

const SpiderLoader = ({ visible }: SpiderLoaderProps) => {
  return (
    <div className={`loader-screen ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={!visible}>
      <div className="loader-web">
        <div className="loader-thread" />
        <div className="loader-spider" />
      </div>
    </div>
  );
};

export default SpiderLoader;