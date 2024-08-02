"use client";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="bg-[url('../public/images/bg.jpg')] bg-no-repeat bg-cover bg-gray-50">
      <div className="custom-bg-navy min-h-screen flex align-middle items-center">
        <div className="container mx-auto max-w-96 py-12 px-10"
          style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
        >
          <LoginForm />
        </div>
      </div>
    </main>
  
  );
}
