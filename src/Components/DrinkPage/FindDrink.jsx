import React from 'react'
import {DatePicker} from "@nextui-org/react";
import {TimeInput} from "@nextui-org/react";
import {
    Autocomplete,
    AutocompleteItem,
    Button,
    Avatar,
  } from "@nextui-org/react";

const FindDrink = () => {
  return (
    <section className='w-[330px] md:w-full md:h-[216px] mx-auto'>
         <div className="bg-[#FBFCFF] w-full lg:max-w-[1022px] lg:h-[165px] my-7 px-5 md:px-0 lg:ms-[100px] rounded-lg ">
                <h2 className='text-2xl md:text-[28px] font-bold md:leading-[48px] text-[#26395C] pt-3 md:px-[30px]'> Find the best places to eat and drink for any occasion</h2>
           <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:px-[30px] pb-7 pt-8 md:pt-3 ">
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
            <DatePicker
            label="Date"
            labelPlacement='outside'
            className="w-[100%] " />
            </div>
            <div>
            <TimeInput
             label="Time"
             labelPlacement='outside'
             />
            </div>

            <div>
              <Autocomplete
                label="Cuisine"
                labelPlacement="outside"
                placeholder="Chinese"
                className="w-[100%] "
              >
                <AutocompleteItem Value="Chinese">Chinese</AutocompleteItem>

                <AutocompleteItem Value="Bangladeshi">
                  Bangladeshi
                </AutocompleteItem>

                <AutocompleteItem Value="USA">
                  USA
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div>
              <Autocomplete
                label="People"
                labelPlacement="outside"
                placeholder="2"
                className="w-[100%] "
              >
                <AutocompleteItem Value="1">1</AutocompleteItem>

                <AutocompleteItem Value="2">
                  2
                </AutocompleteItem>

                <AutocompleteItem Value="6">
                  6
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <Button
              className="rounded-[6px]  py-3 px-7 text-base  mt-1.5 bg-[#0E8BFF] h-[54px]"
            >
              Search
            </Button>
          </div>
        </div>

    </section>
  )
}

export default FindDrink