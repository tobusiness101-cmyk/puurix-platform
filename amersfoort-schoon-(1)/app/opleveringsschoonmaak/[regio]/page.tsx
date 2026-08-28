import { createRegioPage } from "@/lib/createRegioPage";

const { generateStaticParams, generateMetadata, Component } = createRegioPage({
  serviceName: "Opleveringsschoonmaak",
});

export { generateStaticParams, generateMetadata };
export default Component;