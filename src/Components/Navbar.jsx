import { useState } from "react";
import { asset } from "../assets/asset";
import AccDropdown from "./Home/Dropdown";
import AccDropModal from "./Home/Modal";
import { NavLink } from "react-router";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Button,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Modal,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { themeColor } from "../lib/utlits";
import { ShoppingNav } from "./Common/icon";

const value = true;

const Navbarmenu = ({ isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const menuItem = [
    { name: "Eat & Drink", path: "/drink" },
    { name: "Club", path: "/club" },
    { name: "Shoping", path: "/cart" },
    { name: "Account", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className={themeColor(isDark)}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-level={isMenuOpen ? "Close menu" : "Open menu"}
        ></NavbarMenuToggle>
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3">
        <NavbarBrand>
          <NavLink to="/">
            <img
              className="w-[166px] h-[72px] pt-[13px] pb-[14px]"
              src={asset.logo}
              alt=""
            />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 justify-between items-center font-Red-Hat mx-16 cursor-pointer">
        <NavbarBrand>
          <NavLink to="/">
            <img
              src={asset.logo}
              className="w-[166px] h-[72px] pt-[13px] pb-[14px]"
              alt=""
            />
          </NavLink>
        </NavbarBrand>
        <NavbarItem>
          <NavLink to="/drink" className={ isDark ? " text-white" : "text-black"} >
            Eat & Drink
          </NavLink>
        </NavbarItem>

        <NavbarItem className="ps-6">
          <NavLink to='/club 'className={isDark ? "text-white": "text-black"}>
            {" "}
            Club <sup className={cn("text-[8px]", isDark ? "text-pink-500" : "text-[#0E8BFF]")}> +HOT </sup>{" "}
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <Dropdown className={isDark ? "bg-slate-800 text-white" : ""}>
            <DropdownTrigger>
              <Button variant="none">
                Things to do
                <ChevronDownIcon className="w-4 h-4 text-[#0E8BFF] " />{" "}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => alert(key)}
            >
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/cart" className="foreground">
           <ShoppingNav isDark={isDark} />
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          {value === true ? <AccDropModal isDark = {isDark} /> : <AccDropdown />}
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/contact">
            <button
              className="bg-[#0E8BFF] p-2 rounded-lg text-white font-bold text-sm ms-32 md:ms-0 hover:scale-105"
              color="primary"
            >
              Contact Now
            </button>
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <div className="lg:hidden">
        <NavbarContent className="w-full" justify="end">
          <NavbarItem className=" hidden lg:flex"> </NavbarItem>
          <NavbarItem>
            <NavLink to="/cart">
              <img className="" src={asset.shopping} alt="" />
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItem.map((item, i) => (
            <NavbarMenuItem key={i}>
              <NavLink
                to={item.path}
                className="w-full text-gray-800 pt-4 cursor-pointer"
              >
                {" "}
                {item.name}{" "}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
      <button></button>
      <Modal></Modal>
    </Navbar>
  );
};

export default Navbarmenu;
