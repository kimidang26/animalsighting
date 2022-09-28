import { useState } from "react";

const DeleteAnimal = ({handleDeleteAnimalCallback}) => {
    const[deleteAnimal, setDeleteAnimal]= useState("");

    const handleDeleteAnimal = (e) => {
        e.preventDefault();
        //grabs the inserted ID value by animal aka specie
        handleDeleteAnimalCallback(deleteAnimal);
        //added to reset text field to empty string
        setDeleteAnimal("");
    }

    return(
        <div>
            <h3>Delete Species</h3>
            <form id="delete-animal" action="#" onSubmit={handleDeleteAnimal}>
                <fieldset>
                    <label>Species ID</label>
                    <input type="number" id="delete-animal-id" onChange={(e) => setDeleteAnimal(e.target.value)}/>
                </fieldset>
                    <input type="submit" value="Delete Species"/>
            </form>
        </div>
    )

}

export default DeleteAnimal;