import { Fragment } from "react";
import { HeroSection, ProductRoadmap, MvpDelivery, ChooseQubitars, Banner, Slider } from "@/components/features/services/product-Design";
const ProductDesign = () => {
    return (
        <Fragment>
            <HeroSection />
            <Slider />
            <MvpDelivery />
            <ProductRoadmap />
            <ChooseQubitars />
            {/* <Banner /> */}
        </Fragment>
    )
}
export default ProductDesign