import Link from "next/link";

interface IMenuLink {
  text: string;
}

const MenuLink = ({ text }: IMenuLink) => {
  return (
    <Link href="" className="mr-7">
      {text}
    </Link>
  );
};

export default MenuLink;
