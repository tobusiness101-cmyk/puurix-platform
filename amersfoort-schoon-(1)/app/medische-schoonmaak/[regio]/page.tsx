import { createRegioPage } from "@/lib/createRegioPage";

const { generateStaticParams, generateMetadata, Component } = createRegioPage({
  serviceName: "Medische & Praktijkschoonmaak",
   basePath: "medische-schoonmaak",
   basePath: "medische-schoonmaak",
});

export { generateStaticParams, generateMetadata };
export default Component;
