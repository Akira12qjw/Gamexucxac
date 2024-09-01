const stateDefault = {
  taiXiu: true, //True: là Tài (từ 3 -> 11),false là xỉu (>12)
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BtXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      // Trả về một object mới với taiXiu được cập nhật
      return {
        ...state,
        taiXiu: action.taiXiu,
      };
    }
    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;

        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./img/${soNgauNhien}.png`,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);

      let soBanThangMoi = state.soBanThang;
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        soBanThangMoi += 1;
      }
      return {
        ...state,
        mangXucXac: mangXucXacNgauNhien,
        tongSoBanChoi: state.tongSoBanChoi + 1,
        soBanThang: soBanThangMoi,
      };
    }
    default:
      return state; // Không cần spread operator ở đây nếu không có thay đổi
  }
};

export default BtXucXacReducer;
