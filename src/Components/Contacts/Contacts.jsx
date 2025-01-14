import React from "react";
import { asset, contactData } from "../../assets/asset";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import Accordions from "./According";

const Contacts = () => {
  return (
    <section className="bg-[#FBFCFF]">
      <div className="flex flex-col md:flex-row lg:justify-between lg:gap-24 ">
        {/* left side */}
        <div className=" w-full md:w-[416px] h-auto md:h-[217px] md:ms-44 md:mt-44 text-center md:text-left px-5 md:px-0 ">
          <h2 className="text-4xl font-bold text-[#26395C]"> Contact Us</h2>
          <p className="text-[#656B89] pt-2 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc,
            quisque ultricies netus elit massa aliquam quis cras. Enim leo, in
            massa sapien facilisi netu.
          </p>
          <p className="flex items-center md:justify-normal justify-center gap-3 text-[#26395C] font-medium ">
            {" "}
            <img className="size-5" src={asset.phones} alt="" /> (840) 371 -
            2514
          </p>
          <p className="flex items-center justify-center md:justify-normal gap-3 text-[#26395C] font-medium pt-2.5">
            {" "}
            <img className="w-5 h-4" src={asset.email} alt="" />{" "}
            chills@chillsbay.com
          </p>
        </div>
        {/* right side */}
        <div className="md:w-[610px] md:h-[646px] mt-16 px-10">
          <form action="">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                className="w-full md:max-w-xs "
                label="Frist Name"
                placeholder="Enter Frist Name"
                labelPlacement="outside"
                type="text"
              />
              <Input
                className="w-full md:max-w-xs"
                placeholder="Enter Last Name"
                label="Last Name"
                labelPlacement="outside"
                type="text"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-8">
              <Input
                className="w-full md:max-w-xs"
                label="Email Address"
                placeholder="admin@gmail.com"
                labelPlacement="outside"
                type="email"
              />
              <Input
                className="w-full md:max-w-xs"
                placeholder="Phone Number"
                label="Phone number"
                labelPlacement="outside"
                type="number"
              />
            </div>
            <Select
              label="Subject"
              labelPlacement="outside"
              placeholder="Select Option"
              className="pb-8"
            >
              <SelectItem>Travel How to cancel</SelectItem>
              <SelectItem>How to Booking Cancel</SelectItem>
              <SelectItem>How to Account Delete</SelectItem>
            </Select>
            <Textarea label="Message" labelPlacement="outside" />
            <Button className="bg-[#0E8BFF] text-white w-full font-semibold mt-8 rounded-md">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3 mt-16 md:mt-0">
          {contactData.map((item, i) => (
            <div key={i}>
              <img
                className="flex justify-center items-center mx-auto"
                src={item.img}
                alt=""
              />
              <div className="w-[277px] mx-auto text-center">
                <h3 className="text-[22px] text-[#26395C] font-bold mt-5">
                  {item.heading}{" "}
                </h3>
                <p className="py-3 text-[#656B89]">{item.description} </p>
                <a className="text-[#0E8BFF]" href="#">
                  {item.website}{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[777px] h-auto pb-10 mt-10 md:mt-0 mx-auto px-5 md:px-0">
        <div className="flex flex-col items-center md:mt-24">
          <h2 className="font-bold text-[#26395C] text-3xl ">
            Frequently Asked Questions
          </h2>
          <p className="text-[#656B89] md:w-[631px] text-center  pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
            nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget
            venenatis tristique morbi.
          </p>
        </div>

        <div className="mt-11">
          <Accordions />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
