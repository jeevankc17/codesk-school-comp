"use server";

import api from "@/lib/api";
import { BuilderCreateProps, BuilderItem } from "@/types/types";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function createBuilder(data: BuilderCreateProps) {
  console.log("Creating builder with data:", data);
  console.log("API base URL:", api.defaults.baseURL);
  
  try {
    // Increase timeout to 10 seconds
    const response = await api.post("/competitions/builders", data, {
      timeout: 10000
    });
    console.log("API response:", response.data);

    revalidatePath("/dashboard/competitions/builders");

    return response.data;
  } catch (error) {
    console.error("API error:", error);
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 
        error.message || 
        "Failed to create Builder!";
      console.error("Error response:", error.response?.data);
      throw new Error(message);
    }

    throw error;
  }
}

export async function getAllBuilders() {
  try {
    const response = await api.get("/competitions/builders");
    const builders = response.data.data;

    return builders as BuilderItem[];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "Failed to fetch Builders!";
      throw new Error(message);
    }

    throw error;
  }
}