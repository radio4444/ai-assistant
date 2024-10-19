import {NextResponse} from "next/server";
import OpenAI from 'openai'

const systemPrompt = "Yolo, this is your AI-Assistant"

export async function POST(req){
    const openai = new OpenAI()
    const data = await req.json()

     const completion = await openai.chat.completions.create({
        messages: [{role: 'system', content: systemPrompt},...data],
        model: 'gpt-4o',
        stream: true,
    })


}