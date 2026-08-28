import { createRegioPage } from "@/lib/createRegioPage";

const { generateStaticParams, generateMetadata, Component } = createRegioPage({
  serviceName: "Praktijkschoonmaak",
});

export { generateStaticParams, generateMetadata };
export default Component;