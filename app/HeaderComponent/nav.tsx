import Link from "next/link";

function Nav() {

    return (
        <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
                <Link href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Trang chủ</Link>
            </li>
            <li className="flex">
                <Link href="/san-pham" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Sản phẩm</Link>
            </li>
            <li className="flex">
                <Link href="/tin-tuc" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Tin tức</Link>
            </li>
            <li className="flex">
                <Link href="/lien-he" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Liên hệ</Link>
            </li>
            <li className="flex">
                <Link href="/ve-chung-toi" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Về chúng tôi</Link>
            </li>
        </ul>
    )
}
export default Nav;