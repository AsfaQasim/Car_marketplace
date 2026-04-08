import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";
// @ts-ignore
import pdf from 'pdf-parse-fork';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // 1. Safe Buffer Conversion (Fixes Deprecation Warning)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 2. Parse PDF
    let pdfText = "";
    try {
      const data = await pdf(buffer);
      pdfText = data.text;
    } catch (err) {
      console.error("PDF Parsing Error:", err);
      return NextResponse.json({ error: "Failed to read PDF content" }, { status: 500 });
    }

    // 3. Gemini Setup (Fixes Token Too Long Error)
    // Make sure API Key is trimmed of any hidden spaces or newlines
    const rawKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
    const apiKey = rawKey.trim(); 

    if (!apiKey || apiKey.length < 10) {
      return NextResponse.json({ error: "Invalid or Missing API Key" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Using 1.5-flash for maximum stability
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Analyze this bank statement text for car finance eligibility:
      "${pdfText.substring(0, 4000)}" 
      
      Provide a concise summary:
      - Monthly Income vs Expenses
      - Loan Eligibility (Yes/No)
      - Recommended Loan Amount at 9.9% APR
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ analysis: text });

  } catch (error: any) {
    console.error("Detailed API Error:", error);
    return NextResponse.json({ error: "Analysis failed. Please check your API key and file format." }, { status: 500 });
  }
}