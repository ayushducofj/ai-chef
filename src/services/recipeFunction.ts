import { chat } from "./AI";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe 
they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page.  STRICTLY USE MARKDOWN SYNTAX.  
I WILL RENDER YOUR RESPONSE AS MARKDOWN, SO MAKE SURE TO USE MARKDOWN SYNTAX FOR HEADINGS, LISTS, ETC.
`

// uses chat func to send req to hugging face api
// this will actually send the req
// and return the response.

// chat func expects (messages, model) -> export async function chat(messages, model)
export function getRecipe(ingredients: string[]) {
    return chat(
        [
            { role: "system", content: SYSTEM_PROMPT },
            {
                role: "user",
                content: `I have: ${ingredients.join(", ")}. What can I cook?`,
            },
        ],
        "deepseek-ai/DeepSeek-V4-Pro:novita"
    );
}