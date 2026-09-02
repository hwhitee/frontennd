// TODO: REPLACE THIS LANDING PAGE WITH AN ELEGANT, THEMATIC, AND WELL-DESIGNED LANDING PAGE RELEVANT TO THE PROJECT
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto relative px-4">
          {/* TODO: landing page goes here; replace with the landing page */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Logo"
              width={64}
              height={64}
              className="rounded-lg mb-8 mt-24"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-foreground text-center">
            <h1 className="text-2xl font-bold mb-4">Marine Ecosystem Project</h1>
            <p className="text-muted-foreground mb-8 text-sm">
              Click the button below to access the main application dashboard.
            </p>
            <a
              href="https://marine-ecosystem-project.vercel.app"
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
