import { createRegioPage } from "@/lib/createRegioPage";

const { generateStaticParams, generateMetadata, Component } = createRegioPage({
  serviceName: "Short-stay Schoonmaak",
});

export { generateStaticParams, generateMetadata };
export default Component;