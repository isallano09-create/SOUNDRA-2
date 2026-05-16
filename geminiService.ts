import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

/**
 * Curated high-end runway tracks.
 * Using stable, open-access assets for better reliability.
 */
export async function getRunwayMusicUrl() {
  const tracks = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Progressive House
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", // Deep House
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" // Chill Out / Runway Vibe
  ];
  
  // Return a random track from the selection
  return tracks[Math.floor(Math.random() * tracks.length)];
}

export async function scanMood(input: string) {
  if (!process.env.GEMINI_API_KEY) {
    console.warn("GEMINI_API_KEY is missing. Mood analysis will not work.");
    return null;
  }

  const prompt = `
    Act as a fashion and music curator for the brand SOUNDRA.
    The user is describing their current mood or a song they like: "${input}"
    
    Analyze this mood and return a JSON response matching the requested schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            mood: {
              type: Type.STRING,
              enum: ['chill', 'hype', 'sad', 'night', 'urban', 'elegant'],
              description: "One of the predefined moods."
            },
            description: {
              type: Type.STRING,
              description: "A poetic, editorial description of this vibe (max 100 chars)."
            },
            outfit_recommendation: {
              type: Type.STRING,
              description: "What kind of outfit fits this mood."
            },
            playlist_name: {
              type: Type.STRING,
              description: "A creative name for a playlist matching this mood."
            }
          },
          required: ["mood", "description", "outfit_recommendation", "playlist_name"]
        }
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
    return null;
  } catch (error) {
    console.error("Error scanning mood:", error);
    return null;
  }
}
