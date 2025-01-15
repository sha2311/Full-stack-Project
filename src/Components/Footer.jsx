import { Button, cn } from "@nextui-org/react";
import { asset } from "../assets/asset";

const footerData = {
  socialIcon: [
    asset.fb,
    asset.instragram,
    asset.yt,
    asset.twitter,
    asset.tiktok,
    asset.linkdin,
  ],

  sections: [
    {
      title: "Menu",
      menus: [
        { items: ["Home", "Eat", "Drink", "Events", "Club", "Recreation"] },
        { items: ["Blog", "Careers", "Contact", "FAQs"] },
      ],
    },

    {
      title: "Utility Page",
      menus: [
        {
          items: [
            "Start Here",
            "Pay with Crypto",
            "Style Guide",
            "Password Protected",
            "404 Not Found",
            "Licenses",
            "  Changelog",
          ],
        },
      ],
    },
  ],

  patnerSection: {
    image: asset.patner,
    title: "Become a Partner",
    description:
      "Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
  },

  logo: asset.logo,
  copyright: `© ${new Date().getFullYear()}  All rights reserved`,
};

const SectionMenum = ({ title, menus, isDark }) => {
  return (
    <div>
      <p
        className={cn(
          "font-bold border-b-1 mb-5 py-3 text-[#26395C] ",
          isDark && "text-[#E4E7EC]"
        )}
      >
        {" "}
        {title}{" "}
      </p>
      <div className="flex gap-16">
        {menus.map((menu, i) => (
          <ul key={i}>
            {menu.items.map((item, idx) => (
              <li
                className={cn(
                  "leading-[27px] pb-3 cursor-pointer hover:text-[#0E8BFF] hover:scale-105",
                  isDark ? "text-[#E4E7EC]" : "text-[#656B89]"
                )}
                key={idx}
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
const Footer = ({ isDark }) => {
  const { socialIcon, sections, patnerSection, logo, copyright } = footerData;
  return (
    <footer className="mt-14 lg:mt-12 h-auto mx-[50px] lg:mx-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 lg:gap-24 gap-2 ">
        {/* lrft side */}
        <div className="col-span-1 flex flex-col items-center ">
          <img className="w-fit" src={logo} alt="Logo" />
          <p
            className={cn(
              "text-[14px] mb-5 mt-1 text-[#26395C]",
              isDark && "text-[#969DAA]"
            )}
          >
            {" "}
            {copyright}{" "}
          </p>
          <div className="flex items-center w-[209px] h-[21px] space-x-5">
            {socialIcon.map((icon, i) => (
              <a href="#" key={i}>
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10  lg:gap-24 mx-auto col-span-3  ">
          {sections.map((section, i) => (
            <SectionMenum
              isDark={isDark}
              key={i}
              title={section.title}
              menus={section.menus}
            />
          ))}
          <div
            className={cn(
              " w-full h-auto lg:h-[313px] bg-[#F5FAFF] p-4 rounded-[20px] ",
              isDark && "bg-[#D0D8E7]/10 "
            )}
          >
            <img
              className="w-fit pb-4"
              src={patnerSection.image}
              alt="Patner-Image"
            />
            <h3
              className={cn(
                "text-[22px] font-bold leading-[27px] text-[#26395C] text-nowrap",
                isDark && "text-white"
              )}
            >
              {" "}
              {patnerSection.title}{" "}
            </h3>
            <p
              className={cn(
                "text-[#656B89] py-4 leading-[27px] ",
                isDark && "text-white"
              )}
            >
              {" "}
              {patnerSection.description}{" "}
            </p>
            <Button className="w-full bg-[#0E8BFF]  px-[18px] py-3 rounded-[6px] font-semibold text-white">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
