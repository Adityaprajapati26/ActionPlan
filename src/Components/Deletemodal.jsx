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

const Deletemodal = () => {
    const { isOpen, onClose,onOpen } = useDisclosure()
    console.log("yes")
  return (
   <>
   <Text color={"red"} onClick={onOpen}>Delete</Text>
    <Modal
    motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}
      
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Category or/ Sub Category</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt quam aperiam.

        </ModalBody>

        <ModalFooter>
          <Button  onClick={onClose} color='red' mr={3}>
           Cancel
          </Button>
          <Button border={"1px solid blue"} color={'blue'} >Delete</Button>
        </ModalFooter>
      </ModalContent>
  </Modal>
  </>
  )
}

export default Deletemodal