import React from 'react'
import { Box, Button, ButtonGroup, Container, Flex, Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,



} from '@chakra-ui/react'
import { IoMdPeople} from 'react-icons/io';
import{AiFillPlusCircle,AiOutlineEye} from 'react-icons/ai';
import{MdDragIndicator} from 'react-icons/md'
import{TbDotsVertical} from 'react-icons/tb'
import{BsPlus,BsDash} from 'react-icons/bs'
import {SteppedLineTo} from 'react-lineto';
import Createmodal from './Createmodal';
import Deletemodal from './Deletemodal';
import Pointermodal from './Pointermodal';
import Acessmodal from './Acessmodal';
const points=[
    { "id":1,"one":"Pointer 1" ,"class":"C"},
    {"id":2,"one":"Pointer 2","class":"D"},
    {"id":3,"one":"Pointer 3","class":"E"}
]

const Plans=[
    {"id":1,"plane":"wordpress" ,"class":"A"},
    {"id":2,"plane":"Google Drive","class":"B"}
]
const Design=[
    {"id":1,"design":"Graphic Design"},
    {"id":2,"design":"Product Design"}
]
const Sales=[
  {"id":1,"sales":"Online Sales"},
    {"id":2,"sales":"Demonstartion Product"}
]

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
   

   
    
  return (
    <Box 
    background={"linear-gradient(341deg, rgba(245,9,9,0.6418942577030813) 17%, rgba(36,199,246,0.5186449579831933) 44%, rgba(171,252,69,1) 100%)"} 
     h="150vh" paddingTop="80px">
    
  <Container maxW='7xl' fontFamily={"'Rubik', sans-serif"}   padding="15px"  bgColor="#e873d7">
    <Box  
    //  border={"1px solid orange"} 
    
    marginRight={"10px"} marginLeft="10px">
        <Flex justifyContent={"space-between"} >
            <Box  
            // border={"1px solid red"}
            >
                <Heading>Action Plans</Heading>
            </Box>
            <Box  >
            <ButtonGroup gap='4'>
            <Button gap="1" border={"1px solid #2563eb"} borderRadius={"7px"} color="#2563eb"> <IoMdPeople fontSize={"25px"}/><Acessmodal/></Button>
            <Button onClick={onOpen} gap="1" border={"1px solid #2563eb"} backgroundColor="#2563eb" _hover={"none"} color="white" ><AiFillPlusCircle fontSize={"25px"}/>New Plan</Button>
            </ButtonGroup>
            </Box>
        </Flex>
    
    </Box>
    

    <Box marginTop={"50px"} w="100%" 
    // border={"1px solid red"}
    >
    <Accordion  allowMultiple >
      {/* First Task */}
  <AccordionItem 
 bgColor={"#f1f5f9"}
 borderRadius="10px"

  >
    <h2>
      <AccordionButton>
      <MdDragIndicator/>
        <Box  flex='1' marginLeft={"5px"} textAlign='left' fontWeight={"bold"}>
            
          Marketing
        </Box>
        {/* Menu list */}
        <Menu>
        {/* as={Button} */}
        <MenuButton ><TbDotsVertical/></MenuButton>
         <MenuList>
          <MenuItem>Edit Category</MenuItem>
          <MenuItem>Manage Acess</MenuItem>
             <MenuItem ><Deletemodal/></MenuItem>
            
         </MenuList>
        
        </Menu>
        <AccordionIcon />
        </AccordionButton>
        
       
        
        
        
      
    </h2>
    <AccordionPanel pb={4}>
      {/* Map the sub category */}
        { 
        Plans.map((el)=>{
            // console.log(el.class)
            return(
                <>


                {/* inside the plans */}
                <Accordion w="100%"key={el.id}  allowMultiple >
                  {/* First Task */}
                  {/*  */}
              <AccordionItem key={el.id} >
              {({ isExpanded }) => (
                <>
                <h2>
                  <AccordionButton>
                  <MdDragIndicator/>
                    <Box key={el.id}  flex='1' marginLeft={"5px"} textAlign='left' >
                        
                     {el.plane}
                    </Box>
                    {/* Menu list */}
                    <Menu>
                    {/* as={Button} */}
                    <MenuButton ><TbDotsVertical/></MenuButton>
                     <MenuList>
                      <MenuItem>Edit Sub Category</MenuItem>
                     <MenuItem ><Deletemodal/></MenuItem>
                        
                     </MenuList>
                    
                    </Menu>
                            {isExpanded ? (
                           <BsDash fontSize='25px' />
                         ) : (
                           <BsPlus fontSize='25px' />
                         )}
          
                    </AccordionButton>
                    
                   
                    
                    
                    
                  
                </h2>
                <AccordionPanel pb={4} key={el.id}className={el.class} >
                {  
                // Pointers map
                points.map((el)=>{
                        // console.log(el)
                        return(
                        <>
                        <Box key={el.id} className={el.class} border={"1px solid #b0b5ba"} marginTop="5px" borderRadius={"2px"}>
                       <Flex justifyContent={"space-between"}>
                        
                       <Box marginTop={"3px"}><MdDragIndicator/></Box>
                       <Box flex='1' textAlign={"left"} key={el.id}>    {el.one}  </Box>
                       
                        <Box display={"flex"}><AiOutlineEye fontSize={"23px"}/> <TbDotsVertical fontSize={"20px"}/></Box>
                       </Flex>
                       </Box>
                       
                        
                    
                        
                           </>)
                        
                    })
                    
                }
                {/* Buttons to add or hover */}
                <Box display='flex'
                            alignItems='center'
                            justifyContent='left'
                            marginTop="5px">
                        <ButtonGroup>
                        <Pointermodal/>
                         <Button color={"#2563eb"}> <BsPlus fontSize={"22px"}/> On Hover**</Button>

                        </ButtonGroup>
                       </Box>
                </AccordionPanel>
                </>
                )}
              </AccordionItem> 
              </Accordion>


                </>
            )
        })
        
            }
             
         </AccordionPanel>
       </AccordionItem>
        {/*First task end  */}

       {/* //////////////////// */}
 {/* second Task */}
  <AccordionItem 
  bgColor={"#f1f5f9"}
  borderRadius="10px"
  
  marginTop="10px">
    <h2>
      <AccordionButton>
      <MdDragIndicator  />
        <Box flex='1' textAlign='left' fontWeight={"bold"}>
      
         Design
        </Box>
        <Menu>
        {/* as={Button} */}
        <MenuButton ><TbDotsVertical/></MenuButton>
         <MenuList>
          <MenuItem>Edit Category</MenuItem>
          <MenuItem>Manage Acess</MenuItem>
             <MenuItem><Deletemodal/></MenuItem>
            
         </MenuList>
        
        </Menu>
        
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4}>
   {/* strat map */}
   { 
        Design.map((el)=>{
            // console.log(el.class)
            return(
                <>


                {/* inside the plans */}
                <Accordion w="100%"key={el.id}  allowMultiple >
                  {/* First Task */}
                  {/*  */}
              <AccordionItem key={el.id} >
              {({ isExpanded }) => (
                <>
                <h2>
                  <AccordionButton>
                  <MdDragIndicator/>
                    <Box key={el.id}  flex='1' marginLeft={"5px"} textAlign='left' >
                        
                     {el.design}
                    </Box>
                    {/* Menu list */}
                    <Menu>
                    {/* as={Button} */}
                    <MenuButton ><TbDotsVertical/></MenuButton>
                     <MenuList>
                      <MenuItem>Edit Sub Category</MenuItem>
                     <MenuItem ><Deletemodal/></MenuItem>
                        
                     </MenuList>
                    
                    </Menu>
                            {isExpanded ? (
                           <BsDash fontSize='25px' />
                         ) : (
                           <BsPlus fontSize='25px' />
                         )}
          
                    </AccordionButton>
                    
                   
                    
                    
                    
                  
                </h2>
                <AccordionPanel pb={4} key={el.id}className={el.class} >
                {  
                // Pointers map
                points.map((el)=>{
                        // console.log(el)
                        return(
                        <>
                        <Box key={el.id}  marginTop={"5px"} border={"1px solid #b0b5ba"}borderRadius="2px" >
                       <Flex justifyContent={"space-between"}>
                        
                       <Box marginTop={"3px"}><MdDragIndicator/></Box>
                       <Box flex='1' textAlign={"left"} key={el.id}>    {el.one}  </Box>
                       
                        <Box display={"flex"} textAlign={"right"}><AiOutlineEye fontSize={"23px"}/> <TbDotsVertical fontSize={"20px"}/></Box>
                       </Flex>
                       </Box>
                       
                        
                    
                        
                           </>)
                        
                    })
                    
                }
                <Box display='flex'
                            alignItems='center'
                            justifyContent='left'
                            marginTop="5px">
                        <ButtonGroup>
                         <Pointermodal/> 
                         <Button color={"#2563eb"}> <BsPlus fontSize={"22px"}/> On Hover**</Button>

                        </ButtonGroup>
                       </Box>
                </AccordionPanel>
                </>
                )}
              </AccordionItem> 
              </Accordion>


                </>
            )
        })
        
            }
   
   {/* end map */}

     
    </AccordionPanel>
  </AccordionItem>

  {/* Third Task */}
  <AccordionItem 
  bgColor={"#f1f5f9"}
  borderRadius="10px"
  
  marginTop="10px">
    <h2>
      <AccordionButton>
      <MdDragIndicator  />
        <Box flex='1' textAlign='left' fontWeight={"bold"}>
      
        Sales
        </Box>
        <Menu>
        {/* as={Button} */}
        <MenuButton ><TbDotsVertical/></MenuButton>
         <MenuList>
          <MenuItem>Edit Category</MenuItem>
          <MenuItem>Manage Acess</MenuItem>
             <MenuItem><Deletemodal/></MenuItem>
            
         </MenuList>
        
        </Menu>
        
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4}>
   {/* strat map */}
   { 
        Sales.map((el)=>{
            // console.log(el.class)
            return(
                <>


                {/* inside the plans */}
                <Accordion w="100%"key={el.id}  allowMultiple >
                  {/* First Task */}
                  {/*  */}
              <AccordionItem key={el.id} >
              {({ isExpanded }) => (
                <>
                <h2>
                  <AccordionButton>
                  <MdDragIndicator/>
                    <Box key={el.id}  flex='1' marginLeft={"5px"} textAlign='left' >
                        
                     {el.sales}
                    </Box>
                    {/* Menu list */}
                    <Menu>
                    {/* as={Button} */}
                    <MenuButton ><TbDotsVertical/></MenuButton>
                     <MenuList>
                      <MenuItem>Edit Sub Category</MenuItem>
                     <MenuItem ><Deletemodal/></MenuItem>
                        
                     </MenuList>
                    
                    </Menu>
                            {isExpanded ? (
                           <BsDash fontSize='25px' />
                         ) : (
                           <BsPlus fontSize='25px' />
                         )}
          
                    </AccordionButton>
                    
                   
                    
                    
                    
                  
                </h2>
                <AccordionPanel pb={4} key={el.id}className={el.class} >
                {  
                // Pointers map
                points.map((el)=>{
                        // console.log(el)
                        return(
                        <>
                        <Box key={el.id}  marginTop={"5px"} border={"1px solid #b0b5ba"}borderRadius="2px" >
                       <Flex justifyContent={"space-between"}>
                        
                       <Box marginTop={"3px"}><MdDragIndicator/></Box>
                       <Box flex='1' textAlign={"left"} key={el.id}>    {el.one}  </Box>
                       
                        <Box display={"flex"} textAlign={"right"}><AiOutlineEye fontSize={"23px"}/> <TbDotsVertical fontSize={"20px"}/></Box>
                       </Flex>
                       </Box>
                       
                        
                    
                        
                           </>)
                        
                    })
                    
                }
                <Box display='flex'
                            alignItems='center'
                            justifyContent='left'
                            marginTop="5px">
                        <ButtonGroup>
                         <Pointermodal/> 
                         <Button color={"#2563eb"}> <BsPlus fontSize={"22px"}/> On Hover**</Button>

                        </ButtonGroup>
                       </Box>
                </AccordionPanel>
                </>
                )}
              </AccordionItem> 
              </Accordion>


                </>
            )
        })
        
            }
  {/* end map */}

     
    </AccordionPanel>
  </AccordionItem>
  {/* End Third task */}


</Accordion>
       
        
    </Box>

{/* modals///////// */}
{/* plan Modal */}
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
{/* plan modal end */}
   </Container>
   </Box>
   
  )
}

export default Home