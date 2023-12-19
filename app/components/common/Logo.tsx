import Image from "next/image";

export default function PeediLogo(props: { isCenter: any }) {
  const isCenter = props.isCenter;
  return (
    <div>
      <Image
        src="/assets/peedi-logo.svg"
        width={100}
        alt="Peedi"
        height={90}
        className={"block dark:hidden" + (isCenter ? " m-auto" : "")}
      />
      <Image
        src="/assets/peedi-logo-white.svg"
        width={100}
        alt="Peedi"
        height={90}
        className={"hidden dark:block" + (isCenter ? " m-auto" : "")}
      />
    </div>
  );
}
