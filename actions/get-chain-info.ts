"use server";
import * as z from "zod";
import { getChainInfoSchema } from "@/actions-schema";
import { GearApi } from '@gear-js/api';



export async function getChainInfo(input:z.infer<typeof getChainInfoSchema>){
    const gearApi = await GearApi.create({
        providerAddress: 'wss://testnet.vara.network',
    });
    const chain = await gearApi.chain();
    return {message: "success"}
}