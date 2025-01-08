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
  };
  geometry: {
    type: "MultiPoint";
    coordinates: [number, number][]; // Array of coordinate pairs
  };
};