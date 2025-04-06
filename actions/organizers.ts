"use server";

import api from "@/lib/api";
import { OrganizerCreateProps, OrganizerItem } from "@/types/types";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function createOrganizer(data: OrganizerCreateProps) {
  console.log("Creating organizer with data:", data);
  console.log("API base URL:", api.defaults.baseURL);
  
  try {
    // Increase timeout to 10 seconds
    const response = await api.post("/competitions/organizers", data, {
      timeout: 10000
    });
    console.log("API response:", response.data);

    revalidatePath("/dashboard/competitions/organizers");

    return response.data;
  } catch (error) {
    console.error("API error:", error);
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 
        error.message || 
        "Failed to create Organizer!";
      console.error("Error response:", error.response?.data);
      throw new Error(message);
    }

    throw error;
  }
}

export async function getAllOrganizers() {
  try {
    const response = await api.get("/competitions/organizers");
    const organizers = response.data.data;

    return organizers as OrganizerItem[];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "Failed to fetch Organizers!";
      throw new Error(message);
    }

    throw error;
  }
}