'use client';

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div>

    

      <SignedOut>
        
          <SignInButton />
          <SignUpButton />
        
      </SignedOut>
      
      <SignedIn>
        
          <UserButton />
        
      </SignedIn>
    
    </div>
  );
}
