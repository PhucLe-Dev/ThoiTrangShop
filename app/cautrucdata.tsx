interface OneProd {
    _id: string,
    id: number,
    ten_sp: string,
    slug: string,
    id_loại: number,
    id_brand: number,
    sku: string,
    mo_ta: string,
    hinh: string,
    gia: number,
    gia_km: number,
    an_hien: boolean,
    luot_xem: number,
    van_chuyen: number,
    danh_gia: number,
    so_luong: number,
    sold: number,
    tags: string,
    created_at: string,
    updated_at: string,
    ten_brand?: string; // Thêm ten_brand
}

interface OneCate {
    _id: string,
    id: number,
    ten_loai: string,
    slug: string,
    hinh: string,
    thu_tu: number,
    an_hien: boolean,
    created_at: string,
    updated_at: string,
}

interface OneBrand {
    _id: string,
    id: number,
    ten_brand: string,
    slug: string,
    hinh: string,
    thu_tu: number,
    an_hien: boolean,
    created_at: string,
    updated_at: string,
}

interface OneBlog {
    _id: string,
    id: number,
    id_loai_tin: number,
    ten_tin: string,
    slug: string,
    noi_dung: string,
    mo_ta: string,
    hinh: string,
    thu_tu: number,
    luot_xem: number,
    an_hien: boolean,
    created_at: string,
    updated_at: string,
}

interface OneCateBlog {
    _id: string,
    id: number,
    ten_loai: string,
    slug: string,
    thu_tu: number,
    an_hien: boolean,
    created_at: string,
    updated_at: string,
}

export type { OneProd, OneCate, OneBrand, OneBlog, OneCateBlog };