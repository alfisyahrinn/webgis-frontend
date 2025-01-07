interface Feature  {
    type: "Feature";
    properties: {
      gid: number;
      name: string;
      kategori: string;
      deskripsi: string;
      district: string;
      provinsi: string;
    };
    geometry: {
      type: "MultiPoint";
      coordinates: [number, number][]; // Array of coordinate pairs
    };
  };