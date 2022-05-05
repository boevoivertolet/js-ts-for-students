import React, {ChangeEvent, ChangeEventHandler, MouseEvent} from 'react';


export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {

        alert(e.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name changed')

    }
    const focusLost = () => {
        console.log('focus lost')

    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>
    ) => {
        console.log('age has been changed' + e.currentTarget.value)

    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLost}>Sasha</textarea>
            <input onChange={onAgeChanged} type={'number'}/>
            <button name="delete" onClick={deleteUser}>delete</button>
        </div>
    )

}