import React, {useState} from 'react'
import UploadImageModal from './UploadImageModal';
import Button from '../../Component/Button';
import MatchFormModal from './MatchFormModal'

function Admin() {
    const [open, setOpen] = useState(false);
    const [showModal, handleShowModal] = React.useState(false)

    const handleImageUpload = () => {
        setOpen(true);
    }
    const handleOpen = ()=> setOpen(!open)

    return (
        <div>
            <div className='flex mb-5 -mt-16'>
                <div className='w-40'>
                <Button text='Upload Image' dataModalTarget="authentication-modal" dataModalToggle="authentication-modal" onClick={handleImageUpload} />
                </div>
            </div>
            <div className='flex -mt-16'>
                <div className='w-40'>
                <Button text='Form Matches' onClick={()=> handleShowModal(true)} />
                </div>
            </div>
            <MatchFormModal showModal={showModal} handleShowModal={handleShowModal} />
            <UploadImageModal open={open} handleOpen={handleOpen} />
        </div>
    )
}

export default Admin