import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
const Pointermodal = () => {
    const { isOpen, onClose,onOpen } = useDisclosure()
    console.log("No")
  return (
    <>
   <Button color={"#2563eb"} onClick={onOpen}> <BsPlus fontSize={"22px"}/>Add Pointer</Button>
    <Modal
    motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}
      
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Pointer Name</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt quam aperiam.
          <FormControl marginTop={"10px"}>
           
            <Input placeholder='Name' />
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button  onClick={onClose} color='red' mr={3}>
           Cancel
          </Button>
          <Button colorScheme={'blue'} >Create</Button>
        </ModalFooter>
      </ModalContent>
  </Modal>
  </>
  )
}

export default Pointermodal