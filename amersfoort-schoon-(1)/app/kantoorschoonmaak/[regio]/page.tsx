import { createRegioPage } from "@/lib/createRegioPage";

const { generateStaticParams, generateMetadata, Component } = createRegioPage({
  serviceName: "Kantoorschoonmaak",
  basePath: "kantoorschoonmaak",
});

export { generateStaticParams, generateMetadata };
export default Component;
