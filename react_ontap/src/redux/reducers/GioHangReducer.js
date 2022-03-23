//Khởi tạo giá trị ban đầu của store
const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "./img/sp_iphoneX.png",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG":
      {
        //Xử lý logic thêm giỏ hàng
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(
          (spGH) => spGH.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          gioHangCapNhat.push(action.spGioHang);
        }
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;
    case "XOA_GIO_HANG":
      {
        let gioHangCapNhat = [...state.gioHang];
        //Xoá giỏ hàng dựa vào index
        gioHangCapNhat.splice(action.index, 1);
        //Ga1n gio hang moi cho state.gioHang => render lai giao dien
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;
    case "XOA_GIO_HANG_MSP":
      {
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(
          (spGH) => spGH.maSP === action.maSP
        );
        if (index !== -1) {
          gioHangCapNhat.splice(action.index, 1);
        }
        //Ga1n gio hang moi cho state.gioHang => render lai giao dien
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;
    case "TANG_GIAM_SL":
      {
        const { index, tangGiam } = action;
        console.log(action);
        let gioHangCapNhat = [...state.gioHang];
        if (tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
          }
        }

        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;
    default: {
      return { ...state };
    }
  }
};
