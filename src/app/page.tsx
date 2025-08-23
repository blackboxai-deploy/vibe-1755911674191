'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Issue 1: Importing non-existent component
import { NonExistentComponent } from '@/components/NonExistentComponent';

// Issue 2: Wrong import path for a utility
import { calculateSum } from '@/utils/math-utils'; // This file doesn't exist

// Issue 3: Type error - missing interface
interface UserData {
  id: number;
  name: string;
  email: string;
}

export default function HomePage() {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Issue 4: Using undefined variable
  useEffect(() => {
    fetchUserData(); // This function is not defined
  }, []);

  // Issue 5: Type mismatch in function return
  const handleCalculation = (): string => {
    return 42; // Returns number but should return string
  };

  // Issue 6: Missing dependency in useEffect
  useEffect(() => {
    if (someVariable) { // someVariable is not defined
      setLoading(true);
    }
  }); // Missing dependency array

  // Issue 7: Async function without proper error handling
  const handleSubmit = async () => {
    const response = await fetch('/api/users');
    const result = response.json(); // Missing await
    setData(result);
  };

  // Issue 8: Invalid JSX - unclosed tag
  return (
    <div className="min-h-screen p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Build Issues Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={handleSubmit}>
              Load Data
            </Button>
            
            {/* Issue 9: Using non-existent component */}
            <NonExistentComponent />
            
            {loading && (
              <Alert>
                <AlertDescription>Loading...</AlertDescription>
              </Alert>
            )}
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {/* Issue 10: Missing closing div tag */}
            <div className="grid gap-4">
              {data.map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </CardContent>
                </Card>
              ))}
            {/* Missing closing div tag here */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}