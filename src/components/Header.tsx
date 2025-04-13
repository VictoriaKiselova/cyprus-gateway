import Image from "next/image";
import Link from "next/link";
import Icon from "../components/Icon";

export default function Header() {
  return (
    <header
      className="py-5 px-12 flex items-center justify-between"
      style={{
        background: "linear-gradient(90.49deg, #53269D 0%, #6D31D0 100.2%)",
      }}>
      <Image
        className="w-[100px] h-[80px]"
        src="/Images/logo.png"
        alt="logo"
        width={100}
        height={80}
      />

      <Link href="/#">
        <Icon className="w-[40px] h-[30px]" id="icon-menu" color="text-white" />
      </Link>
    </header>
  );
}
