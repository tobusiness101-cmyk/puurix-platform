import { createRegioPage } from "@/lib/createRegioPage";
export const { generateStaticParams, generateMetadata, default: Page } = createRegioPage({ serviceName: "Praktijkschoonmaak" });