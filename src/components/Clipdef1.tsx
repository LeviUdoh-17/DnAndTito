function ClipDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden
      style={{ position: "absolute" }}
    >
      <defs>
        <clipPath id="custom-clip" clipPathUnits="objectBoundingBox">
          <path d="M0 0 L0.13 0 C0.195 0 0.195 0.53 0.26 0.53 L0.91 0.53 C0.97 0.53 1 0.59 1 1 L1 0 L0 0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default ClipDefs;