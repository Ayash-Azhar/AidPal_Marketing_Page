// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function LoadingScreen() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading screen until the page is fully loaded
//     const timer = setTimeout(() => setIsLoading(false), 3000); // Change time as needed

//     return () => clearTimeout(timer); // Clean up timeout on unmount
//   }, []);

//   if (!isLoading) return null; // Hide the loading screen after the timeout

//   return (
//     <div
//       className="loading-screen fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all duration-300"
//       aria-hidden="true"
//     >
//       {/* Add your logo here */}
//       <Image
//         src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aidpal%20Logo-QsgJWIkx5UlmN7mVTy3oSLddmWerSR.png"
//         alt="Aidpal Logo"
//         width={120}
//         height={40}
//         className="animate-bounce"
//       />
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen until the page is fully loaded
    const timer = setTimeout(() => setIsLoading(false), 3000); // Change time as needed

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  if (!isLoading) return null; // Hide the loading screen after the timeout

  return (
    <div
      className="loading-screen fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-opacity duration-300 z-50"
      style={{ opacity: isLoading ? 1 : 0 }} // Smooth fade out
      aria-hidden="true"
    >
      {/* Add your logo here */}
      <Image
        src="/Aidpal Logo.png"
        alt="Aidpal Logo"
        width={400}
        height={120}
        className="animate-bounce"
      />
    </div>
  );
}
