import prisma from "@/lib/prisma";
import { BuilderCreateProps } from "@/types/types";
import { NextRequest } from "next/server";

// Create Builder
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const data = await request.json() as BuilderCreateProps;
    console.log("Received builder data:", data);
    
    // Validate data
    if (!data || typeof data !== 'object') {
      return new Response(JSON.stringify({ error: "Invalid request data", data: null }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Make sure array fields are properly handled
    // If they're not provided or not arrays, initialize them as empty arrays
    const skills = Array.isArray(data.skills) ? data.skills : [];
    const interests = Array.isArray(data.interests) ? data.interests : [];

    try {
      // Check for existing builder with same email
      let existingBuilder = null;
      if (data.email) {
        existingBuilder = await prisma.builder.findUnique({
          where: { email: data.email },
        });
        console.log("Existing builder check:", existingBuilder);

        if (existingBuilder) {
          return new Response(JSON.stringify({ error: "Builder with this email already exists", data: null }), {
            status: 409,
            headers: { "Content-Type": "application/json" }
          });
        }
      }

      // Create the builder with properly formatted data
      const builderData = {
        // Required fields by Prisma schema
        name: data.name || null,
        email: data.email || null,
        phone: data.phone || null,
        
        // Optional fields
        avatarUrl: data.avatarUrl || null,
        bio: data.bio || null,
        gender: data.gender || null,
        tShirtSize: data.tShirtSize || null,
        
        // Education
        institution: data.institution || null,
        degree: data.degree || null,
        fieldOfStudy: data.fieldOfStudy || null,
        graduationYear: data.graduationYear || null,
        
        // Skills & Experience
        skills: skills,
        experience: data.experience || null,
        resumeUrl: data.resumeUrl || null,
        portfolioUrl: data.portfolioUrl || null,
        
        // Social Links
        github: data.github || null,
        linkedin: data.linkedin || null,
        twitter: data.twitter || null,
        website: data.website || null,
        
        // Additional Info
        interests: interests,
        dietaryRestrictions: data.dietaryRestrictions || null,
        
        // Emergency Contact
        emergencyContactName: data.emergencyContactName || null,
        emergencyContactRelation: data.emergencyContactRelation || null,
        emergencyContactPhone: data.emergencyContactPhone || null,
      };
      
      const newBuilder = await prisma.builder.create({
        data: builderData,
      });
      
      console.log("Created builder:", newBuilder);
      
      return new Response(JSON.stringify({ error: null, data: newBuilder }), {
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

// Get all builders
export async function GET(request: NextRequest) {
  try {
    const builders = await prisma.builder.findMany({
      orderBy: { createdAt: "desc" },
    });

    return new Response(JSON.stringify({ data: builders, error: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching builders:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch builders";
    return new Response(JSON.stringify({ error: errorMessage, data: null }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}