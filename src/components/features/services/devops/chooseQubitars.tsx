import { SectionHeading } from "@/components/shared/headings";
import { combine, styles } from "@/styles/style";
import Image from "next/image";
import { chooseQubitarsData } from "@/data/devops/realtion-with-others";

const ChooseQubitars = () => {
    const ContentCard = ({ title, description }: { title: string; description: string }) => (
        <div>
            <h3 className={combine(styles.h3, "font-semibold mb-4 text-blue")}>{title}</h3>
            <p className="text-blue text-xl text-inter">{description}</p>
        </div>
    );

    const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
        <Image src={src} alt={alt} width={600} height={400} className="rounded-lg" />
    );

    return (
        <section className={combine(styles.sectionPadding,styles.sectionPaddingY)}>
            <SectionHeading title="DevOps Enabling Business Agility" subtitle="Why Choose Us" />

            <div className="flex flex-col gap-16">
                {chooseQubitarsData.map((item, index) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {index % 2 === 0 ? (
                            <>
                                <ContentCard title={item.title} description={item.description} />
                                <ImageCard src={item.image} alt={item.title} />
                            </>
                        ) : (
                            <>
                                <ImageCard src={item.image} alt={item.title} />
                                <ContentCard title={item.title} description={item.description} />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChooseQubitars;