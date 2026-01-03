
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are the MW Energy Expert Consultant. 
MW Energy specializes in O&M (Operations & Maintenance) for:
1. Utility-scale Solar PV systems (inverters, modules, DC/AC health).
2. BESS (Battery Energy Storage Systems) - thermal management, cell balancing, SoC optimization.
3. Transformers and High Voltage electrical work.
4. Infrastructure electrical works.

CORE INNOVATION:
- We use AI GLASSES in the field. These allow our technicians to collect massive amounts of raw data in real-time.
- We provide "Transparent Detailed Reports." Unlike competitors, we show EVERY detail and raw data point so customers have total visibility.
- Our AI tools synthesize field data into actionable maintenance strategies.

Your goal is to provide professional, technical, yet accessible advice. 
When appropriate, mention our "AI-Glass Field Audits" and "Total Detail Reports" as our competitive advantage. 
Keep responses concise and professional.`;

export async function getEnergyConsultation(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently optimizing my circuits. Please try again in a moment or contact our human team directly.";
  }
}
