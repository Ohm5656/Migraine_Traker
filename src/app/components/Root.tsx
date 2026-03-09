import { Outlet, useLocation } from "react-router";
import { AIAssistant } from "./AIAssistant";

export function Root() {
  const location = useLocation();
  
  // ไม่แสดง AI Assistant ในหน้า login, signup และ onboarding
  const hideAIAssistant = [
    "/",
    "/signup",
    "/onboarding/1",
    "/onboarding/2",
    "/onboarding/3",
    "/onboarding/4",
    "/ai-chat"
  ].includes(location.pathname);
  
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0f]">
        <div className="w-full max-w-md mx-auto px-4">
          <Outlet />
        </div>
      </div>
      {!hideAIAssistant && <AIAssistant />}
    </>
  );
}