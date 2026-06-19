import { getRecipe } from "../services/recipeFunction";
import { useState } from "react";
import { useErrorManagement } from "./useErrorManagement";

export default function useAI() {
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    
    // error management hook
    const { error, setError } = useErrorManagement();


    
    async function generateRecipe(ingredients: string[]) {
        setLoading(true);
        setError(null);

        try {
            const result = await getRecipe(ingredients);
            setResponse(result);
            return result;
        } catch (err: string | any) {
            setError(err.message || "Something went wrong while generating the recipe.");
            return null;
        } finally { 
            setLoading(false);
        }
    }

    return { 
        generateRecipe,
        response,
        loading,
        error
    }
}