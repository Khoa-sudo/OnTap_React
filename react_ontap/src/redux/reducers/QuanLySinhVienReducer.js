const stateSinhVien = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "Bành Thị Lẹm",
      soDienThoai: 909234567,
      email: "abc@gmail.com",
    },
  ],
};

export const QuanLySinhVienReducer = (state = stateSinhVien, action) => {
    console.log(action);
  return { ...state };
};
