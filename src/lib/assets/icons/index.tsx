// SVG Socail Icons - Import once
import Facebook from './SVG/facebook'
import { Instagram } from './SVG/Instagram'
import Linkedin from './SVG/Linkedin'
import Mail from './SVG/Mail'
import Whatsapp from './SVG/whatsapp'

// Folder Icons - Import once
import { AIIcon } from './AI'
import { AgentIcon } from './Agent'
import { BrowserIcon } from './Browser'
import { CustomIcon } from './Custom'
import { DesignIcon } from './Design'
import { DevelopmentIcon } from './Development'
import { GenerativeIcon } from './Generative'
import { LowCodeIcon } from './Low'
import { MobileIcon } from './Mobile'
import { MVPIcon } from './MVP'
import { SaasIcon } from './Saas'
import { WorkflowIcon } from './Workflow'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

// Main Icons Component - Access all icons through this single export
export const Icons = {
  // Socail Icons
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Whatsapp,
  // other types of Icons
  AI: AIIcon,
  Agent: AgentIcon,
  Browser: BrowserIcon,
  Custom: CustomIcon,
  Design: DesignIcon,
  Development: DevelopmentIcon,
  Generative: GenerativeIcon,
  LowCode: LowCodeIcon,
  Mobile: MobileIcon,
  MVP: MVPIcon,
  Saas: SaasIcon,
  Workflow: WorkflowIcon,
  FaFacebook,
  FaLinkedin,
  RiInstagramFill,
}

// Default export - Import this to access all icons
export default Icons

