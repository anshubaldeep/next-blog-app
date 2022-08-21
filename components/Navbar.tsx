import Link from "../node_modules/next/link";


const Navbar = ({}) => {
    const user = true;
    const userName = true;    
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">Home</button>
                    </Link>
                </li>
                {
                    userName && (
                        <>
                        <li className="push-left ">
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${userName}`}>
                                <img src={user?.photo_url} alt={user.name} />
                            </Link>
                        </li>
                        </>
                    )
                }
                {
                    !userName && (
                        <li>
                            <Link href="/enter">
                                <button className="btn-blue">Login</button>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default Navbar;