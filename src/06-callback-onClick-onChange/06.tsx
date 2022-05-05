import React from 'react';




export const User = () => {
    const deleteUser = () => {
        alert('User should be deleted')
    }
    const saveUser = () => {
        alert('User has been saved')
    }


    return (
        <div>
            Sasha
            <button onClick={deleteUser}>Delete</button>
            <button onClick={saveUser}>Save</button>
        </div>
    )

}