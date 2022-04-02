import React from "react";

export default function ParentView (props) {
    const {
        goToProfile,
        findPerson,
        id,
        parent,
    } = props

    return (
        <div className='profilePage-parents-parent'
             onClick={() => goToProfile(id)}>
            <p>{parent}:</p>
            <img src={findPerson(id).image} alt='parent'
                 className='profilePage-parents-parent__image'/>
            <ul>
                <li>{findPerson(id).name} {findPerson(id).surname}</li>
                <li>{findPerson(id).birth_date}</li>
            </ul>
        </div>
    )
}