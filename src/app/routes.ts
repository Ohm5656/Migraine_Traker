import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Login } from "./components/screens/Login";
import { SignUp } from "./components/screens/SignUp";
import { Onboarding1 } from "./components/screens/Onboarding1";
import { Onboarding2 } from "./components/screens/Onboarding2";
import { Onboarding3 } from "./components/screens/Onboarding3";
import { Onboarding4 } from "./components/screens/Onboarding4";
import { DeviceConnection } from "./components/screens/DeviceConnection";
import { Dashboard } from "./components/screens/Dashboard";
import { TriggerAnalysis } from "./components/screens/TriggerAnalysis";
import { HistoryInsights } from "./components/screens/HistoryInsights";
import { AIChatBot } from "./components/screens/AIChatBot";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Login },
      { path: "signup", Component: SignUp },
      { path: "onboarding/1", Component: Onboarding1 },
      { path: "onboarding/2", Component: Onboarding2 },
      { path: "onboarding/3", Component: Onboarding3 },
      { path: "onboarding/4", Component: Onboarding4 },
      { path: "device", Component: DeviceConnection },
      { path: "dashboard", Component: Dashboard },
      { path: "triggers", Component: TriggerAnalysis },
      { path: "history", Component: HistoryInsights },
      { path: "ai-chat", Component: AIChatBot },
    ],
  },
]);