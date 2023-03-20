import { useState } from "react";
import Select from "react-select";
import {Modal} from '../../Component/Modal'

export default function UploadImageModal({open, handleOpen}) {
    const [image, setImage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [error, setError] = useState('');

    const customStyles = {
        control: (provided, state) => ({
        ...provided,
        backgroundColor: "rgb(75 85 99)",
        borderColor: "rgb(107 114 128)",
        borderRadius: "8px",
        minHeight: "44px",
        height: "44px",
        boxShadow: state.isFocused ? null : null,
        }),

        valueContainer: (provided, state) => ({
        ...provided,
        height: "44px",
        padding: "0 6px",
        }),

        singleValue: provided => ({
            ...provided,
            color: 'white'
        }),

        input: (provided, state) => ({
        ...provided,
        margin: "0px",
        }),
        indicatorSeparator: (state) => ({
        display: "none",
        }),
        indicatorsContainer: (provided, state) => ({
        ...provided,
        height: "44px",
        }),
    };

    const handleImageChange = (e) => {
        const [file] = e.target.files;
        setImage(URL.createObjectURL(file));
    }

    const resetModal = () => {
        setImage('');
        setSelectedCategory('')
        setError('');
        document.getElementById('image').value = ''
    }

    const handleCloseModal = () => {
        resetModal()
        handleOpen()
    }

    const handleCategoryChange = (value) => {
        setSelectedCategory(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(image == '' || selectedCategory == '' || selectedCategory.value == ''){
            setError('All fields are required')
            return  
        }

        //api call
        
        resetModal();
        handleOpen();
    }
 
    return (        
        <Modal
          open={open}
          onClose={handleOpen}
        >
          <Modal.Description className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
            <Modal.Title
              as="h3"
              className="mb-4 text-xl font-medium text-gray-900 dark:text-white"
            >
              Upload Image
            </Modal.Title>
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="image-modal" onClick={handleCloseModal}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            
            <Modal.Description>
                <div className="px-4 py-4">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Image</label>
                            <input type="file" name="image" id="image" onChange={handleImageChange} accept=".png, .jpg, .jpeg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            // placeholder="••••••••" 
                            required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <Select
                                className='w-full outline-blue-200'
                                name="category"
                                id="category"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                isSearchable={false}
                                styles={customStyles}
                                options={
                                    [
                                        { value: 'champions', label: 'Champion' },
                                        { value: 'awards', label: 'Achievement/Award' },
                                    ]
                                }
                            />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload</button>
                        { 
                            error != '' 
                            ?   
                                <div className="text-center">
                                    <small className="text-red-500">{error}</small>
                                </div>
                            :
                                null
                        }
                    </form>
                </div>
            </Modal.Description>
          </Modal.Description>
        </Modal>
    );
}