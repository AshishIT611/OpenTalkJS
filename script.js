import fs from 'fs';
import ollama from "ollama";
async function askLLM(question) {
    try {
        const response = await ollama.chat({
            model: "qwen2:0.5b",
            messages:[{ role: "user", content: question }],
        });
        const answer = response.message.content;
        fs.writeFile("a.txt", answer, (err) => {
            if (err) {
                throw err;
            }
            console.log("Response saved to a.txt");
        });
    } catch (error) {
        console.error("Error occurred:", error.message);
    }
}
fs.readFile("q.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading q.txt:", err.message);
    } else {
        askLLM(data);
    }
});