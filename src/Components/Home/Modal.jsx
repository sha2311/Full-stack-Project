import React, { useState } from "react";
import { asset } from "../../assets/asset";
import { UserIcon } from "@heroicons/react/24/outline";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";

const AccDropModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandle = () => {
    setIsOpen(true);
  };
  const closeHandle = () => {
    setIsOpen(false);
  };
  return (
    <section>
        <Button onPress={openHandle} variant="none">
                {" "}
                <UserIcon className="w-4 h-4 text-gray-500  " /> Account
              </Button>
      <Modal
        isOpen={isOpen}
        backdrop="blur"
        size="5xl"
        placement="top"
        onClose={closeHandle}
      >
        <ModalContent>
          <ModalBody className="px-0 py-0">
            <div className="flex flex-col md:flex-row overflow-y-auto md:overflow-y-visible font-Red-Hat">
              {/* left-side */}
              <div className='bg-[url("LoginImg.png")] bg-no-repeat bg-cover bg-center flex flex-col w-fit   md:w-1/3'>
                <h2 className="font-bold text-4xl md:text-[48px] text-[#FFFFFF] leading-[63px] pt-6 text-center md:text-start md:pt-[50px] pb-4 lg:ps-[30px] md:ps-4 ">
                  Sign Up
                </h2>
                <p className="text-[14px] w-full h-full lg:w-[391px] md:h-[80px] pb-5 md:pb-0 text-center md:text-start px-2 md:px-0 md:ps-5 lg:ps-[30px] lg:pr-[60px] font-light text-[#FFFFFF]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tellus ullamcorper hendrerit quis purus pellentesque. Ac
                  sagittis, convallis non tincidunt interdum eu nullam aliquam
                  maecenas. Enim sed tortor morbi ut suspendisse.{" "}
                </p>
              </div>
              {/* right-side */}
              <div className="w-fit md:w-2/3 p-4 md:p-8 bg-white mx-[50px]">
                <div>
                  <img
                    className="w-fit lg:w-[208px] h-auto lg:h-[79px] mx-auto"
                    src={asset.logo}
                    alt=""
                  />
                  <h2 className="text-[32px] font-bold text-[#26395C] leading-[42px] pt-7">
                    {" "}
                    Sign up and get exploring!
                  </h2>
                  <p className="text-[15px] font-[500] leading-[19px] pt-2 text-[#26395C]">
                    {" "}
                    Already have an account?{" "}
                    <a href="">
                      {" "}
                      <span className="font-bold text-[#0E8BFF]">Sign In</span>
                    </a>{" "}
                  </p>
                </div>
                {/* Button-Section */}
                <div className="flex flex-col gap-5 mt-5">
                  <button className="flex justify-center items-center w-full border border-[#0E8BFF] py-3 px-[50px] rounded-[8px] ">
                    <img className="mr-2" src={asset.google} alt="" />
                    <span className="text-[15px] font-bold text-[#26395C] leading-[16px]">
                      {" "}
                      Sign Up with Google
                    </span>
                  </button>
                  <button className="flex justify-center items-center w-full border border-[#0E8BFF] py-3 px-[50px] rounded-[8px]  ">
                    <img className="mr-2" src={asset.facebook} alt="" />
                    <span className="text-[15px] font-bold text-[#26395C] leading-[16px]">
                      Sign Up with Facebook
                    </span>
                  </button>
                  <button className="flex justify-center items-center w-full border border-[#0E8BFF] py-3 px-[50px] rounded-[8px]">
                    <img className="mr-2" src={asset.apple} alt="" />
                    <span className="text-[15px] font-bold text-[#26395C] leading-[16px]">
                      Sign Up with Apple
                    </span>
                  </button>
                </div>
                {/* divider section */}
                <div className="flex items-center text-center mt-7  ">
                  <div className="flex-grow border-t border-[#E4E7EC]"></div>
                  <span className="text-[#26395C] px-[13px]">
                    or continue with
                  </span>
                  <div className="flex-grow border-t border-[#E4E7EC]"></div>
                </div>
                {/* Manual Signup Form */}
                <form action="" className="mt-[30px] font-Red-Hat ">
                  <div className="mb-10">
                    <Input
                      type="email"
                      label="Email"
                      placeholder="admin@gmail.com"
                      labelPlacement="outside"
                    />
                  </div>

                  <div className="mt-12">
                    <Input
                      type="password"
                      label="Password"
                      placeholder="*****************"
                      labelPlacement="outside"
                    />
                  </div>
                  <button className="bg-[#0E8BFF] w-full rounded-[12px] px-[28px] py-[12px] mt-5 text-white font-bold">
                    Sign Up
                  </button>
                  <p className="text-[12px] leading-[19px] mt-[12px] text-center">
                    By creating an account, you agree to our{" "}
                    <a href="">
                      {" "}
                      <span className="text-[#0E8BFF]">
                        Terms & Conditions{" "}
                      </span>{" "}
                    </a>{" "}
                    and{" "}
                    <a href="">
                      <span className="text-[#0E8BFF]">Privacy Policy.</span>
                    </a>{" "}
                  </p>
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default AccDropModal;
