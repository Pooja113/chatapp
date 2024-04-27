const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] });

const fs = require("fs");
const files = fs.readdirSync("data");

for (const file of files) {
  let data = fs.readFileSync(`./data/${file}`);
  data = JSON.parse(data);
  const intent = file.replace(".json", "");
  for (const question of data.questions) {
    manager.addDocument("en", question, intent);
  }
  for (const answer of data.answers) {
    manager.addAnswer("en", intent, answer);
  }
}

async function bot_save() {
  await manager.train();
  manager.save();
}
bot_save();
