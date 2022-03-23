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
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      //Thêm dữ liệu sinh viên vào mangSinhVien
      const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
      state.mangSinhVien = mangSVUpdate;
      return {...state}      
    };break;

    default: {
      return { ...state };
    }
  }
};
