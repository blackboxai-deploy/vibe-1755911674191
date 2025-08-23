import { NextResponse } from 'next/server';

// Issue 1: Import that doesn't exist
import { validateUser } from '@/lib/validation'; // This file doesn't exist

// Issue 2: Incorrect type annotation
export async function GET(): Promise<NextResponse<string>> {
  try {
    // Issue 3: Using undefined variable
    const users = await fetchUsersFromDB(); // Function not defined
    
    // Issue 4: Type mismatch - returning object but promise expects string
    return NextResponse.json({
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      ]
    });
  } catch (error) {
    // Issue 5: Error object being used incorrectly
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Issue 6: Function with wrong parameter types
export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  
  // Issue 7: Missing validation - body could be anything
  const validatedData = validateUser(body); // Function doesn't exist
  
  // Issue 8: Returning wrong type
  return 'Success'; // Should return NextResponse
}

// Issue 9: Function without export
async function DELETE() {
  // This function exists but isn't exported, so it won't work as an API route
  return NextResponse.json({ message: 'Deleted' });
}