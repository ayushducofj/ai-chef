import { useState } from "react";
import DisplayIngredients from "./DisplayIngredients";
import { useErrorManagement } from "../hooks/useErrorManagement";


export default function IngredientForm() {
    // application state will be stored here, where the form is.

    const [ingredients, setIngredients] = useState<string[]>([]);
    const { error, setError, clearError } = useErrorManagement();

    function handleSubmit(formData: FormData) {
        const userIngredients = formData.get("ingredients");
        handleSetIngredients(userIngredients as FormDataEntryValue | string | any);
    }

    // 1. adds ingredient to the list of ingredients
    // 2. handles error cases for i) empty ii) more than 6 ingredients (limit)

    function handleSetIngredients(newIngredients: string[]) {
        if (newIngredients.length === 0) {
            setError("Ingredient cannot be empty");
            return
        }
        if (ingredients.length >= 6) {
            setError("Maximum number of ingredients reached");
            return
        }

        // reset error status (manually managing state for now)
        clearError();
        setIngredients((prevIngredients: string[]) => [...prevIngredients, newIngredients as string | any]);
    }

    return (

        <>
            {error && <p className="text-red-500 text-sm sm:text-lg rounded-xl mt-2 text-center border border-red-500 bg-red-100 p-2">{error}</p>}

            <div className="max-w-2xl w-full p-6 rounded-lg">
                <form action={handleSubmit}>
                    <div className="flex md:flex-row flex-col gap-2">
                        <input className="flex-1 border border-gray-400 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="ingredients" />
                        <button className="bg-slate-900 hover:bg-slate-700 hover:cursor-pointer  text-white py-2 px-4 rounded" aria-label="Submit" type="submit">Add Ingredient</button>
                    </div>
                </form>



                {/* Display the list of ingredients if there are any */}
                {ingredients.length > 0 && <DisplayIngredients ingredients={ingredients} />}


                {ingredients.length >= 4 && <button className="hover:bg-blue-600 hover:cursor-pointer bg-blue-500 text-white py-2 px-4 rounded mt-4">Generate Recipes</button>}
            </div>

        </>
    )
}