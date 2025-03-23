import Link from "next/link";

function Banner() {
    return (
        <Link href="">
            <div className="bg-[url(https://vn.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2025/central/collections/red/Women_Red_WW_HP_Push_250319_DI3.jpg?wid=1440)] 
            // bg-cover bg-center h-[515px] cursor-pointer flex flex-col items-center justify-end">
                <p className="text-white font-normal text-xl">Dành cho nữ</p>
                <h1 className="text-white font-medium text-4xl my-5">Chương 2 của bộ siêu tập Louis vuitton X Murakami</h1>
                <Link href="" className="text-white font-medium text-xl mb-10 underline hover:decoration-1">Khám phá thêm</Link>
            </div>
        </Link>
    )
}
export default Banner;