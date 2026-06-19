const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

export async function chat(messages: { role: string; content: string }[], model: string) {
    const res = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${HF_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model,
                messages,
                temperature: 0.7,
                max_tokens: 800,
            }),
        }
    );

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "AI request failed");
    }

    const data = await res.json();
    return data.choices[0].message.content;
}