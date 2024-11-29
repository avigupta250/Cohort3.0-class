
import { Button } from '../ui/Button'

import { Card } from '../Card'
import { CreateContentModal } from '../CreateContentModal'
import {useEffect, useState } from 'react'
import { SideBar } from '../Sidebar'
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { allContentAtom, contentAtom } from '../../Recoil/store/atoms/content'
import useGetContent from '../hooks/useGetContent'
import ShareModal from '../ShareModal'
import { apiConnector } from '../../operations/apiconnector'
import { endPoints } from '../../operations/api'
import { FaPlus, FaShare } from 'react-icons/fa'
import UnPublishBrain from '../UnPublishBrain'

function DashBoard() {

  const [modalOpen, setModalOpen] = useState(false)
  const [shareModalOpen,setShareModalOpen]=useState(false)
  const navigate = useNavigate();
 

  const setAllContent = useSetRecoilState(allContentAtom);
  const setContent = useSetRecoilState(contentAtom);
  const allContent=useGetContent();
  const content=useRecoilValue(contentAtom)
  
  useEffect(() => {
    if (allContent) {
      setAllContent(allContent);
      setContent(allContent);
    }
  }, [allContent, setAllContent, setContent]);

  const[shareUrl,setShareUrl]=useState("");


 async function ShareHandler(){
    try{
   const response =await apiConnector({
    method:"post",
    url:endPoints.SHARE,
    headers:{
        token:localStorage.getItem("token")
    },
    bodyData:{
        share:true
    }

   
   })
   console.log(response.data.hash)
    const hash=response?.data?.hash;
    if(hash){
      const baseUrl = "http://localhost:5173/share";
      setShareUrl(`${baseUrl}/${hash}`); 
      console.log("Updated Share URL:", `${baseUrl}/${hash}`);
    }
   



    }catch(err){

    }
 }

  return (
    <>
      <div>
        <SideBar />
      </div>
      
      <div className='p-6 ml-80'>
      
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}></CreateContentModal>

        <div>
        <ShareModal shareModalOpen={shareModalOpen} shareUrl={shareUrl} setShareModalOpen={setShareModalOpen}></ShareModal>
        <UnPublishBrain/>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="primary" text="Add Content" startIcon={<FaPlus/>} onClick={() => setModalOpen(true)} size={"md"} ></Button>
          <Button variant="secondary" text="Share brain" startIcon={<FaShare />} size={"md"} onClick={()=>{
            ShareHandler()
            setShareModalOpen(true)}} ></Button>
          {
            localStorage.getItem("token") &&
            <button className='text-[30px] hover:text-red-700' onClick={() => {
              localStorage.removeItem("token")
              navigate("/")

            }}><IoLogOutOutline /></button>
          }
        </div>

        
        <div className="flex gap-2 p-6 flex-wrap">
          {content?.length > 0 ? (
            content.map(({ type, link, title }, index) => (
              <div key={index}>
                <Card type={type} title={title} link={link} />
              </div>
            ))
          ) : (
            <p>No content available.</p>
          )}
        </div>

          
        </div>
     
    </>
  )
}

export default DashBoard



// https://youtu.be/Oo3qsxihXqY?si=uSIkWf5iUbybI6Yr
// https://youtu.be/as1vXNoTzU4?si=ETlV0ekXM9R-VEMI