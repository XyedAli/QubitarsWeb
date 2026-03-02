import { combine, styles } from "@/styles/style";
import { MdOutlineArrowOutward } from "react-icons/md";
import { getDevOpsCloudinaryImages } from "@/lib/assets/images";

const DevopsEfficiency = () => {
    const devOpsImages = getDevOpsCloudinaryImages();
    
    return (
        <section 
            className="py-15 px-10 mx-5 relative  rounded-xl"
            style={{
                backgroundImage: `url(${devOpsImages.bg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className={combine(styles.sectionPadding, "flex items-center justify-between")}>
                <div>
                    <h2 className={combine(styles.h1, "text-white max-w-lg leading-tight")}>Improve efficiency with proven DevOps practices</h2>
                    <button className="bg-white px-5 py-2 mt-12 text-blue text-lg font-bold rounded-lg flex items-center gap-2">
                         Get In Touch
                        <span className="w-8 h-8 rounded-full flex items-center justify-center bg-blue text-white"> <MdOutlineArrowOutward /></span>
                       </button>
                </div>
                <div>
                    <p className={combine(styles.h4 ,"text-white font-bold mb-5")}>100+ experts</p>
                    <p className={combine(styles.h4 ,"text-white font-bold mb-5")}>10+ years of innovation</p>
                    <p className={combine(styles.h4 ,"text-white font-bold mb-5")}>500+ clients who trust us</p>
                </div>
            </div>
        </section>
    )
}
export default DevopsEfficiency