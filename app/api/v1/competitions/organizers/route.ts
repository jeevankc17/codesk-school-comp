import prisma from "@/lib/prisma";
import { OrganizerCreateProps } from "@/types/types";
import { NextRequest } from "next/server";

// Create Organizer
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const data = await request.json() as OrganizerCreateProps;
    console.log("Received organizer data:", data);
    
    // Validate data
    if (!data || typeof data !== 'object') {
      return new Response(JSON.stringify({ error: "Invalid request data", data: null }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Make sure requiredSkills is an array
    const requiredSkills = Array.isArray(data.requiredSkills) ? data.requiredSkills : [];

    try {
      // Check for existing organizer with same email
      let existingOrganizer = null;
      if (data.email) {
        existingOrganizer = await prisma.organizer.findUnique({
          where: { email: data.email },
        });
        console.log("Existing organizer check:", existingOrganizer);

        if (existingOrganizer) {
          return new Response(JSON.stringify({ error: "Organizer with this email already exists", data: null }), {
            status: 409,
            headers: { "Content-Type": "application/json" }
          });
        }
      }

      // Create the organizer with properly formatted data
      const organizerData = {
        // Required fields by Prisma schema
        name: data.name || null,
        email: data.email || null,
        phone: data.phone || null,
        role: data.role || null,
        
        // Address fields
        street: data.street || null,
        city: data.city || null,
        state: data.state || null,
        country: data.country || null,
        zipCode: data.zipCode || null,
        
        // Organization details
        organizationName: data.organizationName || null,
        organizationType: data.organizationType || null,
        description: data.description || null,
        website: data.website || null,
        logoUrl: data.logoUrl || null,
        
        // Stats
        establishedYear: data.establishedYear || null,
        teamSize: data.teamSize || null,
        previousHackathons: data.previousHackathons || null,
        
        // Skills
        requiredSkills: requiredSkills,
        
        // Social Links
        linkedin: data.linkedin || null,
        twitter: data.twitter || null,
        github: data.github || null,
        facebook: data.facebook || null,
        instagram: data.instagram || null,
      };
      
      const newOrganizer = await prisma.organizer.create({
        data: organizerData,
      });
      
      console.log("Created organizer:", newOrganizer);
      
      return new Response(JSON.stringify({ error: null, data: newOrganizer }), {
        status: 201,
        headers: { "Content-Type": "application/json" }
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
      return new Response(JSON.stringify({ 
        error: dbError instanceof Error ? dbError.message : "Database error", 
        data: null 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Request processing error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage, data: null }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

// Get all organizers
export async function GET(request: NextRequest) {
  try {
    const organizers = await prisma.organizer.findMany({
      orderBy: { createdAt: "desc" },
    });

    return new Response(JSON.stringify({ data: organizers, error: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching organizers:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch organizers";
    return new Response(JSON.stringify({ error: errorMessage, data: null }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}