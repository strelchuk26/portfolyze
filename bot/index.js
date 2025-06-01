import { Bot } from "grammy";
import dotenv from "dotenv";
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", async (ctx) => {
    await ctx.reply("👋 Привіт! Відкрий свій крипто-портфель", {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "📊 Портфель",
                        web_app: { url: process.env.WEBAPP_URL },
                    },
                ],
            ],
            resize_keyboard: true,
        },
    });
});