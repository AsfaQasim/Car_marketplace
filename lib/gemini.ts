import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export async function analyzeStatement(pdfText: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    You are a Car Finance Expert. Below is the text extracted from a bank statement:
    ---
    ${pdfText}
    ---
    Tasks:
    1. Summarize monthly income and fixed expenses.
    2. Check if there are any returned payments or high debts.
    3. Based on a 9.9% APR, suggest a maximum loan amount the user can afford.
    4. Be professional and encouraging.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}