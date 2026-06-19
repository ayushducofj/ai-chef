export default function DisplayIngredients({ ingredients }: { ingredients: string[] }) {
    return (
        <div>
            <h2 className="font-bold text-xl tracking-wide mt-4">Your Ingredients:</h2>
            <ul className="list-disc list-inside mt-2">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}