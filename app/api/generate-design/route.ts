import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { description, device } = await req.json();

    if (!description) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are an expert UI/UX designer and frontend developer. 
    
Generate a complete, modern, and visually stunning ${device === "mobile" ? "mobile app" : "website"} UI based on this description:

"${description}"

Requirements:
- Generate clean, valid HTML with inline Tailwind CSS classes (use CDN: https://cdn.tailwindcss.com)
- Make it pixel-perfect, professional, and modern
- Use realistic placeholder content (not lorem ipsum)
- Include smooth hover effects and transitions
- Use a cohesive color palette
- Make it fully responsive
- Include all sections mentioned in the description
- Use emojis and icons where appropriate
- Output ONLY the complete HTML code, no explanations

Output format: A single complete HTML file starting with <!DOCTYPE html>`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Extract HTML from the response
    const htmlMatch = responseText.match(/<!DOCTYPE html>[\s\S]*<\/html>/i);
    const htmlCode = htmlMatch ? htmlMatch[0] : responseText;

    return NextResponse.json({ htmlCode }, { status: 200 });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate design" },
      { status: 500 }
    );
  }
}
