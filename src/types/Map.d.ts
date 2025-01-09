interface Feature {
  type: "Feature";
  properties: {
    gid: number;
    name: string;
    kategori: string;
    deskripsi: string;
    district: string;
    provinsi: string;
    status: 1 | 0;
    shape_leng: number,
    shape_area: number
  };
};