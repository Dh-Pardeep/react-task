import React, { useState } from 'react'

const Dropdown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='d-flex '>
            <div class="dropdown mt-5 d-inline-block ms-5">
                <button class="dropdown_btn text-white " type="button">Dropdown</button>
                <ul class="dropdown_content mt-1">
                    <li ><a href="#">Action</a></li>
                    <li class=" pt-1"><a href="#">Something </a></li>
                </ul>
            </div>
            <div className='d-flex '>
                <div className={`dropdown_two mt-5 d-inline-block ms-5 ${isOpen ? 'open' : ''}`}>
                    <button
                        className="dropdown_btn_two text-white"
                        type="button"
                        onClick={handleButtonClick}
                    >
                        Dropdown
                    </button>
                    <ul className="dropdown_content_two mt-1">
                        <li ><a href="#">Action</a></li>
                        <li className=" pt-1"><a href="#">Something</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown