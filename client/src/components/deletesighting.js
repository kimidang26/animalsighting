import { useState } from "react";

const DeleteSighting = ({handleDeleteSightingCallback}) => {
    const[deleteSighting, setDeleteSighting]= useState("");

    const handleDeleteSighting = (e) => {
        e.preventDefault();
        //grabs the inserted ID value by Sighting aka one sighting
        handleDeleteSightingCallback(deleteSighting);
        //added to reset text field to empty string
        setDeleteSighting("");
    }

    return(
        <div>
            <h3>Delete Sighting</h3>
            <form id="delete-sighting" action="#" onSubmit={handleDeleteSighting}>
                <fieldset>
                    <label>Sighting ID</label>
                    <input type="number" id="delete-sighting-id" onChange={(e) => setDeleteSighting(e.target.value)}/>
                </fieldset>
                    <input type="submit" value="Delete Sighting"/>
            </form>
        </div>
    )

}

export default DeleteSighting;