import { FaHome, FaUser, FaShoppingCart } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BiDonateBlood } from "react-icons/bi";
import { FaMoneyBill } from "react-icons/fa6";

interface NavItem {
  icon: React.ReactNode;
  title: string;
  path?: string;
  subMenu?: { title: string; path: string }[];
}

export const navItems: NavItem[] = [
  {
    icon: <FaHome />,
    title: "Members",
    path: "members",
  },

  {
    icon: <FaUser />,
    title: "Groups",
    path: "#",
    subMenu: [
      { title: "Children Service", path: "groups/cs" },
      { title: "Junior Youth", path: "groups/jy" },
      { title: "Young Peoples Guild", path: "groups/ypg" },

      { title: "Young Adult Fellowship", path: "groups/yaf" },
      { title: "Mens Fellowship", path: "groups/mens" },
      { title: "Womens Fellowship", path: "groups/womens" },
    ],
  },
  {
    icon: <FaMoneyBill />,
    title: "Finances",
    path: "#",
    subMenu: [
      { title: "Offertory", path: "finance/offertory" },
      { title: "Tithes", path: "finance/tithes" },
      { title: "Thanksgiving", path: "finance/thanksgiving" },
      { title: "Pledges", path: "finance/pledges" },
    ],
  },
  {
    icon: <BiDonateBlood />,
    title: "Donations",
    path: "donations",
  },
  {
    icon: <HiUserGroup />,
    title: "Attendance",
    path: "attendance",
  },
];
