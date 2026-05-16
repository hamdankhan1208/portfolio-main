# AI Chatbot Setup Guide

## Overview
Your portfolio now includes an AI chatbot powered by **Claude AI** (from Anthropic) and trained on your CV! Visitors can click the chat button and ask questions about your skills, experience, and projects.

## Setup Instructions

### 1. No API key required
This chatbot now runs entirely locally using your CV text. You do not need any external AI API key.

### 2. Install Dependencies
Run the following command to install the required packages:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

✅ **AI-Powered Responses**: Uses Claude 3.5 Sonnet to answer questions about your CV
✅ **CV-Trained**: The bot is trained on your professional experience and skills
✅ **Beautiful UI**: Modern, animated chat interface that matches your portfolio design
✅ **Real-time Chat**: Instant responses with loading indicators
✅ **Mobile Responsive**: Works on all devices
✅ **Free to Use**: Anthropic offers generous free credits for new users

## What Visitors Can Ask

The chatbot can answer questions about:
- Your technical skills and programming languages
- Your professional experience and projects
- Your education and background
- Specific technologies you've worked with
- Your expertise in data science and software development
- Details about your major projects

## How It Works

1. **User Types a Question**: Visitors click the chat button and type their question
2. **API Call**: The question is sent to `/api/chat` endpoint
3. **AI Processing**: Your CV context + the question is sent to Claude API
4. **Response Generation**: Claude generates a natural response based on your CV
5. **Display**: The response appears in the chat window

## File Structure

```
app/
├── api/
│   └── chat/
│       └── route.ts          # Chat API endpoint (using Claude)
├── layout.tsx                # Updated with ChatBot component
└── ...

components/
├── chatbot.tsx               # Chat UI component
└── ...

lib/
├── cv.ts                     # Your CV content (used for training)
└── ...

.env.local                    # API key configuration
```

## Customizing the CV Content

To update the chatbot's knowledge about you:
1. Edit `lib/cv.ts`
2. Update the `cvContent` variable with new information
3. The chatbot will immediately have access to the updated content

## Cost Considerations

💰 **Affordable**: Anthropic's Claude API has competitive pricing. New users get free credits to get started. Each message typically costs less than a penny with Claude 3.5 Sonnet.

You can:
- Monitor usage in the Anthropic console
- Set spending limits for your API key
- Use free credits to test the chatbot

## Troubleshooting

### "Anthropic API key is not configured"
- Make sure `.env.local` exists and has your API key
- Restart the development server after adding the key

### Messages not sending
- Check browser console for error messages
- Verify your API key is valid
- Make sure you have available credits on your Anthropic account

### Slow responses
- Claude typically responds in 1-2 seconds
- Try refreshing or restarting the dev server

## Support

For issues with:
- **Anthropic Claude API**: Visit https://docs.anthropic.com/
- **Next.js**: Visit https://nextjs.org/docs

Enjoy your AI assistant! 🤖✨
