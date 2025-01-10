import { useState } from "react";
import { asset } from "../assets/asset";
import AccDropdown from "./Home/Dropdown";
import AccDropModal from "./Home/Modal";
import { NavLink } from "react-router";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Button,
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

const value = true;

const Navbarmenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const menuItem = [
    " Eat & Drink",
    "Club",
    "Things to do",
    "Shoping",
    "Account",
    "Contact",
  ];
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
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
          <NavLink to="/drink" className="text-black ">Eat & Drink</NavLink>
        </NavbarItem>

        <NavbarItem className="ps-6">
          <Link className="text-black ">
            {" "}
            Club <sup className=" text-[8px] text-[#0E8BFF] "> +HOT </sup>{" "}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="none">
                {" "}
                Things to do{" "}
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
          <Link className="foreground">
            <img src={asset.shopping} alt="" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          {value === true ?  <AccDropModal /> : <AccDropdown />}
        </NavbarItem>
        <NavbarItem>
          <Button color="primary">Contact Now</Button>
        </NavbarItem>
      </NavbarContent>

      <div className="lg:hidden">

        <NavbarContent className="w-full" justify="end">
          <NavbarItem className=" hidden lg:flex"> </NavbarItem>
          <NavbarItem>
            <img className="" src={asset.shopping} alt="" />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItem.map((item, i) => (
            <NavbarMenuItem key={i}>
              <NavLink className="w-full text-gray-800 pt-4 cursor-pointer">
                {" "}
                {item}{" "}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </div>
          <button>
            
          </button>
          <Modal>

          </Modal>


    </Navbar>
  );
};

export default Navbarmenu;
