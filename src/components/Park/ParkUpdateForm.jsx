import React, { useState } from 'react'

const ParkUpdateForm = (props) => {
    const [parkName, setParkName] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [openTime, setOpenTime] = useState('')
    const [closeTime, setCloseTime] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            parkName: parkName,
            address: address,
            description: description,
            openTime: openTime,
            closeTime: closeTime,
        }
        props.handleUpdatePark(formData) // pass the formData up to Home.jsx
    }

        return (
                <>
            <form  className="create-form" onSubmit={handleSubmit}>

                <div className="add-park-prompt">
                        <label>Update Park</label>
                </div>
                
                <input
                    required
                    autoComplete='off'
                    placeholder="Park Name"
                    name="parkName"
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="OpenTime"
                    name="openTime"
                    value={openTime}
                    onChange={(e) => setOpenTime(e.target.value)}>
                </input>

                <input
                    required
                    autoComplete='off'
                    placeholder="CloseTime"
                    name="closeTime"
                    value={closeTime}
                    onChange={(e) => setCloseTime(e.target.value)}>
                </input>

                
                <div className="border"></div>
                
                <button type="submit">Submit</button>
            </form>
        </> 
    )
}

export default ParkUpdateForm;