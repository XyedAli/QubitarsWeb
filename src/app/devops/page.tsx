import { Fragment } from "react/jsx-runtime"
import { DeliverFlow, Services, Hero,  } from "@/components/features/services/devops"
import StickyCards from "@/components/features/services/devops/StickyCards"
const Devops = () => {
    return (
        <Fragment>
            <Hero />
            <Services />
            <DeliverFlow />
            <StickyCards />
        </Fragment>
    )
}
export default Devops