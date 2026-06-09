import {
  BookOpen,
  ChartPie,
  FolderClosed,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import { ElementType } from "react";

interface NavItem {
  title: string;
  href?: string;
  icon: ElementType;
}

const navItems: NavItem[] = [
  {
    title: "Default",
    href: "/overview",
    icon: ChartPie,
  },
  {
    title: "User",
    href: "/user",
    icon: ShoppingBag,
  },
  {
    title: "Driver",
    href: "/driver",
    icon: FolderClosed,
  },
  {
    title: "Payment",
    href: "/payment",
    icon: Wallet,
  },
  {
    title: "Rides",
    href: "/rides",
    icon: BookOpen,
  },
];

export default navItems;
