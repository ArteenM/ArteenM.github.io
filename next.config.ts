import { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // To avoid Next.js optimizations that could break the export
  }
};

export default config;