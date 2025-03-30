import NavbarItem from "./NavbarItem";

const navItems = ["home", "about", "projects"];

export default function Header() {
    return (
        <header id="navbar" className="py-4 px-4 fixed h-fit z-10 inset-0 bg-[#242423] lg:px-8 lg:sticky lg:top-0 lg:bottom-auto lg:flex lg:justify-between lg:items-center 2xl:px-20">
            <h1 className="text-3xl font-[600] font-(family-name:--font-permMarker)">Mg.</h1>
            <nav>
                <ul className="flex justify-between items-center gap-10">
                    {navItems.map(item => <NavbarItem nav={item} />)}
                </ul>
            </nav>
        </header>
    );
};