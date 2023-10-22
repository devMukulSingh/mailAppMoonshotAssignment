import React, { useEffect, useState } from 'react';
import './style.scss';
import SingleMail from '../singleMail/SingleMail';
import SingleMailBody from '../singleMailBody/SingleMailBody';
import { getMailsApi } from '../../service/api';
import { useSelector } from 'react-redux';

const MailSection = () => {
  
  const[mails,setMails] = useState(null);

  useEffect( () => {

    const getMails = async() => {
      const {data} = await getMailsApi();
      setMails(data?.list);
      console.log(mails); 
    } 
    getMails();
  },[])

  const[open,setOpen] = useState(false); 

  const { body } = useSelector( state => state.mailBody);


  return (
   <>
    <div style={ open ? { display:'flex',gap:20} : {} }>
        
        <div>
          {
            mails && mails?.map( (mail,index) => {
              return(

                    <SingleMail setOpen={setOpen} mail={mail} key={index} />

              )
            })
          }
        </div>
        {
          open &&

              <SingleMailBody body={body} />

        }


    </div>
   </>

  )
}

export default MailSection