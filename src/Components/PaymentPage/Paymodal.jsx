import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function Paymodal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  

  return (
    <div className="flex flex-col gap-2">

<Button onPress={onOpen} className="text-[18px] font-bold text-[#FFFFFF] bg-[#0E8BFF] rounded-md py-3 px-7 mt-8 w-full">Book Tickets</Button>
      
      <Modal backdrop="opaque" size="2xl" isOpen={isOpen} scrollBehavior='outside' onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
             <ModalHeader className="flex flex-col gap-1 text-center font-bold font-Red-Hat md:text-[28px] text-[#26395C]">Thanks  For The Order</ModalHeader>
              <ModalBody className="text-[#656B89]  text-sm">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar parturient vel et odio. Est urna, sit curabitur cras -d adipiscing consequat. Urna tortor congue commodo ultricies tellus fermentum, nibh aliquet. 
                  </p>
                  <p className=" relative">
                  <span className=" absolute font-extrabold text-3xl text-[#0E8BFF] -top-4 -left-3.5 ">. </span>Tristique faucibus feugiat etiam ac. Dictumst et in mi varius pellentesque nisl molestie mauris aliquam. Ipsum egestas nunc aliquam vitae leo elementum etiam commodo. 
                  </p>
                  <p className=" relative">
                  <span className=" absolute font-extrabold text-[#0E8BFF] text-3xl -top-4 -left-3.5 ">. </span>  Malesuada velit sed adipiscing convallis adipiscing aenean. At massa aliquam quis adipiscing ut. Sit eget et egestas sed vitae sollicitudin. Pellentesque id non sapien, cursus vestibulum fusce malesuada. Habitasse nullam turpis posuere nunc, platea enim lacinia lorem. Bibendum enim ante purus consectetur euismod.
                  </p>
                  <p className="relative">   <span className=" absolute font-extrabold text-[#0E8BFF]  text-3xl -top-4 -left-3.5 ">. </span> Lorem elementum massa pharetra nisl vitae, nulla phasellus duis in. Tempor metus ornare iaculis praesent. Dolor ac tincidunt ornare purus pellentesque urna. Sed pellentesque blandit pharetra ullamcorper. Rhoncus, duis feugiat nunc auctor sed nisi diam. Vestibulum interdum consectetur diam dui risus nisl. 
                  </p>
                  <p className="relative"> <span className=" absolute font-extrabold text-[#0E8BFF]  text-3xl -top-4 -left-3.5 ">. </span> Tortor porttitor amet felis congue. Curabitur phasellus tempor sapien aenean nulla tincidunt ut orci leo. Amet, quam ut amet pharetra tellus, nisl. Cras pretium viverra leo orci. Nam ut urna pretium ornare. Pharetra, hac platea in morbi quisque. Faucibus vitae cursus sed arcu, scelerisque nisi. Lectus pellentesque cras - - aliquet nisl. </p>

                  <p>Vulputate morbi magna interdum vitae. Aliquet sit aenean tortor eget risus. Nisl, dictum egestas convallis commodo, scelerisque sed ullamcorper. At semper orci nisl felis platea. Tellus donec vitae placerat malesuada habitasse. Tortor tempor sagittis, cursus tortor. Habitant dapibus ac feugiat dignissim eu tellus, tincidunt. Dolor duis urna, nunc massa sed proin risus sed. Amet commodo volutpat amet nunc lectus nisi, at. Adipiscing condimentum in nulla velit urna justo, non duis. Nibh sed eget sed adipiscing nunc, ut auctor nullam. Elit ipsum, leo aliquet mauris elementum est. Commodo eget sagittis id eu, tellus in at.
                  A tempor arcu, diam id vulputate orci, lobortis. Est enim massa egestas vel id nisl gravida. Sed sed urna, non sit. Scelerisque lacus eu, faucibus sed proin cursus. Interdum vulputate nullam etiam maecenas urna, cursus. Iaculis.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Paymodal