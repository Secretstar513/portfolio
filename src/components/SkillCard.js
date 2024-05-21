import React from 'react';
import './SkillCardStyle.css';
import {
  SiVisualstudiocode,
  SiReact,
  SiFigma,
  SiTypescript,
  SiRedux,
  SiMaterialui,
  SiSass,
  SiGithub,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiGraphql,
  SiMongodb,
  SiAwsamplify,
  SiGooglecloud,
  SiAzuredevops,
  SiLinux,
} from 'react-icons/si';
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandHtml5,
  TbCSharp,
  TbBrandPhp,
  TbBrandPython,
  TbBrandAngular,
  TbBrandReactNative,
  TbBrandVue,
  TbBrandNuxt,
  TbBrandBootstrap,
  TbBrandDocker,
  TbBrandTailwind,
} from 'react-icons/tb';
import { IoLogoWindows } from 'react-icons/io';

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title="HTML 5">
              <TbBrandHtml5 className="techLogo" />
            </abbr>
            <abbr title="Css3">
              <TbBrandCss3 className="techLogo" />
            </abbr>
            <abbr title="JavaScript">
              <TbBrandJavascript className="techLogo" />
            </abbr>
            <abbr title="TypeScript">
              <SiTypescript className="techLogo" />
            </abbr>
            <abbr title="PHP">
              <TbBrandPhp className="techLogo" />
            </abbr>
            <abbr title="CSharp">
              <TbCSharp className="techLogo" />
            </abbr>
            <abbr title="Python">
              <TbBrandPython className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title="React">
              <SiReact className="techLogo" />
            </abbr>
            <abbr title="Angular">
              <TbBrandAngular className="techLogo" />
            </abbr>
            <abbr title="Vue">
              <TbBrandVue className="techLogo" />
            </abbr>
            <abbr title="React Native">
              <TbBrandReactNative className="techLogo" />
            </abbr>
            <abbr title="Redux">
              <SiRedux className="techLogo" />
            </abbr>
            <abbr title="Nuxt">
              <TbBrandNuxt className="techLogo" />
            </abbr>
            <abbr title="Bootstrap">
              <TbBrandBootstrap className="techLogo" />
            </abbr>
          </div>
          <div className="skillset">
            <abbr title="MUI">
              <SiMaterialui className="techLogo" />
            </abbr>
            <abbr title="TailwindCSS">
              <TbBrandTailwind className="techLogo" />
            </abbr>
            <abbr title="Sass">
              <SiSass className="techLogo" />
            </abbr>
            <abbr title="Github">
              <SiGithub className="techLogo" />
            </abbr>
            <abbr title="Express">
              <SiExpress className="techLogo" />
            </abbr>
            <abbr title="Laravel">
              <SiLaravel className="techLogo" />
            </abbr>
            <abbr title="MySQL">
              <SiMysql className="techLogo" />
            </abbr>
            <abbr title="GraphQL">
              <SiGraphql className="techLogo" />
            </abbr>
            <abbr title="MongoDB">
              <SiMongodb className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Cloud Development & DevOps</h2>
          <div className="skillset">
            <abbr title="Docker">
              <TbBrandDocker className="techLogo" />
            </abbr>
            <abbr title="Aws Amplify">
              <SiAwsamplify className="techLogo" />
            </abbr>
            <abbr title="Google Cloud">
              <SiGooglecloud className="techLogo" />
            </abbr>
            <abbr title="Azure Devops">
              <SiAzuredevops className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
            <abbr title="Visual Studio Code">
              <SiVisualstudiocode className="techLogo" />
            </abbr>
            <abbr title="Windows">
              <IoLogoWindows className="techLogo" />
            </abbr>
            <abbr title="Linux">
              <SiLinux className="techLogo" />
            </abbr>
            <abbr title="Figma">
              <SiFigma className="techLogo" />
            </abbr>
          </div>
        </div>
      </div>
    </>
  );
}
