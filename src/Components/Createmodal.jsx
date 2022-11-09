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
    Button
  } from '@chakra-ui/react'

const Createmodal = () => {
    const { isOpen, onClose,onOpen } = useDisclosure()
  return (
  <>
    <Button>Delete</Button>
    <Modal
    motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}
      
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Plan Name</ModalHeader>
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

export default Createmodal