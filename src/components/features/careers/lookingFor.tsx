import { styles } from "@/styles/style"
import Banner2 from "@/components/layout/banners/banner2";
import InstaFeed from "../about/instaFeed";

const LookingFor = () => {
    return (
        <section className="pb-14 md:pb-18 lg:pb-21 xl:pb-24">
            <div className={`relative overflow-hidden ${styles.sectionPaddingY } `}>
                <Banner2
                    title="Didn’t Find What You Are Looking For?"
                    buttonText="Send Your CV"
                    description="Apply anyway"
                    email="hr@qubitar.com"
                />
            </div>
            <InstaFeed />
        </section>
    )
}
export default LookingFor