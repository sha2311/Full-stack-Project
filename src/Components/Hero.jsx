import { asset } from "../assets/asset";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Avatar,
  DateRangePicker,
} from "@nextui-org/react";
const Hero = () => {
  return (
    <section
      className="bg-no-repeat max-ww-[1440px] h-[636px] overflow-hidden "
      style={{ backgroundImage: `url(${asset.hero})` }}
    >
      <div className="container w-[84%] mx-auto pt-10">
        <h1 className=" text-3xl sm:text-4xl text-center lg:text-start lg:text-[62px] font-bold text-white font-Red-Hat  max-w-[694px] leading-tight lg:leading-[74px]">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>
        <div className="bg-[#FBFCFF] w-full lg:max-w-[726px] lg:h-[114px] mt-10 rounded-lg shadow-hero">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-[30px] ">
            <div>
              <Autocomplete
                label="Location"
                labelPlacement="outside"
                placeholder="Oshodi"
                className="w-[100%]"
              >
                <AutocompleteItem
                  value="Bangladesh"
                  startContent={
                    <Avatar
                      alt="Bangladesh"
                      className="w-6 h-6"
                      src="https://flagcdn.com/bd.svg"
                    />
                  }
                >
                  Bangladesh
                </AutocompleteItem>
                <AutocompleteItem
                  value="USA"
                  startContent={
                    <Avatar
                      alt="USA"
                      className="w-6 h-6"
                      src="https://flagcdn.com/us.svg"
                    />
                  }
                >
                  USA
                </AutocompleteItem>

                <AutocompleteItem
                  value="Afghanistan"
                  startContent={
                    <Avatar
                      alt="Afghanistan"
                      className="w-6 h-6"
                      src="https://flagcdn.com/af.svg"
                    />
                  }
                >
                  Afghanistan
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                label="Date"
                labelPlacement="outside"
                placeholder="Date"
                className="w-[100%]"
              >
                <AutocompleteItem>
                  <DateRangePicker />
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                label="Activities"
                labelPlacement="outside"
                placeholder="Oshodi"
                className="w-[100%] "
              >
                <AutocompleteItem Value="Mr. johan">Mr. johan</AutocompleteItem>

                <AutocompleteItem Value="Tony Stark">
                  Tony Stark
                </AutocompleteItem>

                <AutocompleteItem Value="Kristen Copper">
                  Kristen Copper
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <Button
              color="primary"
              className="rounded-lg  p-7 text-base  mt-1.5"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
