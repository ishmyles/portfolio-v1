export default function ProjectCard({name, desc, tech, appLink, githubLink}) {
    return (
        <div className="grid gap-5 content-[start] ring-1 outline-solid ring-neutral-700 rounded-md p-4">
            <h3 className="text-xl">{name}</h3>
            <p>{desc}</p>
            <div className="flex flex-wrap gap-2">
                {tech.map(name => <span className="text-sm w-fit h-fit px-2 border border-white border-solid rounded-2xl">{name}</span>)}
            </div>
            <div className="flex justify-between">
                {appLink && <a href={appLink} target="_blank" className="flex gap-2 items-center font-(family-name:--font-electrolize) uppercase hover:text-(--accent-blue)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={30} viewBox="0 0 24 24"><title>Go to app</title><path d="M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18A2,2 0 0,0 5,20H9V18H5V8H19V18H15V20H19A2,2 0 0,0 21,18V6A2,2 0 0,0 19,4Z" /></svg> 
                    <span>Live App</span>
                </a>}
                {githubLink && <a href={githubLink} target="_blank" className="flex gap-2 items-center font-(family-name:--font-electrolize) uppercase hover:text-(--accent-blue)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={30} viewBox="0 0 24 24"><title>Go to github repo</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
                    <span>Github Repo</span>  
                </a>}
            </div>
        </div>
    );
}