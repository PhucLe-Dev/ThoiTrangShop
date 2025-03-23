"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { OneBlog } from "./cautrucdata";
import { CiAlarmOn, CiRead, CiShoppingCart } from "react-icons/ci";

function ShowTinBox2({ tin }: { tin: OneBlog }) {
    // Tạo form cho lượt xem, đánh giá và lượt bán
    const formatNumber = (number: any) => {
        if (number >= 1000) {
            // Chia cho 1000, làm tròn đến 1 chữ số thập phân, thay dấu chấm thành dấu phẩy
            const formatted = (number / 1000).toFixed(1).replace('.', ',');
            // Nếu số thập phân là 0 (ví dụ: 3.0), bỏ phần thập phân
            return formatted.endsWith(',0') ? `${formatted.slice(0, -2)}K` : `${formatted}K`;
        }
        return number.toString(); // Nếu nhỏ hơn 1000, giữ nguyên
    };
    //   Tạo form cho ngày tạo sản phẩm
    const formatDateTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };
    return (
        <Link href={tin.slug} className="border border-[#dfdfdf] max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full h-44 dark:bg-gray-500" src={tin.hinh} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{tin.ten_tin}</h3>
                <span className="flex items-center text-xs dark:text-gray-600"><CiAlarmOn className="mr-2" /> {formatDateTime(tin.updated_at)}</span>
                <span className="flex items-center text-xs dark:text-gray-600"><CiRead className="mr-2" /> {formatNumber(tin.luot_xem)}</span>
                <p>{tin.mo_ta}</p>
            </div>
        </Link>
    )
}
export default ShowTinBox2;