import React, { Component } from "react";
//import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import MapView from "./MapView";
import './Stadium.scss';
class Stadium extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namestadium: 'Sân bóng đá MONACO',
            sdt: '0337897009',
            diachi: 'FJJ2+M47, Vỹ Dạ, Thành phố Huế, Thừa Thiên Huế'
        }
    }
    render() {
        return (
            <div>
                <div className='banner-stadium'>
                    <div className="info-stadium">
                        <h1 className="name-stadium">{this.state.namestadium}</h1>
                        <p className="mb-1"><i class="fa-map-marker-alt fas mr-2" ></i> {this.state.diachi} </p>
                        <p className="mb-2"><i class="fa-solid fa-star"></i> Chưa có đánh giá</p>
                        <p className="mb-2"><i class="fa-solid fa-triangle-exclamation"></i> Báo lỗi</p>
                    </div>
                </div>
                <div id='content-stadium' className='container-stadium'>
                    <div className="text-block">
                        <p className="subtitle text-sm text-primary pb-1">Mô tả - Thông tin kèm theo</p>
                        <div className="description">
                            <p><p>Hệ thống {this.state.namestadium}
                                <br />5 sân 5 người chuẩn Fifa 20x40
                                <br />1 sân 7 người, hệ thống đèn led siêu sáng
                                <br />Nhận cáp kèo, thuê sân tổ chức sự kiện</p></p>
                        </div>
                    </div>
                    <div className="text-block">
                        <p className="subtitle text-sm text-primary pb-1">Tiện ích</p>
                        <ul className="amenities-list list-inline">
                            <div className="amenities">
                                <li className="list-inline-item mb-3">
                                    <div className="d-flex align-items-center">
                                        <p className="icon"><i class="fa-solid fa-circle-check"></i>Không cần đặt cọc</p>
                                    </div>
                                </li>
                                <li className="list-inline-item mb-3">
                                    <div className="d-flex align-items-center">
                                        <p className="icon"><i class="fa-solid fa-circle-check"></i>Bóng dùng miễn phí</p>
                                    </div>
                                </li>
                                <li className="list-inline-item mb-3">
                                    <div className="d-flex align-items-center">
                                        <p className="icon"><i class="fa-solid fa-circle-check"></i>Nước uống miễn phí</p>
                                    </div>
                                </li>
                            </div>

                        </ul>
                    </div>
                    <div className="text-block">
                        <p className="subtitle text-sm text-primary pb-1">Bản đồ</p>
                        <div className="map-wrapper">
                            <div className="mapview" name="Sân bóng mini Thống Nhất">
                                <MapView />
                            </div>
                        </div>
                    </div>
                    <div className="text-block">
                        <p className="subtitle text-sm text-primary pb-1">Liên hệ</p>
                        <div className="media">
                            <p className="mb-3"><i class="fa-solid fa-phone-flip"></i>{this.state.sdt}</p>
                            <p className="mb-4"><i class="fa-map-marker-alt fas mr-2" ></i>{this.state.diachi}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Stadium;