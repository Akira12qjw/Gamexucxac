import React, { Component } from "react";
import "./BaiTapGameXucXac.css";
import XucXac from "./components/XucXac";
import ThongTinTroChoi from "./components/ThongTinTroChoi";
import { connect } from "react-redux";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          Game Xúc Xắc
        </div>

        <div className="row text-center mt-5">
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btnGame"
            >
              {" "}
              TÀI
            </button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btnGame"
            >
              {" "}
              XỈU
            </button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center">
          <ThongTinTroChoi />
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 display-4 mt-3"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      //tạo action tài xỉu
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      //Gửi lên reducer
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);
