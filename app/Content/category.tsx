"use client"
import { useState, useEffect } from "react";
import { OneCate, OneProd } from "../cautrucdata";
import Link from "next/link";
function CateShowHone() {
    const [arrCates, setArrCates] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/api/loai`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Lỗi fetch loại sản phẩm")
                }
                return res.json();
            })
            .then(data => setArrCates(data))
            .catch(err => console.log("Lỗi fetch dự liệu", err)
            )
    }, [])

    return (
        <section className="w-6/7 m-auto">
            <div className="container px-6 py-10 mx-auto">
                <div className="flex flex-col items-center animate-pulse">
                    <hr className="w-30 animate-ping"></hr>
                    <h1 className="text-3xl font-medium">Khám phá các sáng tạo độc đáo của húng tôi tại</h1>
                    <p className="mt-6 text-xl">Danh mục sản phẩm</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    {arrCates.map((cate: OneCate) =>
                        <Link href={`/loaiSP/${cate.slug}`} key={cate._id} className="flex flex-col items-center p-8">
                            <img src={cate.hinh} className="w-52 h-52 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600" />
                            <h1 className="mt-6 text-lg">{cate.ten_loai}</h1>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}
export default CateShowHone;