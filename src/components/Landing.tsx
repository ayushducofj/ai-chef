import { useState } from "react";
import IngredientForm from "./IngredientForm";
import useAI from "../hooks/useAI.ts"; 


export default function Landing() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const { generateRecipe, response, loading, error } = useAI();

    async function handleButtonClick() {
        await generateRecipe(ingredients);
    }

    return (
        <>
            <div className="bg-red-100 min-h-screen flex flex-col items-center justify-center gap-5">
                <h1 className="font-bold tracking-wide"><span className="text-blue-500 text-5xl tracking-widest uppercase">Hello</span>, <span className="md:text-2xl text-gray-700">USERNAME</span></h1>
                <IngredientForm ingredients={ingredients} setIngredients={setIngredients} />
                {ingredients.length >= 4 && <button className="hover:bg-blue-600 sm:w-md hover:cursor-pointer bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={handleButtonClick}>Generate Recipe</button>}

                {/* using the exported helpers from useAI to display recipe. */}
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {response && <p>{response}</p>}

            </div>
        </>
    );
}