"use client";
import LoginForm from "@/components/LoginForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-[url('../public/images/bg.jpg')] bg-no-repeat bg-cover min-h-screen flex align-middle items-center bg-gray-50">
          <div className="container mx-auto max-w-96 py-12 px-10"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
          >
            <LoginForm />
          </div>
      </main>
    </QueryClientProvider>
  
  );
}
