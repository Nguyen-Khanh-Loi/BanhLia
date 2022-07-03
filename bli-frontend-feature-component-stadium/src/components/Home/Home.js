import React, { Component } from "react";
import './Home.scss';
import HorizontalScroll from 'react-scroll-horizontal'
class Home extends Component {
    render() {
        return (
            <div className="banner-home">
                <HorizontalScroll>
                    <div className="banner-pic pic">
                        <h1>cáp kèo nhanh chóng - tìm đối thủ dễ dàng</h1>
                    </div>
                    <div className="banner-pic pic1">

                    </div>
                    <div className="banner-pic pic2">

                    </div>
                    <div className="banner-pic pic3">

                    </div>
                </HorizontalScroll>
                <div id='content' className='container'>
                    <div className="text-center pb-lg-4">
                        <h2>Tại sao lại cần Banh Lịa</h2>
                        <p className="subtitle text-secondary">Nền tảng đặt sân - tìm đối đầu tiên tại Việt Nam</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <img className="icon-image" src="https://www.sporta.vn/assets/info-b35871504f4af944c9e1f28c2419d2df5ee8fa2dcab47d650aa94d4c054eaa9a.svg" alt="" />
                                </div>
                                <h3 className="h5">Tìm kiếm và đặt sân bóng online</h3>
                                <p className="text-muted">Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <img className="icon-image" src="https://www.sporta.vn/assets/book-d9bc1eefa8ffc1c1a130292a3714a9565f07b44eda536fe02456b2a55ba5af1b.svg" alt="" />
                                </div>
                                <h3 className="h5">Công cụ quản lý đội bóng online</h3>
                                <p className="text-muted">Quản lý đội bóng đơn giản, tiếp nhận thành viên online dễ dàng, lấp đầy đội trống</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0 text-center">
                            <div className="px-0 px-lg-3">
                                <div className="icon-rounded bg-primary-light mb-3">
                                    <img className="icon-image" src="https://www.sporta.vn/assets/pr-5099167e7f25e00100225c9db1dbd0fb96c51c1dd95fd7e2e9f90d5a3186c985.svg" alt="" />
                                </div>
                                <h3 className="h5">Tạo đội, tìm đối thủ dễ với Website</h3>
                                <p className="text-muted">Tìm đối thủ chuẩn xác, không chơi xấu và lệch trình nhiều</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Home;