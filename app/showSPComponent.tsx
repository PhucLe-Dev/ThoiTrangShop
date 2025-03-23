"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { OneProd } from "./cautrucdata";
import { CiAlarmOn, CiShoppingCart } from "react-icons/ci";

function ShowSP({ sp }: { sp: OneProd }) {
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
        <Link href={`/sp/${sp.slug}`} className="w-full max-w-sm overflow-hidden bg-white dark:bg-gray-800 border border-[#dfdfdf] transition-transform duration-300 hover:-translate-y-1">
            <img className="object-cover object-center w-full h-56" src={sp.hinh} alt="" />

            <div className="flex items-center px-4 py-3 bg-gray-900">
                <h1 className="clamp-2 text-base font-medium text-white">{sp.ten_sp}</h1>
            </div>

            <div className="px-4 py-4">
                {sp.gia_km > 0 ? (
                    <>
                        <span className="text-white text-xl mr-3">
                            {sp.gia_km.toLocaleString('vi-VN')}₫
                        </span>
                        <span className="text-gray-400 text-sm line-through">
                            {sp.gia.toLocaleString('vi-VN')}₫
                        </span>
                    </>
                ) : (
                    <span></span>
                )}
                {
                    sp.gia_km <= 0 && (
                        <span className="text-white text-xl mr-3">{sp.gia.toLocaleString('vi-VN') + '₫'}</span>
                    )
                }

                <div className="flex justify-between items-center mt-4 text-gray-700 dark:text-gray-200">
                    <h1 className="text-xs">{formatNumber(sp.danh_gia)} Đánh Giá</h1>
                    <h1 className="text-xs">{formatNumber(sp.luot_xem)} Lượt xem</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <h1 className="text-sm">Thương hiệu: {sp.ten_brand}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <CiShoppingCart />
                    <h1 className="px-2 text-sm">{formatNumber(sp.sold)} Đã bán</h1>
                </div>


                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <CiAlarmOn />
                    <h1 className="px-2 text-sm">{formatDateTime(sp.created_at)}</h1>
                </div>
            </div>
        </Link>
    )
}
export default ShowSP;