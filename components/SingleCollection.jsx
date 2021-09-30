import Image from "next/image";

export default function SingleCollection({ src, className, name, price }) {
  return (
    <div className={`single-collection ${className}`}>
      <Image
        src={src}
        alt="collections"
        width="100%"
        height="100%"
        layout="responsive"
      />
      <div className="details">
        <h6>{name}</h6>
        <h6>&#8358; {price}</h6>
      </div>
    </div>
  );
}
