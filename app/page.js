'use client'

import {Box, Button, Stack, TextField} from "@mui/material";
import {useState} from "react";

export default function Home() {
    const [messages, setMessages] = useState([{
        role: 'assistant',
        content: "Hi! I'm the AI-Assistant. How can I help you today?"
    }])
    const [message, setMessage] = useState('')


}