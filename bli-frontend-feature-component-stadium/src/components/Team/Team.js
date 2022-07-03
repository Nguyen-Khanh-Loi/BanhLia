import React, { Component } from "react";
import './Team.scss';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameteam: 'Manchester United',
            profileImg: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png',
        }
    }
    imageHandler = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }
    render() {
        return (
            <div className="page">
                <div className="logo-team">
                    <h2 className="heading">{this.state.nameteam}</h2>
                    <div className="img-holder">
                        <img src={this.state.profileImg} alt='' id='img' className="img" />
                    </div>
                    <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler} />
                    <div className="label">
                        <label htmlFor="input" className="image-upload">
                            <i className="fa-solid fa-file-image file-image"></i>
                            Choose your photo
                        </label>
                    </div>
                </div>
                <div className="list-team">
                    <h1> Danh sách thành viên</h1>
                    <div className="tablelist mt-5">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ Tên</th>
                                    <th>Ngày sinh</th>
                                    <th>Địa chỉ</th>
                                    <th>Vị trí</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Thái Phúc Nhân </td>
                                    <td>12/11/1999</td>
                                    <td>Phong Điền-TTHuế</td>
                                    <td>Tiền vệ</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>2</td>
                                    <td>Hoàng Đình Ánh </td>
                                    <td>12/11/1999</td>
                                    <td>Hương Trà-TTHuế</td>
                                    <td>Thủ môn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Team;