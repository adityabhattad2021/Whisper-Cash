"use server";
import * as z from "zod";
import { getChainInfoSchema } from "@/actions-schema";
import { GearApi } from '@gear-js/api';
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {pull} from ""



const chat = new ChatOpenAI(
	{ temperature: 0, openAIApiKey: env.OPENAI_KEY },
	{ basePath: 'https://proxy.your-server.com/v1' }
);




export async function getChainInfo(input:z.infer<typeof getChainInfoSchema>){
    const gearApi = await GearApi.create({
        providerAddress: 'wss://testnet.vara.network',
    });
    const chain = await gearApi.chain();
    return {message: "success"}
}

