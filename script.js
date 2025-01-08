import fs from 'fs';
import ollama from "ollama";
async function replyChat(){
    try {
        const questionFile = "q.txt";
        const userMessage = fs.readFileSync(questionFile, "utf-8");

        const aiResponse = await ollama.chat({
            model: "qwen2:0.5b",
            messages: [{ role: "user", content: userMessage }],
        });

        const responseMessage = aiResponse.message.content;

        const answerFile = "a.txt";
        fs.writeFileSync(answerFile, responseMessage, "utf-8");

        console.log("The AI's response has been saved to a.txt.");
    } catch (error) {
        console.error("Error encountered:", error.message);
    }
}
replyChat();