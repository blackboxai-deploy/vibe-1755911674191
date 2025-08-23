'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Issue 1: Interface with conflicting types
interface Props {
  title: string;
  count: number;
  count: string; // Duplicate property with different type
}

// Issue 2: Component with wrong props type
const BrokenComponent: React.FC<Props> = ({ title, count, isVisible }) => {
  // Issue 3: State with wrong initial type
  const [items, setItems] = useState<string[]>(42); // Number instead of array
  
  // Issue 4: Function with type mismatch
  const handleClick = (value: number): string => {
    setItems([...items, value]); // Adding number to string array
    return value; // Returning number instead of string
  };

  // Issue 5: Conditional rendering with wrong type check
  if (typeof count !== 'boolean') {
    return null;
  }

  // Issue 6: Missing return statement in some branches
  const renderContent = () => {
    if (title) {
      return <div>{title}</div>;
    }
    // Missing return for else case
  };

  // Issue 7: JSX with unclosed tags and wrong prop types
  return (
    <div className="p-4">
      <h2 className={title}>{count}</h2>
      <Button onClick={() => handleClick('not a number')}>
        Click me
      </Button>
      
      {/* Issue 8: Map without key and wrong data type */}
      {items.map((item) => 
        <div>{item.toUpperCase()}</div> // No key prop, and item might be number
      )}
      
      {renderContent()}
      
      {/* Issue 9: Conditional with undefined variable */}
      {someUndefinedVar && (
        <p>This won't work</p>
      )}
    </div>
  );
};

// Issue 10: Missing export
// export default BrokenComponent;