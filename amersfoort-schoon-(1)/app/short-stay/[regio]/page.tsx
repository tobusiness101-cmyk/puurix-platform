import { createRegioPage } from "@/lib/createRegioPage";

const { generateStaticParams, generateMetadata, Component } = createRegioPage({
  serviceName: "Short-stay Schoonmaak",
    basePath: "short-stay",
});

export { generateStaticParams, generateMetadata };
export default Component;