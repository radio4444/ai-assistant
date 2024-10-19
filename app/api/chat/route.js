import {NextResponse} from "next/server";
import OpenAI from 'openai'

const systemPrompt = "Yolo, this is your AI-Assistant"

export async function POST(req){
    const openai = new OpenAI()
    const data = await req.json()


}