import Image from "next/image";

export default function Input({ src, type, placeholder, className }) {
  if (src) {
    return (
      <div className="d-flex align-items-center justify-content-center gap-2 ps-2 rounded input-with-icon">
        <Image src={src} width={16} height={16} alt='' />
        <input
          type={type}
          className={`form-control border-0 input ${className}`}
          placeholder={placeholder}
        />
        <div className="rounded outline"></div>
      </div>
    )
  }
  return (
    <>
      <input
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
      />
    </>
  );
}

Input.defaultProps = {
  src: "",
  type: "text",
  placeholder: "",
  className: "",
};
