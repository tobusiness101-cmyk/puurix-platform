import { createRegioPage } from "@/lib/createRegioPage";

const { generateStaticParams, generateMetadata, Component } = createRegioPage({
  serviceName: "Medische & Praktijkschoonmaak",
});

export { generateStaticParams, generateMetadata };
export default Component;