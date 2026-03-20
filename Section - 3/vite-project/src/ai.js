import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = "You are a chef assistant. A user gives you ingredients, and you suggest a recipe in Markdown format. Be concise and helpful.";

// Use the 2026 stable free-tier models
const MODEL_CANDIDATES = [
  "gemini-2.5-flash-lite", // 1st Choice: Highest free quota
  "gemini-2.5-flash",      // 2nd Choice
  "gemini-2.5-pro",        // 3rd Choice: Smart but tight limits
];

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getRecipeFromMistral(ingredientsArr) {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error("Missing VITE_GEMINI_API_KEY. Add it to .env and restart Vite.");
    }

    const ingredientsString = ingredientsArr.join(", ");
    const prompt = `${SYSTEM_PROMPT} I have: ${ingredientsString}. Please suggest a recipe!`;

    let lastError;

    for (const modelName of MODEL_CANDIDATES) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            
            // Note: generateContent is an async call, we await it directly
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text()?.trim();
            
            if (text) return text;
        } catch (err) {
            lastError = err;
            console.warn(`Model ${modelName} failed:`, err.message);
            // If it's a 429 (Rate Limit), we try the next candidate immediately
            continue; 
        }
    }

    throw new Error(lastError?.message || "All Gemini models are currently unavailable.");
}