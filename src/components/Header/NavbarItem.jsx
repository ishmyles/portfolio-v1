export default function NavbarItem({ nav }) {
    return (<li><a href={"#" + nav} className="font-(family-name:--font-nunito) uppercase font-light hover:text-(--accent-blue)">{nav}</a></li>);
};