
const links = [
    { title: 'Overviews', href: '#', id: 1, class: 'nav-link' },
    { title: 'Examples',  href: '#', id: 2, class: 'nav-link' },
    { title: 'Tour',      href: '#', id: 3, class: 'nav-link' },
    { title: 'Blog',      href: '#', id: 4, class: 'nav-link' },
    { title: 'Help',      href: '#', id: 5, class: 'nav-link' },
];

export default function Navigation(){
    const menuLinks = links.map(link =>
        <li key={link.id} className={link.class}>
           <a href={link.href}>{link.title}</a> 
        </li>
    );

    return(
        <ul id="nav" className='nav'>
            {menuLinks}
        </ul>
    )
}