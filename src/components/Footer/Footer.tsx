const style = {
  height: "88px",
  boxShadow: "0px 4px 15px rgba(55, 184, 136, 0.1)"
}

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center bg-system-black" style={style}>
      <p className="medium-tiny text-system-white">© All rights reserved 2022 - Illustration by Freepik</p>
    </div>
  )
}
