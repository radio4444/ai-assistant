Sure! Here’s a README draft for your AI-Assistant project, incorporating the information from the commit messages:

---

# AI-Assistant

AI-Assistant is a chat application powered by OpenAI's GPT-4, designed to provide users with an interactive support experience. This application allows users to communicate with an AI assistant in real-time, with features like message streaming and an intuitive user interface.

## Features

- **Interactive Chat Interface**: Users can send messages to the AI assistant and receive responses seamlessly.
- **Streaming Responses**: The assistant provides real-time replies, enhancing user experience.
- **Input Validation**: Prevents sending empty messages or multiple submissions while the AI is processing.
- **Auto-scrolling**: Automatically scrolls to the bottom of the message list when new messages are received.
- **Keyboard Shortcuts**: Users can send messages using the Enter key.

## Technologies Used

- **Frontend**: React, Next.js, Material-UI
- **Backend**: OpenAI API for AI responses
- **State Management**: React hooks (useState, useEffect, useRef)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/AI-Assistant.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AI-Assistant
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

- Enter your message in the text field and press "Send" or hit the Enter key to communicate with the AI assistant.
- The assistant will respond in real-time, and the chat history will display above the input field.

## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](License) file for details.
