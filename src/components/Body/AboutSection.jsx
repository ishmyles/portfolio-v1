import profileImg from "../../assets/myles-glenn.jpg";

export default function AboutSection() {
    return (
        <section id="about" className="py-12 grid gap-6 md:py-18 lg:py-24">
            <div className="grid gap-6 items-center lg:grid-cols-[repeat(2,_minmax(0,_1fr))] lg:gap-12">
                <div className="grid gap-6 h-fit lg:gap-8">
                    <h2 className="text-4xl text-(--accent-blue)">A quick intro</h2>
                    <div className="grid gap-4 h-fit lg:gap-6">
                        <p>I'm Myles, a full-stack developer from Melbourne.</p>
                        <p>Highly motivated & passionate about the web and technology, I love experimenting with tech and building new apps/services.</p>
                        <p>I am obsessed with the process of solving problems, which I try to develop by continuing to learn new technologies, concepts & methodologies in the everchanging world of tech.</p>
                    </div>
                </div>
                <div class="grid justify-center lg:justify-end">
                    <img class="max-h-[500px] object-cover grayscale rounded-md" src={profileImg} alt="" loading="lazy" />
                </div>
            </div>
        </section>
    );
};