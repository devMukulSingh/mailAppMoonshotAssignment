import React from 'react';
import './style.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import date from "date-and-time";
import { getMailBodyApi } from '../../service/api';
import { useDispatch } from "react-redux";
import { getFavorites, getMailBody } from '../../redux/slice';

const SingleMail = ( { mail, setOpen } ) => {

  const dispatch = useDispatch();

  const handleOpenMail = async() => {
    setOpen(true);
    const { data  } = await getMailBodyApi(mail?.id);
    dispatch(getMailBody(data));

  }
  const handleAddFavorite = () => {
    dispatch(getFavorites(mail?.id));
  }
  return (

    <div className='singleMail ' onClick={ handleOpenMail }>
          <div style={{ display:'flex',alignItems:'flexStart',gap:10}}>

            <div>
              <AccountCircleOutlinedIcon fontSize='large'/>
            </div>

              <div style={{ display:'flex',flexDirection:'column',gap:'5px'}}>
                <p>From: &nbsp;  
                  <span style={{ fontWeight:600}}>{mail?.from?.name} &lt; {mail?.from?.email}&gt;
                   </span>
                </p>
                <p>
                  Subject: &nbsp; <span style={ { fontWeight:600 } } >{mail?.subject} </span>
                  </p>

                <p style={{ fontWeight:600,
                          marginTop:'10px',
                          display:'-webkit-box',
                          WebkitLineClamp:1,
                          WebkitBoxOrient:'vertical',
                          overflow:'hidden',
                  }}>
                  {mail?.short_description}
                </p>
                <p> <button onClick={ handleAddFavorite }>Favorite</button></p>

          </div>
          </div>
    </div>
  )
}

export default SingleMail