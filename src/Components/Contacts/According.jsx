import { Accordion, AccordionItem } from "@nextui-org/react";

function Accordions() {
  return (
    <Accordion>
      <AccordionItem
        className="font-bold  text-[#26395C] "
        key="1"
        aria-label="Accordion 1"
        title=" Do you offer refunds for purchased products?"
      >
        <p className="font-normal text-[#656B89] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          adipiscing tristique ut blandit massa tellus amet at. Amet, arcu
          tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc.
          Enim ultrices platea morbi.
        </p>
      </AccordionItem>
      <AccordionItem
        className="font-bold text-[#26395C] "
        key="2"
        aria-label="Accordion 2"
        title="How does Chillsbay work?"
      >
        <p className="font-normal text-[#656B89] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          adipiscing tristique ut blandit massa tellus amet at. Amet, arcu
          tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc.
          Enim ultrices platea morbi.
        </p>
      </AccordionItem>
      <AccordionItem
        className="font-bold text-[#26395C] "
        key="3"
        aria-label="Accordion 3"
        title="Can I pay with Crypto on Chillsbay.com? "
      >
        <p className="font-normal text-[#656B89] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          adipiscing tristique ut blandit massa tellus amet at. Amet, arcu
          tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc.
          Enim ultrices platea morbi.
        </p>
      </AccordionItem>
      <AccordionItem
        className="font-bold text-[#26395C] "
        key="4"
        aria-label="Accordion 4"
        title="How can I become a Chillsbay Host?"
      >
        <p className="font-normal text-[#656B89] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          adipiscing tristique ut blandit massa tellus amet at. Amet, arcu
          tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc.
          Enim ultrices platea morbi.
        </p>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordions;
