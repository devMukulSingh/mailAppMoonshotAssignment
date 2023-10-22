import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './style.scss';
import { getFavorites } from '../../redux/slice';
import { useDispatch } from 'react-redux';

const SingleMailBody = ( { body } ) => {
    const dispatch = useDispatch();
    const handleAddFavorite = () => {
        dispatch(getFavorites(body?.id));
    }
  return (
    <div className='singleMailBody'>

        <div style={{ display:'flex',justifyContent:'space-between'}}>

            <div style={{ display:'flex',gap:20}}>
            <AccountCircleOutlinedIcon fontSize='large'/>
                <div style={{ display:'flex',gap:10,flexDirection:'column'}}>
                    <h2>Lorem Ipsum</h2>
                    <p style={{ fontWeight:500,fontSize:12}}>26/02/2022 10:30am</p>
                </div>
            </div>

            <button onClick={ handleAddFavorite }>Mark as favourite</button>
        </div>

        <div style={{ margin:'2rem 1rem 1rem 3.5rem'}}>
            <p style={{ fontSize:14,fontWeight:500,lineHeight:'25px'}}>
             {body.body}
            </p>
        </div>
        
    </div>
  )
}

export default SingleMailBody