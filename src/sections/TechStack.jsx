import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  Html5Outlined,
  Css3Outlined,
  JavascriptOutlined,
  PhpOutlined,
  MysqlOutlined,
  WordpressOutlined,
  TailwindcssOutlined,
  MongodbOutlined,
  ExpressjsOutlined,
  ReactOutlined,
  NodejsOutlined,
  GitOutlined,
  GithubOutlined,
  CpanelOutlined,
  CloudflareOutlined,
} from "@lineiconshq/free-icons";

const TECH_STACK_DATA = [
  { name: "HTML5", icon: Html5Outlined, color: "#E34F26" },
  { name: "CSS3", icon: Css3Outlined, color: "#1572B6" },
  { name: "JavaScript", icon: JavascriptOutlined, color: "#F7DF1E" },
  { name: "PHP", icon: PhpOutlined, color: "#777BB4" },
  { name: "MySQL", icon: MysqlOutlined, color: "#00758F" },
  { name: "WordPress", icon: WordpressOutlined, color: "#21759B" },
  { name: "TailwindCSS", icon: TailwindcssOutlined, color: "#21759B" },
  { name: "MongoDB", icon: MongodbOutlined, color: "#4DB33D" },
  { name: "ExpressJS", icon: ExpressjsOutlined, color: "#ffffff" },
  { name: "React", icon: ReactOutlined, color: "#61DAFB" },
  { name: "NodeJS", icon: NodejsOutlined, color: "#339933" },
  { name: "Git", icon: GitOutlined, color: "#F05032" },
  { name: "Github", icon: GithubOutlined, color: "#FFFFFF" },
  { name: "Hosting", icon: CpanelOutlined, color: "#F38020" },
  { name: "Performance", icon: CloudflareOutlined, color: "#F38020" },
];

export default function TechStack() {
  return (
    <section id="techStack" className="py-10 md:py-20 bg-[#0c0d0d] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-xl md:text-4xl font-bold mb-2">
            Tech Stack<span className="text-[#38d353]">:</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Technologies I've been working with recently
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {TECH_STACK_DATA.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center group text-center"
            >
              <div className="transition-transform group-hover:scale-110">
                <Lineicons icon={tech.icon} size={48} color={tech.color} />
              </div>
              <span className="mt-3 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
