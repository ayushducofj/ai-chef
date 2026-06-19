import { useState } from "react";
import IngredientForm from "./IngredientForm.tsx";
import useAI from "../hooks/useAI.ts"; 
import GeneratedResponse from "./GeneratedResponse.tsx";
import clsx from "clsx";



export default function Landing() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const { generateRecipe, response, loading, error } = useAI();

    async function handleButtonClick() {
        await generateRecipe(ingredients);
    }
    return (
        <>
            <label className="tracking-widest flex items-center justify-center">you are allowed a max of 6 and a min of 4 ingredients</label>
            <div className="bg-red-100 min-h-screen flex flex-col items-center justify-center gap-5">
                {/* can add dynamic name op later if needed */}
                <h1 className="font-bold tracking-wide"><span className="text-blue-500 text-5xl tracking-widest uppercase">Hello</span>, <span className="md:text-2xl text-gray-700">Chef</span></h1>
                
                <IngredientForm ingredients={ingredients} setIngredients={setIngredients} />
                
                {/* Button logic for when we are ready to fire off the request to our AI model */}
                {   
                    ingredients.length >= 4 && 
                    <button
                        className={clsx("hover:bg-blue-600 sm:w-md hover:cursor-pointer bg-blue-500 text-white py-2 px-4 rounded mt-4", 
                            loading && "opacity-50 cursor-not-allowed hover:bg-blue-500",
                            ingredients.length < 4 && "opacity-50 cursor-not-allowed hover:bg-blue-500",
                            response && "hidden"
                        )}
                        onClick={handleButtonClick}>
                            Generate Recipe
                    </button>
                }  

                <GeneratedResponse 
                    loading={loading}
                    error={error}
                    response={response}
                /> 
            
            </div>
        </>
    );
}