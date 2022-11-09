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
    Text,
    Heading,
    InputGroup,
    InputRightElement
  } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
const Acessmodal = () => {
    const { isOpen, onClose,onOpen } = useDisclosure()
  return (
    <>
    <Text onClick={onOpen}>Manage Acess</Text>
    <Modal
    motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}
      
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Acess</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
       <Text color={"blue.500"} fontSize="23px" fontWeight={"bold"}>Marketing</Text>
          <FormControl marginTop={"10px"}>
            <InputGroup>
            <InputRightElement >
            <Button h='1.8rem' size='sm'  ><BsPlus /></Button>
            </InputRightElement>
            
            <Input placeholder='Name' />
            </InputGroup>
           
          
          </FormControl>
          <Text color={"blue.500"} fontSize="23px" fontWeight={"bold"}>Design</Text>
          <FormControl marginTop={"10px"}>
            <InputGroup>
            <InputRightElement >
            <Button h='1.8rem' size='sm'  ><BsPlus /></Button>
            </InputRightElement>
            
            <Input placeholder='Name' />
            </InputGroup>
           
          
          </FormControl>
          <Text color={"blue.500"} fontSize="23px" fontWeight={"bold"}>Sales</Text>
          <FormControl marginTop={"10px"}>
            <InputGroup>
            <InputRightElement >
            <Button h='1.8rem' size='sm'><BsPlus /></Button>
            </InputRightElement>
            
            <Input placeholder='Name' />
            </InputGroup>
           
          
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button  onClick={onClose} color='red' mr={3} border="1px solid red">
           Cancel
          </Button>
          <Button colorScheme={'blue'} >Update</Button>
        </ModalFooter>
      </ModalContent>
  </Modal>
  </>
  )
}

export default Acessmodal