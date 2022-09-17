const style = {
  height: "88px",
  filter: "drop-shadow(0px 4px 15px rgba(55, 184, 136, 0.1));"
};

export default function Header() {
  return (
    <div
      className="w-full flex justify-center items-center bg-transparent top-0 fixed"
      style={style}
    >
      <p className="extra-bold-head-3">Logo</p>
    </div>
  );
}
