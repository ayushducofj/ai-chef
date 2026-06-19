import IngredientForm from "./IngredientForm";

export default function Landing() {
    return (
        <div className="bg-red-100 min-h-screen flex flex-col items-center justify-center gap-5">
            <h1 className="font-bold tracking-wide"><span className="text-blue-500 text-5xl tracking-widest uppercase">Hello</span>, <span className="md:text-2xl text-gray-700">USERNAME</span></h1>
            <IngredientForm />
        </div>
    );
}