import { headers } from "next/headers";
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getChatResponse(model: string, messages) {
  // Uuse OpenRouter object
  const completion = await openai.chat.completions.create({
    messages,
    model,
  });
  return completion.choices[0].message.content;
}

const baseModel = "gpt-3.5-turbo";
const basePrompt = `Assume you are a human being, who parses english text into a json response.

Input text: {input}
Response should be valid JSON and should contain all fields for the detected action only (even if they are null).
All units should be string.

Fields:
- action: this field can be one of the following: send,swap,stake,borrow,lend,information on nft, information on stock markets, information on crypto markets, buy nft, view portfolio.

Each line below represents an action and the fields expected. An action should not contain fields from another action:
1. For "send" action, get 4 fields: "units" (to transact), "from" (currency), "to" (currency), "receiver_id" (user)
2. For "swap" action, get 3 fields: "units" (to transact), "source" (currency), "dest" (currency)
3. For "stake" action, get 3 fields: "units" (to stake), "source" (currency to stake), "chain" (to stake in)
4. For "borrow" action, get 3 fields: "units" (to borrow), "source" (currency to borrow in), "source_address" (to borrow from)
5. For "lend" action, get 3 fields: "units" (to lend), "source" (currency to lend), "dest_address" (to lend to), "duration_in_days" (for how many days)
6. For "information_on_nft" action, get 2 fields: "nft_name" (name of nft token, without suffix 'nft'), "chain" (on which nft resides)
7. For "information_on_stock_markets" action, get 2 fields: "ticker" (ticker symbol), "market" (on which stock is traded)
8. For "information_on_crypto_markets" action, get 2 fields: "crypto_pair" (crypto pair), "exchange" (on which crypto-pair is traded)
9. For "buy_nft" action, get 2 fields: "nft_name" (name of nft token), "chain" (on which nft resides)
10. For "view_portfolio" action, get 2 fields: "chain_address" (on chain of user), "chain" (name on which portfolio resides)`;


/*
curl -H "Authorization: Bearer 1234"  \
  -X POST "http://localhost:3000/api/chat" \
  -H 'Content-Type: application/json' \
  -d '{
  "messages": [
      {
          "role": "user",
          "content": "tell me a joke"
      }
  ]
}'
*/
export async function POST(req: Request) {
  const useHeader = headers(req);
  const authToken = (useHeader.get("authorization") || "").split("Bearer ")[1];

  if (authToken && authToken === process.env.NEXT_PUBLIC_AUTH_TOKEN) {
    try {
      const body = await req.json();
      const { messages } = body;

      if (!baseModel) {
        return Response.json(
          {
            error: "Base model not found for the specified model_id",
          },
          { status: 404 }
        );
      }
      if (basePrompt) {
        //Insert basePrompt at the start of the list
        messages.unshift({ role: "system", content: basePrompt });
      }

      const result = await getChatResponse(baseModel, messages);

      return Response.json({ result });
    } catch (error) {
      console.error("Error creating model data:", error);
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  }
  return Response.json({ error: "Invalid Auth Token" }, { status: 401 });
}
