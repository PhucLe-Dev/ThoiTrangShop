"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { OneBlog, OneCateBlog } from "../cautrucdata";
import ShowTinBox2 from "../showTinBox2Component";
import ShowTinBox1 from "../showTinBox1Component";

function TinTucHome() {
  const [arrTinNews, setArrTinNews] = useState<OneBlog[]>([]);
  const [arrTinViewCao, setArrTinViewCao] = useState<OneBlog[]>([]);
  const [arrLoaiTin, setArrLoaiTin] = useState<OneCateBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTinMoi = fetch(`http://localhost:3000/api/tin_moi`).then(res => {
      if (!res.ok) {
        throw new Error("Lỗi fetch tin mới");
      }
      return res.json();
    });

    const fetchTinViewCao = fetch(`http://localhost:3000/api/tin_view_cao`).then(res => {
      if (!res.ok) {
        throw new Error("Lỗi fetch tin view cao");
      }
      return res.json();
    });

    const fetchLoaiTin = fetch(`http://localhost:3000/api/loai_tin`).then(res => {
      if (!res.ok) {
        throw new Error("Lỗi fetch loại tin");
      }
      return res.json();
    });

    // Chờ cả hai request hoàn thành
    Promise.all([fetchTinMoi, fetchTinViewCao, fetchLoaiTin])
      .then(([tinNewData, tinViewCaoData, loaiTinData]) => {
        setArrTinNews(tinNewData);
        setArrTinViewCao(tinViewCaoData);
        setArrLoaiTin(loaiTinData);
        setIsLoading(false);
      })
      .catch(err => {
        setError("Không thể tải dữ liệu");
        setIsLoading(false);
        console.log("Lỗi fetch dữ liệu:", err);
      });
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (isLoading) return <div>Đang tải...</div>;

  // Hàm tìm tên thương hiệu dựa trên id_brand
  const getLoaiTinName = (id_loai_tin: number) => {
    const LoaiTin = arrLoaiTin.find(b => b.id === id_loai_tin);
    return LoaiTin ? LoaiTin.ten_loai : "Không xác định";
  };
  return (
    <section className="">
      <div className="my-5 flex flex-col items-center animate-pulse">
        <hr className="w-30 animate-ping" />
        <p className="mt-6 text-xl">Tin tức hôm nay</p>
        <h1 className="text-3xl font-medium">
          Theo giỏi tin tức trên thị trường và thế giới
        </h1>
      </div>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {arrTinViewCao.map((tin: OneBlog) =>
          <ShowTinBox1 key={tin._id} tin={{ ...tin, ten_tin: getLoaiTinName(tin.id_loai_tin) }} />
        )}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arrTinNews.map((tin: OneBlog) =>
            <ShowTinBox2 key={tin._id} tin={{ ...tin, ten_tin: getLoaiTinName(tin.id_loai_tin) }} />
          )}
        </div>
        <div className="flex justify-center">
          <Link href="/tin-tuc" className="px-6 py-3 text-sm text-white cursor-pointer bg-[#1e2939] border border-[#1e2939] hover:bg-[#fff] hover:text-[#1e2939]">Đọc thêm</Link>
        </div>
      </div>
    </section>
  )
}

export default TinTucHome;