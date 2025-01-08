import fs from 'fs';
import ollama from 'ollama';
let q;
let n = 3;
async function query_LLM(q, i) {
    const response = await ollama.chat({
        model: "qwen2:0.5b",
        messages: [{ role: "user", content: q }],
    });
    let a = response.message.content;
    fs.writeFile(`./Answers/a${i}.txt`, a, (err) => {
        if (err) {
            throw err;
        }
        else{
            console.log("Answer is given");
        }
    });
}
for (let i = 1; i <= n; i++) {
    q = `./Questions/q${i}.txt`;
    query_LLM(fs.readFileSync(q, 'utf8'), i);
}