"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { OneBrand, OneProd } from "../cautrucdata";
import ShowSP from "../showSPComponent";

function SpBanChayHome() {
    const [arrSpBanChay, setArrSpBanChay] = useState<OneProd[]>([]);
    const [arrBrands, setArrBrands] = useState<OneBrand[]>([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchProducts = fetch(`http://localhost:3000/api/sp_ban_chay`).then(res => {
        if (!res.ok) {
          throw new Error("Lỗi fetch sản phẩm");
        }
        return res.json();
      });
  
      const fetchBrands = fetch(`http://localhost:3000/api/thuong_hieu`).then(res => {
        if (!res.ok) {
          throw new Error("Lỗi fetch thương hiệu");
        }
        return res.json();
      });
  
      // Chờ cả hai request hoàn thành
      Promise.all([fetchProducts, fetchBrands])
        .then(([productsData, brandsData]) => {
          setArrSpBanChay(productsData);
          setArrBrands(brandsData);
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
    const getBrandName = (id_brand: number) => {
      const brand = arrBrands.find(b => b.id === id_brand);
      return brand ? brand.ten_brand : "Không xác định";
    };
  
    return (
      <section className="w-6/7 m-auto">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex flex-col items-center animate-pulse">
            <hr className="w-30 animate-ping" />
            <p className="mt-6 text-xl">Các sản phẩm bán chạy</p>
            <h1 className="text-3xl font-medium">
              Khám phá các sản phẩm bán chạy nhất của chúng tôi
            </h1>
          </div>
  
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {arrSpBanChay.map((sp: OneProd) => (
              <ShowSP
                key={sp._id}
                sp={{ ...sp, ten_brand: getBrandName(sp.id_brand) }} // Thêm ten_brand vào sp
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default SpBanChayHome;