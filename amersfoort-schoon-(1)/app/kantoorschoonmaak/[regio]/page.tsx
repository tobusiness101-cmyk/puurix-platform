import { createRegioPage } from "@/lib/createRegioPage";

const { generateStaticParams, generateMetadata, Component } = createRegioPage({
  serviceName: "Kantoorschoonmaak",
});

export { generateStaticParams, generateMetadata };
export default Component;